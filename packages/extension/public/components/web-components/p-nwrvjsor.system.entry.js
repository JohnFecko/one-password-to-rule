var __awaiter =
  (this && this.__awaiter) ||
  function(t, e, i, n) {
    return new (i || (i = Promise))(function(s, r) {
      function o(t) {
        try {
          u(n.next(t));
        } catch (t) {
          r(t);
        }
      }
      function a(t) {
        try {
          u(n["throw"](t));
        } catch (t) {
          r(t);
        }
      }
      function u(t) {
        t.done
          ? s(t.value)
          : new i(function(e) {
              e(t.value);
            }).then(o, a);
      }
      u((n = n.apply(t, e || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(t, e) {
    var i = {
        label: 0,
        sent: function() {
          if (r[0] & 1) throw r[1];
          return r[1];
        },
        trys: [],
        ops: []
      },
      n,
      s,
      r,
      o;
    return (
      (o = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol === "function" &&
        (o[Symbol.iterator] = function() {
          return this;
        }),
      o
    );
    function a(t) {
      return function(e) {
        return u([t, e]);
      };
    }
    function u(o) {
      if (n) throw new TypeError("Generator is already executing.");
      while (i)
        try {
          if (
            ((n = 1),
            s &&
              (r =
                o[0] & 2
                  ? s["return"]
                  : o[0]
                  ? s["throw"] || ((r = s["return"]) && r.call(s), 0)
                  : s.next) &&
              !(r = r.call(s, o[1])).done)
          )
            return r;
          if (((s = 0), r)) o = [o[0] & 2, r.value];
          switch (o[0]) {
            case 0:
            case 1:
              r = o;
              break;
            case 4:
              i.label++;
              return { value: o[1], done: false };
            case 5:
              i.label++;
              s = o[1];
              o = [0];
              continue;
            case 7:
              o = i.ops.pop();
              i.trys.pop();
              continue;
            default:
              if (
                !((r = i.trys), (r = r.length > 0 && r[r.length - 1])) &&
                (o[0] === 6 || o[0] === 2)
              ) {
                i = 0;
                continue;
              }
              if (o[0] === 3 && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                i.label = o[1];
                break;
              }
              if (o[0] === 6 && i.label < r[1]) {
                i.label = r[1];
                r = o;
                break;
              }
              if (r && i.label < r[2]) {
                i.label = r[2];
                i.ops.push(o);
                break;
              }
              if (r[2]) i.ops.pop();
              i.trys.pop();
              continue;
          }
          o = e.call(t, i);
        } catch (t) {
          o = [6, t];
          s = 0;
        } finally {
          n = r = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: true };
    }
  };
System.register(
  [
    "./p-83e6ea9f.system.js",
    "./p-0958cff4.system.js",
    "./p-ee747906.system.js"
  ],
  function(t, e) {
    "use strict";
    var i, n, s, r, o, a, u, h, l, c, d;
    return {
      setters: [
        function(t) {
          i = t.r;
          n = t.e;
          s = t.d;
          r = t.m;
          o = t.c;
          a = t.h;
          u = t.H;
          h = t.f;
        },
        function(t) {
          l = t.i;
          c = t.b;
        },
        function(t) {
          d = t.GESTURE_CONTROLLER;
        }
      ],
      execute: function() {
        var p = t(
          "ion_menu",
          (function() {
            function t(t) {
              i(this, t);
              this.lastOnEnd = 0;
              this.blocker = d.createBlocker({ disableScroll: true });
              this.mode = n(this);
              this.isAnimating = false;
              this._isOpen = false;
              this.isPaneVisible = false;
              this.isEndSide = false;
              this.disabled = false;
              this.side = "start";
              this.swipeGesture = true;
              this.maxEdgeStart = 50;
              this.ionWillOpen = s(this, "ionWillOpen", 7);
              this.ionWillClose = s(this, "ionWillClose", 7);
              this.ionDidOpen = s(this, "ionDidOpen", 7);
              this.ionDidClose = s(this, "ionDidClose", 7);
              this.ionMenuChange = s(this, "ionMenuChange", 7);
              this.lazyMenuCtrl = r(this, "ion-menu-controller");
            }
            t.prototype.typeChanged = function(t, e) {
              var i = this.contentEl;
              if (i) {
                if (e !== undefined) {
                  i.classList.remove("menu-content-" + e);
                }
                i.classList.add("menu-content-" + t);
                i.removeAttribute("style");
              }
              if (this.menuInnerEl) {
                this.menuInnerEl.removeAttribute("style");
              }
              this.animation = undefined;
            };
            t.prototype.disabledChanged = function() {
              this.updateState();
              this.ionMenuChange.emit({
                disabled: this.disabled,
                open: this._isOpen
              });
            };
            t.prototype.sideChanged = function() {
              this.isEndSide = l(this.side);
            };
            t.prototype.swipeGestureChanged = function() {
              this.updateState();
            };
            t.prototype.componentWillLoad = function() {
              return __awaiter(this, void 0, void 0, function() {
                var t, i, n, s, r, a;
                var u = this;
                return __generator(this, function(h) {
                  switch (h.label) {
                    case 0:
                      if (this.type === undefined) {
                        this.type = o.get(
                          "menuType",
                          this.mode === "ios" ? "reveal" : "overlay"
                        );
                      }
                      i = this;
                      return [
                        4,
                        this.lazyMenuCtrl.componentOnReady().then(function(t) {
                          return t._getInstance();
                        })
                      ];
                    case 1:
                      t = i.menuCtrl = h.sent();
                      n = this.el;
                      s = n.parentNode;
                      r =
                        this.contentId !== undefined
                          ? document.getElementById(this.contentId)
                          : s && s.querySelector && s.querySelector("[main]");
                      if (!r || !r.tagName) {
                        console.error(
                          'Menu: must have a "content" element to listen for drag events on.'
                        );
                        return [2];
                      }
                      this.contentEl = r;
                      r.classList.add("menu-content");
                      this.typeChanged(this.type, undefined);
                      this.sideChanged();
                      t._register(this);
                      a = this;
                      return [4, e.import("./p-ee747906.system.js")];
                    case 2:
                      a.gesture = h.sent().createGesture({
                        el: document,
                        gestureName: "menu-swipe",
                        gesturePriority: 30,
                        threshold: 10,
                        canStart: function(t) {
                          return u.canStart(t);
                        },
                        onWillStart: function() {
                          return u.onWillStart();
                        },
                        onStart: function() {
                          return u.onStart();
                        },
                        onMove: function(t) {
                          return u.onMove(t);
                        },
                        onEnd: function(t) {
                          return u.onEnd(t);
                        }
                      });
                      this.updateState();
                      return [2];
                  }
                });
              });
            };
            t.prototype.componentDidLoad = function() {
              this.ionMenuChange.emit({
                disabled: this.disabled,
                open: this._isOpen
              });
            };
            t.prototype.componentDidUnload = function() {
              this.blocker.destroy();
              this.menuCtrl._unregister(this);
              if (this.animation) {
                this.animation.destroy();
              }
              if (this.gesture) {
                this.gesture.destroy();
                this.gesture = undefined;
              }
              this.animation = undefined;
              this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
            };
            t.prototype.onSplitPaneChanged = function(t) {
              this.isPaneVisible = t.detail.isPane(this.el);
              this.updateState();
            };
            t.prototype.onBackdropClick = function(t) {
              if (this._isOpen && this.lastOnEnd < t.timeStamp - 100) {
                var e = t.composedPath
                  ? !t.composedPath().includes(this.menuInnerEl)
                  : false;
                if (e) {
                  t.preventDefault();
                  t.stopPropagation();
                  this.close();
                }
              }
            };
            t.prototype.isOpen = function() {
              return Promise.resolve(this._isOpen);
            };
            t.prototype.isActive = function() {
              return Promise.resolve(this._isActive());
            };
            t.prototype.open = function(t) {
              if (t === void 0) {
                t = true;
              }
              return this.setOpen(true, t);
            };
            t.prototype.close = function(t) {
              if (t === void 0) {
                t = true;
              }
              return this.setOpen(false, t);
            };
            t.prototype.toggle = function(t) {
              if (t === void 0) {
                t = true;
              }
              return this.setOpen(!this._isOpen, t);
            };
            t.prototype.setOpen = function(t, e) {
              if (e === void 0) {
                e = true;
              }
              return this.menuCtrl._setOpen(this, t, e);
            };
            t.prototype._setOpen = function(t, e) {
              if (e === void 0) {
                e = true;
              }
              return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(i) {
                  switch (i.label) {
                    case 0:
                      if (
                        !this._isActive() ||
                        this.isAnimating ||
                        t === this._isOpen
                      ) {
                        return [2, false];
                      }
                      this.beforeAnimation(t);
                      return [4, this.loadAnimation()];
                    case 1:
                      i.sent();
                      return [4, this.startAnimation(t, e)];
                    case 2:
                      i.sent();
                      this.afterAnimation(t);
                      return [2, true];
                  }
                });
              });
            };
            t.prototype.loadAnimation = function() {
              return __awaiter(this, void 0, void 0, function() {
                var t, e;
                return __generator(this, function(i) {
                  switch (i.label) {
                    case 0:
                      t = this.menuInnerEl.offsetWidth;
                      if (t === this.width && this.animation !== undefined) {
                        return [2];
                      }
                      this.width = t;
                      if (this.animation) {
                        this.animation.destroy();
                        this.animation = undefined;
                      }
                      e = this;
                      return [
                        4,
                        this.menuCtrl._createAnimation(this.type, this)
                      ];
                    case 1:
                      e.animation = i.sent();
                      return [2];
                  }
                });
              });
            };
            t.prototype.startAnimation = function(t, e) {
              return __awaiter(this, void 0, void 0, function() {
                var i;
                return __generator(this, function(n) {
                  switch (n.label) {
                    case 0:
                      i = this.animation.reverse(!t);
                      if (!e) return [3, 2];
                      return [4, i.playAsync()];
                    case 1:
                      n.sent();
                      return [3, 3];
                    case 2:
                      i.playSync();
                      n.label = 3;
                    case 3:
                      return [2];
                  }
                });
              });
            };
            t.prototype._isActive = function() {
              return !this.disabled && !this.isPaneVisible;
            };
            t.prototype.canSwipe = function() {
              return this.swipeGesture && !this.isAnimating && this._isActive();
            };
            t.prototype.canStart = function(t) {
              if (!this.canSwipe()) {
                return false;
              }
              if (this._isOpen) {
                return true;
              } else if (this.menuCtrl.getOpenSync()) {
                return false;
              }
              return m(window, t.currentX, this.isEndSide, this.maxEdgeStart);
            };
            t.prototype.onWillStart = function() {
              this.beforeAnimation(!this._isOpen);
              return this.loadAnimation();
            };
            t.prototype.onStart = function() {
              if (!this.isAnimating || !this.animation) {
                c(false, "isAnimating has to be true");
                return;
              }
              this.animation.reverse(this._isOpen).progressStart();
            };
            t.prototype.onMove = function(t) {
              if (!this.isAnimating || !this.animation) {
                c(false, "isAnimating has to be true");
                return;
              }
              var e = f(t.deltaX, this._isOpen, this.isEndSide);
              var i = e / this.width;
              this.animation.progressStep(i);
            };
            t.prototype.onEnd = function(t) {
              var e = this;
              if (!this.isAnimating || !this.animation) {
                c(false, "isAnimating has to be true");
                return;
              }
              var i = this._isOpen;
              var n = this.isEndSide;
              var s = f(t.deltaX, i, n);
              var r = this.width;
              var o = s / r;
              var a = t.velocityX;
              var u = r / 2;
              var h = a >= 0 && (a > 0.2 || t.deltaX > u);
              var l = a <= 0 && (a < -0.2 || t.deltaX < -u);
              var d = i ? (n ? h : l) : n ? l : h;
              var p = !i && d;
              if (i && !d) {
                p = true;
              }
              var m = d ? 1 - o : o;
              var v = m * r;
              var y = 0;
              if (v > 5) {
                var b = v / Math.abs(a);
                y = Math.min(b, 300);
              }
              this.lastOnEnd = t.timeStamp;
              this.animation
                .onFinish(
                  function() {
                    return e.afterAnimation(p);
                  },
                  { clearExistingCallbacks: true, oneTimeCallback: true }
                )
                .progressEnd(d, o, y);
            };
            t.prototype.beforeAnimation = function(t) {
              c(
                !this.isAnimating,
                "_before() should not be called while animating"
              );
              this.el.classList.add(v);
              if (this.backdropEl) {
                this.backdropEl.classList.add(y);
              }
              this.blocker.block();
              this.isAnimating = true;
              if (t) {
                this.ionWillOpen.emit();
              } else {
                this.ionWillClose.emit();
              }
            };
            t.prototype.afterAnimation = function(t) {
              c(this.isAnimating, "_before() should be called while animating");
              this._isOpen = t;
              this.isAnimating = false;
              if (!this._isOpen) {
                this.blocker.unblock();
              }
              if (t) {
                if (this.contentEl) {
                  this.contentEl.classList.add(b);
                }
                this.ionDidOpen.emit();
              } else {
                this.el.classList.remove(v);
                if (this.contentEl) {
                  this.contentEl.classList.remove(b);
                }
                if (this.backdropEl) {
                  this.backdropEl.classList.remove(y);
                }
                this.ionDidClose.emit();
              }
            };
            t.prototype.updateState = function() {
              var t = this._isActive();
              if (this.gesture) {
                this.gesture.setDisabled(!t || !this.swipeGesture);
              }
              if (!t && this._isOpen) {
                this.forceClosing();
              }
              if (!this.disabled && this.menuCtrl) {
                this.menuCtrl._setActiveMenu(this);
              }
              c(!this.isAnimating, "can not be animating");
            };
            t.prototype.forceClosing = function() {
              c(this._isOpen, "menu cannot be closed");
              this.isAnimating = true;
              var t = this.animation.reverse(true);
              t.playSync();
              this.afterAnimation(false);
            };
            t.prototype.render = function() {
              var t;
              var e = this;
              var i = this,
                n = i.isEndSide,
                s = i.type,
                r = i.disabled,
                o = i.mode,
                h = i.isPaneVisible;
              return a(
                u,
                {
                  role: "navigation",
                  class:
                    ((t = {}),
                    (t[o] = true),
                    (t["menu-type-" + s] = true),
                    (t["menu-enabled"] = !r),
                    (t["menu-side-end"] = n),
                    (t["menu-side-start"] = !n),
                    (t["menu-pane-visible"] = h),
                    t)
                },
                a(
                  "div",
                  {
                    class: "menu-inner",
                    ref: function(t) {
                      return (e.menuInnerEl = t);
                    }
                  },
                  a("slot", null)
                ),
                a("ion-backdrop", {
                  ref: function(t) {
                    return (e.backdropEl = t);
                  },
                  class: "menu-backdrop",
                  tappable: false,
                  stopPropagation: false
                })
              );
            };
            Object.defineProperty(t.prototype, "el", {
              get: function() {
                return h(this);
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(t, "watchers", {
              get: function() {
                return {
                  type: ["typeChanged"],
                  disabled: ["disabledChanged"],
                  side: ["sideChanged"],
                  swipeGesture: ["swipeGestureChanged"]
                };
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(t, "style", {
              get: function() {
                return ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}";
              },
              enumerable: true,
              configurable: true
            });
            return t;
          })()
        );
        var f = function(t, e, i) {
          return Math.max(0, e !== i ? -t : t);
        };
        var m = function(t, e, i, n) {
          if (i) {
            return e >= t.innerWidth - n;
          } else {
            return e <= n;
          }
        };
        var v = "show-menu";
        var y = "show-backdrop";
        var b = "menu-content-open";
      }
    };
  }
);
