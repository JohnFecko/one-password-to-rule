System.register(["./p-83e6ea9f.system.js", "./p-6a603f00.system.js"], function(
  e
) {
  "use strict";
  var t, r, n, o, i, a;
  return {
    setters: [
      function(e) {
        t = e.r;
        r = e.e;
        n = e.h;
        o = e.H;
      },
      function(e) {
        i = e.o;
        a = e.c;
      }
    ],
    execute: function() {
      var c = e(
        "ion_anchor",
        (function() {
          function e(e) {
            var r = this;
            t(this, e);
            this.routerDirection = "forward";
            this.onClick = function(e) {
              i(r.href, e, r.routerDirection);
            };
          }
          e.prototype.componentDidLoad = function() {
            console.warn(
              "The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router."
            );
          };
          e.prototype.render = function() {
            var e;
            var t = r(this);
            var i = { href: this.href, rel: this.rel };
            return n(
              o,
              {
                onClick: this.onClick,
                class: Object.assign(
                  {},
                  a(this.color),
                  ((e = {}), (e[t] = true), (e["ion-activatable"] = true), e)
                )
              },
              n("a", Object.assign({}, i), n("slot", null))
            );
          };
          Object.defineProperty(e, "style", {
            get: function() {
              return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
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
