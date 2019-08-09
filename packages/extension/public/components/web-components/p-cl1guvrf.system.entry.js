System.register(["./p-83e6ea9f.system.js"], function(t) {
  "use strict";
  var e, n, r, i;
  return {
    setters: [
      function(t) {
        e = t.r;
        n = t.h;
        r = t.f;
        i = t.H;
      }
    ],
    execute: function() {
      var o = t(
        "ion_nav_pop",
        (function() {
          function t(t) {
            var n = this;
            e(this, t);
            this.pop = function() {
              var t = n.el.closest("ion-nav");
              if (t) {
                t.pop({ skipIfBusy: true });
              }
            };
          }
          t.prototype.render = function() {
            return n(i, { onClick: this.pop });
          };
          Object.defineProperty(t.prototype, "el", {
            get: function() {
              return r(this);
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
