System.register(["./p-83e6ea9f.system.js"], function(t) {
  "use strict";
  var e, i, o, r, n, s;
  return {
    setters: [
      function(t) {
        e = t.r;
        i = t.d;
        o = t.h;
        r = t.e;
        n = t.H;
        s = t.f;
      }
    ],
    execute: function() {
      var c = t(
        "ion_img",
        (function() {
          function t(t) {
            var o = this;
            e(this, t);
            this.onLoad = function() {
              o.ionImgDidLoad.emit();
            };
            this.onError = function() {
              o.ionError.emit();
            };
            this.ionImgWillLoad = i(this, "ionImgWillLoad", 7);
            this.ionImgDidLoad = i(this, "ionImgDidLoad", 7);
            this.ionError = i(this, "ionError", 7);
          }
          t.prototype.srcChanged = function() {
            this.addIO();
          };
          t.prototype.componentDidLoad = function() {
            this.addIO();
          };
          t.prototype.addIO = function() {
            var t = this;
            if (this.src === undefined) {
              return;
            }
            if ("IntersectionObserver" in window) {
              this.removeIO();
              this.io = new IntersectionObserver(function(e) {
                if (e[0].isIntersecting) {
                  t.load();
                  t.removeIO();
                }
              });
              this.io.observe(this.el);
            } else {
              setTimeout(function() {
                return t.load();
              }, 200);
            }
          };
          t.prototype.load = function() {
            this.loadError = this.onError;
            this.loadSrc = this.src;
            this.ionImgWillLoad.emit();
          };
          t.prototype.removeIO = function() {
            if (this.io) {
              this.io.disconnect();
              this.io = undefined;
            }
          };
          t.prototype.render = function() {
            return o(
              n,
              { class: r(this) },
              o("img", {
                decoding: "async",
                src: this.loadSrc,
                alt: this.alt,
                onLoad: this.onLoad,
                onError: this.loadError
              })
            );
          };
          Object.defineProperty(t.prototype, "el", {
            get: function() {
              return s(this);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(t, "watchers", {
            get: function() {
              return { src: ["srcChanged"] };
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(t, "style", {
            get: function() {
              return ":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";
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
