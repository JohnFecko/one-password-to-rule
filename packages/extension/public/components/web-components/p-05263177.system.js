var __awaiter =
  (this && this.__awaiter) ||
  function(e, n, t, r) {
    return new (t || (t = Promise))(function(i, a) {
      function o(e) {
        try {
          s(r.next(e));
        } catch (e) {
          a(e);
        }
      }
      function u(e) {
        try {
          s(r["throw"](e));
        } catch (e) {
          a(e);
        }
      }
      function s(e) {
        e.done
          ? i(e.value)
          : new t(function(n) {
              n(e.value);
            }).then(o, u);
      }
      s((r = r.apply(e, n || [])).next());
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
      (o = { next: u(0), throw: u(1), return: u(2) }),
      typeof Symbol === "function" &&
        (o[Symbol.iterator] = function() {
          return this;
        }),
      o
    );
    function u(e) {
      return function(n) {
        return s([e, n]);
      };
    }
    function s(o) {
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
        t = e.c;
      }
    ],
    execute: function() {
      var r = this;
      var i = 0;
      var a = function(e) {
        return {
          create: function(n) {
            return f(e, n);
          },
          dismiss: function(n, t, r) {
            return d(document, n, t, e, r);
          },
          getTop: function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(n) {
                return [2, m(document, e)];
              });
            });
          }
        };
      };
      var o = e("j", a("ion-alert"));
      var u = e("h", a("ion-action-sheet"));
      var s = e("b", a("ion-picker"));
      var c = e("f", a("ion-popover"));
      var f = e("c", function(e, n) {
        return customElements.whenDefined(e).then(function() {
          var t = document;
          var r = t.createElement(e);
          l(t);
          Object.assign(r, n);
          r.classList.add("overlay-hidden");
          var a = i++;
          r.overlayIndex = a;
          if (!r.hasAttribute("id")) {
            r.id = "ion-overlay-" + a;
          }
          y(t).appendChild(r);
          return r.componentOnReady();
        });
      });
      var l = function(e) {
        if (i === 0) {
          i = 1;
          e.addEventListener("focusin", function(n) {
            var t = m(e);
            if (t && t.backdropDismiss && !k(t, n.target)) {
              var r = t.querySelector("input,button");
              if (r) {
                r.focus();
              }
            }
          });
          e.addEventListener("ionBackButton", function(n) {
            var t = m(e);
            if (t && t.backdropDismiss) {
              n.detail.register(100, function() {
                return t.dismiss(undefined, A);
              });
            }
          });
          e.addEventListener("keyup", function(n) {
            if (n.key === "Escape") {
              var t = m(e);
              if (t && t.backdropDismiss) {
                t.dismiss(undefined, A);
              }
            }
          });
        }
      };
      var d = e("d", function(e, n, t, r, i) {
        var a = m(e, r, i);
        if (!a) {
          return Promise.reject("overlay does not exist");
        }
        return a.dismiss(n, t);
      });
      var v = function(e, n) {
        var t = Array.from(y(e).children).filter(function(e) {
          return e.overlayIndex > 0;
        });
        if (n === undefined) {
          return t;
        }
        n = n.toUpperCase();
        return t.filter(function(e) {
          return e.tagName === n;
        });
      };
      var m = e("g", function(e, n, t) {
        var r = v(e, n);
        return t === undefined
          ? r[r.length - 1]
          : r.find(function(e) {
              return e.id === t;
            });
      });
      var p = e("p", function(e, n, i, a, o) {
        return __awaiter(r, void 0, void 0, function() {
          var r, u;
          return __generator(this, function(s) {
            switch (s.label) {
              case 0:
                if (e.presented) {
                  return [2];
                }
                e.presented = true;
                e.willPresent.emit();
                r = e.enterAnimation
                  ? e.enterAnimation
                  : t.get(n, e.mode === "ios" ? i : a);
                return [4, b(e, r, e.el, o)];
              case 1:
                u = s.sent();
                if (u) {
                  e.didPresent.emit();
                }
                return [2];
            }
          });
        });
      });
      var h = e("a", function(e, n, i, a, o, u, s) {
        return __awaiter(r, void 0, void 0, function() {
          var r, c;
          return __generator(this, function(f) {
            switch (f.label) {
              case 0:
                if (!e.presented) {
                  return [2, false];
                }
                e.presented = false;
                f.label = 1;
              case 1:
                f.trys.push([1, 3, , 4]);
                e.willDismiss.emit({ data: n, role: i });
                r = e.leaveAnimation
                  ? e.leaveAnimation
                  : t.get(a, e.mode === "ios" ? o : u);
                return [4, b(e, r, e.el, s)];
              case 2:
                f.sent();
                e.didDismiss.emit({ data: n, role: i });
                return [3, 4];
              case 3:
                c = f.sent();
                console.error(c);
                return [3, 4];
              case 4:
                e.el.remove();
                return [2, true];
            }
          });
        });
      });
      var y = function(e) {
        return e.querySelector("ion-app") || e.body;
      };
      var b = function(e, i, a, o) {
        return __awaiter(r, void 0, void 0, function() {
          var r, u, s;
          return __generator(this, function(c) {
            switch (c.label) {
              case 0:
                if (e.animation) {
                  e.animation.destroy();
                  e.animation = undefined;
                  return [2, false];
                }
                a.classList.remove("overlay-hidden");
                r = a.shadowRoot || e.el;
                return [
                  4,
                  n.import("./p-57fba54f.system.js").then(function(e) {
                    return e.create(i, r, o);
                  })
                ];
              case 1:
                u = c.sent();
                e.animation = u;
                if (!e.animated || !t.getBoolean("animated", true)) {
                  u.duration(0);
                }
                if (e.keyboardClose) {
                  u.beforeAddWrite(function() {
                    var e = a.ownerDocument.activeElement;
                    if (e && e.matches("input, ion-input, ion-textarea")) {
                      e.blur();
                    }
                  });
                }
                return [4, u.playAsync()];
              case 2:
                c.sent();
                s = u.hasCompleted;
                u.destroy();
                e.animation = undefined;
                return [2, s];
            }
          });
        });
      };
      var w = e("e", function(e, n) {
        var t;
        var r = new Promise(function(e) {
          return (t = e);
        });
        _(e, n, function(e) {
          t(e.detail);
        });
        return r;
      });
      var _ = function(e, n, t) {
        var r = function(i) {
          e.removeEventListener(n, r);
          t(i);
        };
        e.addEventListener(n, r);
      };
      var g = e("i", function(e) {
        return e === "cancel" || e === A;
      });
      var k = function(e, n) {
        while (n) {
          if (n === e) {
            return true;
          }
          n = n.parentElement;
        }
        return false;
      };
      var E = function(e) {
        return e();
      };
      var x = e("s", function(e, n) {
        if (typeof e === "function") {
          var r = t.get("_zoneGate", E);
          return r(function() {
            try {
              return e(n);
            } catch (e) {
              console.error(e);
            }
          });
        }
        return undefined;
      });
      var A = e("B", "backdrop");
    }
  };
});