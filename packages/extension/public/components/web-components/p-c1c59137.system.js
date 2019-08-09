System.register(["./p-0958cff4.system.js"], function(e) {
  "use strict";
  var t;
  return {
    setters: [
      function(e) {
        t = e.p;
      }
    ],
    execute: function() {
      var r = new WeakMap();
      var n = function(e, t, n, a) {
        if (a === void 0) {
          a = 0;
        }
        if (r.has(e) === n) {
          return;
        }
        if (n) {
          o(e, t, a);
        } else {
          i(e, t);
        }
      };
      var a = function(e) {
        return e === e.getRootNode().activeElement;
      };
      var o = function(e, t, n) {
        var a = t.parentNode;
        var o = t.cloneNode(false);
        o.classList.add("cloned-input");
        o.tabIndex = -1;
        a.appendChild(o);
        r.set(e, o);
        var i = e.ownerDocument;
        var u = i.dir === "rtl" ? 9999 : -9999;
        e.style.pointerEvents = "none";
        t.style.transform = "translate3d(" + u + "px," + n + "px,0) scale(0)";
      };
      var i = function(e, t) {
        var n = r.get(e);
        if (n) {
          r.delete(e);
          n.remove();
        }
        e.style.pointerEvents = "";
        t.style.transform = "";
      };
      var u = function(e, t, r) {
        if (!r || !t) {
          return function() {
            return;
          };
        }
        var o = function(r) {
          if (a(t)) {
            n(e, t, r);
          }
        };
        var i = function() {
          return n(e, t, false);
        };
        var u = function() {
          return o(true);
        };
        var v = function() {
          return o(false);
        };
        r.addEventListener("ionScrollStart", u);
        r.addEventListener("ionScrollEnd", v);
        t.addEventListener("blur", i);
        return function() {
          r.removeEventListener("ionScrollStart", u);
          r.removeEventListener("ionScrollEnd", v);
          t.addEventListener("ionBlur", i);
        };
      };
      var v = "input, textarea, [no-blur]";
      var s = function() {
        var e = true;
        var t = false;
        var r = document;
        var n = function() {
          t = true;
        };
        var a = function() {
          e = true;
        };
        var o = function(n) {
          if (t) {
            t = false;
            return;
          }
          var a = r.activeElement;
          if (!a) {
            return;
          }
          if (a.matches(v)) {
            return;
          }
          var o = n.target;
          if (o === a) {
            return;
          }
          if (o.matches(v) || o.closest(v)) {
            return;
          }
          e = false;
          setTimeout(function() {
            if (!e) {
              a.blur();
            }
          }, 50);
        };
        r.addEventListener("ionScrollStart", n);
        r.addEventListener("focusin", a, true);
        r.addEventListener("touchend", o, false);
        return function() {
          r.removeEventListener("ionScrollStart", n, true);
          r.removeEventListener("focusin", a, true);
          r.removeEventListener("touchend", o, false);
        };
      };
      var f = 0.3;
      var c = function(e, t, r) {
        var n = e.closest("ion-item,[ion-item]") || e;
        return l(
          n.getBoundingClientRect(),
          t.getBoundingClientRect(),
          r,
          e.ownerDocument.defaultView.innerHeight
        );
      };
      var l = function(e, t, r, n) {
        var a = e.top;
        var o = e.bottom;
        var i = t.top;
        var u = Math.min(t.bottom, n - r);
        var v = i + 15;
        var s = u * 0.5;
        var c = s - o;
        var l = v - a;
        var d = Math.round(c < 0 ? -c : l > 0 ? -l : 0);
        var m = Math.min(d, a - i);
        var p = Math.abs(m);
        var E = p / f;
        var g = Math.min(400, Math.max(150, E));
        return {
          scrollAmount: m,
          scrollDuration: g,
          scrollPadding: r,
          inputSafeY: -(a - v) + 4
        };
      };
      var d = function(e, r, n, o) {
        var i;
        var u = function(e) {
          i = t(e);
        };
        var v = function(u) {
          if (!i) {
            return;
          }
          var v = t(u);
          if (!p(6, i, v) && !a(r)) {
            u.preventDefault();
            u.stopPropagation();
            m(e, r, n, o);
          }
        };
        e.addEventListener("touchstart", u, true);
        e.addEventListener("touchend", v, true);
        return function() {
          e.removeEventListener("touchstart", u, true);
          e.removeEventListener("touchend", v, true);
        };
      };
      var m = function(e, t, r, a) {
        var o = c(e, r, a);
        if (Math.abs(o.scrollAmount) < 4) {
          t.focus();
          return;
        }
        n(e, t, true, o.inputSafeY);
        t.focus();
        r.scrollByPoint(0, o.scrollAmount, o.scrollDuration).then(function() {
          n(e, t, false, o.inputSafeY);
          t.focus();
        });
      };
      var p = function(e, t, r) {
        if (t && r) {
          var n = t.x - r.x;
          var a = t.y - r.y;
          var o = n * n + a * a;
          return o > e * e;
        }
        return false;
      };
      var E = "$ionPaddingTimer";
      var g = function(e) {
        var t = document;
        var r = function(t) {
          h(t.target, e);
        };
        var n = function(e) {
          h(e.target, 0);
        };
        t.addEventListener("focusin", r);
        t.addEventListener("focusout", n);
        return function() {
          t.removeEventListener("focusin", r);
          t.removeEventListener("focusout", n);
        };
      };
      var h = function(e, t) {
        if (e.tagName !== "INPUT") {
          return;
        }
        if (e.parentElement && e.parentElement.tagName === "ION-INPUT") {
          return;
        }
        if (
          e.parentElement &&
          e.parentElement.parentElement &&
          e.parentElement.parentElement.tagName === "ION-SEARCHBAR"
        ) {
          return;
        }
        var r = e.closest("ion-content");
        if (r === null) {
          return;
        }
        var n = r[E];
        if (n) {
          clearTimeout(n);
        }
        if (t > 0) {
          r.style.setProperty("--keyboard-offset", t + "px");
        } else {
          r[E] = setTimeout(function() {
            r.style.setProperty("--keyboard-offset", "0px");
          }, 120);
        }
      };
      var L = true;
      var y = true;
      var S = e("startInputShims", function(e) {
        var t = document;
        var r = e.getNumber("keyboardHeight", 290);
        var n = e.getBoolean("scrollAssist", true);
        var a = e.getBoolean("hideCaretOnScroll", true);
        var o = e.getBoolean("inputBlurring", true);
        var i = e.getBoolean("scrollPadding", true);
        var v = Array.from(t.querySelectorAll("ion-input, ion-textarea"));
        var f = new WeakMap();
        var c = new WeakMap();
        var l = function(e) {
          var t =
            (e.shadowRoot || e).querySelector("input") ||
            (e.shadowRoot || e).querySelector("textarea");
          var o = e.closest("ion-content");
          if (!t) {
            return;
          }
          if (!!o && a && !f.has(e)) {
            var i = u(e, t, o);
            f.set(e, i);
          }
          if (!!o && n && !c.has(e)) {
            var i = d(e, t, o, r);
            c.set(e, i);
          }
        };
        var m = function(e) {
          if (a) {
            var t = f.get(e);
            if (t) {
              t();
            }
            f.delete(e);
          }
          if (n) {
            var t = c.get(e);
            if (t) {
              t();
            }
            c.delete(e);
          }
        };
        if (o && L) {
          s();
        }
        if (i && y) {
          g(r);
        }
        for (var p = 0, E = v; p < E.length; p++) {
          var h = E[p];
          l(h);
        }
        t.body.addEventListener("ionInputDidLoad", function(e) {
          l(e.target);
        });
        t.body.addEventListener("ionInputDidUnload", function(e) {
          m(e.target);
        });
      });
    }
  };
});
