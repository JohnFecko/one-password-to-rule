var __awaiter =
  (this && this.__awaiter) ||
  function(e, n, t, r) {
    return new (t || (t = Promise))(function(i, a) {
      function o(e) {
        try {
          u(r.next(e));
        } catch (e) {
          a(e);
        }
      }
      function s(e) {
        try {
          u(r["throw"](e));
        } catch (e) {
          a(e);
        }
      }
      function u(e) {
        e.done
          ? i(e.value)
          : new t(function(n) {
              n(e.value);
            }).then(o, s);
      }
      u((r = r.apply(e, n || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(e, n) {
    var t = {
        label: 0,
        sent: function() {
          if (a[0] & 1) throw a[1];
          return a[1];
        },
        trys: [],
        ops: []
      },
      r,
      i,
      a,
      o;
    return (
      (o = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol === "function" &&
        (o[Symbol.iterator] = function() {
          return this;
        }),
      o
    );
    function s(e) {
      return function(n) {
        return u([e, n]);
      };
    }
    function u(o) {
      if (r) throw new TypeError("Generator is already executing.");
      while (t)
        try {
          if (
            ((r = 1),
            i &&
              (a =
                o[0] & 2
                  ? i["return"]
                  : o[0]
                  ? i["throw"] || ((a = i["return"]) && a.call(i), 0)
                  : i.next) &&
              !(a = a.call(i, o[1])).done)
          )
            return a;
          if (((i = 0), a)) o = [o[0] & 2, a.value];
          switch (o[0]) {
            case 0:
            case 1:
              a = o;
              break;
            case 4:
              t.label++;
              return { value: o[1], done: false };
            case 5:
              t.label++;
              i = o[1];
              o = [0];
              continue;
            case 7:
              o = t.ops.pop();
              t.trys.pop();
              continue;
            default:
              if (
                !((a = t.trys), (a = a.length > 0 && a[a.length - 1])) &&
                (o[0] === 6 || o[0] === 2)
              ) {
                t = 0;
                continue;
              }
              if (o[0] === 3 && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                t.label = o[1];
                break;
              }
              if (o[0] === 6 && t.label < a[1]) {
                t.label = a[1];
                a = o;
                break;
              }
              if (a && t.label < a[2]) {
                t.label = a[2];
                t.ops.push(o);
                break;
              }
              if (a[2]) t.ops.pop();
              t.trys.pop();
              continue;
          }
          o = n.call(e, t);
        } catch (e) {
          o = [6, e];
          i = 0;
        } finally {
          r = a = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: true };
    }
  };
System.register(["./p-83e6ea9f.system.js"], function(e, n) {
  "use strict";
  var t;
  return {
    setters: [
      function(e) {
        t = e.w;
      }
    ],
    execute: function() {
      var r = this;
      var i = "ionViewWillEnter";
      var a = "ionViewDidEnter";
      var o = e("a", "ionViewWillLeave");
      var s = e("b", "ionViewDidLeave");
      var u = e("L", "ionViewWillUnload");
      var l = function() {
        return n.import("./p-df4cf100.system.js");
      };
      var c = function() {
        return n.import("./p-e05ecd91.system.js");
      };
      var f = e("t", function(e) {
        return new Promise(function(n, r) {
          t(function() {
            v(e);
            d(e).then(
              function(t) {
                if (t.animation) {
                  t.animation.destroy();
                }
                h(e);
                n(t);
              },
              function(n) {
                h(e);
                r(n);
              }
            );
          });
        });
      });
      var v = function(e) {
        var n = e.enteringEl;
        var t = e.leavingEl;
        P(n, t, e.direction);
        if (e.showGoBack) {
          n.classList.add("can-go-back");
        } else {
          n.classList.remove("can-go-back");
        }
        C(n, false);
        if (t) {
          C(t, false);
        }
      };
      var d = function(e) {
        return __awaiter(r, void 0, void 0, function() {
          var n, t;
          return __generator(this, function(r) {
            switch (r.label) {
              case 0:
                return [4, p(e)];
              case 1:
                n = r.sent();
                t = n ? b(n, e) : m(e);
                return [2, t];
            }
          });
        });
      };
      var h = function(e) {
        var n = e.enteringEl;
        var t = e.leavingEl;
        n.classList.remove("ion-page-invisible");
        if (t !== undefined) {
          t.classList.remove("ion-page-invisible");
        }
      };
      var p = function(e) {
        return __awaiter(r, void 0, void 0, function() {
          var n, t;
          return __generator(this, function(r) {
            switch (r.label) {
              case 0:
                if (!e.leavingEl || !e.animated || e.duration === 0) {
                  return [2, undefined];
                }
                if (e.animationBuilder) {
                  return [2, e.animationBuilder];
                }
                if (!(e.mode === "ios")) return [3, 2];
                return [4, l()];
              case 1:
                t = r.sent().iosTransitionAnimation;
                return [3, 4];
              case 2:
                return [4, c()];
              case 3:
                t = r.sent().mdTransitionAnimation;
                r.label = 4;
              case 4:
                n = t;
                return [2, n];
            }
          });
        });
      };
      var b = function(e, t) {
        return __awaiter(r, void 0, void 0, function() {
          var r;
          return __generator(this, function(i) {
            switch (i.label) {
              case 0:
                return [4, g(t, true)];
              case 1:
                i.sent();
                return [
                  4,
                  n.import("./p-57fba54f.system.js").then(function(n) {
                    return n.create(e, t.baseEl, t);
                  })
                ];
              case 2:
                r = i.sent();
                y(t.enteringEl, t.leavingEl);
                return [4, _(r, t)];
              case 3:
                i.sent();
                if (t.progressCallback) {
                  t.progressCallback(undefined);
                }
                if (r.hasCompleted) {
                  E(t.enteringEl, t.leavingEl);
                }
                return [2, { hasCompleted: r.hasCompleted, animation: r }];
            }
          });
        });
      };
      var m = function(e) {
        return __awaiter(r, void 0, void 0, function() {
          var n, t;
          return __generator(this, function(r) {
            switch (r.label) {
              case 0:
                n = e.enteringEl;
                t = e.leavingEl;
                return [4, g(e, false)];
              case 1:
                r.sent();
                y(n, t);
                E(n, t);
                return [2, { hasCompleted: true }];
            }
          });
        });
      };
      var g = function(e, n) {
        return __awaiter(r, void 0, void 0, function() {
          var t, r;
          return __generator(this, function(i) {
            switch (i.label) {
              case 0:
                t = e.deepWait !== undefined ? e.deepWait : n;
                r = t
                  ? [x(e.enteringEl), x(e.leavingEl)]
                  : [L(e.enteringEl), L(e.leavingEl)];
                return [4, Promise.all(r)];
              case 1:
                i.sent();
                return [4, w(e.viewIsReady, e.enteringEl)];
              case 2:
                i.sent();
                return [2];
            }
          });
        });
      };
      var w = function(e, n) {
        return __awaiter(r, void 0, void 0, function() {
          return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                if (!e) return [3, 2];
                return [4, e(n)];
              case 1:
                t.sent();
                t.label = 2;
              case 2:
                return [2];
            }
          });
        });
      };
      var _ = function(e, n) {
        var t = n.progressCallback;
        var r = new Promise(function(n) {
          return e.onFinish(n);
        });
        if (t) {
          e.progressStart();
          t(e);
        } else {
          e.play();
        }
        return r;
      };
      var y = function(e, n) {
        k(n, o);
        k(e, i);
      };
      var E = function(e, n) {
        k(e, a);
        k(n, s);
      };
      var k = e("l", function(e, n) {
        if (e) {
          var t = new CustomEvent(n, { bubbles: false, cancelable: false });
          e.dispatchEvent(t);
        }
      });
      var L = function(e) {
        if (e && e.componentOnReady) {
          return e.componentOnReady();
        }
        return Promise.resolve();
      };
      var x = e("d", function(e) {
        return __awaiter(r, void 0, void 0, function() {
          var n, t;
          return __generator(this, function(r) {
            switch (r.label) {
              case 0:
                n = e;
                if (!n) return [3, 4];
                if (!(n.componentOnReady != null)) return [3, 2];
                return [4, n.componentOnReady()];
              case 1:
                t = r.sent();
                if (t != null) {
                  return [2];
                }
                r.label = 2;
              case 2:
                return [4, Promise.all(Array.from(n.children).map(x))];
              case 3:
                r.sent();
                r.label = 4;
              case 4:
                return [2];
            }
          });
        });
      });
      var C = e("s", function(e, n) {
        if (n) {
          e.setAttribute("aria-hidden", "true");
          e.classList.add("ion-page-hidden");
        } else {
          e.hidden = false;
          e.removeAttribute("aria-hidden");
          e.classList.remove("ion-page-hidden");
        }
      });
      var P = function(e, n, t) {
        if (e !== undefined) {
          e.style.zIndex = t === "back" ? "99" : "101";
        }
        if (n !== undefined) {
          n.style.zIndex = "100";
        }
      };
    }
  };
});