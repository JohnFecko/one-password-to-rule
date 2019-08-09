var __awaiter =
  (this && this.__awaiter) ||
  function(e, t, n, r) {
    return new (n || (n = Promise))(function(i, o) {
      function s(e) {
        try {
          l(r.next(e));
        } catch (e) {
          o(e);
        }
      }
      function a(e) {
        try {
          l(r["throw"](e));
        } catch (e) {
          o(e);
        }
      }
      function l(e) {
        e.done
          ? i(e.value)
          : new n(function(t) {
              t(e.value);
            }).then(s, a);
      }
      l((r = r.apply(e, t || [])).next());
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
      r,
      i,
      o,
      s;
    return (
      (s = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol === "function" &&
        (s[Symbol.iterator] = function() {
          return this;
        }),
      s
    );
    function a(e) {
      return function(t) {
        return l([e, t]);
      };
    }
    function l(s) {
      if (r) throw new TypeError("Generator is already executing.");
      while (n)
        try {
          if (
            ((r = 1),
            i &&
              (o =
                s[0] & 2
                  ? i["return"]
                  : s[0]
                  ? i["throw"] || ((o = i["return"]) && o.call(i), 0)
                  : i.next) &&
              !(o = o.call(i, s[1])).done)
          )
            return o;
          if (((i = 0), o)) s = [s[0] & 2, o.value];
          switch (s[0]) {
            case 0:
            case 1:
              o = s;
              break;
            case 4:
              n.label++;
              return { value: s[1], done: false };
            case 5:
              n.label++;
              i = s[1];
              s = [0];
              continue;
            case 7:
              s = n.ops.pop();
              n.trys.pop();
              continue;
            default:
              if (
                !((o = n.trys), (o = o.length > 0 && o[o.length - 1])) &&
                (s[0] === 6 || s[0] === 2)
              ) {
                n = 0;
                continue;
              }
              if (s[0] === 3 && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                n.label = s[1];
                break;
              }
              if (s[0] === 6 && n.label < o[1]) {
                n.label = o[1];
                o = s;
                break;
              }
              if (o && n.label < o[2]) {
                n.label = o[2];
                n.ops.push(s);
                break;
              }
              if (o[2]) n.ops.pop();
              n.trys.pop();
              continue;
          }
          s = t.call(e, n);
        } catch (e) {
          s = [6, e];
          i = 0;
        } finally {
          r = o = 0;
        }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: true };
    }
  };
System.register(
  [
    "./p-83e6ea9f.system.js",
    "./p-05263177.system.js",
    "./p-6a603f00.system.js",
    "./p-307e3eda.system.js",
    "./p-5d81f478.system.js"
  ],
  function(e) {
    "use strict";
    var t, n, r, i, o, s, a, l, d, u, c, f, p, m;
    return {
      setters: [
        function(e) {
          t = e.r;
          n = e.e;
          r = e.d;
          i = e.h;
          o = e.H;
          s = e.f;
        },
        function(e) {
          a = e.B;
          l = e.p;
          d = e.a;
          u = e.e;
        },
        function(e) {
          c = e.g;
        },
        function(e) {
          f = e.a;
          p = e.d;
        },
        function(e) {
          m = e.d;
        }
      ],
      execute: function() {
        var h = function(e, t) {
          var n = new e();
          var r = new e();
          r.addElement(t.querySelector("ion-backdrop"));
          var i = new e();
          i.addElement(t.querySelector(".modal-wrapper"));
          i.beforeStyles({ opacity: 1 }).fromTo("translateY", "100%", "0%");
          r.fromTo("opacity", 0.01, 0.4);
          return Promise.resolve(
            n
              .addElement(t)
              .easing("cubic-bezier(0.36,0.66,0.04,1)")
              .duration(400)
              .beforeAddClass("show-modal")
              .add(r)
              .add(i)
          );
        };
        var y = function(e, t) {
          var n = new e();
          var r = new e();
          r.addElement(t.querySelector("ion-backdrop"));
          var i = new e();
          var o = t.querySelector(".modal-wrapper");
          i.addElement(o);
          var s = o.getBoundingClientRect();
          i.beforeStyles({ opacity: 1 }).fromTo(
            "translateY",
            "0%",
            t.ownerDocument.defaultView.innerHeight - s.top + "px"
          );
          r.fromTo("opacity", 0.4, 0);
          return Promise.resolve(
            n
              .addElement(t)
              .easing("ease-out")
              .duration(250)
              .add(r)
              .add(i)
          );
        };
        var v = function(e, t) {
          var n = new e();
          var r = new e();
          r.addElement(t.querySelector("ion-backdrop"));
          var i = new e();
          i.addElement(t.querySelector(".modal-wrapper"));
          i.fromTo("opacity", 0.01, 1).fromTo("translateY", "40px", "0px");
          r.fromTo("opacity", 0.01, 0.32);
          return Promise.resolve(
            n
              .addElement(t)
              .easing("cubic-bezier(0.36,0.66,0.04,1)")
              .duration(280)
              .beforeAddClass("show-modal")
              .add(r)
              .add(i)
          );
        };
        var w = function(e, t) {
          var n = new e();
          var r = new e();
          r.addElement(t.querySelector("ion-backdrop"));
          var i = new e();
          var o = t.querySelector(".modal-wrapper");
          i.addElement(o);
          i.fromTo("opacity", 0.99, 0).fromTo("translateY", "0px", "40px");
          r.fromTo("opacity", 0.32, 0);
          return Promise.resolve(
            n
              .addElement(t)
              .easing("cubic-bezier(0.47,0,0.745,0.715)")
              .duration(200)
              .add(r)
              .add(i)
          );
        };
        var b = e(
          "ion_modal",
          (function() {
            function e(e) {
              var i = this;
              t(this, e);
              this.presented = false;
              this.mode = n(this);
              this.keyboardClose = true;
              this.backdropDismiss = true;
              this.showBackdrop = true;
              this.animated = true;
              this.onBackdropTap = function() {
                i.dismiss(undefined, a);
              };
              this.onDismiss = function(e) {
                e.stopPropagation();
                e.preventDefault();
                i.dismiss();
              };
              this.onLifecycle = function(e) {
                var t = i.usersElement;
                var n = D[e.type];
                if (t && n) {
                  var r = new CustomEvent(n, {
                    bubbles: false,
                    cancelable: false,
                    detail: e.detail
                  });
                  t.dispatchEvent(r);
                }
              };
              this.didPresent = r(this, "ionModalDidPresent", 7);
              this.willPresent = r(this, "ionModalWillPresent", 7);
              this.willDismiss = r(this, "ionModalWillDismiss", 7);
              this.didDismiss = r(this, "ionModalDidDismiss", 7);
            }
            e.prototype.present = function() {
              return __awaiter(this, void 0, void 0, function() {
                var e, t, n;
                return __generator(this, function(r) {
                  switch (r.label) {
                    case 0:
                      if (this.presented) {
                        return [2];
                      }
                      e = this.el.querySelector(".modal-wrapper");
                      if (!e) {
                        throw new Error("container is undefined");
                      }
                      t = Object.assign({}, this.componentProps, {
                        modal: this.el
                      });
                      n = this;
                      return [
                        4,
                        f(this.delegate, e, this.component, ["ion-page"], t)
                      ];
                    case 1:
                      n.usersElement = r.sent();
                      return [4, m(this.usersElement)];
                    case 2:
                      r.sent();
                      return [2, l(this, "modalEnter", h, v)];
                  }
                });
              });
            };
            e.prototype.dismiss = function(e, t) {
              return __awaiter(this, void 0, void 0, function() {
                var n;
                return __generator(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return [4, d(this, e, t, "modalLeave", y, w)];
                    case 1:
                      n = r.sent();
                      if (!n) return [3, 3];
                      return [4, p(this.delegate, this.usersElement)];
                    case 2:
                      r.sent();
                      r.label = 3;
                    case 3:
                      return [2, n];
                  }
                });
              });
            };
            e.prototype.onDidDismiss = function() {
              return u(this.el, "ionModalDidDismiss");
            };
            e.prototype.onWillDismiss = function() {
              return u(this.el, "ionModalWillDismiss");
            };
            e.prototype.render = function() {
              var e, t;
              var r = n(this);
              return i(
                o,
                {
                  "no-router": true,
                  "aria-modal": "true",
                  class: Object.assign(
                    ((e = {}), (e[r] = true), e),
                    c(this.cssClass)
                  ),
                  style: { zIndex: "" + (2e4 + this.overlayIndex) },
                  onIonBackdropTap: this.onBackdropTap,
                  onIonDismiss: this.onDismiss,
                  onIonModalDidPresent: this.onLifecycle,
                  onIonModalWillPresent: this.onLifecycle,
                  onIonModalWillDismiss: this.onLifecycle,
                  onIonModalDidDismiss: this.onLifecycle
                },
                i("ion-backdrop", {
                  visible: this.showBackdrop,
                  tappable: this.backdropDismiss
                }),
                i("div", {
                  role: "dialog",
                  class:
                    ((t = {}), (t["modal-wrapper"] = true), (t[r] = true), t)
                })
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
                return ".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}";
              },
              enumerable: true,
              configurable: true
            });
            return e;
          })()
        );
        var D = {
          ionModalDidPresent: "ionViewDidEnter",
          ionModalWillPresent: "ionViewWillEnter",
          ionModalWillDismiss: "ionViewWillLeave",
          ionModalDidDismiss: "ionViewDidLeave"
        };
      }
    };
  }
);
