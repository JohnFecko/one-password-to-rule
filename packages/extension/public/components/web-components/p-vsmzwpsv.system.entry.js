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
              return ".sc-ion-segment-md-h{--indicator-color-checked:initial;--ripple-color:currentColor;--color-activated:initial;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center}.sc-ion-segment-md-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-md-h{pointer-events:none}.segment-scrollable.sc-ion-segment-md-h{-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}.segment-scrollable.sc-ion-segment-md-h::-webkit-scrollbar{display:none}.sc-ion-segment-md-h{--background:none;--background-checked:none;--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.04);--background-activated:rgba(var(--ion-color-primary-rgb,56,128,255),0.16);--color:rgba(var(--ion-text-color-rgb,0,0,0),0.6);--color-checked:var(--ion-color-primary,#3880ff);--color-checked-disabled:var(--color-checked);--indicator-color:transparent}.segment-disabled.sc-ion-segment-md-h{opacity:.3}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button{--background-activated:rgba(var(--ion-color-base-rgb),0.16);--ripple-color:var(--ion-color-base);background:transparent;color:rgba(var(--ion-text-color-rgb,0,0,0),.6)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked{--indicator-color-checked:var(--ion-color-base);color:var(--ion-color-base)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked.activated{color:var(--ion-color-base)}@media (any-hover:hover){.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button:hover{background:rgba(var(--ion-color-base-rgb),.04)}}.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button{color:var(--ion-toolbar-color-unchecked,var(--color))}.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > .segment-button-checked, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > .segment-button-checked{--indicator-color-checked:var(--ion-toolbar-color-checked,var(--color-checked));color:var(--ion-toolbar-color-checked,var(--color-checked))}.sc-ion-segment-md-hion-toolbar.ion-color:not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar.ion-color .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button{--background-hover:rgba(var(--ion-color-contrast-rgb),0.04);--background-activated:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb),0.6);--color-checked:var(--ion-color-contrast);--indicator-color-checked:var(--ion-color-contrast)}";
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
