var t =
    "undefined" == typeof document
      ? {
          body: {},
          addEventListener: function() {},
          removeEventListener: function() {},
          activeElement: { blur: function() {}, nodeName: "" },
          querySelector: function() {
            return null;
          },
          querySelectorAll: function() {
            return [];
          },
          getElementById: function() {
            return null;
          },
          createEvent: function() {
            return { initEvent: function() {} };
          },
          createElement: function() {
            return {
              children: [],
              childNodes: [],
              style: {},
              setAttribute: function() {},
              getElementsByTagName: function() {
                return [];
              }
            };
          },
          location: { hash: "" }
        }
      : document,
  e =
    "undefined" == typeof window
      ? {
          document: t,
          navigator: { userAgent: "" },
          location: {},
          history: {},
          CustomEvent: function() {
            return this;
          },
          addEventListener: function() {},
          removeEventListener: function() {},
          getComputedStyle: function() {
            return {
              getPropertyValue: function() {
                return "";
              }
            };
          },
          Image: function() {},
          Date: function() {},
          screen: {},
          setTimeout: function() {},
          clearTimeout: function() {}
        }
      : window;
class i {
  constructor(t) {
    const e = this;
    for (let i = 0; i < t.length; i += 1) e[i] = t[i];
    return (e.length = t.length), this;
  }
}
function s(s, n) {
  const r = [];
  let o = 0;
  if (s && !n && s instanceof i) return s;
  if (s)
    if ("string" == typeof s) {
      let e, i;
      const a = s.trim();
      if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
        let e = "div";
        for (
          0 === a.indexOf("<li") && (e = "ul"),
            0 === a.indexOf("<tr") && (e = "tbody"),
            (0 !== a.indexOf("<td") && 0 !== a.indexOf("<th")) || (e = "tr"),
            0 === a.indexOf("<tbody") && (e = "table"),
            0 === a.indexOf("<option") && (e = "select"),
            (i = t.createElement(e)).innerHTML = a,
            o = 0;
          o < i.childNodes.length;
          o += 1
        )
          r.push(i.childNodes[o]);
      } else
        for (
          e =
            n || "#" !== s[0] || s.match(/[ .<>:~]/)
              ? (n || t).querySelectorAll(s.trim())
              : [t.getElementById(s.trim().split("#")[1])],
            o = 0;
          o < e.length;
          o += 1
        )
          e[o] && r.push(e[o]);
    } else if (s.nodeType || s === e || s === t) r.push(s);
    else if (s.length > 0 && s[0].nodeType)
      for (o = 0; o < s.length; o += 1) r.push(s[o]);
  return new i(r);
}
function n(t) {
  const e = [];
  for (let i = 0; i < t.length; i += 1) -1 === e.indexOf(t[i]) && e.push(t[i]);
  return e;
}
(s.fn = i.prototype), (s.Class = i), (s.Dom7 = i);
const r = {
  addClass: function(t) {
    if (void 0 === t) return this;
    const e = t.split(" ");
    for (let t = 0; t < e.length; t += 1)
      for (let i = 0; i < this.length; i += 1)
        void 0 !== this[i] &&
          void 0 !== this[i].classList &&
          this[i].classList.add(e[t]);
    return this;
  },
  removeClass: function(t) {
    const e = t.split(" ");
    for (let t = 0; t < e.length; t += 1)
      for (let i = 0; i < this.length; i += 1)
        void 0 !== this[i] &&
          void 0 !== this[i].classList &&
          this[i].classList.remove(e[t]);
    return this;
  },
  hasClass: function(t) {
    return !!this[0] && this[0].classList.contains(t);
  },
  toggleClass: function(t) {
    const e = t.split(" ");
    for (let t = 0; t < e.length; t += 1)
      for (let i = 0; i < this.length; i += 1)
        void 0 !== this[i] &&
          void 0 !== this[i].classList &&
          this[i].classList.toggle(e[t]);
    return this;
  },
  attr: function(t, e) {
    if (1 === arguments.length && "string" == typeof t)
      return this[0] ? this[0].getAttribute(t) : void 0;
    for (let i = 0; i < this.length; i += 1)
      if (2 === arguments.length) this[i].setAttribute(t, e);
      else
        for (const e in t) (this[i][e] = t[e]), this[i].setAttribute(e, t[e]);
    return this;
  },
  removeAttr: function(t) {
    for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
    return this;
  },
  data: function(t, e) {
    let i;
    if (void 0 !== e) {
      for (let s = 0; s < this.length; s += 1)
        (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
          (i.dom7ElementDataStorage[t] = e);
      return this;
    }
    if ((i = this[0])) {
      if (i.dom7ElementDataStorage && t in i.dom7ElementDataStorage)
        return i.dom7ElementDataStorage[t];
      return i.getAttribute(`data-${t}`) || void 0;
    }
  },
  transform: function(t) {
    for (let e = 0; e < this.length; e += 1) {
      const i = this[e].style;
      (i.webkitTransform = t), (i.transform = t);
    }
    return this;
  },
  transition: function(t) {
    "string" != typeof t && (t = `${t}ms`);
    for (let e = 0; e < this.length; e += 1) {
      const i = this[e].style;
      (i.webkitTransitionDuration = t), (i.transitionDuration = t);
    }
    return this;
  },
  on: function(...t) {
    let [e, i, n, r] = t;
    function o(t) {
      const e = t.target;
      if (!e) return;
      const r = t.target.dom7EventData || [];
      if ((r.indexOf(t) < 0 && r.unshift(t), s(e).is(i))) n.apply(e, r);
      else {
        const t = s(e).parents();
        for (let e = 0; e < t.length; e += 1) s(t[e]).is(i) && n.apply(t[e], r);
      }
    }
    function a(t) {
      const e = (t && t.target && t.target.dom7EventData) || [];
      e.indexOf(t) < 0 && e.unshift(t), n.apply(this, e);
    }
    "function" == typeof t[1] && (([e, n, r] = t), (i = void 0)), r || (r = !1);
    const l = e.split(" ");
    let h;
    for (let t = 0; t < this.length; t += 1) {
      const e = this[t];
      if (i)
        for (h = 0; h < l.length; h += 1) {
          const t = l[h];
          e.dom7LiveListeners || (e.dom7LiveListeners = {}),
            e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
            e.dom7LiveListeners[t].push({ listener: n, proxyListener: o }),
            e.addEventListener(t, o, r);
        }
      else
        for (h = 0; h < l.length; h += 1) {
          const t = l[h];
          e.dom7Listeners || (e.dom7Listeners = {}),
            e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
            e.dom7Listeners[t].push({ listener: n, proxyListener: a }),
            e.addEventListener(t, a, r);
        }
    }
    return this;
  },
  off: function(...t) {
    let [e, i, s, n] = t;
    "function" == typeof t[1] && (([e, s, n] = t), (i = void 0)), n || (n = !1);
    const r = e.split(" ");
    for (let t = 0; t < r.length; t += 1) {
      const e = r[t];
      for (let t = 0; t < this.length; t += 1) {
        const r = this[t];
        let o;
        if (
          (!i && r.dom7Listeners
            ? (o = r.dom7Listeners[e])
            : i && r.dom7LiveListeners && (o = r.dom7LiveListeners[e]),
          o && o.length)
        )
          for (let t = o.length - 1; t >= 0; t -= 1) {
            const i = o[t];
            s && i.listener === s
              ? (r.removeEventListener(e, i.proxyListener, n), o.splice(t, 1))
              : s &&
                i.listener &&
                i.listener.dom7proxy &&
                i.listener.dom7proxy === s
              ? (r.removeEventListener(e, i.proxyListener, n), o.splice(t, 1))
              : s ||
                (r.removeEventListener(e, i.proxyListener, n), o.splice(t, 1));
          }
      }
    }
    return this;
  },
  trigger: function(...i) {
    const s = i[0].split(" "),
      n = i[1];
    for (let r = 0; r < s.length; r += 1) {
      const o = s[r];
      for (let s = 0; s < this.length; s += 1) {
        const r = this[s];
        let a;
        try {
          a = new e.CustomEvent(o, { detail: n, bubbles: !0, cancelable: !0 });
        } catch (e) {
          (a = t.createEvent("Event")).initEvent(o, !0, !0), (a.detail = n);
        }
        (r.dom7EventData = i.filter((t, e) => e > 0)),
          r.dispatchEvent(a),
          (r.dom7EventData = []),
          delete r.dom7EventData;
      }
    }
    return this;
  },
  transitionEnd: function(t) {
    const e = ["webkitTransitionEnd", "transitionend"],
      i = this;
    let s;
    function n(r) {
      if (r.target === this)
        for (t.call(this, r), s = 0; s < e.length; s += 1) i.off(e[s], n);
    }
    if (t) for (s = 0; s < e.length; s += 1) i.on(e[s], n);
    return this;
  },
  outerWidth: function(t) {
    if (this.length > 0) {
      if (t) {
        const t = this.styles();
        return (
          this[0].offsetWidth +
          parseFloat(t.getPropertyValue("margin-right")) +
          parseFloat(t.getPropertyValue("margin-left"))
        );
      }
      return this[0].offsetWidth;
    }
    return null;
  },
  outerHeight: function(t) {
    if (this.length > 0) {
      if (t) {
        const t = this.styles();
        return (
          this[0].offsetHeight +
          parseFloat(t.getPropertyValue("margin-top")) +
          parseFloat(t.getPropertyValue("margin-bottom"))
        );
      }
      return this[0].offsetHeight;
    }
    return null;
  },
  offset: function() {
    if (this.length > 0) {
      const i = this[0],
        s = i.getBoundingClientRect(),
        n = t.body;
      return {
        top:
          s.top +
          (i === e ? e.scrollY : i.scrollTop) -
          (i.clientTop || n.clientTop || 0),
        left:
          s.left +
          (i === e ? e.scrollX : i.scrollLeft) -
          (i.clientLeft || n.clientLeft || 0)
      };
    }
    return null;
  },
  css: function(t, i) {
    let s;
    if (1 === arguments.length) {
      if ("string" != typeof t) {
        for (s = 0; s < this.length; s += 1)
          for (let e in t) this[s].style[e] = t[e];
        return this;
      }
      if (this[0]) return e.getComputedStyle(this[0], null).getPropertyValue(t);
    }
    if (2 === arguments.length && "string" == typeof t) {
      for (s = 0; s < this.length; s += 1) this[s].style[t] = i;
      return this;
    }
    return this;
  },
  each: function(t) {
    if (!t) return this;
    for (let e = 0; e < this.length; e += 1)
      if (!1 === t.call(this[e], e, this[e])) return this;
    return this;
  },
  html: function(t) {
    if (void 0 === t) return this[0] ? this[0].innerHTML : void 0;
    for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
    return this;
  },
  text: function(t) {
    if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
    for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
    return this;
  },
  is: function(n) {
    const r = this[0];
    let o, a;
    if (!r || void 0 === n) return !1;
    if ("string" == typeof n) {
      if (r.matches) return r.matches(n);
      if (r.webkitMatchesSelector) return r.webkitMatchesSelector(n);
      if (r.msMatchesSelector) return r.msMatchesSelector(n);
      for (o = s(n), a = 0; a < o.length; a += 1) if (o[a] === r) return !0;
      return !1;
    }
    if (n === t) return r === t;
    if (n === e) return r === e;
    if (n.nodeType || n instanceof i) {
      for (o = n.nodeType ? [n] : n, a = 0; a < o.length; a += 1)
        if (o[a] === r) return !0;
      return !1;
    }
    return !1;
  },
  index: function() {
    let t,
      e = this[0];
    if (e) {
      for (t = 0; null !== (e = e.previousSibling); )
        1 === e.nodeType && (t += 1);
      return t;
    }
  },
  eq: function(t) {
    if (void 0 === t) return this;
    const e = this.length;
    let s;
    return new i(
      t > e - 1 ? [] : t < 0 ? ((s = e + t) < 0 ? [] : [this[s]]) : [this[t]]
    );
  },
  append: function(...e) {
    let s;
    for (let n = 0; n < e.length; n += 1) {
      s = e[n];
      for (let e = 0; e < this.length; e += 1)
        if ("string" == typeof s) {
          const i = t.createElement("div");
          for (i.innerHTML = s; i.firstChild; )
            this[e].appendChild(i.firstChild);
        } else if (s instanceof i)
          for (let t = 0; t < s.length; t += 1) this[e].appendChild(s[t]);
        else this[e].appendChild(s);
    }
    return this;
  },
  prepend: function(e) {
    let s, n;
    for (s = 0; s < this.length; s += 1)
      if ("string" == typeof e) {
        const i = t.createElement("div");
        for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
          this[s].insertBefore(i.childNodes[n], this[s].childNodes[0]);
      } else if (e instanceof i)
        for (n = 0; n < e.length; n += 1)
          this[s].insertBefore(e[n], this[s].childNodes[0]);
      else this[s].insertBefore(e, this[s].childNodes[0]);
    return this;
  },
  next: function(t) {
    return this.length > 0
      ? t
        ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(t)
          ? new i([this[0].nextElementSibling])
          : new i([])
        : new i(this[0].nextElementSibling ? [this[0].nextElementSibling] : [])
      : new i([]);
  },
  nextAll: function(t) {
    const e = [];
    let n = this[0];
    if (!n) return new i([]);
    for (; n.nextElementSibling; ) {
      const i = n.nextElementSibling;
      t ? s(i).is(t) && e.push(i) : e.push(i), (n = i);
    }
    return new i(e);
  },
  prev: function(t) {
    if (this.length > 0) {
      const e = this[0];
      return t
        ? e.previousElementSibling && s(e.previousElementSibling).is(t)
          ? new i([e.previousElementSibling])
          : new i([])
        : new i(e.previousElementSibling ? [e.previousElementSibling] : []);
    }
    return new i([]);
  },
  prevAll: function(t) {
    const e = [];
    let n = this[0];
    if (!n) return new i([]);
    for (; n.previousElementSibling; ) {
      const i = n.previousElementSibling;
      t ? s(i).is(t) && e.push(i) : e.push(i), (n = i);
    }
    return new i(e);
  },
  parent: function(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1)
      null !== this[i].parentNode &&
        (t
          ? s(this[i].parentNode).is(t) && e.push(this[i].parentNode)
          : e.push(this[i].parentNode));
    return s(n(e));
  },
  parents: function(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1) {
      let n = this[i].parentNode;
      for (; n; ) t ? s(n).is(t) && e.push(n) : e.push(n), (n = n.parentNode);
    }
    return s(n(e));
  },
  closest: function(t) {
    let e = this;
    return void 0 === t ? new i([]) : (e.is(t) || (e = e.parents(t).eq(0)), e);
  },
  find: function(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1) {
      const s = this[i].querySelectorAll(t);
      for (let t = 0; t < s.length; t += 1) e.push(s[t]);
    }
    return new i(e);
  },
  children: function(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1) {
      const n = this[i].childNodes;
      for (let i = 0; i < n.length; i += 1)
        t
          ? 1 === n[i].nodeType && s(n[i]).is(t) && e.push(n[i])
          : 1 === n[i].nodeType && e.push(n[i]);
    }
    return new i(n(e));
  },
  remove: function() {
    for (let t = 0; t < this.length; t += 1)
      this[t].parentNode && this[t].parentNode.removeChild(this[t]);
    return this;
  },
  add: function(...t) {
    const e = this;
    let i, n;
    for (i = 0; i < t.length; i += 1) {
      const r = s(t[i]);
      for (n = 0; n < r.length; n += 1) (e[e.length] = r[n]), (e.length += 1);
    }
    return e;
  },
  styles: function() {
    return this[0] ? e.getComputedStyle(this[0], null) : {};
  }
};
Object.keys(r).forEach(t => {
  s.fn[t] = r[t];
});
const o = {
    deleteProps(t) {
      const e = t;
      Object.keys(e).forEach(t => {
        try {
          e[t] = null;
        } catch (t) {}
        try {
          delete e[t];
        } catch (t) {}
      });
    },
    nextTick: (t, e = 0) => setTimeout(t, e),
    now: () => Date.now(),
    getTranslate(t, i = "x") {
      let s, n, r;
      const o = e.getComputedStyle(t, null);
      return (
        e.WebKitCSSMatrix
          ? ((n = o.transform || o.webkitTransform).split(",").length > 6 &&
              (n = n
                .split(", ")
                .map(t => t.replace(",", "."))
                .join(", ")),
            (r = new e.WebKitCSSMatrix("none" === n ? "" : n)))
          : (s = (r =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,"))
              .toString()
              .split(",")),
        "x" === i &&
          (n = e.WebKitCSSMatrix
            ? r.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === i &&
          (n = e.WebKitCSSMatrix
            ? r.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        n || 0
      );
    },
    parseUrlQuery(t) {
      const i = {};
      let s,
        n,
        r,
        o,
        a = t || e.location.href;
      if ("string" == typeof a && a.length)
        for (
          o = (n = (a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "")
            .split("&")
            .filter(t => "" !== t)).length,
            s = 0;
          s < o;
          s += 1
        )
          (r = n[s].replace(/#\S+/g, "").split("=")),
            (i[decodeURIComponent(r[0])] =
              void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "");
      return i;
    },
    isObject: t =>
      "object" == typeof t &&
      null !== t &&
      t.constructor &&
      t.constructor === Object,
    extend(...t) {
      const e = Object(t[0]);
      for (let i = 1; i < t.length; i += 1) {
        const s = t[i];
        if (null != s) {
          const t = Object.keys(Object(s));
          for (let i = 0, n = t.length; i < n; i += 1) {
            const n = t[i],
              r = Object.getOwnPropertyDescriptor(s, n);
            void 0 !== r &&
              r.enumerable &&
              (o.isObject(e[n]) && o.isObject(s[n])
                ? o.extend(e[n], s[n])
                : !o.isObject(e[n]) && o.isObject(s[n])
                ? ((e[n] = {}), o.extend(e[n], s[n]))
                : (e[n] = s[n]));
          }
        }
      }
      return e;
    }
  },
  a = (function() {
    const i = t.createElement("div");
    return {
      touch:
        (e.Modernizr && !0 === e.Modernizr.touch) ||
        !!(
          e.navigator.maxTouchPoints > 0 ||
          "ontouchstart" in e ||
          (e.DocumentTouch && t instanceof e.DocumentTouch)
        ),
      pointerEvents: !!(
        e.navigator.pointerEnabled ||
        e.PointerEvent ||
        "maxTouchPoints" in e.navigator
      ),
      prefixedPointerEvents: !!e.navigator.msPointerEnabled,
      transition: (function() {
        const t = i.style;
        return (
          "transition" in t || "webkitTransition" in t || "MozTransition" in t
        );
      })(),
      transforms3d:
        (e.Modernizr && !0 === e.Modernizr.csstransforms3d) ||
        (function() {
          const t = i.style;
          return (
            "webkitPerspective" in t ||
            "MozPerspective" in t ||
            "OPerspective" in t ||
            "MsPerspective" in t ||
            "perspective" in t
          );
        })(),
      flexbox: (function() {
        const t = i.style,
          e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
            " "
          );
        for (let i = 0; i < e.length; i += 1) if (e[i] in t) return !0;
        return !1;
      })(),
      observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
      passiveListener: (function() {
        let t = !1;
        try {
          const i = Object.defineProperty({}, "passive", {
            get() {
              t = !0;
            }
          });
          e.addEventListener("testPassiveListener", null, i);
        } catch (t) {}
        return t;
      })(),
      gestures: "ongesturestart" in e
    };
  })();
class l {
  constructor(t = {}) {
    const e = this;
    (e.params = t),
      (e.eventsListeners = {}),
      e.params &&
        e.params.on &&
        Object.keys(e.params.on).forEach(t => {
          e.on(t, e.params.on[t]);
        });
  }
  on(t, e, i) {
    const s = this;
    if ("function" != typeof e) return s;
    const n = i ? "unshift" : "push";
    return (
      t.split(" ").forEach(t => {
        s.eventsListeners[t] || (s.eventsListeners[t] = []),
          s.eventsListeners[t][n](e);
      }),
      s
    );
  }
  once(t, e, i) {
    const s = this;
    return "function" != typeof e
      ? s
      : s.on(
          t,
          function i(...n) {
            e.apply(s, n), s.off(t, i);
          },
          i
        );
  }
  off(t, e) {
    const i = this;
    return i.eventsListeners
      ? (t.split(" ").forEach(t => {
          void 0 === e
            ? (i.eventsListeners[t] = [])
            : i.eventsListeners[t] &&
              i.eventsListeners[t].length &&
              i.eventsListeners[t].forEach((s, n) => {
                s === e && i.eventsListeners[t].splice(n, 1);
              });
        }),
        i)
      : i;
  }
  emit(...t) {
    const e = this;
    if (!e.eventsListeners) return e;
    let i, s, n;
    return (
      "string" == typeof t[0] || Array.isArray(t[0])
        ? ((i = t[0]), (s = t.slice(1, t.length)), (n = e))
        : ((i = t[0].events), (s = t[0].data), (n = t[0].context || e)),
      (Array.isArray(i) ? i : i.split(" ")).forEach(t => {
        if (e.eventsListeners && e.eventsListeners[t]) {
          const i = [];
          e.eventsListeners[t].forEach(t => {
            i.push(t);
          }),
            i.forEach(t => {
              t.apply(n, s);
            });
        }
      }),
      e
    );
  }
  useModulesParams(t) {
    const e = this;
    e.modules &&
      Object.keys(e.modules).forEach(i => {
        const s = e.modules[i];
        s.params && o.extend(t, s.params);
      });
  }
  useModules(t = {}) {
    const e = this;
    e.modules &&
      Object.keys(e.modules).forEach(i => {
        const s = e.modules[i],
          n = t[i] || {};
        s.instance &&
          Object.keys(s.instance).forEach(t => {
            const i = s.instance[t];
            e[t] = "function" == typeof i ? i.bind(e) : i;
          }),
          s.on &&
            e.on &&
            Object.keys(s.on).forEach(t => {
              e.on(t, s.on[t]);
            }),
          s.create && s.create.bind(e)(n);
      });
  }
  static set components(t) {
    this.use && this.use(t);
  }
  static installModule(t, ...e) {
    const i = this;
    i.prototype.modules || (i.prototype.modules = {});
    const s = t.name || `${Object.keys(i.prototype.modules).length}_${o.now()}`;
    return (
      (i.prototype.modules[s] = t),
      t.proto &&
        Object.keys(t.proto).forEach(e => {
          i.prototype[e] = t.proto[e];
        }),
      t.static &&
        Object.keys(t.static).forEach(e => {
          i[e] = t.static[e];
        }),
      t.install && t.install.apply(i, e),
      i
    );
  }
  static use(t, ...e) {
    const i = this;
    return Array.isArray(t)
      ? (t.forEach(t => i.installModule(t)), i)
      : i.installModule(t, ...e);
  }
}
var h = {
    updateSize: function() {
      let t, e;
      const i = this.$el;
      (e =
        void 0 !== this.params.height ? this.params.height : i[0].clientHeight),
        (0 ===
          (t =
            void 0 !== this.params.width
              ? this.params.width
              : i[0].clientWidth) &&
          this.isHorizontal()) ||
          (0 === e && this.isVertical()) ||
          ((t =
            t -
            parseInt(i.css("padding-left"), 10) -
            parseInt(i.css("padding-right"), 10)),
          (e =
            e -
            parseInt(i.css("padding-top"), 10) -
            parseInt(i.css("padding-bottom"), 10)),
          o.extend(this, {
            width: t,
            height: e,
            size: this.isHorizontal() ? t : e
          }));
    },
    updateSlides: function() {
      const t = this,
        i = t.params,
        { $wrapperEl: s, size: n, rtlTranslate: r, wrongRTL: l } = t,
        h = t.virtual && i.virtual.enabled,
        c = h ? t.virtual.slides.length : t.slides.length,
        d = s.children(`.${t.params.slideClass}`),
        u = h ? t.virtual.slides.length : d.length;
      let f = [];
      const p = [],
        v = [];
      let g = i.slidesOffsetBefore;
      "function" == typeof g && (g = i.slidesOffsetBefore.call(t));
      let m = i.slidesOffsetAfter;
      "function" == typeof m && (m = i.slidesOffsetAfter.call(t));
      const w = t.snapGrid.length,
        b = t.snapGrid.length;
      let $,
        x,
        M = i.spaceBetween,
        T = -g,
        y = 0,
        S = 0;
      if (void 0 === n) return;
      "string" == typeof M &&
        M.indexOf("%") >= 0 &&
        (M = (parseFloat(M.replace("%", "")) / 100) * n),
        (t.virtualSize = -M),
        d.css(
          r
            ? { marginLeft: "", marginTop: "" }
            : { marginRight: "", marginBottom: "" }
        ),
        i.slidesPerColumn > 1 &&
          (($ =
            Math.floor(u / i.slidesPerColumn) === u / t.params.slidesPerColumn
              ? u
              : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn),
          "auto" !== i.slidesPerView &&
            "row" === i.slidesPerColumnFill &&
            ($ = Math.max($, i.slidesPerView * i.slidesPerColumn)));
      const E = i.slidesPerColumn,
        C = $ / E,
        k = Math.floor(u / i.slidesPerColumn);
      for (let s = 0; s < u; s += 1) {
        x = 0;
        const r = d.eq(s);
        if (i.slidesPerColumn > 1) {
          let e, n, o;
          "column" === i.slidesPerColumnFill
            ? ((o = s - (n = Math.floor(s / E)) * E),
              (n > k || (n === k && o === E - 1)) &&
                (o += 1) >= E &&
                ((o = 0), (n += 1)),
              r.css({
                "-webkit-box-ordinal-group": (e = n + (o * $) / E),
                "-moz-box-ordinal-group": e,
                "-ms-flex-order": e,
                "-webkit-order": e,
                order: e
              }))
            : (n = s - (o = Math.floor(s / C)) * C),
            r
              .css(
                `margin-${t.isHorizontal() ? "top" : "left"}`,
                0 !== o && i.spaceBetween && `${i.spaceBetween}px`
              )
              .attr("data-swiper-column", n)
              .attr("data-swiper-row", o);
        }
        if ("none" !== r.css("display")) {
          if ("auto" === i.slidesPerView) {
            const s = e.getComputedStyle(r[0], null),
              n = r[0].style.transform,
              o = r[0].style.webkitTransform;
            if (
              (n && (r[0].style.transform = "none"),
              o && (r[0].style.webkitTransform = "none"),
              i.roundLengths)
            )
              x = t.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
            else if (t.isHorizontal()) {
              const t = parseFloat(s.getPropertyValue("width")),
                e = parseFloat(s.getPropertyValue("padding-left")),
                i = parseFloat(s.getPropertyValue("padding-right")),
                n = parseFloat(s.getPropertyValue("margin-left")),
                r = parseFloat(s.getPropertyValue("margin-right")),
                o = s.getPropertyValue("box-sizing");
              x = o && "border-box" === o ? t + n + r : t + e + i + n + r;
            } else {
              const t = parseFloat(s.getPropertyValue("height")),
                e = parseFloat(s.getPropertyValue("padding-top")),
                i = parseFloat(s.getPropertyValue("padding-bottom")),
                n = parseFloat(s.getPropertyValue("margin-top")),
                r = parseFloat(s.getPropertyValue("margin-bottom")),
                o = s.getPropertyValue("box-sizing");
              x = o && "border-box" === o ? t + n + r : t + e + i + n + r;
            }
            n && (r[0].style.transform = n),
              o && (r[0].style.webkitTransform = o),
              i.roundLengths && (x = Math.floor(x));
          } else
            (x = (n - (i.slidesPerView - 1) * M) / i.slidesPerView),
              i.roundLengths && (x = Math.floor(x)),
              d[s] &&
                (t.isHorizontal()
                  ? (d[s].style.width = `${x}px`)
                  : (d[s].style.height = `${x}px`));
          d[s] && (d[s].swiperSlideSize = x),
            v.push(x),
            i.centeredSlides
              ? ((T = T + x / 2 + y / 2 + M),
                0 === y && 0 !== s && (T = T - n / 2 - M),
                0 === s && (T = T - n / 2 - M),
                Math.abs(T) < 0.001 && (T = 0),
                i.roundLengths && (T = Math.floor(T)),
                S % i.slidesPerGroup == 0 && f.push(T),
                p.push(T))
              : (i.roundLengths && (T = Math.floor(T)),
                S % i.slidesPerGroup == 0 && f.push(T),
                p.push(T),
                (T = T + x + M)),
            (t.virtualSize += x + M),
            (y = x),
            (S += 1);
        }
      }
      let I;
      if (
        ((t.virtualSize = Math.max(t.virtualSize, n) + m),
        r &&
          l &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          s.css({ width: `${t.virtualSize + i.spaceBetween}px` }),
        (a.flexbox && !i.setWrapperSize) ||
          (t.isHorizontal()
            ? s.css({ width: `${t.virtualSize + i.spaceBetween}px` })
            : s.css({ height: `${t.virtualSize + i.spaceBetween}px` })),
        i.slidesPerColumn > 1 &&
          ((t.virtualSize = (x + i.spaceBetween) * $),
          (t.virtualSize =
            Math.ceil(t.virtualSize / i.slidesPerColumn) - i.spaceBetween),
          t.isHorizontal()
            ? s.css({ width: `${t.virtualSize + i.spaceBetween}px` })
            : s.css({ height: `${t.virtualSize + i.spaceBetween}px` }),
          i.centeredSlides))
      ) {
        I = [];
        for (let e = 0; e < f.length; e += 1) {
          let s = f[e];
          i.roundLengths && (s = Math.floor(s)),
            f[e] < t.virtualSize + f[0] && I.push(s);
        }
        f = I;
      }
      if (!i.centeredSlides) {
        I = [];
        for (let e = 0; e < f.length; e += 1) {
          let s = f[e];
          i.roundLengths && (s = Math.floor(s)),
            f[e] <= t.virtualSize - n && I.push(s);
        }
        (f = I),
          Math.floor(t.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 &&
            f.push(t.virtualSize - n);
      }
      if (
        (0 === f.length && (f = [0]),
        0 !== i.spaceBetween &&
          (t.isHorizontal()
            ? d.css(r ? { marginLeft: `${M}px` } : { marginRight: `${M}px` })
            : d.css({ marginBottom: `${M}px` })),
        i.centerInsufficientSlides)
      ) {
        let t = 0;
        if (
          (v.forEach(e => {
            t += e + (i.spaceBetween ? i.spaceBetween : 0);
          }),
          (t -= i.spaceBetween) < n)
        ) {
          const e = (n - t) / 2;
          f.forEach((t, i) => {
            f[i] = t - e;
          }),
            p.forEach((t, i) => {
              p[i] = t + e;
            });
        }
      }
      o.extend(t, {
        slides: d,
        snapGrid: f,
        slidesGrid: p,
        slidesSizesGrid: v
      }),
        u !== c && t.emit("slidesLengthChange"),
        f.length !== w &&
          (t.params.watchOverflow && t.checkOverflow(),
          t.emit("snapGridLengthChange")),
        p.length !== b && t.emit("slidesGridLengthChange"),
        (i.watchSlidesProgress || i.watchSlidesVisibility) &&
          t.updateSlidesOffset();
    },
    updateAutoHeight: function(t) {
      const e = this,
        i = [];
      let s,
        n = 0;
      if (
        ("number" == typeof t
          ? e.setTransition(t)
          : !0 === t && e.setTransition(e.params.speed),
        "auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
      )
        for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
          const t = e.activeIndex + s;
          if (t > e.slides.length) break;
          i.push(e.slides.eq(t)[0]);
        }
      else i.push(e.slides.eq(e.activeIndex)[0]);
      for (s = 0; s < i.length; s += 1)
        if (void 0 !== i[s]) {
          const t = i[s].offsetHeight;
          n = t > n ? t : n;
        }
      n && e.$wrapperEl.css("height", `${n}px`);
    },
    updateSlidesOffset: function() {
      const t = this,
        e = t.slides;
      for (let i = 0; i < e.length; i += 1)
        e[i].swiperSlideOffset = t.isHorizontal()
          ? e[i].offsetLeft
          : e[i].offsetTop;
    },
    updateSlidesProgress: function(t = (this && this.translate) || 0) {
      const e = this,
        i = e.params,
        { slides: n, rtlTranslate: r } = e;
      if (0 === n.length) return;
      void 0 === n[0].swiperSlideOffset && e.updateSlidesOffset();
      let o = -t;
      r && (o = t),
        n.removeClass(i.slideVisibleClass),
        (e.visibleSlidesIndexes = []),
        (e.visibleSlides = []);
      for (let t = 0; t < n.length; t += 1) {
        const s = n[t],
          a =
            (o +
              (i.centeredSlides ? e.minTranslate() : 0) -
              s.swiperSlideOffset) /
            (s.swiperSlideSize + i.spaceBetween);
        if (i.watchSlidesVisibility) {
          const r = -(o - s.swiperSlideOffset),
            a = r + e.slidesSizesGrid[t];
          ((r >= 0 && r < e.size) ||
            (a > 0 && a <= e.size) ||
            (r <= 0 && a >= e.size)) &&
            (e.visibleSlides.push(s),
            e.visibleSlidesIndexes.push(t),
            n.eq(t).addClass(i.slideVisibleClass));
        }
        s.progress = r ? -a : a;
      }
      e.visibleSlides = s(e.visibleSlides);
    },
    updateProgress: function(t = (this && this.translate) || 0) {
      const e = this.params,
        i = this.maxTranslate() - this.minTranslate();
      let { progress: s, isBeginning: n, isEnd: r } = this;
      const a = n,
        l = r;
      0 === i
        ? ((s = 0), (n = !0), (r = !0))
        : ((n = (s = (t - this.minTranslate()) / i) <= 0), (r = s >= 1)),
        o.extend(this, { progress: s, isBeginning: n, isEnd: r }),
        (e.watchSlidesProgress || e.watchSlidesVisibility) &&
          this.updateSlidesProgress(t),
        n && !a && this.emit("reachBeginning toEdge"),
        r && !l && this.emit("reachEnd toEdge"),
        ((a && !n) || (l && !r)) && this.emit("fromEdge"),
        this.emit("progress", s);
    },
    updateSlidesClasses: function() {
      const {
          slides: t,
          params: e,
          $wrapperEl: i,
          activeIndex: s,
          realIndex: n
        } = this,
        r = this.virtual && e.virtual.enabled;
      let o;
      t.removeClass(
        `${e.slideActiveClass} ${e.slideNextClass} ${e.slidePrevClass} ${e.slideDuplicateActiveClass} ${e.slideDuplicateNextClass} ${e.slideDuplicatePrevClass}`
      ),
        (o = r
          ? this.$wrapperEl.find(
              `.${e.slideClass}[data-swiper-slide-index="${s}"]`
            )
          : t.eq(s)).addClass(e.slideActiveClass),
        e.loop &&
          (o.hasClass(e.slideDuplicateClass)
            ? i
                .children(
                  `.${e.slideClass}:not(.${e.slideDuplicateClass})[data-swiper-slide-index="${n}"]`
                )
                .addClass(e.slideDuplicateActiveClass)
            : i
                .children(
                  `.${e.slideClass}.${e.slideDuplicateClass}[data-swiper-slide-index="${n}"]`
                )
                .addClass(e.slideDuplicateActiveClass));
      let a = o
        .nextAll(`.${e.slideClass}`)
        .eq(0)
        .addClass(e.slideNextClass);
      e.loop && 0 === a.length && (a = t.eq(0)).addClass(e.slideNextClass);
      let l = o
        .prevAll(`.${e.slideClass}`)
        .eq(0)
        .addClass(e.slidePrevClass);
      e.loop && 0 === l.length && (l = t.eq(-1)).addClass(e.slidePrevClass),
        e.loop &&
          (a.hasClass(e.slideDuplicateClass)
            ? i
                .children(
                  `.${e.slideClass}:not(.${
                    e.slideDuplicateClass
                  })[data-swiper-slide-index="${a.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(e.slideDuplicateNextClass)
            : i
                .children(
                  `.${e.slideClass}.${
                    e.slideDuplicateClass
                  }[data-swiper-slide-index="${a.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(e.slideDuplicateNextClass),
          l.hasClass(e.slideDuplicateClass)
            ? i
                .children(
                  `.${e.slideClass}:not(.${
                    e.slideDuplicateClass
                  })[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(e.slideDuplicatePrevClass)
            : i
                .children(
                  `.${e.slideClass}.${
                    e.slideDuplicateClass
                  }[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(e.slideDuplicatePrevClass));
    },
    updateActiveIndex: function(t) {
      const e = this.rtlTranslate ? this.translate : -this.translate,
        {
          slidesGrid: i,
          snapGrid: s,
          params: n,
          activeIndex: r,
          realIndex: a,
          snapIndex: l
        } = this;
      let h,
        c = t;
      if (void 0 === c) {
        for (let t = 0; t < i.length; t += 1)
          void 0 !== i[t + 1]
            ? e >= i[t] && e < i[t + 1] - (i[t + 1] - i[t]) / 2
              ? (c = t)
              : e >= i[t] && e < i[t + 1] && (c = t + 1)
            : e >= i[t] && (c = t);
        n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }
      if (
        ((h =
          s.indexOf(e) >= 0
            ? s.indexOf(e)
            : Math.floor(c / n.slidesPerGroup)) >= s.length &&
          (h = s.length - 1),
        c === r)
      )
        return void (
          h !== l && ((this.snapIndex = h), this.emit("snapIndexChange"))
        );
      const d = parseInt(
        this.slides.eq(c).attr("data-swiper-slide-index") || c,
        10
      );
      o.extend(this, {
        snapIndex: h,
        realIndex: d,
        previousIndex: r,
        activeIndex: c
      }),
        this.emit("activeIndexChange"),
        this.emit("snapIndexChange"),
        a !== d && this.emit("realIndexChange"),
        this.emit("slideChange");
    },
    updateClickedSlide: function(t) {
      const e = this,
        i = e.params,
        n = s(t.target).closest(`.${i.slideClass}`)[0];
      let r = !1;
      if (n)
        for (let t = 0; t < e.slides.length; t += 1)
          e.slides[t] === n && (r = !0);
      if (!n || !r)
        return (e.clickedSlide = void 0), void (e.clickedIndex = void 0);
      (e.clickedSlide = n),
        (e.clickedIndex =
          e.virtual && e.params.virtual.enabled
            ? parseInt(s(n).attr("data-swiper-slide-index"), 10)
            : s(n).index()),
        i.slideToClickedSlide &&
          void 0 !== e.clickedIndex &&
          e.clickedIndex !== e.activeIndex &&
          e.slideToClickedSlide();
    }
  },
  c = {
    getTranslate: function(t = this.isHorizontal() ? "x" : "y") {
      const { params: e, rtlTranslate: i, translate: s, $wrapperEl: n } = this;
      if (e.virtualTranslate) return i ? -s : s;
      let r = o.getTranslate(n[0], t);
      return i && (r = -r), r || 0;
    },
    setTranslate: function(t, e) {
      const { rtlTranslate: i, params: s, $wrapperEl: n, progress: r } = this;
      let o,
        l = 0,
        h = 0;
      this.isHorizontal() ? (l = i ? -t : t) : (h = t),
        s.roundLengths && ((l = Math.floor(l)), (h = Math.floor(h))),
        s.virtualTranslate ||
          n.transform(
            a.transforms3d
              ? `translate3d(${l}px, ${h}px, 0px)`
              : `translate(${l}px, ${h}px)`
          ),
        (this.previousTranslate = this.translate),
        (this.translate = this.isHorizontal() ? l : h);
      const c = this.maxTranslate() - this.minTranslate();
      (o = 0 === c ? 0 : (t - this.minTranslate()) / c) !== r &&
        this.updateProgress(t),
        this.emit("setTranslate", this.translate, e);
    },
    minTranslate: function() {
      return -this.snapGrid[0];
    },
    maxTranslate: function() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }
  },
  d = {
    slideTo: function(t = 0, e = this.params.speed, i = !0, s) {
      const n = this;
      let r = t;
      r < 0 && (r = 0);
      const {
        params: o,
        snapGrid: l,
        slidesGrid: h,
        previousIndex: c,
        activeIndex: d,
        rtlTranslate: u
      } = n;
      if (n.animating && o.preventInteractionOnTransition) return !1;
      let f = Math.floor(r / o.slidesPerGroup);
      f >= l.length && (f = l.length - 1),
        (d || o.initialSlide || 0) === (c || 0) &&
          i &&
          n.emit("beforeSlideChangeStart");
      const p = -l[f];
      if ((n.updateProgress(p), o.normalizeSlideIndex))
        for (let t = 0; t < h.length; t += 1)
          -Math.floor(100 * p) >= Math.floor(100 * h[t]) && (r = t);
      if (n.initialized && r !== d) {
        if (!n.allowSlideNext && p < n.translate && p < n.minTranslate())
          return !1;
        if (
          !n.allowSlidePrev &&
          p > n.translate &&
          p > n.maxTranslate() &&
          (d || 0) !== r
        )
          return !1;
      }
      let v;
      return (
        (v = r > d ? "next" : r < d ? "prev" : "reset"),
        (u && -p === n.translate) || (!u && p === n.translate)
          ? (n.updateActiveIndex(r),
            o.autoHeight && n.updateAutoHeight(),
            n.updateSlidesClasses(),
            "slide" !== o.effect && n.setTranslate(p),
            "reset" !== v && (n.transitionStart(i, v), n.transitionEnd(i, v)),
            !1)
          : (0 !== e && a.transition
              ? (n.setTransition(e),
                n.setTranslate(p),
                n.updateActiveIndex(r),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", e, s),
                n.transitionStart(i, v),
                n.animating ||
                  ((n.animating = !0),
                  n.onSlideToWrapperTransitionEnd ||
                    (n.onSlideToWrapperTransitionEnd = function(t) {
                      n &&
                        !n.destroyed &&
                        t.target === this &&
                        (n.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        n.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        (n.onSlideToWrapperTransitionEnd = null),
                        delete n.onSlideToWrapperTransitionEnd,
                        n.transitionEnd(i, v));
                    }),
                  n.$wrapperEl[0].addEventListener(
                    "transitionend",
                    n.onSlideToWrapperTransitionEnd
                  ),
                  n.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    n.onSlideToWrapperTransitionEnd
                  )))
              : (n.setTransition(0),
                n.setTranslate(p),
                n.updateActiveIndex(r),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", e, s),
                n.transitionStart(i, v),
                n.transitionEnd(i, v)),
            !0)
      );
    },
    slideToLoop: function(t = 0, e = this.params.speed, i = !0, s) {
      let n = t;
      return (
        this.params.loop && (n += this.loopedSlides), this.slideTo(n, e, i, s)
      );
    },
    slideNext: function(t = this.params.speed, e = !0, i) {
      const { params: s, animating: n } = this;
      return s.loop
        ? !n &&
            (this.loopFix(),
            (this._clientLeft = this.$wrapperEl[0].clientLeft),
            this.slideTo(this.activeIndex + s.slidesPerGroup, t, e, i))
        : this.slideTo(this.activeIndex + s.slidesPerGroup, t, e, i);
    },
    slidePrev: function(t = this.params.speed, e = !0, i) {
      const s = this,
        {
          params: n,
          animating: r,
          snapGrid: o,
          slidesGrid: a,
          rtlTranslate: l
        } = s;
      if (n.loop) {
        if (r) return !1;
        s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
      }
      function h(t) {
        return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t);
      }
      const c = h(l ? s.translate : -s.translate),
        d = o.map(t => h(t)),
        u = (a.map(t => h(t)), d.indexOf(c), o[d.indexOf(c) - 1]);
      let f;
      return (
        void 0 !== u && (f = a.indexOf(u)) < 0 && (f = s.activeIndex - 1),
        s.slideTo(f, t, e, i)
      );
    },
    slideReset: function(t = this.params.speed, e = !0, i) {
      return this.slideTo(this.activeIndex, t, e, i);
    },
    slideToClosest: function(t = this.params.speed, e = !0, i) {
      const s = this;
      let n = s.activeIndex;
      const r = Math.floor(n / s.params.slidesPerGroup);
      if (r < s.snapGrid.length - 1) {
        const t = s.snapGrid[r];
        (s.rtlTranslate ? s.translate : -s.translate) - t >
          (s.snapGrid[r + 1] - t) / 2 && (n = s.params.slidesPerGroup);
      }
      return s.slideTo(n, t, e, i);
    },
    slideToClickedSlide: function() {
      const t = this,
        { params: e, $wrapperEl: i } = t,
        n =
          "auto" === e.slidesPerView
            ? t.slidesPerViewDynamic()
            : e.slidesPerView;
      let r,
        a = t.clickedIndex;
      if (e.loop) {
        if (t.animating) return;
        (r = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
          e.centeredSlides
            ? a < t.loopedSlides - n / 2 ||
              a > t.slides.length - t.loopedSlides + n / 2
              ? (t.loopFix(),
                (a = i
                  .children(
                    `.${e.slideClass}[data-swiper-slide-index="${r}"]:not(.${e.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                o.nextTick(() => {
                  t.slideTo(a);
                }))
              : t.slideTo(a)
            : a > t.slides.length - n
            ? (t.loopFix(),
              (a = i
                .children(
                  `.${e.slideClass}[data-swiper-slide-index="${r}"]:not(.${e.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              o.nextTick(() => {
                t.slideTo(a);
              }))
            : t.slideTo(a);
      } else t.slideTo(a);
    }
  },
  u = {
    loopCreate: function() {
      const e = this,
        { params: i, $wrapperEl: n } = e;
      n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
      let r = n.children(`.${i.slideClass}`);
      if (i.loopFillGroupWithBlank) {
        const e = i.slidesPerGroup - (r.length % i.slidesPerGroup);
        if (e !== i.slidesPerGroup) {
          for (let r = 0; r < e; r += 1) {
            const e = s(t.createElement("div")).addClass(
              `${i.slideClass} ${i.slideBlankClass}`
            );
            n.append(e);
          }
          r = n.children(`.${i.slideClass}`);
        }
      }
      "auto" !== i.slidesPerView ||
        i.loopedSlides ||
        (i.loopedSlides = r.length),
        (e.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10)),
        (e.loopedSlides += i.loopAdditionalSlides),
        e.loopedSlides > r.length && (e.loopedSlides = r.length);
      const o = [],
        a = [];
      r.each((t, i) => {
        const n = s(i);
        t < e.loopedSlides && a.push(i),
          t < r.length && t >= r.length - e.loopedSlides && o.push(i),
          n.attr("data-swiper-slide-index", t);
      });
      for (let t = 0; t < a.length; t += 1)
        n.append(s(a[t].cloneNode(!0)).addClass(i.slideDuplicateClass));
      for (let t = o.length - 1; t >= 0; t -= 1)
        n.prepend(s(o[t].cloneNode(!0)).addClass(i.slideDuplicateClass));
    },
    loopFix: function() {
      const t = this,
        {
          params: e,
          activeIndex: i,
          slides: s,
          loopedSlides: n,
          allowSlidePrev: r,
          allowSlideNext: o,
          snapGrid: a,
          rtlTranslate: l
        } = t;
      let h;
      (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
      const c = -a[i] - t.getTranslate();
      i < n
        ? ((h = s.length - 3 * n + i),
          t.slideTo((h += n), 0, !1, !0) &&
            0 !== c &&
            t.setTranslate((l ? -t.translate : t.translate) - c))
        : (("auto" === e.slidesPerView && i >= 2 * n) || i >= s.length - n) &&
          ((h = -s.length + i + n),
          t.slideTo((h += n), 0, !1, !0) &&
            0 !== c &&
            t.setTranslate((l ? -t.translate : t.translate) - c)),
        (t.allowSlidePrev = r),
        (t.allowSlideNext = o);
    },
    loopDestroy: function() {
      const { $wrapperEl: t, params: e, slides: i } = this;
      t
        .children(
          `.${e.slideClass}.${e.slideDuplicateClass},.${e.slideClass}.${e.slideBlankClass}`
        )
        .remove(),
        i.removeAttr("data-swiper-slide-index");
    }
  },
  f = {
    setGrabCursor: function(t) {
      if (
        a.touch ||
        !this.params.simulateTouch ||
        (this.params.watchOverflow && this.isLocked)
      )
        return;
      const e = this.el;
      (e.style.cursor = "move"),
        (e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab"),
        (e.style.cursor = t ? "-moz-grabbin" : "-moz-grab"),
        (e.style.cursor = t ? "grabbing" : "grab");
    },
    unsetGrabCursor: function() {
      a.touch ||
        (this.params.watchOverflow && this.isLocked) ||
        (this.el.style.cursor = "");
    }
  },
  p = {
    appendSlide: function(t) {
      const { $wrapperEl: e, params: i } = this;
      if ((i.loop && this.loopDestroy(), "object" == typeof t && "length" in t))
        for (let i = 0; i < t.length; i += 1) t[i] && e.append(t[i]);
      else e.append(t);
      i.loop && this.loopCreate(), (i.observer && a.observer) || this.update();
    },
    prependSlide: function(t) {
      const { params: e, $wrapperEl: i, activeIndex: s } = this;
      e.loop && this.loopDestroy();
      let n = s + 1;
      if ("object" == typeof t && "length" in t) {
        for (let e = 0; e < t.length; e += 1) t[e] && i.prepend(t[e]);
        n = s + t.length;
      } else i.prepend(t);
      e.loop && this.loopCreate(),
        (e.observer && a.observer) || this.update(),
        this.slideTo(n, 0, !1);
    },
    addSlide: function(t, e) {
      const i = this,
        { $wrapperEl: s, params: n, activeIndex: r } = i;
      let o = r;
      n.loop &&
        ((o -= i.loopedSlides),
        i.loopDestroy(),
        (i.slides = s.children(`.${n.slideClass}`)));
      const l = i.slides.length;
      if (t <= 0) return void i.prependSlide(e);
      if (t >= l) return void i.appendSlide(e);
      let h = o > t ? o + 1 : o;
      const c = [];
      for (let e = l - 1; e >= t; e -= 1) {
        const t = i.slides.eq(e);
        t.remove(), c.unshift(t);
      }
      if ("object" == typeof e && "length" in e) {
        for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
        h = o > t ? o + e.length : o;
      } else s.append(e);
      for (let t = 0; t < c.length; t += 1) s.append(c[t]);
      n.loop && i.loopCreate(),
        (n.observer && a.observer) || i.update(),
        i.slideTo(n.loop ? h + i.loopedSlides : h, 0, !1);
    },
    removeSlide: function(t) {
      const e = this,
        { params: i, $wrapperEl: s, activeIndex: n } = e;
      let r = n;
      i.loop &&
        ((r -= e.loopedSlides),
        e.loopDestroy(),
        (e.slides = s.children(`.${i.slideClass}`)));
      let o,
        l = r;
      if ("object" == typeof t && "length" in t) {
        for (let i = 0; i < t.length; i += 1)
          e.slides[(o = t[i])] && e.slides.eq(o).remove(), o < l && (l -= 1);
        l = Math.max(l, 0);
      } else
        e.slides[(o = t)] && e.slides.eq(o).remove(),
          o < l && (l -= 1),
          (l = Math.max(l, 0));
      i.loop && e.loopCreate(),
        (i.observer && a.observer) || e.update(),
        e.slideTo(i.loop ? l + e.loopedSlides : l, 0, !1);
    },
    removeAllSlides: function() {
      const t = this,
        e = [];
      for (let i = 0; i < t.slides.length; i += 1) e.push(i);
      t.removeSlide(e);
    }
  };
const v = (function() {
  const i = e.navigator.userAgent,
    s = {
      ios: !1,
      android: !1,
      androidChrome: !1,
      desktop: !1,
      windows: !1,
      iphone: !1,
      ipod: !1,
      ipad: !1,
      cordova: e.cordova || e.phonegap,
      phonegap: e.cordova || e.phonegap
    },
    n = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
    r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
    o = i.match(/(iPad).*OS\s([\d_]+)/),
    a = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    l = !o && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  if (
    (n && ((s.os = "windows"), (s.osVersion = n[2]), (s.windows = !0)),
    r &&
      !n &&
      ((s.os = "android"),
      (s.osVersion = r[2]),
      (s.android = !0),
      (s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0)),
    (o || l || a) && ((s.os = "ios"), (s.ios = !0)),
    l && !a && ((s.osVersion = l[2].replace(/_/g, ".")), (s.iphone = !0)),
    o && ((s.osVersion = o[2].replace(/_/g, ".")), (s.ipad = !0)),
    a &&
      ((s.osVersion = a[3] ? a[3].replace(/_/g, ".") : null), (s.iphone = !0)),
    s.ios &&
      s.osVersion &&
      i.indexOf("Version/") >= 0 &&
      "10" === s.osVersion.split(".")[0] &&
      (s.osVersion = i
        .toLowerCase()
        .split("version/")[1]
        .split(" ")[0]),
    (s.desktop = !(s.os || s.android || s.webView)),
    (s.webView = (l || o || a) && i.match(/.*AppleWebKit(?!.*Safari)/i)),
    s.os && "ios" === s.os)
  ) {
    const e = s.osVersion.split("."),
      i = t.querySelector('meta[name="viewport"]');
    s.minimalUi =
      !s.webView &&
      (a || l) &&
      (1 * e[0] == 7 ? 1 * e[1] >= 1 : 1 * e[0] > 7) &&
      i &&
      i.getAttribute("content").indexOf("minimal-ui") >= 0;
  }
  return (s.pixelRatio = e.devicePixelRatio || 1), s;
})();
function g() {
  const t = this,
    { params: e, el: i } = t;
  if (i && 0 === i.offsetWidth) return;
  e.breakpoints && t.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = t;
  if (
    ((t.allowSlideNext = !0),
    (t.allowSlidePrev = !0),
    t.updateSize(),
    t.updateSlides(),
    e.freeMode)
  ) {
    const i = Math.min(
      Math.max(t.translate, t.maxTranslate()),
      t.minTranslate()
    );
    t.setTranslate(i),
      t.updateActiveIndex(),
      t.updateSlidesClasses(),
      e.autoHeight && t.updateAutoHeight();
  } else
    t.updateSlidesClasses(),
      t.slideTo(
        ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
          t.isEnd &&
          !t.params.centeredSlides
          ? t.slides.length - 1
          : t.activeIndex,
        0,
        !1,
        !0
      );
  (t.allowSlidePrev = n),
    (t.allowSlideNext = s),
    t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
}
var m = {
    attachEvents: function() {
      const i = this,
        { params: n, touchEvents: r, el: l, wrapperEl: h } = i;
      (i.onTouchStart = function(i) {
        const n = this,
          r = n.touchEventsData,
          { params: a, touches: l } = n;
        if (n.animating && a.preventInteractionOnTransition) return;
        let h = i;
        if (
          (h.originalEvent && (h = h.originalEvent),
          (r.isTouchEvent = "touchstart" === h.type),
          !r.isTouchEvent && "which" in h && 3 === h.which)
        )
          return;
        if (!r.isTouchEvent && "button" in h && h.button > 0) return;
        if (r.isTouched && r.isMoved) return;
        if (
          a.noSwiping &&
          s(h.target).closest(
            a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`
          )[0]
        )
          return void (n.allowClick = !0);
        if (a.swipeHandler && !s(h).closest(a.swipeHandler)[0]) return;
        (l.currentX =
          "touchstart" === h.type ? h.targetTouches[0].pageX : h.pageX),
          (l.currentY =
            "touchstart" === h.type ? h.targetTouches[0].pageY : h.pageY);
        const c = l.currentX,
          d = l.currentY,
          u = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
        if (
          (!a.edgeSwipeDetection && !a.iOSEdgeSwipeDetection) ||
          !(c <= u || c >= e.screen.width - u)
        ) {
          if (
            (o.extend(r, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0
            }),
            (l.startX = c),
            (l.startY = d),
            (r.touchStartTime = o.now()),
            (n.allowClick = !0),
            n.updateSize(),
            (n.swipeDirection = void 0),
            a.threshold > 0 && (r.allowThresholdMove = !1),
            "touchstart" !== h.type)
          ) {
            let e = !0;
            s(h.target).is(r.formElements) && (e = !1),
              t.activeElement &&
                s(t.activeElement).is(r.formElements) &&
                t.activeElement !== h.target &&
                t.activeElement.blur();
            const i = e && n.allowTouchMove && a.touchStartPreventDefault;
            (a.touchStartForcePreventDefault || i) && h.preventDefault();
          }
          n.emit("touchStart", h);
        }
      }.bind(i)),
        (i.onTouchMove = function(e) {
          const i = this,
            n = i.touchEventsData,
            { params: r, touches: a, rtlTranslate: l } = i;
          let h = e;
          if ((h.originalEvent && (h = h.originalEvent), !n.isTouched))
            return void (
              n.startMoving &&
              n.isScrolling &&
              i.emit("touchMoveOpposite", h)
            );
          if (n.isTouchEvent && "mousemove" === h.type) return;
          const c = "touchmove" === h.type ? h.targetTouches[0].pageX : h.pageX,
            d = "touchmove" === h.type ? h.targetTouches[0].pageY : h.pageY;
          if (h.preventedByNestedSwiper)
            return (a.startX = c), void (a.startY = d);
          if (!i.allowTouchMove)
            return (
              (i.allowClick = !1),
              void (
                n.isTouched &&
                (o.extend(a, {
                  startX: c,
                  startY: d,
                  currentX: c,
                  currentY: d
                }),
                (n.touchStartTime = o.now()))
              )
            );
          if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
            if (i.isVertical()) {
              if (
                (d < a.startY && i.translate <= i.maxTranslate()) ||
                (d > a.startY && i.translate >= i.minTranslate())
              )
                return (n.isTouched = !1), void (n.isMoved = !1);
            } else if (
              (c < a.startX && i.translate <= i.maxTranslate()) ||
              (c > a.startX && i.translate >= i.minTranslate())
            )
              return;
          if (
            n.isTouchEvent &&
            t.activeElement &&
            h.target === t.activeElement &&
            s(h.target).is(n.formElements)
          )
            return (n.isMoved = !0), void (i.allowClick = !1);
          if (
            (n.allowTouchCallbacks && i.emit("touchMove", h),
            h.targetTouches && h.targetTouches.length > 1)
          )
            return;
          (a.currentX = c), (a.currentY = d);
          const u = a.currentX - a.startX,
            f = a.currentY - a.startY;
          if (
            i.params.threshold &&
            Math.sqrt(u ** 2 + f ** 2) < i.params.threshold
          )
            return;
          if (void 0 === n.isScrolling) {
            let t;
            (i.isHorizontal() && a.currentY === a.startY) ||
            (i.isVertical() && a.currentX === a.startX)
              ? (n.isScrolling = !1)
              : u * u + f * f >= 25 &&
                ((t = (180 * Math.atan2(Math.abs(f), Math.abs(u))) / Math.PI),
                (n.isScrolling = i.isHorizontal()
                  ? t > r.touchAngle
                  : 90 - t > r.touchAngle));
          }
          if (
            (n.isScrolling && i.emit("touchMoveOpposite", h),
            void 0 === n.startMoving &&
              ((a.currentX === a.startX && a.currentY === a.startY) ||
                (n.startMoving = !0)),
            n.isScrolling)
          )
            return void (n.isTouched = !1);
          if (!n.startMoving) return;
          (i.allowClick = !1),
            h.preventDefault(),
            r.touchMoveStopPropagation && !r.nested && h.stopPropagation(),
            n.isMoved ||
              (r.loop && i.loopFix(),
              (n.startTranslate = i.getTranslate()),
              i.setTransition(0),
              i.animating &&
                i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
              (n.allowMomentumBounce = !1),
              !r.grabCursor ||
                (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
                i.setGrabCursor(!0),
              i.emit("sliderFirstMove", h)),
            i.emit("sliderMove", h),
            (n.isMoved = !0);
          let p = i.isHorizontal() ? u : f;
          (a.diff = p),
            (p *= r.touchRatio),
            l && (p = -p),
            (i.swipeDirection = p > 0 ? "prev" : "next"),
            (n.currentTranslate = p + n.startTranslate);
          let v = !0,
            g = r.resistanceRatio;
          if (
            (r.touchReleaseOnEdges && (g = 0),
            p > 0 && n.currentTranslate > i.minTranslate()
              ? ((v = !1),
                r.resistance &&
                  (n.currentTranslate =
                    i.minTranslate() -
                    1 +
                    (-i.minTranslate() + n.startTranslate + p) ** g))
              : p < 0 &&
                n.currentTranslate < i.maxTranslate() &&
                ((v = !1),
                r.resistance &&
                  (n.currentTranslate =
                    i.maxTranslate() +
                    1 -
                    (i.maxTranslate() - n.startTranslate - p) ** g)),
            v && (h.preventedByNestedSwiper = !0),
            !i.allowSlideNext &&
              "next" === i.swipeDirection &&
              n.currentTranslate < n.startTranslate &&
              (n.currentTranslate = n.startTranslate),
            !i.allowSlidePrev &&
              "prev" === i.swipeDirection &&
              n.currentTranslate > n.startTranslate &&
              (n.currentTranslate = n.startTranslate),
            r.threshold > 0)
          ) {
            if (!(Math.abs(p) > r.threshold || n.allowThresholdMove))
              return void (n.currentTranslate = n.startTranslate);
            if (!n.allowThresholdMove)
              return (
                (n.allowThresholdMove = !0),
                (a.startX = a.currentX),
                (a.startY = a.currentY),
                (n.currentTranslate = n.startTranslate),
                void (a.diff = i.isHorizontal()
                  ? a.currentX - a.startX
                  : a.currentY - a.startY)
              );
          }
          r.followFinger &&
            ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) &&
              (i.updateActiveIndex(), i.updateSlidesClasses()),
            r.freeMode &&
              (0 === n.velocities.length &&
                n.velocities.push({
                  position: a[i.isHorizontal() ? "startX" : "startY"],
                  time: n.touchStartTime
                }),
              n.velocities.push({
                position: a[i.isHorizontal() ? "currentX" : "currentY"],
                time: o.now()
              })),
            i.updateProgress(n.currentTranslate),
            i.setTranslate(n.currentTranslate));
        }.bind(i)),
        (i.onTouchEnd = function(t) {
          const e = this,
            i = e.touchEventsData,
            {
              params: s,
              touches: n,
              rtlTranslate: r,
              $wrapperEl: a,
              slidesGrid: l,
              snapGrid: h
            } = e;
          let c = t;
          if (
            (c.originalEvent && (c = c.originalEvent),
            i.allowTouchCallbacks && e.emit("touchEnd", c),
            (i.allowTouchCallbacks = !1),
            !i.isTouched)
          )
            return (
              i.isMoved && s.grabCursor && e.setGrabCursor(!1),
              (i.isMoved = !1),
              void (i.startMoving = !1)
            );
          s.grabCursor &&
            i.isMoved &&
            i.isTouched &&
            (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) &&
            e.setGrabCursor(!1);
          const d = o.now(),
            u = d - i.touchStartTime;
          if (
            (e.allowClick &&
              (e.updateClickedSlide(c),
              e.emit("tap", c),
              u < 300 &&
                d - i.lastClickTime > 300 &&
                (i.clickTimeout && clearTimeout(i.clickTimeout),
                (i.clickTimeout = o.nextTick(() => {
                  e && !e.destroyed && e.emit("click", c);
                }, 300))),
              u < 300 &&
                d - i.lastClickTime < 300 &&
                (i.clickTimeout && clearTimeout(i.clickTimeout),
                e.emit("doubleTap", c))),
            (i.lastClickTime = o.now()),
            o.nextTick(() => {
              e.destroyed || (e.allowClick = !0);
            }),
            !i.isTouched ||
              !i.isMoved ||
              !e.swipeDirection ||
              0 === n.diff ||
              i.currentTranslate === i.startTranslate)
          )
            return (
              (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
            );
          let f;
          if (
            ((i.isTouched = !1),
            (i.isMoved = !1),
            (i.startMoving = !1),
            (f = s.followFinger
              ? r
                ? e.translate
                : -e.translate
              : -i.currentTranslate),
            s.freeMode)
          ) {
            if (f < -e.minTranslate()) return void e.slideTo(e.activeIndex);
            if (f > -e.maxTranslate())
              return void e.slideTo(
                e.slides.length < h.length ? h.length - 1 : e.slides.length - 1
              );
            if (s.freeModeMomentum) {
              if (i.velocities.length > 1) {
                const t = i.velocities.pop(),
                  n = i.velocities.pop(),
                  r = t.time - n.time;
                (e.velocity = (t.position - n.position) / r),
                  (e.velocity /= 2),
                  Math.abs(e.velocity) < s.freeModeMinimumVelocity &&
                    (e.velocity = 0),
                  (r > 150 || o.now() - t.time > 300) && (e.velocity = 0);
              } else e.velocity = 0;
              (e.velocity *= s.freeModeMomentumVelocityRatio),
                (i.velocities.length = 0);
              let t = 1e3 * s.freeModeMomentumRatio,
                n = e.translate + e.velocity * t;
              r && (n = -n);
              let l,
                c = !1;
              const d =
                20 * Math.abs(e.velocity) * s.freeModeMomentumBounceRatio;
              let u;
              if (n < e.maxTranslate())
                s.freeModeMomentumBounce
                  ? (n + e.maxTranslate() < -d && (n = e.maxTranslate() - d),
                    (l = e.maxTranslate()),
                    (c = !0),
                    (i.allowMomentumBounce = !0))
                  : (n = e.maxTranslate()),
                  s.loop && s.centeredSlides && (u = !0);
              else if (n > e.minTranslate())
                s.freeModeMomentumBounce
                  ? (n - e.minTranslate() > d && (n = e.minTranslate() + d),
                    (l = e.minTranslate()),
                    (c = !0),
                    (i.allowMomentumBounce = !0))
                  : (n = e.minTranslate()),
                  s.loop && s.centeredSlides && (u = !0);
              else if (s.freeModeSticky) {
                let t;
                for (let e = 0; e < h.length; e += 1)
                  if (h[e] > -n) {
                    t = e;
                    break;
                  }
                n = -(n =
                  Math.abs(h[t] - n) < Math.abs(h[t - 1] - n) ||
                  "next" === e.swipeDirection
                    ? h[t]
                    : h[t - 1]);
              }
              if (
                (u &&
                  e.once("transitionEnd", () => {
                    e.loopFix();
                  }),
                0 !== e.velocity)
              )
                t = r
                  ? Math.abs((-n - e.translate) / e.velocity)
                  : Math.abs((n - e.translate) / e.velocity);
              else if (s.freeModeSticky) return void e.slideToClosest();
              s.freeModeMomentumBounce && c
                ? (e.updateProgress(l),
                  e.setTransition(t),
                  e.setTranslate(n),
                  e.transitionStart(!0, e.swipeDirection),
                  (e.animating = !0),
                  a.transitionEnd(() => {
                    e &&
                      !e.destroyed &&
                      i.allowMomentumBounce &&
                      (e.emit("momentumBounce"),
                      e.setTransition(s.speed),
                      e.setTranslate(l),
                      a.transitionEnd(() => {
                        e && !e.destroyed && e.transitionEnd();
                      }));
                  }))
                : e.velocity
                ? (e.updateProgress(n),
                  e.setTransition(t),
                  e.setTranslate(n),
                  e.transitionStart(!0, e.swipeDirection),
                  e.animating ||
                    ((e.animating = !0),
                    a.transitionEnd(() => {
                      e && !e.destroyed && e.transitionEnd();
                    })))
                : e.updateProgress(n),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            } else if (s.freeModeSticky) return void e.slideToClosest();
            return void (
              (!s.freeModeMomentum || u >= s.longSwipesMs) &&
              (e.updateProgress(),
              e.updateActiveIndex(),
              e.updateSlidesClasses())
            );
          }
          let p = 0,
            v = e.slidesSizesGrid[0];
          for (let t = 0; t < l.length; t += s.slidesPerGroup)
            void 0 !== l[t + s.slidesPerGroup]
              ? f >= l[t] &&
                f < l[t + s.slidesPerGroup] &&
                ((p = t), (v = l[t + s.slidesPerGroup] - l[t]))
              : f >= l[t] && ((p = t), (v = l[l.length - 1] - l[l.length - 2]));
          const g = (f - l[p]) / v;
          if (u > s.longSwipesMs) {
            if (!s.longSwipes) return void e.slideTo(e.activeIndex);
            "next" === e.swipeDirection &&
              e.slideTo(g >= s.longSwipesRatio ? p + s.slidesPerGroup : p),
              "prev" === e.swipeDirection &&
                e.slideTo(g > 1 - s.longSwipesRatio ? p + s.slidesPerGroup : p);
          } else {
            if (!s.shortSwipes) return void e.slideTo(e.activeIndex);
            "next" === e.swipeDirection && e.slideTo(p + s.slidesPerGroup),
              "prev" === e.swipeDirection && e.slideTo(p);
          }
        }.bind(i)),
        (i.onClick = function(t) {
          this.allowClick ||
            (this.params.preventClicks && t.preventDefault(),
            this.params.preventClicksPropagation &&
              this.animating &&
              (t.stopPropagation(), t.stopImmediatePropagation()));
        }.bind(i));
      const c = "container" === n.touchEventsTarget ? l : h,
        d = !!n.nested;
      if (a.touch || (!a.pointerEvents && !a.prefixedPointerEvents)) {
        if (a.touch) {
          const t = !(
            "touchstart" !== r.start ||
            !a.passiveListener ||
            !n.passiveListeners
          ) && { passive: !0, capture: !1 };
          c.addEventListener(r.start, i.onTouchStart, t),
            c.addEventListener(
              r.move,
              i.onTouchMove,
              a.passiveListener ? { passive: !1, capture: d } : d
            ),
            c.addEventListener(r.end, i.onTouchEnd, t);
        }
        ((n.simulateTouch && !v.ios && !v.android) ||
          (n.simulateTouch && !a.touch && v.ios)) &&
          (c.addEventListener("mousedown", i.onTouchStart, !1),
          t.addEventListener("mousemove", i.onTouchMove, d),
          t.addEventListener("mouseup", i.onTouchEnd, !1));
      } else
        c.addEventListener(r.start, i.onTouchStart, !1),
          t.addEventListener(r.move, i.onTouchMove, d),
          t.addEventListener(r.end, i.onTouchEnd, !1);
      (n.preventClicks || n.preventClicksPropagation) &&
        c.addEventListener("click", i.onClick, !0),
        i.on(
          v.ios || v.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          g,
          !0
        );
    },
    detachEvents: function() {
      const e = this,
        { params: i, touchEvents: s, el: n, wrapperEl: r } = e,
        o = "container" === i.touchEventsTarget ? n : r,
        l = !!i.nested;
      if (a.touch || (!a.pointerEvents && !a.prefixedPointerEvents)) {
        if (a.touch) {
          const t = !(
            "onTouchStart" !== s.start ||
            !a.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 };
          o.removeEventListener(s.start, e.onTouchStart, t),
            o.removeEventListener(s.move, e.onTouchMove, l),
            o.removeEventListener(s.end, e.onTouchEnd, t);
        }
        ((i.simulateTouch && !v.ios && !v.android) ||
          (i.simulateTouch && !a.touch && v.ios)) &&
          (o.removeEventListener("mousedown", e.onTouchStart, !1),
          t.removeEventListener("mousemove", e.onTouchMove, l),
          t.removeEventListener("mouseup", e.onTouchEnd, !1));
      } else
        o.removeEventListener(s.start, e.onTouchStart, !1),
          t.removeEventListener(s.move, e.onTouchMove, l),
          t.removeEventListener(s.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        o.removeEventListener("click", e.onClick, !0),
        e.off(
          v.ios || v.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          g
        );
    }
  },
  w = {
    setBreakpoint: function() {
      const t = this,
        { activeIndex: e, initialized: i, loopedSlides: s = 0, params: n } = t,
        r = n.breakpoints;
      if (!r || (r && 0 === Object.keys(r).length)) return;
      const a = t.getBreakpoint(r);
      if (a && t.currentBreakpoint !== a) {
        const l = a in r ? r[a] : void 0;
        l &&
          ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(t => {
            const e = l[t];
            void 0 !== e &&
              (l[t] =
                "slidesPerView" !== t || ("AUTO" !== e && "auto" !== e)
                  ? "slidesPerView" === t
                    ? parseFloat(e)
                    : parseInt(e, 10)
                  : "auto");
          });
        const h = l || t.originalParams,
          c = n.loop && h.slidesPerView !== n.slidesPerView;
        o.extend(t.params, h),
          o.extend(t, {
            allowTouchMove: t.params.allowTouchMove,
            allowSlideNext: t.params.allowSlideNext,
            allowSlidePrev: t.params.allowSlidePrev
          }),
          (t.currentBreakpoint = a),
          c &&
            i &&
            (t.loopDestroy(),
            t.loopCreate(),
            t.updateSlides(),
            t.slideTo(e - s + t.loopedSlides, 0, !1)),
          t.emit("breakpoint", h);
      }
    },
    getBreakpoint: function(t) {
      const i = this;
      if (!t) return;
      let s = !1;
      const n = [];
      Object.keys(t).forEach(t => {
        n.push(t);
      }),
        n.sort((t, e) => parseInt(t, 10) - parseInt(e, 10));
      for (let t = 0; t < n.length; t += 1) {
        const r = n[t];
        i.params.breakpointsInverse
          ? r <= e.innerWidth && (s = r)
          : r >= e.innerWidth && !s && (s = r);
      }
      return s || "max";
    }
  };
const b = {
  isIE:
    !!e.navigator.userAgent.match(/Trident/g) ||
    !!e.navigator.userAgent.match(/MSIE/g),
  isEdge: !!e.navigator.userAgent.match(/Edge/g),
  isSafari: (function() {
    const t = e.navigator.userAgent.toLowerCase();
    return (
      t.indexOf("safari") >= 0 &&
      t.indexOf("chrome") < 0 &&
      t.indexOf("android") < 0
    );
  })(),
  isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
    e.navigator.userAgent
  )
};
var $ = {
  init: !0,
  direction: "horizontal",
  touchEventsTarget: "container",
  initialSlide: 0,
  speed: 300,
  preventInteractionOnTransition: !1,
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  freeMode: !1,
  freeModeMomentum: !0,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: !0,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: !1,
  freeModeMinimumVelocity: 0.02,
  autoHeight: !1,
  setWrapperSize: !1,
  virtualTranslate: !1,
  effect: "slide",
  breakpoints: void 0,
  breakpointsInverse: !1,
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: "column",
  slidesPerGroup: 1,
  centeredSlides: !1,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  watchOverflow: !1,
  roundLengths: !1,
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 0,
  touchMoveStopPropagation: !0,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  uniqueNavElements: !0,
  resistance: !0,
  resistanceRatio: 0.85,
  watchSlidesProgress: !1,
  watchSlidesVisibility: !1,
  grabCursor: !1,
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  preloadImages: !0,
  updateOnImagesReady: !0,
  loop: !1,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: !1,
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  passiveListeners: !0,
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
  runCallbacksOnInit: !0
};
const x = {
    update: h,
    translate: c,
    transition: {
      setTransition: function(t, e) {
        this.$wrapperEl.transition(t), this.emit("setTransition", t, e);
      },
      transitionStart: function(t = !0, e) {
        const i = this,
          { activeIndex: s, params: n, previousIndex: r } = i;
        n.autoHeight && i.updateAutoHeight();
        let o = e;
        if (
          (o || (o = s > r ? "next" : s < r ? "prev" : "reset"),
          i.emit("transitionStart"),
          t && s !== r)
        ) {
          if ("reset" === o) return void i.emit("slideResetTransitionStart");
          i.emit("slideChangeTransitionStart"),
            i.emit(
              "next" === o
                ? "slideNextTransitionStart"
                : "slidePrevTransitionStart"
            );
        }
      },
      transitionEnd: function(t = !0, e) {
        const i = this,
          { activeIndex: s, previousIndex: n } = i;
        (i.animating = !1), i.setTransition(0);
        let r = e;
        if (
          (r || (r = s > n ? "next" : s < n ? "prev" : "reset"),
          i.emit("transitionEnd"),
          t && s !== n)
        ) {
          if ("reset" === r) return void i.emit("slideResetTransitionEnd");
          i.emit("slideChangeTransitionEnd"),
            i.emit(
              "next" === r ? "slideNextTransitionEnd" : "slidePrevTransitionEnd"
            );
        }
      }
    },
    slide: d,
    loop: u,
    grabCursor: f,
    manipulation: p,
    events: m,
    breakpoints: w,
    checkOverflow: {
      checkOverflow: function() {
        const t = this.isLocked;
        (this.isLocked = 1 === this.snapGrid.length),
          (this.allowSlideNext = !this.isLocked),
          (this.allowSlidePrev = !this.isLocked),
          t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
          t &&
            t !== this.isLocked &&
            ((this.isEnd = !1), this.navigation.update());
      }
    },
    classes: {
      addClasses: function() {
        const { classNames: t, params: e, rtl: i, $el: s } = this,
          n = [];
        n.push(e.direction),
          e.freeMode && n.push("free-mode"),
          a.flexbox || n.push("no-flexbox"),
          e.autoHeight && n.push("autoheight"),
          i && n.push("rtl"),
          e.slidesPerColumn > 1 && n.push("multirow"),
          v.android && n.push("android"),
          v.ios && n.push("ios"),
          (b.isIE || b.isEdge) &&
            (a.pointerEvents || a.prefixedPointerEvents) &&
            n.push(`wp8-${e.direction}`),
          n.forEach(i => {
            t.push(e.containerModifierClass + i);
          }),
          s.addClass(t.join(" "));
      },
      removeClasses: function() {
        const { $el: t, classNames: e } = this;
        t.removeClass(e.join(" "));
      }
    },
    images: {
      loadImage: function(t, i, s, n, r, o) {
        let a;
        function l() {
          o && o();
        }
        t.complete && r
          ? l()
          : i
          ? (((a = new e.Image()).onload = l),
            (a.onerror = l),
            n && (a.sizes = n),
            s && (a.srcset = s),
            i && (a.src = i))
          : l();
      },
      preloadImages: function() {
        const t = this;
        function e() {
          null != t &&
            t &&
            !t.destroyed &&
            (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
            t.imagesLoaded === t.imagesToLoad.length &&
              (t.params.updateOnImagesReady && t.update(),
              t.emit("imagesReady")));
        }
        t.imagesToLoad = t.$el.find("img");
        for (let i = 0; i < t.imagesToLoad.length; i += 1) {
          const s = t.imagesToLoad[i];
          t.loadImage(
            s,
            s.currentSrc || s.getAttribute("src"),
            s.srcset || s.getAttribute("srcset"),
            s.sizes || s.getAttribute("sizes"),
            !0,
            e
          );
        }
      }
    }
  },
  M = {};
class T extends l {
  constructor(...t) {
    let e, i;
    1 === t.length && t[0].constructor && t[0].constructor === Object
      ? (i = t[0])
      : ([e, i] = t),
      i || (i = {}),
      (i = o.extend({}, i)),
      e && !i.el && (i.el = e),
      super(i),
      Object.keys(x).forEach(t => {
        Object.keys(x[t]).forEach(e => {
          T.prototype[e] || (T.prototype[e] = x[t][e]);
        });
      });
    const n = this;
    void 0 === n.modules && (n.modules = {}),
      Object.keys(n.modules).forEach(t => {
        const e = n.modules[t];
        if (e.params) {
          const t = Object.keys(e.params)[0],
            s = e.params[t];
          if ("object" != typeof s || null === s) return;
          if (!(t in i && "enabled" in s)) return;
          !0 === i[t] && (i[t] = { enabled: !0 }),
            "object" != typeof i[t] || "enabled" in i[t] || (i[t].enabled = !0),
            i[t] || (i[t] = { enabled: !1 });
        }
      });
    const r = o.extend({}, $);
    n.useModulesParams(r),
      (n.params = o.extend({}, r, M, i)),
      (n.originalParams = o.extend({}, n.params)),
      (n.passedParams = o.extend({}, i)),
      (n.$ = s);
    const l = s(n.params.el);
    if (!(e = l[0])) return;
    if (l.length > 1) {
      const t = [];
      return (
        l.each((e, s) => {
          const n = o.extend({}, i, { el: s });
          t.push(new T(n));
        }),
        t
      );
    }
    (e.swiper = n), l.data("swiper", n);
    const h = l.children(`.${n.params.wrapperClass}`);
    return (
      o.extend(n, {
        $el: l,
        el: e,
        $wrapperEl: h,
        wrapperEl: h[0],
        classNames: [],
        slides: s(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: () => "horizontal" === n.params.direction,
        isVertical: () => "vertical" === n.params.direction,
        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === l.css("direction"),
        rtlTranslate:
          "horizontal" === n.params.direction &&
          ("rtl" === e.dir.toLowerCase() || "rtl" === l.css("direction")),
        wrongRTL: "-webkit-box" === h.css("display"),
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: n.params.allowSlideNext,
        allowSlidePrev: n.params.allowSlidePrev,
        touchEvents: (function() {
          const t = ["touchstart", "touchmove", "touchend"];
          let e = ["mousedown", "mousemove", "mouseup"];
          return (
            a.pointerEvents
              ? (e = ["pointerdown", "pointermove", "pointerup"])
              : a.prefixedPointerEvents &&
                (e = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
            (n.touchEventsTouch = { start: t[0], move: t[1], end: t[2] }),
            (n.touchEventsDesktop = { start: e[0], move: e[1], end: e[2] }),
            a.touch || !n.params.simulateTouch
              ? n.touchEventsTouch
              : n.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          formElements: "input, select, option, textarea, button, video",
          lastClickTime: o.now(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: n.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0
      }),
      n.useModules(),
      n.params.init && n.init(),
      n
    );
  }
  slidesPerViewDynamic() {
    const {
      params: t,
      slides: e,
      slidesGrid: i,
      size: s,
      activeIndex: n
    } = this;
    let r = 1;
    if (t.centeredSlides) {
      let t,
        i = e[n].swiperSlideSize;
      for (let o = n + 1; o < e.length; o += 1)
        e[o] && !t && ((r += 1), (i += e[o].swiperSlideSize) > s && (t = !0));
      for (let o = n - 1; o >= 0; o -= 1)
        e[o] && !t && ((r += 1), (i += e[o].swiperSlideSize) > s && (t = !0));
    } else
      for (let t = n + 1; t < e.length; t += 1) i[t] - i[n] < s && (r += 1);
    return r;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: e, params: i } = t;
    function s() {
      const e = Math.min(
        Math.max(
          t.rtlTranslate ? -1 * t.translate : t.translate,
          t.maxTranslate()
        ),
        t.minTranslate()
      );
      t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let n;
    i.breakpoints && t.setBreakpoint(),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses(),
      t.params.freeMode
        ? (s(), t.params.autoHeight && t.updateAutoHeight())
        : (n = t.slideTo(
            ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) &&
              t.isEnd &&
              !t.params.centeredSlides
              ? t.slides.length - 1
              : t.activeIndex,
            0,
            !1,
            !0
          )) || s(),
      i.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
      t.emit("update");
  }
  init() {
    this.initialized ||
      (this.emit("beforeInit"),
      this.params.breakpoints && this.setBreakpoint(),
      this.addClasses(),
      this.params.loop && this.loopCreate(),
      this.updateSize(),
      this.updateSlides(),
      this.params.watchOverflow && this.checkOverflow(),
      this.params.grabCursor && this.setGrabCursor(),
      this.params.preloadImages && this.preloadImages(),
      this.slideTo(
        this.params.loop
          ? this.params.initialSlide + this.loopedSlides
          : this.params.initialSlide,
        0,
        this.params.runCallbacksOnInit
      ),
      this.attachEvents(),
      (this.initialized = !0),
      this.emit("init"));
  }
  destroy(t = !0, e = !0) {
    const i = this,
      { params: s, $el: n, $wrapperEl: r, slides: a } = i;
    return void 0 === i.params || i.destroyed
      ? null
      : (i.emit("beforeDestroy"),
        (i.initialized = !1),
        i.detachEvents(),
        s.loop && i.loopDestroy(),
        e &&
          (i.removeClasses(),
          n.removeAttr("style"),
          r.removeAttr("style"),
          a &&
            a.length &&
            a
              .removeClass(
                [
                  s.slideVisibleClass,
                  s.slideActiveClass,
                  s.slideNextClass,
                  s.slidePrevClass
                ].join(" ")
              )
              .removeAttr("style")
              .removeAttr("data-swiper-slide-index")
              .removeAttr("data-swiper-column")
              .removeAttr("data-swiper-row")),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach(t => {
          i.off(t);
        }),
        !1 !== t &&
          ((i.$el[0].swiper = null),
          i.$el.data("swiper", null),
          o.deleteProps(i)),
        (i.destroyed = !0),
        null);
  }
  static extendDefaults(t) {
    o.extend(M, t);
  }
  static get extendedDefaults() {
    return M;
  }
  static get defaults() {
    return $;
  }
  static get Class() {
    return l;
  }
  static get $() {
    return s;
  }
}
var y = { name: "device", proto: { device: v }, static: { device: v } },
  S = { name: "support", proto: { support: a }, static: { support: a } },
  E = { name: "browser", proto: { browser: b }, static: { browser: b } },
  C = {
    name: "resize",
    create() {
      const t = this;
      o.extend(t, {
        resize: {
          resizeHandler() {
            t &&
              !t.destroyed &&
              t.initialized &&
              (t.emit("beforeResize"), t.emit("resize"));
          },
          orientationChangeHandler() {
            t && !t.destroyed && t.initialized && t.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init() {
        e.addEventListener("resize", this.resize.resizeHandler),
          e.addEventListener(
            "orientationchange",
            this.resize.orientationChangeHandler
          );
      },
      destroy() {
        e.removeEventListener("resize", this.resize.resizeHandler),
          e.removeEventListener(
            "orientationchange",
            this.resize.orientationChangeHandler
          );
      }
    }
  };
const k = {
  func: e.MutationObserver || e.WebkitMutationObserver,
  attach(t, i = {}) {
    const s = this,
      n = new (0, k.func)(t => {
        if (1 === t.length) return void s.emit("observerUpdate", t[0]);
        const i = function() {
          s.emit("observerUpdate", t[0]);
        };
        e.requestAnimationFrame
          ? e.requestAnimationFrame(i)
          : e.setTimeout(i, 0);
      });
    n.observe(t, {
      attributes: void 0 === i.attributes || i.attributes,
      childList: void 0 === i.childList || i.childList,
      characterData: void 0 === i.characterData || i.characterData
    }),
      s.observer.observers.push(n);
  },
  init() {
    const t = this;
    if (a.observer && t.params.observer) {
      if (t.params.observeParents) {
        const e = t.$el.parents();
        for (let i = 0; i < e.length; i += 1) t.observer.attach(e[i]);
      }
      t.observer.attach(t.$el[0], { childList: t.params.observeSlideChildren }),
        t.observer.attach(t.$wrapperEl[0], { attributes: !1 });
    }
  },
  destroy() {
    this.observer.observers.forEach(t => {
      t.disconnect();
    }),
      (this.observer.observers = []);
  }
};
var I = {
  name: "observer",
  params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
  create() {
    o.extend(this, {
      observer: {
        init: k.init.bind(this),
        attach: k.attach.bind(this),
        destroy: k.destroy.bind(this),
        observers: []
      }
    });
  },
  on: {
    init() {
      this.observer.init();
    },
    destroy() {
      this.observer.destroy();
    }
  }
};
const z = {
    lastScrollTime: o.now(),
    event:
      e.navigator.userAgent.indexOf("firefox") > -1
        ? "DOMMouseScroll"
        : (function() {
            let e = "onwheel" in t;
            if (!e) {
              const i = t.createElement("div");
              i.setAttribute("onwheel", "return;"),
                (e = "function" == typeof i.onwheel);
            }
            return (
              !e &&
                t.implementation &&
                t.implementation.hasFeature &&
                !0 !== t.implementation.hasFeature("", "") &&
                (e = t.implementation.hasFeature("Events.wheel", "3.0")),
              e
            );
          })()
        ? "wheel"
        : "mousewheel",
    normalize(t) {
      let e = 0,
        i = 0,
        s = 0,
        n = 0;
      return (
        "detail" in t && (i = t.detail),
        "wheelDelta" in t && (i = -t.wheelDelta / 120),
        "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120),
        "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120),
        "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((e = i), (i = 0)),
        (s = 10 * e),
        (n = 10 * i),
        "deltaY" in t && (n = t.deltaY),
        "deltaX" in t && (s = t.deltaX),
        (s || n) &&
          t.deltaMode &&
          (1 === t.deltaMode
            ? ((s *= 40), (n *= 40))
            : ((s *= 800), (n *= 800))),
        s && !e && (e = s < 1 ? -1 : 1),
        n && !i && (i = n < 1 ? -1 : 1),
        { spinX: e, spinY: i, pixelX: s, pixelY: n }
      );
    },
    handleMouseEnter() {
      this.mouseEntered = !0;
    },
    handleMouseLeave() {
      this.mouseEntered = !1;
    },
    handle(t) {
      let i = t;
      const s = this,
        n = s.params.mousewheel;
      if (!s.mouseEntered && !n.releaseOnEdges) return !0;
      i.originalEvent && (i = i.originalEvent);
      let r = 0;
      const a = s.rtlTranslate ? -1 : 1,
        l = z.normalize(i);
      if (n.forceToAxis)
        if (s.isHorizontal()) {
          if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
          r = l.pixelX * a;
        } else {
          if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
          r = l.pixelY;
        }
      else
        r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * a : -l.pixelY;
      if (0 === r) return !0;
      if ((n.invert && (r = -r), s.params.freeMode)) {
        s.params.loop && s.loopFix();
        let t = s.getTranslate() + r * n.sensitivity;
        const e = s.isBeginning,
          a = s.isEnd;
        if (
          (t >= s.minTranslate() && (t = s.minTranslate()),
          t <= s.maxTranslate() && (t = s.maxTranslate()),
          s.setTransition(0),
          s.setTranslate(t),
          s.updateProgress(),
          s.updateActiveIndex(),
          s.updateSlidesClasses(),
          ((!e && s.isBeginning) || (!a && s.isEnd)) && s.updateSlidesClasses(),
          s.params.freeModeSticky &&
            (clearTimeout(s.mousewheel.timeout),
            (s.mousewheel.timeout = o.nextTick(() => {
              s.slideToClosest();
            }, 300))),
          s.emit("scroll", i),
          s.params.autoplay &&
            s.params.autoplayDisableOnInteraction &&
            s.autoplay.stop(),
          t === s.minTranslate() || t === s.maxTranslate())
        )
          return !0;
      } else {
        if (o.now() - s.mousewheel.lastScrollTime > 60)
          if (r < 0)
            if ((s.isEnd && !s.params.loop) || s.animating) {
              if (n.releaseOnEdges) return !0;
            } else s.slideNext(), s.emit("scroll", i);
          else if ((s.isBeginning && !s.params.loop) || s.animating) {
            if (n.releaseOnEdges) return !0;
          } else s.slidePrev(), s.emit("scroll", i);
        s.mousewheel.lastScrollTime = new e.Date().getTime();
      }
      return i.preventDefault ? i.preventDefault() : (i.returnValue = !1), !1;
    },
    enable() {
      if (!z.event) return !1;
      if (this.mousewheel.enabled) return !1;
      let t = this.$el;
      return (
        "container" !== this.params.mousewheel.eventsTarged &&
          (t = s(this.params.mousewheel.eventsTarged)),
        t.on("mouseenter", this.mousewheel.handleMouseEnter),
        t.on("mouseleave", this.mousewheel.handleMouseLeave),
        t.on(z.event, this.mousewheel.handle),
        (this.mousewheel.enabled = !0),
        !0
      );
    },
    disable() {
      if (!z.event) return !1;
      if (!this.mousewheel.enabled) return !1;
      let t = this.$el;
      return (
        "container" !== this.params.mousewheel.eventsTarged &&
          (t = s(this.params.mousewheel.eventsTarged)),
        t.off(z.event, this.mousewheel.handle),
        (this.mousewheel.enabled = !1),
        !0
      );
    }
  },
  O = {
    update() {
      const t = this,
        e = t.rtl,
        i = t.params.pagination;
      if (
        !i.el ||
        !t.pagination.el ||
        !t.pagination.$el ||
        0 === t.pagination.$el.length
      )
        return;
      const n =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
        r = t.pagination.$el;
      let o;
      const a = t.params.loop
        ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
        : t.snapGrid.length;
      if (
        (t.params.loop
          ? ((o = Math.ceil(
              (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
            )) >
              n - 1 - 2 * t.loopedSlides && (o -= n - 2 * t.loopedSlides),
            o > a - 1 && (o -= a),
            o < 0 && "bullets" !== t.params.paginationType && (o = a + o))
          : (o = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
        "bullets" === i.type &&
          t.pagination.bullets &&
          t.pagination.bullets.length > 0)
      ) {
        const n = t.pagination.bullets;
        let a, l, h;
        if (
          (i.dynamicBullets &&
            ((t.pagination.bulletSize = n
              .eq(0)
              [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
            r.css(
              t.isHorizontal() ? "width" : "height",
              `${t.pagination.bulletSize * (i.dynamicMainBullets + 4)}px`
            ),
            i.dynamicMainBullets > 1 &&
              void 0 !== t.previousIndex &&
              ((t.pagination.dynamicBulletIndex += o - t.previousIndex),
              t.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1
                ? (t.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1)
                : t.pagination.dynamicBulletIndex < 0 &&
                  (t.pagination.dynamicBulletIndex = 0)),
            (h =
              ((l =
                (a = o - t.pagination.dynamicBulletIndex) +
                (Math.min(n.length, i.dynamicMainBullets) - 1)) +
                a) /
              2)),
          n.removeClass(
            `${i.bulletActiveClass} ${i.bulletActiveClass}-next ${i.bulletActiveClass}-next-next ${i.bulletActiveClass}-prev ${i.bulletActiveClass}-prev-prev ${i.bulletActiveClass}-main`
          ),
          r.length > 1)
        )
          n.each((t, e) => {
            const n = s(e),
              r = n.index();
            r === o && n.addClass(i.bulletActiveClass),
              i.dynamicBullets &&
                (r >= a && r <= l && n.addClass(`${i.bulletActiveClass}-main`),
                r === a &&
                  n
                    .prev()
                    .addClass(`${i.bulletActiveClass}-prev`)
                    .prev()
                    .addClass(`${i.bulletActiveClass}-prev-prev`),
                r === l &&
                  n
                    .next()
                    .addClass(`${i.bulletActiveClass}-next`)
                    .next()
                    .addClass(`${i.bulletActiveClass}-next-next`));
          });
        else if ((n.eq(o).addClass(i.bulletActiveClass), i.dynamicBullets)) {
          const t = n.eq(a),
            e = n.eq(l);
          for (let t = a; t <= l; t += 1)
            n.eq(t).addClass(`${i.bulletActiveClass}-main`);
          t
            .prev()
            .addClass(`${i.bulletActiveClass}-prev`)
            .prev()
            .addClass(`${i.bulletActiveClass}-prev-prev`),
            e
              .next()
              .addClass(`${i.bulletActiveClass}-next`)
              .next()
              .addClass(`${i.bulletActiveClass}-next-next`);
        }
        if (i.dynamicBullets) {
          const s = Math.min(n.length, i.dynamicMainBullets + 4),
            r =
              (t.pagination.bulletSize * s - t.pagination.bulletSize) / 2 -
              h * t.pagination.bulletSize,
            o = e ? "right" : "left";
          n.css(t.isHorizontal() ? o : "top", `${r}px`);
        }
      }
      if (
        ("fraction" === i.type &&
          (r.find(`.${i.currentClass}`).text(i.formatFractionCurrent(o + 1)),
          r.find(`.${i.totalClass}`).text(i.formatFractionTotal(a))),
        "progressbar" === i.type)
      ) {
        let e;
        e = i.progressbarOpposite
          ? t.isHorizontal()
            ? "vertical"
            : "horizontal"
          : t.isHorizontal()
          ? "horizontal"
          : "vertical";
        const s = (o + 1) / a;
        let n = 1,
          l = 1;
        "horizontal" === e ? (n = s) : (l = s),
          r
            .find(`.${i.progressbarFillClass}`)
            .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${l})`)
            .transition(t.params.speed);
      }
      "custom" === i.type && i.renderCustom
        ? (r.html(i.renderCustom(t, o + 1, a)),
          t.emit("paginationRender", t, r[0]))
        : t.emit("paginationUpdate", t, r[0]),
        r[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](
          i.lockClass
        );
    },
    render() {
      const t = this,
        e = t.params.pagination;
      if (
        !e.el ||
        !t.pagination.el ||
        !t.pagination.$el ||
        0 === t.pagination.$el.length
      )
        return;
      const i = t.pagination.$el;
      let s = "";
      if ("bullets" === e.type) {
        const n = t.params.loop
          ? Math.ceil(
              ((t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length) -
                2 * t.loopedSlides) /
                t.params.slidesPerGroup
            )
          : t.snapGrid.length;
        for (let i = 0; i < n; i += 1)
          s += e.renderBullet
            ? e.renderBullet.call(t, i, e.bulletClass)
            : `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
        i.html(s), (t.pagination.bullets = i.find(`.${e.bulletClass}`));
      }
      "fraction" === e.type &&
        ((s = e.renderFraction
          ? e.renderFraction.call(t, e.currentClass, e.totalClass)
          : `<span class="${e.currentClass}"></span>` +
            " / " +
            `<span class="${e.totalClass}"></span>`),
        i.html(s)),
        "progressbar" === e.type &&
          ((s = e.renderProgressbar
            ? e.renderProgressbar.call(t, e.progressbarFillClass)
            : `<span class="${e.progressbarFillClass}"></span>`),
          i.html(s)),
        "custom" !== e.type && t.emit("paginationRender", t.pagination.$el[0]);
    },
    init() {
      const t = this,
        e = t.params.pagination;
      if (!e.el) return;
      let i = s(e.el);
      0 !== i.length &&
        (t.params.uniqueNavElements &&
          "string" == typeof e.el &&
          i.length > 1 &&
          1 === t.$el.find(e.el).length &&
          (i = t.$el.find(e.el)),
        "bullets" === e.type && e.clickable && i.addClass(e.clickableClass),
        i.addClass(e.modifierClass + e.type),
        "bullets" === e.type &&
          e.dynamicBullets &&
          (i.addClass(`${e.modifierClass}${e.type}-dynamic`),
          (t.pagination.dynamicBulletIndex = 0),
          e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
        "progressbar" === e.type &&
          e.progressbarOpposite &&
          i.addClass(e.progressbarOppositeClass),
        e.clickable &&
          i.on("click", `.${e.bulletClass}`, function(e) {
            e.preventDefault();
            let i = s(this).index() * t.params.slidesPerGroup;
            t.params.loop && (i += t.loopedSlides), t.slideTo(i);
          }),
        o.extend(t.pagination, { $el: i, el: i[0] }));
    },
    destroy() {
      const t = this.params.pagination;
      if (
        !t.el ||
        !this.pagination.el ||
        !this.pagination.$el ||
        0 === this.pagination.$el.length
      )
        return;
      const e = this.pagination.$el;
      e.removeClass(t.hiddenClass),
        e.removeClass(t.modifierClass + t.type),
        this.pagination.bullets &&
          this.pagination.bullets.removeClass(t.bulletActiveClass),
        t.clickable && e.off("click", `.${t.bulletClass}`);
    }
  };
var P = {
  name: "pagination",
  params: {
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: t => t,
      formatFractionTotal: t => t,
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
  create() {
    o.extend(this, {
      pagination: {
        init: O.init.bind(this),
        render: O.render.bind(this),
        update: O.update.bind(this),
        destroy: O.destroy.bind(this),
        dynamicBulletIndex: 0
      }
    });
  },
  on: {
    init() {
      this.pagination.init(),
        this.pagination.render(),
        this.pagination.update();
    },
    activeIndexChange() {
      this.params.loop
        ? this.pagination.update()
        : void 0 === this.snapIndex && this.pagination.update();
    },
    snapIndexChange() {
      this.params.loop || this.pagination.update();
    },
    slidesLengthChange() {
      this.params.loop && (this.pagination.render(), this.pagination.update());
    },
    snapGridLengthChange() {
      this.params.loop || (this.pagination.render(), this.pagination.update());
    },
    destroy() {
      this.pagination.destroy();
    },
    click(t) {
      this.params.pagination.el &&
        this.params.pagination.hideOnClick &&
        this.pagination.$el.length > 0 &&
        !s(t.target).hasClass(this.params.pagination.bulletClass) &&
        this.pagination.$el.toggleClass(this.params.pagination.hiddenClass);
    }
  }
};
const D = {
  setTranslate() {
    if (!this.params.scrollbar.el || !this.scrollbar.el) return;
    const { scrollbar: t, rtlTranslate: e, progress: i } = this,
      { dragSize: s, trackSize: n, $dragEl: r, $el: o } = t,
      l = this.params.scrollbar;
    let h = s,
      c = (n - s) * i;
    e
      ? (c = -c) > 0
        ? ((h = s - c), (c = 0))
        : -c + s > n && (h = n + c)
      : c < 0
      ? ((h = s + c), (c = 0))
      : c + s > n && (h = n - c),
      this.isHorizontal()
        ? (r.transform(
            a.transforms3d ? `translate3d(${c}px, 0, 0)` : `translateX(${c}px)`
          ),
          (r[0].style.width = `${h}px`))
        : (r.transform(
            a.transforms3d
              ? `translate3d(0px, ${c}px, 0)`
              : `translateY(${c}px)`
          ),
          (r[0].style.height = `${h}px`)),
      l.hide &&
        (clearTimeout(this.scrollbar.timeout),
        (o[0].style.opacity = 1),
        (this.scrollbar.timeout = setTimeout(() => {
          (o[0].style.opacity = 0), o.transition(400);
        }, 1e3)));
  },
  setTransition(t) {
    this.params.scrollbar.el &&
      this.scrollbar.el &&
      this.scrollbar.$dragEl.transition(t);
  },
  updateSize() {
    if (!this.params.scrollbar.el || !this.scrollbar.el) return;
    const { scrollbar: t } = this,
      { $dragEl: e, $el: i } = t;
    (e[0].style.width = ""), (e[0].style.height = "");
    const s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
      n = this.size / this.virtualSize,
      r = n * (s / this.size);
    let a;
    (a =
      "auto" === this.params.scrollbar.dragSize
        ? s * n
        : parseInt(this.params.scrollbar.dragSize, 10)),
      this.isHorizontal()
        ? (e[0].style.width = `${a}px`)
        : (e[0].style.height = `${a}px`),
      (i[0].style.display = n >= 1 ? "none" : ""),
      this.params.scrollbarHide && (i[0].style.opacity = 0),
      o.extend(t, { trackSize: s, divider: n, moveDivider: r, dragSize: a }),
      t.$el[
        this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"
      ](this.params.scrollbar.lockClass);
  },
  setDragPosition(t) {
    const { scrollbar: e, rtlTranslate: i } = this,
      { $el: s, dragSize: n, trackSize: r } = e;
    let o, a;
    (a =
      ((o = this.isHorizontal()
        ? "touchstart" === t.type || "touchmove" === t.type
          ? t.targetTouches[0].pageX
          : t.pageX || t.clientX
        : "touchstart" === t.type || "touchmove" === t.type
        ? t.targetTouches[0].pageY
        : t.pageY || t.clientY) -
        s.offset()[this.isHorizontal() ? "left" : "top"] -
        n / 2) /
      (r - n)),
      (a = Math.max(Math.min(a, 1), 0)),
      i && (a = 1 - a);
    const l =
      this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * a;
    this.updateProgress(l),
      this.setTranslate(l),
      this.updateActiveIndex(),
      this.updateSlidesClasses();
  },
  onDragStart(t) {
    const e = this.params.scrollbar,
      { scrollbar: i, $wrapperEl: s } = this,
      { $el: n, $dragEl: r } = i;
    (this.scrollbar.isTouched = !0),
      t.preventDefault(),
      t.stopPropagation(),
      s.transition(100),
      r.transition(100),
      i.setDragPosition(t),
      clearTimeout(this.scrollbar.dragTimeout),
      n.transition(0),
      e.hide && n.css("opacity", 1),
      this.emit("scrollbarDragStart", t);
  },
  onDragMove(t) {
    const { scrollbar: e, $wrapperEl: i } = this,
      { $el: s, $dragEl: n } = e;
    this.scrollbar.isTouched &&
      (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
      e.setDragPosition(t),
      i.transition(0),
      s.transition(0),
      n.transition(0),
      this.emit("scrollbarDragMove", t));
  },
  onDragEnd(t) {
    const e = this.params.scrollbar,
      { scrollbar: i } = this,
      { $el: s } = i;
    this.scrollbar.isTouched &&
      ((this.scrollbar.isTouched = !1),
      e.hide &&
        (clearTimeout(this.scrollbar.dragTimeout),
        (this.scrollbar.dragTimeout = o.nextTick(() => {
          s.css("opacity", 0), s.transition(400);
        }, 1e3))),
      this.emit("scrollbarDragEnd", t),
      e.snapOnRelease && this.slideToClosest());
  },
  enableDraggable() {
    if (!this.params.scrollbar.el) return;
    const {
        scrollbar: e,
        touchEventsTouch: i,
        touchEventsDesktop: s,
        params: n
      } = this,
      r = e.$el[0],
      o = !(!a.passiveListener || !n.passiveListeners) && {
        passive: !1,
        capture: !1
      },
      l = !(!a.passiveListener || !n.passiveListeners) && {
        passive: !0,
        capture: !1
      };
    a.touch
      ? (r.addEventListener(i.start, this.scrollbar.onDragStart, o),
        r.addEventListener(i.move, this.scrollbar.onDragMove, o),
        r.addEventListener(i.end, this.scrollbar.onDragEnd, l))
      : (r.addEventListener(s.start, this.scrollbar.onDragStart, o),
        t.addEventListener(s.move, this.scrollbar.onDragMove, o),
        t.addEventListener(s.end, this.scrollbar.onDragEnd, l));
  },
  disableDraggable() {
    if (!this.params.scrollbar.el) return;
    const {
        scrollbar: e,
        touchEventsTouch: i,
        touchEventsDesktop: s,
        params: n
      } = this,
      r = e.$el[0],
      o = !(!a.passiveListener || !n.passiveListeners) && {
        passive: !1,
        capture: !1
      },
      l = !(!a.passiveListener || !n.passiveListeners) && {
        passive: !0,
        capture: !1
      };
    a.touch
      ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, o),
        r.removeEventListener(i.move, this.scrollbar.onDragMove, o),
        r.removeEventListener(i.end, this.scrollbar.onDragEnd, l))
      : (r.removeEventListener(s.start, this.scrollbar.onDragStart, o),
        t.removeEventListener(s.move, this.scrollbar.onDragMove, o),
        t.removeEventListener(s.end, this.scrollbar.onDragEnd, l));
  },
  init() {
    if (!this.params.scrollbar.el) return;
    const { scrollbar: t, $el: e } = this,
      i = this.params.scrollbar;
    let n = s(i.el);
    this.params.uniqueNavElements &&
      "string" == typeof i.el &&
      n.length > 1 &&
      1 === e.find(i.el).length &&
      (n = e.find(i.el));
    let r = n.find(`.${this.params.scrollbar.dragClass}`);
    0 === r.length &&
      ((r = s(`<div class="${this.params.scrollbar.dragClass}"></div>`)),
      n.append(r)),
      o.extend(t, { $el: n, el: n[0], $dragEl: r, dragEl: r[0] }),
      i.draggable && t.enableDraggable();
  },
  destroy() {
    this.scrollbar.disableDraggable();
  }
};
var F = {
  name: "scrollbar",
  params: {
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag"
    }
  },
  create() {
    o.extend(this, {
      scrollbar: {
        init: D.init.bind(this),
        destroy: D.destroy.bind(this),
        updateSize: D.updateSize.bind(this),
        setTranslate: D.setTranslate.bind(this),
        setTransition: D.setTransition.bind(this),
        enableDraggable: D.enableDraggable.bind(this),
        disableDraggable: D.disableDraggable.bind(this),
        setDragPosition: D.setDragPosition.bind(this),
        onDragStart: D.onDragStart.bind(this),
        onDragMove: D.onDragMove.bind(this),
        onDragEnd: D.onDragEnd.bind(this),
        isTouched: !1,
        timeout: null,
        dragTimeout: null
      }
    });
  },
  on: {
    init() {
      this.scrollbar.init(),
        this.scrollbar.updateSize(),
        this.scrollbar.setTranslate();
    },
    update() {
      this.scrollbar.updateSize();
    },
    resize() {
      this.scrollbar.updateSize();
    },
    observerUpdate() {
      this.scrollbar.updateSize();
    },
    setTranslate() {
      this.scrollbar.setTranslate();
    },
    setTransition(t) {
      this.scrollbar.setTransition(t);
    },
    destroy() {
      this.scrollbar.destroy();
    }
  }
};
const j = {
  getDistanceBetweenTouches: t =>
    t.targetTouches.length < 2
      ? 1
      : Math.sqrt(
          (t.targetTouches[1].pageX - t.targetTouches[0].pageX) ** 2 +
            (t.targetTouches[1].pageY - t.targetTouches[0].pageY) ** 2
        ),
  onGestureStart(t) {
    const e = this.params.zoom,
      i = this.zoom,
      { gesture: n } = i;
    if (((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !a.gestures)) {
      if (
        "touchstart" !== t.type ||
        ("touchstart" === t.type && t.targetTouches.length < 2)
      )
        return;
      (i.fakeGestureTouched = !0),
        (n.scaleStart = j.getDistanceBetweenTouches(t));
    }
    (n.$slideEl && n.$slideEl.length) ||
    ((n.$slideEl = s(t.target).closest(".swiper-slide")),
    0 === n.$slideEl.length && (n.$slideEl = this.slides.eq(this.activeIndex)),
    (n.$imageEl = n.$slideEl.find("img, svg, canvas")),
    (n.$imageWrapEl = n.$imageEl.parent(`.${e.containerClass}`)),
    (n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio),
    0 !== n.$imageWrapEl.length)
      ? (n.$imageEl.transition(0), (this.zoom.isScaling = !0))
      : (n.$imageEl = void 0);
  },
  onGestureChange(t) {
    const e = this.params.zoom,
      i = this.zoom,
      { gesture: s } = i;
    if (!a.gestures) {
      if (
        "touchmove" !== t.type ||
        ("touchmove" === t.type && t.targetTouches.length < 2)
      )
        return;
      (i.fakeGestureMoved = !0), (s.scaleMove = j.getDistanceBetweenTouches(t));
    }
    s.$imageEl &&
      0 !== s.$imageEl.length &&
      ((i.scale = a.gestures
        ? t.scale * i.currentScale
        : (s.scaleMove / s.scaleStart) * i.currentScale),
      i.scale > s.maxRatio &&
        (i.scale = s.maxRatio - 1 + (i.scale - s.maxRatio + 1) ** 0.5),
      i.scale < e.minRatio &&
        (i.scale = e.minRatio + 1 - (e.minRatio - i.scale + 1) ** 0.5),
      s.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`));
  },
  onGestureEnd(t) {
    const e = this.params.zoom,
      i = this.zoom,
      { gesture: s } = i;
    if (!a.gestures) {
      if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
      if (
        "touchend" !== t.type ||
        ("touchend" === t.type && t.changedTouches.length < 2 && !v.android)
      )
        return;
      (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
    }
    s.$imageEl &&
      0 !== s.$imageEl.length &&
      ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), e.minRatio)),
      s.$imageEl
        .transition(this.params.speed)
        .transform(`translate3d(0,0,0) scale(${i.scale})`),
      (i.currentScale = i.scale),
      (i.isScaling = !1),
      1 === i.scale && (s.$slideEl = void 0));
  },
  onTouchStart(t) {
    const e = this.zoom,
      { gesture: i, image: s } = e;
    i.$imageEl &&
      0 !== i.$imageEl.length &&
      (s.isTouched ||
        (v.android && t.preventDefault(),
        (s.isTouched = !0),
        (s.touchesStart.x =
          "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX),
        (s.touchesStart.y =
          "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY)));
  },
  onTouchMove(t) {
    const e = this,
      i = e.zoom,
      { gesture: s, image: n, velocity: r } = i;
    if (!s.$imageEl || 0 === s.$imageEl.length) return;
    if (((e.allowClick = !1), !n.isTouched || !s.$slideEl)) return;
    n.isMoved ||
      ((n.width = s.$imageEl[0].offsetWidth),
      (n.height = s.$imageEl[0].offsetHeight),
      (n.startX = o.getTranslate(s.$imageWrapEl[0], "x") || 0),
      (n.startY = o.getTranslate(s.$imageWrapEl[0], "y") || 0),
      (s.slideWidth = s.$slideEl[0].offsetWidth),
      (s.slideHeight = s.$slideEl[0].offsetHeight),
      s.$imageWrapEl.transition(0),
      e.rtl && ((n.startX = -n.startX), (n.startY = -n.startY)));
    const a = n.width * i.scale,
      l = n.height * i.scale;
    if (!(a < s.slideWidth && l < s.slideHeight)) {
      if (
        ((n.minX = Math.min(s.slideWidth / 2 - a / 2, 0)),
        (n.maxX = -n.minX),
        (n.minY = Math.min(s.slideHeight / 2 - l / 2, 0)),
        (n.maxY = -n.minY),
        (n.touchesCurrent.x =
          "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX),
        (n.touchesCurrent.y =
          "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY),
        !n.isMoved && !i.isScaling)
      ) {
        if (
          e.isHorizontal() &&
          ((Math.floor(n.minX) === Math.floor(n.startX) &&
            n.touchesCurrent.x < n.touchesStart.x) ||
            (Math.floor(n.maxX) === Math.floor(n.startX) &&
              n.touchesCurrent.x > n.touchesStart.x))
        )
          return void (n.isTouched = !1);
        if (
          !e.isHorizontal() &&
          ((Math.floor(n.minY) === Math.floor(n.startY) &&
            n.touchesCurrent.y < n.touchesStart.y) ||
            (Math.floor(n.maxY) === Math.floor(n.startY) &&
              n.touchesCurrent.y > n.touchesStart.y))
        )
          return void (n.isTouched = !1);
      }
      t.preventDefault(),
        t.stopPropagation(),
        (n.isMoved = !0),
        (n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX),
        (n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY),
        n.currentX < n.minX &&
          (n.currentX = n.minX + 1 - (n.minX - n.currentX + 1) ** 0.8),
        n.currentX > n.maxX &&
          (n.currentX = n.maxX - 1 + (n.currentX - n.maxX + 1) ** 0.8),
        n.currentY < n.minY &&
          (n.currentY = n.minY + 1 - (n.minY - n.currentY + 1) ** 0.8),
        n.currentY > n.maxY &&
          (n.currentY = n.maxY - 1 + (n.currentY - n.maxY + 1) ** 0.8),
        r.prevPositionX || (r.prevPositionX = n.touchesCurrent.x),
        r.prevPositionY || (r.prevPositionY = n.touchesCurrent.y),
        r.prevTime || (r.prevTime = Date.now()),
        (r.x =
          (n.touchesCurrent.x - r.prevPositionX) /
          (Date.now() - r.prevTime) /
          2),
        (r.y =
          (n.touchesCurrent.y - r.prevPositionY) /
          (Date.now() - r.prevTime) /
          2),
        Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
        Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
        (r.prevPositionX = n.touchesCurrent.x),
        (r.prevPositionY = n.touchesCurrent.y),
        (r.prevTime = Date.now()),
        s.$imageWrapEl.transform(
          `translate3d(${n.currentX}px, ${n.currentY}px,0)`
        );
    }
  },
  onTouchEnd() {
    const t = this.zoom,
      { gesture: e, image: i, velocity: s } = t;
    if (!e.$imageEl || 0 === e.$imageEl.length) return;
    if (!i.isTouched || !i.isMoved)
      return (i.isTouched = !1), void (i.isMoved = !1);
    (i.isTouched = !1), (i.isMoved = !1);
    let n = 300,
      r = 300;
    const o = i.currentX + s.x * n,
      a = i.currentY + s.y * r;
    0 !== s.x && (n = Math.abs((o - i.currentX) / s.x)),
      0 !== s.y && (r = Math.abs((a - i.currentY) / s.y));
    const l = Math.max(n, r);
    (i.currentX = o), (i.currentY = a);
    const h = i.height * t.scale;
    (i.minX = Math.min(e.slideWidth / 2 - (i.width * t.scale) / 2, 0)),
      (i.maxX = -i.minX),
      (i.minY = Math.min(e.slideHeight / 2 - h / 2, 0)),
      (i.maxY = -i.minY),
      (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
      (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
      e.$imageWrapEl
        .transition(l)
        .transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`);
  },
  onTransitionEnd() {
    const t = this.zoom,
      { gesture: e } = t;
    e.$slideEl &&
      this.previousIndex !== this.activeIndex &&
      (e.$imageEl.transform("translate3d(0,0,0) scale(1)"),
      e.$imageWrapEl.transform("translate3d(0,0,0)"),
      (t.scale = 1),
      (t.currentScale = 1),
      (e.$slideEl = void 0),
      (e.$imageEl = void 0),
      (e.$imageWrapEl = void 0));
  },
  toggle(t) {
    const e = this.zoom;
    e.scale && 1 !== e.scale ? e.out() : e.in(t);
  },
  in(t) {
    const e = this.zoom,
      i = this.params.zoom,
      { gesture: n, image: r } = e;
    if (
      (n.$slideEl ||
        ((n.$slideEl = this.clickedSlide
          ? s(this.clickedSlide)
          : this.slides.eq(this.activeIndex)),
        (n.$imageEl = n.$slideEl.find("img, svg, canvas")),
        (n.$imageWrapEl = n.$imageEl.parent(`.${i.containerClass}`))),
      !n.$imageEl || 0 === n.$imageEl.length)
    )
      return;
    let o, a, l, h, c, d, u, f, p, v, g, m, w, b, $, x, M, T;
    n.$slideEl.addClass(`${i.zoomedSlideClass}`),
      void 0 === r.touchesStart.x && t
        ? ((o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX),
          (a = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY))
        : ((o = r.touchesStart.x), (a = r.touchesStart.y)),
      (e.scale = n.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
      (e.currentScale = n.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
      t
        ? ((M = n.$slideEl[0].offsetWidth),
          (T = n.$slideEl[0].offsetHeight),
          (c = (l = n.$slideEl.offset().left) + M / 2 - o),
          (d = (h = n.$slideEl.offset().top) + T / 2 - a),
          (m = (v = n.$imageEl[0].offsetHeight) * e.scale),
          (w = Math.min(
            M / 2 - (g = (p = n.$imageEl[0].offsetWidth) * e.scale) / 2,
            0
          )),
          (b = Math.min(T / 2 - m / 2, 0)),
          (u = c * e.scale) < w && (u = w),
          u > ($ = -w) && (u = $),
          (f = d * e.scale) < b && (f = b),
          f > (x = -b) && (f = x))
        : ((u = 0), (f = 0)),
      n.$imageWrapEl.transition(300).transform(`translate3d(${u}px, ${f}px,0)`),
      n.$imageEl
        .transition(300)
        .transform(`translate3d(0,0,0) scale(${e.scale})`);
  },
  out() {
    const t = this.zoom,
      e = this.params.zoom,
      { gesture: i } = t;
    i.$slideEl ||
      ((i.$slideEl = this.clickedSlide
        ? s(this.clickedSlide)
        : this.slides.eq(this.activeIndex)),
      (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
      (i.$imageWrapEl = i.$imageEl.parent(`.${e.containerClass}`))),
      i.$imageEl &&
        0 !== i.$imageEl.length &&
        ((t.scale = 1),
        (t.currentScale = 1),
        i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
        i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
        i.$slideEl.removeClass(`${e.zoomedSlideClass}`),
        (i.$slideEl = void 0));
  },
  enable() {
    const t = this.zoom;
    if (t.enabled) return;
    t.enabled = !0;
    const e = !(
      "touchstart" !== this.touchEvents.start ||
      !a.passiveListener ||
      !this.params.passiveListeners
    ) && { passive: !0, capture: !1 };
    a.gestures
      ? (this.$wrapperEl.on(
          "gesturestart",
          ".swiper-slide",
          t.onGestureStart,
          e
        ),
        this.$wrapperEl.on(
          "gesturechange",
          ".swiper-slide",
          t.onGestureChange,
          e
        ),
        this.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, e))
      : "touchstart" === this.touchEvents.start &&
        (this.$wrapperEl.on(
          this.touchEvents.start,
          ".swiper-slide",
          t.onGestureStart,
          e
        ),
        this.$wrapperEl.on(
          this.touchEvents.move,
          ".swiper-slide",
          t.onGestureChange,
          e
        ),
        this.$wrapperEl.on(
          this.touchEvents.end,
          ".swiper-slide",
          t.onGestureEnd,
          e
        )),
      this.$wrapperEl.on(
        this.touchEvents.move,
        `.${this.params.zoom.containerClass}`,
        t.onTouchMove
      );
  },
  disable() {
    const t = this.zoom;
    if (!t.enabled) return;
    this.zoom.enabled = !1;
    const e = !(
      "touchstart" !== this.touchEvents.start ||
      !a.passiveListener ||
      !this.params.passiveListeners
    ) && { passive: !0, capture: !1 };
    a.gestures
      ? (this.$wrapperEl.off(
          "gesturestart",
          ".swiper-slide",
          t.onGestureStart,
          e
        ),
        this.$wrapperEl.off(
          "gesturechange",
          ".swiper-slide",
          t.onGestureChange,
          e
        ),
        this.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, e))
      : "touchstart" === this.touchEvents.start &&
        (this.$wrapperEl.off(
          this.touchEvents.start,
          ".swiper-slide",
          t.onGestureStart,
          e
        ),
        this.$wrapperEl.off(
          this.touchEvents.move,
          ".swiper-slide",
          t.onGestureChange,
          e
        ),
        this.$wrapperEl.off(
          this.touchEvents.end,
          ".swiper-slide",
          t.onGestureEnd,
          e
        )),
      this.$wrapperEl.off(
        this.touchEvents.move,
        `.${this.params.zoom.containerClass}`,
        t.onTouchMove
      );
  }
};
var G = {
  name: "zoom",
  params: {
    zoom: {
      enabled: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  },
  create() {
    const t = this,
      e = {
        enabled: !1,
        scale: 1,
        currentScale: 1,
        isScaling: !1,
        gesture: {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3
        },
        image: {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0
        }
      };
    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
      .split(" ")
      .forEach(i => {
        e[i] = j[i].bind(t);
      }),
      o.extend(t, { zoom: e });
    let i = 1;
    Object.defineProperty(t.zoom, "scale", {
      get: () => i,
      set(e) {
        i !== e &&
          t.emit(
            "zoomChange",
            e,
            t.zoom.gesture.$imageEl ? t.zoom.gesture.$imageEl[0] : void 0,
            t.zoom.gesture.$slideEl ? t.zoom.gesture.$slideEl[0] : void 0
          ),
          (i = e);
      }
    });
  },
  on: {
    init() {
      this.params.zoom.enabled && this.zoom.enable();
    },
    destroy() {
      this.zoom.disable();
    },
    touchStart(t) {
      this.zoom.enabled && this.zoom.onTouchStart(t);
    },
    touchEnd(t) {
      this.zoom.enabled && this.zoom.onTouchEnd(t);
    },
    doubleTap(t) {
      this.params.zoom.enabled &&
        this.zoom.enabled &&
        this.params.zoom.toggle &&
        this.zoom.toggle(t);
    },
    transitionEnd() {
      this.zoom.enabled &&
        this.params.zoom.enabled &&
        this.zoom.onTransitionEnd();
    }
  }
};
const B = {
  run() {
    const t = this,
      e = t.slides.eq(t.activeIndex);
    let i = t.params.autoplay.delay;
    e.attr("data-swiper-autoplay") &&
      (i = e.attr("data-swiper-autoplay") || t.params.autoplay.delay),
      (t.autoplay.timeout = o.nextTick(() => {
        t.params.autoplay.reverseDirection
          ? t.params.loop
            ? (t.loopFix(),
              t.slidePrev(t.params.speed, !0, !0),
              t.emit("autoplay"))
            : t.isBeginning
            ? t.params.autoplay.stopOnLastSlide
              ? t.autoplay.stop()
              : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0),
                t.emit("autoplay"))
            : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay"))
          : t.params.loop
          ? (t.loopFix(),
            t.slideNext(t.params.speed, !0, !0),
            t.emit("autoplay"))
          : t.isEnd
          ? t.params.autoplay.stopOnLastSlide
            ? t.autoplay.stop()
            : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay"))
          : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay"));
      }, i));
  },
  start() {
    return (
      void 0 === this.autoplay.timeout &&
      !this.autoplay.running &&
      ((this.autoplay.running = !0),
      this.emit("autoplayStart"),
      this.autoplay.run(),
      !0)
    );
  },
  stop() {
    return (
      !!this.autoplay.running &&
      void 0 !== this.autoplay.timeout &&
      (this.autoplay.timeout &&
        (clearTimeout(this.autoplay.timeout), (this.autoplay.timeout = void 0)),
      (this.autoplay.running = !1),
      this.emit("autoplayStop"),
      !0)
    );
  },
  pause(t) {
    this.autoplay.running &&
      (this.autoplay.paused ||
        (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
        (this.autoplay.paused = !0),
        0 !== t && this.params.autoplay.waitForTransition
          ? (this.$wrapperEl[0].addEventListener(
              "transitionend",
              this.autoplay.onTransitionEnd
            ),
            this.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              this.autoplay.onTransitionEnd
            ))
          : ((this.autoplay.paused = !1), this.autoplay.run())));
  }
};
var A = {
  name: "autoplay",
  params: {
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !0,
      stopOnLastSlide: !1,
      reverseDirection: !1
    }
  },
  create() {
    const t = this;
    o.extend(t, {
      autoplay: {
        running: !1,
        paused: !1,
        run: B.run.bind(t),
        start: B.start.bind(t),
        stop: B.stop.bind(t),
        pause: B.pause.bind(t),
        onTransitionEnd(e) {
          t &&
            !t.destroyed &&
            t.$wrapperEl &&
            e.target === this &&
            (t.$wrapperEl[0].removeEventListener(
              "transitionend",
              t.autoplay.onTransitionEnd
            ),
            t.$wrapperEl[0].removeEventListener(
              "webkitTransitionEnd",
              t.autoplay.onTransitionEnd
            ),
            (t.autoplay.paused = !1),
            t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
        }
      }
    });
  },
  on: {
    init() {
      this.params.autoplay.enabled && this.autoplay.start();
    },
    beforeTransitionStart(t, e) {
      this.autoplay.running &&
        (e || !this.params.autoplay.disableOnInteraction
          ? this.autoplay.pause(t)
          : this.autoplay.stop());
    },
    sliderFirstMove() {
      this.autoplay.running &&
        (this.params.autoplay.disableOnInteraction
          ? this.autoplay.stop()
          : this.autoplay.pause());
    },
    destroy() {
      this.autoplay.running && this.autoplay.stop();
    }
  }
};
const L = [y, S, E, C, I];
void 0 === T.use &&
  ((T.use = T.Class.use), (T.installModule = T.Class.installModule)),
  T.use(L),
  T.use([P, F, A, G]);
export { T as Swiper };
