var __awaiter =
  (this && this.__awaiter) ||
  function(t, e, i, r) {
    return new (i || (i = Promise))(function(o, n) {
      function s(t) {
        try {
          h(r.next(t));
        } catch (t) {
          n(t);
        }
      }
      function a(t) {
        try {
          h(r["throw"](t));
        } catch (t) {
          n(t);
        }
      }
      function h(t) {
        t.done
          ? o(t.value)
          : new i(function(e) {
              e(t.value);
            }).then(s, a);
      }
      h((r = r.apply(t, e || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(t, e) {
    var i = {
        label: 0,
        sent: function() {
          if (n[0] & 1) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      },
      r,
      o,
      n,
      s;
    return (
      (s = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol === "function" &&
        (s[Symbol.iterator] = function() {
          return this;
        }),
      s
    );
    function a(t) {
      return function(e) {
        return h([t, e]);
      };
    }
    function h(s) {
      if (r) throw new TypeError("Generator is already executing.");
      while (i)
        try {
          if (
            ((r = 1),
            o &&
              (n =
                s[0] & 2
                  ? o["return"]
                  : s[0]
                  ? o["throw"] || ((n = o["return"]) && n.call(o), 0)
                  : o.next) &&
              !(n = n.call(o, s[1])).done)
          )
            return n;
          if (((o = 0), n)) s = [s[0] & 2, n.value];
          switch (s[0]) {
            case 0:
            case 1:
              n = s;
              break;
            case 4:
              i.label++;
              return { value: s[1], done: false };
            case 5:
              i.label++;
              o = s[1];
              s = [0];
              continue;
            case 7:
              s = i.ops.pop();
              i.trys.pop();
              continue;
            default:
              if (
                !((n = i.trys), (n = n.length > 0 && n[n.length - 1])) &&
                (s[0] === 6 || s[0] === 2)
              ) {
                i = 0;
                continue;
              }
              if (s[0] === 3 && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                i.label = s[1];
                break;
              }
              if (s[0] === 6 && i.label < n[1]) {
                i.label = n[1];
                n = s;
                break;
              }
              if (n && i.label < n[2]) {
                i.label = n[2];
                i.ops.push(s);
                break;
              }
              if (n[2]) i.ops.pop();
              i.trys.pop();
              continue;
          }
          s = e.call(t, i);
        } catch (t) {
          s = [6, t];
          o = 0;
        } finally {
          r = n = 0;
        }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: true };
    }
  };
System.register(
  [
    "./p-83e6ea9f.system.js",
    "./p-0958cff4.system.js",
    "./p-95d7e664.system.js"
  ],
  function(t, e) {
    "use strict";
    var i, r, o, n, s, a, h, c;
    return {
      setters: [
        function(t) {
          i = t.r;
          r = t.d;
          o = t.e;
          n = t.h;
          s = t.H;
          a = t.f;
        },
        function(t) {
          h = t.c;
        },
        function(t) {
          c = t.a;
        }
      ],
      execute: function() {
        var l = t(
          "ion_picker_column",
          (function() {
            function t(t) {
              i(this, t);
              this.optHeight = 0;
              this.rotateFactor = 0;
              this.scaleFactor = 1;
              this.velocity = 0;
              this.y = 0;
              this.noAnimate = true;
              this.ionPickerColChange = r(this, "ionPickerColChange", 7);
            }
            t.prototype.colChanged = function() {
              this.refresh();
            };
            t.prototype.componentWillLoad = function() {
              var t = 0;
              var e = 0.81;
              var i = o(this);
              if (i === "ios") {
                t = -0.46;
                e = 1;
              }
              this.rotateFactor = t;
              this.scaleFactor = e;
            };
            t.prototype.componentDidLoad = function() {
              return __awaiter(this, void 0, void 0, function() {
                var t, i;
                var r = this;
                return __generator(this, function(o) {
                  switch (o.label) {
                    case 0:
                      t = this.optsEl;
                      if (t) {
                        this.optHeight = t.firstElementChild
                          ? t.firstElementChild.clientHeight
                          : 0;
                      }
                      this.refresh();
                      i = this;
                      return [4, e.import("./p-ee747906.system.js")];
                    case 1:
                      i.gesture = o.sent().createGesture({
                        el: this.el,
                        gestureName: "picker-swipe",
                        gesturePriority: 100,
                        threshold: 0,
                        onStart: function(t) {
                          return r.onStart(t);
                        },
                        onMove: function(t) {
                          return r.onMove(t);
                        },
                        onEnd: function(t) {
                          return r.onEnd(t);
                        }
                      });
                      this.gesture.setDisabled(false);
                      this.tmrId = setTimeout(function() {
                        r.noAnimate = false;
                        r.refresh(true);
                      }, 250);
                      return [2];
                  }
                });
              });
            };
            t.prototype.componentDidUnload = function() {
              cancelAnimationFrame(this.rafId);
              clearTimeout(this.tmrId);
              if (this.gesture) {
                this.gesture.destroy();
                this.gesture = undefined;
              }
            };
            t.prototype.emitColChange = function() {
              this.ionPickerColChange.emit(this.col);
            };
            t.prototype.setSelected = function(t, e) {
              var i = t > -1 ? -(t * this.optHeight) : 0;
              this.velocity = 0;
              cancelAnimationFrame(this.rafId);
              this.update(i, e, true);
              this.emitColChange();
            };
            t.prototype.update = function(t, e, i) {
              if (!this.optsEl) {
                return;
              }
              var r = 0;
              var o = 0;
              var n = this,
                s = n.col,
                a = n.rotateFactor;
              var h = (s.selectedIndex = this.indexForY(-t));
              var l = e === 0 ? "" : e + "ms";
              var f = "scale(" + this.scaleFactor + ")";
              var p = this.optsEl.children;
              for (var d = 0; d < p.length; d++) {
                var v = p[d];
                var m = s.options[d];
                var y = d * this.optHeight + t;
                var g = "";
                if (a !== 0) {
                  var b = y * a;
                  if (Math.abs(b) <= 90) {
                    r = 0;
                    o = 90;
                    g = "rotateX(" + b + "deg) ";
                  } else {
                    r = -9999;
                  }
                } else {
                  o = 0;
                  r = y;
                }
                var x = h === d;
                g += "translate3d(0px," + r + "px," + o + "px) ";
                if (this.scaleFactor !== 1 && !x) {
                  g += f;
                }
                if (this.noAnimate) {
                  m.duration = 0;
                  v.style.transitionDuration = "";
                } else if (e !== m.duration) {
                  m.duration = e;
                  v.style.transitionDuration = l;
                }
                if (g !== m.transform) {
                  m.transform = g;
                  v.style.transform = g;
                }
                if (x !== m.selected) {
                  m.selected = x;
                  if (x) {
                    v.classList.add(u);
                  } else {
                    v.classList.remove(u);
                  }
                }
              }
              this.col.prevSelected = h;
              if (i) {
                this.y = t;
              }
              if (this.lastIndex !== h) {
                c();
                this.lastIndex = h;
              }
            };
            t.prototype.decelerate = function() {
              var t = this;
              if (this.velocity !== 0) {
                this.velocity *= f;
                this.velocity =
                  this.velocity > 0
                    ? Math.max(this.velocity, 1)
                    : Math.min(this.velocity, -1);
                var e = this.y + this.velocity;
                if (e > this.minY) {
                  e = this.minY;
                  this.velocity = 0;
                } else if (e < this.maxY) {
                  e = this.maxY;
                  this.velocity = 0;
                }
                this.update(e, 0, true);
                var i =
                  Math.round(e) % this.optHeight !== 0 ||
                  Math.abs(this.velocity) > 1;
                if (i) {
                  this.rafId = requestAnimationFrame(function() {
                    return t.decelerate();
                  });
                } else {
                  this.velocity = 0;
                  this.emitColChange();
                }
              } else if (this.y % this.optHeight !== 0) {
                var r = Math.abs(this.y % this.optHeight);
                this.velocity = r > this.optHeight / 2 ? 1 : -1;
                this.decelerate();
              }
            };
            t.prototype.indexForY = function(t) {
              return Math.min(
                Math.max(Math.abs(Math.round(t / this.optHeight)), 0),
                this.col.options.length - 1
              );
            };
            t.prototype.onStart = function(t) {
              t.event.preventDefault();
              t.event.stopPropagation();
              cancelAnimationFrame(this.rafId);
              var e = this.col.options;
              var i = e.length - 1;
              var r = 0;
              for (var o = 0; o < e.length; o++) {
                if (!e[o].disabled) {
                  i = Math.min(i, o);
                  r = Math.max(r, o);
                }
              }
              this.minY = -(i * this.optHeight);
              this.maxY = -(r * this.optHeight);
            };
            t.prototype.onMove = function(t) {
              t.event.preventDefault();
              t.event.stopPropagation();
              var e = this.y + t.deltaY;
              if (e > this.minY) {
                e = Math.pow(e, 0.8);
                this.bounceFrom = e;
              } else if (e < this.maxY) {
                e += Math.pow(this.maxY - e, 0.9);
                this.bounceFrom = e;
              } else {
                this.bounceFrom = 0;
              }
              this.update(e, 0, false);
            };
            t.prototype.onEnd = function(t) {
              if (this.bounceFrom > 0) {
                this.update(this.minY, 100, true);
                this.emitColChange();
                return;
              } else if (this.bounceFrom < 0) {
                this.update(this.maxY, 100, true);
                this.emitColChange();
                return;
              }
              this.velocity = h(-p, t.velocityY * 23, p);
              if (this.velocity === 0 && t.deltaY === 0) {
                var e = t.event.target.closest(".picker-opt");
                if (e && e.hasAttribute("opt-index")) {
                  this.setSelected(
                    parseInt(e.getAttribute("opt-index"), 10),
                    d
                  );
                }
              } else {
                this.y += t.deltaY;
                this.decelerate();
              }
            };
            t.prototype.refresh = function(t) {
              var e = this.col.options.length - 1;
              var i = 0;
              var r = this.col.options;
              for (var o = 0; o < r.length; o++) {
                if (!r[o].disabled) {
                  e = Math.min(e, o);
                  i = Math.max(i, o);
                }
              }
              if (this.velocity !== 0) {
                return;
              }
              var n = h(e, this.col.selectedIndex || 0, i);
              if (this.col.prevSelected !== n || t) {
                var s = n * this.optHeight * -1;
                this.velocity = 0;
                this.update(s, d, true);
              }
            };
            t.prototype.render = function() {
              var t;
              var e = this;
              var i = this.col;
              var r = "button";
              var a = o(this);
              return n(
                s,
                {
                  class:
                    ((t = {}),
                    (t[a] = true),
                    (t["picker-col"] = true),
                    (t["picker-opts-left"] = this.col.align === "left"),
                    (t["picker-opts-right"] = this.col.align === "right"),
                    t),
                  style: { "max-width": this.col.columnWidth }
                },
                i.prefix &&
                  n(
                    "div",
                    { class: "picker-prefix", style: { width: i.prefixWidth } },
                    i.prefix
                  ),
                n(
                  "div",
                  {
                    class: "picker-opts",
                    style: { maxWidth: i.optionsWidth },
                    ref: function(t) {
                      return (e.optsEl = t);
                    }
                  },
                  i.options.map(function(t, e) {
                    return n(
                      r,
                      {
                        type: "button",
                        class: {
                          "picker-opt": true,
                          "picker-opt-disabled": !!t.disabled
                        },
                        "opt-index": e
                      },
                      t.text
                    );
                  })
                ),
                i.suffix &&
                  n(
                    "div",
                    { class: "picker-suffix", style: { width: i.suffixWidth } },
                    i.suffix
                  )
              );
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
                return { col: ["colChanged"] };
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(t, "style", {
              get: function() {
                return ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}:host-context([dir=rtl]) .picker-opt,[dir=rtl] .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:1;flex:1;white-space:nowrap}.picker-suffix{text-align:start}.picker-col{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}.picker-opts,.picker-prefix,.picker-suffix{top:77px;pointer-events:none}.picker-opt,.picker-opts,.picker-prefix,.picker-suffix{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt,[dir=rtl] .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}";
              },
              enumerable: true,
              configurable: true
            });
            return t;
          })()
        );
        var u = "picker-opt-selected";
        var f = 0.97;
        var p = 90;
        var d = 150;
      }
    };
  }
);
