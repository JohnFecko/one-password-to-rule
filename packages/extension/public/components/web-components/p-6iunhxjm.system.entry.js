var __awaiter =
  (this && this.__awaiter) ||
  function(e, t, n, i) {
    return new (n || (n = Promise))(function(o, a) {
      function s(e) {
        try {
          u(i.next(e));
        } catch (e) {
          a(e);
        }
      }
      function r(e) {
        try {
          u(i["throw"](e));
        } catch (e) {
          a(e);
        }
      }
      function u(e) {
        e.done
          ? o(e.value)
          : new n(function(t) {
              t(e.value);
            }).then(s, r);
      }
      u((i = i.apply(e, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(e, t) {
    var n = {
        label: 0,
        sent: function() {
          if (a[0] & 1) throw a[1];
          return a[1];
        },
        trys: [],
        ops: []
      },
      i,
      o,
      a,
      s;
    return (
      (s = { next: r(0), throw: r(1), return: r(2) }),
      typeof Symbol === "function" &&
        (s[Symbol.iterator] = function() {
          return this;
        }),
      s
    );
    function r(e) {
      return function(t) {
        return u([e, t]);
      };
    }
    function u(s) {
      if (i) throw new TypeError("Generator is already executing.");
      while (n)
        try {
          if (
            ((i = 1),
            o &&
              (a =
                s[0] & 2
                  ? o["return"]
                  : s[0]
                  ? o["throw"] || ((a = o["return"]) && a.call(o), 0)
                  : o.next) &&
              !(a = a.call(o, s[1])).done)
          )
            return a;
          if (((o = 0), a)) s = [s[0] & 2, a.value];
          switch (s[0]) {
            case 0:
            case 1:
              a = s;
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
                !((a = n.trys), (a = a.length > 0 && a[a.length - 1])) &&
                (s[0] === 6 || s[0] === 2)
              ) {
                n = 0;
                continue;
              }
              if (s[0] === 3 && (!a || (s[1] > a[0] && s[1] < a[3]))) {
                n.label = s[1];
                break;
              }
              if (s[0] === 6 && n.label < a[1]) {
                n.label = a[1];
                a = s;
                break;
              }
              if (a && n.label < a[2]) {
                n.label = a[2];
                n.ops.push(s);
                break;
              }
              if (a[2]) n.ops.pop();
              n.trys.pop();
              continue;
          }
          s = t.call(e, n);
        } catch (e) {
          s = [6, e];
          o = 0;
        } finally {
          i = a = 0;
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
    "./p-02683056.system.js"
  ],
  function(e) {
    "use strict";
    var t, n, i, o, a, s, r, u, l, c;
    return {
      setters: [
        function(e) {
          t = e.r;
          n = e.d;
          i = e.e;
          o = e.c;
          a = e.h;
          s = e.H;
          r = e.f;
        },
        function(e) {
          u = e.d;
        },
        function(e) {
          l = e.c;
        },
        function(e) {
          c = e.s;
        }
      ],
      execute: function() {
        var h = e(
          "ion_searchbar",
          (function() {
            function e(e) {
              var i = this;
              t(this, e);
              this.isCancelVisible = false;
              this.shouldAlignLeft = true;
              this.focused = false;
              this.noAnimate = true;
              this.animated = false;
              this.autocomplete = "off";
              this.autocorrect = "off";
              this.cancelButtonIcon = "md-arrow-back";
              this.cancelButtonText = "Cancel";
              this.debounce = 250;
              this.disabled = false;
              this.placeholder = "Search";
              this.searchIcon = "search";
              this.showCancelButton = "never";
              this.spellcheck = false;
              this.type = "search";
              this.value = "";
              this.onClearInput = function(e) {
                i.ionClear.emit();
                if (e) {
                  e.preventDefault();
                  e.stopPropagation();
                }
                setTimeout(function() {
                  var e = i.getValue();
                  if (e !== "") {
                    i.value = "";
                    i.ionInput.emit();
                  }
                }, 16 * 4);
              };
              this.onCancelSearchbar = function(e) {
                if (e) {
                  e.preventDefault();
                  e.stopPropagation();
                }
                i.ionCancel.emit();
                i.onClearInput();
                if (i.nativeInput) {
                  i.nativeInput.blur();
                }
              };
              this.onInput = function(e) {
                var t = e.target;
                if (t) {
                  i.value = t.value;
                }
                i.ionInput.emit(e);
              };
              this.onBlur = function() {
                i.focused = false;
                i.ionBlur.emit();
                i.positionElements();
              };
              this.onFocus = function() {
                i.focused = true;
                i.ionFocus.emit();
                i.positionElements();
              };
              this.ionInput = n(this, "ionInput", 7);
              this.ionChange = n(this, "ionChange", 7);
              this.ionCancel = n(this, "ionCancel", 7);
              this.ionClear = n(this, "ionClear", 7);
              this.ionBlur = n(this, "ionBlur", 7);
              this.ionFocus = n(this, "ionFocus", 7);
            }
            e.prototype.debounceChanged = function() {
              this.ionChange = u(this.ionChange, this.debounce);
            };
            e.prototype.valueChanged = function() {
              var e = this.nativeInput;
              var t = this.getValue();
              if (e && e.value !== t) {
                e.value = t;
              }
              this.ionChange.emit({ value: t });
            };
            e.prototype.showCancelButtonChanged = function() {
              var e = this;
              requestAnimationFrame(function() {
                e.positionElements();
                e.el.forceUpdate();
              });
            };
            e.prototype.componentDidLoad = function() {
              var e = this;
              if (
                this.showCancelButton === "false" ||
                this.showCancelButton === false
              ) {
                console.warn(
                  'The boolean values of showCancelButton are deprecated. Please use "never" instead of "false".'
                );
              }
              if (
                this.showCancelButton === "" ||
                this.showCancelButton === "true" ||
                this.showCancelButton === true
              ) {
                console.warn(
                  'The boolean values of showCancelButton are deprecated. Please use "focus" instead of "true".'
                );
              }
              this.positionElements();
              this.debounceChanged();
              setTimeout(function() {
                e.noAnimate = false;
              }, 300);
            };
            e.prototype.setFocus = function() {
              return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                  if (this.nativeInput) {
                    this.nativeInput.focus();
                  }
                  return [2];
                });
              });
            };
            e.prototype.getInputElement = function() {
              return Promise.resolve(this.nativeInput);
            };
            e.prototype.positionElements = function() {
              var e = this.getValue();
              var t = this.shouldAlignLeft;
              var n = i(this);
              var o = !this.animated || e.trim() !== "" || !!this.focused;
              this.shouldAlignLeft = o;
              if (n !== "ios") {
                return;
              }
              if (t !== o) {
                this.positionPlaceholder();
              }
              if (this.animated) {
                this.positionCancelButton();
              }
            };
            e.prototype.positionPlaceholder = function() {
              var e = this.nativeInput;
              if (!e) {
                return;
              }
              var t = document.dir === "rtl";
              var n = (this.el.shadowRoot || this.el).querySelector(
                ".searchbar-search-icon"
              );
              if (this.shouldAlignLeft) {
                e.removeAttribute("style");
                n.removeAttribute("style");
              } else {
                var i = document;
                var o = i.createElement("span");
                o.innerHTML = c(this.placeholder) || "";
                i.body.appendChild(o);
                var a = o.offsetWidth;
                o.remove();
                var s = "calc(50% - " + a / 2 + "px)";
                var r = "calc(50% - " + (a / 2 + 30) + "px)";
                if (t) {
                  e.style.paddingRight = s;
                  n.style.marginRight = r;
                } else {
                  e.style.paddingLeft = s;
                  n.style.marginLeft = r;
                }
              }
            };
            e.prototype.positionCancelButton = function() {
              var e = document.dir === "rtl";
              var t = (this.el.shadowRoot || this.el).querySelector(
                ".searchbar-cancel-button"
              );
              var n = this.shouldShowCancelButton();
              if (t && n !== this.isCancelVisible) {
                var i = t.style;
                this.isCancelVisible = n;
                if (n) {
                  if (e) {
                    i.marginLeft = "0";
                  } else {
                    i.marginRight = "0";
                  }
                } else {
                  var o = t.offsetWidth;
                  if (o > 0) {
                    if (e) {
                      i.marginLeft = -o + "px";
                    } else {
                      i.marginRight = -o + "px";
                    }
                  }
                }
              }
            };
            e.prototype.getValue = function() {
              return this.value || "";
            };
            e.prototype.hasValue = function() {
              return this.getValue() !== "";
            };
            e.prototype.shouldShowCancelButton = function() {
              if (
                f(this.showCancelButton) ||
                (p(this.showCancelButton) && !this.focused)
              ) {
                return false;
              }
              return true;
            };
            e.prototype.render = function() {
              var e;
              var t = this;
              var n = this.animated && o.getBoolean("animated", true);
              var r = i(this);
              var u =
                this.clearIcon ||
                (r === "ios" ? "ios-close-circle" : "md-close");
              var c = this.searchIcon;
              var h =
                !f(this.showCancelButton) &&
                a(
                  "button",
                  {
                    "aria-label": "cancel",
                    type: "button",
                    tabIndex:
                      r === "ios" && !this.shouldShowCancelButton()
                        ? -1
                        : undefined,
                    onMouseDown: this.onCancelSearchbar,
                    onTouchStart: this.onCancelSearchbar,
                    class: "searchbar-cancel-button"
                  },
                  a(
                    "div",
                    null,
                    r === "md"
                      ? a("ion-icon", {
                          "aria-hidden": "true",
                          mode: r,
                          icon: this.cancelButtonIcon,
                          lazy: false
                        })
                      : this.cancelButtonText
                  )
                );
              return a(
                s,
                {
                  role: "search",
                  "aria-disabled": this.disabled ? "true" : null,
                  class: Object.assign(
                    {},
                    l(this.color),
                    ((e = {}),
                    (e[r] = true),
                    (e["searchbar-animated"] = n),
                    (e["searchbar-disabled"] = this.disabled),
                    (e["searchbar-no-animate"] = n && this.noAnimate),
                    (e["searchbar-has-value"] = this.hasValue()),
                    (e["searchbar-left-aligned"] = this.shouldAlignLeft),
                    (e["searchbar-has-focus"] = this.focused),
                    (e[
                      "searchbar-should-show-cancel"
                    ] = this.shouldShowCancelButton()),
                    e)
                  )
                },
                a(
                  "div",
                  { class: "searchbar-input-container" },
                  a("input", {
                    "aria-label": "search text",
                    disabled: this.disabled,
                    ref: function(e) {
                      return (t.nativeInput = e);
                    },
                    class: "searchbar-input",
                    onInput: this.onInput,
                    onBlur: this.onBlur,
                    onFocus: this.onFocus,
                    placeholder: this.placeholder,
                    type: this.type,
                    value: this.getValue(),
                    autoComplete: this.autocomplete,
                    autoCorrect: this.autocorrect,
                    spellCheck: this.spellcheck
                  }),
                  r === "md" && h,
                  a("ion-icon", {
                    mode: r,
                    icon: c,
                    lazy: false,
                    class: "searchbar-search-icon"
                  }),
                  a(
                    "button",
                    {
                      "aria-label": "reset",
                      type: "button",
                      "no-blur": true,
                      class: "searchbar-clear-button",
                      onMouseDown: this.onClearInput,
                      onTouchStart: this.onClearInput
                    },
                    a("ion-icon", {
                      "aria-hidden": "true",
                      mode: r,
                      icon: u,
                      lazy: false,
                      class: "searchbar-clear-icon"
                    })
                  )
                ),
                r === "ios" && h
              );
            };
            Object.defineProperty(e.prototype, "el", {
              get: function() {
                return r(this);
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "watchers", {
              get: function() {
                return {
                  debounce: ["debounceChanged"],
                  value: ["valueChanged"],
                  showCancelButton: ["showCancelButtonChanged"]
                };
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "style", {
              get: function() {
                return ".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-clear, .searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios > div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:.4;pointer-events:none}.sc-ion-searchbar-ios-h{--clear-button-color:var(--ion-color-step-600,#666);--cancel-button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-text-color,#000);--icon-color:var(--ion-color-step-600,#666);--background:rgba(var(--ion-text-color-rgb,0,0,0),0.07);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;height:60px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-searchbar-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.searchbar-input-container.sc-ion-searchbar-ios{height:36px;contain:strict}.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:calc(50% - 60px);left:8px;top:0;position:absolute;width:16px;height:100%;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px)}}[dir=rtl].sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios, [dir=rtl] .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios, [dir=rtl].sc-ion-searchbar-ios .searchbar-search-icon.sc-ion-searchbar-ios{left:unset;right:unset;right:8px}.searchbar-input.sc-ion-searchbar-ios{padding-left:28px;padding-right:28px;padding-top:0;padding-bottom:0;border-radius:10px;height:100%;font-size:14px;font-weight:400;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-input.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:28px;padding-inline-start:28px;-webkit-padding-end:28px;padding-inline-end:28px}}.searchbar-clear-button.sc-ion-searchbar-ios{right:0;top:0;background-position:50%;position:absolute;width:30px;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios, [dir=rtl] .sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios, [dir=rtl].sc-ion-searchbar-ios .searchbar-clear-button.sc-ion-searchbar-ios{left:unset;right:unset;left:0}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:8px;padding-right:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:0;padding-inline-end:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:30px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:unset;-webkit-padding-start:30px;padding-inline-start:30px}}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios, .searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-transition:all .3s ease;transition:all .3s ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:-100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:all .3s ease;transition:all .3s ease;opacity:0;pointer-events:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:unset;-webkit-margin-end:-100%;margin-inline-end:-100%}}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios, .searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover:hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color), ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb),.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:.5}";
              },
              enumerable: true,
              configurable: true
            });
            return e;
          })()
        );
        var f = function(e) {
          return e === "never" || e === "false" || e === false;
        };
        var p = function(e) {
          return e === "focus" || e === "true" || e === true || e === "";
        };
      }
    };
  }
);
