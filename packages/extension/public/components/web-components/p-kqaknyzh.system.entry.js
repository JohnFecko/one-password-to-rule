System.register(["./p-83e6ea9f.system.js", "./p-6a603f00.system.js"], function(
  e
) {
  "use strict";
  var t, r, n, s, i;
  return {
    setters: [
      function(e) {
        t = e.r;
        r = e.e;
        n = e.h;
        s = e.H;
      },
      function(e) {
        i = e.c;
      }
    ],
    execute: function() {
      var u = e(
        "ion_card_subtitle",
        (function() {
          function e(e) {
            t(this, e);
          }
          e.prototype.render = function() {
            var e;
            var t = r(this);
            return n(
              s,
              {
                role: "heading",
                "aria-level": "3",
                class: Object.assign(
                  {},
                  i(this.color),
                  ((e = {}), (e[t] = true), e)
                )
              },
              n("slot", null)
            );
          };
          Object.defineProperty(e, "style", {
            get: function() {
              return ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600,#666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase}";
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
