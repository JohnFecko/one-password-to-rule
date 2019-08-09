System.register(["./p-83e6ea9f.system.js", "./p-6a603f00.system.js"], function(
  e
) {
  "use strict";
  var t, n, r, s, u;
  return {
    setters: [
      function(e) {
        t = e.r;
        n = e.e;
        r = e.h;
        s = e.H;
      },
      function(e) {
        u = e.c;
      }
    ],
    execute: function() {
      var o = e(
        "ion_note",
        (function() {
          function e(e) {
            t(this, e);
          }
          e.prototype.render = function() {
            var e;
            var t = n(this);
            return r(
              s,
              {
                class: Object.assign(
                  {},
                  u(this.color),
                  ((e = {}), (e[t] = true), e)
                )
              },
              r("slot", null)
            );
          };
          Object.defineProperty(e, "style", {
            get: function() {
              return ":host{color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-350,#a6a6a6)}";
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
