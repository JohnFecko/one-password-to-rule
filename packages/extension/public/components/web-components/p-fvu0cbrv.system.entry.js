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
              return ":host{display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) ::slotted(ion-card-subtitle),:host(.ion-color) ::slotted(ion-card-title){color:currentColor}:host{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-card-subtitle:not(:first-child)),::slotted(ion-card-title:not(:first-child)){margin-top:8px}";
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
