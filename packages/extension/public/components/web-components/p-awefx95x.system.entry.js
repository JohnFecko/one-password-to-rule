System.register(["./p-83e6ea9f.system.js", "./p-6a603f00.system.js"], function(
  e
) {
  "use strict";
  var t, r, n, i, s;
  return {
    setters: [
      function(e) {
        t = e.r;
        r = e.e;
        n = e.h;
        i = e.H;
      },
      function(e) {
        s = e.c;
      }
    ],
    execute: function() {
      var u = e(
        "ion_card_title",
        (function() {
          function e(e) {
            t(this, e);
          }
          e.prototype.render = function() {
            var e;
            var t = r(this);
            return n(
              i,
              {
                role: "heading",
                "aria-level": "2",
                class: Object.assign(
                  {},
                  s(this.color),
                  ((e = {}), (e[t] = true), e)
                )
              },
              n("slot", null)
            );
          };
          Object.defineProperty(e, "style", {
            get: function() {
              return ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850,#262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}";
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
