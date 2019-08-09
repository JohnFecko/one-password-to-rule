System.register(["./p-83e6ea9f.system.js", "./p-6a603f00.system.js"], function(
  t
) {
  "use strict";
  var e, r, i, n, s, o;
  return {
    setters: [
      function(t) {
        e = t.r;
        r = t.h;
        i = t.e;
        n = t.H;
      },
      function(t) {
        s = t.o;
        o = t.c;
      }
    ],
    execute: function() {
      var a = t(
        "ion_card",
        (function() {
          function t(t) {
            e(this, t);
            this.button = false;
            this.type = "button";
            this.disabled = false;
            this.routerDirection = "forward";
          }
          t.prototype.isClickable = function() {
            return this.href !== undefined || this.button;
          };
          t.prototype.renderCard = function(t) {
            var e = this.isClickable();
            if (!e) {
              return [r("slot", null)];
            }
            var i = this,
              n = i.href,
              o = i.routerDirection;
            var a = e ? (n === undefined ? "button" : "a") : "div";
            var u =
              a === "button"
                ? { type: this.type }
                : {
                    download: this.download,
                    href: this.href,
                    rel: this.rel,
                    target: this.target
                  };
            return r(
              a,
              Object.assign({}, u, {
                class: "card-native",
                disabled: this.disabled,
                onClick: function(t) {
                  return s(n, t, o);
                }
              }),
              r("slot", null),
              e && t === "md" && r("ion-ripple-effect", null)
            );
          };
          t.prototype.render = function() {
            var t;
            var e = i(this);
            return r(
              n,
              {
                class: Object.assign(
                  ((t = {}), (t[e] = true), t),
                  o(this.color),
                  {
                    "card-disabled": this.disabled,
                    "ion-activatable": this.isClickable()
                  }
                )
              },
              this.renderCard(e)
            );
          };
          Object.defineProperty(t, "style", {
            get: function() {
              return ".sc-ion-card-md-h{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden}.ion-color.sc-ion-card-md-h{background:var(--ion-color-base)}.ion-color.sc-ion-card-md-h, .sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-header , .sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-subtitle , .sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-title {color:var(--ion-color-contrast)}.sc-ion-card-md-s  img {display:block;width:100%}.sc-ion-card-md-s  ion-list {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.card-disabled.sc-ion-card-md-h{cursor:default;opacity:.3;pointer-events:none}.card-native.sc-ion-card-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background)}.card-native.sc-ion-card-md::-moz-focus-inner{border:0}a.sc-ion-card-md, button.sc-ion-card-md{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect.sc-ion-card-md{color:var(--ripple-color)}.sc-ion-card-md-h{--background:var(--ion-item-background,transparent);--color:var(--ion-color-step-550,#737373);margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:14px;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-card-md-h{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}";
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
