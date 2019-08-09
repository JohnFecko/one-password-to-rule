var __awaiter =
  (this && this.__awaiter) ||
  function(t, e, n, i) {
    return new (n || (n = Promise))(function(o, r) {
      function s(t) {
        try {
          u(i.next(t));
        } catch (t) {
          r(t);
        }
      }
      function a(t) {
        try {
          u(i["throw"](t));
        } catch (t) {
          r(t);
        }
      }
      function u(t) {
        t.done
          ? o(t.value)
          : new n(function(e) {
              e(t.value);
            }).then(s, a);
      }
      u((i = i.apply(t, e || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(t, e) {
    var n = {
        label: 0,
        sent: function() {
          if (r[0] & 1) throw r[1];
          return r[1];
        },
        trys: [],
        ops: []
      },
      i,
      o,
      r,
      s;
    return (
      (s = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol === "function" &&
        (s[Symbol.iterator] = function() {
          return this;
        }),
      s
    );
    function a(t) {
      return function(e) {
        return u([t, e]);
      };
    }
    function u(s) {
      if (i) throw new TypeError("Generator is already executing.");
      while (n)
        try {
          if (
            ((i = 1),
            o &&
              (r =
                s[0] & 2
                  ? o["return"]
                  : s[0]
                  ? o["throw"] || ((r = o["return"]) && r.call(o), 0)
                  : o.next) &&
              !(r = r.call(o, s[1])).done)
          )
            return r;
          if (((o = 0), r)) s = [s[0] & 2, r.value];
          switch (s[0]) {
            case 0:
            case 1:
              r = s;
              break;
            case 4:
              n.label++;
              return { value: s[1], done: false };
            case 5:
              n.label++;
              o = s[1];
              s = [0];
              continue;
            case 7:
              s = n.ops.pop();
              n.trys.pop();
              continue;
            default:
              if (
                !((r = n.trys), (r = r.length > 0 && r[r.length - 1])) &&
                (s[0] === 6 || s[0] === 2)
              ) {
                n = 0;
                continue;
              }
              if (s[0] === 3 && (!r || (s[1] > r[0] && s[1] < r[3]))) {
                n.label = s[1];
                break;
              }
              if (s[0] === 6 && n.label < r[1]) {
                n.label = r[1];
                r = s;
                break;
              }
              if (r && n.label < r[2]) {
                n.label = r[2];
                n.ops.push(s);
                break;
              }
              if (r[2]) n.ops.pop();
              n.trys.pop();
              continue;
          }
          s = e.call(t, n);
        } catch (t) {
          s = [6, t];
          o = 0;
        } finally {
          i = r = 0;
        }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: true };
    }
  };
System.register(
  [
    "./p-83e6ea9f.system.js",
    "./p-0958cff4.system.js",
    "./p-6a603f00.system.js",
    "./p-95d7e664.system.js"
  ],
  function(t, e) {
    "use strict";
    var n, i, o, r, s, a, u, c, l, h, f;
    return {
      setters: [
        function(t) {
          n = t.r;
          i = t.d;
          o = t.e;
          r = t.h;
          s = t.H;
          a = t.f;
        },
        function(t) {
          u = t.f;
          c = t.a;
        },
        function(t) {
          l = t.c;
          h = t.h;
        },
        function(t) {
          f = t.c;
        }
      ],
      execute: function() {
        var d = t(
          "ion_toggle",
          (function() {
            function t(t) {
              var e = this;
              n(this, t);
              this.inputId = "ion-tg-" + g++;
              this.lastDrag = 0;
              this.activated = false;
              this.name = this.inputId;
              this.checked = false;
              this.disabled = false;
              this.value = "on";
              this.onClick = function() {
                if (e.lastDrag + 300 < Date.now()) {
                  e.checked = !e.checked;
                }
              };
              this.onFocus = function() {
                e.ionFocus.emit();
              };
              this.onBlur = function() {
                e.ionBlur.emit();
              };
              this.ionChange = i(this, "ionChange", 7);
              this.ionFocus = i(this, "ionFocus", 7);
              this.ionBlur = i(this, "ionBlur", 7);
              this.ionStyle = i(this, "ionStyle", 7);
            }
            t.prototype.checkedChanged = function(t) {
              this.ionChange.emit({ checked: t, value: this.value });
            };
            t.prototype.disabledChanged = function() {
              this.emitStyle();
              if (this.gesture) {
                this.gesture.setDisabled(this.disabled);
              }
            };
            t.prototype.componentWillLoad = function() {
              this.emitStyle();
            };
            t.prototype.componentDidLoad = function() {
              return __awaiter(this, void 0, void 0, function() {
                var t;
                var n = this;
                return __generator(this, function(i) {
                  switch (i.label) {
                    case 0:
                      t = this;
                      return [4, e.import("./p-ee747906.system.js")];
                    case 1:
                      t.gesture = i.sent().createGesture({
                        el: this.el,
                        gestureName: "toggle",
                        gesturePriority: 100,
                        threshold: 5,
                        passive: false,
                        onStart: function() {
                          return n.onStart();
                        },
                        onMove: function(t) {
                          return n.onMove(t);
                        },
                        onEnd: function(t) {
                          return n.onEnd(t);
                        }
                      });
                      this.disabledChanged();
                      return [2];
                  }
                });
              });
            };
            t.prototype.componentDidUnload = function() {
              if (this.gesture) {
                this.gesture.destroy();
                this.gesture = undefined;
              }
            };
            t.prototype.emitStyle = function() {
              this.ionStyle.emit({ "interactive-disabled": this.disabled });
            };
            t.prototype.onStart = function() {
              this.activated = true;
              this.setFocus();
            };
            t.prototype.onMove = function(t) {
              if (p(document, this.checked, t.deltaX, -10)) {
                this.checked = !this.checked;
                f();
              }
            };
            t.prototype.onEnd = function(t) {
              this.activated = false;
              this.lastDrag = Date.now();
              t.event.preventDefault();
              t.event.stopImmediatePropagation();
            };
            t.prototype.getValue = function() {
              return this.value || "";
            };
            t.prototype.setFocus = function() {
              if (this.buttonEl) {
                this.buttonEl.focus();
              }
            };
            t.prototype.render = function() {
              var t;
              var e = this;
              var n = this,
                i = n.inputId,
                a = n.disabled,
                f = n.checked,
                d = n.activated,
                p = n.color,
                g = n.el;
              var b = o(this);
              var y = i + "-lbl";
              var v = u(g);
              var m = this.getValue();
              if (v) {
                v.id = y;
              }
              c(true, g, this.name, f ? m : "", a);
              return r(
                s,
                {
                  onClick: this.onClick,
                  role: "checkbox",
                  "aria-disabled": a ? "true" : null,
                  "aria-checked": "" + f,
                  "aria-labelledby": y,
                  class: Object.assign(
                    {},
                    l(p),
                    ((t = {}),
                    (t[b] = true),
                    (t["in-item"] = h("ion-item", g)),
                    (t["toggle-activated"] = d),
                    (t["toggle-checked"] = f),
                    (t["toggle-disabled"] = a),
                    (t["interactive"] = true),
                    t)
                  )
                },
                r(
                  "div",
                  { class: "toggle-icon" },
                  r("div", { class: "toggle-inner" })
                ),
                r("button", {
                  type: "button",
                  onFocus: this.onFocus,
                  onBlur: this.onBlur,
                  disabled: a,
                  ref: function(t) {
                    return (e.buttonEl = t);
                  }
                })
              );
            };
            Object.defineProperty(t.prototype, "el", {
              get: function() {
                return a(this);
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(t, "watchers", {
              get: function() {
                return {
                  checked: ["checkedChanged"],
                  disabled: ["disabledChanged"]
                };
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(t, "style", {
              get: function() {
                return ":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.088);--background-checked:var(--ion-color-primary,#3880ff);--handle-background:#fff;--handle-background-checked:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}.toggle-icon{border-radius:16px;display:block;position:relative;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background-color .3s;transition:background-color .3s;background-color:rgba(var(--ion-text-color-rgb,0,0,0),.088);overflow:hidden;pointer-events:none}.toggle-inner{left:2px;top:2px;border-radius:14px;position:absolute;width:28px;height:28px;-webkit-transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:2px}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-activated) .toggle-icon:before,:host(.toggle-checked) .toggle-icon:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 19px),0,0);transform:translate3d(calc(-1 * 19px),0,0)}:host(.toggle-activated.toggle-checked) .toggle-inner:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-activated) .toggle-inner{width:34px}:host(.toggle-activated.toggle-checked) .toggle-inner{left:-4px}:host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-inner{left:unset;right:unset;right:-4px}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:8px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:8px;padding-inline-end:8px}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}";
              },
              enumerable: true,
              configurable: true
            });
            return t;
          })()
        );
        var p = function(t, e, n, i) {
          var o = t.dir === "rtl";
          if (e) {
            return (!o && i > n) || (o && -i < n);
          } else {
            return (!o && -i < n) || (o && i > n);
          }
        };
        var g = 0;
      }
    };
  }
);
