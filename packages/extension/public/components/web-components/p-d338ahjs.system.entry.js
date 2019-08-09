var __awaiter =
  (this && this.__awaiter) ||
  function(e, t, n, i) {
    return new (n || (n = Promise))(function(r, o) {
      function a(e) {
        try {
          u(i.next(e));
        } catch (e) {
          o(e);
        }
      }
      function s(e) {
        try {
          u(i["throw"](e));
        } catch (e) {
          o(e);
        }
      }
      function u(e) {
        e.done
          ? r(e.value)
          : new n(function(t) {
              t(e.value);
            }).then(a, s);
      }
      u((i = i.apply(e, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(e, t) {
    var n = {
        label: 0,
        sent: function() {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      },
      i,
      r,
      o,
      a;
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol === "function" &&
        (a[Symbol.iterator] = function() {
          return this;
        }),
      a
    );
    function s(e) {
      return function(t) {
        return u([e, t]);
      };
    }
    function u(a) {
      if (i) throw new TypeError("Generator is already executing.");
      while (n)
        try {
          if (
            ((i = 1),
            r &&
              (o =
                a[0] & 2
                  ? r["return"]
                  : a[0]
                  ? r["throw"] || ((o = r["return"]) && o.call(r), 0)
                  : r.next) &&
              !(o = o.call(r, a[1])).done)
          )
            return o;
          if (((r = 0), o)) a = [a[0] & 2, o.value];
          switch (a[0]) {
            case 0:
            case 1:
              o = a;
              break;
            case 4:
              n.label++;
              return { value: a[1], done: false };
            case 5:
              n.label++;
              r = a[1];
              a = [0];
              continue;
            case 7:
              a = n.ops.pop();
              n.trys.pop();
              continue;
            default:
              if (
                !((o = n.trys), (o = o.length > 0 && o[o.length - 1])) &&
                (a[0] === 6 || a[0] === 2)
              ) {
                n = 0;
                continue;
              }
              if (a[0] === 3 && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                n.label = a[1];
                break;
              }
              if (a[0] === 6 && n.label < o[1]) {
                n.label = o[1];
                o = a;
                break;
              }
              if (o && n.label < o[2]) {
                n.label = o[2];
                n.ops.push(a);
                break;
              }
              if (o[2]) n.ops.pop();
              n.trys.pop();
              continue;
          }
          a = t.call(e, n);
        } catch (e) {
          a = [6, e];
          r = 0;
        } finally {
          i = o = 0;
        }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: true };
    }
  };
System.register(
  [
    "./p-83e6ea9f.system.js",
    "./p-05263177.system.js",
    "./p-6a603f00.system.js",
    "./p-02683056.system.js"
  ],
  function(e) {
    "use strict";
    var t, n, i, r, o, a, s, u, l, d, c, p, f;
    return {
      setters: [
        function(e) {
          t = e.r;
          n = e.e;
          i = e.d;
          r = e.c;
          o = e.h;
          a = e.H;
          s = e.f;
        },
        function(e) {
          u = e.B;
          l = e.p;
          d = e.a;
          c = e.e;
        },
        function(e) {
          p = e.g;
        },
        function(e) {
          f = e.s;
        }
      ],
      execute: function() {
        var h = function(e, t) {
          var n = new e();
          var i = new e();
          i.addElement(t.querySelector("ion-backdrop"));
          var r = new e();
          r.addElement(t.querySelector(".loading-wrapper"));
          i.fromTo("opacity", 0.01, 0.3);
          r.fromTo("opacity", 0.01, 1).fromTo("scale", 1.1, 1);
          return Promise.resolve(
            n
              .addElement(t)
              .easing("ease-in-out")
              .duration(200)
              .add(i)
              .add(r)
          );
        };
        var m = function(e, t) {
          var n = new e();
          var i = new e();
          i.addElement(t.querySelector("ion-backdrop"));
          var r = new e();
          r.addElement(t.querySelector(".loading-wrapper"));
          i.fromTo("opacity", 0.3, 0);
          r.fromTo("opacity", 0.99, 0).fromTo("scale", 1, 0.9);
          return Promise.resolve(
            n
              .addElement(t)
              .easing("ease-in-out")
              .duration(200)
              .add(i)
              .add(r)
          );
        };
        var y = function(e, t) {
          var n = new e();
          var i = new e();
          i.addElement(t.querySelector("ion-backdrop"));
          var r = new e();
          r.addElement(t.querySelector(".loading-wrapper"));
          i.fromTo("opacity", 0.01, 0.32);
          r.fromTo("opacity", 0.01, 1).fromTo("scale", 1.1, 1);
          return Promise.resolve(
            n
              .addElement(t)
              .easing("ease-in-out")
              .duration(200)
              .add(i)
              .add(r)
          );
        };
        var v = function(e, t) {
          var n = new e();
          var i = new e();
          i.addElement(t.querySelector("ion-backdrop"));
          var r = new e();
          r.addElement(t.querySelector(".loading-wrapper"));
          i.fromTo("opacity", 0.32, 0);
          r.fromTo("opacity", 0.99, 0).fromTo("scale", 1, 0.9);
          return Promise.resolve(
            n
              .addElement(t)
              .easing("ease-in-out")
              .duration(200)
              .add(i)
              .add(r)
          );
        };
        var g = e(
          "ion_loading",
          (function() {
            function e(e) {
              var r = this;
              t(this, e);
              this.presented = false;
              this.mode = n(this);
              this.keyboardClose = true;
              this.duration = 0;
              this.backdropDismiss = false;
              this.showBackdrop = true;
              this.translucent = false;
              this.animated = true;
              this.onBackdropTap = function() {
                r.dismiss(undefined, u);
              };
              this.didPresent = i(this, "ionLoadingDidPresent", 7);
              this.willPresent = i(this, "ionLoadingWillPresent", 7);
              this.willDismiss = i(this, "ionLoadingWillDismiss", 7);
              this.didDismiss = i(this, "ionLoadingDidDismiss", 7);
            }
            e.prototype.componentWillLoad = function() {
              if (this.spinner === undefined) {
                var e = n(this);
                this.spinner = r.get(
                  "loadingSpinner",
                  r.get("spinner", e === "ios" ? "lines" : "crescent")
                );
              }
            };
            e.prototype.present = function() {
              return __awaiter(this, void 0, void 0, function() {
                var e = this;
                return __generator(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return [4, l(this, "loadingEnter", h, y, undefined)];
                    case 1:
                      t.sent();
                      if (this.duration > 0) {
                        this.durationTimeout = setTimeout(function() {
                          return e.dismiss();
                        }, this.duration + 10);
                      }
                      return [2];
                  }
                });
              });
            };
            e.prototype.dismiss = function(e, t) {
              if (this.durationTimeout) {
                clearTimeout(this.durationTimeout);
              }
              return d(this, e, t, "loadingLeave", m, v);
            };
            e.prototype.onDidDismiss = function() {
              return c(this.el, "ionLoadingDidDismiss");
            };
            e.prototype.onWillDismiss = function() {
              return c(this.el, "ionLoadingWillDismiss");
            };
            e.prototype.render = function() {
              var e;
              var t = this,
                i = t.message,
                r = t.spinner;
              var s = n(this);
              return o(
                a,
                {
                  onIonBackdropTap: this.onBackdropTap,
                  style: { zIndex: "" + (4e4 + this.overlayIndex) },
                  class: Object.assign(
                    {},
                    p(this.cssClass),
                    ((e = {}),
                    (e[s] = true),
                    (e["loading-translucent"] = this.translucent),
                    e)
                  )
                },
                o("ion-backdrop", {
                  visible: this.showBackdrop,
                  tappable: this.backdropDismiss
                }),
                o(
                  "div",
                  { class: "loading-wrapper", role: "dialog" },
                  r &&
                    o(
                      "div",
                      { class: "loading-spinner" },
                      o("ion-spinner", { name: r })
                    ),
                  i && o("div", { class: "loading-content", innerHTML: f(i) })
                )
              );
            };
            Object.defineProperty(e.prototype, "el", {
              get: function() {
                return s(this);
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "style", {
              get: function() {
                return ".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";
              },
              enumerable: true,
              configurable: true
            });
            return e;
          })()
        );
      }
    };
  }
);
