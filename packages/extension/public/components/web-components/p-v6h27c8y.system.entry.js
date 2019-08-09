var __awaiter =
  (this && this.__awaiter) ||
  function(e, t, r, o) {
    return new (r || (r = Promise))(function(n, i) {
      function s(e) {
        try {
          l(o.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          l(o["throw"](e));
        } catch (e) {
          i(e);
        }
      }
      function l(e) {
        e.done
          ? n(e.value)
          : new r(function(t) {
              t(e.value);
            }).then(s, a);
      }
      l((o = o.apply(e, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(e, t) {
    var r = {
        label: 0,
        sent: function() {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      },
      o,
      n,
      i,
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
      if (o) throw new TypeError("Generator is already executing.");
      while (r)
        try {
          if (
            ((o = 1),
            n &&
              (i =
                s[0] & 2
                  ? n["return"]
                  : s[0]
                  ? n["throw"] || ((i = n["return"]) && i.call(n), 0)
                  : n.next) &&
              !(i = i.call(n, s[1])).done)
          )
            return i;
          if (((n = 0), i)) s = [s[0] & 2, i.value];
          switch (s[0]) {
            case 0:
            case 1:
              i = s;
              break;
            case 4:
              r.label++;
              return { value: s[1], done: false };
            case 5:
              r.label++;
              n = s[1];
              s = [0];
              continue;
            case 7:
              s = r.ops.pop();
              r.trys.pop();
              continue;
            default:
              if (
                !((i = r.trys), (i = i.length > 0 && i[i.length - 1])) &&
                (s[0] === 6 || s[0] === 2)
              ) {
                r = 0;
                continue;
              }
              if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                r.label = s[1];
                break;
              }
              if (s[0] === 6 && r.label < i[1]) {
                r.label = i[1];
                i = s;
                break;
              }
              if (i && r.label < i[2]) {
                r.label = i[2];
                r.ops.push(s);
                break;
              }
              if (i[2]) r.ops.pop();
              r.trys.pop();
              continue;
          }
          s = t.call(e, r);
        } catch (e) {
          s = [6, e];
          n = 0;
        } finally {
          o = i = 0;
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
    var t, r, o, n, i, s, a, l, p, u, c, d, v, f;
    return {
      setters: [
        function(e) {
          t = e.r;
          r = e.e;
          o = e.d;
          n = e.h;
          i = e.H;
          s = e.f;
        },
        function(e) {
          a = e.B;
          l = e.p;
          p = e.a;
          u = e.e;
        },
        function(e) {
          c = e.g;
        },
        function(e) {
          d = e.a;
          v = e.d;
        },
        function(e) {
          f = e.d;
        }
      ],
      execute: function() {
        var h = function(e, t, r) {
          var o = "top";
          var n = "left";
          var i = t.querySelector(".popover-content");
          var s = i.getBoundingClientRect();
          var a = s.width;
          var l = s.height;
          var p = t.ownerDocument.defaultView.innerWidth;
          var u = t.ownerDocument.defaultView.innerHeight;
          var c = r && r.target && r.target.getBoundingClientRect();
          var d = c != null && "top" in c ? c.top : u / 2 - l / 2;
          var v = c != null && "left" in c ? c.left : p / 2;
          var f = (c && c.width) || 0;
          var h = (c && c.height) || 0;
          var y = t.querySelector(".popover-arrow");
          var w = y.getBoundingClientRect();
          var b = w.width;
          var g = w.height;
          if (c == null) {
            y.style.display = "none";
          }
          var D = { top: d + h, left: v + f / 2 - b / 2 };
          var P = { top: d + h + (g - 1), left: v + f / 2 - a / 2 };
          var E = false;
          var x = false;
          if (P.left < m + 25) {
            E = true;
            P.left = m;
          } else if (a + m + P.left + 25 > p) {
            x = true;
            P.left = p - a - m;
            n = "right";
          }
          if (d + h + l > u && d - l > 0) {
            D.top = d - (g + 1);
            P.top = d - l - (g - 1);
            t.className = t.className + " popover-bottom";
            o = "bottom";
          } else if (d + h + l > u) {
            i.style.bottom = m + "%";
          }
          y.style.top = D.top + "px";
          y.style.left = D.left + "px";
          i.style.top = P.top + "px";
          i.style.left = P.left + "px";
          if (E) {
            i.style.left =
              "calc(" + P.left + "px + var(--ion-safe-area-left, 0px))";
          }
          if (x) {
            i.style.left =
              "calc(" + P.left + "px - var(--ion-safe-area-right, 0px))";
          }
          i.style.transformOrigin = o + " " + n;
          var _ = new e();
          var S = new e();
          S.addElement(t.querySelector("ion-backdrop"));
          S.fromTo("opacity", 0.01, 0.08);
          var k = new e();
          k.addElement(t.querySelector(".popover-wrapper"));
          k.fromTo("opacity", 0.01, 1);
          return Promise.resolve(
            _.addElement(t)
              .easing("ease")
              .duration(100)
              .add(S)
              .add(k)
          );
        };
        var m = 5;
        var y = function(e, t) {
          var r = new e();
          var o = new e();
          o.addElement(t.querySelector("ion-backdrop"));
          var n = new e();
          n.addElement(t.querySelector(".popover-wrapper"));
          n.fromTo("opacity", 0.99, 0);
          o.fromTo("opacity", 0.08, 0);
          return Promise.resolve(
            r
              .addElement(t)
              .easing("ease")
              .duration(500)
              .add(o)
              .add(n)
          );
        };
        var w = function(e, t, r) {
          var o = t.ownerDocument;
          var n = o.dir === "rtl";
          var i = "top";
          var s = n ? "right" : "left";
          var a = t.querySelector(".popover-content");
          var l = a.getBoundingClientRect();
          var p = l.width;
          var u = l.height;
          var c = o.defaultView.innerWidth;
          var d = o.defaultView.innerHeight;
          var v = r && r.target && r.target.getBoundingClientRect();
          var f = v != null && "bottom" in v ? v.bottom : d / 2 - u / 2;
          var h =
            v != null && "left" in v
              ? n
                ? v.left - p + v.width
                : v.left
              : c / 2 - p / 2;
          var m = (v && v.height) || 0;
          var y = { top: f, left: h };
          if (y.left < b) {
            y.left = b;
            s = "left";
          } else if (p + b + y.left > c) {
            y.left = c - p - b;
            s = "right";
          }
          if (f + m + u > d && f - u > 0) {
            y.top = f - u - m;
            t.className = t.className + " popover-bottom";
            i = "bottom";
          } else if (f + m + u > d) {
            a.style.bottom = b + "px";
          }
          a.style.top = y.top + "px";
          a.style.left = y.left + "px";
          a.style.transformOrigin = i + " " + s;
          var w = new e();
          var g = new e();
          g.addElement(t.querySelector("ion-backdrop"));
          g.fromTo("opacity", 0.01, 0.32);
          var D = new e();
          D.addElement(t.querySelector(".popover-wrapper"));
          D.fromTo("opacity", 0.01, 1);
          var P = new e();
          P.addElement(t.querySelector(".popover-content"));
          P.fromTo("scale", 0.001, 1);
          var E = new e();
          E.addElement(t.querySelector(".popover-viewport"));
          E.fromTo("opacity", 0.01, 1);
          return Promise.resolve(
            w
              .addElement(t)
              .easing("cubic-bezier(0.36,0.66,0.04,1)")
              .duration(300)
              .add(g)
              .add(D)
              .add(P)
              .add(E)
          );
        };
        var b = 12;
        var g = function(e, t) {
          var r = new e();
          var o = new e();
          o.addElement(t.querySelector("ion-backdrop"));
          var n = new e();
          n.addElement(t.querySelector(".popover-wrapper"));
          n.fromTo("opacity", 0.99, 0);
          o.fromTo("opacity", 0.32, 0);
          return Promise.resolve(
            r
              .addElement(t)
              .easing("ease")
              .duration(500)
              .add(o)
              .add(n)
          );
        };
        var D = e(
          "ion_popover",
          (function() {
            function e(e) {
              var n = this;
              t(this, e);
              this.presented = false;
              this.mode = r(this);
              this.keyboardClose = true;
              this.backdropDismiss = true;
              this.showBackdrop = true;
              this.translucent = false;
              this.animated = true;
              this.onDismiss = function(e) {
                e.stopPropagation();
                e.preventDefault();
                n.dismiss();
              };
              this.onBackdropTap = function() {
                n.dismiss(undefined, a);
              };
              this.onLifecycle = function(e) {
                var t = n.usersElement;
                var r = P[e.type];
                if (t && r) {
                  var o = new CustomEvent(r, {
                    bubbles: false,
                    cancelable: false,
                    detail: e.detail
                  });
                  t.dispatchEvent(o);
                }
              };
              this.didPresent = o(this, "ionPopoverDidPresent", 7);
              this.willPresent = o(this, "ionPopoverWillPresent", 7);
              this.willDismiss = o(this, "ionPopoverWillDismiss", 7);
              this.didDismiss = o(this, "ionPopoverDidDismiss", 7);
            }
            e.prototype.present = function() {
              return __awaiter(this, void 0, void 0, function() {
                var e, t, r;
                return __generator(this, function(o) {
                  switch (o.label) {
                    case 0:
                      if (this.presented) {
                        return [2];
                      }
                      e = this.el.querySelector(".popover-content");
                      if (!e) {
                        throw new Error("container is undefined");
                      }
                      t = Object.assign({}, this.componentProps, {
                        popover: this.el
                      });
                      r = this;
                      return [
                        4,
                        d(
                          this.delegate,
                          e,
                          this.component,
                          ["popover-viewport", this.el["s-sc"]],
                          t
                        )
                      ];
                    case 1:
                      r.usersElement = o.sent();
                      return [4, f(this.usersElement)];
                    case 2:
                      o.sent();
                      return [2, l(this, "popoverEnter", h, w, this.event)];
                  }
                });
              });
            };
            e.prototype.dismiss = function(e, t) {
              return __awaiter(this, void 0, void 0, function() {
                var r;
                return __generator(this, function(o) {
                  switch (o.label) {
                    case 0:
                      return [
                        4,
                        p(this, e, t, "popoverLeave", y, g, this.event)
                      ];
                    case 1:
                      r = o.sent();
                      if (!r) return [3, 3];
                      return [4, v(this.delegate, this.usersElement)];
                    case 2:
                      o.sent();
                      o.label = 3;
                    case 3:
                      return [2, r];
                  }
                });
              });
            };
            e.prototype.onDidDismiss = function() {
              return u(this.el, "ionPopoverDidDismiss");
            };
            e.prototype.onWillDismiss = function() {
              return u(this.el, "ionPopoverWillDismiss");
            };
            e.prototype.render = function() {
              var e;
              var t = r(this);
              var o = this.onLifecycle;
              return n(
                i,
                {
                  "aria-modal": "true",
                  "no-router": true,
                  style: { zIndex: "" + (2e4 + this.overlayIndex) },
                  class: Object.assign(
                    {},
                    c(this.cssClass),
                    ((e = {}),
                    (e[t] = true),
                    (e["popover-translucent"] = this.translucent),
                    e)
                  ),
                  onIonPopoverDidPresent: o,
                  onIonPopoverWillPresent: o,
                  onIonPopoverWillDismiss: o,
                  onIonPopoverDidDismiss: o,
                  onIonDismiss: this.onDismiss,
                  onIonBackdropTap: this.onBackdropTap
                },
                n("ion-backdrop", {
                  tappable: this.backdropDismiss,
                  visible: this.showBackdrop
                }),
                n(
                  "div",
                  { class: "popover-wrapper" },
                  n("div", { class: "popover-arrow" }),
                  n("div", { class: "popover-content" })
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
                return '.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}';
              },
              enumerable: true,
              configurable: true
            });
            return e;
          })()
        );
        var P = {
          ionPopoverDidPresent: "ionViewDidEnter",
          ionPopoverWillPresent: "ionViewWillEnter",
          ionPopoverWillDismiss: "ionViewWillLeave",
          ionPopoverDidDismiss: "ionViewDidLeave"
        };
      }
    };
  }
);
