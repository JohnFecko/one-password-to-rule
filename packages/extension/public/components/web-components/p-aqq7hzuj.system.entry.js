System.register(["./p-83e6ea9f.system.js", "./p-6a603f00.system.js"], function(
  t
) {
  "use strict";
  var e, r, n, i, o, s;
  return {
    setters: [
      function(t) {
        e = t.r;
        r = t.e;
        n = t.h;
        i = t.H;
      },
      function(t) {
        o = t.o;
        s = t.c;
      }
    ],
    execute: function() {
      var u = t(
        "ion_router_link",
        (function() {
          function t(t) {
            var r = this;
            e(this, t);
            this.routerDirection = "forward";
            this.onClick = function(t) {
              o(r.href, t, r.routerDirection);
            };
          }
          t.prototype.render = function() {
            var t;
            var e = r(this);
            var o = { href: this.href, rel: this.rel, target: this.target };
            return n(
              i,
              {
                onClick: this.onClick,
                class: Object.assign(
                  {},
                  s(this.color),
                  ((t = {}), (t[e] = true), (t["ion-activatable"] = true), t)
                )
              },
              n("a", Object.assign({}, o), n("slot", null))
            );
          };
          Object.defineProperty(t, "style", {
            get: function() {
              return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
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