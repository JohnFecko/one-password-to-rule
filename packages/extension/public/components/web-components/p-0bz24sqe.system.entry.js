System.register(["./p-83e6ea9f.system.js"], function(e) {
  "use strict";
  var t, n;
  return {
    setters: [
      function(e) {
        t = e.r;
        n = e.d;
      }
    ],
    execute: function() {
      var o = e(
        "ion_route_redirect",
        (function() {
          function e(e) {
            t(this, e);
            this.ionRouteRedirectChanged = n(
              this,
              "ionRouteRedirectChanged",
              7
            );
          }
          e.prototype.propDidChange = function() {
            this.ionRouteRedirectChanged.emit();
          };
          e.prototype.componentDidLoad = function() {
            this.ionRouteRedirectChanged.emit();
          };
          e.prototype.componentDidUnload = function() {
            this.ionRouteRedirectChanged.emit();
          };
          Object.defineProperty(e, "watchers", {
            get: function() {
              return { from: ["propDidChange"], to: ["propDidChange"] };
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
