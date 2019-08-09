System.register(["./p-83e6ea9f.system.js"], function(e) {
  "use strict";
  var t, r, n, u;
  return {
    setters: [
      function(e) {
        t = e.r;
        r = e.e;
        n = e.h;
        u = e.H;
      }
    ],
    execute: function() {
      var s = e(
        "ion_header",
        (function() {
          function e(e) {
            t(this, e);
            this.translucent = false;
          }
          e.prototype.render = function() {
            var e;
            var t = r(this);
            return n(u, {
              role: "banner",
              class:
                ((e = {}),
                (e[t] = true),
                (e["header-" + t] = true),
                (e["header-translucent"] = this.translucent),
                (e["header-translucent-" + t] = this.translucent),
                e)
            });
          };
          Object.defineProperty(e, "style", {
            get: function() {
              return "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}";
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
