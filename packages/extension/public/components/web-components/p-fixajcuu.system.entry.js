System.register(["./p-83e6ea9f.system.js"], function(e) {
  "use strict";
  var t, n, i, r, o;
  return {
    setters: [
      function(e) {
        t = e.r;
        n = e.d;
        i = e.e;
        r = e.h;
        o = e.H;
      }
    ],
    execute: function() {
      var s = e(
        "ion_slide",
        (function() {
          function e(e) {
            t(this, e);
            this.ionSlideChanged = n(this, "ionSlideChanged", 7);
          }
          e.prototype.componentDidLoad = function() {
            this.ionSlideChanged.emit();
          };
          e.prototype.componentDidUnload = function() {
            this.ionSlideChanged.emit();
          };
          e.prototype.render = function() {
            var e;
            var t = i(this);
            return r(o, {
              class:
                ((e = {}),
                (e[t] = true),
                (e["swiper-slide"] = true),
                (e["swiper-zoom-container"] = true),
                e)
            });
          };
          Object.defineProperty(e, "style", {
            get: function() {
              return "ion-slide{height:100%}.slide-zoom,ion-slide{display:block;width:100%}.slide-zoom,.swiper-slide{text-align:center}.swiper-slide{display:-ms-flexbox;display:flex;position:relative;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-size:18px;-webkit-box-sizing:border-box;box-sizing:border-box}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}";
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
