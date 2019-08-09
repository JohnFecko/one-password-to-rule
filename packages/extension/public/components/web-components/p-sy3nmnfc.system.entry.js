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
    "./p-307e3eda.system.js",
    "./p-5d81f478.system.js"
  ],
  function(e, t) {
    "use strict";
    var n, i, r, o, a, s, u, c, l;
    return {
      setters: [
        function(e) {
          n = e.r;
          i = e.e;
          r = e.d;
          o = e.c;
          a = e.h;
          s = e.f;
        },
        function(e) {
          u = e.a;
          c = e.d;
        },
        function(e) {
          l = e.t;
        }
      ],
      execute: function() {
        var h = e(
          "ion_router_outlet",
          (function() {
            function e(e) {
              n(this, e);
              this.mode = i(this);
              this.animated = true;
              this.ionNavWillLoad = r(this, "ionNavWillLoad", 7);
              this.ionNavWillChange = r(this, "ionNavWillChange", 3);
              this.ionNavDidChange = r(this, "ionNavDidChange", 3);
            }
            e.prototype.swipeHandlerChanged = function() {
              if (this.gesture) {
                this.gesture.setDisabled(this.swipeHandler === undefined);
              }
            };
            e.prototype.componentWillLoad = function() {
              this.ionNavWillLoad.emit();
            };
            e.prototype.componentDidLoad = function() {
              return __awaiter(this, void 0, void 0, function() {
                var e;
                var n = this;
                return __generator(this, function(i) {
                  switch (i.label) {
                    case 0:
                      e = this;
                      return [4, t.import("./p-986c65a8.system.js")];
                    case 1:
                      e.gesture = i.sent().createSwipeBackGesture(
                        this.el,
                        function() {
                          return !!n.swipeHandler && n.swipeHandler.canStart();
                        },
                        function() {
                          return n.swipeHandler && n.swipeHandler.onStart();
                        },
                        function(e) {
                          return n.ani && n.ani.progressStep(e);
                        },
                        function(e, t, i) {
                          if (n.ani) {
                            n.ani.progressEnd(e, t, i);
                          }
                          if (n.swipeHandler) {
                            n.swipeHandler.onEnd(e);
                          }
                        }
                      );
                      this.swipeHandlerChanged();
                      return [2];
                  }
                });
              });
            };
            e.prototype.componentDidUnload = function() {
              this.activeEl = this.activeComponent = undefined;
              if (this.gesture) {
                this.gesture.destroy();
                this.gesture = undefined;
              }
            };
            e.prototype.commit = function(e, t, n) {
              return __awaiter(this, void 0, void 0, function() {
                var i, r, o;
                return __generator(this, function(a) {
                  switch (a.label) {
                    case 0:
                      return [4, this.lock()];
                    case 1:
                      i = a.sent();
                      r = false;
                      a.label = 2;
                    case 2:
                      a.trys.push([2, 4, , 5]);
                      return [4, this.transition(e, t, n)];
                    case 3:
                      r = a.sent();
                      return [3, 5];
                    case 4:
                      o = a.sent();
                      console.error(o);
                      return [3, 5];
                    case 5:
                      i();
                      return [2, r];
                  }
                });
              });
            };
            e.prototype.setRouteId = function(e, t, n) {
              return __awaiter(this, void 0, void 0, function() {
                var i;
                return __generator(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return [
                        4,
                        this.setRoot(e, t, {
                          duration: n === "root" ? 0 : undefined,
                          direction: n === "back" ? "back" : "forward"
                        })
                      ];
                    case 1:
                      i = r.sent();
                      return [2, { changed: i, element: this.activeEl }];
                  }
                });
              });
            };
            e.prototype.getRouteId = function() {
              return __awaiter(this, void 0, void 0, function() {
                var e;
                return __generator(this, function(t) {
                  e = this.activeEl;
                  return [2, e ? { id: e.tagName, element: e } : undefined];
                });
              });
            };
            e.prototype.setRoot = function(e, t, n) {
              return __awaiter(this, void 0, void 0, function() {
                var i, r;
                return __generator(this, function(o) {
                  switch (o.label) {
                    case 0:
                      if (this.activeComponent === e) {
                        return [2, false];
                      }
                      i = this.activeEl;
                      return [
                        4,
                        u(
                          this.delegate,
                          this.el,
                          e,
                          ["ion-page", "ion-page-invisible"],
                          t
                        )
                      ];
                    case 1:
                      r = o.sent();
                      this.activeComponent = e;
                      this.activeEl = r;
                      return [4, this.commit(r, i, n)];
                    case 2:
                      o.sent();
                      return [4, c(this.delegate, i)];
                    case 3:
                      o.sent();
                      return [2, true];
                  }
                });
              });
            };
            e.prototype.transition = function(e, t, n) {
              if (n === void 0) {
                n = {};
              }
              return __awaiter(this, void 0, void 0, function() {
                var i, r, a, s, u;
                var c = this;
                return __generator(this, function(h) {
                  switch (h.label) {
                    case 0:
                      if (t === e) {
                        return [2, false];
                      }
                      this.ionNavWillChange.emit();
                      (i = this), (r = i.el), (a = i.mode);
                      s = this.animated && o.getBoolean("animated", true);
                      u =
                        this.animation ||
                        n.animationBuilder ||
                        o.get("navAnimation");
                      return [
                        4,
                        l(
                          Object.assign(
                            {
                              mode: a,
                              animated: s,
                              animationBuilder: u,
                              enteringEl: e,
                              leavingEl: t,
                              baseEl: r,
                              progressCallback: n.progressAnimation
                                ? function(e) {
                                    return (c.ani = e);
                                  }
                                : undefined
                            },
                            n
                          )
                        )
                      ];
                    case 1:
                      h.sent();
                      this.ionNavDidChange.emit();
                      return [2, true];
                  }
                });
              });
            };
            e.prototype.lock = function() {
              return __awaiter(this, void 0, void 0, function() {
                var e, t;
                return __generator(this, function(n) {
                  switch (n.label) {
                    case 0:
                      e = this.waitPromise;
                      this.waitPromise = new Promise(function(e) {
                        return (t = e);
                      });
                      if (!(e !== undefined)) return [3, 2];
                      return [4, e];
                    case 1:
                      n.sent();
                      n.label = 2;
                    case 2:
                      return [2, t];
                  }
                });
              });
            };
            e.prototype.render = function() {
              return a("slot", null);
            };
            Object.defineProperty(e.prototype, "el", {
              get: function() {
                return s(this);
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "watchers", {
              get: function() {
                return { swipeHandler: ["swipeHandlerChanged"] };
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
