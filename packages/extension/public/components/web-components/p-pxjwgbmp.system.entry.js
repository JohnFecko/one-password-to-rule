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
      var c = e(
        "ion_card_content",
        (function() {
          function e(e) {
            t(this, e);
          }
          e.prototype.render = function() {
            var e;
            var t = r(this);
            return n(u, {
              class:
                ((e = {}), (e[t] = true), (e["card-content-" + t] = true), e)
            });
          };
          Object.defineProperty(e, "style", {
            get: function() {
              return "ion-card-content{display:block;position:relative}.card-content-md{padding-left:16px;padding-right:16px;padding-top:13px;padding-bottom:13px;font-size:14px;line-height:1.5}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.card-content-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:400}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:400}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;font-weight:400;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}";
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
