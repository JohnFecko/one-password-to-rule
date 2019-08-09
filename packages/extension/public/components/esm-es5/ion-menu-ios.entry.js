var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
import {
  r as registerInstance,
  e as getIonMode,
  d as createEvent,
  m as getConnect,
  c as config,
  h,
  H as Host,
  f as getElement
} from "./core-9991b89e.js";
import { i as isEndSide, b as assert } from "./helpers-18f3dc7c.js";
import { GESTURE_CONTROLLER } from "./index-058b6541.js";
var Menu = /** @class */ (function() {
  function class_1(hostRef) {
    registerInstance(this, hostRef);
    this.lastOnEnd = 0;
    this.blocker = GESTURE_CONTROLLER.createBlocker({ disableScroll: true });
    this.mode = getIonMode(this);
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
    this.ionWillOpen = createEvent(this, "ionWillOpen", 7);
    this.ionWillClose = createEvent(this, "ionWillClose", 7);
    this.ionDidOpen = createEvent(this, "ionDidOpen", 7);
    this.ionDidClose = createEvent(this, "ionDidClose", 7);
    this.ionMenuChange = createEvent(this, "ionMenuChange", 7);
    this.lazyMenuCtrl = getConnect(this, "ion-menu-controller");
  }
  class_1.prototype.typeChanged = function(type, oldType) {
    var contentEl = this.contentEl;
    if (contentEl) {
      if (oldType !== undefined) {
        contentEl.classList.remove("menu-content-" + oldType);
      }
      contentEl.classList.add("menu-content-" + type);
      contentEl.removeAttribute("style");
    }
    if (this.menuInnerEl) {
      // Remove effects of previous animations
      this.menuInnerEl.removeAttribute("style");
    }
    this.animation = undefined;
  };
  class_1.prototype.disabledChanged = function() {
    this.updateState();
    this.ionMenuChange.emit({
      disabled: this.disabled,
      open: this._isOpen
    });
  };
  class_1.prototype.sideChanged = function() {
    this.isEndSide = isEndSide(this.side);
  };
  class_1.prototype.swipeGestureChanged = function() {
    this.updateState();
  };
  class_1.prototype.componentWillLoad = function() {
    return __awaiter(this, void 0, void 0, function() {
      var menuCtrl, _a, el, parent, content, _b;
      var _this = this;
      return __generator(this, function(_c) {
        switch (_c.label) {
          case 0:
            if (this.type === undefined) {
              this.type = config.get(
                "menuType",
                this.mode === "ios" ? "reveal" : "overlay"
              );
            }
            _a = this;
            return [
              4 /*yield*/,
              this.lazyMenuCtrl.componentOnReady().then(function(p) {
                return p._getInstance();
              })
            ];
          case 1:
            menuCtrl = _a.menuCtrl = _c.sent();
            el = this.el;
            parent = el.parentNode;
            content =
              this.contentId !== undefined
                ? document.getElementById(this.contentId)
                : parent &&
                  parent.querySelector &&
                  parent.querySelector("[main]");
            if (!content || !content.tagName) {
              // requires content element
              console.error(
                'Menu: must have a "content" element to listen for drag events on.'
              );
              return [2 /*return*/];
            }
            this.contentEl = content;
            // add menu's content classes
            content.classList.add("menu-content");
            this.typeChanged(this.type, undefined);
            this.sideChanged();
            // register this menu with the app's menu controller
            menuCtrl._register(this);
            _b = this;
            return [4 /*yield*/, import("./index-058b6541.js")];
          case 2:
            _b.gesture = _c.sent().createGesture({
              el: document,
              gestureName: "menu-swipe",
              gesturePriority: 30,
              threshold: 10,
              canStart: function(ev) {
                return _this.canStart(ev);
              },
              onWillStart: function() {
                return _this.onWillStart();
              },
              onStart: function() {
                return _this.onStart();
              },
              onMove: function(ev) {
                return _this.onMove(ev);
              },
              onEnd: function(ev) {
                return _this.onEnd(ev);
              }
            });
            this.updateState();
            return [2 /*return*/];
        }
      });
    });
  };
  class_1.prototype.componentDidLoad = function() {
    this.ionMenuChange.emit({ disabled: this.disabled, open: this._isOpen });
  };
  class_1.prototype.componentDidUnload = function() {
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
  };
  class_1.prototype.onSplitPaneChanged = function(ev) {
    this.isPaneVisible = ev.detail.isPane(this.el);
    this.updateState();
  };
  class_1.prototype.onBackdropClick = function(ev) {
    if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
      var shouldClose = ev.composedPath
        ? !ev.composedPath().includes(this.menuInnerEl)
        : false;
      if (shouldClose) {
        ev.preventDefault();
        ev.stopPropagation();
        this.close();
      }
    }
  };
  /**
   * Returns `true` is the menu is open.
   */
  class_1.prototype.isOpen = function() {
    return Promise.resolve(this._isOpen);
  };
  /**
   * Returns `true` is the menu is active.
   *
   * A menu is active when it can be opened or closed, meaning it's enabled
   * and it's not part of a `ion-split-pane`.
   */
  class_1.prototype.isActive = function() {
    return Promise.resolve(this._isActive());
  };
  /**
   * Opens the menu. If the menu is already open or it can't be opened,
   * it returns `false`.
   */
  class_1.prototype.open = function(animated) {
    if (animated === void 0) {
      animated = true;
    }
    return this.setOpen(true, animated);
  };
  /**
   * Closes the menu. If the menu is already closed or it can't be closed,
   * it returns `false`.
   */
  class_1.prototype.close = function(animated) {
    if (animated === void 0) {
      animated = true;
    }
    return this.setOpen(false, animated);
  };
  /**
   * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
   * If the operation can't be completed successfully, it returns `false`.
   */
  class_1.prototype.toggle = function(animated) {
    if (animated === void 0) {
      animated = true;
    }
    return this.setOpen(!this._isOpen, animated);
  };
  /**
   * Opens or closes the button.
   * If the operation can't be completed successfully, it returns `false`.
   */
  class_1.prototype.setOpen = function(shouldOpen, animated) {
    if (animated === void 0) {
      animated = true;
    }
    return this.menuCtrl._setOpen(this, shouldOpen, animated);
  };
  class_1.prototype._setOpen = function(shouldOpen, animated) {
    if (animated === void 0) {
      animated = true;
    }
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            // If the menu is disabled or it is currently being animated, let's do nothing
            if (
              !this._isActive() ||
              this.isAnimating ||
              shouldOpen === this._isOpen
            ) {
              return [2 /*return*/, false];
            }
            this.beforeAnimation(shouldOpen);
            return [4 /*yield*/, this.loadAnimation()];
          case 1:
            _a.sent();
            return [4 /*yield*/, this.startAnimation(shouldOpen, animated)];
          case 2:
            _a.sent();
            this.afterAnimation(shouldOpen);
            return [2 /*return*/, true];
        }
      });
    });
  };
  class_1.prototype.loadAnimation = function() {
    return __awaiter(this, void 0, void 0, function() {
      var width, _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            width = this.menuInnerEl.offsetWidth;
            if (width === this.width && this.animation !== undefined) {
              return [2 /*return*/];
            }
            this.width = width;
            // Destroy existing animation
            if (this.animation) {
              this.animation.destroy();
              this.animation = undefined;
            }
            // Create new animation
            _a = this;
            return [
              4 /*yield*/,
              this.menuCtrl._createAnimation(this.type, this)
            ];
          case 1:
            // Create new animation
            _a.animation = _b.sent();
            return [2 /*return*/];
        }
      });
    });
  };
  class_1.prototype.startAnimation = function(shouldOpen, animated) {
    return __awaiter(this, void 0, void 0, function() {
      var ani;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            ani = this.animation.reverse(!shouldOpen);
            if (!animated) return [3 /*break*/, 2];
            return [4 /*yield*/, ani.playAsync()];
          case 1:
            _a.sent();
            return [3 /*break*/, 3];
          case 2:
            ani.playSync();
            _a.label = 3;
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };
  class_1.prototype._isActive = function() {
    return !this.disabled && !this.isPaneVisible;
  };
  class_1.prototype.canSwipe = function() {
    return this.swipeGesture && !this.isAnimating && this._isActive();
  };
  class_1.prototype.canStart = function(detail) {
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
  };
  class_1.prototype.onWillStart = function() {
    this.beforeAnimation(!this._isOpen);
    return this.loadAnimation();
  };
  class_1.prototype.onStart = function() {
    if (!this.isAnimating || !this.animation) {
      assert(false, "isAnimating has to be true");
      return;
    }
    // the cloned animation should not use an easing curve during seek
    this.animation.reverse(this._isOpen).progressStart();
  };
  class_1.prototype.onMove = function(detail) {
    if (!this.isAnimating || !this.animation) {
      assert(false, "isAnimating has to be true");
      return;
    }
    var delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
    var stepValue = delta / this.width;
    this.animation.progressStep(stepValue);
  };
  class_1.prototype.onEnd = function(detail) {
    var _this = this;
    if (!this.isAnimating || !this.animation) {
      assert(false, "isAnimating has to be true");
      return;
    }
    var isOpen = this._isOpen;
    var isEndSide = this.isEndSide;
    var delta = computeDelta(detail.deltaX, isOpen, isEndSide);
    var width = this.width;
    var stepValue = delta / width;
    var velocity = detail.velocityX;
    var z = width / 2.0;
    var shouldCompleteRight =
      velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
    var shouldCompleteLeft =
      velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
    var shouldComplete = isOpen
      ? isEndSide
        ? shouldCompleteRight
        : shouldCompleteLeft
      : isEndSide
      ? shouldCompleteLeft
      : shouldCompleteRight;
    var shouldOpen = !isOpen && shouldComplete;
    if (isOpen && !shouldComplete) {
      shouldOpen = true;
    }
    var missing = shouldComplete ? 1 - stepValue : stepValue;
    var missingDistance = missing * width;
    var realDur = 0;
    if (missingDistance > 5) {
      var dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 300);
    }
    this.lastOnEnd = detail.timeStamp;
    this.animation
      .onFinish(
        function() {
          return _this.afterAnimation(shouldOpen);
        },
        {
          clearExistingCallbacks: true,
          oneTimeCallback: true
        }
      )
      .progressEnd(shouldComplete, stepValue, realDur);
  };
  class_1.prototype.beforeAnimation = function(shouldOpen) {
    assert(!this.isAnimating, "_before() should not be called while animating");
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
  };
  class_1.prototype.afterAnimation = function(isOpen) {
    assert(this.isAnimating, "_before() should be called while animating");
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
  };
  class_1.prototype.updateState = function() {
    var isActive = this._isActive();
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
    assert(!this.isAnimating, "can not be animating");
  };
  class_1.prototype.forceClosing = function() {
    assert(this._isOpen, "menu cannot be closed");
    this.isAnimating = true;
    var ani = this.animation.reverse(true);
    ani.playSync();
    this.afterAnimation(false);
  };
  class_1.prototype.render = function() {
    var _a;
    var _this = this;
    var _b = this,
      isEndSide = _b.isEndSide,
      type = _b.type,
      disabled = _b.disabled,
      mode = _b.mode,
      isPaneVisible = _b.isPaneVisible;
    return h(
      Host,
      {
        role: "navigation",
        class:
          ((_a = {}),
          (_a[mode] = true),
          (_a["menu-type-" + type] = true),
          (_a["menu-enabled"] = !disabled),
          (_a["menu-side-end"] = isEndSide),
          (_a["menu-side-start"] = !isEndSide),
          (_a["menu-pane-visible"] = isPaneVisible),
          _a)
      },
      h(
        "div",
        {
          class: "menu-inner",
          ref: function(el) {
            return (_this.menuInnerEl = el);
          }
        },
        h("slot", null)
      ),
      h("ion-backdrop", {
        ref: function(el) {
          return (_this.backdropEl = el);
        },
        class: "menu-backdrop",
        tappable: false,
        stopPropagation: false
      })
    );
  };
  Object.defineProperty(class_1.prototype, "el", {
    get: function() {
      return getElement(this);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(class_1, "watchers", {
    get: function() {
      return {
        type: ["typeChanged"],
        disabled: ["disabledChanged"],
        side: ["sideChanged"],
        swipeGesture: ["swipeGestureChanged"]
      };
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(class_1, "style", {
    get: function() {
      return ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:80}:host(.menu-type-push) .show-backdrop{display:block}";
    },
    enumerable: true,
    configurable: true
  });
  return class_1;
})();
var computeDelta = function(deltaX, isOpen, isEndSide) {
  return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
};
var checkEdgeSide = function(win, posX, isEndSide, maxEdgeStart) {
  if (isEndSide) {
    return posX >= win.innerWidth - maxEdgeStart;
  } else {
    return posX <= maxEdgeStart;
  }
};
var SHOW_MENU = "show-menu";
var SHOW_BACKDROP = "show-backdrop";
var MENU_CONTENT_OPEN = "menu-content-open";
export { Menu as ion_menu };