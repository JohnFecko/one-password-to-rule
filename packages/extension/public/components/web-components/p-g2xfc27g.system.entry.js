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
              return "ion-card-content{display:block;position:relative}.card-content-ios{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;font-size:16px;line-height:1.4}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.card-content-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:400}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:400}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px}";
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
