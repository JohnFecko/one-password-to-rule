System.register(["./p-83e6ea9f.system.js", "./p-6a603f00.system.js"], function(
  t
) {
  "use strict";
  var e, n, i, r, o, u, s;
  return {
    setters: [
      function(t) {
        e = t.r;
        n = t.d;
        i = t.e;
        r = t.h;
        o = t.H;
        u = t.f;
      },
      function(t) {
        s = t.c;
      }
    ],
    execute: function() {
      var a = t(
        "ion_segment",
        (function() {
          function t(t) {
            e(this, t);
            this.disabled = false;
            this.scrollable = false;
            this.ionChange = n(this, "ionChange", 7);
            this.ionStyle = n(this, "ionStyle", 7);
          }
          t.prototype.valueChanged = function(t) {
            this.updateButtons();
            this.ionChange.emit({ value: t });
          };
          t.prototype.segmentClick = function(t) {
            var e = t.target;
            this.value = e.value;
          };
          t.prototype.componentWillLoad = function() {
            this.emitStyle();
          };
          t.prototype.componentDidLoad = function() {
            if (this.value == null) {
              var t = this.getButtons().find(function(t) {
                return t.checked;
              });
              if (t) {
                this.value = t.value;
              }
            }
            this.updateButtons();
          };
          t.prototype.emitStyle = function() {
            this.ionStyle.emit({ segment: true });
          };
          t.prototype.updateButtons = function() {
            var t = this.value;
            for (var e = 0, n = this.getButtons(); e < n.length; e++) {
              var i = n[e];
              i.checked = i.value === t;
            }
          };
          t.prototype.getButtons = function() {
            return Array.from(this.el.querySelectorAll("ion-segment-button"));
          };
          t.prototype.render = function() {
            var t;
            var e = i(this);
            return r(o, {
              class: Object.assign(
                {},
                s(this.color),
                ((t = {}),
                (t[e] = true),
                (t["segment-disabled"] = this.disabled),
                (t["segment-scrollable"] = this.scrollable),
                t)
              )
            });
          };
          Object.defineProperty(t.prototype, "el", {
            get: function() {
              return u(this);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(t, "watchers", {
            get: function() {
              return { value: ["valueChanged"] };
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(t, "style", {
            get: function() {
              return ".sc-ion-segment-ios-h{--indicator-color-checked:initial;--ripple-color:currentColor;--color-activated:initial;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center}.sc-ion-segment-ios-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-ios-h{pointer-events:none}.segment-scrollable.sc-ion-segment-ios-h{-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}.segment-scrollable.sc-ion-segment-ios-h::-webkit-scrollbar{display:none}.sc-ion-segment-ios-h{--background:transparent;--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--background-activated:rgba(var(--ion-color-primary-rgb,56,128,255),0.16);--background-checked:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary,#3880ff);--color-checked:var(--ion-color-primary-contrast,#fff);--color-disabled:rgba(var(--ion-color-primary-rgb,56,128,255),0.3);--color-checked-disabled:rgba(var(--ion-color-primary-contrast-rgb,255,255,255),0.3);--border-color:var(--ion-color-primary,#3880ff);--indicator-color:transparent}.segment-disabled.sc-ion-segment-ios-h{opacity:.3}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button{--border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .activated{background:rgba(var(--ion-color-base-rgb),.16);color:var(--ion-color-base)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked, .sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked.activated{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-disabled{color:rgba(var(--ion-color-base-rgb),.3)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked.segment-button-disabled{color:rgba(var(--ion-color-contrast-rgb),.3)}@media (any-hover:hover){.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button:hover:not(.segment-button-checked){background:rgba(var(--ion-color-base-rgb),.1)}}.sc-ion-segment-ios-hion-toolbar.sc-ion-segment-ios-s > ion-segment-button, ion-toolbar .sc-ion-segment-ios-h.sc-ion-segment-ios-s > ion-segment-button{max-width:100px;font-size:12px;line-height:22px}.sc-ion-segment-ios-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ion-toolbar:not(.ion-color) .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button{border-color:var(--ion-toolbar-color-checked,var(--border-color));color:var(--ion-toolbar-color-unchecked,var(--color))}.sc-ion-segment-ios-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked, ion-toolbar:not(.ion-color) .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked{background:var(--ion-toolbar-color-checked,var(--background-checked));color:var(--ion-toolbar-background,var(--color-checked))}.sc-ion-segment-ios-hion-toolbar.ion-color:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ion-toolbar.ion-color .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button{--color:var(--ion-color-contrast);--color-disabled:rgba(var(--ion-color-contrast-rgb),0.3);--color-checked:var(--ion-color-base);--color-checked-disabled:rgba(var(--ion-color-contrast-rgb),0.3);--background-hover:rgba(var(--ion-color-contrast-rgb),0.1);--background-activated:rgba(var(--ion-color-contrast-rgb),0.16);--background-checked:var(--ion-color-contrast);--border-color:var(--ion-color-contrast)}";
            },
            enumerable: true,
            configurable: true
          });
          return t;
        })()
      );
    }
  };
});
