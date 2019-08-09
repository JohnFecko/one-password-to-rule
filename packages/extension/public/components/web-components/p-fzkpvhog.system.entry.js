System.register(
  [
    "./p-83e6ea9f.system.js",
    "./p-0958cff4.system.js",
    "./p-6a603f00.system.js"
  ],
  function(e) {
    "use strict";
    var t, i, n, o, c, s, r, h, u, a;
    return {
      setters: [
        function(e) {
          t = e.r;
          i = e.d;
          n = e.e;
          o = e.h;
          c = e.H;
          s = e.f;
        },
        function(e) {
          r = e.f;
          h = e.a;
        },
        function(e) {
          u = e.c;
          a = e.h;
        }
      ],
      execute: function() {
        var l = e(
          "ion_checkbox",
          (function() {
            function e(e) {
              var n = this;
              t(this, e);
              this.inputId = "ion-cb-" + d++;
              this.name = this.inputId;
              this.checked = false;
              this.indeterminate = false;
              this.disabled = false;
              this.value = "on";
              this.onClick = function() {
                n.setFocus();
                n.checked = !n.checked;
                n.indeterminate = false;
              };
              this.onFocus = function() {
                n.ionFocus.emit();
              };
              this.onBlur = function() {
                n.ionBlur.emit();
              };
              this.ionChange = i(this, "ionChange", 7);
              this.ionFocus = i(this, "ionFocus", 7);
              this.ionBlur = i(this, "ionBlur", 7);
              this.ionStyle = i(this, "ionStyle", 7);
            }
            e.prototype.componentWillLoad = function() {
              this.emitStyle();
            };
            e.prototype.checkedChanged = function(e) {
              this.ionChange.emit({ checked: e, value: this.value });
              this.emitStyle();
            };
            e.prototype.disabledChanged = function() {
              this.emitStyle();
            };
            e.prototype.emitStyle = function() {
              this.ionStyle.emit({
                "checkbox-checked": this.checked,
                "interactive-disabled": this.disabled
              });
            };
            e.prototype.setFocus = function() {
              if (this.buttonEl) {
                this.buttonEl.focus();
              }
            };
            e.prototype.render = function() {
              var e;
              var t = this;
              var i = this,
                s = i.inputId,
                l = i.indeterminate,
                d = i.disabled,
                f = i.checked,
                b = i.value,
                p = i.color,
                m = i.el;
              var y = s + "-lbl";
              var k = n(this);
              var v = r(m);
              if (v) {
                v.id = y;
              }
              h(true, m, this.name, f ? b : "", d);
              var g = l
                ? o("path", { d: "M6 12L18 12" })
                : o("path", { d: "M5.9,12.5l3.8,3.8l8.8-8.8" });
              if (k === "md") {
                g = l
                  ? o("path", { d: "M2 12H22" })
                  : o("path", { d: "M1.73,12.91 8.1,19.28 22.79,4.59" });
              }
              return o(
                c,
                {
                  onClick: this.onClick,
                  role: "checkbox",
                  "aria-disabled": d ? "true" : null,
                  "aria-checked": "" + f,
                  "aria-labelledby": y,
                  class: Object.assign(
                    {},
                    u(p),
                    ((e = {}),
                    (e[k] = true),
                    (e["in-item"] = a("ion-item", m)),
                    (e["checkbox-checked"] = f),
                    (e["checkbox-disabled"] = d),
                    (e["checkbox-indeterminate"] = l),
                    (e["interactive"] = true),
                    e)
                  )
                },
                o("svg", { class: "checkbox-icon", viewBox: "0 0 24 24" }, g),
                o("button", {
                  type: "button",
                  onFocus: this.onFocus,
                  onBlur: this.onBlur,
                  disabled: this.disabled,
                  ref: function(e) {
                    return (t.buttonEl = e);
                  }
                })
              );
            };
            Object.defineProperty(e.prototype, "el", {
              get: function() {
                return s(this);
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "watchers", {
              get: function() {
                return {
                  checked: ["checkedChanged"],
                  disabled: ["disabledChanged"]
                };
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "style", {
              get: function() {
                return ":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.51);--background:var(--ion-item-background,var(--ion-background-color,#fff));--transition:background 180ms cubic-bezier(0.4,0,0.2,1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30;stroke-width:3}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}";
              },
              enumerable: true,
              configurable: true
            });
            return e;
          })()
        );
        var d = 0;
      }
    };
  }
);
