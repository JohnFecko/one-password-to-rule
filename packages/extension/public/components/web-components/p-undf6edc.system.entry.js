var __awaiter =
  (this && this.__awaiter) ||
  function(t, e, r, n) {
    return new (r || (r = Promise))(function(o, i) {
      function a(t) {
        try {
          s(n.next(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        try {
          s(n["throw"](t));
        } catch (t) {
          i(t);
        }
      }
      function s(t) {
        t.done
          ? o(t.value)
          : new r(function(e) {
              e(t.value);
            }).then(a, u);
      }
      s((n = n.apply(t, e || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(t, e) {
    var r = {
        label: 0,
        sent: function() {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      },
      n,
      o,
      i,
      a;
    return (
      (a = { next: u(0), throw: u(1), return: u(2) }),
      typeof Symbol === "function" &&
        (a[Symbol.iterator] = function() {
          return this;
        }),
      a
    );
    function u(t) {
      return function(e) {
        return s([t, e]);
      };
    }
    function s(a) {
      if (n) throw new TypeError("Generator is already executing.");
      while (r)
        try {
          if (
            ((n = 1),
            o &&
              (i =
                a[0] & 2
                  ? o["return"]
                  : a[0]
                  ? o["throw"] || ((i = o["return"]) && i.call(o), 0)
                  : o.next) &&
              !(i = i.call(o, a[1])).done)
          )
            return i;
          if (((o = 0), i)) a = [a[0] & 2, i.value];
          switch (a[0]) {
            case 0:
            case 1:
              i = a;
              break;
            case 4:
              r.label++;
              return { value: a[1], done: false };
            case 5:
              r.label++;
              o = a[1];
              a = [0];
              continue;
            case 7:
              a = r.ops.pop();
              r.trys.pop();
              continue;
            default:
              if (
                !((i = r.trys), (i = i.length > 0 && i[i.length - 1])) &&
                (a[0] === 6 || a[0] === 2)
              ) {
                r = 0;
                continue;
              }
              if (a[0] === 3 && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                r.label = a[1];
                break;
              }
              if (a[0] === 6 && r.label < i[1]) {
                r.label = i[1];
                i = a;
                break;
              }
              if (i && r.label < i[2]) {
                r.label = i[2];
                r.ops.push(a);
                break;
              }
              if (i[2]) r.ops.pop();
              r.trys.pop();
              continue;
          }
          a = e.call(t, r);
        } catch (t) {
          a = [6, t];
          o = 0;
        } finally {
          n = i = 0;
        }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: true };
    }
  };
System.register(["./p-83e6ea9f.system.js", "./p-0958cff4.system.js"], function(
  t
) {
  "use strict";
  var e, r, n, o;
  return {
    setters: [
      function(t) {
        e = t.r;
        r = t.d;
        n = t.f;
      },
      function(t) {
        o = t.e;
      }
    ],
    execute: function() {
      var i = this;
      var a = "root";
      var u = "forward";
      var s = "back";
      var f = function(t) {
        var e = t
          .filter(function(t) {
            return t.length > 0;
          })
          .join("/");
        return "/" + e;
      };
      var l = function(t) {
        var e = [];
        for (var r = 0, n = t; r < n.length; r++) {
          var o = n[r];
          for (var i = 0, a = o.path; i < a.length; i++) {
            var u = a[i];
            if (u[0] === ":") {
              var s = o.params && o.params[u.slice(1)];
              if (!s) {
                return null;
              }
              e.push(s);
            } else if (u !== "") {
              e.push(u);
            }
          }
        }
        return e;
      };
      var c = function(t, e, r, n, o, i) {
        var a = f(d(e).concat(n));
        if (r) {
          a = "#" + a;
        }
        if (o === u) {
          t.pushState(i, "", a);
        } else {
          t.replaceState(i, "", a);
        }
      };
      var h = function(t, e) {
        if (t.length > e.length) {
          return null;
        }
        if (t.length <= 1 && t[0] === "") {
          return e;
        }
        for (var r = 0; r < t.length; r++) {
          if (t[r].length > 0 && t[r] !== e[r]) {
            return null;
          }
        }
        if (e.length === t.length) {
          return [""];
        }
        return e.slice(t.length);
      };
      var v = function(t, e, r) {
        var n = t.pathname;
        if (r) {
          var o = t.hash;
          n = o[0] === "#" ? o.slice(1) : "";
        }
        var i = d(e);
        var a = d(n);
        return h(i, a);
      };
      var d = function(t) {
        if (t == null) {
          return [""];
        }
        var e = t
          .split("/")
          .map(function(t) {
            return t.trim();
          })
          .filter(function(t) {
            return t.length > 0;
          });
        if (e.length === 0) {
          return [""];
        } else {
          return e;
        }
      };
      var p = function(t) {
        console.group("[ion-core] ROUTES[" + t.length + "]");
        var e = function(t) {
          var e = [];
          t.forEach(function(t) {
            return e.push.apply(e, t.path);
          });
          var r = t.map(function(t) {
            return t.id;
          });
          console.debug(
            "%c " + f(e),
            "font-weight: bold; padding-left: 20px",
            "=>\t",
            "(" + r.join(", ") + ")"
          );
        };
        for (var r = 0, n = t; r < n.length; r++) {
          var o = n[r];
          e(o);
        }
        console.groupEnd();
      };
      var g = function(t) {
        console.group("[ion-core] REDIRECTS[" + t.length + "]");
        for (var e = 0, r = t; e < r.length; e++) {
          var n = r[e];
          if (n.to) {
            console.debug(
              "FROM: ",
              "$c " + f(n.from),
              "font-weight: bold",
              " TO: ",
              "$c " + f(n.to),
              "font-weight: bold"
            );
          }
        }
        console.groupEnd();
      };
      var w = function(t, e, r, n, o) {
        if (o === void 0) {
          o = false;
        }
        return __awaiter(i, void 0, void 0, function() {
          var i, u, s, f;
          return __generator(this, function(l) {
            switch (l.label) {
              case 0:
                l.trys.push([0, 6, , 7]);
                i = _(t);
                if (n >= e.length || !i) {
                  return [2, o];
                }
                return [4, i.componentOnReady()];
              case 1:
                l.sent();
                u = e[n];
                return [4, i.setRouteId(u.id, u.params, r)];
              case 2:
                s = l.sent();
                if (s.changed) {
                  r = a;
                  o = true;
                }
                return [4, w(s.element, e, r, n + 1, o)];
              case 3:
                o = l.sent();
                if (!s.markVisible) return [3, 5];
                return [4, s.markVisible()];
              case 4:
                l.sent();
                l.label = 5;
              case 5:
                return [2, o];
              case 6:
                f = l.sent();
                console.error(f);
                return [2, false];
              case 7:
                return [2];
            }
          });
        });
      };
      var m = function(t) {
        return __awaiter(i, void 0, void 0, function() {
          var e, r, n, o;
          return __generator(this, function(i) {
            switch (i.label) {
              case 0:
                e = [];
                n = t;
                i.label = 1;
              case 1:
                if (!true) return [3, 5];
                r = _(n);
                if (!r) return [3, 3];
                return [4, r.getRouteId()];
              case 2:
                o = i.sent();
                if (o) {
                  n = o.element;
                  o.element = undefined;
                  e.push(o);
                } else {
                  return [3, 5];
                }
                return [3, 4];
              case 3:
                return [3, 5];
              case 4:
                return [3, 1];
              case 5:
                return [2, { ids: e, outlet: r }];
            }
          });
        });
      };
      var b = function() {
        if (_(document.body)) {
          return Promise.resolve();
        }
        return new Promise(function(t) {
          window.addEventListener("ionNavWillLoad", t, { once: true });
        });
      };
      var y =
        ":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";
      var _ = function(t) {
        if (!t) {
          return undefined;
        }
        if (t.matches(y)) {
          return t;
        }
        var e = t.querySelector(y);
        return e ? e : undefined;
      };
      var R = function(t, e) {
        var r = e.from,
          n = e.to;
        if (n === undefined) {
          return false;
        }
        if (r.length > t.length) {
          return false;
        }
        for (var o = 0; o < r.length; o++) {
          var i = r[o];
          if (i === "*") {
            return true;
          }
          if (i !== t[o]) {
            return false;
          }
        }
        return r.length === t.length;
      };
      var P = function(t, e) {
        return e.find(function(e) {
          return R(t, e);
        });
      };
      var S = function(t, e) {
        var r = Math.min(t.length, e.length);
        var n = 0;
        for (; n < r; n++) {
          if (t[n].toLowerCase() !== e[n].id) {
            break;
          }
        }
        return n;
      };
      var C = function(t, e) {
        var r = new O(t);
        var n = false;
        var o;
        for (var i = 0; i < e.length; i++) {
          var a = e[i].path;
          if (a[0] === "") {
            n = true;
          } else {
            for (var u = 0, s = a; u < s.length; u++) {
              var f = s[u];
              var l = r.next();
              if (f[0] === ":") {
                if (l === "") {
                  return null;
                }
                o = o || [];
                var c = o[i] || (o[i] = {});
                c[f.slice(1)] = l;
              } else if (l !== f) {
                return null;
              }
            }
            n = false;
          }
        }
        var h = n ? n === (r.next() === "") : true;
        if (!h) {
          return null;
        }
        if (o) {
          return e.map(function(t, e) {
            return { id: t.id, path: t.path, params: E(t.params, o[e]) };
          });
        }
        return e;
      };
      var E = function(t, e) {
        if (!t && e) {
          return e;
        } else if (t && !e) {
          return t;
        } else if (t && e) {
          return Object.assign({}, t, e);
        }
        return undefined;
      };
      var N = function(t, e) {
        var r = null;
        var n = 0;
        var o = t.map(function(t) {
          return t.id;
        });
        for (var i = 0, a = e; i < a.length; i++) {
          var u = a[i];
          var s = S(o, u);
          if (s > n) {
            r = u;
            n = s;
          }
        }
        if (r) {
          return r.map(function(e, r) {
            return {
              id: e.id,
              path: e.path,
              params: E(e.params, t[r] && t[r].params)
            };
          });
        }
        return null;
      };
      var k = function(t, e) {
        var r = null;
        var n = 0;
        for (var o = 0, i = e; o < i.length; o++) {
          var a = i[o];
          var u = C(t, a);
          if (u !== null) {
            var s = L(u);
            if (s > n) {
              n = s;
              r = u;
            }
          }
        }
        return r;
      };
      var L = function(t) {
        var e = 1;
        var r = 1;
        for (var n = 0, o = t; n < o.length; n++) {
          var i = o[n];
          for (var a = 0, u = i.path; a < u.length; a++) {
            var s = u[a];
            if (s[0] === ":") {
              e += Math.pow(1, r);
            } else if (s !== "") {
              e += Math.pow(2, r);
            }
            r++;
          }
        }
        return e;
      };
      var O = (function() {
        function t(t) {
          this.path = t.slice();
        }
        t.prototype.next = function() {
          if (this.path.length > 0) {
            return this.path.shift();
          }
          return "";
        };
        return t;
      })();
      var U = function(t) {
        return Array.from(t.children)
          .filter(function(t) {
            return t.tagName === "ION-ROUTE-REDIRECT";
          })
          .map(function(t) {
            var e = T(t, "to");
            return { from: d(T(t, "from")), to: e == null ? undefined : d(e) };
          });
      };
      var x = function(t) {
        return W(D(t));
      };
      var D = function(t, e) {
        if (e === void 0) {
          e = t;
        }
        return Array.from(e.children)
          .filter(function(t) {
            return t.tagName === "ION-ROUTE" && t.component;
          })
          .map(function(e) {
            var r = T(e, "component");
            if (r == null) {
              throw new Error("component missing in ion-route");
            }
            return {
              path: d(T(e, "url")),
              id: r.toLowerCase(),
              params: e.componentProps,
              children: D(t, e)
            };
          });
      };
      var T = function(t, e) {
        if (e in t) {
          return t[e];
        }
        if (t.hasAttribute(e)) {
          return t.getAttribute(e);
        }
        return null;
      };
      var W = function(t) {
        var e = [];
        for (var r = 0, n = t; r < n.length; r++) {
          var o = n[r];
          I([], e, o);
        }
        return e;
      };
      var I = function(t, e, r) {
        var n = t.slice();
        n.push({ id: r.id, path: r.path, params: r.params });
        if (r.children.length === 0) {
          e.push(n);
          return;
        }
        for (var o = 0, i = r.children; o < i.length; o++) {
          var a = i[o];
          I(n, e, a);
        }
      };
      var j = t(
        "ion_router",
        (function() {
          function t(t) {
            e(this, t);
            this.previousPath = null;
            this.busy = false;
            this.state = 0;
            this.lastState = 0;
            this.root = "/";
            this.useHash = true;
            this.ionRouteWillChange = r(this, "ionRouteWillChange", 7);
            this.ionRouteDidChange = r(this, "ionRouteDidChange", 7);
          }
          t.prototype.componentWillLoad = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(t) {
                switch (t.label) {
                  case 0:
                    console.debug("[ion-router] router will load");
                    return [4, b()];
                  case 1:
                    t.sent();
                    console.debug("[ion-router] found nav");
                    return [4, this.onRoutesChanged()];
                  case 2:
                    t.sent();
                    return [2];
                }
              });
            });
          };
          t.prototype.componentDidLoad = function() {
            window.addEventListener(
              "ionRouteRedirectChanged",
              o(this.onRedirectChanged.bind(this), 10)
            );
            window.addEventListener(
              "ionRouteDataChanged",
              o(this.onRoutesChanged.bind(this), 100)
            );
          };
          t.prototype.onPopState = function() {
            var t = this.historyDirection();
            var e = this.getPath();
            console.debug("[ion-router] URL changed -> update nav", e, t);
            return this.writeNavStateRoot(e, t);
          };
          t.prototype.onBackButton = function(t) {
            var e = this;
            t.detail.register(0, function() {
              return e.back();
            });
          };
          t.prototype.push = function(t, e) {
            if (e === void 0) {
              e = "forward";
            }
            if (t.startsWith(".")) {
              t = new URL(t, window.location.href).pathname;
            }
            console.debug("[ion-router] URL pushed -> updating nav", t, e);
            var r = d(t);
            this.setPath(r, e);
            return this.writeNavStateRoot(r, e);
          };
          t.prototype.back = function() {
            window.history.back();
            return Promise.resolve(this.waitPromise);
          };
          t.prototype.printDebug = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(t) {
                console.debug("CURRENT PATH", this.getPath());
                console.debug("PREVIOUS PATH", this.previousPath);
                p(x(this.el));
                g(U(this.el));
                return [2];
              });
            });
          };
          t.prototype.navChanged = function(t) {
            return __awaiter(this, void 0, void 0, function() {
              var e, r, n, o, i, u;
              return __generator(this, function(s) {
                switch (s.label) {
                  case 0:
                    if (this.busy) {
                      console.warn(
                        "[ion-router] router is busy, navChanged was cancelled"
                      );
                      return [2, false];
                    }
                    return [4, m(window.document.body)];
                  case 1:
                    (e = s.sent()), (r = e.ids), (n = e.outlet);
                    o = x(this.el);
                    i = N(r, o);
                    if (!i) {
                      console.warn(
                        "[ion-router] no matching URL for ",
                        r.map(function(t) {
                          return t.id;
                        })
                      );
                      return [2, false];
                    }
                    u = l(i);
                    if (!u) {
                      console.warn(
                        "[ion-router] router could not match path because some required param is missing"
                      );
                      return [2, false];
                    }
                    console.debug(
                      "[ion-router] nav changed -> update URL",
                      r,
                      u
                    );
                    this.setPath(u, t);
                    return [
                      4,
                      this.safeWriteNavState(n, i, a, u, null, r.length)
                    ];
                  case 2:
                    s.sent();
                    return [2, true];
                }
              });
            });
          };
          t.prototype.onRedirectChanged = function() {
            var t = this.getPath();
            if (t && P(t, U(this.el))) {
              this.writeNavStateRoot(t, a);
            }
          };
          t.prototype.onRoutesChanged = function() {
            return this.writeNavStateRoot(this.getPath(), a);
          };
          t.prototype.historyDirection = function() {
            var t = window;
            if (t.history.state === null) {
              this.state++;
              t.history.replaceState(
                this.state,
                t.document.title,
                t.document.location && t.document.location.href
              );
            }
            var e = t.history.state;
            var r = this.lastState;
            this.lastState = e;
            if (e > r) {
              return u;
            } else if (e < r) {
              return s;
            } else {
              return a;
            }
          };
          t.prototype.writeNavStateRoot = function(t, e) {
            return __awaiter(this, void 0, void 0, function() {
              var r, n, o, i, a;
              return __generator(this, function(u) {
                if (!t) {
                  console.error(
                    "[ion-router] URL is not part of the routing set"
                  );
                  return [2, false];
                }
                r = U(this.el);
                n = P(t, r);
                o = null;
                if (n) {
                  this.setPath(n.to, e);
                  o = n.from;
                  t = n.to;
                }
                i = x(this.el);
                a = k(t, i);
                if (!a) {
                  console.error(
                    "[ion-router] the path does not match any route"
                  );
                  return [2, false];
                }
                return [2, this.safeWriteNavState(document.body, a, e, t, o)];
              });
            });
          };
          t.prototype.safeWriteNavState = function(t, e, r, n, o, i) {
            if (i === void 0) {
              i = 0;
            }
            return __awaiter(this, void 0, void 0, function() {
              var a, u, s;
              return __generator(this, function(f) {
                switch (f.label) {
                  case 0:
                    return [4, this.lock()];
                  case 1:
                    a = f.sent();
                    u = false;
                    f.label = 2;
                  case 2:
                    f.trys.push([2, 4, , 5]);
                    return [4, this.writeNavState(t, e, r, n, o, i)];
                  case 3:
                    u = f.sent();
                    return [3, 5];
                  case 4:
                    s = f.sent();
                    console.error(s);
                    return [3, 5];
                  case 5:
                    a();
                    return [2, u];
                }
              });
            });
          };
          t.prototype.lock = function() {
            return __awaiter(this, void 0, void 0, function() {
              var t, e;
              return __generator(this, function(r) {
                switch (r.label) {
                  case 0:
                    t = this.waitPromise;
                    this.waitPromise = new Promise(function(t) {
                      return (e = t);
                    });
                    if (!(t !== undefined)) return [3, 2];
                    return [4, t];
                  case 1:
                    r.sent();
                    r.label = 2;
                  case 2:
                    return [2, e];
                }
              });
            });
          };
          t.prototype.writeNavState = function(t, e, r, n, o, i) {
            if (i === void 0) {
              i = 0;
            }
            return __awaiter(this, void 0, void 0, function() {
              var a, u;
              return __generator(this, function(s) {
                switch (s.label) {
                  case 0:
                    if (this.busy) {
                      console.warn(
                        "[ion-router] router is busy, transition was cancelled"
                      );
                      return [2, false];
                    }
                    this.busy = true;
                    a = this.routeChangeEvent(n, o);
                    if (a) {
                      this.ionRouteWillChange.emit(a);
                    }
                    return [4, w(t, e, r, i)];
                  case 1:
                    u = s.sent();
                    this.busy = false;
                    if (u) {
                      console.debug("[ion-router] route changed", n);
                    }
                    if (a) {
                      this.ionRouteDidChange.emit(a);
                    }
                    return [2, u];
                }
              });
            });
          };
          t.prototype.setPath = function(t, e) {
            this.state++;
            c(window.history, this.root, this.useHash, t, e, this.state);
          };
          t.prototype.getPath = function() {
            return v(window.location, this.root, this.useHash);
          };
          t.prototype.routeChangeEvent = function(t, e) {
            var r = this.previousPath;
            var n = f(t);
            this.previousPath = n;
            if (n === r) {
              return null;
            }
            var o = e ? f(e) : null;
            return { from: r, redirectedFrom: o, to: n };
          };
          Object.defineProperty(t.prototype, "el", {
            get: function() {
              return n(this);
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
