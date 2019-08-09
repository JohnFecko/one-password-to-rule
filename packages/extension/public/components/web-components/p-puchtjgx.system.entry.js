System.register(["./p-83e6ea9f.system.js"], function(e) {
  "use strict";
  var t, n, r, u;
  return {
    setters: [
      function(e) {
        t = e.r;
        n = e.h;
        r = e.e;
        u = e.H;
      }
    ],
    execute: function() {
      var i = e(
        "ion_thumbnail",
        (function() {
          function e(e) {
            t(this, e);
          }
          e.prototype.render = function() {
            return n(u, { class: r(this) }, n("slot", null));
          };
          Object.defineProperty(e, "style", {
            get: function() {
              return ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}";
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
