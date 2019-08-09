System.register(["./p-83e6ea9f.system.js"], function(t) {
  "use strict";
  var e;
  return {
    setters: [
      function(t) {
        e = t.w;
      }
    ],
    execute: function() {
      var r = (function() {
        function t() {
          this.gestureId = 0;
          this.requestedStart = new Map();
          this.disabledGestures = new Map();
          this.disabledScroll = new Set();
        }
        t.prototype.createGesture = function(t) {
          return new i(
            this,
            this.newID(),
            t.name,
            t.priority || 0,
            !!t.disableScroll
          );
        };
        t.prototype.createBlocker = function(t) {
          if (t === void 0) {
            t = {};
          }
          return new n(this, this.newID(), t.disable, !!t.disableScroll);
        };
        t.prototype.start = function(t, e, r) {
          if (!this.canStart(t)) {
            this.requestedStart.delete(e);
            return false;
          }
          this.requestedStart.set(e, r);
          return true;
        };
        t.prototype.capture = function(t, e, r) {
          if (!this.start(t, e, r)) {
            return false;
          }
          var i = this.requestedStart;
          var n = -1e4;
          i.forEach(function(t) {
            n = Math.max(n, t);
          });
          if (n === r) {
            this.capturedId = e;
            i.clear();
            var a = new CustomEvent("ionGestureCaptured", {
              detail: { gestureName: t }
            });
            document.dispatchEvent(a);
            return true;
          }
          i.delete(e);
          return false;
        };
        t.prototype.release = function(t) {
          this.requestedStart.delete(t);
          if (this.capturedId === t) {
            this.capturedId = undefined;
          }
        };
        t.prototype.disableGesture = function(t, e) {
          var r = this.disabledGestures.get(t);
          if (r === undefined) {
            r = new Set();
            this.disabledGestures.set(t, r);
          }
          r.add(e);
        };
        t.prototype.enableGesture = function(t, e) {
          var r = this.disabledGestures.get(t);
          if (r !== undefined) {
            r.delete(e);
          }
        };
        t.prototype.disableScroll = function(t) {
          this.disabledScroll.add(t);
          if (this.disabledScroll.size === 1) {
            document.body.classList.add(a);
          }
        };
        t.prototype.enableScroll = function(t) {
          this.disabledScroll.delete(t);
          if (this.disabledScroll.size === 0) {
            document.body.classList.remove(a);
          }
        };
        t.prototype.canStart = function(t) {
          if (this.capturedId !== undefined) {
            return false;
          }
          if (this.isDisabled(t)) {
            return false;
          }
          return true;
        };
        t.prototype.isCaptured = function() {
          return this.capturedId !== undefined;
        };
        t.prototype.isScrollDisabled = function() {
          return this.disabledScroll.size > 0;
        };
        t.prototype.isDisabled = function(t) {
          var e = this.disabledGestures.get(t);
          if (e && e.size > 0) {
            return true;
          }
          return false;
        };
        t.prototype.newID = function() {
          this.gestureId++;
          return this.gestureId;
        };
        return t;
      })();
      var i = (function() {
        function t(t, e, r, i, n) {
          this.id = e;
          this.name = r;
          this.disableScroll = n;
          this.priority = i * 1e6 + e;
          this.ctrl = t;
        }
        t.prototype.canStart = function() {
          if (!this.ctrl) {
            return false;
          }
          return this.ctrl.canStart(this.name);
        };
        t.prototype.start = function() {
          if (!this.ctrl) {
            return false;
          }
          return this.ctrl.start(this.name, this.id, this.priority);
        };
        t.prototype.capture = function() {
          if (!this.ctrl) {
            return false;
          }
          var t = this.ctrl.capture(this.name, this.id, this.priority);
          if (t && this.disableScroll) {
            this.ctrl.disableScroll(this.id);
          }
          return t;
        };
        t.prototype.release = function() {
          if (this.ctrl) {
            this.ctrl.release(this.id);
            if (this.disableScroll) {
              this.ctrl.enableScroll(this.id);
            }
          }
        };
        t.prototype.destroy = function() {
          this.release();
          this.ctrl = undefined;
        };
        return t;
      })();
      var n = (function() {
        function t(t, e, r, i) {
          this.id = e;
          this.disable = r;
          this.disableScroll = i;
          this.ctrl = t;
        }
        t.prototype.block = function() {
          if (!this.ctrl) {
            return;
          }
          if (this.disable) {
            for (var t = 0, e = this.disable; t < e.length; t++) {
              var r = e[t];
              this.ctrl.disableGesture(r, this.id);
            }
          }
          if (this.disableScroll) {
            this.ctrl.disableScroll(this.id);
          }
        };
        t.prototype.unblock = function() {
          if (!this.ctrl) {
            return;
          }
          if (this.disable) {
            for (var t = 0, e = this.disable; t < e.length; t++) {
              var r = e[t];
              this.ctrl.enableGesture(r, this.id);
            }
          }
          if (this.disableScroll) {
            this.ctrl.enableScroll(this.id);
          }
        };
        t.prototype.destroy = function() {
          this.unblock();
          this.ctrl = undefined;
        };
        return t;
      })();
      var a = "backdrop-no-scroll";
      var s = t("GESTURE_CONTROLLER", new r());
      var u = function(t, e, r, i) {
        var n = o(t)
          ? { capture: !!i.capture, passive: !!i.passive }
          : !!i.capture;
        var a;
        var s;
        if (t["__zone_symbol__addEventListener"]) {
          a = "__zone_symbol__addEventListener";
          s = "__zone_symbol__removeEventListener";
        } else {
          a = "addEventListener";
          s = "removeEventListener";
        }
        t[a](e, r, n);
        return function() {
          t[s](e, r, n);
        };
      };
      var o = function(t) {
        if (l === undefined) {
          try {
            var e = Object.defineProperty({}, "passive", {
              get: function() {
                l = true;
              }
            });
            t.addEventListener(
              "optsTest",
              function() {
                return;
              },
              e
            );
          } catch (t) {
            l = false;
          }
        }
        return !!l;
      };
      var l;
      var c = 2e3;
      var f = function(t, e, r, i, n) {
        var a;
        var s;
        var o;
        var l;
        var f;
        var v;
        var h;
        var p = 0;
        var b = function(i) {
          p = Date.now() + c;
          if (!e(i)) {
            return;
          }
          if (!s && r) {
            s = u(t, "touchmove", r, n);
          }
          if (!o) {
            o = u(t, "touchend", S, n);
          }
          if (!l) {
            l = u(t, "touchcancel", S, n);
          }
        };
        var y = function(i) {
          if (p > Date.now()) {
            return;
          }
          if (!e(i)) {
            return;
          }
          if (!v && r) {
            v = u(d(t), "mousemove", r, n);
          }
          if (!h) {
            h = u(d(t), "mouseup", m, n);
          }
        };
        var S = function(t) {
          g();
          if (i) {
            i(t);
          }
        };
        var m = function(t) {
          X();
          if (i) {
            i(t);
          }
        };
        var g = function() {
          if (s) {
            s();
          }
          if (o) {
            o();
          }
          if (l) {
            l();
          }
          s = o = l = undefined;
        };
        var X = function() {
          if (v) {
            v();
          }
          if (h) {
            h();
          }
          v = h = undefined;
        };
        var Y = function() {
          g();
          X();
        };
        var w = function(e) {
          if (e) {
            if (a) {
              a();
            }
            if (f) {
              f();
            }
            a = f = undefined;
            Y();
          } else {
            if (!a) {
              a = u(t, "touchstart", b, n);
            }
            if (!f) {
              f = u(t, "mousedown", y, n);
            }
          }
        };
        var G = function() {
          w(true);
          i = r = e = undefined;
        };
        return { setDisabled: w, stop: Y, destroy: G };
      };
      var d = function(t) {
        return t instanceof Document ? t : t.ownerDocument;
      };
      var v = function(t, e, r) {
        var i = r * (Math.PI / 180);
        var n = t === "x";
        var a = Math.cos(i);
        var s = e * e;
        var u = 0;
        var o = 0;
        var l = false;
        var c = 0;
        return {
          start: function(t, e) {
            u = t;
            o = e;
            c = 0;
            l = true;
          },
          detect: function(t, e) {
            if (!l) {
              return false;
            }
            var r = t - u;
            var i = e - o;
            var f = r * r + i * i;
            if (f < s) {
              return false;
            }
            var d = Math.sqrt(f);
            var v = (n ? r : i) / d;
            if (v > a) {
              c = 1;
            } else if (v < -a) {
              c = -1;
            } else {
              c = 0;
            }
            l = false;
            return true;
          },
          isGesture: function() {
            return c !== 0;
          },
          getDirection: function() {
            return c;
          }
        };
      };
      var h = t("createGesture", function(t) {
        var r = false;
        var i = false;
        var n = true;
        var a = false;
        var u = Object.assign(
          {
            disableScroll: false,
            direction: "x",
            gesturePriority: 0,
            passive: true,
            maxAngle: 40,
            threshold: 10
          },
          t
        );
        var o = u.canStart;
        var l = u.onWillStart;
        var c = u.onStart;
        var d = u.onEnd;
        var h = u.notCaptured;
        var S = u.onMove;
        var m = u.threshold;
        var g = {
          type: "pan",
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
          event: undefined,
          data: undefined
        };
        var X = v(u.direction, u.threshold, u.maxAngle);
        var Y = s.createGesture({
          name: t.gestureName,
          priority: t.gesturePriority,
          disableScroll: t.disableScroll
        });
        var w = function(t) {
          var e = y(t);
          if (i || !n) {
            return false;
          }
          b(t, g);
          g.startX = g.currentX;
          g.startY = g.currentY;
          g.startTimeStamp = g.timeStamp = e;
          g.velocityX = g.velocityY = g.deltaX = g.deltaY = 0;
          g.event = t;
          if (o && o(g) === false) {
            return false;
          }
          Y.release();
          if (!Y.start()) {
            return false;
          }
          i = true;
          if (m === 0) {
            return D();
          }
          X.start(g.startX, g.startY);
          return true;
        };
        var G = function(t) {
          if (r) {
            if (!a && n) {
              a = true;
              p(g, t);
              e(_);
            }
            return;
          }
          p(g, t);
          if (X.detect(g.currentX, g.currentY)) {
            if (!X.isGesture() || !D()) {
              M();
            }
          }
        };
        var _ = function() {
          if (!r) {
            return;
          }
          a = false;
          if (S) {
            S(g);
          }
        };
        var D = function() {
          if (Y && !Y.capture()) {
            return false;
          }
          r = true;
          n = false;
          g.startX = g.currentX;
          g.startY = g.currentY;
          g.startTimeStamp = g.timeStamp;
          if (l) {
            l(g).then(E);
          } else {
            E();
          }
          return true;
        };
        var E = function() {
          if (c) {
            c(g);
          }
          n = true;
        };
        var I = function() {
          r = false;
          i = false;
          a = false;
          n = true;
          Y.release();
        };
        var L = function(t) {
          var e = r;
          var i = n;
          I();
          if (!i) {
            return;
          }
          p(g, t);
          if (e) {
            if (d) {
              d(g);
            }
            return;
          }
          if (h) {
            h(g);
          }
        };
        var z = f(u.el, w, G, L, { capture: false });
        var M = function() {
          I();
          z.stop();
          if (h) {
            h(g);
          }
        };
        return {
          setDisabled: function(t) {
            if (t && r) {
              L(undefined);
            }
            z.setDisabled(t);
          },
          destroy: function() {
            Y.destroy();
            z.destroy();
          }
        };
      });
      var p = function(t, e) {
        if (!e) {
          return;
        }
        var r = t.currentX;
        var i = t.currentY;
        var n = t.timeStamp;
        b(e, t);
        var a = t.currentX;
        var s = t.currentY;
        var u = (t.timeStamp = y(e));
        var o = u - n;
        if (o > 0 && o < 100) {
          var l = (a - r) / o;
          var c = (s - i) / o;
          t.velocityX = l * 0.7 + t.velocityX * 0.3;
          t.velocityY = c * 0.7 + t.velocityY * 0.3;
        }
        t.deltaX = a - t.startX;
        t.deltaY = s - t.startY;
        t.event = e;
      };
      var b = function(t, e) {
        var r = 0;
        var i = 0;
        if (t) {
          var n = t.changedTouches;
          if (n && n.length > 0) {
            var a = n[0];
            r = a.clientX;
            i = a.clientY;
          } else if (t.pageX !== undefined) {
            r = t.pageX;
            i = t.pageY;
          }
        }
        e.currentX = r;
        e.currentY = i;
      };
      var y = function(t) {
        return t.timeStamp || Date.now();
      };
    }
  };
});
