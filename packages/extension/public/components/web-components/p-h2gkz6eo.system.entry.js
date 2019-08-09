var __awaiter =
  (this && this.__awaiter) ||
  function(t, e, r, s) {
    return new (r || (r = Promise))(function(i, n) {
      function o(t) {
        try {
          l(s.next(t));
        } catch (t) {
          n(t);
        }
      }
      function a(t) {
        try {
          l(s["throw"](t));
        } catch (t) {
          n(t);
        }
      }
      function l(t) {
        t.done
          ? i(t.value)
          : new r(function(e) {
              e(t.value);
            }).then(o, a);
      }
      l((s = s.apply(t, e || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(t, e) {
    var r = {
        label: 0,
        sent: function() {
          if (n[0] & 1) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      },
      s,
      i,
      n,
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
        return l([t, e]);
      };
    }
    function l(o) {
      if (s) throw new TypeError("Generator is already executing.");
      while (r)
        try {
          if (
            ((s = 1),
            i &&
              (n =
                o[0] & 2
                  ? i["return"]
                  : o[0]
                  ? i["throw"] || ((n = i["return"]) && n.call(i), 0)
                  : i.next) &&
              !(n = n.call(i, o[1])).done)
          )
            return n;
          if (((i = 0), n)) o = [o[0] & 2, n.value];
          switch (o[0]) {
            case 0:
            case 1:
              n = o;
              break;
            case 4:
              r.label++;
              return { value: o[1], done: false };
            case 5:
              r.label++;
              i = o[1];
              o = [0];
              continue;
            case 7:
              o = r.ops.pop();
              r.trys.pop();
              continue;
            default:
              if (
                !((n = r.trys), (n = n.length > 0 && n[n.length - 1])) &&
                (o[0] === 6 || o[0] === 2)
              ) {
                r = 0;
                continue;
              }
              if (o[0] === 3 && (!n || (o[1] > n[0] && o[1] < n[3]))) {
                r.label = o[1];
                break;
              }
              if (o[0] === 6 && r.label < n[1]) {
                r.label = n[1];
                n = o;
                break;
              }
              if (n && r.label < n[2]) {
                r.label = n[2];
                r.ops.push(o);
                break;
              }
              if (n[2]) r.ops.pop();
              r.trys.pop();
              continue;
          }
          o = e.call(t, r);
        } catch (t) {
          o = [6, t];
          i = 0;
        } finally {
          s = n = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: true };
    }
  };
System.register(["./p-83e6ea9f.system.js"], function(t, e) {
  "use strict";
  var r, s, i, n, o, a, l;
  return {
    setters: [
      function(t) {
        r = t.r;
        s = t.d;
        i = t.w;
        n = t.e;
        o = t.h;
        a = t.f;
        l = t.H;
      }
    ],
    execute: function() {
      var u = t(
        "ion_refresher",
        (function() {
          function t(t) {
            r(this, t);
            this.appliedStyles = false;
            this.didStart = false;
            this.progress = 0;
            this.state = 1;
            this.pullMin = 60;
            this.pullMax = this.pullMin + 60;
            this.closeDuration = "280ms";
            this.snapbackDuration = "280ms";
            this.pullFactor = 1;
            this.disabled = false;
            this.ionRefresh = s(this, "ionRefresh", 7);
            this.ionPull = s(this, "ionPull", 7);
            this.ionStart = s(this, "ionStart", 7);
          }
          t.prototype.disabledChanged = function() {
            if (this.gesture) {
              this.gesture.setDisabled(this.disabled);
            }
          };
          t.prototype.componentDidLoad = function() {
            return __awaiter(this, void 0, void 0, function() {
              var t, r, s;
              var i = this;
              return __generator(this, function(n) {
                switch (n.label) {
                  case 0:
                    if (this.el.getAttribute("slot") !== "fixed") {
                      console.error(
                        'Make sure you use: <ion-refresher slot="fixed">'
                      );
                      return [2];
                    }
                    t = this.el.closest("ion-content");
                    if (!t) return [3, 2];
                    r = this;
                    return [4, t.getScrollElement()];
                  case 1:
                    r.scrollEl = n.sent();
                    return [3, 3];
                  case 2:
                    console.error(
                      "ion-refresher did not attach, make sure the parent is an ion-content."
                    );
                    n.label = 3;
                  case 3:
                    s = this;
                    return [4, e.import("./p-ee747906.system.js")];
                  case 4:
                    s.gesture = n.sent().createGesture({
                      el: this.el.closest("ion-content"),
                      gestureName: "refresher",
                      gesturePriority: 10,
                      direction: "y",
                      threshold: 20,
                      passive: false,
                      canStart: function() {
                        return i.canStart();
                      },
                      onStart: function() {
                        return i.onStart();
                      },
                      onMove: function(t) {
                        return i.onMove(t);
                      },
                      onEnd: function() {
                        return i.onEnd();
                      }
                    });
                    this.disabledChanged();
                    return [2];
                }
              });
            });
          };
          t.prototype.componentDidUnload = function() {
            this.scrollEl = undefined;
            if (this.gesture) {
              this.gesture.destroy();
              this.gesture = undefined;
            }
          };
          t.prototype.complete = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(t) {
                this.close(32, "120ms");
                return [2];
              });
            });
          };
          t.prototype.cancel = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(t) {
                this.close(16, "");
                return [2];
              });
            });
          };
          t.prototype.getProgress = function() {
            return Promise.resolve(this.progress);
          };
          t.prototype.canStart = function() {
            if (!this.scrollEl) {
              return false;
            }
            if (this.state !== 1) {
              return false;
            }
            if (this.scrollEl.scrollTop > 0) {
              return false;
            }
            return true;
          };
          t.prototype.onStart = function() {
            this.progress = 0;
            this.state = 1;
          };
          t.prototype.onMove = function(t) {
            if (!this.scrollEl) {
              return;
            }
            var e = t.event;
            if (e.touches && e.touches.length > 1) {
              return;
            }
            if ((this.state & 56) !== 0) {
              return;
            }
            var r =
              Number.isNaN(this.pullFactor) || this.pullFactor < 0
                ? 1
                : this.pullFactor;
            var s = t.deltaY * r;
            if (s <= 0) {
              this.progress = 0;
              this.state = 1;
              if (this.appliedStyles) {
                this.setCss(0, "", false, "");
                return;
              }
              return;
            }
            if (this.state === 1) {
              var i = this.scrollEl.scrollTop;
              if (i > 0) {
                this.progress = 0;
                return;
              }
              this.state = 2;
            }
            if (e.cancelable) {
              e.preventDefault();
            }
            this.setCss(s, "0ms", true, "");
            if (s === 0) {
              this.progress = 0;
              return;
            }
            var n = this.pullMin;
            this.progress = s / n;
            if (!this.didStart) {
              this.didStart = true;
              this.ionStart.emit();
            }
            this.ionPull.emit();
            if (s < n) {
              this.state = 2;
              return;
            }
            if (s > this.pullMax) {
              this.beginRefresh();
              return;
            }
            this.state = 4;
            return;
          };
          t.prototype.onEnd = function() {
            if (this.state === 4) {
              this.beginRefresh();
            } else if (this.state === 2) {
              this.cancel();
            }
          };
          t.prototype.beginRefresh = function() {
            this.state = 8;
            this.setCss(this.pullMin, this.snapbackDuration, true, "");
            this.ionRefresh.emit({ complete: this.complete.bind(this) });
          };
          t.prototype.close = function(t, e) {
            var r = this;
            setTimeout(function() {
              r.state = 1;
              r.progress = 0;
              r.didStart = false;
              r.setCss(0, "0ms", false, "");
            }, 600);
            this.state = t;
            this.setCss(0, this.closeDuration, true, e);
          };
          t.prototype.setCss = function(t, e, r, s) {
            var n = this;
            this.appliedStyles = t > 0;
            i(function() {
              if (n.scrollEl) {
                var i = n.scrollEl.style;
                i.transform =
                  t > 0
                    ? "translateY(" + t + "px) translateZ(0px)"
                    : "translateZ(0px)";
                i.transitionDuration = e;
                i.transitionDelay = s;
                i.overflow = r ? "hidden" : "";
              }
            });
          };
          t.prototype.render = function() {
            var t;
            var e = n(this);
            return o(l, {
              slot: "fixed",
              class:
                ((t = {}),
                (t[e] = true),
                (t["refresher-" + e] = true),
                (t["refresher-active"] = this.state !== 1),
                (t["refresher-pulling"] = this.state === 2),
                (t["refresher-ready"] = this.state === 4),
                (t["refresher-refreshing"] = this.state === 8),
                (t["refresher-cancelling"] = this.state === 16),
                (t["refresher-completing"] = this.state === 32),
                t)
            });
          };
          Object.defineProperty(t.prototype, "el", {
            get: function() {
              return a(this);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(t, "watchers", {
            get: function() {
              return { disabled: ["disabledChanged"] };
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(t, "style", {
            get: function() {
              return "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-icon,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-crescent circle,.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line{stroke:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}";
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
