System.register(["./p-83e6ea9f.system.js", "./p-6a603f00.system.js"], function(
  t
) {
  "use strict";
  var e, n, r, s, u;
  return {
    setters: [
      function(t) {
        e = t.r;
        n = t.e;
        r = t.h;
        s = t.H;
      },
      function(t) {
        u = t.c;
      }
    ],
    execute: function() {
      var i = t(
        "ion_text",
        (function() {
          function t(t) {
            e(this, t);
          }
          t.prototype.render = function() {
            var t;
            var e = n(this);
            return r(
              s,
              {
                class: Object.assign(
                  {},
                  u(this.color),
                  ((t = {}), (t[e] = true), t)
                )
              },
              r("slot", null)
            );
          };
          Object.defineProperty(t, "style", {
            get: function() {
              return ":host(.ion-color){color:var(--ion-color-base)}";
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
