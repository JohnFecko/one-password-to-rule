var __awaiter =
  (this && this.__awaiter) ||
  function(t, e, n, r) {
    return new (n || (n = Promise))(function(i, o) {
      function u(t) {
        try {
          s(r.next(t));
        } catch (t) {
          o(t);
        }
      }
      function a(t) {
        try {
          s(r["throw"](t));
        } catch (t) {
          o(t);
        }
      }
      function s(t) {
        t.done
          ? i(t.value)
          : new n(function(e) {
              e(t.value);
            }).then(u, a);
      }
      s((r = r.apply(t, e || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(t, e) {
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
      u;
    return (
      (u = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol === "function" &&
        (u[Symbol.iterator] = function() {
          return this;
        }),
      u
    );
    function a(t) {
      return function(e) {
        return s([t, e]);
      };
    }
    function s(u) {
      if (r) throw new TypeError("Generator is already executing.");
      while (n)
        try {
          if (
            ((r = 1),
            i &&
              (o =
                u[0] & 2
                  ? i["return"]
                  : u[0]
                  ? i["throw"] || ((o = i["return"]) && o.call(i), 0)
                  : i.next) &&
              !(o = o.call(i, u[1])).done)
          )
            return o;
          if (((i = 0), o)) u = [u[0] & 2, o.value];
          switch (u[0]) {
            case 0:
            case 1:
              o = u;
              break;
            case 4:
              n.label++;
              return { value: u[1], done: false };
            case 5:
              n.label++;
              i = u[1];
              u = [0];
              continue;
            case 7:
              u = n.ops.pop();
              n.trys.pop();
              continue;
            default:
              if (
                !((o = n.trys), (o = o.length > 0 && o[o.length - 1])) &&
                (u[0] === 6 || u[0] === 2)
              ) {
                n = 0;
                continue;
              }
              if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                n.label = u[1];
                break;
              }
              if (u[0] === 6 && n.label < o[1]) {
                n.label = o[1];
                o = u;
                break;
              }
              if (o && n.label < o[2]) {
                n.label = o[2];
                n.ops.push(u);
                break;
              }
              if (o[2]) n.ops.pop();
              n.trys.pop();
              continue;
          }
          u = e.call(t, n);
        } catch (t) {
          u = [6, t];
          i = 0;
        } finally {
          r = o = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: true };
    }
  };
System.register(["./p-83e6ea9f.system.js"], function(t, e) {
  "use strict";
  var n, r;
  return {
    setters: [
      function(t) {
        n = t.r;
        r = t.c;
      }
    ],
    execute: function() {
      var i = function(t) {
        return Promise.resolve(
          new t()
            .easing("cubic-bezier(0.0, 0.0, 0.2, 1)")
            .easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)")
            .duration(300)
        );
      };
      var o = 8;
      var u = function(t, e, n) {
        var r;
        var u;
        var a = n.width + o;
        if (n.isEndSide) {
          r = a + "px";
          u = "0px";
        } else {
          r = -a + "px";
          u = "0px";
        }
        var s = new t().addElement(n.menuInnerEl).fromTo("translateX", r, u);
        var c = new t().addElement(n.backdropEl).fromTo("opacity", 0.01, 0.32);
        return i(t).then(function(t) {
          return t.add(s).add(c);
        });
      };
      var a = function(t, e, n) {
        var r;
        var o;
        var u = n.width;
        if (n.isEndSide) {
          r = -u + "px";
          o = u + "px";
        } else {
          r = u + "px";
          o = -u + "px";
        }
        var a = new t()
          .addElement(n.menuInnerEl)
          .fromTo("translateX", o, "0px");
        var s = new t().addElement(n.contentEl).fromTo("translateX", "0px", r);
        var c = new t().addElement(n.backdropEl).fromTo("opacity", 0.01, 0.32);
        return i(t).then(function(t) {
          return t
            .add(a)
            .add(c)
            .add(s);
        });
      };
      var s = function(t, e, n) {
        var r = n.width * (n.isEndSide ? -1 : 1) + "px";
        var o = new t().addElement(n.contentEl).fromTo("translateX", "0px", r);
        return i(t).then(function(t) {
          return t.add(o);
        });
      };
      var c = t(
        "ion_menu_controller",
        (function() {
          function t(t) {
            n(this, t);
            this.menus = [];
            this.menuAnimations = new Map();
            this.registerAnimation("reveal", s);
            this.registerAnimation("push", a);
            this.registerAnimation("overlay", u);
          }
          t.prototype.open = function(t) {
            return __awaiter(this, void 0, void 0, function() {
              var e;
              return __generator(this, function(n) {
                switch (n.label) {
                  case 0:
                    return [4, this.get(t)];
                  case 1:
                    e = n.sent();
                    if (e) {
                      return [2, e.open()];
                    }
                    return [2, false];
                }
              });
            });
          };
          t.prototype.close = function(t) {
            return __awaiter(this, void 0, void 0, function() {
              var e;
              return __generator(this, function(n) {
                switch (n.label) {
                  case 0:
                    return [4, t !== undefined ? this.get(t) : this.getOpen()];
                  case 1:
                    e = n.sent();
                    if (e !== undefined) {
                      return [2, e.close()];
                    }
                    return [2, false];
                }
              });
            });
          };
          t.prototype.toggle = function(t) {
            return __awaiter(this, void 0, void 0, function() {
              var e;
              return __generator(this, function(n) {
                switch (n.label) {
                  case 0:
                    return [4, this.get(t)];
                  case 1:
                    e = n.sent();
                    if (e) {
                      return [2, e.toggle()];
                    }
                    return [2, false];
                }
              });
            });
          };
          t.prototype.enable = function(t, e) {
            return __awaiter(this, void 0, void 0, function() {
              var n;
              return __generator(this, function(r) {
                switch (r.label) {
                  case 0:
                    return [4, this.get(e)];
                  case 1:
                    n = r.sent();
                    if (n) {
                      n.disabled = !t;
                    }
                    return [2, n];
                }
              });
            });
          };
          t.prototype.swipeGesture = function(t, e) {
            return __awaiter(this, void 0, void 0, function() {
              var n;
              return __generator(this, function(r) {
                switch (r.label) {
                  case 0:
                    return [4, this.get(e)];
                  case 1:
                    n = r.sent();
                    if (n) {
                      n.swipeGesture = t;
                    }
                    return [2, n];
                }
              });
            });
          };
          t.prototype.isOpen = function(t) {
            return __awaiter(this, void 0, void 0, function() {
              var e, e;
              return __generator(this, function(n) {
                switch (n.label) {
                  case 0:
                    if (!(t != null)) return [3, 2];
                    return [4, this.get(t)];
                  case 1:
                    e = n.sent();
                    return [2, e !== undefined && e.isOpen()];
                  case 2:
                    return [4, this.getOpen()];
                  case 3:
                    e = n.sent();
                    return [2, e !== undefined];
                }
              });
            });
          };
          t.prototype.isEnabled = function(t) {
            return __awaiter(this, void 0, void 0, function() {
              var e;
              return __generator(this, function(n) {
                switch (n.label) {
                  case 0:
                    return [4, this.get(t)];
                  case 1:
                    e = n.sent();
                    if (e) {
                      return [2, !e.disabled];
                    }
                    return [2, false];
                }
              });
            });
          };
          t.prototype.get = function(t) {
            return __awaiter(this, void 0, void 0, function() {
              var e, n;
              return __generator(this, function(r) {
                switch (r.label) {
                  case 0:
                    return [4, this.waitUntilReady()];
                  case 1:
                    r.sent();
                    if (t === "start" || t === "end") {
                      e = this.find(function(e) {
                        return e.side === t && !e.disabled;
                      });
                      if (e) {
                        return [2, e];
                      }
                      return [
                        2,
                        this.find(function(e) {
                          return e.side === t;
                        })
                      ];
                    } else if (t != null) {
                      return [
                        2,
                        this.find(function(e) {
                          return e.menuId === t;
                        })
                      ];
                    }
                    n = this.find(function(t) {
                      return !t.disabled;
                    });
                    if (n) {
                      return [2, n];
                    }
                    return [
                      2,
                      this.menus.length > 0 ? this.menus[0].el : undefined
                    ];
                }
              });
            });
          };
          t.prototype.getOpen = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [4, this.waitUntilReady()];
                  case 1:
                    t.sent();
                    return [2, this.getOpenSync()];
                }
              });
            });
          };
          t.prototype.getMenus = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [4, this.waitUntilReady()];
                  case 1:
                    t.sent();
                    return [2, this.getMenusSync()];
                }
              });
            });
          };
          t.prototype.isAnimating = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [4, this.waitUntilReady()];
                  case 1:
                    t.sent();
                    return [2, this.isAnimatingSync()];
                }
              });
            });
          };
          t.prototype.registerAnimation = function(t, e) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(n) {
                this.menuAnimations.set(t, e);
                return [2];
              });
            });
          };
          t.prototype._getInstance = function() {
            return Promise.resolve(this);
          };
          t.prototype._register = function(t) {
            var e = this.menus;
            if (e.indexOf(t) < 0) {
              if (!t.disabled) {
                this._setActiveMenu(t);
              }
              e.push(t);
            }
          };
          t.prototype._unregister = function(t) {
            var e = this.menus.indexOf(t);
            if (e > -1) {
              this.menus.splice(e, 1);
            }
          };
          t.prototype._setActiveMenu = function(t) {
            var e = t.side;
            this.menus
              .filter(function(n) {
                return n.side === e && n !== t;
              })
              .forEach(function(t) {
                return (t.disabled = true);
              });
          };
          t.prototype._setOpen = function(t, e, n) {
            return __awaiter(this, void 0, void 0, function() {
              var r;
              return __generator(this, function(i) {
                switch (i.label) {
                  case 0:
                    if (this.isAnimatingSync()) {
                      return [2, false];
                    }
                    if (!e) return [3, 3];
                    return [4, this.getOpen()];
                  case 1:
                    r = i.sent();
                    if (!(r && t.el !== r)) return [3, 3];
                    return [4, r.setOpen(false, false)];
                  case 2:
                    i.sent();
                    i.label = 3;
                  case 3:
                    return [2, t._setOpen(e, n)];
                }
              });
            });
          };
          t.prototype._createAnimation = function(t, n) {
            return __awaiter(this, void 0, void 0, function() {
              var i, o;
              return __generator(this, function(u) {
                switch (u.label) {
                  case 0:
                    i = this.menuAnimations.get(t);
                    if (!i) {
                      throw new Error("animation not registered");
                    }
                    return [
                      4,
                      e.import("./p-57fba54f.system.js").then(function(t) {
                        return t.create(i, null, n);
                      })
                    ];
                  case 1:
                    o = u.sent();
                    if (!r.getBoolean("animated", true)) {
                      o.duration(0);
                    }
                    return [2, o];
                }
              });
            });
          };
          t.prototype.getOpenSync = function() {
            return this.find(function(t) {
              return t._isOpen;
            });
          };
          t.prototype.getMenusSync = function() {
            return this.menus.map(function(t) {
              return t.el;
            });
          };
          t.prototype.isAnimatingSync = function() {
            return this.menus.some(function(t) {
              return t.isAnimating;
            });
          };
          t.prototype.find = function(t) {
            var e = this.menus.find(t);
            if (e !== undefined) {
              return e.el;
            }
            return undefined;
          };
          t.prototype.waitUntilReady = function() {
            return Promise.all(
              Array.from(document.querySelectorAll("ion-menu")).map(function(
                t
              ) {
                return t.componentOnReady();
              })
            );
          };
          Object.defineProperty(t, "style", {
            get: function() {
              return ".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}";
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