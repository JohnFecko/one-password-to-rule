System.register(["./p-83e6ea9f.system.js"], function(e) {
  "use strict";
  var r, t, n, o;
  return {
    setters: [
      function(e) {
        r = e.r;
        t = e.h;
        n = e.e;
        o = e.H;
      }
    ],
    execute: function() {
      var i = e(
        "ion_reorder",
        (function() {
          function e(e) {
            r(this, e);
          }
          e.prototype.onClick = function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
          };
          e.prototype.render = function() {
            return t(
              o,
              { class: n(this) },
              t(
                "slot",
                null,
                t("ion-icon", {
                  name: "reorder",
                  lazy: false,
                  class: "reorder-icon"
                })
              )
            );
          };
          Object.defineProperty(e, "style", {
            get: function() {
              return ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:34px;opacity:.4}";
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
