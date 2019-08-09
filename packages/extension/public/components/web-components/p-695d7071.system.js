var __extends =
  (this && this.__extends) ||
  (function() {
    var e = function(t, i) {
      e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var i in t) if (t.hasOwnProperty(i)) e[i] = t[i];
        };
      return e(t, i);
    };
    return function(t, i) {
      e(t, i);
      function r() {
        this.constructor = t;
      }
      t.prototype =
        i === null ? Object.create(i) : ((r.prototype = i.prototype), new r());
    };
  })();
System.register([], function(e) {
  "use strict";
  return {
    execute: function() {
      var t =
        typeof document === "undefined"
          ? {
              body: {},
              addEventListener: function e() {},
              removeEventListener: function e() {},
              activeElement: { blur: function e() {}, nodeName: "" },
              querySelector: function e() {
                return null;
              },
              querySelectorAll: function e() {
                return [];
              },
              getElementById: function e() {
                return null;
              },
              createEvent: function e() {
                return { initEvent: function e() {} };
              },
              createElement: function e() {
                return {
                  children: [],
                  childNodes: [],
                  style: {},
                  setAttribute: function e() {},
                  getElementsByTagName: function e() {
                    return [];
                  }
                };
              },
              location: { hash: "" }
            }
          : document;
      var i =
        typeof window === "undefined"
          ? {
              document: t,
              navigator: { userAgent: "" },
              location: {},
              history: {},
              CustomEvent: function e() {
                return this;
              },
              addEventListener: function e() {},
              removeEventListener: function e() {},
              getComputedStyle: function e() {
                return {
                  getPropertyValue: function e() {
                    return "";
                  }
                };
              },
              Image: function e() {},
              Date: function e() {},
              screen: {},
              setTimeout: function e() {},
              clearTimeout: function e() {}
            }
          : window;
      var r = (function() {
        function e(e) {
          var t = this;
          for (var i = 0; i < e.length; i += 1) {
            t[i] = e[i];
          }
          t.length = e.length;
          return this;
        }
        return e;
      })();
      function a(e, a) {
        var s = [];
        var n = 0;
        if (e && !a) {
          if (e instanceof r) {
            return e;
          }
        }
        if (e) {
          if (typeof e === "string") {
            var l = void 0;
            var o = void 0;
            var d = e.trim();
            if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
              var u = "div";
              if (d.indexOf("<li") === 0) u = "ul";
              if (d.indexOf("<tr") === 0) u = "tbody";
              if (d.indexOf("<td") === 0 || d.indexOf("<th") === 0) u = "tr";
              if (d.indexOf("<tbody") === 0) u = "table";
              if (d.indexOf("<option") === 0) u = "select";
              o = t.createElement(u);
              o.innerHTML = d;
              for (n = 0; n < o.childNodes.length; n += 1) {
                s.push(o.childNodes[n]);
              }
            } else {
              if (!a && e[0] === "#" && !e.match(/[ .<>:~]/)) {
                l = [t.getElementById(e.trim().split("#")[1])];
              } else {
                l = (a || t).querySelectorAll(e.trim());
              }
              for (n = 0; n < l.length; n += 1) {
                if (l[n]) s.push(l[n]);
              }
            }
          } else if (e.nodeType || e === i || e === t) {
            s.push(e);
          } else if (e.length > 0 && e[0].nodeType) {
            for (n = 0; n < e.length; n += 1) {
              s.push(e[n]);
            }
          }
        }
        return new r(s);
      }
      a.fn = r.prototype;
      a.Class = r;
      a.Dom7 = r;
      function s(e) {
        var t = [];
        for (var i = 0; i < e.length; i += 1) {
          if (t.indexOf(e[i]) === -1) t.push(e[i]);
        }
        return t;
      }
      function n(e) {
        if (typeof e === "undefined") {
          return this;
        }
        var t = e.split(" ");
        for (var i = 0; i < t.length; i += 1) {
          for (var r = 0; r < this.length; r += 1) {
            if (
              typeof this[r] !== "undefined" &&
              typeof this[r].classList !== "undefined"
            )
              this[r].classList.add(t[i]);
          }
        }
        return this;
      }
      function l(e) {
        var t = e.split(" ");
        for (var i = 0; i < t.length; i += 1) {
          for (var r = 0; r < this.length; r += 1) {
            if (
              typeof this[r] !== "undefined" &&
              typeof this[r].classList !== "undefined"
            )
              this[r].classList.remove(t[i]);
          }
        }
        return this;
      }
      function o(e) {
        if (!this[0]) return false;
        return this[0].classList.contains(e);
      }
      function d(e) {
        var t = e.split(" ");
        for (var i = 0; i < t.length; i += 1) {
          for (var r = 0; r < this.length; r += 1) {
            if (
              typeof this[r] !== "undefined" &&
              typeof this[r].classList !== "undefined"
            )
              this[r].classList.toggle(t[i]);
          }
        }
        return this;
      }
      function u(e, t) {
        if (arguments.length === 1 && typeof e === "string") {
          if (this[0]) return this[0].getAttribute(e);
          return undefined;
        }
        for (var i = 0; i < this.length; i += 1) {
          if (arguments.length === 2) {
            this[i].setAttribute(e, t);
          } else {
            for (var r in e) {
              this[i][r] = e[r];
              this[i].setAttribute(r, e[r]);
            }
          }
        }
        return this;
      }
      function f(e) {
        for (var t = 0; t < this.length; t += 1) {
          this[t].removeAttribute(e);
        }
        return this;
      }
      function p(e, t) {
        var i;
        if (typeof t === "undefined") {
          i = this[0];
          if (i) {
            if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) {
              return i.dom7ElementDataStorage[e];
            }
            var r = i.getAttribute("data-" + e);
            if (r) {
              return r;
            }
            return undefined;
          }
          return undefined;
        }
        for (var a = 0; a < this.length; a += 1) {
          i = this[a];
          if (!i.dom7ElementDataStorage) i.dom7ElementDataStorage = {};
          i.dom7ElementDataStorage[e] = t;
        }
        return this;
      }
      function c(e) {
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          i.webkitTransform = e;
          i.transform = e;
        }
        return this;
      }
      function v(e) {
        if (typeof e !== "string") {
          e = e + "ms";
        }
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          i.webkitTransitionDuration = e;
          i.transitionDuration = e;
        }
        return this;
      }
      function h() {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        var i = e[0],
          r = e[1],
          s = e[2],
          n = e[3];
        if (typeof e[1] === "function") {
          (i = e[0]), (s = e[1]), (n = e[2]);
          r = undefined;
        }
        if (!n) n = false;
        function l(e) {
          var t = e.target;
          if (!t) return;
          var i = e.target.dom7EventData || [];
          if (i.indexOf(e) < 0) {
            i.unshift(e);
          }
          if (a(t).is(r)) s.apply(t, i);
          else {
            var n = a(t).parents();
            for (var l = 0; l < n.length; l += 1) {
              if (a(n[l]).is(r)) s.apply(n[l], i);
            }
          }
        }
        function o(e) {
          var t = e && e.target ? e.target.dom7EventData || [] : [];
          if (t.indexOf(e) < 0) {
            t.unshift(e);
          }
          s.apply(this, t);
        }
        var d = i.split(" ");
        var u;
        for (var f = 0; f < this.length; f += 1) {
          var p = this[f];
          if (!r) {
            for (u = 0; u < d.length; u += 1) {
              var c = d[u];
              if (!p.dom7Listeners) p.dom7Listeners = {};
              if (!p.dom7Listeners[c]) p.dom7Listeners[c] = [];
              p.dom7Listeners[c].push({ listener: s, proxyListener: o });
              p.addEventListener(c, o, n);
            }
          } else {
            for (u = 0; u < d.length; u += 1) {
              var c = d[u];
              if (!p.dom7LiveListeners) p.dom7LiveListeners = {};
              if (!p.dom7LiveListeners[c]) p.dom7LiveListeners[c] = [];
              p.dom7LiveListeners[c].push({ listener: s, proxyListener: l });
              p.addEventListener(c, l, n);
            }
          }
        }
        return this;
      }
      function m() {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        var i = e[0],
          r = e[1],
          a = e[2],
          s = e[3];
        if (typeof e[1] === "function") {
          (i = e[0]), (a = e[1]), (s = e[2]);
          r = undefined;
        }
        if (!s) s = false;
        var n = i.split(" ");
        for (var l = 0; l < n.length; l += 1) {
          var o = n[l];
          for (var d = 0; d < this.length; d += 1) {
            var u = this[d];
            var f = void 0;
            if (!r && u.dom7Listeners) {
              f = u.dom7Listeners[o];
            } else if (r && u.dom7LiveListeners) {
              f = u.dom7LiveListeners[o];
            }
            if (f && f.length) {
              for (var p = f.length - 1; p >= 0; p -= 1) {
                var c = f[p];
                if (a && c.listener === a) {
                  u.removeEventListener(o, c.proxyListener, s);
                  f.splice(p, 1);
                } else if (
                  a &&
                  c.listener &&
                  c.listener.dom7proxy &&
                  c.listener.dom7proxy === a
                ) {
                  u.removeEventListener(o, c.proxyListener, s);
                  f.splice(p, 1);
                } else if (!a) {
                  u.removeEventListener(o, c.proxyListener, s);
                  f.splice(p, 1);
                }
              }
            }
          }
        }
        return this;
      }
      function g() {
        var e = [];
        for (var r = 0; r < arguments.length; r++) {
          e[r] = arguments[r];
        }
        var a = e[0].split(" ");
        var s = e[1];
        for (var n = 0; n < a.length; n += 1) {
          var l = a[n];
          for (var o = 0; o < this.length; o += 1) {
            var d = this[o];
            var u = void 0;
            try {
              u = new i.CustomEvent(l, {
                detail: s,
                bubbles: true,
                cancelable: true
              });
            } catch (e) {
              u = t.createEvent("Event");
              u.initEvent(l, true, true);
              u.detail = s;
            }
            d.dom7EventData = e.filter(function(e, t) {
              return t > 0;
            });
            d.dispatchEvent(u);
            d.dom7EventData = [];
            delete d.dom7EventData;
          }
        }
        return this;
      }
      function b(e) {
        var t = ["webkitTransitionEnd", "transitionend"];
        var i = this;
        var r;
        function a(s) {
          if (s.target !== this) return;
          e.call(this, s);
          for (r = 0; r < t.length; r += 1) {
            i.off(t[r], a);
          }
        }
        if (e) {
          for (r = 0; r < t.length; r += 1) {
            i.on(t[r], a);
          }
        }
        return this;
      }
      function w(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue("margin-right")) +
              parseFloat(t.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      }
      function T(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue("margin-top")) +
              parseFloat(t.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      }
      function y() {
        if (this.length > 0) {
          var e = this[0];
          var r = e.getBoundingClientRect();
          var a = t.body;
          var s = e.clientTop || a.clientTop || 0;
          var n = e.clientLeft || a.clientLeft || 0;
          var l = e === i ? i.scrollY : e.scrollTop;
          var o = e === i ? i.scrollX : e.scrollLeft;
          return { top: r.top + l - s, left: r.left + o - n };
        }
        return null;
      }
      function x() {
        if (this[0]) return i.getComputedStyle(this[0], null);
        return {};
      }
      function E(e, t) {
        var r;
        if (arguments.length === 1) {
          if (typeof e === "string") {
            if (this[0])
              return i.getComputedStyle(this[0], null).getPropertyValue(e);
          } else {
            for (r = 0; r < this.length; r += 1) {
              for (var a in e) {
                this[r].style[a] = e[a];
              }
            }
            return this;
          }
        }
        if (arguments.length === 2 && typeof e === "string") {
          for (r = 0; r < this.length; r += 1) {
            this[r].style[e] = t;
          }
          return this;
        }
        return this;
      }
      function S(e) {
        if (!e) return this;
        for (var t = 0; t < this.length; t += 1) {
          if (e.call(this[t], t, this[t]) === false) {
            return this;
          }
        }
        return this;
      }
      function C(e) {
        if (typeof e === "undefined") {
          return this[0] ? this[0].innerHTML : undefined;
        }
        for (var t = 0; t < this.length; t += 1) {
          this[t].innerHTML = e;
        }
        return this;
      }
      function M(e) {
        if (typeof e === "undefined") {
          if (this[0]) {
            return this[0].textContent.trim();
          }
          return null;
        }
        for (var t = 0; t < this.length; t += 1) {
          this[t].textContent = e;
        }
        return this;
      }
      function P(e) {
        var s = this[0];
        var n;
        var l;
        if (!s || typeof e === "undefined") return false;
        if (typeof e === "string") {
          if (s.matches) return s.matches(e);
          else if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
          else if (s.msMatchesSelector) return s.msMatchesSelector(e);
          n = a(e);
          for (l = 0; l < n.length; l += 1) {
            if (n[l] === s) return true;
          }
          return false;
        } else if (e === t) return s === t;
        else if (e === i) return s === i;
        if (e.nodeType || e instanceof r) {
          n = e.nodeType ? [e] : e;
          for (l = 0; l < n.length; l += 1) {
            if (n[l] === s) return true;
          }
          return false;
        }
        return false;
      }
      function z() {
        var e = this[0];
        var t;
        if (e) {
          t = 0;
          while ((e = e.previousSibling) !== null) {
            if (e.nodeType === 1) t += 1;
          }
          return t;
        }
        return undefined;
      }
      function k(e) {
        if (typeof e === "undefined") return this;
        var t = this.length;
        var i;
        if (e > t - 1) {
          return new r([]);
        }
        if (e < 0) {
          i = t + e;
          if (i < 0) return new r([]);
          return new r([this[i]]);
        }
        return new r([this[e]]);
      }
      function L() {
        var e = [];
        for (var i = 0; i < arguments.length; i++) {
          e[i] = arguments[i];
        }
        var a;
        for (var s = 0; s < e.length; s += 1) {
          a = e[s];
          for (var n = 0; n < this.length; n += 1) {
            if (typeof a === "string") {
              var l = t.createElement("div");
              l.innerHTML = a;
              while (l.firstChild) {
                this[n].appendChild(l.firstChild);
              }
            } else if (a instanceof r) {
              for (var o = 0; o < a.length; o += 1) {
                this[n].appendChild(a[o]);
              }
            } else {
              this[n].appendChild(a);
            }
          }
        }
        return this;
      }
      function $(e) {
        var i;
        var a;
        for (i = 0; i < this.length; i += 1) {
          if (typeof e === "string") {
            var s = t.createElement("div");
            s.innerHTML = e;
            for (a = s.childNodes.length - 1; a >= 0; a -= 1) {
              this[i].insertBefore(s.childNodes[a], this[i].childNodes[0]);
            }
          } else if (e instanceof r) {
            for (a = 0; a < e.length; a += 1) {
              this[i].insertBefore(e[a], this[i].childNodes[0]);
            }
          } else {
            this[i].insertBefore(e, this[i].childNodes[0]);
          }
        }
        return this;
      }
      function D(e) {
        if (this.length > 0) {
          if (e) {
            if (
              this[0].nextElementSibling &&
              a(this[0].nextElementSibling).is(e)
            ) {
              return new r([this[0].nextElementSibling]);
            }
            return new r([]);
          }
          if (this[0].nextElementSibling)
            return new r([this[0].nextElementSibling]);
          return new r([]);
        }
        return new r([]);
      }
      function O(e) {
        var t = [];
        var i = this[0];
        if (!i) return new r([]);
        while (i.nextElementSibling) {
          var s = i.nextElementSibling;
          if (e) {
            if (a(s).is(e)) t.push(s);
          } else t.push(s);
          i = s;
        }
        return new r(t);
      }
      function I(e) {
        if (this.length > 0) {
          var t = this[0];
          if (e) {
            if (t.previousElementSibling && a(t.previousElementSibling).is(e)) {
              return new r([t.previousElementSibling]);
            }
            return new r([]);
          }
          if (t.previousElementSibling)
            return new r([t.previousElementSibling]);
          return new r([]);
        }
        return new r([]);
      }
      function A(e) {
        var t = [];
        var i = this[0];
        if (!i) return new r([]);
        while (i.previousElementSibling) {
          var s = i.previousElementSibling;
          if (e) {
            if (a(s).is(e)) t.push(s);
          } else t.push(s);
          i = s;
        }
        return new r(t);
      }
      function B(e) {
        var t = [];
        for (var i = 0; i < this.length; i += 1) {
          if (this[i].parentNode !== null) {
            if (e) {
              if (a(this[i].parentNode).is(e)) t.push(this[i].parentNode);
            } else {
              t.push(this[i].parentNode);
            }
          }
        }
        return a(s(t));
      }
      function X(e) {
        var t = [];
        for (var i = 0; i < this.length; i += 1) {
          var r = this[i].parentNode;
          while (r) {
            if (e) {
              if (a(r).is(e)) t.push(r);
            } else {
              t.push(r);
            }
            r = r.parentNode;
          }
        }
        return a(s(t));
      }
      function Y(e) {
        var t = this;
        if (typeof e === "undefined") {
          return new r([]);
        }
        if (!t.is(e)) {
          t = t.parents(e).eq(0);
        }
        return t;
      }
      function G(e) {
        var t = [];
        for (var i = 0; i < this.length; i += 1) {
          var a = this[i].querySelectorAll(e);
          for (var s = 0; s < a.length; s += 1) {
            t.push(a[s]);
          }
        }
        return new r(t);
      }
      function H(e) {
        var t = [];
        for (var i = 0; i < this.length; i += 1) {
          var n = this[i].childNodes;
          for (var l = 0; l < n.length; l += 1) {
            if (!e) {
              if (n[l].nodeType === 1) t.push(n[l]);
            } else if (n[l].nodeType === 1 && a(n[l]).is(e)) {
              t.push(n[l]);
            }
          }
        }
        return new r(s(t));
      }
      function V() {
        for (var e = 0; e < this.length; e += 1) {
          if (this[e].parentNode) this[e].parentNode.removeChild(this[e]);
        }
        return this;
      }
      function F() {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        var i = this;
        var r;
        var s;
        for (r = 0; r < e.length; r += 1) {
          var n = a(e[r]);
          for (s = 0; s < n.length; s += 1) {
            i[i.length] = n[s];
            i.length += 1;
          }
        }
        return i;
      }
      var N = {
        addClass: n,
        removeClass: l,
        hasClass: o,
        toggleClass: d,
        attr: u,
        removeAttr: f,
        data: p,
        transform: c,
        transition: v,
        on: h,
        off: m,
        trigger: g,
        transitionEnd: b,
        outerWidth: w,
        outerHeight: T,
        offset: y,
        css: E,
        each: S,
        html: C,
        text: M,
        is: P,
        index: z,
        eq: k,
        append: L,
        prepend: $,
        next: D,
        nextAll: O,
        prev: I,
        prevAll: A,
        parent: B,
        parents: X,
        closest: Y,
        find: G,
        children: H,
        remove: V,
        add: F,
        styles: x
      };
      Object.keys(N).forEach(function(e) {
        a.fn[e] = N[e];
      });
      var W = {
        deleteProps: function(e) {
          var t = e;
          Object.keys(t).forEach(function(e) {
            try {
              t[e] = null;
            } catch (e) {}
            try {
              delete t[e];
            } catch (e) {}
          });
        },
        nextTick: function(e, t) {
          if (t === void 0) {
            t = 0;
          }
          return setTimeout(e, t);
        },
        now: function() {
          return Date.now();
        },
        getTranslate: function(e, t) {
          if (t === void 0) {
            t = "x";
          }
          var r;
          var a;
          var s;
          var n = i.getComputedStyle(e, null);
          if (i.WebKitCSSMatrix) {
            a = n.transform || n.webkitTransform;
            if (a.split(",").length > 6) {
              a = a
                .split(", ")
                .map(function(e) {
                  return e.replace(",", ".");
                })
                .join(", ");
            }
            s = new i.WebKitCSSMatrix(a === "none" ? "" : a);
          } else {
            s =
              n.MozTransform ||
              n.OTransform ||
              n.MsTransform ||
              n.msTransform ||
              n.transform ||
              n
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,");
            r = s.toString().split(",");
          }
          if (t === "x") {
            if (i.WebKitCSSMatrix) a = s.m41;
            else if (r.length === 16) a = parseFloat(r[12]);
            else a = parseFloat(r[4]);
          }
          if (t === "y") {
            if (i.WebKitCSSMatrix) a = s.m42;
            else if (r.length === 16) a = parseFloat(r[13]);
            else a = parseFloat(r[5]);
          }
          return a || 0;
        },
        parseUrlQuery: function(e) {
          var t = {};
          var r = e || i.location.href;
          var a;
          var s;
          var n;
          var l;
          if (typeof r === "string" && r.length) {
            r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "";
            s = r.split("&").filter(function(e) {
              return e !== "";
            });
            l = s.length;
            for (a = 0; a < l; a += 1) {
              n = s[a].replace(/#\S+/g, "").split("=");
              t[decodeURIComponent(n[0])] =
                typeof n[1] === "undefined"
                  ? undefined
                  : decodeURIComponent(n[1]) || "";
            }
          }
          return t;
        },
        isObject: function(e) {
          return (
            typeof e === "object" &&
            e !== null &&
            e.constructor &&
            e.constructor === Object
          );
        },
        extend: function() {
          var e = [];
          for (var t = 0; t < arguments.length; t++) {
            e[t] = arguments[t];
          }
          var i = Object(e[0]);
          for (var r = 1; r < e.length; r += 1) {
            var a = e[r];
            if (a !== undefined && a !== null) {
              var s = Object.keys(Object(a));
              for (var n = 0, l = s.length; n < l; n += 1) {
                var o = s[n];
                var d = Object.getOwnPropertyDescriptor(a, o);
                if (d !== undefined && d.enumerable) {
                  if (W.isObject(i[o]) && W.isObject(a[o])) {
                    W.extend(i[o], a[o]);
                  } else if (!W.isObject(i[o]) && W.isObject(a[o])) {
                    i[o] = {};
                    W.extend(i[o], a[o]);
                  } else {
                    i[o] = a[o];
                  }
                }
              }
            }
          }
          return i;
        }
      };
      var R = (function e() {
        var r = t.createElement("div");
        return {
          touch:
            (i.Modernizr && i.Modernizr.touch === true) ||
            (function e() {
              return !!(
                i.navigator.maxTouchPoints > 0 ||
                "ontouchstart" in i ||
                (i.DocumentTouch && t instanceof i.DocumentTouch)
              );
            })(),
          pointerEvents: !!(
            i.navigator.pointerEnabled ||
            i.PointerEvent ||
            "maxTouchPoints" in i.navigator
          ),
          prefixedPointerEvents: !!i.navigator.msPointerEnabled,
          transition: (function e() {
            var t = r.style;
            return (
              "transition" in t ||
              "webkitTransition" in t ||
              "MozTransition" in t
            );
          })(),
          transforms3d:
            (i.Modernizr && i.Modernizr.csstransforms3d === true) ||
            (function e() {
              var t = r.style;
              return (
                "webkitPerspective" in t ||
                "MozPerspective" in t ||
                "OPerspective" in t ||
                "MsPerspective" in t ||
                "perspective" in t
              );
            })(),
          flexbox: (function e() {
            var t = r.style;
            var i = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
              " "
            );
            for (var a = 0; a < i.length; a += 1) {
              if (i[a] in t) return true;
            }
            return false;
          })(),
          observer: (function e() {
            return "MutationObserver" in i || "WebkitMutationObserver" in i;
          })(),
          passiveListener: (function e() {
            var t = false;
            try {
              var r = Object.defineProperty({}, "passive", {
                get: function() {
                  t = true;
                }
              });
              i.addEventListener("testPassiveListener", null, r);
            } catch (e) {}
            return t;
          })(),
          gestures: (function e() {
            return "ongesturestart" in i;
          })()
        };
      })();
      var j = (function() {
        function e(e) {
          if (e === void 0) {
            e = {};
          }
          var t = this;
          t.params = e;
          t.eventsListeners = {};
          if (t.params && t.params.on) {
            Object.keys(t.params.on).forEach(function(e) {
              t.on(e, t.params.on[e]);
            });
          }
        }
        e.prototype.on = function(e, t, i) {
          var r = this;
          if (typeof t !== "function") return r;
          var a = i ? "unshift" : "push";
          e.split(" ").forEach(function(e) {
            if (!r.eventsListeners[e]) r.eventsListeners[e] = [];
            r.eventsListeners[e][a](t);
          });
          return r;
        };
        e.prototype.once = function(e, t, i) {
          var r = this;
          if (typeof t !== "function") return r;
          function a() {
            var i = [];
            for (var s = 0; s < arguments.length; s++) {
              i[s] = arguments[s];
            }
            t.apply(r, i);
            r.off(e, a);
          }
          return r.on(e, a, i);
        };
        e.prototype.off = function(e, t) {
          var i = this;
          if (!i.eventsListeners) return i;
          e.split(" ").forEach(function(e) {
            if (typeof t === "undefined") {
              i.eventsListeners[e] = [];
            } else if (i.eventsListeners[e] && i.eventsListeners[e].length) {
              i.eventsListeners[e].forEach(function(r, a) {
                if (r === t) {
                  i.eventsListeners[e].splice(a, 1);
                }
              });
            }
          });
          return i;
        };
        e.prototype.emit = function() {
          var e = [];
          for (var t = 0; t < arguments.length; t++) {
            e[t] = arguments[t];
          }
          var i = this;
          if (!i.eventsListeners) return i;
          var r;
          var a;
          var s;
          if (typeof e[0] === "string" || Array.isArray(e[0])) {
            r = e[0];
            a = e.slice(1, e.length);
            s = i;
          } else {
            r = e[0].events;
            a = e[0].data;
            s = e[0].context || i;
          }
          var n = Array.isArray(r) ? r : r.split(" ");
          n.forEach(function(e) {
            if (i.eventsListeners && i.eventsListeners[e]) {
              var t = [];
              i.eventsListeners[e].forEach(function(e) {
                t.push(e);
              });
              t.forEach(function(e) {
                e.apply(s, a);
              });
            }
          });
          return i;
        };
        e.prototype.useModulesParams = function(e) {
          var t = this;
          if (!t.modules) return;
          Object.keys(t.modules).forEach(function(i) {
            var r = t.modules[i];
            if (r.params) {
              W.extend(e, r.params);
            }
          });
        };
        e.prototype.useModules = function(e) {
          if (e === void 0) {
            e = {};
          }
          var t = this;
          if (!t.modules) return;
          Object.keys(t.modules).forEach(function(i) {
            var r = t.modules[i];
            var a = e[i] || {};
            if (r.instance) {
              Object.keys(r.instance).forEach(function(e) {
                var i = r.instance[e];
                if (typeof i === "function") {
                  t[e] = i.bind(t);
                } else {
                  t[e] = i;
                }
              });
            }
            if (r.on && t.on) {
              Object.keys(r.on).forEach(function(e) {
                t.on(e, r.on[e]);
              });
            }
            if (r.create) {
              r.create.bind(t)(a);
            }
          });
        };
        Object.defineProperty(e, "components", {
          set: function(e) {
            var t = this;
            if (!t.use) return;
            t.use(e);
          },
          enumerable: true,
          configurable: true
        });
        e.installModule = function(e) {
          var t = [];
          for (var i = 1; i < arguments.length; i++) {
            t[i - 1] = arguments[i];
          }
          var r = this;
          if (!r.prototype.modules) r.prototype.modules = {};
          var a =
            e.name || Object.keys(r.prototype.modules).length + "_" + W.now();
          r.prototype.modules[a] = e;
          if (e.proto) {
            Object.keys(e.proto).forEach(function(t) {
              r.prototype[t] = e.proto[t];
            });
          }
          if (e.static) {
            Object.keys(e.static).forEach(function(t) {
              r[t] = e.static[t];
            });
          }
          if (e.install) {
            e.install.apply(r, t);
          }
          return r;
        };
        e.use = function(e) {
          var t = [];
          for (var i = 1; i < arguments.length; i++) {
            t[i - 1] = arguments[i];
          }
          var r = this;
          if (Array.isArray(e)) {
            e.forEach(function(e) {
              return r.installModule(e);
            });
            return r;
          }
          return r.installModule.apply(r, [e].concat(t));
        };
        return e;
      })();
      function q() {
        var e = this;
        var t;
        var i;
        var r = e.$el;
        if (typeof e.params.width !== "undefined") {
          t = e.params.width;
        } else {
          t = r[0].clientWidth;
        }
        if (typeof e.params.height !== "undefined") {
          i = e.params.height;
        } else {
          i = r[0].clientHeight;
        }
        if ((t === 0 && e.isHorizontal()) || (i === 0 && e.isVertical())) {
          return;
        }
        t =
          t -
          parseInt(r.css("padding-left"), 10) -
          parseInt(r.css("padding-right"), 10);
        i =
          i -
          parseInt(r.css("padding-top"), 10) -
          parseInt(r.css("padding-bottom"), 10);
        W.extend(e, { width: t, height: i, size: e.isHorizontal() ? t : i });
      }
      function _() {
        var e = this;
        var t = e.params;
        var r = e.$wrapperEl,
          a = e.size,
          s = e.rtlTranslate,
          n = e.wrongRTL;
        var l = e.virtual && t.virtual.enabled;
        var o = l ? e.virtual.slides.length : e.slides.length;
        var d = r.children("." + e.params.slideClass);
        var u = l ? e.virtual.slides.length : d.length;
        var f = [];
        var p = [];
        var c = [];
        var v = t.slidesOffsetBefore;
        if (typeof v === "function") {
          v = t.slidesOffsetBefore.call(e);
        }
        var h = t.slidesOffsetAfter;
        if (typeof h === "function") {
          h = t.slidesOffsetAfter.call(e);
        }
        var m = e.snapGrid.length;
        var g = e.snapGrid.length;
        var b = t.spaceBetween;
        var w = -v;
        var T = 0;
        var y = 0;
        if (typeof a === "undefined") {
          return;
        }
        if (typeof b === "string" && b.indexOf("%") >= 0) {
          b = (parseFloat(b.replace("%", "")) / 100) * a;
        }
        e.virtualSize = -b;
        if (s) d.css({ marginLeft: "", marginTop: "" });
        else d.css({ marginRight: "", marginBottom: "" });
        var x;
        if (t.slidesPerColumn > 1) {
          if (
            Math.floor(u / t.slidesPerColumn) ===
            u / e.params.slidesPerColumn
          ) {
            x = u;
          } else {
            x = Math.ceil(u / t.slidesPerColumn) * t.slidesPerColumn;
          }
          if (t.slidesPerView !== "auto" && t.slidesPerColumnFill === "row") {
            x = Math.max(x, t.slidesPerView * t.slidesPerColumn);
          }
        }
        var E;
        var S = t.slidesPerColumn;
        var C = x / S;
        var M = Math.floor(u / t.slidesPerColumn);
        for (var P = 0; P < u; P += 1) {
          E = 0;
          var z = d.eq(P);
          if (t.slidesPerColumn > 1) {
            var k = void 0;
            var L = void 0;
            var $ = void 0;
            if (t.slidesPerColumnFill === "column") {
              L = Math.floor(P / S);
              $ = P - L * S;
              if (L > M || (L === M && $ === S - 1)) {
                $ += 1;
                if ($ >= S) {
                  $ = 0;
                  L += 1;
                }
              }
              k = L + ($ * x) / S;
              z.css({
                "-webkit-box-ordinal-group": k,
                "-moz-box-ordinal-group": k,
                "-ms-flex-order": k,
                "-webkit-order": k,
                order: k
              });
            } else {
              $ = Math.floor(P / C);
              L = P - $ * C;
            }
            z.css(
              "margin-" + (e.isHorizontal() ? "top" : "left"),
              $ !== 0 && t.spaceBetween && t.spaceBetween + "px"
            )
              .attr("data-swiper-column", L)
              .attr("data-swiper-row", $);
          }
          if (z.css("display") === "none") continue;
          if (t.slidesPerView === "auto") {
            var D = i.getComputedStyle(z[0], null);
            var O = z[0].style.transform;
            var I = z[0].style.webkitTransform;
            if (O) {
              z[0].style.transform = "none";
            }
            if (I) {
              z[0].style.webkitTransform = "none";
            }
            if (t.roundLengths) {
              E = e.isHorizontal() ? z.outerWidth(true) : z.outerHeight(true);
            } else {
              if (e.isHorizontal()) {
                var A = parseFloat(D.getPropertyValue("width"));
                var B = parseFloat(D.getPropertyValue("padding-left"));
                var X = parseFloat(D.getPropertyValue("padding-right"));
                var Y = parseFloat(D.getPropertyValue("margin-left"));
                var G = parseFloat(D.getPropertyValue("margin-right"));
                var H = D.getPropertyValue("box-sizing");
                if (H && H === "border-box") {
                  E = A + Y + G;
                } else {
                  E = A + B + X + Y + G;
                }
              } else {
                var V = parseFloat(D.getPropertyValue("height"));
                var F = parseFloat(D.getPropertyValue("padding-top"));
                var N = parseFloat(D.getPropertyValue("padding-bottom"));
                var j = parseFloat(D.getPropertyValue("margin-top"));
                var q = parseFloat(D.getPropertyValue("margin-bottom"));
                var H = D.getPropertyValue("box-sizing");
                if (H && H === "border-box") {
                  E = V + j + q;
                } else {
                  E = V + F + N + j + q;
                }
              }
            }
            if (O) {
              z[0].style.transform = O;
            }
            if (I) {
              z[0].style.webkitTransform = I;
            }
            if (t.roundLengths) E = Math.floor(E);
          } else {
            E = (a - (t.slidesPerView - 1) * b) / t.slidesPerView;
            if (t.roundLengths) E = Math.floor(E);
            if (d[P]) {
              if (e.isHorizontal()) {
                d[P].style.width = E + "px";
              } else {
                d[P].style.height = E + "px";
              }
            }
          }
          if (d[P]) {
            d[P].swiperSlideSize = E;
          }
          c.push(E);
          if (t.centeredSlides) {
            w = w + E / 2 + T / 2 + b;
            if (T === 0 && P !== 0) w = w - a / 2 - b;
            if (P === 0) w = w - a / 2 - b;
            if (Math.abs(w) < 1 / 1e3) w = 0;
            if (t.roundLengths) w = Math.floor(w);
            if (y % t.slidesPerGroup === 0) f.push(w);
            p.push(w);
          } else {
            if (t.roundLengths) w = Math.floor(w);
            if (y % t.slidesPerGroup === 0) f.push(w);
            p.push(w);
            w = w + E + b;
          }
          e.virtualSize += E + b;
          T = E;
          y += 1;
        }
        e.virtualSize = Math.max(e.virtualSize, a) + h;
        var _;
        if (s && n && (t.effect === "slide" || t.effect === "coverflow")) {
          r.css({ width: e.virtualSize + t.spaceBetween + "px" });
        }
        if (!R.flexbox || t.setWrapperSize) {
          if (e.isHorizontal())
            r.css({ width: e.virtualSize + t.spaceBetween + "px" });
          else r.css({ height: e.virtualSize + t.spaceBetween + "px" });
        }
        if (t.slidesPerColumn > 1) {
          e.virtualSize = (E + t.spaceBetween) * x;
          e.virtualSize =
            Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween;
          if (e.isHorizontal())
            r.css({ width: e.virtualSize + t.spaceBetween + "px" });
          else r.css({ height: e.virtualSize + t.spaceBetween + "px" });
          if (t.centeredSlides) {
            _ = [];
            for (var P = 0; P < f.length; P += 1) {
              var U = f[P];
              if (t.roundLengths) U = Math.floor(U);
              if (f[P] < e.virtualSize + f[0]) _.push(U);
            }
            f = _;
          }
        }
        if (!t.centeredSlides) {
          _ = [];
          for (var P = 0; P < f.length; P += 1) {
            var U = f[P];
            if (t.roundLengths) U = Math.floor(U);
            if (f[P] <= e.virtualSize - a) {
              _.push(U);
            }
          }
          f = _;
          if (Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1) {
            f.push(e.virtualSize - a);
          }
        }
        if (f.length === 0) f = [0];
        if (t.spaceBetween !== 0) {
          if (e.isHorizontal()) {
            if (s) d.css({ marginLeft: b + "px" });
            else d.css({ marginRight: b + "px" });
          } else d.css({ marginBottom: b + "px" });
        }
        if (t.centerInsufficientSlides) {
          var K = 0;
          c.forEach(function(e) {
            K += e + (t.spaceBetween ? t.spaceBetween : 0);
          });
          K -= t.spaceBetween;
          if (K < a) {
            var Q = (a - K) / 2;
            f.forEach(function(e, t) {
              f[t] = e - Q;
            });
            p.forEach(function(e, t) {
              p[t] = e + Q;
            });
          }
        }
        W.extend(e, {
          slides: d,
          snapGrid: f,
          slidesGrid: p,
          slidesSizesGrid: c
        });
        if (u !== o) {
          e.emit("slidesLengthChange");
        }
        if (f.length !== m) {
          if (e.params.watchOverflow) e.checkOverflow();
          e.emit("snapGridLengthChange");
        }
        if (p.length !== g) {
          e.emit("slidesGridLengthChange");
        }
        if (t.watchSlidesProgress || t.watchSlidesVisibility) {
          e.updateSlidesOffset();
        }
      }
      function U(e) {
        var t = this;
        var i = [];
        var r = 0;
        var a;
        if (typeof e === "number") {
          t.setTransition(e);
        } else if (e === true) {
          t.setTransition(t.params.speed);
        }
        if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1) {
          for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
            var s = t.activeIndex + a;
            if (s > t.slides.length) break;
            i.push(t.slides.eq(s)[0]);
          }
        } else {
          i.push(t.slides.eq(t.activeIndex)[0]);
        }
        for (a = 0; a < i.length; a += 1) {
          if (typeof i[a] !== "undefined") {
            var n = i[a].offsetHeight;
            r = n > r ? n : r;
          }
        }
        if (r) t.$wrapperEl.css("height", r + "px");
      }
      function K() {
        var e = this;
        var t = e.slides;
        for (var i = 0; i < t.length; i += 1) {
          t[i].swiperSlideOffset = e.isHorizontal()
            ? t[i].offsetLeft
            : t[i].offsetTop;
        }
      }
      function Q(e) {
        if (e === void 0) {
          e = (this && this.translate) || 0;
        }
        var t = this;
        var i = t.params;
        var r = t.slides,
          s = t.rtlTranslate;
        if (r.length === 0) return;
        if (typeof r[0].swiperSlideOffset === "undefined")
          t.updateSlidesOffset();
        var n = -e;
        if (s) n = e;
        r.removeClass(i.slideVisibleClass);
        t.visibleSlidesIndexes = [];
        t.visibleSlides = [];
        for (var l = 0; l < r.length; l += 1) {
          var o = r[l];
          var d =
            (n +
              (i.centeredSlides ? t.minTranslate() : 0) -
              o.swiperSlideOffset) /
            (o.swiperSlideSize + i.spaceBetween);
          if (i.watchSlidesVisibility) {
            var u = -(n - o.swiperSlideOffset);
            var f = u + t.slidesSizesGrid[l];
            var p =
              (u >= 0 && u < t.size) ||
              (f > 0 && f <= t.size) ||
              (u <= 0 && f >= t.size);
            if (p) {
              t.visibleSlides.push(o);
              t.visibleSlidesIndexes.push(l);
              r.eq(l).addClass(i.slideVisibleClass);
            }
          }
          o.progress = s ? -d : d;
        }
        t.visibleSlides = a(t.visibleSlides);
      }
      function Z(e) {
        if (e === void 0) {
          e = (this && this.translate) || 0;
        }
        var t = this;
        var i = t.params;
        var r = t.maxTranslate() - t.minTranslate();
        var a = t.progress,
          s = t.isBeginning,
          n = t.isEnd;
        var l = s;
        var o = n;
        if (r === 0) {
          a = 0;
          s = true;
          n = true;
        } else {
          a = (e - t.minTranslate()) / r;
          s = a <= 0;
          n = a >= 1;
        }
        W.extend(t, { progress: a, isBeginning: s, isEnd: n });
        if (i.watchSlidesProgress || i.watchSlidesVisibility)
          t.updateSlidesProgress(e);
        if (s && !l) {
          t.emit("reachBeginning toEdge");
        }
        if (n && !o) {
          t.emit("reachEnd toEdge");
        }
        if ((l && !s) || (o && !n)) {
          t.emit("fromEdge");
        }
        t.emit("progress", a);
      }
      function J() {
        var e = this;
        var t = e.slides,
          i = e.params,
          r = e.$wrapperEl,
          a = e.activeIndex,
          s = e.realIndex;
        var n = e.virtual && i.virtual.enabled;
        t.removeClass(
          i.slideActiveClass +
            " " +
            i.slideNextClass +
            " " +
            i.slidePrevClass +
            " " +
            i.slideDuplicateActiveClass +
            " " +
            i.slideDuplicateNextClass +
            " " +
            i.slideDuplicatePrevClass
        );
        var l;
        if (n) {
          l = e.$wrapperEl.find(
            "." + i.slideClass + '[data-swiper-slide-index="' + a + '"]'
          );
        } else {
          l = t.eq(a);
        }
        l.addClass(i.slideActiveClass);
        if (i.loop) {
          if (l.hasClass(i.slideDuplicateClass)) {
            r.children(
              "." +
                i.slideClass +
                ":not(." +
                i.slideDuplicateClass +
                ')[data-swiper-slide-index="' +
                s +
                '"]'
            ).addClass(i.slideDuplicateActiveClass);
          } else {
            r.children(
              "." +
                i.slideClass +
                "." +
                i.slideDuplicateClass +
                '[data-swiper-slide-index="' +
                s +
                '"]'
            ).addClass(i.slideDuplicateActiveClass);
          }
        }
        var o = l
          .nextAll("." + i.slideClass)
          .eq(0)
          .addClass(i.slideNextClass);
        if (i.loop && o.length === 0) {
          o = t.eq(0);
          o.addClass(i.slideNextClass);
        }
        var d = l
          .prevAll("." + i.slideClass)
          .eq(0)
          .addClass(i.slidePrevClass);
        if (i.loop && d.length === 0) {
          d = t.eq(-1);
          d.addClass(i.slidePrevClass);
        }
        if (i.loop) {
          if (o.hasClass(i.slideDuplicateClass)) {
            r.children(
              "." +
                i.slideClass +
                ":not(." +
                i.slideDuplicateClass +
                ')[data-swiper-slide-index="' +
                o.attr("data-swiper-slide-index") +
                '"]'
            ).addClass(i.slideDuplicateNextClass);
          } else {
            r.children(
              "." +
                i.slideClass +
                "." +
                i.slideDuplicateClass +
                '[data-swiper-slide-index="' +
                o.attr("data-swiper-slide-index") +
                '"]'
            ).addClass(i.slideDuplicateNextClass);
          }
          if (d.hasClass(i.slideDuplicateClass)) {
            r.children(
              "." +
                i.slideClass +
                ":not(." +
                i.slideDuplicateClass +
                ')[data-swiper-slide-index="' +
                d.attr("data-swiper-slide-index") +
                '"]'
            ).addClass(i.slideDuplicatePrevClass);
          } else {
            r.children(
              "." +
                i.slideClass +
                "." +
                i.slideDuplicateClass +
                '[data-swiper-slide-index="' +
                d.attr("data-swiper-slide-index") +
                '"]'
            ).addClass(i.slideDuplicatePrevClass);
          }
        }
      }
      function ee(e) {
        var t = this;
        var i = t.rtlTranslate ? t.translate : -t.translate;
        var r = t.slidesGrid,
          a = t.snapGrid,
          s = t.params,
          n = t.activeIndex,
          l = t.realIndex,
          o = t.snapIndex;
        var d = e;
        var u;
        if (typeof d === "undefined") {
          for (var f = 0; f < r.length; f += 1) {
            if (typeof r[f + 1] !== "undefined") {
              if (i >= r[f] && i < r[f + 1] - (r[f + 1] - r[f]) / 2) {
                d = f;
              } else if (i >= r[f] && i < r[f + 1]) {
                d = f + 1;
              }
            } else if (i >= r[f]) {
              d = f;
            }
          }
          if (s.normalizeSlideIndex) {
            if (d < 0 || typeof d === "undefined") d = 0;
          }
        }
        if (a.indexOf(i) >= 0) {
          u = a.indexOf(i);
        } else {
          u = Math.floor(d / s.slidesPerGroup);
        }
        if (u >= a.length) u = a.length - 1;
        if (d === n) {
          if (u !== o) {
            t.snapIndex = u;
            t.emit("snapIndexChange");
          }
          return;
        }
        var p = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        W.extend(t, {
          snapIndex: u,
          realIndex: p,
          previousIndex: n,
          activeIndex: d
        });
        t.emit("activeIndexChange");
        t.emit("snapIndexChange");
        if (l !== p) {
          t.emit("realIndexChange");
        }
        t.emit("slideChange");
      }
      function te(e) {
        var t = this;
        var i = t.params;
        var r = a(e.target).closest("." + i.slideClass)[0];
        var s = false;
        if (r) {
          for (var n = 0; n < t.slides.length; n += 1) {
            if (t.slides[n] === r) s = true;
          }
        }
        if (r && s) {
          t.clickedSlide = r;
          if (t.virtual && t.params.virtual.enabled) {
            t.clickedIndex = parseInt(a(r).attr("data-swiper-slide-index"), 10);
          } else {
            t.clickedIndex = a(r).index();
          }
        } else {
          t.clickedSlide = undefined;
          t.clickedIndex = undefined;
          return;
        }
        if (
          i.slideToClickedSlide &&
          t.clickedIndex !== undefined &&
          t.clickedIndex !== t.activeIndex
        ) {
          t.slideToClickedSlide();
        }
      }
      var ie = {
        updateSize: q,
        updateSlides: _,
        updateAutoHeight: U,
        updateSlidesOffset: K,
        updateSlidesProgress: Q,
        updateProgress: Z,
        updateSlidesClasses: J,
        updateActiveIndex: ee,
        updateClickedSlide: te
      };
      function re(e) {
        if (e === void 0) {
          e = this.isHorizontal() ? "x" : "y";
        }
        var t = this;
        var i = t.params,
          r = t.rtlTranslate,
          a = t.translate,
          s = t.$wrapperEl;
        if (i.virtualTranslate) {
          return r ? -a : a;
        }
        var n = W.getTranslate(s[0], e);
        if (r) n = -n;
        return n || 0;
      }
      function ae(e, t) {
        var i = this;
        var r = i.rtlTranslate,
          a = i.params,
          s = i.$wrapperEl,
          n = i.progress;
        var l = 0;
        var o = 0;
        var d = 0;
        if (i.isHorizontal()) {
          l = r ? -e : e;
        } else {
          o = e;
        }
        if (a.roundLengths) {
          l = Math.floor(l);
          o = Math.floor(o);
        }
        if (!a.virtualTranslate) {
          if (R.transforms3d)
            s.transform("translate3d(" + l + "px, " + o + "px, " + d + "px)");
          else s.transform("translate(" + l + "px, " + o + "px)");
        }
        i.previousTranslate = i.translate;
        i.translate = i.isHorizontal() ? l : o;
        var u;
        var f = i.maxTranslate() - i.minTranslate();
        if (f === 0) {
          u = 0;
        } else {
          u = (e - i.minTranslate()) / f;
        }
        if (u !== n) {
          i.updateProgress(e);
        }
        i.emit("setTranslate", i.translate, t);
      }
      function se() {
        return -this.snapGrid[0];
      }
      function ne() {
        return -this.snapGrid[this.snapGrid.length - 1];
      }
      var le = {
        getTranslate: re,
        setTranslate: ae,
        minTranslate: se,
        maxTranslate: ne
      };
      function oe(e, t) {
        var i = this;
        i.$wrapperEl.transition(e);
        i.emit("setTransition", e, t);
      }
      function de(e, t) {
        if (e === void 0) {
          e = true;
        }
        var i = this;
        var r = i.activeIndex,
          a = i.params,
          s = i.previousIndex;
        if (a.autoHeight) {
          i.updateAutoHeight();
        }
        var n = t;
        if (!n) {
          if (r > s) n = "next";
          else if (r < s) n = "prev";
          else n = "reset";
        }
        i.emit("transitionStart");
        if (e && r !== s) {
          if (n === "reset") {
            i.emit("slideResetTransitionStart");
            return;
          }
          i.emit("slideChangeTransitionStart");
          if (n === "next") {
            i.emit("slideNextTransitionStart");
          } else {
            i.emit("slidePrevTransitionStart");
          }
        }
      }
      function ue(e, t) {
        if (e === void 0) {
          e = true;
        }
        var i = this;
        var r = i.activeIndex,
          a = i.previousIndex;
        i.animating = false;
        i.setTransition(0);
        var s = t;
        if (!s) {
          if (r > a) s = "next";
          else if (r < a) s = "prev";
          else s = "reset";
        }
        i.emit("transitionEnd");
        if (e && r !== a) {
          if (s === "reset") {
            i.emit("slideResetTransitionEnd");
            return;
          }
          i.emit("slideChangeTransitionEnd");
          if (s === "next") {
            i.emit("slideNextTransitionEnd");
          } else {
            i.emit("slidePrevTransitionEnd");
          }
        }
      }
      var fe = { setTransition: oe, transitionStart: de, transitionEnd: ue };
      function pe(e, t, i, r) {
        if (e === void 0) {
          e = 0;
        }
        if (t === void 0) {
          t = this.params.speed;
        }
        if (i === void 0) {
          i = true;
        }
        var a = this;
        var s = e;
        if (s < 0) s = 0;
        var n = a.params,
          l = a.snapGrid,
          o = a.slidesGrid,
          d = a.previousIndex,
          u = a.activeIndex,
          f = a.rtlTranslate;
        if (a.animating && n.preventInteractionOnTransition) {
          return false;
        }
        var p = Math.floor(s / n.slidesPerGroup);
        if (p >= l.length) p = l.length - 1;
        if ((u || n.initialSlide || 0) === (d || 0) && i) {
          a.emit("beforeSlideChangeStart");
        }
        var c = -l[p];
        a.updateProgress(c);
        if (n.normalizeSlideIndex) {
          for (var v = 0; v < o.length; v += 1) {
            if (-Math.floor(c * 100) >= Math.floor(o[v] * 100)) {
              s = v;
            }
          }
        }
        if (a.initialized && s !== u) {
          if (!a.allowSlideNext && c < a.translate && c < a.minTranslate()) {
            return false;
          }
          if (!a.allowSlidePrev && c > a.translate && c > a.maxTranslate()) {
            if ((u || 0) !== s) return false;
          }
        }
        var h;
        if (s > u) h = "next";
        else if (s < u) h = "prev";
        else h = "reset";
        if ((f && -c === a.translate) || (!f && c === a.translate)) {
          a.updateActiveIndex(s);
          if (n.autoHeight) {
            a.updateAutoHeight();
          }
          a.updateSlidesClasses();
          if (n.effect !== "slide") {
            a.setTranslate(c);
          }
          if (h !== "reset") {
            a.transitionStart(i, h);
            a.transitionEnd(i, h);
          }
          return false;
        }
        if (t === 0 || !R.transition) {
          a.setTransition(0);
          a.setTranslate(c);
          a.updateActiveIndex(s);
          a.updateSlidesClasses();
          a.emit("beforeTransitionStart", t, r);
          a.transitionStart(i, h);
          a.transitionEnd(i, h);
        } else {
          a.setTransition(t);
          a.setTranslate(c);
          a.updateActiveIndex(s);
          a.updateSlidesClasses();
          a.emit("beforeTransitionStart", t, r);
          a.transitionStart(i, h);
          if (!a.animating) {
            a.animating = true;
            if (!a.onSlideToWrapperTransitionEnd) {
              a.onSlideToWrapperTransitionEnd = function e(t) {
                if (!a || a.destroyed) return;
                if (t.target !== this) return;
                a.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  a.onSlideToWrapperTransitionEnd
                );
                a.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  a.onSlideToWrapperTransitionEnd
                );
                a.onSlideToWrapperTransitionEnd = null;
                delete a.onSlideToWrapperTransitionEnd;
                a.transitionEnd(i, h);
              };
            }
            a.$wrapperEl[0].addEventListener(
              "transitionend",
              a.onSlideToWrapperTransitionEnd
            );
            a.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              a.onSlideToWrapperTransitionEnd
            );
          }
        }
        return true;
      }
      function ce(e, t, i, r) {
        if (e === void 0) {
          e = 0;
        }
        if (t === void 0) {
          t = this.params.speed;
        }
        if (i === void 0) {
          i = true;
        }
        var a = this;
        var s = e;
        if (a.params.loop) {
          s += a.loopedSlides;
        }
        return a.slideTo(s, t, i, r);
      }
      function ve(e, t, i) {
        if (e === void 0) {
          e = this.params.speed;
        }
        if (t === void 0) {
          t = true;
        }
        var r = this;
        var a = r.params,
          s = r.animating;
        if (a.loop) {
          if (s) return false;
          r.loopFix();
          r._clientLeft = r.$wrapperEl[0].clientLeft;
          return r.slideTo(r.activeIndex + a.slidesPerGroup, e, t, i);
        }
        return r.slideTo(r.activeIndex + a.slidesPerGroup, e, t, i);
      }
      function he(e, t, i) {
        if (e === void 0) {
          e = this.params.speed;
        }
        if (t === void 0) {
          t = true;
        }
        var r = this;
        var a = r.params,
          s = r.animating,
          n = r.snapGrid,
          l = r.slidesGrid,
          o = r.rtlTranslate;
        if (a.loop) {
          if (s) return false;
          r.loopFix();
          r._clientLeft = r.$wrapperEl[0].clientLeft;
        }
        var d = o ? r.translate : -r.translate;
        function u(e) {
          if (e < 0) return -Math.floor(Math.abs(e));
          return Math.floor(e);
        }
        var f = u(d);
        var p = n.map(function(e) {
          return u(e);
        });
        var c = l.map(function(e) {
          return u(e);
        });
        var v = n[p.indexOf(f)];
        var h = n[p.indexOf(f) - 1];
        var m;
        if (typeof h !== "undefined") {
          m = l.indexOf(h);
          if (m < 0) m = r.activeIndex - 1;
        }
        return r.slideTo(m, e, t, i);
      }
      function me(e, t, i) {
        if (e === void 0) {
          e = this.params.speed;
        }
        if (t === void 0) {
          t = true;
        }
        var r = this;
        return r.slideTo(r.activeIndex, e, t, i);
      }
      function ge(e, t, i) {
        if (e === void 0) {
          e = this.params.speed;
        }
        if (t === void 0) {
          t = true;
        }
        var r = this;
        var a = r.activeIndex;
        var s = Math.floor(a / r.params.slidesPerGroup);
        if (s < r.snapGrid.length - 1) {
          var n = r.rtlTranslate ? r.translate : -r.translate;
          var l = r.snapGrid[s];
          var o = r.snapGrid[s + 1];
          if (n - l > (o - l) / 2) {
            a = r.params.slidesPerGroup;
          }
        }
        return r.slideTo(a, e, t, i);
      }
      function be() {
        var e = this;
        var t = e.params,
          i = e.$wrapperEl;
        var r =
          t.slidesPerView === "auto"
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
        var s = e.clickedIndex;
        var n;
        if (t.loop) {
          if (e.animating) return;
          n = parseInt(a(e.clickedSlide).attr("data-swiper-slide-index"), 10);
          if (t.centeredSlides) {
            if (
              s < e.loopedSlides - r / 2 ||
              s > e.slides.length - e.loopedSlides + r / 2
            ) {
              e.loopFix();
              s = i
                .children(
                  "." +
                    t.slideClass +
                    '[data-swiper-slide-index="' +
                    n +
                    '"]:not(.' +
                    t.slideDuplicateClass +
                    ")"
                )
                .eq(0)
                .index();
              W.nextTick(function() {
                e.slideTo(s);
              });
            } else {
              e.slideTo(s);
            }
          } else if (s > e.slides.length - r) {
            e.loopFix();
            s = i
              .children(
                "." +
                  t.slideClass +
                  '[data-swiper-slide-index="' +
                  n +
                  '"]:not(.' +
                  t.slideDuplicateClass +
                  ")"
              )
              .eq(0)
              .index();
            W.nextTick(function() {
              e.slideTo(s);
            });
          } else {
            e.slideTo(s);
          }
        } else {
          e.slideTo(s);
        }
      }
      var we = {
        slideTo: pe,
        slideToLoop: ce,
        slideNext: ve,
        slidePrev: he,
        slideReset: me,
        slideToClosest: ge,
        slideToClickedSlide: be
      };
      function Te() {
        var e = this;
        var i = e.params,
          r = e.$wrapperEl;
        r.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
        var s = r.children("." + i.slideClass);
        if (i.loopFillGroupWithBlank) {
          var n = i.slidesPerGroup - (s.length % i.slidesPerGroup);
          if (n !== i.slidesPerGroup) {
            for (var l = 0; l < n; l += 1) {
              var o = a(t.createElement("div")).addClass(
                i.slideClass + " " + i.slideBlankClass
              );
              r.append(o);
            }
            s = r.children("." + i.slideClass);
          }
        }
        if (i.slidesPerView === "auto" && !i.loopedSlides)
          i.loopedSlides = s.length;
        e.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10);
        e.loopedSlides += i.loopAdditionalSlides;
        if (e.loopedSlides > s.length) {
          e.loopedSlides = s.length;
        }
        var d = [];
        var u = [];
        s.each(function(t, i) {
          var r = a(i);
          if (t < e.loopedSlides) u.push(i);
          if (t < s.length && t >= s.length - e.loopedSlides) d.push(i);
          r.attr("data-swiper-slide-index", t);
        });
        for (var l = 0; l < u.length; l += 1) {
          r.append(a(u[l].cloneNode(true)).addClass(i.slideDuplicateClass));
        }
        for (var l = d.length - 1; l >= 0; l -= 1) {
          r.prepend(a(d[l].cloneNode(true)).addClass(i.slideDuplicateClass));
        }
      }
      function ye() {
        var e = this;
        var t = e.params,
          i = e.activeIndex,
          r = e.slides,
          a = e.loopedSlides,
          s = e.allowSlidePrev,
          n = e.allowSlideNext,
          l = e.snapGrid,
          o = e.rtlTranslate;
        var d;
        e.allowSlidePrev = true;
        e.allowSlideNext = true;
        var u = -l[i];
        var f = u - e.getTranslate();
        if (i < a) {
          d = r.length - a * 3 + i;
          d += a;
          var p = e.slideTo(d, 0, false, true);
          if (p && f !== 0) {
            e.setTranslate((o ? -e.translate : e.translate) - f);
          }
        } else if (
          (t.slidesPerView === "auto" && i >= a * 2) ||
          i >= r.length - a
        ) {
          d = -r.length + i + a;
          d += a;
          var p = e.slideTo(d, 0, false, true);
          if (p && f !== 0) {
            e.setTranslate((o ? -e.translate : e.translate) - f);
          }
        }
        e.allowSlidePrev = s;
        e.allowSlideNext = n;
      }
      function xe() {
        var e = this;
        var t = e.$wrapperEl,
          i = e.params,
          r = e.slides;
        t.children(
          "." +
            i.slideClass +
            "." +
            i.slideDuplicateClass +
            ",." +
            i.slideClass +
            "." +
            i.slideBlankClass
        ).remove();
        r.removeAttr("data-swiper-slide-index");
      }
      var Ee = { loopCreate: Te, loopFix: ye, loopDestroy: xe };
      function Se(e) {
        var t = this;
        if (
          R.touch ||
          !t.params.simulateTouch ||
          (t.params.watchOverflow && t.isLocked)
        )
          return;
        var i = t.el;
        i.style.cursor = "move";
        i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab";
        i.style.cursor = e ? "-moz-grabbin" : "-moz-grab";
        i.style.cursor = e ? "grabbing" : "grab";
      }
      function Ce() {
        var e = this;
        if (R.touch || (e.params.watchOverflow && e.isLocked)) return;
        e.el.style.cursor = "";
      }
      var Me = { setGrabCursor: Se, unsetGrabCursor: Ce };
      function Pe(e) {
        var t = this;
        var i = t.$wrapperEl,
          r = t.params;
        if (r.loop) {
          t.loopDestroy();
        }
        if (typeof e === "object" && "length" in e) {
          for (var a = 0; a < e.length; a += 1) {
            if (e[a]) i.append(e[a]);
          }
        } else {
          i.append(e);
        }
        if (r.loop) {
          t.loopCreate();
        }
        if (!(r.observer && R.observer)) {
          t.update();
        }
      }
      function ze(e) {
        var t = this;
        var i = t.params,
          r = t.$wrapperEl,
          a = t.activeIndex;
        if (i.loop) {
          t.loopDestroy();
        }
        var s = a + 1;
        if (typeof e === "object" && "length" in e) {
          for (var n = 0; n < e.length; n += 1) {
            if (e[n]) r.prepend(e[n]);
          }
          s = a + e.length;
        } else {
          r.prepend(e);
        }
        if (i.loop) {
          t.loopCreate();
        }
        if (!(i.observer && R.observer)) {
          t.update();
        }
        t.slideTo(s, 0, false);
      }
      function ke(e, t) {
        var i = this;
        var r = i.$wrapperEl,
          a = i.params,
          s = i.activeIndex;
        var n = s;
        if (a.loop) {
          n -= i.loopedSlides;
          i.loopDestroy();
          i.slides = r.children("." + a.slideClass);
        }
        var l = i.slides.length;
        if (e <= 0) {
          i.prependSlide(t);
          return;
        }
        if (e >= l) {
          i.appendSlide(t);
          return;
        }
        var o = n > e ? n + 1 : n;
        var d = [];
        for (var u = l - 1; u >= e; u -= 1) {
          var f = i.slides.eq(u);
          f.remove();
          d.unshift(f);
        }
        if (typeof t === "object" && "length" in t) {
          for (var u = 0; u < t.length; u += 1) {
            if (t[u]) r.append(t[u]);
          }
          o = n > e ? n + t.length : n;
        } else {
          r.append(t);
        }
        for (var u = 0; u < d.length; u += 1) {
          r.append(d[u]);
        }
        if (a.loop) {
          i.loopCreate();
        }
        if (!(a.observer && R.observer)) {
          i.update();
        }
        if (a.loop) {
          i.slideTo(o + i.loopedSlides, 0, false);
        } else {
          i.slideTo(o, 0, false);
        }
      }
      function Le(e) {
        var t = this;
        var i = t.params,
          r = t.$wrapperEl,
          a = t.activeIndex;
        var s = a;
        if (i.loop) {
          s -= t.loopedSlides;
          t.loopDestroy();
          t.slides = r.children("." + i.slideClass);
        }
        var n = s;
        var l;
        if (typeof e === "object" && "length" in e) {
          for (var o = 0; o < e.length; o += 1) {
            l = e[o];
            if (t.slides[l]) t.slides.eq(l).remove();
            if (l < n) n -= 1;
          }
          n = Math.max(n, 0);
        } else {
          l = e;
          if (t.slides[l]) t.slides.eq(l).remove();
          if (l < n) n -= 1;
          n = Math.max(n, 0);
        }
        if (i.loop) {
          t.loopCreate();
        }
        if (!(i.observer && R.observer)) {
          t.update();
        }
        if (i.loop) {
          t.slideTo(n + t.loopedSlides, 0, false);
        } else {
          t.slideTo(n, 0, false);
        }
      }
      function $e() {
        var e = this;
        var t = [];
        for (var i = 0; i < e.slides.length; i += 1) {
          t.push(i);
        }
        e.removeSlide(t);
      }
      var De = {
        appendSlide: Pe,
        prependSlide: ze,
        addSlide: ke,
        removeSlide: Le,
        removeAllSlides: $e
      };
      var Oe = (function e() {
        var r = i.navigator.userAgent;
        var a = {
          ios: false,
          android: false,
          androidChrome: false,
          desktop: false,
          windows: false,
          iphone: false,
          ipod: false,
          ipad: false,
          cordova: i.cordova || i.phonegap,
          phonegap: i.cordova || i.phonegap
        };
        var s = r.match(/(Windows Phone);?[\s\/]+([\d.]+)?/);
        var n = r.match(/(Android);?[\s\/]+([\d.]+)?/);
        var l = r.match(/(iPad).*OS\s([\d_]+)/);
        var o = r.match(/(iPod)(.*OS\s([\d_]+))?/);
        var d = !l && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (s) {
          a.os = "windows";
          a.osVersion = s[2];
          a.windows = true;
        }
        if (n && !s) {
          a.os = "android";
          a.osVersion = n[2];
          a.android = true;
          a.androidChrome = r.toLowerCase().indexOf("chrome") >= 0;
        }
        if (l || d || o) {
          a.os = "ios";
          a.ios = true;
        }
        if (d && !o) {
          a.osVersion = d[2].replace(/_/g, ".");
          a.iphone = true;
        }
        if (l) {
          a.osVersion = l[2].replace(/_/g, ".");
          a.ipad = true;
        }
        if (o) {
          a.osVersion = o[3] ? o[3].replace(/_/g, ".") : null;
          a.iphone = true;
        }
        if (a.ios && a.osVersion && r.indexOf("Version/") >= 0) {
          if (a.osVersion.split(".")[0] === "10") {
            a.osVersion = r
              .toLowerCase()
              .split("version/")[1]
              .split(" ")[0];
          }
        }
        a.desktop = !(a.os || a.android || a.webView);
        a.webView = (d || l || o) && r.match(/.*AppleWebKit(?!.*Safari)/i);
        if (a.os && a.os === "ios") {
          var u = a.osVersion.split(".");
          var f = t.querySelector('meta[name="viewport"]');
          a.minimalUi =
            !a.webView &&
            (o || d) &&
            (u[0] * 1 === 7 ? u[1] * 1 >= 1 : u[0] * 1 > 7) &&
            f &&
            f.getAttribute("content").indexOf("minimal-ui") >= 0;
        }
        a.pixelRatio = i.devicePixelRatio || 1;
        return a;
      })();
      function Ie(e) {
        var r = this;
        var s = r.touchEventsData;
        var n = r.params,
          l = r.touches;
        if (r.animating && n.preventInteractionOnTransition) {
          return;
        }
        var o = e;
        if (o.originalEvent) o = o.originalEvent;
        s.isTouchEvent = o.type === "touchstart";
        if (!s.isTouchEvent && "which" in o && o.which === 3) return;
        if (!s.isTouchEvent && "button" in o && o.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        if (
          n.noSwiping &&
          a(o.target).closest(
            n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass
          )[0]
        ) {
          r.allowClick = true;
          return;
        }
        if (n.swipeHandler) {
          if (!a(o).closest(n.swipeHandler)[0]) return;
        }
        l.currentX =
          o.type === "touchstart" ? o.targetTouches[0].pageX : o.pageX;
        l.currentY =
          o.type === "touchstart" ? o.targetTouches[0].pageY : o.pageY;
        var d = l.currentX;
        var u = l.currentY;
        var f = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection;
        var p = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
        if (f && (d <= p || d >= i.screen.width - p)) {
          return;
        }
        W.extend(s, {
          isTouched: true,
          isMoved: false,
          allowTouchCallbacks: true,
          isScrolling: undefined,
          startMoving: undefined
        });
        l.startX = d;
        l.startY = u;
        s.touchStartTime = W.now();
        r.allowClick = true;
        r.updateSize();
        r.swipeDirection = undefined;
        if (n.threshold > 0) s.allowThresholdMove = false;
        if (o.type !== "touchstart") {
          var c = true;
          if (a(o.target).is(s.formElements)) c = false;
          if (
            t.activeElement &&
            a(t.activeElement).is(s.formElements) &&
            t.activeElement !== o.target
          ) {
            t.activeElement.blur();
          }
          var v = c && r.allowTouchMove && n.touchStartPreventDefault;
          if (n.touchStartForcePreventDefault || v) {
            o.preventDefault();
          }
        }
        r.emit("touchStart", o);
      }
      function Ae(e) {
        var i = this;
        var r = i.touchEventsData;
        var s = i.params,
          n = i.touches,
          l = i.rtlTranslate;
        var o = e;
        if (o.originalEvent) o = o.originalEvent;
        if (!r.isTouched) {
          if (r.startMoving && r.isScrolling) {
            i.emit("touchMoveOpposite", o);
          }
          return;
        }
        if (r.isTouchEvent && o.type === "mousemove") return;
        var d = o.type === "touchmove" ? o.targetTouches[0].pageX : o.pageX;
        var u = o.type === "touchmove" ? o.targetTouches[0].pageY : o.pageY;
        if (o.preventedByNestedSwiper) {
          n.startX = d;
          n.startY = u;
          return;
        }
        if (!i.allowTouchMove) {
          i.allowClick = false;
          if (r.isTouched) {
            W.extend(n, { startX: d, startY: u, currentX: d, currentY: u });
            r.touchStartTime = W.now();
          }
          return;
        }
        if (r.isTouchEvent && s.touchReleaseOnEdges && !s.loop) {
          if (i.isVertical()) {
            if (
              (u < n.startY && i.translate <= i.maxTranslate()) ||
              (u > n.startY && i.translate >= i.minTranslate())
            ) {
              r.isTouched = false;
              r.isMoved = false;
              return;
            }
          } else if (
            (d < n.startX && i.translate <= i.maxTranslate()) ||
            (d > n.startX && i.translate >= i.minTranslate())
          ) {
            return;
          }
        }
        if (r.isTouchEvent && t.activeElement) {
          if (o.target === t.activeElement && a(o.target).is(r.formElements)) {
            r.isMoved = true;
            i.allowClick = false;
            return;
          }
        }
        if (r.allowTouchCallbacks) {
          i.emit("touchMove", o);
        }
        if (o.targetTouches && o.targetTouches.length > 1) return;
        n.currentX = d;
        n.currentY = u;
        var f = n.currentX - n.startX;
        var p = n.currentY - n.startY;
        if (
          i.params.threshold &&
          Math.sqrt(Math.pow(f, 2) + Math.pow(p, 2)) < i.params.threshold
        )
          return;
        if (typeof r.isScrolling === "undefined") {
          var c = void 0;
          if (
            (i.isHorizontal() && n.currentY === n.startY) ||
            (i.isVertical() && n.currentX === n.startX)
          ) {
            r.isScrolling = false;
          } else {
            if (f * f + p * p >= 25) {
              c = (Math.atan2(Math.abs(p), Math.abs(f)) * 180) / Math.PI;
              r.isScrolling = i.isHorizontal()
                ? c > s.touchAngle
                : 90 - c > s.touchAngle;
            }
          }
        }
        if (r.isScrolling) {
          i.emit("touchMoveOpposite", o);
        }
        if (typeof r.startMoving === "undefined") {
          if (n.currentX !== n.startX || n.currentY !== n.startY) {
            r.startMoving = true;
          }
        }
        if (r.isScrolling) {
          r.isTouched = false;
          return;
        }
        if (!r.startMoving) {
          return;
        }
        i.allowClick = false;
        o.preventDefault();
        if (s.touchMoveStopPropagation && !s.nested) {
          o.stopPropagation();
        }
        if (!r.isMoved) {
          if (s.loop) {
            i.loopFix();
          }
          r.startTranslate = i.getTranslate();
          i.setTransition(0);
          if (i.animating) {
            i.$wrapperEl.trigger("webkitTransitionEnd transitionend");
          }
          r.allowMomentumBounce = false;
          if (
            s.grabCursor &&
            (i.allowSlideNext === true || i.allowSlidePrev === true)
          ) {
            i.setGrabCursor(true);
          }
          i.emit("sliderFirstMove", o);
        }
        i.emit("sliderMove", o);
        r.isMoved = true;
        var v = i.isHorizontal() ? f : p;
        n.diff = v;
        v *= s.touchRatio;
        if (l) v = -v;
        i.swipeDirection = v > 0 ? "prev" : "next";
        r.currentTranslate = v + r.startTranslate;
        var h = true;
        var m = s.resistanceRatio;
        if (s.touchReleaseOnEdges) {
          m = 0;
        }
        if (v > 0 && r.currentTranslate > i.minTranslate()) {
          h = false;
          if (s.resistance)
            r.currentTranslate =
              i.minTranslate() -
              1 +
              Math.pow(-i.minTranslate() + r.startTranslate + v, m);
        } else if (v < 0 && r.currentTranslate < i.maxTranslate()) {
          h = false;
          if (s.resistance)
            r.currentTranslate =
              i.maxTranslate() +
              1 -
              Math.pow(i.maxTranslate() - r.startTranslate - v, m);
        }
        if (h) {
          o.preventedByNestedSwiper = true;
        }
        if (
          !i.allowSlideNext &&
          i.swipeDirection === "next" &&
          r.currentTranslate < r.startTranslate
        ) {
          r.currentTranslate = r.startTranslate;
        }
        if (
          !i.allowSlidePrev &&
          i.swipeDirection === "prev" &&
          r.currentTranslate > r.startTranslate
        ) {
          r.currentTranslate = r.startTranslate;
        }
        if (s.threshold > 0) {
          if (Math.abs(v) > s.threshold || r.allowThresholdMove) {
            if (!r.allowThresholdMove) {
              r.allowThresholdMove = true;
              n.startX = n.currentX;
              n.startY = n.currentY;
              r.currentTranslate = r.startTranslate;
              n.diff = i.isHorizontal()
                ? n.currentX - n.startX
                : n.currentY - n.startY;
              return;
            }
          } else {
            r.currentTranslate = r.startTranslate;
            return;
          }
        }
        if (!s.followFinger) return;
        if (s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) {
          i.updateActiveIndex();
          i.updateSlidesClasses();
        }
        if (s.freeMode) {
          if (r.velocities.length === 0) {
            r.velocities.push({
              position: n[i.isHorizontal() ? "startX" : "startY"],
              time: r.touchStartTime
            });
          }
          r.velocities.push({
            position: n[i.isHorizontal() ? "currentX" : "currentY"],
            time: W.now()
          });
        }
        i.updateProgress(r.currentTranslate);
        i.setTranslate(r.currentTranslate);
      }
      function Be(e) {
        var t = this;
        var i = t.touchEventsData;
        var r = t.params,
          a = t.touches,
          s = t.rtlTranslate,
          n = t.$wrapperEl,
          l = t.slidesGrid,
          o = t.snapGrid;
        var d = e;
        if (d.originalEvent) d = d.originalEvent;
        if (i.allowTouchCallbacks) {
          t.emit("touchEnd", d);
        }
        i.allowTouchCallbacks = false;
        if (!i.isTouched) {
          if (i.isMoved && r.grabCursor) {
            t.setGrabCursor(false);
          }
          i.isMoved = false;
          i.startMoving = false;
          return;
        }
        if (
          r.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (t.allowSlideNext === true || t.allowSlidePrev === true)
        ) {
          t.setGrabCursor(false);
        }
        var u = W.now();
        var f = u - i.touchStartTime;
        if (t.allowClick) {
          t.updateClickedSlide(d);
          t.emit("tap", d);
          if (f < 300 && u - i.lastClickTime > 300) {
            if (i.clickTimeout) clearTimeout(i.clickTimeout);
            i.clickTimeout = W.nextTick(function() {
              if (!t || t.destroyed) return;
              t.emit("click", d);
            }, 300);
          }
          if (f < 300 && u - i.lastClickTime < 300) {
            if (i.clickTimeout) clearTimeout(i.clickTimeout);
            t.emit("doubleTap", d);
          }
        }
        i.lastClickTime = W.now();
        W.nextTick(function() {
          if (!t.destroyed) t.allowClick = true;
        });
        if (
          !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          a.diff === 0 ||
          i.currentTranslate === i.startTranslate
        ) {
          i.isTouched = false;
          i.isMoved = false;
          i.startMoving = false;
          return;
        }
        i.isTouched = false;
        i.isMoved = false;
        i.startMoving = false;
        var p;
        if (r.followFinger) {
          p = s ? t.translate : -t.translate;
        } else {
          p = -i.currentTranslate;
        }
        if (r.freeMode) {
          if (p < -t.minTranslate()) {
            t.slideTo(t.activeIndex);
            return;
          }
          if (p > -t.maxTranslate()) {
            if (t.slides.length < o.length) {
              t.slideTo(o.length - 1);
            } else {
              t.slideTo(t.slides.length - 1);
            }
            return;
          }
          if (r.freeModeMomentum) {
            if (i.velocities.length > 1) {
              var c = i.velocities.pop();
              var v = i.velocities.pop();
              var h = c.position - v.position;
              var m = c.time - v.time;
              t.velocity = h / m;
              t.velocity /= 2;
              if (Math.abs(t.velocity) < r.freeModeMinimumVelocity) {
                t.velocity = 0;
              }
              if (m > 150 || W.now() - c.time > 300) {
                t.velocity = 0;
              }
            } else {
              t.velocity = 0;
            }
            t.velocity *= r.freeModeMomentumVelocityRatio;
            i.velocities.length = 0;
            var g = 1e3 * r.freeModeMomentumRatio;
            var b = t.velocity * g;
            var w = t.translate + b;
            if (s) w = -w;
            var T = false;
            var y;
            var x = Math.abs(t.velocity) * 20 * r.freeModeMomentumBounceRatio;
            var E = void 0;
            if (w < t.maxTranslate()) {
              if (r.freeModeMomentumBounce) {
                if (w + t.maxTranslate() < -x) {
                  w = t.maxTranslate() - x;
                }
                y = t.maxTranslate();
                T = true;
                i.allowMomentumBounce = true;
              } else {
                w = t.maxTranslate();
              }
              if (r.loop && r.centeredSlides) E = true;
            } else if (w > t.minTranslate()) {
              if (r.freeModeMomentumBounce) {
                if (w - t.minTranslate() > x) {
                  w = t.minTranslate() + x;
                }
                y = t.minTranslate();
                T = true;
                i.allowMomentumBounce = true;
              } else {
                w = t.minTranslate();
              }
              if (r.loop && r.centeredSlides) E = true;
            } else if (r.freeModeSticky) {
              var S = void 0;
              for (var C = 0; C < o.length; C += 1) {
                if (o[C] > -w) {
                  S = C;
                  break;
                }
              }
              if (
                Math.abs(o[S] - w) < Math.abs(o[S - 1] - w) ||
                t.swipeDirection === "next"
              ) {
                w = o[S];
              } else {
                w = o[S - 1];
              }
              w = -w;
            }
            if (E) {
              t.once("transitionEnd", function() {
                t.loopFix();
              });
            }
            if (t.velocity !== 0) {
              if (s) {
                g = Math.abs((-w - t.translate) / t.velocity);
              } else {
                g = Math.abs((w - t.translate) / t.velocity);
              }
            } else if (r.freeModeSticky) {
              t.slideToClosest();
              return;
            }
            if (r.freeModeMomentumBounce && T) {
              t.updateProgress(y);
              t.setTransition(g);
              t.setTranslate(w);
              t.transitionStart(true, t.swipeDirection);
              t.animating = true;
              n.transitionEnd(function() {
                if (!t || t.destroyed || !i.allowMomentumBounce) return;
                t.emit("momentumBounce");
                t.setTransition(r.speed);
                t.setTranslate(y);
                n.transitionEnd(function() {
                  if (!t || t.destroyed) return;
                  t.transitionEnd();
                });
              });
            } else if (t.velocity) {
              t.updateProgress(w);
              t.setTransition(g);
              t.setTranslate(w);
              t.transitionStart(true, t.swipeDirection);
              if (!t.animating) {
                t.animating = true;
                n.transitionEnd(function() {
                  if (!t || t.destroyed) return;
                  t.transitionEnd();
                });
              }
            } else {
              t.updateProgress(w);
            }
            t.updateActiveIndex();
            t.updateSlidesClasses();
          } else if (r.freeModeSticky) {
            t.slideToClosest();
            return;
          }
          if (!r.freeModeMomentum || f >= r.longSwipesMs) {
            t.updateProgress();
            t.updateActiveIndex();
            t.updateSlidesClasses();
          }
          return;
        }
        var M = 0;
        var P = t.slidesSizesGrid[0];
        for (var z = 0; z < l.length; z += r.slidesPerGroup) {
          if (typeof l[z + r.slidesPerGroup] !== "undefined") {
            if (p >= l[z] && p < l[z + r.slidesPerGroup]) {
              M = z;
              P = l[z + r.slidesPerGroup] - l[z];
            }
          } else if (p >= l[z]) {
            M = z;
            P = l[l.length - 1] - l[l.length - 2];
          }
        }
        var k = (p - l[M]) / P;
        if (f > r.longSwipesMs) {
          if (!r.longSwipes) {
            t.slideTo(t.activeIndex);
            return;
          }
          if (t.swipeDirection === "next") {
            if (k >= r.longSwipesRatio) t.slideTo(M + r.slidesPerGroup);
            else t.slideTo(M);
          }
          if (t.swipeDirection === "prev") {
            if (k > 1 - r.longSwipesRatio) t.slideTo(M + r.slidesPerGroup);
            else t.slideTo(M);
          }
        } else {
          if (!r.shortSwipes) {
            t.slideTo(t.activeIndex);
            return;
          }
          if (t.swipeDirection === "next") {
            t.slideTo(M + r.slidesPerGroup);
          }
          if (t.swipeDirection === "prev") {
            t.slideTo(M);
          }
        }
      }
      function Xe() {
        var e = this;
        var t = e.params,
          i = e.el;
        if (i && i.offsetWidth === 0) return;
        if (t.breakpoints) {
          e.setBreakpoint();
        }
        var r = e.allowSlideNext,
          a = e.allowSlidePrev,
          s = e.snapGrid;
        e.allowSlideNext = true;
        e.allowSlidePrev = true;
        e.updateSize();
        e.updateSlides();
        if (t.freeMode) {
          var n = Math.min(
            Math.max(e.translate, e.maxTranslate()),
            e.minTranslate()
          );
          e.setTranslate(n);
          e.updateActiveIndex();
          e.updateSlidesClasses();
          if (t.autoHeight) {
            e.updateAutoHeight();
          }
        } else {
          e.updateSlidesClasses();
          if (
            (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.params.centeredSlides
          ) {
            e.slideTo(e.slides.length - 1, 0, false, true);
          } else {
            e.slideTo(e.activeIndex, 0, false, true);
          }
        }
        e.allowSlidePrev = a;
        e.allowSlideNext = r;
        if (e.params.watchOverflow && s !== e.snapGrid) {
          e.checkOverflow();
        }
      }
      function Ye(e) {
        var t = this;
        if (!t.allowClick) {
          if (t.params.preventClicks) e.preventDefault();
          if (t.params.preventClicksPropagation && t.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
          }
        }
      }
      function Ge() {
        var e = this;
        var i = e.params,
          r = e.touchEvents,
          a = e.el,
          s = e.wrapperEl;
        {
          e.onTouchStart = Ie.bind(e);
          e.onTouchMove = Ae.bind(e);
          e.onTouchEnd = Be.bind(e);
        }
        e.onClick = Ye.bind(e);
        var n = i.touchEventsTarget === "container" ? a : s;
        var l = !!i.nested;
        {
          if (!R.touch && (R.pointerEvents || R.prefixedPointerEvents)) {
            n.addEventListener(r.start, e.onTouchStart, false);
            t.addEventListener(r.move, e.onTouchMove, l);
            t.addEventListener(r.end, e.onTouchEnd, false);
          } else {
            if (R.touch) {
              var o =
                r.start === "touchstart" &&
                R.passiveListener &&
                i.passiveListeners
                  ? { passive: true, capture: false }
                  : false;
              n.addEventListener(r.start, e.onTouchStart, o);
              n.addEventListener(
                r.move,
                e.onTouchMove,
                R.passiveListener ? { passive: false, capture: l } : l
              );
              n.addEventListener(r.end, e.onTouchEnd, o);
            }
            if (
              (i.simulateTouch && !Oe.ios && !Oe.android) ||
              (i.simulateTouch && !R.touch && Oe.ios)
            ) {
              n.addEventListener("mousedown", e.onTouchStart, false);
              t.addEventListener("mousemove", e.onTouchMove, l);
              t.addEventListener("mouseup", e.onTouchEnd, false);
            }
          }
          if (i.preventClicks || i.preventClicksPropagation) {
            n.addEventListener("click", e.onClick, true);
          }
        }
        e.on(
          Oe.ios || Oe.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Xe,
          true
        );
      }
      function He() {
        var e = this;
        var i = e.params,
          r = e.touchEvents,
          a = e.el,
          s = e.wrapperEl;
        var n = i.touchEventsTarget === "container" ? a : s;
        var l = !!i.nested;
        {
          if (!R.touch && (R.pointerEvents || R.prefixedPointerEvents)) {
            n.removeEventListener(r.start, e.onTouchStart, false);
            t.removeEventListener(r.move, e.onTouchMove, l);
            t.removeEventListener(r.end, e.onTouchEnd, false);
          } else {
            if (R.touch) {
              var o =
                r.start === "onTouchStart" &&
                R.passiveListener &&
                i.passiveListeners
                  ? { passive: true, capture: false }
                  : false;
              n.removeEventListener(r.start, e.onTouchStart, o);
              n.removeEventListener(r.move, e.onTouchMove, l);
              n.removeEventListener(r.end, e.onTouchEnd, o);
            }
            if (
              (i.simulateTouch && !Oe.ios && !Oe.android) ||
              (i.simulateTouch && !R.touch && Oe.ios)
            ) {
              n.removeEventListener("mousedown", e.onTouchStart, false);
              t.removeEventListener("mousemove", e.onTouchMove, l);
              t.removeEventListener("mouseup", e.onTouchEnd, false);
            }
          }
          if (i.preventClicks || i.preventClicksPropagation) {
            n.removeEventListener("click", e.onClick, true);
          }
        }
        e.off(
          Oe.ios || Oe.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Xe
        );
      }
      var Ve = { attachEvents: Ge, detachEvents: He };
      function Fe() {
        var e = this;
        var t = e.activeIndex,
          i = e.initialized,
          r = e.loopedSlides,
          a = r === void 0 ? 0 : r,
          s = e.params;
        var n = s.breakpoints;
        if (!n || (n && Object.keys(n).length === 0)) return;
        var l = e.getBreakpoint(n);
        if (l && e.currentBreakpoint !== l) {
          var o = l in n ? n[l] : undefined;
          if (o) {
            ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(
              function(e) {
                var t = o[e];
                if (typeof t === "undefined") return;
                if (e === "slidesPerView" && (t === "AUTO" || t === "auto")) {
                  o[e] = "auto";
                } else if (e === "slidesPerView") {
                  o[e] = parseFloat(t);
                } else {
                  o[e] = parseInt(t, 10);
                }
              }
            );
          }
          var d = o || e.originalParams;
          var u = s.loop && d.slidesPerView !== s.slidesPerView;
          W.extend(e.params, d);
          W.extend(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          });
          e.currentBreakpoint = l;
          if (u && i) {
            e.loopDestroy();
            e.loopCreate();
            e.updateSlides();
            e.slideTo(t - a + e.loopedSlides, 0, false);
          }
          e.emit("breakpoint", d);
        }
      }
      function Ne(e) {
        var t = this;
        if (!e) return undefined;
        var r = false;
        var a = [];
        Object.keys(e).forEach(function(e) {
          a.push(e);
        });
        a.sort(function(e, t) {
          return parseInt(e, 10) - parseInt(t, 10);
        });
        for (var s = 0; s < a.length; s += 1) {
          var n = a[s];
          if (t.params.breakpointsInverse) {
            if (n <= i.innerWidth) {
              r = n;
            }
          } else if (n >= i.innerWidth && !r) {
            r = n;
          }
        }
        return r || "max";
      }
      var We = { setBreakpoint: Fe, getBreakpoint: Ne };
      var Re = (function e() {
        function t() {
          var e = i.navigator.userAgent.toLowerCase();
          return (
            e.indexOf("safari") >= 0 &&
            e.indexOf("chrome") < 0 &&
            e.indexOf("android") < 0
          );
        }
        return {
          isIE:
            !!i.navigator.userAgent.match(/Trident/g) ||
            !!i.navigator.userAgent.match(/MSIE/g),
          isEdge: !!i.navigator.userAgent.match(/Edge/g),
          isSafari: t(),
          isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            i.navigator.userAgent
          )
        };
      })();
      function je() {
        var e = this;
        var t = e.classNames,
          i = e.params,
          r = e.rtl,
          a = e.$el;
        var s = [];
        s.push(i.direction);
        if (i.freeMode) {
          s.push("free-mode");
        }
        if (!R.flexbox) {
          s.push("no-flexbox");
        }
        if (i.autoHeight) {
          s.push("autoheight");
        }
        if (r) {
          s.push("rtl");
        }
        if (i.slidesPerColumn > 1) {
          s.push("multirow");
        }
        if (Oe.android) {
          s.push("android");
        }
        if (Oe.ios) {
          s.push("ios");
        }
        if (
          (Re.isIE || Re.isEdge) &&
          (R.pointerEvents || R.prefixedPointerEvents)
        ) {
          s.push("wp8-" + i.direction);
        }
        s.forEach(function(e) {
          t.push(i.containerModifierClass + e);
        });
        a.addClass(t.join(" "));
      }
      function qe() {
        var e = this;
        var t = e.$el,
          i = e.classNames;
        t.removeClass(i.join(" "));
      }
      var _e = { addClasses: je, removeClasses: qe };
      function Ue(e, t, r, a, s, n) {
        var l;
        function o() {
          if (n) n();
        }
        if (!e.complete || !s) {
          if (t) {
            l = new i.Image();
            l.onload = o;
            l.onerror = o;
            if (a) {
              l.sizes = a;
            }
            if (r) {
              l.srcset = r;
            }
            if (t) {
              l.src = t;
            }
          } else {
            o();
          }
        } else {
          o();
        }
      }
      function Ke() {
        var e = this;
        e.imagesToLoad = e.$el.find("img");
        function t() {
          if (typeof e === "undefined" || e === null || !e || e.destroyed)
            return;
          if (e.imagesLoaded !== undefined) e.imagesLoaded += 1;
          if (e.imagesLoaded === e.imagesToLoad.length) {
            if (e.params.updateOnImagesReady) e.update();
            e.emit("imagesReady");
          }
        }
        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
          var r = e.imagesToLoad[i];
          e.loadImage(
            r,
            r.currentSrc || r.getAttribute("src"),
            r.srcset || r.getAttribute("srcset"),
            r.sizes || r.getAttribute("sizes"),
            true,
            t
          );
        }
      }
      var Qe = { loadImage: Ue, preloadImages: Ke };
      function Ze() {
        var e = this;
        var t = e.isLocked;
        e.isLocked = e.snapGrid.length === 1;
        e.allowSlideNext = !e.isLocked;
        e.allowSlidePrev = !e.isLocked;
        if (t !== e.isLocked) e.emit(e.isLocked ? "lock" : "unlock");
        if (t && t !== e.isLocked) {
          e.isEnd = false;
          e.navigation.update();
        }
      }
      var Je = { checkOverflow: Ze };
      var et = {
        init: true,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: false,
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,
        autoHeight: false,
        setWrapperSize: false,
        virtualTranslate: false,
        effect: "slide",
        breakpoints: undefined,
        breakpointsInverse: false,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        watchOverflow: false,
        roundLengths: false,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: true,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        uniqueNavElements: true,
        resistance: true,
        resistanceRatio: 0.85,
        watchSlidesProgress: false,
        watchSlidesVisibility: false,
        grabCursor: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        preloadImages: true,
        updateOnImagesReady: true,
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: false,
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        noSwiping: true,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: true,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: true
      };
      var tt = {
        update: ie,
        translate: le,
        transition: fe,
        slide: we,
        loop: Ee,
        grabCursor: Me,
        manipulation: De,
        events: Ve,
        breakpoints: We,
        checkOverflow: Je,
        classes: _e,
        images: Qe
      };
      var it = {};
      var rt = (function(e) {
        __extends(t, e);
        function t() {
          var i = [];
          for (var r = 0; r < arguments.length; r++) {
            i[r] = arguments[r];
          }
          var s = this;
          var n;
          var l;
          if (
            i.length === 1 &&
            i[0].constructor &&
            i[0].constructor === Object
          ) {
            l = i[0];
          } else {
            (n = i[0]), (l = i[1]);
          }
          if (!l) l = {};
          l = W.extend({}, l);
          if (n && !l.el) l.el = n;
          s = e.call(this, l) || this;
          Object.keys(tt).forEach(function(e) {
            Object.keys(tt[e]).forEach(function(i) {
              if (!t.prototype[i]) {
                t.prototype[i] = tt[e][i];
              }
            });
          });
          var o = s;
          if (typeof o.modules === "undefined") {
            o.modules = {};
          }
          Object.keys(o.modules).forEach(function(e) {
            var t = o.modules[e];
            if (t.params) {
              var i = Object.keys(t.params)[0];
              var r = t.params[i];
              if (typeof r !== "object" || r === null) return;
              if (!(i in l && "enabled" in r)) return;
              if (l[i] === true) {
                l[i] = { enabled: true };
              }
              if (typeof l[i] === "object" && !("enabled" in l[i])) {
                l[i].enabled = true;
              }
              if (!l[i]) l[i] = { enabled: false };
            }
          });
          var d = W.extend({}, et);
          o.useModulesParams(d);
          o.params = W.extend({}, d, it, l);
          o.originalParams = W.extend({}, o.params);
          o.passedParams = W.extend({}, l);
          o.$ = a;
          var u = a(o.params.el);
          n = u[0];
          if (!n) {
            return undefined;
          }
          if (u.length > 1) {
            var f = [];
            u.each(function(e, i) {
              var r = W.extend({}, l, { el: i });
              f.push(new t(r));
            });
            return f;
          }
          n.swiper = o;
          u.data("swiper", o);
          var p = u.children("." + o.params.wrapperClass);
          W.extend(o, {
            $el: u,
            el: n,
            $wrapperEl: p,
            wrapperEl: p[0],
            classNames: [],
            slides: a(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function() {
              return o.params.direction === "horizontal";
            },
            isVertical: function() {
              return o.params.direction === "vertical";
            },
            rtl: n.dir.toLowerCase() === "rtl" || u.css("direction") === "rtl",
            rtlTranslate:
              o.params.direction === "horizontal" &&
              (n.dir.toLowerCase() === "rtl" || u.css("direction") === "rtl"),
            wrongRTL: p.css("display") === "-webkit-box",
            activeIndex: 0,
            realIndex: 0,
            isBeginning: true,
            isEnd: false,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEvents: (function e() {
              var t = ["touchstart", "touchmove", "touchend"];
              var i = ["mousedown", "mousemove", "mouseup"];
              if (R.pointerEvents) {
                i = ["pointerdown", "pointermove", "pointerup"];
              } else if (R.prefixedPointerEvents) {
                i = ["MSPointerDown", "MSPointerMove", "MSPointerUp"];
              }
              o.touchEventsTouch = { start: t[0], move: t[1], end: t[2] };
              o.touchEventsDesktop = { start: i[0], move: i[1], end: i[2] };
              return R.touch || !o.params.simulateTouch
                ? o.touchEventsTouch
                : o.touchEventsDesktop;
            })(),
            touchEventsData: {
              isTouched: undefined,
              isMoved: undefined,
              allowTouchCallbacks: undefined,
              touchStartTime: undefined,
              isScrolling: undefined,
              currentTranslate: undefined,
              startTranslate: undefined,
              allowThresholdMove: undefined,
              formElements: "input, select, option, textarea, button, video",
              lastClickTime: W.now(),
              clickTimeout: undefined,
              velocities: [],
              allowMomentumBounce: undefined,
              isTouchEvent: undefined,
              startMoving: undefined
            },
            allowClick: true,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          });
          o.useModules();
          if (o.params.init) {
            o.init();
          }
          return o;
        }
        t.prototype.slidesPerViewDynamic = function() {
          var e = this;
          var t = e.params,
            i = e.slides,
            r = e.slidesGrid,
            a = e.size,
            s = e.activeIndex;
          var n = 1;
          if (t.centeredSlides) {
            var l = i[s].swiperSlideSize;
            var o = void 0;
            for (var d = s + 1; d < i.length; d += 1) {
              if (i[d] && !o) {
                l += i[d].swiperSlideSize;
                n += 1;
                if (l > a) o = true;
              }
            }
            for (var d = s - 1; d >= 0; d -= 1) {
              if (i[d] && !o) {
                l += i[d].swiperSlideSize;
                n += 1;
                if (l > a) o = true;
              }
            }
          } else {
            for (var d = s + 1; d < i.length; d += 1) {
              if (r[d] - r[s] < a) {
                n += 1;
              }
            }
          }
          return n;
        };
        t.prototype.update = function() {
          var e = this;
          if (!e || e.destroyed) return;
          var t = e.snapGrid,
            i = e.params;
          if (i.breakpoints) {
            e.setBreakpoint();
          }
          e.updateSize();
          e.updateSlides();
          e.updateProgress();
          e.updateSlidesClasses();
          function r() {
            var t = e.rtlTranslate ? e.translate * -1 : e.translate;
            var i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i);
            e.updateActiveIndex();
            e.updateSlidesClasses();
          }
          var a;
          if (e.params.freeMode) {
            r();
            if (e.params.autoHeight) {
              e.updateAutoHeight();
            }
          } else {
            if (
              (e.params.slidesPerView === "auto" ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
            ) {
              a = e.slideTo(e.slides.length - 1, 0, false, true);
            } else {
              a = e.slideTo(e.activeIndex, 0, false, true);
            }
            if (!a) {
              r();
            }
          }
          if (i.watchOverflow && t !== e.snapGrid) {
            e.checkOverflow();
          }
          e.emit("update");
        };
        t.prototype.init = function() {
          var e = this;
          if (e.initialized) return;
          e.emit("beforeInit");
          if (e.params.breakpoints) {
            e.setBreakpoint();
          }
          e.addClasses();
          if (e.params.loop) {
            e.loopCreate();
          }
          e.updateSize();
          e.updateSlides();
          if (e.params.watchOverflow) {
            e.checkOverflow();
          }
          if (e.params.grabCursor) {
            e.setGrabCursor();
          }
          if (e.params.preloadImages) {
            e.preloadImages();
          }
          if (e.params.loop) {
            e.slideTo(
              e.params.initialSlide + e.loopedSlides,
              0,
              e.params.runCallbacksOnInit
            );
          } else {
            e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit);
          }
          e.attachEvents();
          e.initialized = true;
          e.emit("init");
        };
        t.prototype.destroy = function(e, t) {
          if (e === void 0) {
            e = true;
          }
          if (t === void 0) {
            t = true;
          }
          var i = this;
          var r = i.params,
            a = i.$el,
            s = i.$wrapperEl,
            n = i.slides;
          if (typeof i.params === "undefined" || i.destroyed) {
            return null;
          }
          i.emit("beforeDestroy");
          i.initialized = false;
          i.detachEvents();
          if (r.loop) {
            i.loopDestroy();
          }
          if (t) {
            i.removeClasses();
            a.removeAttr("style");
            s.removeAttr("style");
            if (n && n.length) {
              n.removeClass(
                [
                  r.slideVisibleClass,
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass
                ].join(" ")
              )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")
                .removeAttr("data-swiper-column")
                .removeAttr("data-swiper-row");
            }
          }
          i.emit("destroy");
          Object.keys(i.eventsListeners).forEach(function(e) {
            i.off(e);
          });
          if (e !== false) {
            i.$el[0].swiper = null;
            i.$el.data("swiper", null);
            W.deleteProps(i);
          }
          i.destroyed = true;
          return null;
        };
        t.extendDefaults = function(e) {
          W.extend(it, e);
        };
        Object.defineProperty(t, "extendedDefaults", {
          get: function() {
            return it;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(t, "defaults", {
          get: function() {
            return et;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(t, "Class", {
          get: function() {
            return j;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(t, "$", {
          get: function() {
            return a;
          },
          enumerable: true,
          configurable: true
        });
        return t;
      })(j);
      e("Swiper", rt);
      var at = {
        name: "device",
        proto: { device: Oe },
        static: { device: Oe }
      };
      var st = {
        name: "support",
        proto: { support: R },
        static: { support: R }
      };
      var nt = {
        name: "browser",
        proto: { browser: Re },
        static: { browser: Re }
      };
      var lt = {
        name: "resize",
        create: function() {
          var e = this;
          W.extend(e, {
            resize: {
              resizeHandler: function() {
                if (!e || e.destroyed || !e.initialized) return;
                e.emit("beforeResize");
                e.emit("resize");
              },
              orientationChangeHandler: function() {
                if (!e || e.destroyed || !e.initialized) return;
                e.emit("orientationchange");
              }
            }
          });
        },
        on: {
          init: function() {
            var e = this;
            i.addEventListener("resize", e.resize.resizeHandler);
            i.addEventListener(
              "orientationchange",
              e.resize.orientationChangeHandler
            );
          },
          destroy: function() {
            var e = this;
            i.removeEventListener("resize", e.resize.resizeHandler);
            i.removeEventListener(
              "orientationchange",
              e.resize.orientationChangeHandler
            );
          }
        }
      };
      var ot = {
        func: i.MutationObserver || i.WebkitMutationObserver,
        attach: function(e, t) {
          if (t === void 0) {
            t = {};
          }
          var r = this;
          var a = ot.func;
          var s = new a(function(e) {
            if (e.length === 1) {
              r.emit("observerUpdate", e[0]);
              return;
            }
            var t = function t() {
              r.emit("observerUpdate", e[0]);
            };
            if (i.requestAnimationFrame) {
              i.requestAnimationFrame(t);
            } else {
              i.setTimeout(t, 0);
            }
          });
          s.observe(e, {
            attributes:
              typeof t.attributes === "undefined" ? true : t.attributes,
            childList: typeof t.childList === "undefined" ? true : t.childList,
            characterData:
              typeof t.characterData === "undefined" ? true : t.characterData
          });
          r.observer.observers.push(s);
        },
        init: function() {
          var e = this;
          if (!R.observer || !e.params.observer) return;
          if (e.params.observeParents) {
            var t = e.$el.parents();
            for (var i = 0; i < t.length; i += 1) {
              e.observer.attach(t[i]);
            }
          }
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren
          });
          e.observer.attach(e.$wrapperEl[0], { attributes: false });
        },
        destroy: function() {
          var e = this;
          e.observer.observers.forEach(function(e) {
            e.disconnect();
          });
          e.observer.observers = [];
        }
      };
      var dt = {
        name: "observer",
        params: {
          observer: false,
          observeParents: false,
          observeSlideChildren: false
        },
        create: function() {
          var e = this;
          W.extend(e, {
            observer: {
              init: ot.init.bind(e),
              attach: ot.attach.bind(e),
              destroy: ot.destroy.bind(e),
              observers: []
            }
          });
        },
        on: {
          init: function() {
            var e = this;
            e.observer.init();
          },
          destroy: function() {
            var e = this;
            e.observer.destroy();
          }
        }
      };
      function ut() {
        var e = "onwheel";
        var i = e in t;
        if (!i) {
          var r = t.createElement("div");
          r.setAttribute(e, "return;");
          i = typeof r[e] === "function";
        }
        if (
          !i &&
          t.implementation &&
          t.implementation.hasFeature &&
          t.implementation.hasFeature("", "") !== true
        ) {
          i = t.implementation.hasFeature("Events.wheel", "3.0");
        }
        return i;
      }
      var ft = {
        lastScrollTime: W.now(),
        event: (function e() {
          if (i.navigator.userAgent.indexOf("firefox") > -1)
            return "DOMMouseScroll";
          return ut() ? "wheel" : "mousewheel";
        })(),
        normalize: function(e) {
          var t = 10;
          var i = 40;
          var r = 800;
          var a = 0;
          var s = 0;
          var n = 0;
          var l = 0;
          if ("detail" in e) {
            s = e.detail;
          }
          if ("wheelDelta" in e) {
            s = -e.wheelDelta / 120;
          }
          if ("wheelDeltaY" in e) {
            s = -e.wheelDeltaY / 120;
          }
          if ("wheelDeltaX" in e) {
            a = -e.wheelDeltaX / 120;
          }
          if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
            a = s;
            s = 0;
          }
          n = a * t;
          l = s * t;
          if ("deltaY" in e) {
            l = e.deltaY;
          }
          if ("deltaX" in e) {
            n = e.deltaX;
          }
          if ((n || l) && e.deltaMode) {
            if (e.deltaMode === 1) {
              n *= i;
              l *= i;
            } else {
              n *= r;
              l *= r;
            }
          }
          if (n && !a) {
            a = n < 1 ? -1 : 1;
          }
          if (l && !s) {
            s = l < 1 ? -1 : 1;
          }
          return { spinX: a, spinY: s, pixelX: n, pixelY: l };
        },
        handleMouseEnter: function() {
          var e = this;
          e.mouseEntered = true;
        },
        handleMouseLeave: function() {
          var e = this;
          e.mouseEntered = false;
        },
        handle: function(e) {
          var t = e;
          var r = this;
          var a = r.params.mousewheel;
          if (!r.mouseEntered && !a.releaseOnEdges) return true;
          if (t.originalEvent) t = t.originalEvent;
          var s = 0;
          var n = r.rtlTranslate ? -1 : 1;
          var l = ft.normalize(t);
          if (a.forceToAxis) {
            if (r.isHorizontal()) {
              if (Math.abs(l.pixelX) > Math.abs(l.pixelY)) s = l.pixelX * n;
              else return true;
            } else if (Math.abs(l.pixelY) > Math.abs(l.pixelX)) s = l.pixelY;
            else return true;
          } else {
            s =
              Math.abs(l.pixelX) > Math.abs(l.pixelY)
                ? -l.pixelX * n
                : -l.pixelY;
          }
          if (s === 0) return true;
          if (a.invert) s = -s;
          if (!r.params.freeMode) {
            if (W.now() - r.mousewheel.lastScrollTime > 60) {
              if (s < 0) {
                if ((!r.isEnd || r.params.loop) && !r.animating) {
                  r.slideNext();
                  r.emit("scroll", t);
                } else if (a.releaseOnEdges) return true;
              } else if ((!r.isBeginning || r.params.loop) && !r.animating) {
                r.slidePrev();
                r.emit("scroll", t);
              } else if (a.releaseOnEdges) return true;
            }
            r.mousewheel.lastScrollTime = new i.Date().getTime();
          } else {
            if (r.params.loop) {
              r.loopFix();
            }
            var o = r.getTranslate() + s * a.sensitivity;
            var d = r.isBeginning;
            var u = r.isEnd;
            if (o >= r.minTranslate()) o = r.minTranslate();
            if (o <= r.maxTranslate()) o = r.maxTranslate();
            r.setTransition(0);
            r.setTranslate(o);
            r.updateProgress();
            r.updateActiveIndex();
            r.updateSlidesClasses();
            if ((!d && r.isBeginning) || (!u && r.isEnd)) {
              r.updateSlidesClasses();
            }
            if (r.params.freeModeSticky) {
              clearTimeout(r.mousewheel.timeout);
              r.mousewheel.timeout = W.nextTick(function() {
                r.slideToClosest();
              }, 300);
            }
            r.emit("scroll", t);
            if (r.params.autoplay && r.params.autoplayDisableOnInteraction)
              r.autoplay.stop();
            if (o === r.minTranslate() || o === r.maxTranslate()) return true;
          }
          if (t.preventDefault) t.preventDefault();
          else t.returnValue = false;
          return false;
        },
        enable: function() {
          var e = this;
          if (!ft.event) return false;
          if (e.mousewheel.enabled) return false;
          var t = e.$el;
          if (e.params.mousewheel.eventsTarged !== "container") {
            t = a(e.params.mousewheel.eventsTarged);
          }
          t.on("mouseenter", e.mousewheel.handleMouseEnter);
          t.on("mouseleave", e.mousewheel.handleMouseLeave);
          t.on(ft.event, e.mousewheel.handle);
          e.mousewheel.enabled = true;
          return true;
        },
        disable: function() {
          var e = this;
          if (!ft.event) return false;
          if (!e.mousewheel.enabled) return false;
          var t = e.$el;
          if (e.params.mousewheel.eventsTarged !== "container") {
            t = a(e.params.mousewheel.eventsTarged);
          }
          t.off(ft.event, e.mousewheel.handle);
          e.mousewheel.enabled = false;
          return true;
        }
      };
      var pt = {
        update: function() {
          var e = this;
          var t = e.rtl;
          var i = e.params.pagination;
          if (
            !i.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            e.pagination.$el.length === 0
          )
            return;
          var r =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length;
          var s = e.pagination.$el;
          var n;
          var l = e.params.loop
            ? Math.ceil((r - e.loopedSlides * 2) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (e.params.loop) {
            n = Math.ceil(
              (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
            );
            if (n > r - 1 - e.loopedSlides * 2) {
              n -= r - e.loopedSlides * 2;
            }
            if (n > l - 1) n -= l;
            if (n < 0 && e.params.paginationType !== "bullets") n = l + n;
          } else if (typeof e.snapIndex !== "undefined") {
            n = e.snapIndex;
          } else {
            n = e.activeIndex || 0;
          }
          if (
            i.type === "bullets" &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0
          ) {
            var o = e.pagination.bullets;
            var d;
            var u;
            var f = void 0;
            if (i.dynamicBullets) {
              e.pagination.bulletSize = o
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](true);
              s.css(
                e.isHorizontal() ? "width" : "height",
                e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"
              );
              if (i.dynamicMainBullets > 1 && e.previousIndex !== undefined) {
                e.pagination.dynamicBulletIndex += n - e.previousIndex;
                if (
                  e.pagination.dynamicBulletIndex >
                  i.dynamicMainBullets - 1
                ) {
                  e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1;
                } else if (e.pagination.dynamicBulletIndex < 0) {
                  e.pagination.dynamicBulletIndex = 0;
                }
              }
              d = n - e.pagination.dynamicBulletIndex;
              u = d + (Math.min(o.length, i.dynamicMainBullets) - 1);
              f = (u + d) / 2;
            }
            o.removeClass(
              i.bulletActiveClass +
                " " +
                i.bulletActiveClass +
                "-next " +
                i.bulletActiveClass +
                "-next-next " +
                i.bulletActiveClass +
                "-prev " +
                i.bulletActiveClass +
                "-prev-prev " +
                i.bulletActiveClass +
                "-main"
            );
            if (s.length > 1) {
              o.each(function(e, t) {
                var r = a(t);
                var s = r.index();
                if (s === n) {
                  r.addClass(i.bulletActiveClass);
                }
                if (i.dynamicBullets) {
                  if (s >= d && s <= u) {
                    r.addClass(i.bulletActiveClass + "-main");
                  }
                  if (s === d) {
                    r.prev()
                      .addClass(i.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(i.bulletActiveClass + "-prev-prev");
                  }
                  if (s === u) {
                    r.next()
                      .addClass(i.bulletActiveClass + "-next")
                      .next()
                      .addClass(i.bulletActiveClass + "-next-next");
                  }
                }
              });
            } else {
              var p = o.eq(n);
              p.addClass(i.bulletActiveClass);
              if (i.dynamicBullets) {
                var c = o.eq(d);
                var v = o.eq(u);
                for (var h = d; h <= u; h += 1) {
                  o.eq(h).addClass(i.bulletActiveClass + "-main");
                }
                c.prev()
                  .addClass(i.bulletActiveClass + "-prev")
                  .prev()
                  .addClass(i.bulletActiveClass + "-prev-prev");
                v.next()
                  .addClass(i.bulletActiveClass + "-next")
                  .next()
                  .addClass(i.bulletActiveClass + "-next-next");
              }
            }
            if (i.dynamicBullets) {
              var m = Math.min(o.length, i.dynamicMainBullets + 4);
              var g =
                (e.pagination.bulletSize * m - e.pagination.bulletSize) / 2 -
                f * e.pagination.bulletSize;
              var b = t ? "right" : "left";
              o.css(e.isHorizontal() ? b : "top", g + "px");
            }
          }
          if (i.type === "fraction") {
            s.find("." + i.currentClass).text(i.formatFractionCurrent(n + 1));
            s.find("." + i.totalClass).text(i.formatFractionTotal(l));
          }
          if (i.type === "progressbar") {
            var w = void 0;
            if (i.progressbarOpposite) {
              w = e.isHorizontal() ? "vertical" : "horizontal";
            } else {
              w = e.isHorizontal() ? "horizontal" : "vertical";
            }
            var T = (n + 1) / l;
            var y = 1;
            var x = 1;
            if (w === "horizontal") {
              y = T;
            } else {
              x = T;
            }
            s.find("." + i.progressbarFillClass)
              .transform(
                "translate3d(0,0,0) scaleX(" + y + ") scaleY(" + x + ")"
              )
              .transition(e.params.speed);
          }
          if (i.type === "custom" && i.renderCustom) {
            s.html(i.renderCustom(e, n + 1, l));
            e.emit("paginationRender", e, s[0]);
          } else {
            e.emit("paginationUpdate", e, s[0]);
          }
          s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](
            i.lockClass
          );
        },
        render: function() {
          var e = this;
          var t = e.params.pagination;
          if (
            !t.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            e.pagination.$el.length === 0
          )
            return;
          var i =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length;
          var r = e.pagination.$el;
          var a = "";
          if (t.type === "bullets") {
            var s = e.params.loop
              ? Math.ceil((i - e.loopedSlides * 2) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            for (var n = 0; n < s; n += 1) {
              if (t.renderBullet) {
                a += t.renderBullet.call(e, n, t.bulletClass);
              } else {
                a +=
                  "<" +
                  t.bulletElement +
                  ' class="' +
                  t.bulletClass +
                  '"></' +
                  t.bulletElement +
                  ">";
              }
            }
            r.html(a);
            e.pagination.bullets = r.find("." + t.bulletClass);
          }
          if (t.type === "fraction") {
            if (t.renderFraction) {
              a = t.renderFraction.call(e, t.currentClass, t.totalClass);
            } else {
              a =
                '<span class="' +
                t.currentClass +
                '"></span>' +
                " / " +
                ('<span class="' + t.totalClass + '"></span>');
            }
            r.html(a);
          }
          if (t.type === "progressbar") {
            if (t.renderProgressbar) {
              a = t.renderProgressbar.call(e, t.progressbarFillClass);
            } else {
              a = '<span class="' + t.progressbarFillClass + '"></span>';
            }
            r.html(a);
          }
          if (t.type !== "custom") {
            e.emit("paginationRender", e.pagination.$el[0]);
          }
        },
        init: function() {
          var e = this;
          var t = e.params.pagination;
          if (!t.el) return;
          var i = a(t.el);
          if (i.length === 0) return;
          if (
            e.params.uniqueNavElements &&
            typeof t.el === "string" &&
            i.length > 1 &&
            e.$el.find(t.el).length === 1
          ) {
            i = e.$el.find(t.el);
          }
          if (t.type === "bullets" && t.clickable) {
            i.addClass(t.clickableClass);
          }
          i.addClass(t.modifierClass + t.type);
          if (t.type === "bullets" && t.dynamicBullets) {
            i.addClass("" + t.modifierClass + t.type + "-dynamic");
            e.pagination.dynamicBulletIndex = 0;
            if (t.dynamicMainBullets < 1) {
              t.dynamicMainBullets = 1;
            }
          }
          if (t.type === "progressbar" && t.progressbarOpposite) {
            i.addClass(t.progressbarOppositeClass);
          }
          if (t.clickable) {
            i.on("click", "." + t.bulletClass, function t(i) {
              i.preventDefault();
              var r = a(this).index() * e.params.slidesPerGroup;
              if (e.params.loop) r += e.loopedSlides;
              e.slideTo(r);
            });
          }
          W.extend(e.pagination, { $el: i, el: i[0] });
        },
        destroy: function() {
          var e = this;
          var t = e.params.pagination;
          if (
            !t.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            e.pagination.$el.length === 0
          )
            return;
          var i = e.pagination.$el;
          i.removeClass(t.hiddenClass);
          i.removeClass(t.modifierClass + t.type);
          if (e.pagination.bullets)
            e.pagination.bullets.removeClass(t.bulletActiveClass);
          if (t.clickable) {
            i.off("click", "." + t.bulletClass);
          }
        }
      };
      var ct = {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: "bullets",
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: function(e) {
              return e;
            },
            formatFractionTotal: function(e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock"
          }
        },
        create: function() {
          var e = this;
          W.extend(e, {
            pagination: {
              init: pt.init.bind(e),
              render: pt.render.bind(e),
              update: pt.update.bind(e),
              destroy: pt.destroy.bind(e),
              dynamicBulletIndex: 0
            }
          });
        },
        on: {
          init: function() {
            var e = this;
            e.pagination.init();
            e.pagination.render();
            e.pagination.update();
          },
          activeIndexChange: function() {
            var e = this;
            if (e.params.loop) {
              e.pagination.update();
            } else if (typeof e.snapIndex === "undefined") {
              e.pagination.update();
            }
          },
          snapIndexChange: function() {
            var e = this;
            if (!e.params.loop) {
              e.pagination.update();
            }
          },
          slidesLengthChange: function() {
            var e = this;
            if (e.params.loop) {
              e.pagination.render();
              e.pagination.update();
            }
          },
          snapGridLengthChange: function() {
            var e = this;
            if (!e.params.loop) {
              e.pagination.render();
              e.pagination.update();
            }
          },
          destroy: function() {
            var e = this;
            e.pagination.destroy();
          },
          click: function(e) {
            var t = this;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              t.pagination.$el.length > 0 &&
              !a(e.target).hasClass(t.params.pagination.bulletClass)
            ) {
              t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
            }
          }
        }
      };
      var vt = {
        setTranslate: function() {
          var e = this;
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          var t = e.scrollbar,
            i = e.rtlTranslate,
            r = e.progress;
          var a = t.dragSize,
            s = t.trackSize,
            n = t.$dragEl,
            l = t.$el;
          var o = e.params.scrollbar;
          var d = a;
          var u = (s - a) * r;
          if (i) {
            u = -u;
            if (u > 0) {
              d = a - u;
              u = 0;
            } else if (-u + a > s) {
              d = s + u;
            }
          } else if (u < 0) {
            d = a + u;
            u = 0;
          } else if (u + a > s) {
            d = s - u;
          }
          if (e.isHorizontal()) {
            if (R.transforms3d) {
              n.transform("translate3d(" + u + "px, 0, 0)");
            } else {
              n.transform("translateX(" + u + "px)");
            }
            n[0].style.width = d + "px";
          } else {
            if (R.transforms3d) {
              n.transform("translate3d(0px, " + u + "px, 0)");
            } else {
              n.transform("translateY(" + u + "px)");
            }
            n[0].style.height = d + "px";
          }
          if (o.hide) {
            clearTimeout(e.scrollbar.timeout);
            l[0].style.opacity = 1;
            e.scrollbar.timeout = setTimeout(function() {
              l[0].style.opacity = 0;
              l.transition(400);
            }, 1e3);
          }
        },
        setTransition: function(e) {
          var t = this;
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          t.scrollbar.$dragEl.transition(e);
        },
        updateSize: function() {
          var e = this;
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          var t = e.scrollbar;
          var i = t.$dragEl,
            r = t.$el;
          i[0].style.width = "";
          i[0].style.height = "";
          var a = e.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight;
          var s = e.size / e.virtualSize;
          var n = s * (a / e.size);
          var l;
          if (e.params.scrollbar.dragSize === "auto") {
            l = a * s;
          } else {
            l = parseInt(e.params.scrollbar.dragSize, 10);
          }
          if (e.isHorizontal()) {
            i[0].style.width = l + "px";
          } else {
            i[0].style.height = l + "px";
          }
          if (s >= 1) {
            r[0].style.display = "none";
          } else {
            r[0].style.display = "";
          }
          if (e.params.scrollbarHide) {
            r[0].style.opacity = 0;
          }
          W.extend(t, {
            trackSize: a,
            divider: s,
            moveDivider: n,
            dragSize: l
          });
          t.$el[
            e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
          ](e.params.scrollbar.lockClass);
        },
        setDragPosition: function(e) {
          var t = this;
          var i = t.scrollbar,
            r = t.rtlTranslate;
          var a = i.$el,
            s = i.dragSize,
            n = i.trackSize;
          var l;
          if (t.isHorizontal()) {
            l =
              e.type === "touchstart" || e.type === "touchmove"
                ? e.targetTouches[0].pageX
                : e.pageX || e.clientX;
          } else {
            l =
              e.type === "touchstart" || e.type === "touchmove"
                ? e.targetTouches[0].pageY
                : e.pageY || e.clientY;
          }
          var o;
          o =
            (l - a.offset()[t.isHorizontal() ? "left" : "top"] - s / 2) /
            (n - s);
          o = Math.max(Math.min(o, 1), 0);
          if (r) {
            o = 1 - o;
          }
          var d = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * o;
          t.updateProgress(d);
          t.setTranslate(d);
          t.updateActiveIndex();
          t.updateSlidesClasses();
        },
        onDragStart: function(e) {
          var t = this;
          var i = t.params.scrollbar;
          var r = t.scrollbar,
            a = t.$wrapperEl;
          var s = r.$el,
            n = r.$dragEl;
          t.scrollbar.isTouched = true;
          e.preventDefault();
          e.stopPropagation();
          a.transition(100);
          n.transition(100);
          r.setDragPosition(e);
          clearTimeout(t.scrollbar.dragTimeout);
          s.transition(0);
          if (i.hide) {
            s.css("opacity", 1);
          }
          t.emit("scrollbarDragStart", e);
        },
        onDragMove: function(e) {
          var t = this;
          var i = t.scrollbar,
            r = t.$wrapperEl;
          var a = i.$el,
            s = i.$dragEl;
          if (!t.scrollbar.isTouched) return;
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
          i.setDragPosition(e);
          r.transition(0);
          a.transition(0);
          s.transition(0);
          t.emit("scrollbarDragMove", e);
        },
        onDragEnd: function(e) {
          var t = this;
          var i = t.params.scrollbar;
          var r = t.scrollbar;
          var a = r.$el;
          if (!t.scrollbar.isTouched) return;
          t.scrollbar.isTouched = false;
          if (i.hide) {
            clearTimeout(t.scrollbar.dragTimeout);
            t.scrollbar.dragTimeout = W.nextTick(function() {
              a.css("opacity", 0);
              a.transition(400);
            }, 1e3);
          }
          t.emit("scrollbarDragEnd", e);
          if (i.snapOnRelease) {
            t.slideToClosest();
          }
        },
        enableDraggable: function() {
          var e = this;
          if (!e.params.scrollbar.el) return;
          var i = e.scrollbar,
            r = e.touchEventsTouch,
            a = e.touchEventsDesktop,
            s = e.params;
          var n = i.$el;
          var l = n[0];
          var o =
            R.passiveListener && s.passiveListeners
              ? { passive: false, capture: false }
              : false;
          var d =
            R.passiveListener && s.passiveListeners
              ? { passive: true, capture: false }
              : false;
          if (!R.touch) {
            l.addEventListener(a.start, e.scrollbar.onDragStart, o);
            t.addEventListener(a.move, e.scrollbar.onDragMove, o);
            t.addEventListener(a.end, e.scrollbar.onDragEnd, d);
          } else {
            l.addEventListener(r.start, e.scrollbar.onDragStart, o);
            l.addEventListener(r.move, e.scrollbar.onDragMove, o);
            l.addEventListener(r.end, e.scrollbar.onDragEnd, d);
          }
        },
        disableDraggable: function() {
          var e = this;
          if (!e.params.scrollbar.el) return;
          var i = e.scrollbar,
            r = e.touchEventsTouch,
            a = e.touchEventsDesktop,
            s = e.params;
          var n = i.$el;
          var l = n[0];
          var o =
            R.passiveListener && s.passiveListeners
              ? { passive: false, capture: false }
              : false;
          var d =
            R.passiveListener && s.passiveListeners
              ? { passive: true, capture: false }
              : false;
          if (!R.touch) {
            l.removeEventListener(a.start, e.scrollbar.onDragStart, o);
            t.removeEventListener(a.move, e.scrollbar.onDragMove, o);
            t.removeEventListener(a.end, e.scrollbar.onDragEnd, d);
          } else {
            l.removeEventListener(r.start, e.scrollbar.onDragStart, o);
            l.removeEventListener(r.move, e.scrollbar.onDragMove, o);
            l.removeEventListener(r.end, e.scrollbar.onDragEnd, d);
          }
        },
        init: function() {
          var e = this;
          if (!e.params.scrollbar.el) return;
          var t = e.scrollbar,
            i = e.$el;
          var r = e.params.scrollbar;
          var s = a(r.el);
          if (
            e.params.uniqueNavElements &&
            typeof r.el === "string" &&
            s.length > 1 &&
            i.find(r.el).length === 1
          ) {
            s = i.find(r.el);
          }
          var n = s.find("." + e.params.scrollbar.dragClass);
          if (n.length === 0) {
            n = a('<div class="' + e.params.scrollbar.dragClass + '"></div>');
            s.append(n);
          }
          W.extend(t, { $el: s, el: s[0], $dragEl: n, dragEl: n[0] });
          if (r.draggable) {
            t.enableDraggable();
          }
        },
        destroy: function() {
          var e = this;
          e.scrollbar.disableDraggable();
        }
      };
      var ht = {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        },
        create: function() {
          var e = this;
          W.extend(e, {
            scrollbar: {
              init: vt.init.bind(e),
              destroy: vt.destroy.bind(e),
              updateSize: vt.updateSize.bind(e),
              setTranslate: vt.setTranslate.bind(e),
              setTransition: vt.setTransition.bind(e),
              enableDraggable: vt.enableDraggable.bind(e),
              disableDraggable: vt.disableDraggable.bind(e),
              setDragPosition: vt.setDragPosition.bind(e),
              onDragStart: vt.onDragStart.bind(e),
              onDragMove: vt.onDragMove.bind(e),
              onDragEnd: vt.onDragEnd.bind(e),
              isTouched: false,
              timeout: null,
              dragTimeout: null
            }
          });
        },
        on: {
          init: function() {
            var e = this;
            e.scrollbar.init();
            e.scrollbar.updateSize();
            e.scrollbar.setTranslate();
          },
          update: function() {
            var e = this;
            e.scrollbar.updateSize();
          },
          resize: function() {
            var e = this;
            e.scrollbar.updateSize();
          },
          observerUpdate: function() {
            var e = this;
            e.scrollbar.updateSize();
          },
          setTranslate: function() {
            var e = this;
            e.scrollbar.setTranslate();
          },
          setTransition: function(e) {
            var t = this;
            t.scrollbar.setTransition(e);
          },
          destroy: function() {
            var e = this;
            e.scrollbar.destroy();
          }
        }
      };
      var mt = {
        getDistanceBetweenTouches: function(e) {
          if (e.targetTouches.length < 2) return 1;
          var t = e.targetTouches[0].pageX;
          var i = e.targetTouches[0].pageY;
          var r = e.targetTouches[1].pageX;
          var a = e.targetTouches[1].pageY;
          var s = Math.sqrt(Math.pow(r - t, 2) + Math.pow(a - i, 2));
          return s;
        },
        onGestureStart: function(e) {
          var t = this;
          var i = t.params.zoom;
          var r = t.zoom;
          var s = r.gesture;
          r.fakeGestureTouched = false;
          r.fakeGestureMoved = false;
          if (!R.gestures) {
            if (
              e.type !== "touchstart" ||
              (e.type === "touchstart" && e.targetTouches.length < 2)
            ) {
              return;
            }
            r.fakeGestureTouched = true;
            s.scaleStart = mt.getDistanceBetweenTouches(e);
          }
          if (!s.$slideEl || !s.$slideEl.length) {
            s.$slideEl = a(e.target).closest(".swiper-slide");
            if (s.$slideEl.length === 0)
              s.$slideEl = t.slides.eq(t.activeIndex);
            s.$imageEl = s.$slideEl.find("img, svg, canvas");
            s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass);
            s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio;
            if (s.$imageWrapEl.length === 0) {
              s.$imageEl = undefined;
              return;
            }
          }
          s.$imageEl.transition(0);
          t.zoom.isScaling = true;
        },
        onGestureChange: function(e) {
          var t = this;
          var i = t.params.zoom;
          var r = t.zoom;
          var a = r.gesture;
          if (!R.gestures) {
            if (
              e.type !== "touchmove" ||
              (e.type === "touchmove" && e.targetTouches.length < 2)
            ) {
              return;
            }
            r.fakeGestureMoved = true;
            a.scaleMove = mt.getDistanceBetweenTouches(e);
          }
          if (!a.$imageEl || a.$imageEl.length === 0) return;
          if (R.gestures) {
            r.scale = e.scale * r.currentScale;
          } else {
            r.scale = (a.scaleMove / a.scaleStart) * r.currentScale;
          }
          if (r.scale > a.maxRatio) {
            r.scale = a.maxRatio - 1 + Math.pow(r.scale - a.maxRatio + 1, 0.5);
          }
          if (r.scale < i.minRatio) {
            r.scale = i.minRatio + 1 - Math.pow(i.minRatio - r.scale + 1, 0.5);
          }
          a.$imageEl.transform("translate3d(0,0,0) scale(" + r.scale + ")");
        },
        onGestureEnd: function(e) {
          var t = this;
          var i = t.params.zoom;
          var r = t.zoom;
          var a = r.gesture;
          if (!R.gestures) {
            if (!r.fakeGestureTouched || !r.fakeGestureMoved) {
              return;
            }
            if (
              e.type !== "touchend" ||
              (e.type === "touchend" &&
                e.changedTouches.length < 2 &&
                !Oe.android)
            ) {
              return;
            }
            r.fakeGestureTouched = false;
            r.fakeGestureMoved = false;
          }
          if (!a.$imageEl || a.$imageEl.length === 0) return;
          r.scale = Math.max(Math.min(r.scale, a.maxRatio), i.minRatio);
          a.$imageEl
            .transition(t.params.speed)
            .transform("translate3d(0,0,0) scale(" + r.scale + ")");
          r.currentScale = r.scale;
          r.isScaling = false;
          if (r.scale === 1) a.$slideEl = undefined;
        },
        onTouchStart: function(e) {
          var t = this;
          var i = t.zoom;
          var r = i.gesture,
            a = i.image;
          if (!r.$imageEl || r.$imageEl.length === 0) return;
          if (a.isTouched) return;
          if (Oe.android) e.preventDefault();
          a.isTouched = true;
          a.touchesStart.x =
            e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
          a.touchesStart.y =
            e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
        },
        onTouchMove: function(e) {
          var t = this;
          var i = t.zoom;
          var r = i.gesture,
            a = i.image,
            s = i.velocity;
          if (!r.$imageEl || r.$imageEl.length === 0) return;
          t.allowClick = false;
          if (!a.isTouched || !r.$slideEl) return;
          if (!a.isMoved) {
            a.width = r.$imageEl[0].offsetWidth;
            a.height = r.$imageEl[0].offsetHeight;
            a.startX = W.getTranslate(r.$imageWrapEl[0], "x") || 0;
            a.startY = W.getTranslate(r.$imageWrapEl[0], "y") || 0;
            r.slideWidth = r.$slideEl[0].offsetWidth;
            r.slideHeight = r.$slideEl[0].offsetHeight;
            r.$imageWrapEl.transition(0);
            if (t.rtl) {
              a.startX = -a.startX;
              a.startY = -a.startY;
            }
          }
          var n = a.width * i.scale;
          var l = a.height * i.scale;
          if (n < r.slideWidth && l < r.slideHeight) return;
          a.minX = Math.min(r.slideWidth / 2 - n / 2, 0);
          a.maxX = -a.minX;
          a.minY = Math.min(r.slideHeight / 2 - l / 2, 0);
          a.maxY = -a.minY;
          a.touchesCurrent.x =
            e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
          a.touchesCurrent.y =
            e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;
          if (!a.isMoved && !i.isScaling) {
            if (
              t.isHorizontal() &&
              ((Math.floor(a.minX) === Math.floor(a.startX) &&
                a.touchesCurrent.x < a.touchesStart.x) ||
                (Math.floor(a.maxX) === Math.floor(a.startX) &&
                  a.touchesCurrent.x > a.touchesStart.x))
            ) {
              a.isTouched = false;
              return;
            }
            if (
              !t.isHorizontal() &&
              ((Math.floor(a.minY) === Math.floor(a.startY) &&
                a.touchesCurrent.y < a.touchesStart.y) ||
                (Math.floor(a.maxY) === Math.floor(a.startY) &&
                  a.touchesCurrent.y > a.touchesStart.y))
            ) {
              a.isTouched = false;
              return;
            }
          }
          e.preventDefault();
          e.stopPropagation();
          a.isMoved = true;
          a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX;
          a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY;
          if (a.currentX < a.minX) {
            a.currentX = a.minX + 1 - Math.pow(a.minX - a.currentX + 1, 0.8);
          }
          if (a.currentX > a.maxX) {
            a.currentX = a.maxX - 1 + Math.pow(a.currentX - a.maxX + 1, 0.8);
          }
          if (a.currentY < a.minY) {
            a.currentY = a.minY + 1 - Math.pow(a.minY - a.currentY + 1, 0.8);
          }
          if (a.currentY > a.maxY) {
            a.currentY = a.maxY - 1 + Math.pow(a.currentY - a.maxY + 1, 0.8);
          }
          if (!s.prevPositionX) s.prevPositionX = a.touchesCurrent.x;
          if (!s.prevPositionY) s.prevPositionY = a.touchesCurrent.y;
          if (!s.prevTime) s.prevTime = Date.now();
          s.x =
            (a.touchesCurrent.x - s.prevPositionX) /
            (Date.now() - s.prevTime) /
            2;
          s.y =
            (a.touchesCurrent.y - s.prevPositionY) /
            (Date.now() - s.prevTime) /
            2;
          if (Math.abs(a.touchesCurrent.x - s.prevPositionX) < 2) s.x = 0;
          if (Math.abs(a.touchesCurrent.y - s.prevPositionY) < 2) s.y = 0;
          s.prevPositionX = a.touchesCurrent.x;
          s.prevPositionY = a.touchesCurrent.y;
          s.prevTime = Date.now();
          r.$imageWrapEl.transform(
            "translate3d(" + a.currentX + "px, " + a.currentY + "px,0)"
          );
        },
        onTouchEnd: function() {
          var e = this;
          var t = e.zoom;
          var i = t.gesture,
            r = t.image,
            a = t.velocity;
          if (!i.$imageEl || i.$imageEl.length === 0) return;
          if (!r.isTouched || !r.isMoved) {
            r.isTouched = false;
            r.isMoved = false;
            return;
          }
          r.isTouched = false;
          r.isMoved = false;
          var s = 300;
          var n = 300;
          var l = a.x * s;
          var o = r.currentX + l;
          var d = a.y * n;
          var u = r.currentY + d;
          if (a.x !== 0) s = Math.abs((o - r.currentX) / a.x);
          if (a.y !== 0) n = Math.abs((u - r.currentY) / a.y);
          var f = Math.max(s, n);
          r.currentX = o;
          r.currentY = u;
          var p = r.width * t.scale;
          var c = r.height * t.scale;
          r.minX = Math.min(i.slideWidth / 2 - p / 2, 0);
          r.maxX = -r.minX;
          r.minY = Math.min(i.slideHeight / 2 - c / 2, 0);
          r.maxY = -r.minY;
          r.currentX = Math.max(Math.min(r.currentX, r.maxX), r.minX);
          r.currentY = Math.max(Math.min(r.currentY, r.maxY), r.minY);
          i.$imageWrapEl
            .transition(f)
            .transform(
              "translate3d(" + r.currentX + "px, " + r.currentY + "px,0)"
            );
        },
        onTransitionEnd: function() {
          var e = this;
          var t = e.zoom;
          var i = t.gesture;
          if (i.$slideEl && e.previousIndex !== e.activeIndex) {
            i.$imageEl.transform("translate3d(0,0,0) scale(1)");
            i.$imageWrapEl.transform("translate3d(0,0,0)");
            t.scale = 1;
            t.currentScale = 1;
            i.$slideEl = undefined;
            i.$imageEl = undefined;
            i.$imageWrapEl = undefined;
          }
        },
        toggle: function(e) {
          var t = this;
          var i = t.zoom;
          if (i.scale && i.scale !== 1) {
            i.out();
          } else {
            i.in(e);
          }
        },
        in: function(e) {
          var t = this;
          var i = t.zoom;
          var r = t.params.zoom;
          var s = i.gesture,
            n = i.image;
          if (!s.$slideEl) {
            s.$slideEl = t.clickedSlide
              ? a(t.clickedSlide)
              : t.slides.eq(t.activeIndex);
            s.$imageEl = s.$slideEl.find("img, svg, canvas");
            s.$imageWrapEl = s.$imageEl.parent("." + r.containerClass);
          }
          if (!s.$imageEl || s.$imageEl.length === 0) return;
          s.$slideEl.addClass("" + r.zoomedSlideClass);
          var l;
          var o;
          var d;
          var u;
          var f;
          var p;
          var c;
          var v;
          var h;
          var m;
          var g;
          var b;
          var w;
          var T;
          var y;
          var x;
          var E;
          var S;
          if (typeof n.touchesStart.x === "undefined" && e) {
            l = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
            o = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY;
          } else {
            l = n.touchesStart.x;
            o = n.touchesStart.y;
          }
          i.scale = s.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio;
          i.currentScale =
            s.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio;
          if (e) {
            E = s.$slideEl[0].offsetWidth;
            S = s.$slideEl[0].offsetHeight;
            d = s.$slideEl.offset().left;
            u = s.$slideEl.offset().top;
            f = d + E / 2 - l;
            p = u + S / 2 - o;
            h = s.$imageEl[0].offsetWidth;
            m = s.$imageEl[0].offsetHeight;
            g = h * i.scale;
            b = m * i.scale;
            w = Math.min(E / 2 - g / 2, 0);
            T = Math.min(S / 2 - b / 2, 0);
            y = -w;
            x = -T;
            c = f * i.scale;
            v = p * i.scale;
            if (c < w) {
              c = w;
            }
            if (c > y) {
              c = y;
            }
            if (v < T) {
              v = T;
            }
            if (v > x) {
              v = x;
            }
          } else {
            c = 0;
            v = 0;
          }
          s.$imageWrapEl
            .transition(300)
            .transform("translate3d(" + c + "px, " + v + "px,0)");
          s.$imageEl
            .transition(300)
            .transform("translate3d(0,0,0) scale(" + i.scale + ")");
        },
        out: function() {
          var e = this;
          var t = e.zoom;
          var i = e.params.zoom;
          var r = t.gesture;
          if (!r.$slideEl) {
            r.$slideEl = e.clickedSlide
              ? a(e.clickedSlide)
              : e.slides.eq(e.activeIndex);
            r.$imageEl = r.$slideEl.find("img, svg, canvas");
            r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass);
          }
          if (!r.$imageEl || r.$imageEl.length === 0) return;
          t.scale = 1;
          t.currentScale = 1;
          r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
          r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
          r.$slideEl.removeClass("" + i.zoomedSlideClass);
          r.$slideEl = undefined;
        },
        enable: function() {
          var e = this;
          var t = e.zoom;
          if (t.enabled) return;
          t.enabled = true;
          var i =
            e.touchEvents.start === "touchstart" &&
            R.passiveListener &&
            e.params.passiveListeners
              ? { passive: true, capture: false }
              : false;
          if (R.gestures) {
            e.$wrapperEl.on(
              "gesturestart",
              ".swiper-slide",
              t.onGestureStart,
              i
            );
            e.$wrapperEl.on(
              "gesturechange",
              ".swiper-slide",
              t.onGestureChange,
              i
            );
            e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i);
          } else if (e.touchEvents.start === "touchstart") {
            e.$wrapperEl.on(
              e.touchEvents.start,
              ".swiper-slide",
              t.onGestureStart,
              i
            );
            e.$wrapperEl.on(
              e.touchEvents.move,
              ".swiper-slide",
              t.onGestureChange,
              i
            );
            e.$wrapperEl.on(
              e.touchEvents.end,
              ".swiper-slide",
              t.onGestureEnd,
              i
            );
          }
          e.$wrapperEl.on(
            e.touchEvents.move,
            "." + e.params.zoom.containerClass,
            t.onTouchMove
          );
        },
        disable: function() {
          var e = this;
          var t = e.zoom;
          if (!t.enabled) return;
          e.zoom.enabled = false;
          var i =
            e.touchEvents.start === "touchstart" &&
            R.passiveListener &&
            e.params.passiveListeners
              ? { passive: true, capture: false }
              : false;
          if (R.gestures) {
            e.$wrapperEl.off(
              "gesturestart",
              ".swiper-slide",
              t.onGestureStart,
              i
            );
            e.$wrapperEl.off(
              "gesturechange",
              ".swiper-slide",
              t.onGestureChange,
              i
            );
            e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i);
          } else if (e.touchEvents.start === "touchstart") {
            e.$wrapperEl.off(
              e.touchEvents.start,
              ".swiper-slide",
              t.onGestureStart,
              i
            );
            e.$wrapperEl.off(
              e.touchEvents.move,
              ".swiper-slide",
              t.onGestureChange,
              i
            );
            e.$wrapperEl.off(
              e.touchEvents.end,
              ".swiper-slide",
              t.onGestureEnd,
              i
            );
          }
          e.$wrapperEl.off(
            e.touchEvents.move,
            "." + e.params.zoom.containerClass,
            t.onTouchMove
          );
        }
      };
      var gt = {
        name: "zoom",
        params: {
          zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
          }
        },
        create: function() {
          var e = this;
          var t = {
            enabled: false,
            scale: 1,
            currentScale: 1,
            isScaling: false,
            gesture: {
              $slideEl: undefined,
              slideWidth: undefined,
              slideHeight: undefined,
              $imageEl: undefined,
              $imageWrapEl: undefined,
              maxRatio: 3
            },
            image: {
              isTouched: undefined,
              isMoved: undefined,
              currentX: undefined,
              currentY: undefined,
              minX: undefined,
              minY: undefined,
              maxX: undefined,
              maxY: undefined,
              width: undefined,
              height: undefined,
              startX: undefined,
              startY: undefined,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: undefined,
              y: undefined,
              prevPositionX: undefined,
              prevPositionY: undefined,
              prevTime: undefined
            }
          };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
            .split(" ")
            .forEach(function(i) {
              t[i] = mt[i].bind(e);
            });
          W.extend(e, { zoom: t });
          var i = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: function() {
              return i;
            },
            set: function(t) {
              if (i !== t) {
                var r = e.zoom.gesture.$imageEl
                  ? e.zoom.gesture.$imageEl[0]
                  : undefined;
                var a = e.zoom.gesture.$slideEl
                  ? e.zoom.gesture.$slideEl[0]
                  : undefined;
                e.emit("zoomChange", t, r, a);
              }
              i = t;
            }
          });
        },
        on: {
          init: function() {
            var e = this;
            if (e.params.zoom.enabled) {
              e.zoom.enable();
            }
          },
          destroy: function() {
            var e = this;
            e.zoom.disable();
          },
          touchStart: function(e) {
            var t = this;
            if (!t.zoom.enabled) return;
            t.zoom.onTouchStart(e);
          },
          touchEnd: function(e) {
            var t = this;
            if (!t.zoom.enabled) return;
            t.zoom.onTouchEnd(e);
          },
          doubleTap: function(e) {
            var t = this;
            if (
              t.params.zoom.enabled &&
              t.zoom.enabled &&
              t.params.zoom.toggle
            ) {
              t.zoom.toggle(e);
            }
          },
          transitionEnd: function() {
            var e = this;
            if (e.zoom.enabled && e.params.zoom.enabled) {
              e.zoom.onTransitionEnd();
            }
          }
        }
      };
      var bt = {
        run: function() {
          var e = this;
          var t = e.slides.eq(e.activeIndex);
          var i = e.params.autoplay.delay;
          if (t.attr("data-swiper-autoplay")) {
            i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay;
          }
          e.autoplay.timeout = W.nextTick(function() {
            if (e.params.autoplay.reverseDirection) {
              if (e.params.loop) {
                e.loopFix();
                e.slidePrev(e.params.speed, true, true);
                e.emit("autoplay");
              } else if (!e.isBeginning) {
                e.slidePrev(e.params.speed, true, true);
                e.emit("autoplay");
              } else if (!e.params.autoplay.stopOnLastSlide) {
                e.slideTo(e.slides.length - 1, e.params.speed, true, true);
                e.emit("autoplay");
              } else {
                e.autoplay.stop();
              }
            } else if (e.params.loop) {
              e.loopFix();
              e.slideNext(e.params.speed, true, true);
              e.emit("autoplay");
            } else if (!e.isEnd) {
              e.slideNext(e.params.speed, true, true);
              e.emit("autoplay");
            } else if (!e.params.autoplay.stopOnLastSlide) {
              e.slideTo(0, e.params.speed, true, true);
              e.emit("autoplay");
            } else {
              e.autoplay.stop();
            }
          }, i);
        },
        start: function() {
          var e = this;
          if (typeof e.autoplay.timeout !== "undefined") return false;
          if (e.autoplay.running) return false;
          e.autoplay.running = true;
          e.emit("autoplayStart");
          e.autoplay.run();
          return true;
        },
        stop: function() {
          var e = this;
          if (!e.autoplay.running) return false;
          if (typeof e.autoplay.timeout === "undefined") return false;
          if (e.autoplay.timeout) {
            clearTimeout(e.autoplay.timeout);
            e.autoplay.timeout = undefined;
          }
          e.autoplay.running = false;
          e.emit("autoplayStop");
          return true;
        },
        pause: function(e) {
          var t = this;
          if (!t.autoplay.running) return;
          if (t.autoplay.paused) return;
          if (t.autoplay.timeout) clearTimeout(t.autoplay.timeout);
          t.autoplay.paused = true;
          if (e === 0 || !t.params.autoplay.waitForTransition) {
            t.autoplay.paused = false;
            t.autoplay.run();
          } else {
            t.$wrapperEl[0].addEventListener(
              "transitionend",
              t.autoplay.onTransitionEnd
            );
            t.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              t.autoplay.onTransitionEnd
            );
          }
        }
      };
      var wt = {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: false,
            delay: 3e3,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false
          }
        },
        create: function() {
          var e = this;
          W.extend(e, {
            autoplay: {
              running: false,
              paused: false,
              run: bt.run.bind(e),
              start: bt.start.bind(e),
              stop: bt.stop.bind(e),
              pause: bt.pause.bind(e),
              onTransitionEnd: function(t) {
                if (!e || e.destroyed || !e.$wrapperEl) return;
                if (t.target !== this) return;
                e.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  e.autoplay.onTransitionEnd
                );
                e.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  e.autoplay.onTransitionEnd
                );
                e.autoplay.paused = false;
                if (!e.autoplay.running) {
                  e.autoplay.stop();
                } else {
                  e.autoplay.run();
                }
              }
            }
          });
        },
        on: {
          init: function() {
            var e = this;
            if (e.params.autoplay.enabled) {
              e.autoplay.start();
            }
          },
          beforeTransitionStart: function(e, t) {
            var i = this;
            if (i.autoplay.running) {
              if (t || !i.params.autoplay.disableOnInteraction) {
                i.autoplay.pause(e);
              } else {
                i.autoplay.stop();
              }
            }
          },
          sliderFirstMove: function() {
            var e = this;
            if (e.autoplay.running) {
              if (e.params.autoplay.disableOnInteraction) {
                e.autoplay.stop();
              } else {
                e.autoplay.pause();
              }
            }
          },
          destroy: function() {
            var e = this;
            if (e.autoplay.running) {
              e.autoplay.stop();
            }
          }
        }
      };
      var Tt = [at, st, nt, lt, dt];
      if (typeof rt.use === "undefined") {
        rt.use = rt.Class.use;
        rt.installModule = rt.Class.installModule;
      }
      rt.use(Tt);
      rt.use([ct, ht, wt, gt]);
    }
  };
});
