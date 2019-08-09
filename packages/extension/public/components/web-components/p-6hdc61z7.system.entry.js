System.register(["./p-83e6ea9f.system.js"], function(t) {
  "use strict";
  var e, n, o, r;
  return {
    setters: [
      function(t) {
        e = t.r;
        n = t.h;
        o = t.f;
        r = t.H;
      }
    ],
    execute: function() {
      var i = t(
        "ion_nav_set_root",
        (function() {
          function t(t) {
            var n = this;
            e(this, t);
            this.setRoot = function() {
              var t = n.el.closest("ion-nav");
              var e = n.component;
              if (t && e !== undefined) {
                t.setRoot(e, n.componentProps, { skipIfBusy: true });
              }
            };
          }
          t.prototype.render = function() {
            return n(r, { onClick: this.setRoot });
          };
          Object.defineProperty(t.prototype, "el", {
            get: function() {
              return o(this);
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
