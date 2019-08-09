System.register(["./p-83e6ea9f.system.js"], function(e) {
  "use strict";
  var t, r, n, u;
  return {
    setters: [
      function(e) {
        t = e.r;
        r = e.h;
        n = e.e;
        u = e.H;
      }
    ],
    execute: function() {
      var i = e(
        "ion_avatar",
        (function() {
          function e(e) {
            t(this, e);
          }
          e.prototype.render = function() {
            return r(u, { class: n(this) }, r("slot", null));
          };
          Object.defineProperty(e, "style", {
            get: function() {
              return ":host{border-radius:var(--border-radius);display:block}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";
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
