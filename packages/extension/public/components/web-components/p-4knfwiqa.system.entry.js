var __awaiter =
  (this && this.__awaiter) ||
  function(e, t, n, i) {
    return new (n || (n = Promise))(function(r, s) {
      function o(e) {
        try {
          u(i.next(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        try {
          u(i["throw"](e));
        } catch (e) {
          s(e);
        }
      }
      function u(e) {
        e.done
          ? r(e.value)
          : new n(function(t) {
              t(e.value);
            }).then(o, a);
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
          if (s[0] & 1) throw s[1];
          return s[1];
        },
        trys: [],
        ops: []
      },
      i,
      r,
      s,
      o;
    return (
      (o = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol === "function" &&
        (o[Symbol.iterator] = function() {
          return this;
        }),
      o
    );
    function a(e) {
      return function(t) {
        return u([e, t]);
      };
    }
    function u(o) {
      if (i) throw new TypeError("Generator is already executing.");
      while (n)
        try {
          if (
            ((i = 1),
            r &&
              (s =
                o[0] & 2
                  ? r["return"]
                  : o[0]
                  ? r["throw"] || ((s = r["return"]) && s.call(r), 0)
                  : r.next) &&
              !(s = s.call(r, o[1])).done)
          )
            return s;
          if (((r = 0), s)) o = [o[0] & 2, s.value];
          switch (o[0]) {
            case 0:
            case 1:
              s = o;
              break;
            case 4:
              n.label++;
              return { value: o[1], done: false };
            case 5:
              n.label++;
              r = o[1];
              o = [0];
              continue;
            case 7:
              o = n.ops.pop();
              n.trys.pop();
              continue;
            default:
              if (
                !((s = n.trys), (s = s.length > 0 && s[s.length - 1])) &&
                (o[0] === 6 || o[0] === 2)
              ) {
                n = 0;
                continue;
              }
              if (o[0] === 3 && (!s || (o[1] > s[0] && o[1] < s[3]))) {
                n.label = o[1];
                break;
              }
              if (o[0] === 6 && n.label < s[1]) {
                n.label = s[1];
                s = o;
                break;
              }
              if (s && n.label < s[2]) {
                n.label = s[2];
                n.ops.push(o);
                break;
              }
              if (s[2]) n.ops.pop();
              n.trys.pop();
              continue;
          }
          o = t.call(e, n);
        } catch (e) {
          o = [6, e];
          r = 0;
        } finally {
          i = s = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: true };
    }
  };
System.register(
  [
    "./p-83e6ea9f.system.js",
    "./p-05263177.system.js",
    "./p-0958cff4.system.js",
    "./p-6a603f00.system.js"
  ],
  function(e) {
    "use strict";
    var t, n, i, r, s, o, a, u, l, c, h, p;
    return {
      setters: [
        function(e) {
          t = e.r;
          n = e.d;
          i = e.e;
          r = e.h;
          s = e.H;
          o = e.f;
        },
        function(e) {
          a = e.f;
          u = e.h;
          l = e.j;
        },
        function(e) {
          c = e.f;
          h = e.a;
        },
        function(e) {
          p = e.h;
        }
      ],
      execute: function() {
        var f = e(
          "ion_select",
          (function() {
            function e(e) {
              var i = this;
              t(this, e);
              this.childOpts = [];
              this.inputId = "ion-sel-" + g++;
              this.didInit = false;
              this.isExpanded = false;
              this.disabled = false;
              this.cancelText = "Cancel";
              this.okText = "OK";
              this.name = this.inputId;
              this.multiple = false;
              this.interface = "alert";
              this.interfaceOptions = {};
              this.onClick = function(e) {
                i.setFocus();
                i.open(e);
              };
              this.onFocus = function() {
                i.ionFocus.emit();
              };
              this.onBlur = function() {
                i.ionBlur.emit();
              };
              this.ionChange = n(this, "ionChange", 7);
              this.ionCancel = n(this, "ionCancel", 7);
              this.ionFocus = n(this, "ionFocus", 7);
              this.ionBlur = n(this, "ionBlur", 7);
              this.ionStyle = n(this, "ionStyle", 7);
            }
            e.prototype.disabledChanged = function() {
              this.emitStyle();
            };
            e.prototype.valueChanged = function() {
              if (this.didInit) {
                this.updateOptions();
                this.ionChange.emit({ value: this.value });
                this.emitStyle();
              }
            };
            e.prototype.selectOptionChanged = function() {
              return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.loadOptions()];
                    case 1:
                      e.sent();
                      if (this.didInit) {
                        this.updateOptions();
                        this.updateOverlayOptions();
                        this.emitStyle();
                        if (this.value !== undefined) {
                          this.el.forceUpdate();
                        }
                      }
                      return [2];
                  }
                });
              });
            };
            e.prototype.componentDidLoad = function() {
              return __awaiter(this, void 0, void 0, function() {
                var e, e;
                return __generator(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.loadOptions()];
                    case 1:
                      t.sent();
                      if (this.value === undefined) {
                        if (this.multiple) {
                          e = this.childOpts.filter(function(e) {
                            return e.selected;
                          });
                          this.value = e.map(function(e) {
                            return e.value;
                          });
                        } else {
                          e = this.childOpts.find(function(e) {
                            return e.selected;
                          });
                          if (e) {
                            this.value = e.value;
                          }
                        }
                      }
                      this.updateOptions();
                      this.emitStyle();
                      this.el.forceUpdate();
                      this.didInit = true;
                      return [2];
                  }
                });
              });
            };
            e.prototype.open = function(e) {
              return __awaiter(this, void 0, void 0, function() {
                var t, n;
                var i = this;
                return __generator(this, function(r) {
                  switch (r.label) {
                    case 0:
                      if (this.disabled || this.isExpanded) {
                        return [2, undefined];
                      }
                      n = this;
                      return [4, this.createOverlay(e)];
                    case 1:
                      t = n.overlay = r.sent();
                      this.isExpanded = true;
                      t.onDidDismiss().then(function() {
                        i.overlay = undefined;
                        i.isExpanded = false;
                        i.setFocus();
                      });
                      return [4, t.present()];
                    case 2:
                      r.sent();
                      return [2, t];
                  }
                });
              });
            };
            e.prototype.createOverlay = function(e) {
              var t = this.interface;
              if ((t === "action-sheet" || t === "popover") && this.multiple) {
                console.warn(
                  'Select interface cannot be "' +
                    t +
                    '" with a multi-value select. Using the "alert" interface instead.'
                );
                t = "alert";
              }
              if (t === "popover" && !e) {
                console.warn(
                  'Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'
                );
                t = "alert";
              }
              if (t === "popover") {
                return this.openPopover(e);
              }
              if (t === "action-sheet") {
                return this.openActionSheet();
              }
              return this.openAlert();
            };
            e.prototype.updateOverlayOptions = function() {
              if (!this.overlay) {
                return;
              }
              var e = this.overlay;
              switch (this.interface) {
                case "action-sheet":
                  e.buttons = this.createActionSheetButtons(this.childOpts);
                  break;
                case "popover":
                  var t = e.querySelector("ion-select-popover");
                  if (t) {
                    t.options = this.createPopoverOptions(this.childOpts);
                  }
                  break;
                default:
                  var n = this.multiple ? "checkbox" : "radio";
                  e.inputs = this.createAlertInputs(this.childOpts, n);
                  break;
              }
            };
            e.prototype.createActionSheetButtons = function(e) {
              var t = this;
              var n = e.map(function(e) {
                return {
                  role: e.selected ? "selected" : "",
                  text: e.textContent,
                  handler: function() {
                    t.value = e.value;
                  }
                };
              });
              n.push({
                text: this.cancelText,
                role: "cancel",
                handler: function() {
                  t.ionCancel.emit();
                }
              });
              return n;
            };
            e.prototype.createAlertInputs = function(e, t) {
              return e.map(function(e) {
                return {
                  type: t,
                  label: e.textContent,
                  value: e.value,
                  checked: e.selected,
                  disabled: e.disabled
                };
              });
            };
            e.prototype.createPopoverOptions = function(e) {
              var t = this;
              return e.map(function(e) {
                return {
                  text: e.textContent,
                  value: e.value,
                  checked: e.selected,
                  disabled: e.disabled,
                  handler: function() {
                    t.value = e.value;
                    t.close();
                  }
                };
              });
            };
            e.prototype.openPopover = function(e) {
              return __awaiter(this, void 0, void 0, function() {
                var t, n, r;
                return __generator(this, function(s) {
                  t = this.interfaceOptions;
                  n = i(this);
                  r = Object.assign({ mode: n }, t, {
                    component: "ion-select-popover",
                    cssClass: ["select-popover", t.cssClass],
                    event: e,
                    componentProps: {
                      header: t.header,
                      subHeader: t.subHeader,
                      message: t.message,
                      value: this.value,
                      options: this.createPopoverOptions(this.childOpts)
                    }
                  });
                  return [2, a.create(r)];
                });
              });
            };
            e.prototype.openActionSheet = function() {
              return __awaiter(this, void 0, void 0, function() {
                var e, t, n;
                return __generator(this, function(r) {
                  e = i(this);
                  t = this.interfaceOptions;
                  n = Object.assign({ mode: e }, t, {
                    buttons: this.createActionSheetButtons(this.childOpts),
                    cssClass: ["select-action-sheet", t.cssClass]
                  });
                  return [2, u.create(n)];
                });
              });
            };
            e.prototype.openAlert = function() {
              return __awaiter(this, void 0, void 0, function() {
                var e, t, n, r, s, o;
                var a = this;
                return __generator(this, function(u) {
                  e = this.getLabel();
                  t = e ? e.textContent : null;
                  n = this.interfaceOptions;
                  r = this.multiple ? "checkbox" : "radio";
                  s = i(this);
                  o = Object.assign({ mode: s }, n, {
                    header: n.header ? n.header : t,
                    inputs: this.createAlertInputs(this.childOpts, r),
                    buttons: [
                      {
                        text: this.cancelText,
                        role: "cancel",
                        handler: function() {
                          a.ionCancel.emit();
                        }
                      },
                      {
                        text: this.okText,
                        handler: function(e) {
                          a.value = e;
                        }
                      }
                    ],
                    cssClass: [
                      "select-alert",
                      n.cssClass,
                      this.multiple
                        ? "multiple-select-alert"
                        : "single-select-alert"
                    ]
                  });
                  return [2, l.create(o)];
                });
              });
            };
            e.prototype.close = function() {
              if (!this.overlay) {
                return Promise.resolve(false);
              }
              return this.overlay.dismiss();
            };
            e.prototype.loadOptions = function() {
              return __awaiter(this, void 0, void 0, function() {
                var e;
                return __generator(this, function(t) {
                  switch (t.label) {
                    case 0:
                      e = this;
                      return [
                        4,
                        Promise.all(
                          Array.from(
                            this.el.querySelectorAll("ion-select-option")
                          ).map(function(e) {
                            return e.componentOnReady();
                          })
                        )
                      ];
                    case 1:
                      e.childOpts = t.sent();
                      return [2];
                  }
                });
              });
            };
            e.prototype.updateOptions = function() {
              var e = true;
              for (var t = 0, n = this.childOpts; t < n.length; t++) {
                var i = n[t];
                var r = e && v(this.value, i.value, this.compareWith);
                i.selected = r;
                if (r && !this.multiple) {
                  e = false;
                }
              }
            };
            e.prototype.getLabel = function() {
              return c(this.el);
            };
            e.prototype.hasValue = function() {
              return this.getText() !== "";
            };
            e.prototype.getText = function() {
              var e = this.selectedText;
              if (e != null && e !== "") {
                return e;
              }
              return b(this.childOpts, this.value, this.compareWith);
            };
            e.prototype.setFocus = function() {
              if (this.buttonEl) {
                this.buttonEl.focus();
              }
            };
            e.prototype.emitStyle = function() {
              this.ionStyle.emit({
                interactive: true,
                select: true,
                "has-placeholder": this.placeholder != null,
                "has-value": this.hasValue(),
                "interactive-disabled": this.disabled,
                "select-disabled": this.disabled
              });
            };
            e.prototype.render = function() {
              var e;
              var t = this;
              var n = this,
                o = n.placeholder,
                a = n.name,
                u = n.disabled,
                l = n.isExpanded,
                f = n.value,
                v = n.el;
              var y = i(this);
              var b = this.inputId + "-lbl";
              var m = c(v);
              if (m) {
                m.id = b;
              }
              var g = false;
              var O = this.getText();
              if (O === "" && o != null) {
                O = o;
                g = true;
              }
              h(true, v, a, d(f), u);
              var _ = { "select-text": true, "select-placeholder": g };
              return r(
                s,
                {
                  onClick: this.onClick,
                  role: "combobox",
                  "aria-haspopup": "dialog",
                  "aria-disabled": u ? "true" : null,
                  "aria-expanded": "" + l,
                  "aria-labelledby": b,
                  class:
                    ((e = {}),
                    (e[y] = true),
                    (e["in-item"] = p("ion-item", v)),
                    (e["select-disabled"] = u),
                    e)
                },
                r("div", { class: _ }, O),
                r(
                  "div",
                  { class: "select-icon", role: "presentation" },
                  r("div", { class: "select-icon-inner" })
                ),
                r("button", {
                  type: "button",
                  onFocus: this.onFocus,
                  onBlur: this.onBlur,
                  disabled: u,
                  ref: function(e) {
                    return (t.buttonEl = e);
                  }
                })
              );
            };
            Object.defineProperty(e.prototype, "el", {
              get: function() {
                return o(this);
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "watchers", {
              get: function() {
                return {
                  disabled: ["disabledChanged"],
                  value: ["valueChanged"]
                };
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "style", {
              get: function() {
                return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}.select-icon{width:12px;height:18px}";
              },
              enumerable: true,
              configurable: true
            });
            return e;
          })()
        );
        var d = function(e) {
          if (e == null) {
            return undefined;
          }
          if (Array.isArray(e)) {
            return e.join(",");
          }
          return e.toString();
        };
        var v = function(e, t, n) {
          if (e === undefined) {
            return false;
          }
          if (Array.isArray(e)) {
            return e.some(function(e) {
              return y(e, t, n);
            });
          } else {
            return y(e, t, n);
          }
        };
        var y = function(e, t, n) {
          if (typeof n === "function") {
            return n(e, t);
          } else if (typeof n === "string") {
            return e[n] === t[n];
          } else {
            return e === t;
          }
        };
        var b = function(e, t, n) {
          if (t === undefined) {
            return "";
          }
          if (Array.isArray(t)) {
            return t
              .map(function(t) {
                return m(e, t, n);
              })
              .filter(function(e) {
                return e !== null;
              })
              .join(", ");
          } else {
            return m(e, t, n) || "";
          }
        };
        var m = function(e, t, n) {
          var i = e.find(function(e) {
            return y(e.value, t, n);
          });
          return i ? i.textContent : null;
        };
        var g = 0;
      }
    };
  }
);