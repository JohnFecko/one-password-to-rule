var __awaiter =
  (this && this.__awaiter) ||
  function(e, t, r, n) {
    return new (r || (r = Promise))(function(i, o) {
      function s(e) {
        try {
          u(n.next(e));
        } catch (e) {
          o(e);
        }
      }
      function a(e) {
        try {
          u(n["throw"](e));
        } catch (e) {
          o(e);
        }
      }
      function u(e) {
        e.done
          ? i(e.value)
          : new r(function(t) {
              t(e.value);
            }).then(s, a);
      }
      u((n = n.apply(e, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(e, t) {
    var r = {
        label: 0,
        sent: function() {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      },
      n,
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
        return u([e, t]);
      };
    }
    function u(s) {
      if (n) throw new TypeError("Generator is already executing.");
      while (r)
        try {
          if (
            ((n = 1),
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
              r.label++;
              return { value: s[1], done: false };
            case 5:
              r.label++;
              i = s[1];
              s = [0];
              continue;
            case 7:
              s = r.ops.pop();
              r.trys.pop();
              continue;
            default:
              if (
                !((o = r.trys), (o = o.length > 0 && o[o.length - 1])) &&
                (s[0] === 6 || s[0] === 2)
              ) {
                r = 0;
                continue;
              }
              if (s[0] === 3 && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                r.label = s[1];
                break;
              }
              if (s[0] === 6 && r.label < o[1]) {
                r.label = o[1];
                o = s;
                break;
              }
              if (o && r.label < o[2]) {
                r.label = o[2];
                r.ops.push(s);
                break;
              }
              if (o[2]) r.ops.pop();
              r.trys.pop();
              continue;
          }
          s = t.call(e, r);
        } catch (e) {
          s = [6, e];
          i = 0;
        } finally {
          n = o = 0;
        }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: true };
    }
  };
System.register(
  [
    "./p-83e6ea9f.system.js",
    "./p-0958cff4.system.js",
    "./p-307e3eda.system.js",
    "./p-5d81f478.system.js"
  ],
  function(e, t) {
    "use strict";
    var r, n, i, o, s, a, u, f, h, c, l, v, p, d;
    return {
      setters: [
        function(e) {
          r = e.r;
          n = e.d;
          i = e.e;
          o = e.c;
          s = e.h;
          a = e.f;
        },
        function(e) {
          u = e.b;
        },
        function(e) {
          f = e.a;
        },
        function(e) {
          h = e.l;
          c = e.t;
          l = e.s;
          v = e.L;
          p = e.a;
          d = e.b;
        }
      ],
      execute: function() {
        var g = 1;
        var m = 2;
        var w = 3;
        var y = (function() {
          function e(e, t) {
            this.component = e;
            this.params = t;
            this.state = g;
          }
          e.prototype.init = function(e) {
            return __awaiter(this, void 0, void 0, function() {
              var t, r;
              return __generator(this, function(n) {
                switch (n.label) {
                  case 0:
                    this.state = m;
                    if (!!this.element) return [3, 2];
                    t = this.component;
                    r = this;
                    return [
                      4,
                      f(
                        this.delegate,
                        e,
                        t,
                        ["ion-page", "ion-page-invisible"],
                        this.params
                      )
                    ];
                  case 1:
                    r.element = n.sent();
                    n.label = 2;
                  case 2:
                    return [2];
                }
              });
            });
          };
          e.prototype._destroy = function() {
            u(this.state !== w, "view state must be ATTACHED");
            var e = this.element;
            if (e) {
              if (this.delegate) {
                this.delegate.removeViewFromDom(e.parentElement, e);
              } else {
                e.remove();
              }
            }
            this.nav = undefined;
            this.state = w;
          };
          return e;
        })();
        var b = function(e, t, r) {
          if (!e) {
            return false;
          }
          if (e.component !== t) {
            return false;
          }
          var n = e.params;
          if (n === r) {
            return true;
          }
          if (!n && !r) {
            return true;
          }
          if (!n || !r) {
            return false;
          }
          var i = Object.keys(n);
          var o = Object.keys(r);
          if (i.length !== o.length) {
            return false;
          }
          for (var s = 0, a = i; s < a.length; s++) {
            var u = a[s];
            if (n[u] !== r[u]) {
              return false;
            }
          }
          return true;
        };
        var S = function(e, t) {
          if (!e) {
            return null;
          }
          if (e instanceof y) {
            return e;
          }
          return new y(e, t);
        };
        var T = function(e) {
          return e
            .map(function(e) {
              if (e instanceof y) {
                return e;
              }
              if ("page" in e) {
                return S(e.page, e.params);
              }
              return S(e, undefined);
            })
            .filter(function(e) {
              return e !== null;
            });
        };
        var _ = e(
          "ion_nav",
          (function() {
            function e(e) {
              r(this, e);
              this.transInstr = [];
              this.useRouter = false;
              this.isTransitioning = false;
              this.destroyed = false;
              this.views = [];
              this.animated = true;
              this.ionNavWillLoad = n(this, "ionNavWillLoad", 7);
              this.ionNavWillChange = n(this, "ionNavWillChange", 3);
              this.ionNavDidChange = n(this, "ionNavDidChange", 3);
            }
            e.prototype.swipeGestureChanged = function() {
              if (this.gesture) {
                this.gesture.setDisabled(this.swipeGesture !== true);
              }
            };
            e.prototype.rootChanged = function() {
              if (this.root !== undefined) {
                if (!this.useRouter) {
                  this.setRoot(this.root, this.rootParams);
                }
              }
            };
            e.prototype.componentWillLoad = function() {
              this.useRouter =
                !!document.querySelector("ion-router") &&
                !this.el.closest("[no-router]");
              if (this.swipeGesture === undefined) {
                var e = i(this);
                this.swipeGesture = o.getBoolean(
                  "swipeBackEnabled",
                  e === "ios"
                );
              }
              this.ionNavWillLoad.emit();
            };
            e.prototype.componentDidLoad = function() {
              return __awaiter(this, void 0, void 0, function() {
                var e;
                return __generator(this, function(r) {
                  switch (r.label) {
                    case 0:
                      this.rootChanged();
                      e = this;
                      return [4, t.import("./p-986c65a8.system.js")];
                    case 1:
                      e.gesture = r
                        .sent()
                        .createSwipeBackGesture(
                          this.el,
                          this.canStart.bind(this),
                          this.onStart.bind(this),
                          this.onMove.bind(this),
                          this.onEnd.bind(this)
                        );
                      this.swipeGestureChanged();
                      return [2];
                  }
                });
              });
            };
            e.prototype.componentDidUnload = function() {
              for (var e = 0, t = this.views; e < t.length; e++) {
                var r = t[e];
                h(r.element, v);
                r._destroy();
              }
              if (this.gesture) {
                this.gesture.destroy();
                this.gesture = undefined;
              }
              this.transInstr.length = this.views.length = 0;
              this.destroyed = true;
            };
            e.prototype.push = function(e, t, r, n) {
              return this.queueTrns(
                {
                  insertStart: -1,
                  insertViews: [{ page: e, params: t }],
                  opts: r
                },
                n
              );
            };
            e.prototype.insert = function(e, t, r, n, i) {
              return this.queueTrns(
                {
                  insertStart: e,
                  insertViews: [{ page: t, params: r }],
                  opts: n
                },
                i
              );
            };
            e.prototype.insertPages = function(e, t, r, n) {
              return this.queueTrns(
                { insertStart: e, insertViews: t, opts: r },
                n
              );
            };
            e.prototype.pop = function(e, t) {
              return this.queueTrns(
                { removeStart: -1, removeCount: 1, opts: e },
                t
              );
            };
            e.prototype.popTo = function(e, t, r) {
              var n = { removeStart: -1, removeCount: -1, opts: t };
              if (typeof e === "object" && e.component) {
                n.removeView = e;
                n.removeStart = 1;
              } else if (typeof e === "number") {
                n.removeStart = e + 1;
              }
              return this.queueTrns(n, r);
            };
            e.prototype.popToRoot = function(e, t) {
              return this.queueTrns(
                { removeStart: 1, removeCount: -1, opts: e },
                t
              );
            };
            e.prototype.removeIndex = function(e, t, r, n) {
              if (t === void 0) {
                t = 1;
              }
              return this.queueTrns(
                { removeStart: e, removeCount: t, opts: r },
                n
              );
            };
            e.prototype.setRoot = function(e, t, r, n) {
              return this.setPages([{ page: e, params: t }], r, n);
            };
            e.prototype.setPages = function(e, t, r) {
              if (t == null) {
                t = {};
              }
              if (t.animated !== true) {
                t.animated = false;
              }
              return this.queueTrns(
                {
                  insertStart: 0,
                  insertViews: e,
                  removeStart: 0,
                  removeCount: -1,
                  opts: t
                },
                r
              );
            };
            e.prototype.setRouteId = function(e, t, r) {
              var n = this;
              var i = this.getActiveSync();
              if (b(i, e, t)) {
                return Promise.resolve({ changed: false, element: i.element });
              }
              var o;
              var s = new Promise(function(e) {
                return (o = e);
              });
              var a;
              var u = {
                updateURL: false,
                viewIsReady: function(e) {
                  var t;
                  var r = new Promise(function(e) {
                    return (t = e);
                  });
                  o({
                    changed: true,
                    element: e,
                    markVisible: function() {
                      return __awaiter(n, void 0, void 0, function() {
                        return __generator(this, function(e) {
                          switch (e.label) {
                            case 0:
                              t();
                              return [4, a];
                            case 1:
                              e.sent();
                              return [2];
                          }
                        });
                      });
                    }
                  });
                  return r;
                }
              };
              if (r === "root") {
                a = this.setRoot(e, t, u);
              } else {
                var f = this.views.find(function(r) {
                  return b(r, e, t);
                });
                if (f) {
                  a = this.popTo(
                    f,
                    Object.assign({}, u, { direction: "back" })
                  );
                } else if (r === "forward") {
                  a = this.push(e, t, u);
                } else if (r === "back") {
                  a = this.setRoot(
                    e,
                    t,
                    Object.assign({}, u, { direction: "back", animated: true })
                  );
                }
              }
              return s;
            };
            e.prototype.getRouteId = function() {
              return __awaiter(this, void 0, void 0, function() {
                var e;
                return __generator(this, function(t) {
                  e = this.getActiveSync();
                  return [
                    2,
                    e
                      ? {
                          id: e.element.tagName,
                          params: e.params,
                          element: e.element
                        }
                      : undefined
                  ];
                });
              });
            };
            e.prototype.getActive = function() {
              return Promise.resolve(this.getActiveSync());
            };
            e.prototype.getByIndex = function(e) {
              return Promise.resolve(this.views[e]);
            };
            e.prototype.canGoBack = function(e) {
              return Promise.resolve(this.canGoBackSync(e));
            };
            e.prototype.getPrevious = function(e) {
              return Promise.resolve(this.getPreviousSync(e));
            };
            e.prototype.getLength = function() {
              return this.views.length;
            };
            e.prototype.getActiveSync = function() {
              return this.views[this.views.length - 1];
            };
            e.prototype.canGoBackSync = function(e) {
              if (e === void 0) {
                e = this.getActiveSync();
              }
              return !!(e && this.getPreviousSync(e));
            };
            e.prototype.getPreviousSync = function(e) {
              if (e === void 0) {
                e = this.getActiveSync();
              }
              if (!e) {
                return undefined;
              }
              var t = this.views;
              var r = t.indexOf(e);
              return r > 0 ? t[r - 1] : undefined;
            };
            e.prototype.queueTrns = function(e, t) {
              if (this.isTransitioning && e.opts != null && e.opts.skipIfBusy) {
                return Promise.resolve(false);
              }
              var r = new Promise(function(t, r) {
                e.resolve = t;
                e.reject = r;
              });
              e.done = t;
              if (e.insertViews && e.insertViews.length === 0) {
                e.insertViews = undefined;
              }
              this.transInstr.push(e);
              this.nextTrns();
              return r;
            };
            e.prototype.success = function(e, t) {
              if (this.destroyed) {
                this.fireError("nav controller was destroyed", t);
                return;
              }
              if (t.done) {
                t.done(
                  e.hasCompleted,
                  e.requiresTransition,
                  e.enteringView,
                  e.leavingView,
                  e.direction
                );
              }
              t.resolve(e.hasCompleted);
              if (t.opts.updateURL !== false && this.useRouter) {
                var r = document.querySelector("ion-router");
                if (r) {
                  var n = e.direction === "back" ? "back" : "forward";
                  r.navChanged(n);
                }
              }
            };
            e.prototype.failed = function(e, t) {
              if (this.destroyed) {
                this.fireError("nav controller was destroyed", t);
                return;
              }
              this.transInstr.length = 0;
              this.fireError(e, t);
            };
            e.prototype.fireError = function(e, t) {
              if (t.done) {
                t.done(false, false, e);
              }
              if (t.reject && !this.destroyed) {
                t.reject(e);
              } else {
                t.resolve(false);
              }
            };
            e.prototype.nextTrns = function() {
              if (this.isTransitioning) {
                return false;
              }
              var e = this.transInstr.shift();
              if (!e) {
                return false;
              }
              this.runTransition(e);
              return true;
            };
            e.prototype.runTransition = function(e) {
              return __awaiter(this, void 0, void 0, function() {
                var t, r, n, i, o, s;
                return __generator(this, function(a) {
                  switch (a.label) {
                    case 0:
                      a.trys.push([0, 6, , 7]);
                      this.ionNavWillChange.emit();
                      this.isTransitioning = true;
                      this.prepareTI(e);
                      t = this.getActiveSync();
                      r = this.getEnteringView(e, t);
                      if (!t && !r) {
                        throw new Error("no views in the stack to be removed");
                      }
                      if (!(r && r.state === g)) return [3, 2];
                      return [4, r.init(this.el)];
                    case 1:
                      a.sent();
                      a.label = 2;
                    case 2:
                      this.postViewInit(r, t, e);
                      n =
                        (e.enteringRequiresTransition ||
                          e.leavingRequiresTransition) &&
                        r !== t;
                      if (!n) return [3, 4];
                      return [4, this.transition(r, t, e)];
                    case 3:
                      o = a.sent();
                      return [3, 5];
                    case 4:
                      o = { hasCompleted: true, requiresTransition: false };
                      a.label = 5;
                    case 5:
                      i = o;
                      this.success(i, e);
                      this.ionNavDidChange.emit();
                      return [3, 7];
                    case 6:
                      s = a.sent();
                      this.failed(s, e);
                      return [3, 7];
                    case 7:
                      this.isTransitioning = false;
                      this.nextTrns();
                      return [2];
                  }
                });
              });
            };
            e.prototype.prepareTI = function(e) {
              var t = this.views.length;
              e.opts = e.opts || {};
              if (e.opts.delegate === undefined) {
                e.opts.delegate = this.delegate;
              }
              if (e.removeView !== undefined) {
                u(e.removeStart !== undefined, "removeView needs removeStart");
                u(e.removeCount !== undefined, "removeView needs removeCount");
                var r = this.views.indexOf(e.removeView);
                if (r < 0) {
                  throw new Error("removeView was not found");
                }
                e.removeStart += r;
              }
              if (e.removeStart !== undefined) {
                if (e.removeStart < 0) {
                  e.removeStart = t - 1;
                }
                if (e.removeCount < 0) {
                  e.removeCount = t - e.removeStart;
                }
                e.leavingRequiresTransition =
                  e.removeCount > 0 && e.removeStart + e.removeCount === t;
              }
              if (e.insertViews) {
                if (e.insertStart < 0 || e.insertStart > t) {
                  e.insertStart = t;
                }
                e.enteringRequiresTransition = e.insertStart === t;
              }
              var n = e.insertViews;
              if (!n) {
                return;
              }
              u(n.length > 0, "length can not be zero");
              var i = T(n);
              if (i.length === 0) {
                throw new Error("invalid views to insert");
              }
              for (var o = 0, s = i; o < s.length; o++) {
                var a = s[o];
                a.delegate = e.opts.delegate;
                var f = a.nav;
                if (f && f !== this) {
                  throw new Error("inserted view was already inserted");
                }
                if (a.state === w) {
                  throw new Error("inserted view was already destroyed");
                }
              }
              e.insertViews = i;
            };
            e.prototype.getEnteringView = function(e, t) {
              var r = e.insertViews;
              if (r !== undefined) {
                return r[r.length - 1];
              }
              var n = e.removeStart;
              if (n !== undefined) {
                var i = this.views;
                var o = n + e.removeCount;
                for (var s = i.length - 1; s >= 0; s--) {
                  var a = i[s];
                  if ((s < n || s >= o) && a !== t) {
                    return a;
                  }
                }
              }
              return undefined;
            };
            e.prototype.postViewInit = function(e, t, r) {
              u(t || e, "Both leavingView and enteringView are null");
              u(r.resolve, "resolve must be valid");
              u(r.reject, "reject must be valid");
              var n = r.opts;
              var i = r.insertViews;
              var o = r.removeStart;
              var s = r.removeCount;
              var a;
              if (o !== undefined && s !== undefined) {
                u(o >= 0, "removeStart can not be negative");
                u(s >= 0, "removeCount can not be negative");
                a = [];
                for (var f = 0; f < s; f++) {
                  var c = this.views[f + o];
                  if (c && c !== e && c !== t) {
                    a.push(c);
                  }
                }
                n.direction = n.direction || "back";
              }
              var l =
                this.views.length +
                (i !== undefined ? i.length : 0) -
                (s !== undefined ? s : 0);
              u(l >= 0, "final balance can not be negative");
              if (l === 0) {
                console.warn(
                  "You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",
                  this,
                  this.el
                );
                throw new Error(
                  "navigation stack needs at least one root page"
                );
              }
              if (i) {
                var g = r.insertStart;
                for (var m = 0, w = i; m < w.length; m++) {
                  var c = w[m];
                  this.insertViewAt(c, g);
                  g++;
                }
                if (r.enteringRequiresTransition) {
                  n.direction = n.direction || "forward";
                }
              }
              if (a && a.length > 0) {
                for (var y = 0, b = a; y < b.length; y++) {
                  var c = b[y];
                  h(c.element, p);
                  h(c.element, d);
                  h(c.element, v);
                }
                for (var S = 0, T = a; S < T.length; S++) {
                  var c = T[S];
                  this.destroyView(c);
                }
              }
            };
            e.prototype.transition = function(e, t, r) {
              return __awaiter(this, void 0, void 0, function() {
                var n, s, a, u, f, h, l;
                var v = this;
                return __generator(this, function(p) {
                  switch (p.label) {
                    case 0:
                      n = r.opts;
                      s = n.progressAnimation
                        ? function(e) {
                            return (v.sbAni = e);
                          }
                        : undefined;
                      a = i(this);
                      u = e.element;
                      f = t && t.element;
                      h = Object.assign(
                        {
                          mode: a,
                          showGoBack: this.canGoBackSync(e),
                          baseEl: this.el,
                          animationBuilder:
                            this.animation ||
                            n.animationBuilder ||
                            o.get("navAnimation"),
                          progressCallback: s,
                          animated:
                            this.animated && o.getBoolean("animated", true),
                          enteringEl: u,
                          leavingEl: f
                        },
                        n
                      );
                      return [4, c(h)];
                    case 1:
                      l = p.sent().hasCompleted;
                      return [2, this.transitionFinish(l, e, t, n)];
                  }
                });
              });
            };
            e.prototype.transitionFinish = function(e, t, r, n) {
              var i = e ? t : r;
              if (i) {
                this.cleanup(i);
              }
              return {
                hasCompleted: e,
                requiresTransition: true,
                enteringView: t,
                leavingView: r,
                direction: n.direction
              };
            };
            e.prototype.insertViewAt = function(e, t) {
              var r = this.views;
              var n = r.indexOf(e);
              if (n > -1) {
                u(e.nav === this, "view is not part of the nav");
                r.splice(t, 0, r.splice(n, 1)[0]);
              } else {
                u(!e.nav, "nav is used");
                e.nav = this;
                r.splice(t, 0, e);
              }
            };
            e.prototype.removeView = function(e) {
              u(
                e.state === m || e.state === w,
                "view state should be loaded or destroyed"
              );
              var t = this.views;
              var r = t.indexOf(e);
              u(r > -1, "view must be part of the stack");
              if (r >= 0) {
                t.splice(r, 1);
              }
            };
            e.prototype.destroyView = function(e) {
              e._destroy();
              this.removeView(e);
            };
            e.prototype.cleanup = function(e) {
              if (this.destroyed) {
                return;
              }
              var t = this.views;
              var r = t.indexOf(e);
              for (var n = t.length - 1; n >= 0; n--) {
                var i = t[n];
                var o = i.element;
                if (n > r) {
                  h(o, v);
                  this.destroyView(i);
                } else if (n < r) {
                  l(o, true);
                }
              }
            };
            e.prototype.canStart = function() {
              return (
                !!this.swipeGesture &&
                !this.isTransitioning &&
                this.transInstr.length === 0 &&
                this.canGoBackSync()
              );
            };
            e.prototype.onStart = function() {
              this.queueTrns(
                {
                  removeStart: -1,
                  removeCount: 1,
                  opts: { direction: "back", progressAnimation: true }
                },
                undefined
              );
            };
            e.prototype.onMove = function(e) {
              if (this.sbAni) {
                this.sbAni.progressStep(e);
              }
            };
            e.prototype.onEnd = function(e, t, r) {
              if (this.sbAni) {
                this.sbAni.progressEnd(e, t, r);
              }
            };
            e.prototype.render = function() {
              return s("slot", null);
            };
            Object.defineProperty(e.prototype, "el", {
              get: function() {
                return a(this);
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "watchers", {
              get: function() {
                return {
                  swipeGesture: ["swipeGestureChanged"],
                  root: ["rootChanged"]
                };
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "style", {
              get: function() {
                return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";
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
