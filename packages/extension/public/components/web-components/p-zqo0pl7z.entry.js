import {
  r as t,
  e as i,
  d as s,
  m as h,
  c as e,
  h as n,
  H as o,
  f as a
} from "./p-57e9347d.js";
import { i as r, b as d } from "./p-18f3dc7c.js";
import { GESTURE_CONTROLLER as l } from "./p-24ef4e55.js";
const c = class {
    constructor(e) {
      t(this, e),
        (this.lastOnEnd = 0),
        (this.blocker = l.createBlocker({ disableScroll: !0 })),
        (this.mode = i(this)),
        (this.isAnimating = !1),
        (this._isOpen = !1),
        (this.isPaneVisible = !1),
        (this.isEndSide = !1),
        (this.disabled = !1),
        (this.side = "start"),
        (this.swipeGesture = !0),
        (this.maxEdgeStart = 50),
        (this.ionWillOpen = s(this, "ionWillOpen", 7)),
        (this.ionWillClose = s(this, "ionWillClose", 7)),
        (this.ionDidOpen = s(this, "ionDidOpen", 7)),
        (this.ionDidClose = s(this, "ionDidClose", 7)),
        (this.ionMenuChange = s(this, "ionMenuChange", 7)),
        (this.lazyMenuCtrl = h(this, "ion-menu-controller"));
    }
    typeChanged(t, i) {
      const s = this.contentEl;
      s &&
        (void 0 !== i && s.classList.remove(`menu-content-${i}`),
        s.classList.add(`menu-content-${t}`),
        s.removeAttribute("style")),
        this.menuInnerEl && this.menuInnerEl.removeAttribute("style"),
        (this.animation = void 0);
    }
    disabledChanged() {
      this.updateState(),
        this.ionMenuChange.emit({
          disabled: this.disabled,
          open: this._isOpen
        });
    }
    sideChanged() {
      this.isEndSide = r(this.side);
    }
    swipeGestureChanged() {
      this.updateState();
    }
    async componentWillLoad() {
      void 0 === this.type &&
        (this.type = e.get(
          "menuType",
          "ios" === this.mode ? "reveal" : "overlay"
        ));
      const t = (this.menuCtrl = await this.lazyMenuCtrl
          .componentOnReady()
          .then(t => t._getInstance())),
        i = this.el.parentNode,
        s =
          void 0 !== this.contentId
            ? document.getElementById(this.contentId)
            : i && i.querySelector && i.querySelector("[main]");
      s && s.tagName
        ? ((this.contentEl = s),
          s.classList.add("menu-content"),
          this.typeChanged(this.type, void 0),
          this.sideChanged(),
          t._register(this),
          (this.gesture = (await __sc_import_web_components(
            "./p-24ef4e55.js"
          )).createGesture({
            el: document,
            gestureName: "menu-swipe",
            gesturePriority: 30,
            threshold: 10,
            canStart: t => this.canStart(t),
            onWillStart: () => this.onWillStart(),
            onStart: () => this.onStart(),
            onMove: t => this.onMove(t),
            onEnd: t => this.onEnd(t)
          })),
          this.updateState())
        : console.error(
            'Menu: must have a "content" element to listen for drag events on.'
          );
    }
    componentDidLoad() {
      this.ionMenuChange.emit({ disabled: this.disabled, open: this._isOpen });
    }
    componentDidUnload() {
      this.blocker.destroy(),
        this.menuCtrl._unregister(this),
        this.animation && this.animation.destroy(),
        this.gesture && (this.gesture.destroy(), (this.gesture = void 0)),
        (this.animation = void 0),
        (this.contentEl = this.backdropEl = this.menuInnerEl = void 0);
    }
    onSplitPaneChanged(t) {
      (this.isPaneVisible = t.detail.isPane(this.el)), this.updateState();
    }
    onBackdropClick(t) {
      this._isOpen &&
        this.lastOnEnd < t.timeStamp - 100 &&
        t.composedPath &&
        !t.composedPath().includes(this.menuInnerEl) &&
        (t.preventDefault(), t.stopPropagation(), this.close());
    }
    isOpen() {
      return Promise.resolve(this._isOpen);
    }
    isActive() {
      return Promise.resolve(this._isActive());
    }
    open(t = !0) {
      return this.setOpen(!0, t);
    }
    close(t = !0) {
      return this.setOpen(!1, t);
    }
    toggle(t = !0) {
      return this.setOpen(!this._isOpen, t);
    }
    setOpen(t, i = !0) {
      return this.menuCtrl._setOpen(this, t, i);
    }
    async _setOpen(t, i = !0) {
      return !(
        !this._isActive() ||
        this.isAnimating ||
        t === this._isOpen ||
        (this.beforeAnimation(t),
        await this.loadAnimation(),
        await this.startAnimation(t, i),
        this.afterAnimation(t),
        0)
      );
    }
    async loadAnimation() {
      const t = this.menuInnerEl.offsetWidth;
      (t === this.width && void 0 !== this.animation) ||
        ((this.width = t),
        this.animation && (this.animation.destroy(), (this.animation = void 0)),
        (this.animation = await this.menuCtrl._createAnimation(
          this.type,
          this
        )));
    }
    async startAnimation(t, i) {
      const s = this.animation.reverse(!t);
      i ? await s.playAsync() : s.playSync();
    }
    _isActive() {
      return !this.disabled && !this.isPaneVisible;
    }
    canSwipe() {
      return this.swipeGesture && !this.isAnimating && this._isActive();
    }
    canStart(t) {
      return (
        !!this.canSwipe() &&
        (!!this._isOpen ||
          (!this.menuCtrl.getOpenSync() &&
            m(window, t.currentX, this.isEndSide, this.maxEdgeStart)))
      );
    }
    onWillStart() {
      return this.beforeAnimation(!this._isOpen), this.loadAnimation();
    }
    onStart() {
      this.isAnimating && this.animation
        ? this.animation.reverse(this._isOpen).progressStart()
        : d(!1, "isAnimating has to be true");
    }
    onMove(t) {
      if (!this.isAnimating || !this.animation)
        return void d(!1, "isAnimating has to be true");
      const i = u(t.deltaX, this._isOpen, this.isEndSide);
      this.animation.progressStep(i / this.width);
    }
    onEnd(t) {
      if (!this.isAnimating || !this.animation)
        return void d(!1, "isAnimating has to be true");
      const i = this._isOpen,
        s = this.isEndSide,
        h = u(t.deltaX, i, s),
        e = this.width,
        n = h / e,
        o = t.velocityX,
        a = e / 2,
        r = o >= 0 && (o > 0.2 || t.deltaX > a),
        l = o <= 0 && (o < -0.2 || t.deltaX < -a),
        c = i ? (s ? r : l) : s ? l : r;
      let m = !i && c;
      i && !c && (m = !0);
      const p = (c ? 1 - n : n) * e;
      let b = 0;
      if (p > 5) {
        const t = p / Math.abs(o);
        b = Math.min(t, 300);
      }
      (this.lastOnEnd = t.timeStamp),
        this.animation
          .onFinish(() => this.afterAnimation(m), {
            clearExistingCallbacks: !0,
            oneTimeCallback: !0
          })
          .progressEnd(c, n, b);
    }
    beforeAnimation(t) {
      d(!this.isAnimating, "_before() should not be called while animating"),
        this.el.classList.add(p),
        this.backdropEl && this.backdropEl.classList.add(b),
        this.blocker.block(),
        (this.isAnimating = !0),
        t ? this.ionWillOpen.emit() : this.ionWillClose.emit();
    }
    afterAnimation(t) {
      d(this.isAnimating, "_before() should be called while animating"),
        (this._isOpen = t),
        (this.isAnimating = !1),
        this._isOpen || this.blocker.unblock(),
        t
          ? (this.contentEl && this.contentEl.classList.add(g),
            this.ionDidOpen.emit())
          : (this.el.classList.remove(p),
            this.contentEl && this.contentEl.classList.remove(g),
            this.backdropEl && this.backdropEl.classList.remove(b),
            this.ionDidClose.emit());
    }
    updateState() {
      const t = this._isActive();
      this.gesture && this.gesture.setDisabled(!t || !this.swipeGesture),
        !t && this._isOpen && this.forceClosing(),
        !this.disabled && this.menuCtrl && this.menuCtrl._setActiveMenu(this),
        d(!this.isAnimating, "can not be animating");
    }
    forceClosing() {
      d(this._isOpen, "menu cannot be closed"),
        (this.isAnimating = !0),
        this.animation.reverse(!0).playSync(),
        this.afterAnimation(!1);
    }
    render() {
      const {
        isEndSide: t,
        type: i,
        disabled: s,
        mode: h,
        isPaneVisible: e
      } = this;
      return n(
        o,
        {
          role: "navigation",
          class: {
            [h]: !0,
            [`menu-type-${i}`]: !0,
            "menu-enabled": !s,
            "menu-side-end": t,
            "menu-side-start": !t,
            "menu-pane-visible": e
          }
        },
        n(
          "div",
          { class: "menu-inner", ref: t => (this.menuInnerEl = t) },
          n("slot", null)
        ),
        n("ion-backdrop", {
          ref: t => (this.backdropEl = t),
          class: "menu-backdrop",
          tappable: !1,
          stopPropagation: !1
        })
      );
    }
    get el() {
      return a(this);
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
  },
  u = (t, i, s) => Math.max(0, i !== s ? -t : t),
  m = (t, i, s, h) => (s ? i >= t.innerWidth - h : i <= h),
  p = "show-menu",
  b = "show-backdrop",
  g = "menu-content-open";
export { c as ion_menu };