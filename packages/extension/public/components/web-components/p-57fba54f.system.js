System.register([], function(t) {
  "use strict";
  return {
    execute: function() {
      var e = function(t, e) {
        var i;
        var s = { passive: true };
        var r = function() {
          if (i) {
            i();
          }
        };
        var n = function(i) {
          if (t === i.target) {
            r();
            e(i);
          }
        };
        if (t) {
          t.addEventListener("webkitTransitionEnd", n, s);
          t.addEventListener("transitionend", n, s);
          i = function() {
            t.removeEventListener("webkitTransitionEnd", n, s);
            t.removeEventListener("transitionend", n, s);
          };
        }
        return r;
      };
      var i = /(^-?\d*\.?\d*)(.*)/;
      var s = 32;
      var r = 400;
      var n = {
        translateX: 1,
        translateY: 1,
        translateZ: 1,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        rotate: 1,
        rotateX: 1,
        rotateY: 1,
        rotateZ: 1,
        skewX: 1,
        skewY: 1,
        perspective: 1
      };
      var a = typeof window !== "undefined" ? window : {};
      var o = a.requestAnimationFrame
        ? a.requestAnimationFrame.bind(a)
        : function(t) {
            return t(Date.now());
          };
      var h = (function() {
        function t() {
          this._hasDur = false;
          this._hasTweenEffect = false;
          this._isAsync = false;
          this._isReverse = false;
          this._destroyed = false;
          this.hasChildren = false;
          this.isPlaying = false;
          this.hasCompleted = false;
        }
        t.prototype.addElement = function(t) {
          if (t != null) {
            if (t.length > 0) {
              for (var e = 0; e < t.length; e++) {
                this._addEl(t[e]);
              }
            } else {
              this._addEl(t);
            }
          }
          return this;
        };
        t.prototype._addEl = function(t) {
          if (t.nodeType === 1) {
            (this._elements = this._elements || []).push(t);
          }
        };
        t.prototype.add = function(t) {
          t.parent = this;
          this.hasChildren = true;
          (this._childAnimations = this._childAnimations || []).push(t);
          return this;
        };
        t.prototype.getDuration = function(t) {
          if (t && t.duration !== undefined) {
            return t.duration;
          } else if (this._duration !== undefined) {
            return this._duration;
          } else if (this.parent) {
            return this.parent.getDuration();
          }
          return 0;
        };
        t.prototype.isRoot = function() {
          return !this.parent;
        };
        t.prototype.duration = function(t) {
          this._duration = t;
          return this;
        };
        t.prototype.getEasing = function() {
          if (this._isReverse && this._reversedEasingName !== undefined) {
            return this._reversedEasingName;
          }
          return this._easingName !== undefined
            ? this._easingName
            : (this.parent && this.parent.getEasing()) || null;
        };
        t.prototype.easing = function(t) {
          this._easingName = t;
          return this;
        };
        t.prototype.easingReverse = function(t) {
          this._reversedEasingName = t;
          return this;
        };
        t.prototype.from = function(t, e) {
          this._addProp("from", t, e);
          return this;
        };
        t.prototype.to = function(t, e, i) {
          if (i === void 0) {
            i = false;
          }
          var s = this._addProp("to", t, e);
          if (i) {
            this.afterClearStyles(
              s.trans ? ["transform", "-webkit-transform"] : [t]
            );
          }
          return this;
        };
        t.prototype.fromTo = function(t, e, i, s) {
          return this.from(t, e).to(t, i, s);
        };
        t.prototype._getProp = function(t) {
          if (this._fxProperties) {
            return this._fxProperties.find(function(e) {
              return e.effectName === t;
            });
          }
          return undefined;
        };
        t.prototype._addProp = function(t, e, s) {
          var r = this._getProp(e);
          if (!r) {
            var a = n[e] === 1;
            r = { effectName: e, trans: a, wc: a ? "transform" : e };
            (this._fxProperties = this._fxProperties || []).push(r);
          }
          var o = { val: s, num: 0, effectUnit: "" };
          r[t] = o;
          if (typeof s === "string" && s.indexOf(" ") < 0) {
            var h = s.match(i);
            if (h) {
              var f = parseFloat(h[1]);
              if (!isNaN(f)) {
                o.num = f;
              }
              o.effectUnit = h[0] !== h[2] ? h[2] : "";
            }
          } else if (typeof s === "number") {
            o.num = s;
          }
          return r;
        };
        t.prototype.beforeAddClass = function(t) {
          (this._beforeAddClasses = this._beforeAddClasses || []).push(t);
          return this;
        };
        t.prototype.beforeRemoveClass = function(t) {
          (this._beforeRemoveClasses = this._beforeRemoveClasses || []).push(t);
          return this;
        };
        t.prototype.beforeStyles = function(t) {
          this._beforeStyles = t;
          return this;
        };
        t.prototype.beforeClearStyles = function(t) {
          this._beforeStyles = this._beforeStyles || {};
          for (var e = 0, i = t; e < i.length; e++) {
            var s = i[e];
            this._beforeStyles[s] = "";
          }
          return this;
        };
        t.prototype.beforeAddRead = function(t) {
          (this._readCallbacks = this._readCallbacks || []).push(t);
          return this;
        };
        t.prototype.beforeAddWrite = function(t) {
          (this._writeCallbacks = this._writeCallbacks || []).push(t);
          return this;
        };
        t.prototype.afterAddClass = function(t) {
          (this._afterAddClasses = this._afterAddClasses || []).push(t);
          return this;
        };
        t.prototype.afterRemoveClass = function(t) {
          (this._afterRemoveClasses = this._afterRemoveClasses || []).push(t);
          return this;
        };
        t.prototype.afterStyles = function(t) {
          this._afterStyles = t;
          return this;
        };
        t.prototype.afterClearStyles = function(t) {
          this._afterStyles = this._afterStyles || {};
          for (var e = 0, i = t; e < i.length; e++) {
            var s = i[e];
            this._afterStyles[s] = "";
          }
          return this;
        };
        t.prototype.play = function(t) {
          var e = this;
          if (this._destroyed) {
            return;
          }
          this._isAsync = this._hasDuration(t);
          this._clearAsync();
          this._playInit(t);
          o(function() {
            o(function() {
              e._playDomInspect(t);
            });
          });
        };
        t.prototype.playAsync = function(t) {
          var e = this;
          return new Promise(function(i) {
            e.onFinish(i, {
              oneTimeCallback: true,
              clearExistingCallbacks: true
            });
            e.play(t);
            return e;
          });
        };
        t.prototype.playSync = function() {
          if (!this._destroyed) {
            var t = { duration: 0 };
            this._isAsync = false;
            this._clearAsync();
            this._playInit(t);
            this._playDomInspect(t);
          }
        };
        t.prototype._playInit = function(t) {
          this._hasTweenEffect = false;
          this.isPlaying = true;
          this.hasCompleted = false;
          this._hasDur = this.getDuration(t) > s;
          var e = this._childAnimations;
          if (e) {
            for (var i = 0, r = e; i < r.length; i++) {
              var n = r[i];
              n._playInit(t);
            }
          }
          if (this._hasDur) {
            this._progress(0);
            this._willChange(true);
          }
        };
        t.prototype._playDomInspect = function(t) {
          var e = this;
          this._beforeAnimation();
          var i = this.getDuration(t);
          if (this._isAsync) {
            this._asyncEnd(i, true);
          }
          this._playProgress(t);
          if (this._isAsync && !this._destroyed) {
            o(function() {
              e._playToStep(1);
            });
          }
        };
        t.prototype._playProgress = function(t) {
          var e = this._childAnimations;
          if (e) {
            for (var i = 0, s = e; i < s.length; i++) {
              var r = s[i];
              r._playProgress(t);
            }
          }
          if (this._hasDur) {
            this._setTrans(this.getDuration(t), false);
          } else {
            this._progress(1);
            this._setAfterStyles();
            this._didFinish(true);
          }
        };
        t.prototype._playToStep = function(t) {
          if (!this._destroyed) {
            var e = this._childAnimations;
            if (e) {
              for (var i = 0, s = e; i < s.length; i++) {
                var r = s[i];
                r._playToStep(t);
              }
            }
            if (this._hasDur) {
              this._progress(t);
            }
          }
        };
        t.prototype._asyncEnd = function(t, i) {
          var s = this;
          var n = function() {
            s._clearAsync();
            s._playEnd();
            s._didFinishAll(i, true, false);
          };
          var a = function() {
            s._timerId = undefined;
            s._clearAsync();
            s._playEnd(i ? 1 : 0);
            s._didFinishAll(i, true, false);
          };
          s._unregisterTrnsEnd = e(s._transEl(), n);
          s._timerId = setTimeout(a, t + r);
        };
        t.prototype._playEnd = function(t) {
          var e = this._childAnimations;
          if (e) {
            for (var i = 0, s = e; i < s.length; i++) {
              var r = s[i];
              r._playEnd(t);
            }
          }
          if (this._hasDur) {
            if (t !== undefined) {
              this._setTrans(0, true);
              this._progress(t);
            }
            this._setAfterStyles();
            this._willChange(false);
          }
        };
        t.prototype._hasDuration = function(t) {
          if (this.getDuration(t) > s) {
            return true;
          }
          var e = this._childAnimations;
          if (e) {
            for (var i = 0, r = e; i < r.length; i++) {
              var n = r[i];
              if (n._hasDuration(t)) {
                return true;
              }
            }
          }
          return false;
        };
        t.prototype._hasDomReads = function() {
          if (this._readCallbacks && this._readCallbacks.length > 0) {
            return true;
          }
          var t = this._childAnimations;
          if (t) {
            for (var e = 0, i = t; e < i.length; e++) {
              var s = i[e];
              if (s._hasDomReads()) {
                return true;
              }
            }
          }
          return false;
        };
        t.prototype.stop = function(t) {
          if (t === void 0) {
            t = 1;
          }
          this._clearAsync();
          this._hasDur = true;
          this._playEnd(t);
        };
        t.prototype._clearAsync = function() {
          if (this._unregisterTrnsEnd) {
            this._unregisterTrnsEnd();
          }
          if (this._timerId) {
            clearTimeout(this._timerId);
          }
          this._timerId = this._unregisterTrnsEnd = undefined;
        };
        t.prototype._progress = function(t) {
          var e;
          var i = this._elements;
          var s = this._fxProperties;
          if (!i || i.length === 0 || !s || this._destroyed) {
            return;
          }
          if (this._isReverse) {
            t = 1 - t;
          }
          var r = 0;
          var n = 0;
          var a = "";
          var o;
          for (r = 0; r < s.length; r++) {
            o = s[r];
            if (o.from && o.to) {
              var h = o.from.num;
              var f = o.to.num;
              var l = h !== f;
              if (l) {
                this._hasTweenEffect = true;
              }
              if (t === 0) {
                e = o.from.val;
              } else if (t === 1) {
                e = o.to.val;
              } else if (l) {
                var _ = (f - h) * t + h;
                var u = o.to.effectUnit;
                e = _ + u;
              }
              if (e !== null) {
                var p = o.effectName;
                if (o.trans) {
                  a += p + "(" + e + ") ";
                } else {
                  for (n = 0; n < i.length; n++) {
                    i[n].style.setProperty(p, e);
                  }
                }
              }
            }
          }
          if (a.length > 0) {
            if ((!this._isReverse && t !== 1) || (this._isReverse && t !== 0)) {
              a += "translateZ(0px)";
            }
            for (r = 0; r < i.length; r++) {
              i[r].style.setProperty("transform", a);
              i[r].style.setProperty("-webkit-transform", a);
            }
          }
        };
        t.prototype._setTrans = function(t, e) {
          var i = this._elements;
          if (!i || i.length === 0 || !this._fxProperties) {
            return;
          }
          var s = e ? "linear" : this.getEasing();
          var r = t + "ms";
          for (var n = 0, a = i; n < a.length; n++) {
            var o = a[n].style;
            if (t > 0) {
              o.transitionDuration = r;
              if (s !== null) {
                o.transitionTimingFunction = s;
              }
            } else {
              o.transitionDuration = "0";
            }
          }
        };
        t.prototype._beforeAnimation = function() {
          this._fireBeforeReadFunc();
          this._fireBeforeWriteFunc();
          this._setBeforeStyles();
        };
        t.prototype._setBeforeStyles = function() {
          var t = this._childAnimations;
          if (t) {
            for (var e = 0, i = t; e < i.length; e++) {
              var s = i[e];
              s._setBeforeStyles();
            }
          }
          var r = this._elements;
          if (!r || r.length === 0 || this._isReverse) {
            return;
          }
          var n = this._beforeAddClasses;
          var a = this._beforeRemoveClasses;
          for (var o = 0, h = r; o < h.length; o++) {
            var f = h[o];
            var l = f.classList;
            if (n) {
              for (var _ = 0, u = n; _ < u.length; _++) {
                var p = u[_];
                l.add(p);
              }
            }
            if (a) {
              for (var c = 0, v = a; c < v.length; c++) {
                var p = v[c];
                l.remove(p);
              }
            }
            if (this._beforeStyles) {
              for (
                var d = 0, y = Object.entries(this._beforeStyles);
                d < y.length;
                d++
              ) {
                var m = y[d],
                  g = m[0],
                  b = m[1];
                f.style.setProperty(g, b);
              }
            }
          }
        };
        t.prototype._fireBeforeReadFunc = function() {
          var t = this._childAnimations;
          if (t) {
            for (var e = 0, i = t; e < i.length; e++) {
              var s = i[e];
              s._fireBeforeReadFunc();
            }
          }
          var r = this._readCallbacks;
          if (r) {
            for (var n = 0, a = r; n < a.length; n++) {
              var o = a[n];
              o();
            }
          }
        };
        t.prototype._fireBeforeWriteFunc = function() {
          var t = this._childAnimations;
          if (t) {
            for (var e = 0, i = t; e < i.length; e++) {
              var s = i[e];
              s._fireBeforeWriteFunc();
            }
          }
          var r = this._writeCallbacks;
          if (r) {
            for (var n = 0, a = r; n < a.length; n++) {
              var o = a[n];
              o();
            }
          }
        };
        t.prototype._setAfterStyles = function() {
          var t = this._elements;
          if (!t) {
            return;
          }
          for (var e = 0, i = t; e < i.length; e++) {
            var s = i[e];
            var r = s.classList;
            s.style.transitionDuration = s.style.transitionTimingFunction = "";
            if (this._isReverse) {
              var n = this._beforeAddClasses;
              if (n) {
                for (var a = 0, o = n; a < o.length; a++) {
                  var h = o[a];
                  r.remove(h);
                }
              }
              var f = this._beforeRemoveClasses;
              if (f) {
                for (var l = 0, _ = f; l < _.length; l++) {
                  var h = _[l];
                  r.add(h);
                }
              }
              var u = this._beforeStyles;
              if (u) {
                for (var p = 0, c = Object.keys(u); p < c.length; p++) {
                  var v = c[p];
                  s.style.removeProperty(v);
                }
              }
            } else {
              var d = this._afterAddClasses;
              if (d) {
                for (var y = 0, m = d; y < m.length; y++) {
                  var h = m[y];
                  r.add(h);
                }
              }
              var g = this._afterRemoveClasses;
              if (g) {
                for (var b = 0, C = g; b < C.length; b++) {
                  var h = C[b];
                  r.remove(h);
                }
              }
              var A = this._afterStyles;
              if (A) {
                for (var k = 0, E = Object.entries(A); k < E.length; k++) {
                  var F = E[k],
                    T = F[0],
                    S = F[1];
                  s.style.setProperty(T, S);
                }
              }
            }
          }
        };
        t.prototype._willChange = function(t) {
          var e;
          var i = this._fxProperties;
          var s;
          if (t && i) {
            e = [];
            for (var r = 0, n = i; r < n.length; r++) {
              var a = n[r];
              var o = a.wc;
              if (o === "webkitTransform") {
                e.push("transform", "-webkit-transform");
              } else if (o !== undefined) {
                e.push(o);
              }
            }
            s = e.join(",");
          } else {
            s = "";
          }
          var h = this._elements;
          if (h) {
            for (var f = 0, l = h; f < l.length; f++) {
              var _ = l[f];
              _.style.setProperty("will-change", s);
            }
          }
        };
        t.prototype.progressStart = function() {
          this._clearAsync();
          this._beforeAnimation();
          this._progressStart();
        };
        t.prototype._progressStart = function() {
          var t = this._childAnimations;
          if (t) {
            for (var e = 0, i = t; e < i.length; e++) {
              var s = i[e];
              s._progressStart();
            }
          }
          this._setTrans(0, true);
          this._willChange(true);
        };
        t.prototype.progressStep = function(t) {
          t = Math.min(1, Math.max(0, t));
          var e = this._childAnimations;
          if (e) {
            for (var i = 0, s = e; i < s.length; i++) {
              var r = s[i];
              r.progressStep(t);
            }
          }
          this._progress(t);
        };
        t.prototype.progressEnd = function(t, e, i) {
          var s = this;
          if (i === void 0) {
            i = -1;
          }
          if (this._isReverse) {
            e = 1 - e;
          }
          var r = t ? 1 : 0;
          var n = Math.abs(e - r);
          if (i < 0) {
            i = this._duration || 0;
          } else if (n < 0.05) {
            i = 0;
          }
          this._isAsync = i > 30;
          this._progressEnd(t, r, i, this._isAsync);
          if (this._isAsync) {
            this._asyncEnd(i, t);
            if (!this._destroyed) {
              o(function() {
                s._playToStep(r);
              });
            }
          }
        };
        t.prototype._progressEnd = function(t, e, i, s) {
          var r = this._childAnimations;
          if (r) {
            for (var n = 0, a = r; n < a.length; n++) {
              var o = a[n];
              o._progressEnd(t, e, i, s);
            }
          }
          if (!s) {
            this._progress(e);
            this._willChange(false);
            this._setAfterStyles();
            this._didFinish(t);
          } else {
            this.isPlaying = true;
            this.hasCompleted = false;
            this._hasDur = true;
            this._willChange(true);
            this._setTrans(i, false);
          }
        };
        t.prototype.onFinish = function(t, e) {
          if (e && e.clearExistingCallbacks) {
            this._onFinishCallbacks = this._onFinishOneTimeCallbacks = undefined;
          }
          if (e && e.oneTimeCallback) {
            this._onFinishOneTimeCallbacks =
              this._onFinishOneTimeCallbacks || [];
            this._onFinishOneTimeCallbacks.push(t);
          } else {
            this._onFinishCallbacks = this._onFinishCallbacks || [];
            this._onFinishCallbacks.push(t);
          }
          return this;
        };
        t.prototype._didFinishAll = function(t, e, i) {
          var s = this._childAnimations;
          if (s) {
            for (var r = 0, n = s; r < n.length; r++) {
              var a = n[r];
              a._didFinishAll(t, e, i);
            }
          }
          if ((e && this._isAsync) || (i && !this._isAsync)) {
            this._didFinish(t);
          }
        };
        t.prototype._didFinish = function(t) {
          this.isPlaying = false;
          this.hasCompleted = t;
          if (this._onFinishCallbacks) {
            for (var e = 0, i = this._onFinishCallbacks; e < i.length; e++) {
              var s = i[e];
              s(this);
            }
          }
          if (this._onFinishOneTimeCallbacks) {
            for (
              var r = 0, n = this._onFinishOneTimeCallbacks;
              r < n.length;
              r++
            ) {
              var s = n[r];
              s(this);
            }
            this._onFinishOneTimeCallbacks.length = 0;
          }
        };
        t.prototype.reverse = function(t) {
          if (t === void 0) {
            t = true;
          }
          var e = this._childAnimations;
          if (e) {
            for (var i = 0, s = e; i < s.length; i++) {
              var r = s[i];
              r.reverse(t);
            }
          }
          this._isReverse = !!t;
          return this;
        };
        t.prototype.destroy = function() {
          this._didFinish(false);
          this._destroyed = true;
          var t = this._childAnimations;
          if (t) {
            for (var e = 0, i = t; e < i.length; e++) {
              var s = i[e];
              s.destroy();
            }
          }
          this._clearAsync();
          if (this._elements) {
            this._elements.length = 0;
          }
          if (this._readCallbacks) {
            this._readCallbacks.length = 0;
          }
          if (this._writeCallbacks) {
            this._writeCallbacks.length = 0;
          }
          this.parent = undefined;
          if (this._childAnimations) {
            this._childAnimations.length = 0;
          }
          if (this._onFinishCallbacks) {
            this._onFinishCallbacks.length = 0;
          }
          if (this._onFinishOneTimeCallbacks) {
            this._onFinishOneTimeCallbacks.length = 0;
          }
        };
        t.prototype._transEl = function() {
          var t = this._childAnimations;
          if (t) {
            for (var e = 0, i = t; e < i.length; e++) {
              var s = i[e];
              var r = s._transEl();
              if (r) {
                return r;
              }
            }
          }
          return this._hasTweenEffect &&
            this._hasDur &&
            this._elements !== undefined &&
            this._elements.length > 0
            ? this._elements[0]
            : null;
        };
        return t;
      })();
      var f = t("create", function(t, e, i) {
        if (t) {
          return t(h, e, i);
        }
        return Promise.resolve(new h());
      });
    }
  };
});
