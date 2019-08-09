"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const core = require("./core-be19e9c2.js");
const helpers = require("./helpers-d1479b7a.js");
const index = require("./index-f5a6ad90.js");

const Menu = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
    this.lastOnEnd = 0;
    this.blocker = index.GESTURE_CONTROLLER.createBlocker({
      disableScroll: true
    });
    this.mode = core.getIonMode(this);
    this.isAnimating = false;
    this._isOpen = false;
    this.isPaneVisible = false;
    this.isEndSide = false;
    /**
     * If `true`, the menu is disabled.
     */
    this.disabled = false;
    /**
     * Which side of the view the menu should be placed.
     */
    this.side = "start";
    /**
     * If `true`, swiping the menu is enabled.
     */
    this.swipeGesture = true;
    /**
     * The edge threshold for dragging the menu open.
     * If a drag/swipe happens over this value, the menu is not triggered.
     */
    this.maxEdgeStart = 50;
    this.ionWillOpen = core.createEvent(this, "ionWillOpen", 7);
    this.ionWillClose = core.createEvent(this, "ionWillClose", 7);
    this.ionDidOpen = core.createEvent(this, "ionDidOpen", 7);
    this.ionDidClose = core.createEvent(this, "ionDidClose", 7);
    this.ionMenuChange = core.createEvent(this, "ionMenuChange", 7);
    this.lazyMenuCtrl = core.getConnect(this, "ion-menu-controller");
  }
  typeChanged(type, oldType) {
    const contentEl = this.contentEl;
    if (contentEl) {
      if (oldType !== undefined) {
        contentEl.classList.remove(`menu-content-${oldType}`);
      }
      contentEl.classList.add(`menu-content-${type}`);
      contentEl.removeAttribute("style");
    }
    if (this.menuInnerEl) {
      // Remove effects of previous animations
      this.menuInnerEl.removeAttribute("style");
    }
    this.animation = undefined;
  }
  disabledChanged() {
    this.updateState();
    this.ionMenuChange.emit({
      disabled: this.disabled,
      open: this._isOpen
    });
  }
  sideChanged() {
    this.isEndSide = helpers.isEndSide(this.side);
  }
  swipeGestureChanged() {
    this.updateState();
  }
  async componentWillLoad() {
    if (this.type === undefined) {
      this.type = core.config.get(
        "menuType",
        this.mode === "ios" ? "reveal" : "overlay"
      );
    }
    const menuCtrl = (this.menuCtrl = await this.lazyMenuCtrl
      .componentOnReady()
      .then(p => p._getInstance()));
    const el = this.el;
    const parent = el.parentNode;
    const content =
      this.contentId !== undefined
        ? document.getElementById(this.contentId)
        : parent && parent.querySelector && parent.querySelector("[main]");
    if (!content || !content.tagName) {
      // requires content element
      console.error(
        'Menu: must have a "content" element to listen for drag events on.'
      );
      return;
    }
    this.contentEl = content;
    // add menu's content classes
    content.classList.add("menu-content");
    this.typeChanged(this.type, undefined);
    this.sideChanged();
    // register this menu with the app's menu controller
    menuCtrl._register(this);
    this.gesture = (await new Promise(function(resolve) {
      resolve(require("./index-f5a6ad90.js"));
    })).createGesture({
      el: document,
      gestureName: "menu-swipe",
      gesturePriority: 30,
      threshold: 10,
      canStart: ev => this.canStart(ev),
      onWillStart: () => this.onWillStart(),
      onStart: () => this.onStart(),
      onMove: ev => this.onMove(ev),
      onEnd: ev => this.onEnd(ev)
    });
    this.updateState();
  }
  componentDidLoad() {
    this.ionMenuChange.emit({ disabled: this.disabled, open: this._isOpen });
  }
  componentDidUnload() {
    this.blocker.destroy();
    this.menuCtrl._unregister(this);
    if (this.animation) {
      this.animation.destroy();
    }
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
    this.animation = undefined;
    this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
  }
  onSplitPaneChanged(ev) {
    this.isPaneVisible = ev.detail.isPane(this.el);
    this.updateState();
  }
  onBackdropClick(ev) {
    if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
      const shouldClose = ev.composedPath
        ? !ev.composedPath().includes(this.menuInnerEl)
        : false;
      if (shouldClose) {
        ev.preventDefault();
        ev.stopPropagation();
        this.close();
      }
    }
  }
  /**
   * Returns `true` is the menu is open.
   */
  isOpen() {
    return Promise.resolve(this._isOpen);
  }
  /**
   * Returns `true` is the menu is active.
   *
   * A menu is active when it can be opened or closed, meaning it's enabled
   * and it's not part of a `ion-split-pane`.
   */
  isActive() {
    return Promise.resolve(this._isActive());
  }
  /**
   * Opens the menu. If the menu is already open or it can't be opened,
   * it returns `false`.
   */
  open(animated = true) {
    return this.setOpen(true, animated);
  }
  /**
   * Closes the menu. If the menu is already closed or it can't be closed,
   * it returns `false`.
   */
  close(animated = true) {
    return this.setOpen(false, animated);
  }
  /**
   * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
   * If the operation can't be completed successfully, it returns `false`.
   */
  toggle(animated = true) {
    return this.setOpen(!this._isOpen, animated);
  }
  /**
   * Opens or closes the button.
   * If the operation can't be completed successfully, it returns `false`.
   */
  setOpen(shouldOpen, animated = true) {
    return this.menuCtrl._setOpen(this, shouldOpen, animated);
  }
  async _setOpen(shouldOpen, animated = true) {
    // If the menu is disabled or it is currently being animated, let's do nothing
    if (!this._isActive() || this.isAnimating || shouldOpen === this._isOpen) {
      return false;
    }
    this.beforeAnimation(shouldOpen);
    await this.loadAnimation();
    await this.startAnimation(shouldOpen, animated);
    this.afterAnimation(shouldOpen);
    return true;
  }
  async loadAnimation() {
    // Menu swipe animation takes the menu's inner width as parameter,
    // If `offsetWidth` changes, we need to create a new animation.
    const width = this.menuInnerEl.offsetWidth;
    if (width === this.width && this.animation !== undefined) {
      return;
    }
    this.width = width;
    // Destroy existing animation
    if (this.animation) {
      this.animation.destroy();
      this.animation = undefined;
    }
    // Create new animation
    this.animation = await this.menuCtrl._createAnimation(this.type, this);
  }
  async startAnimation(shouldOpen, animated) {
    const ani = this.animation.reverse(!shouldOpen);
    if (animated) {
      await ani.playAsync();
    } else {
      ani.playSync();
    }
  }
  _isActive() {
    return !this.disabled && !this.isPaneVisible;
  }
  canSwipe() {
    return this.swipeGesture && !this.isAnimating && this._isActive();
  }
  canStart(detail) {
    if (!this.canSwipe()) {
      return false;
    }
    if (this._isOpen) {
      return true;
      // TODO error
    } else if (this.menuCtrl.getOpenSync()) {
      return false;
    }
    return checkEdgeSide(
      window,
      detail.currentX,
      this.isEndSide,
      this.maxEdgeStart
    );
  }
  onWillStart() {
    this.beforeAnimation(!this._isOpen);
    return this.loadAnimation();
  }
  onStart() {
    if (!this.isAnimating || !this.animation) {
      helpers.assert(false, "isAnimating has to be true");
      return;
    }
    // the cloned animation should not use an easing curve during seek
    this.animation.reverse(this._isOpen).progressStart();
  }
  onMove(detail) {
    if (!this.isAnimating || !this.animation) {
      helpers.assert(false, "isAnimating has to be true");
      return;
    }
    const delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
    const stepValue = delta / this.width;
    this.animation.progressStep(stepValue);
  }
  onEnd(detail) {
    if (!this.isAnimating || !this.animation) {
      helpers.assert(false, "isAnimating has to be true");
      return;
    }
    const isOpen = this._isOpen;
    const isEndSide = this.isEndSide;
    const delta = computeDelta(detail.deltaX, isOpen, isEndSide);
    const width = this.width;
    const stepValue = delta / width;
    const velocity = detail.velocityX;
    const z = width / 2.0;
    const shouldCompleteRight =
      velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
    const shouldCompleteLeft =
      velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
    const shouldComplete = isOpen
      ? isEndSide
        ? shouldCompleteRight
        : shouldCompleteLeft
      : isEndSide
      ? shouldCompleteLeft
      : shouldCompleteRight;
    let shouldOpen = !isOpen && shouldComplete;
    if (isOpen && !shouldComplete) {
      shouldOpen = true;
    }
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;
    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 300);
    }
    this.lastOnEnd = detail.timeStamp;
    this.animation
      .onFinish(() => this.afterAnimation(shouldOpen), {
        clearExistingCallbacks: true,
        oneTimeCallback: true
      })
      .progressEnd(shouldComplete, stepValue, realDur);
  }
  beforeAnimation(shouldOpen) {
    helpers.assert(
      !this.isAnimating,
      "_before() should not be called while animating"
    );
    // this places the menu into the correct location before it animates in
    // this css class doesn't actually kick off any animations
    this.el.classList.add(SHOW_MENU);
    if (this.backdropEl) {
      this.backdropEl.classList.add(SHOW_BACKDROP);
    }
    this.blocker.block();
    this.isAnimating = true;
    if (shouldOpen) {
      this.ionWillOpen.emit();
    } else {
      this.ionWillClose.emit();
    }
  }
  afterAnimation(isOpen) {
    helpers.assert(
      this.isAnimating,
      "_before() should be called while animating"
    );
    // keep opening/closing the menu disabled for a touch more yet
    // only add listeners/css if it's enabled and isOpen
    // and only remove listeners/css if it's not open
    // emit opened/closed events
    this._isOpen = isOpen;
    this.isAnimating = false;
    if (!this._isOpen) {
      this.blocker.unblock();
    }
    if (isOpen) {
      // add css class
      if (this.contentEl) {
        this.contentEl.classList.add(MENU_CONTENT_OPEN);
      }
      // emit open event
      this.ionDidOpen.emit();
    } else {
      // remove css classes
      this.el.classList.remove(SHOW_MENU);
      if (this.contentEl) {
        this.contentEl.classList.remove(MENU_CONTENT_OPEN);
      }
      if (this.backdropEl) {
        this.backdropEl.classList.remove(SHOW_BACKDROP);
      }
      // emit close event
      this.ionDidClose.emit();
    }
  }
  updateState() {
    const isActive = this._isActive();
    if (this.gesture) {
      this.gesture.setDisabled(!isActive || !this.swipeGesture);
    }
    // Close menu immediately
    if (!isActive && this._isOpen) {
      // close if this menu is open, and should not be enabled
      this.forceClosing();
    }
    if (!this.disabled && this.menuCtrl) {
      this.menuCtrl._setActiveMenu(this);
    }
    helpers.assert(!this.isAnimating, "can not be animating");
  }
  forceClosing() {
    helpers.assert(this._isOpen, "menu cannot be closed");
    this.isAnimating = true;
    const ani = this.animation.reverse(true);
    ani.playSync();
    this.afterAnimation(false);
  }
  render() {
    const { isEndSide, type, disabled, mode, isPaneVisible } = this;
    return core.h(
      core.Host,
      {
        role: "navigation",
        class: {
          [mode]: true,
          [`menu-type-${type}`]: true,
          "menu-enabled": !disabled,
          "menu-side-end": isEndSide,
          "menu-side-start": !isEndSide,
          "menu-pane-visible": isPaneVisible
        }
      },
      core.h(
        "div",
        { class: "menu-inner", ref: el => (this.menuInnerEl = el) },
        core.h("slot", null)
      ),
      core.h("ion-backdrop", {
        ref: el => (this.backdropEl = el),
        class: "menu-backdrop",
        tappable: false,
        stopPropagation: false
      })
    );
  }
  get el() {
    return core.getElement(this);
  }
  static get watchers() {
    return {
      type: ["typeChanged"],
      disabled: ["disabledChanged"],
      side: ["sideChanged"],
      swipeGesture: ["swipeGestureChanged"]
    };
  }
  static get style() {
    return ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:80}:host(.menu-type-push) .show-backdrop{display:block}";
  }
};
const computeDelta = (deltaX, isOpen, isEndSide) => {
  return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
};
const checkEdgeSide = (win, posX, isEndSide, maxEdgeStart) => {
  if (isEndSide) {
    return posX >= win.innerWidth - maxEdgeStart;
  } else {
    return posX <= maxEdgeStart;
  }
};
const SHOW_MENU = "show-menu";
const SHOW_BACKDROP = "show-backdrop";
const MENU_CONTENT_OPEN = "menu-content-open";

exports.ion_menu = Menu;
