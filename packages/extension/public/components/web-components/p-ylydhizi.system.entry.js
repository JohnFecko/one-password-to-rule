System.register(["./p-83e6ea9f.system.js", "./p-6a603f00.system.js"], function(
  e
) {
  "use strict";
  var t, r, n, s, u;
  return {
    setters: [
      function(e) {
        t = e.r;
        r = e.e;
        n = e.h;
        s = e.H;
      },
      function(e) {
        u = e.c;
      }
    ],
    execute: function() {
      var c = e(
        "ion_card_header",
        (function() {
          function e(e) {
            t(this, e);
            this.translucent = false;
          }
          e.prototype.render = function() {
            var e;
            var t = r(this);
            return n(
              s,
              {
                class: Object.assign(
                  {},
                  u(this.color),
                  ((e = { "card-header-translucent": this.translucent }),
                  (e[t] = true),
                  e)
                )
              },
              n("slot", null)
            );
          };
          Object.defineProperty(e, "style", {
            get: function() {
              return ":host{display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) ::slotted(ion-card-subtitle),:host(.ion-color) ::slotted(ion-card-title){color:currentColor}:host{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}";
            },
            enumerable: true,
            configurable: true
          });
          return e;
        })()
      );
    }
  };
});