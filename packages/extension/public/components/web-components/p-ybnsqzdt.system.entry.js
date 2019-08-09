System.register(["./p-83e6ea9f.system.js"], function(e) {
  "use strict";
  var t, n, r, u;
  return {
    setters: [
      function(e) {
        t = e.r;
        n = e.h;
        r = e.f;
        u = e.H;
      }
    ],
    execute: function() {
      var i = e(
        "ion_nav_push",
        (function() {
          function e(e) {
            var n = this;
            t(this, e);
            this.push = function() {
              var e = n.el.closest("ion-nav");
              var t = n.component;
              if (e && t !== undefined) {
                e.push(t, n.componentProps, { skipIfBusy: true });
              }
            };
          }
          e.prototype.render = function() {
            return n(u, { onClick: this.push });
          };
          Object.defineProperty(e.prototype, "el", {
            get: function() {
              return r(this);
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
