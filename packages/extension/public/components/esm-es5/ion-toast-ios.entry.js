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
  h,
  H as Host,
  f as getElement
} from "./core-9991b89e.js";
import {
  p as present,
  a as dismiss,
  e as eventMethod,
  i as isCancel,
  s as safeCall
} from "./overlays-6ba59a1a.js";
import { g as getClassMap, c as createColorClasses } from "./theme-955ba954.js";
import { s as sanitizeDOMString } from "./index-8d8e0c6f.js";
/**
 * iOS Toast Enter Animation
 */
var iosEnterAnimation = function(AnimationC, baseEl, position) {
  var baseAnimation = new AnimationC();
  var wrapperAnimation = new AnimationC();
  var hostEl = baseEl.host || baseEl;
  var wrapperEl = baseEl.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  var bottom = "calc(-10px - var(--ion-safe-area-bottom, 0px))";
  var top = "calc(10px + var(--ion-safe-area-top, 0px))";
  switch (position) {
    case "top":
      wrapperAnimation.fromTo("translateY", "-100%", top);
      break;
    case "middle":
      var topPosition = Math.floor(
        hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2
      );
      wrapperEl.style.top = topPosition + "px";
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
    default:
      wrapperAnimation.fromTo("translateY", "100%", bottom);
      break;
  }
  return Promise.resolve(
    baseAnimation
      .addElement(hostEl)
      .easing("cubic-bezier(.155,1.105,.295,1.12)")
      .duration(400)
      .add(wrapperAnimation)
  );
};
/**
 * iOS Toast Leave Animation
 */
var iosLeaveAnimation = function(AnimationC, baseEl, position) {
  var baseAnimation = new AnimationC();
  var wrapperAnimation = new AnimationC();
  var hostEl = baseEl.host || baseEl;
  var wrapperEl = baseEl.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  var bottom = "calc(-10px - var(--ion-safe-area-bottom, 0px))";
  var top = "calc(10px + var(--ion-safe-area-top, 0px))";
  switch (position) {
    case "top":
      wrapperAnimation.fromTo("translateY", top, "-100%");
      break;
    case "middle":
      wrapperAnimation.fromTo("opacity", 0.99, 0);
      break;
    default:
      wrapperAnimation.fromTo("translateY", bottom, "100%");
      break;
  }
  return Promise.resolve(
    baseAnimation
      .addElement(hostEl)
      .easing("cubic-bezier(.36,.66,.04,1)")
      .duration(300)
      .add(wrapperAnimation)
  );
};
/**
 * MD Toast Enter Animation
 */
var mdEnterAnimation = function(AnimationC, baseEl, position) {
  var baseAnimation = new AnimationC();
  var wrapperAnimation = new AnimationC();
  var hostEl = baseEl.host || baseEl;
  var wrapperEl = baseEl.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  var bottom = "calc(8px + var(--ion-safe-area-bottom, 0px))";
  var top = "calc(8px + var(--ion-safe-area-top, 0px))";
  switch (position) {
    case "top":
      wrapperEl.style.top = top;
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
    case "middle":
      var topPosition = Math.floor(
        hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2
      );
      wrapperEl.style.top = topPosition + "px";
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
    default:
      wrapperEl.style.bottom = bottom;
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
  }
  return Promise.resolve(
    baseAnimation
      .addElement(hostEl)
      .easing("cubic-bezier(.36,.66,.04,1)")
      .duration(400)
      .add(wrapperAnimation)
  );
};
/**
 * md Toast Leave Animation
 */
var mdLeaveAnimation = function(AnimationC, baseEl) {
  var baseAnimation = new AnimationC();
  var wrapperAnimation = new AnimationC();
  var hostEl = baseEl.host || baseEl;
  var wrapperEl = baseEl.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  wrapperAnimation.fromTo("opacity", 0.99, 0);
  return Promise.resolve(
    baseAnimation
      .addElement(hostEl)
      .easing("cubic-bezier(.36,.66,.04,1)")
      .duration(300)
      .add(wrapperAnimation)
  );
};
var Toast = /** @class */ (function() {
  function class_1(hostRef) {
    registerInstance(this, hostRef);
    this.presented = false;
    this.mode = getIonMode(this);
    /**
     * How many milliseconds to wait before hiding the toast. By default, it will show
     * until `dismiss()` is called.
     */
    this.duration = 0;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */
    this.keyboardClose = false;
    /**
     * The position of the toast on the screen.
     */
    this.position = "bottom";
    /**
     * @deprecated Use `buttons` instead. If `true`, the close button will be displayed.
     */
    this.showCloseButton = false;
    /**
     * If `true`, the toast will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */
    this.translucent = false;
    /**
     * If `true`, the toast will animate.
     */
    this.animated = true;
    this.didPresent = createEvent(this, "ionToastDidPresent", 7);
    this.willPresent = createEvent(this, "ionToastWillPresent", 7);
    this.willDismiss = createEvent(this, "ionToastWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionToastDidDismiss", 7);
  }
  /**
   * Present the toast overlay after it has been created.
   */
  class_1.prototype.present = function() {
    return __awaiter(this, void 0, void 0, function() {
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              present(
                this,
                "toastEnter",
                iosEnterAnimation,
                mdEnterAnimation,
                this.position
              )
            ];
          case 1:
            _a.sent();
            if (this.duration > 0) {
              this.durationTimeout = setTimeout(function() {
                return _this.dismiss(undefined, "timeout");
              }, this.duration);
            }
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Dismiss the toast overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the toast.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the toast.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  class_1.prototype.dismiss = function(data, role) {
    if (this.durationTimeout) {
      clearTimeout(this.durationTimeout);
    }
    return dismiss(
      this,
      data,
      role,
      "toastLeave",
      iosLeaveAnimation,
      mdLeaveAnimation,
      this.position
    );
  };
  /**
   * Returns a promise that resolves when the toast did dismiss.
   */
  class_1.prototype.onDidDismiss = function() {
    return eventMethod(this.el, "ionToastDidDismiss");
  };
  /**
   * Returns a promise that resolves when the toast will dismiss.
   */
  class_1.prototype.onWillDismiss = function() {
    return eventMethod(this.el, "ionToastWillDismiss");
  };
  class_1.prototype.getButtons = function() {
    var _this = this;
    var buttons = this.buttons
      ? this.buttons.map(function(b) {
          return typeof b === "string" ? { text: b } : b;
        })
      : [];
    // tslint:disable-next-line: deprecation
    if (this.showCloseButton) {
      buttons.push({
        // tslint:disable-next-line: deprecation
        text: this.closeButtonText || "Close",
        handler: function() {
          return _this.dismiss(undefined, "cancel");
        }
      });
    }
    return buttons;
  };
  class_1.prototype.buttonClick = function(button) {
    return __awaiter(this, void 0, void 0, function() {
      var role, shouldDismiss;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            role = button.role;
            if (isCancel(role)) {
              return [2 /*return*/, this.dismiss(undefined, role)];
            }
            return [4 /*yield*/, this.callButtonHandler(button)];
          case 1:
            shouldDismiss = _a.sent();
            if (shouldDismiss) {
              return [2 /*return*/, this.dismiss(undefined, button.role)];
            }
            return [2 /*return*/, Promise.resolve()];
        }
      });
    });
  };
  class_1.prototype.callButtonHandler = function(button) {
    return __awaiter(this, void 0, void 0, function() {
      var rtn, e_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!(button && button.handler)) return [3 /*break*/, 4];
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4 /*yield*/, safeCall(button.handler)];
          case 2:
            rtn = _a.sent();
            if (rtn === false) {
              // if the return value of the handler is false then do not dismiss
              return [2 /*return*/, false];
            }
            return [3 /*break*/, 4];
          case 3:
            e_1 = _a.sent();
            console.error(e_1);
            return [3 /*break*/, 4];
          case 4:
            return [2 /*return*/, true];
        }
      });
    });
  };
  class_1.prototype.renderButtons = function(buttons, side) {
    var _a;
    var _this = this;
    if (buttons.length === 0) {
      return;
    }
    var mode = getIonMode(this);
    var buttonGroupsClasses =
      ((_a = {
        "toast-button-group": true
      }),
      (_a["toast-button-group-" + side] = true),
      _a);
    return h(
      "div",
      { class: buttonGroupsClasses },
      buttons.map(function(b) {
        return h(
          "button",
          {
            type: "button",
            class: buttonClass(b),
            tabIndex: 0,
            onClick: function() {
              return _this.buttonClick(b);
            }
          },
          h(
            "div",
            { class: "toast-button-inner" },
            b.icon &&
              h("ion-icon", {
                icon: b.icon,
                slot: b.text === undefined ? "icon-only" : undefined,
                class: "toast-icon"
              }),
            b.text
          ),
          mode === "md" &&
            h("ion-ripple-effect", {
              type:
                b.icon !== undefined && b.text === undefined
                  ? "unbounded"
                  : "bounded"
            })
        );
      })
    );
  };
  class_1.prototype.render = function() {
    var _a, _b;
    var allButtons = this.getButtons();
    var startButtons = allButtons.filter(function(b) {
      return b.side === "start";
    });
    var endButtons = allButtons.filter(function(b) {
      return b.side !== "start";
    });
    var mode = getIonMode(this);
    var wrapperClass =
      ((_a = {
        "toast-wrapper": true
      }),
      (_a["toast-" + this.position] = true),
      _a);
    return h(
      Host,
      {
        style: {
          zIndex: "" + (60000 + this.overlayIndex)
        },
        class: Object.assign(
          ((_b = {}), (_b[mode] = true), _b),
          createColorClasses(this.color),
          getClassMap(this.cssClass),
          { "toast-translucent": this.translucent }
        )
      },
      h(
        "div",
        { class: wrapperClass },
        h(
          "div",
          { class: "toast-container" },
          this.renderButtons(startButtons, "start"),
          h(
            "div",
            { class: "toast-content" },
            this.header !== undefined &&
              h("div", { class: "toast-header" }, this.header),
            this.message !== undefined &&
              h("div", {
                class: "toast-message",
                innerHTML: sanitizeDOMString(this.message)
              })
          ),
          this.renderButtons(endButtons, "end")
        )
      )
    );
  };
  Object.defineProperty(class_1.prototype, "el", {
    get: function() {
      return getElement(this);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(class_1, "style", {
    get: function() {
      return ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50,#f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-850,#262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-middle{opacity:.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.activated{opacity:.4}@media (any-hover:hover){.toast-button:hover{opacity:.6}}";
    },
    enumerable: true,
    configurable: true
  });
  return class_1;
})();
var buttonClass = function(button) {
  var _a;
  return Object.assign(
    ((_a = {
      "toast-button": true,
      "toast-button-icon-only":
        button.icon !== undefined && button.text === undefined
    }),
    (_a["toast-button-" + button.role] = button.role !== undefined),
    (_a["ion-focusable"] = true),
    (_a["ion-activatable"] = true),
    _a),
    getClassMap(button.cssClass)
  );
};
export { Toast as ion_toast };