var __awaiter =
  (this && this.__awaiter) ||
  function(t, o, e, r) {
    return new (e || (e = Promise))(function(i, n) {
      function l(t) {
        try {
          c(r.next(t));
        } catch (t) {
          n(t);
        }
      }
      function s(t) {
        try {
          c(r["throw"](t));
        } catch (t) {
          n(t);
        }
      }
      function c(t) {
        t.done
          ? i(t.value)
          : new e(function(o) {
              o(t.value);
            }).then(l, s);
      }
      c((r = r.apply(t, o || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(t, o) {
    var e = {
        label: 0,
        sent: function() {
          if (n[0] & 1) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      },
      r,
      i,
      n,
      l;
    return (
      (l = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol === "function" &&
        (l[Symbol.iterator] = function() {
          return this;
        }),
      l
    );
    function s(t) {
      return function(o) {
        return c([t, o]);
      };
    }
    function c(l) {
      if (r) throw new TypeError("Generator is already executing.");
      while (e)
        try {
          if (
            ((r = 1),
            i &&
              (n =
                l[0] & 2
                  ? i["return"]
                  : l[0]
                  ? i["throw"] || ((n = i["return"]) && n.call(i), 0)
                  : i.next) &&
              !(n = n.call(i, l[1])).done)
          )
            return n;
          if (((i = 0), n)) l = [l[0] & 2, n.value];
          switch (l[0]) {
            case 0:
            case 1:
              n = l;
              break;
            case 4:
              e.label++;
              return { value: l[1], done: false };
            case 5:
              e.label++;
              i = l[1];
              l = [0];
              continue;
            case 7:
              l = e.ops.pop();
              e.trys.pop();
              continue;
            default:
              if (
                !((n = e.trys), (n = n.length > 0 && n[n.length - 1])) &&
                (l[0] === 6 || l[0] === 2)
              ) {
                e = 0;
                continue;
              }
              if (l[0] === 3 && (!n || (l[1] > n[0] && l[1] < n[3]))) {
                e.label = l[1];
                break;
              }
              if (l[0] === 6 && e.label < n[1]) {
                e.label = n[1];
                n = l;
                break;
              }
              if (n && e.label < n[2]) {
                e.label = n[2];
                e.ops.push(l);
                break;
              }
              if (n[2]) e.ops.pop();
              e.trys.pop();
              continue;
          }
          l = o.call(t, e);
        } catch (t) {
          l = [6, t];
          i = 0;
        } finally {
          r = n = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: true };
    }
  };
System.register(["./p-83e6ea9f.system.js", "./p-6a603f00.system.js"], function(
  t
) {
  "use strict";
  var o, e, r, i, n, l, s, c, a, u, f;
  return {
    setters: [
      function(t) {
        o = t.r;
        e = t.d;
        r = t.e;
        i = t.l;
        n = t.k;
        l = t.c;
        s = t.h;
        c = t.H;
        a = t.f;
      },
      function(t) {
        u = t.c;
        f = t.h;
      }
    ],
    execute: function() {
      var h = t(
        "ion_content",
        (function() {
          function t(t) {
            o(this, t);
            this.isScrolling = false;
            this.lastScroll = 0;
            this.queued = false;
            this.cTop = -1;
            this.cBottom = -1;
            this.detail = {
              scrollTop: 0,
              scrollLeft: 0,
              type: "scroll",
              event: undefined,
              startX: 0,
              startY: 0,
              startTimeStamp: 0,
              currentX: 0,
              currentY: 0,
              velocityX: 0,
              velocityY: 0,
              deltaX: 0,
              deltaY: 0,
              timeStamp: 0,
              data: undefined,
              isScrolling: true
            };
            this.fullscreen = false;
            this.scrollX = false;
            this.scrollY = true;
            this.scrollEvents = false;
            this.ionScrollStart = e(this, "ionScrollStart", 7);
            this.ionScroll = e(this, "ionScroll", 7);
            this.ionScrollEnd = e(this, "ionScrollEnd", 7);
          }
          t.prototype.componentWillLoad = function() {
            if (this.forceOverscroll === undefined) {
              var t = r(this);
              this.forceOverscroll = t === "ios" && i(window, "mobile");
            }
          };
          t.prototype.componentDidLoad = function() {
            this.resize();
          };
          t.prototype.componentDidUnload = function() {
            this.onScrollEnd();
          };
          t.prototype.onClick = function(t) {
            if (this.isScrolling) {
              t.preventDefault();
              t.stopPropagation();
            }
          };
          t.prototype.resize = function() {
            if (this.fullscreen) {
              n(this.readDimensions.bind(this));
            } else if (this.cTop !== 0 || this.cBottom !== 0) {
              this.cTop = this.cBottom = 0;
              this.el.forceUpdate();
            }
          };
          t.prototype.readDimensions = function() {
            var t = v(this.el);
            var o = Math.max(this.el.offsetTop, 0);
            var e = Math.max(t.offsetHeight - o - this.el.offsetHeight, 0);
            var r = o !== this.cTop || e !== this.cBottom;
            if (r) {
              this.cTop = o;
              this.cBottom = e;
              this.el.forceUpdate();
            }
          };
          t.prototype.onScroll = function(t) {
            var o = this;
            var e = Date.now();
            var r = !this.isScrolling;
            this.lastScroll = e;
            if (r) {
              this.onScrollStart();
            }
            if (!this.queued && this.scrollEvents) {
              this.queued = true;
              n(function(e) {
                o.queued = false;
                o.detail.event = t;
                d(o.detail, o.scrollEl, e, r);
                o.ionScroll.emit(o.detail);
              });
            }
          };
          t.prototype.getScrollElement = function() {
            return Promise.resolve(this.scrollEl);
          };
          t.prototype.scrollToTop = function(t) {
            if (t === void 0) {
              t = 0;
            }
            return this.scrollToPoint(undefined, 0, t);
          };
          t.prototype.scrollToBottom = function(t) {
            if (t === void 0) {
              t = 0;
            }
            var o = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
            return this.scrollToPoint(undefined, o, t);
          };
          t.prototype.scrollByPoint = function(t, o, e) {
            return this.scrollToPoint(
              t + this.scrollEl.scrollLeft,
              o + this.scrollEl.scrollTop,
              e
            );
          };
          t.prototype.scrollToPoint = function(t, o, e) {
            if (e === void 0) {
              e = 0;
            }
            return __awaiter(this, void 0, void 0, function() {
              var r, i, n, l, s, c, a, u, f;
              return __generator(this, function(h) {
                r = this.scrollEl;
                if (e < 32) {
                  if (o != null) {
                    r.scrollTop = o;
                  }
                  if (t != null) {
                    r.scrollLeft = t;
                  }
                  return [2];
                }
                n = 0;
                l = new Promise(function(t) {
                  return (i = t);
                });
                s = r.scrollTop;
                c = r.scrollLeft;
                a = o != null ? o - s : 0;
                u = t != null ? t - c : 0;
                f = function(t) {
                  var o = Math.min(1, (t - n) / e) - 1;
                  var l = Math.pow(o, 3) + 1;
                  if (a !== 0) {
                    r.scrollTop = Math.floor(l * a + s);
                  }
                  if (u !== 0) {
                    r.scrollLeft = Math.floor(l * u + c);
                  }
                  if (l < 1) {
                    requestAnimationFrame(f);
                  } else {
                    i();
                  }
                };
                requestAnimationFrame(function(t) {
                  n = t;
                  f(t);
                });
                return [2, l];
              });
            });
          };
          t.prototype.onScrollStart = function() {
            var t = this;
            this.isScrolling = true;
            this.ionScrollStart.emit({ isScrolling: true });
            if (this.watchDog) {
              clearInterval(this.watchDog);
            }
            this.watchDog = setInterval(function() {
              if (t.lastScroll < Date.now() - 120) {
                t.onScrollEnd();
              }
            }, 100);
          };
          t.prototype.onScrollEnd = function() {
            clearInterval(this.watchDog);
            this.watchDog = null;
            if (this.isScrolling) {
              this.isScrolling = false;
              this.ionScrollEnd.emit({ isScrolling: false });
            }
          };
          t.prototype.render = function() {
            var t;
            var o = this;
            var e = r(this);
            var i = this,
              n = i.scrollX,
              a = i.scrollY,
              h = i.forceOverscroll;
            var p =
              e === "ios" &&
              l.getBoolean("experimentalTransitionShadow", false);
            this.resize();
            return s(
              c,
              {
                class: Object.assign(
                  {},
                  u(this.color),
                  ((t = {}),
                  (t[e] = true),
                  (t["content-sizing"] = f("ion-popover", this.el)),
                  (t["overscroll"] = !!this.forceOverscroll),
                  t)
                ),
                style: {
                  "--offset-top": this.cTop + "px",
                  "--offset-bottom": this.cBottom + "px"
                }
              },
              s(
                "main",
                {
                  class: {
                    "inner-scroll": true,
                    "scroll-x": n,
                    "scroll-y": a,
                    overscroll: (n || a) && !!h
                  },
                  ref: function(t) {
                    return (o.scrollEl = t);
                  },
                  onScroll: function(t) {
                    return o.onScroll(t);
                  }
                },
                s("slot", null)
              ),
              p
                ? s(
                    "div",
                    { class: "transition-effect" },
                    s("div", { class: "transition-cover" }),
                    s("div", { class: "transition-shadow" })
                  )
                : null,
              s("slot", { name: "fixed" })
            );
          };
          Object.defineProperty(t.prototype, "el", {
            get: function() {
              return a(this);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(t, "style", {
            get: function() {
              return ':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}';
            },
            enumerable: true,
            configurable: true
          });
          return t;
        })()
      );
      var p = function(t) {
        if (t.parentElement) {
          return t.parentElement;
        }
        if (t.parentNode && t.parentNode.host) {
          return t.parentNode.host;
        }
        return null;
      };
      var v = function(t) {
        var o = t.closest("ion-tabs");
        if (o) {
          return o;
        }
        var e = t.closest("ion-app,ion-page,.ion-page,page-inner");
        if (e) {
          return e;
        }
        return p(t);
      };
      var d = function(t, o, e, r) {
        var i = t.currentX;
        var n = t.currentY;
        var l = t.timeStamp;
        var s = o.scrollLeft;
        var c = o.scrollTop;
        var a = e - l;
        if (r) {
          t.startTimeStamp = e;
          t.startX = s;
          t.startY = c;
          t.velocityX = t.velocityY = 0;
        }
        t.timeStamp = e;
        t.currentX = t.scrollLeft = s;
        t.currentY = t.scrollTop = c;
        t.deltaX = s - t.startX;
        t.deltaY = c - t.startY;
        if (a > 0 && a < 100) {
          var u = (s - i) / a;
          var f = (c - n) / a;
          t.velocityX = u * 0.7 + t.velocityX * 0.3;
          t.velocityY = f * 0.7 + t.velocityY * 0.3;
        }
      };
    }
  };
});
