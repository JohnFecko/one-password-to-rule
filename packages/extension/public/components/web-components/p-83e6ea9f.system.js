var __extends =
  (this && this.__extends) ||
  (function() {
    var e = function(t, r) {
      e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var r in t) if (t.hasOwnProperty(r)) e[r] = t[r];
        };
      return e(t, r);
    };
    return function(t, r) {
      e(t, r);
      function n() {
        this.constructor = t;
      }
      t.prototype =
        r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
    };
  })();
var __awaiter =
  (this && this.__awaiter) ||
  function(e, t, r, n) {
    return new (r || (r = Promise))(function(a, i) {
      function o(e) {
        try {
          l(n.next(e));
        } catch (e) {
          i(e);
        }
      }
      function s(e) {
        try {
          l(n["throw"](e));
        } catch (e) {
          i(e);
        }
      }
      function l(e) {
        e.done
          ? a(e.value)
          : new r(function(t) {
              t(e.value);
            }).then(o, s);
      }
      l((n = n.apply(e, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(e, t) {
    var r = {
        label: 0,
        sent: function() {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      },
      n,
      a,
      i,
      o;
    return (
      (o = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol === "function" &&
        (o[Symbol.iterator] = function() {
          return this;
        }),
      o
    );
    function s(e) {
      return function(t) {
        return l([e, t]);
      };
    }
    function l(o) {
      if (n) throw new TypeError("Generator is already executing.");
      while (r)
        try {
          if (
            ((n = 1),
            a &&
              (i =
                o[0] & 2
                  ? a["return"]
                  : o[0]
                  ? a["throw"] || ((i = a["return"]) && i.call(a), 0)
                  : a.next) &&
              !(i = i.call(a, o[1])).done)
          )
            return i;
          if (((a = 0), i)) o = [o[0] & 2, i.value];
          switch (o[0]) {
            case 0:
            case 1:
              i = o;
              break;
            case 4:
              r.label++;
              return { value: o[1], done: false };
            case 5:
              r.label++;
              a = o[1];
              o = [0];
              continue;
            case 7:
              o = r.ops.pop();
              r.trys.pop();
              continue;
            default:
              if (
                !((i = r.trys), (i = i.length > 0 && i[i.length - 1])) &&
                (o[0] === 6 || o[0] === 2)
              ) {
                r = 0;
                continue;
              }
              if (o[0] === 3 && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                r.label = o[1];
                break;
              }
              if (o[0] === 6 && r.label < i[1]) {
                r.label = i[1];
                i = o;
                break;
              }
              if (i && r.label < i[2]) {
                r.label = i[2];
                r.ops.push(o);
                break;
              }
              if (i[2]) r.ops.pop();
              r.trys.pop();
              continue;
          }
          o = t.call(e, r);
        } catch (e) {
          o = [6, e];
          a = 0;
        } finally {
          n = i = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: true };
    }
  };
System.register([], function(e, t) {
  "use strict";
  return {
    execute: function() {
      var r = this;
      e("g", It);
      var n = {
        allRenderFn: false,
        cmpDidLoad: true,
        cmpDidUnload: true,
        cmpDidUpdate: true,
        cmpDidRender: false,
        cmpWillLoad: true,
        cmpWillUpdate: true,
        cmpWillRender: false,
        connectedCallback: true,
        disconnectedCallback: true,
        element: false,
        event: true,
        hasRenderFn: true,
        lifecycle: true,
        hostListener: true,
        hostListenerTargetWindow: true,
        hostListenerTargetDocument: true,
        hostListenerTargetBody: true,
        hostListenerTargetParent: true,
        hostListenerTarget: true,
        member: true,
        method: true,
        mode: true,
        noVdomRender: false,
        observeAttribute: true,
        prop: true,
        propBoolean: true,
        propNumber: true,
        propString: true,
        propMutable: true,
        reflect: true,
        scoped: true,
        shadowDom: true,
        slot: true,
        slotRelocation: true,
        state: true,
        style: true,
        svg: true,
        updatable: true,
        vdomAttribute: true,
        vdomClass: true,
        vdomFunctional: true,
        vdomKey: true,
        vdomListener: true,
        vdomRef: true,
        vdomRender: true,
        vdomStyle: true,
        vdomText: true,
        watchCallback: true,
        taskQueue: true,
        lazyLoad: true,
        hydrateServerSide: false,
        cssVarShim: true,
        hydrateClientSide: false,
        isDebug: false,
        isDev: false,
        lifecycleDOMEvents: false,
        profile: false,
        hotModuleReplacement: false,
        constructableCSS: true,
        initializeNextTick: true,
        cssAnnotations: true
      };
      var a = "web-components";
      var i = 0;
      var o = false;
      var s;
      var l;
      var f;
      var u = false;
      var c = false;
      var $ = false;
      var v = false;
      var d = window;
      var m = document;
      var h = {
        $flags$: 0,
        $resourcesUrl$: "",
        jmp: function(e) {
          return e();
        },
        raf: function(e) {
          return requestAnimationFrame(e);
        },
        ael: function(e, t, r, n) {
          return e.addEventListener(t, r, n);
        },
        rel: function(e, t, r, n) {
          return e.removeEventListener(t, r, n);
        }
      };
      var p = !!m.documentElement.attachShadow;
      var g = (function() {
        var e = false;
        try {
          m.addEventListener(
            "e",
            null,
            Object.defineProperty({}, "passive", {
              get: function() {
                e = true;
              }
            })
          );
        } catch (e) {}
        return e;
      })();
      var y = (function() {
        try {
          new CSSStyleSheet();
          return true;
        } catch (e) {}
        return false;
      })();
      var b = new WeakMap();
      var w = function(e) {
        return b.get(e);
      };
      var R = e("r", function(e, t) {
        return b.set((t.$lazyInstance$ = e), t);
      });
      var S = function(e) {
        {
          var t = { $flags$: 0, $hostElement$: e, $instanceValues$: new Map() };
          t.$onReadyPromise$ = new Promise(function(e) {
            return (t.$onReadyResolve$ = e);
          });
          return b.set(e, t);
        }
      };
      var N = function(e, t) {
        return t in e;
      };
      var x = function(e) {
        return console.error(e);
      };
      var L = new Map();
      var E = function(e, r, n) {
        var a = e.$tagName$.replace(/-/g, "_");
        var i =
          typeof e.$lazyBundleIds$ !== "string"
            ? e.$lazyBundleIds$[r.$modeName$]
            : e.$lazyBundleIds$;
        var o = L.get(i);
        if (o) {
          return o[a];
        }
        return t.import("./" + i + ".entry.js" + "").then(function(e) {
          {
            L.set(i, e);
          }
          return e[a];
        }, x);
      };
      var k = new Map();
      var C = d.__stencil_cssshim;
      var _ = [];
      var T = [];
      var j = [];
      var I = function(e, t) {
        return function(r) {
          e.push(r);
          if (!o) {
            o = true;
            if (t && h.$flags$ & 4) {
              M(A);
            } else {
              h.raf(A);
            }
          }
        };
      };
      var O = function(e) {
        for (var t = 0; t < e.length; t++) {
          try {
            e[t](performance.now());
          } catch (e) {
            x(e);
          }
        }
        e.length = 0;
      };
      var P = function(e, t) {
        var r = 0;
        var n = 0;
        while (r < e.length && (n = performance.now()) < t) {
          try {
            e[r++](n);
          } catch (e) {
            x(e);
          }
        }
        if (r === e.length) {
          e.length = 0;
        } else if (r !== 0) {
          e.splice(0, r);
        }
      };
      var A = function() {
        i++;
        O(_);
        var e =
          (h.$flags$ & 6) === 2
            ? performance.now() + 10 * Math.ceil(i * (1 / 22))
            : Infinity;
        P(T, e);
        P(j, e);
        if (T.length > 0) {
          j.push.apply(j, T);
          T.length = 0;
        }
        if ((o = _.length + T.length + j.length > 0)) {
          h.raf(A);
        } else {
          i = 0;
        }
      };
      var M = function(e) {
        return Promise.resolve().then(e);
      };
      var U = e("k", I(_, false));
      var B = e("w", I(T, true));
      var z = {};
      var D = "http://www.w3.org/2000/svg";
      var q = function(e) {
        return e != null;
      };
      var W = function(e) {
        return e.toLowerCase();
      };
      var H = function(e) {
        e = (typeof e)[0];
        return e === "o" || e === "f";
      };
      var F = function(e) {
        return "__sc_import_" + e.replace(/\s|-/g, "_");
      };
      var V = e("a", function() {
        if (!(d.CSS && d.CSS.supports && d.CSS.supports("color", "var(--c)"))) {
          return t.import("./p-aaf72d6b.system.js");
        }
        return Promise.resolve();
      });
      var G = e("p", function() {
        return __awaiter(r, void 0, void 0, function() {
          var e, r, n, i, o;
          return __generator(this, function(s) {
            switch (s.label) {
              case 0:
                e = t.meta.url;
                r = new RegExp("/" + a + "(\\.esm)?\\.js($|\\?|#)");
                n = Array.from(m.querySelectorAll("script")).find(function(e) {
                  return (
                    r.test(e.src) || e.getAttribute("data-namespace") === a
                  );
                });
                i = n["data-opts"];
                if (!(e !== "")) return [3, 1];
                return [
                  2,
                  Object.assign({}, i, { resourcesUrl: new URL(".", e).href })
                ];
              case 1:
                o = new URL(
                  ".",
                  new URL(
                    n.getAttribute("data-resources-url") || n.src,
                    d.location.href
                  )
                );
                J(o.href);
                if (!!window.customElements) return [3, 3];
                return [4, t.import("./p-9725f31b.system.js")];
              case 2:
                s.sent();
                s.label = 3;
              case 3:
                return [2, Object.assign({}, i, { resourcesUrl: o.href })];
            }
          });
        });
      });
      var J = function(e) {
        var t = F(a);
        try {
          d[t] = new Function("w", "return import(w);//" + Math.random());
        } catch (n) {
          var r = new Map();
          d[t] = function(n) {
            var a = new URL(n, e).href;
            var i = r.get(a);
            if (!i) {
              var o = m.createElement("script");
              o.type = "module";
              o.src = URL.createObjectURL(
                new Blob(
                  ["import * as m from '" + a + "'; window." + t + ".m = m;"],
                  { type: "application/javascript" }
                )
              );
              i = new Promise(function(e) {
                o.onload = function() {
                  e(d[t].m);
                  o.remove();
                };
              });
              r.set(a, i);
              m.head.appendChild(o);
            }
            return i;
          };
        }
      };
      var Q = function(e, t) {
        if (e != null && !H(e)) {
          if (t & 4) {
            return e === "false" ? false : e === "" || !!e;
          }
          if (t & 2) {
            return parseFloat(e);
          }
          if (t & 1) {
            return String(e);
          }
          return e;
        }
        return e;
      };
      var K = "hydrated";
      var X = "http://www.w3.org/1999/xlink";
      var Y = new WeakMap();
      var Z = function(e, t, r) {
        var n = k.get(e);
        if (y && r) {
          n = n || new CSSStyleSheet();
          n.replace(t);
        } else {
          n = t;
        }
        k.set(e, n);
      };
      var ee = function(e, t, r, n) {
        var a = re(t.$tagName$, r);
        var i = k.get(a);
        e = e.nodeType === 11 ? e : m;
        if (!i) {
          a = re(t.$tagName$);
          i = k.get(a);
        }
        if (i) {
          if (typeof i === "string") {
            e = e.head || e;
            var o = Y.get(e);
            var s = void 0;
            if (!o) {
              Y.set(e, (o = new Set()));
            }
            if (!o.has(a)) {
              {
                if (C) {
                  s = C.createHostStyle(n, a, i, !!(t.$flags$ & 10));
                  var l = s["s-sc"];
                  if (l) {
                    a = l;
                    o = null;
                  }
                } else {
                  s = m.createElement("style");
                  s.innerHTML = i;
                }
                e.insertBefore(s, e.querySelector("link"));
              }
              if (o) {
                o.add(a);
              }
            }
          } else if (!e.adoptedStyleSheets.includes(i)) {
            e.adoptedStyleSheets = e.adoptedStyleSheets.concat([i]);
          }
        }
        return a;
      };
      var te = function(e, t, r) {
        var n = ee(p && e.shadowRoot ? e.shadowRoot : e.getRootNode(), t, r, e);
        if (t.$flags$ & 10) {
          e["s-sc"] = n;
          e.classList.add(n + "-h");
          if (t.$flags$ & 2) {
            e.classList.add(n + "-s");
          }
        }
      };
      var re = function(e, t) {
        return "sc-" + (t ? e + "-" + t : e);
      };
      var ne = e("h", function(e, t) {
        var r = [];
        for (var n = 2; n < arguments.length; n++) {
          r[n - 2] = arguments[n];
        }
        var a = null;
        var i = false;
        var o = false;
        var s;
        var l;
        var f = [];
        var u = function(t) {
          for (var r = 0; r < t.length; r++) {
            a = t[r];
            if (Array.isArray(a)) {
              u(a);
            } else if (a != null && typeof a !== "boolean") {
              if ((i = typeof e !== "function" && !H(a))) {
                a = String(a);
              }
              if (i && o) {
                f[f.length - 1].$text$ += a;
              } else {
                f.push(i ? { $flags$: 0, $text$: a } : a);
              }
              o = i;
            }
          }
        };
        u(r);
        if (t) {
          {
            s = t.key || undefined;
          }
          {
            l = t.name;
          }
          {
            var c = t.className || t.class;
            if (c) {
              t.class =
                typeof c !== "object"
                  ? c
                  : Object.keys(c)
                      .filter(function(e) {
                        return c[e];
                      })
                      .join(" ");
            }
          }
        }
        if (typeof e === "function") {
          return e(t, f, oe);
        }
        var $ = {
          $flags$: 0,
          $tag$: e,
          $children$: f.length > 0 ? f : null,
          $elm$: undefined,
          $attrs$: t
        };
        {
          $.$key$ = s;
        }
        {
          $.$name$ = l;
        }
        return $;
      });
      var ae = e("H", {});
      var ie = function(e) {
        return e && e.$tag$ === ae;
      };
      var oe = {
        forEach: function(e, t) {
          return e.map(se).forEach(t);
        },
        map: function(e, t) {
          return e
            .map(se)
            .map(t)
            .map(le);
        }
      };
      var se = function(e) {
        return {
          vattrs: e.$attrs$,
          vchildren: e.$children$,
          vkey: e.$key$,
          vname: e.$name$,
          vtag: e.$tag$,
          vtext: e.$text$
        };
      };
      var le = function(e) {
        return {
          $flags$: 0,
          $attrs$: e.vattrs,
          $children$: e.vchildren,
          $key$: e.vkey,
          $name$: e.vname,
          $tag$: e.vtag,
          $text$: e.vtext
        };
      };
      var fe = function(e, t, r, n, a, i) {
        if (r === n) {
          return;
        }
        if (t === "class") {
          var o = e.classList;
          ue(r).forEach(function(e) {
            return o.remove(e);
          });
          ue(n).forEach(function(e) {
            return o.add(e);
          });
        } else if (t === "style") {
          {
            for (var s in r) {
              if (!n || n[s] == null) {
                if (s.includes("-")) {
                  e.style.removeProperty(s);
                } else {
                  e.style[s] = "";
                }
              }
            }
          }
          for (var s in n) {
            if (!r || n[s] !== r[s]) {
              if (s.includes("-")) {
                e.style.setProperty(s, n[s]);
              } else {
                e.style[s] = n[s];
              }
            }
          }
        } else if (t === "key");
        else if (t === "ref") {
          if (n) {
            n(e);
          }
        } else if (t.startsWith("on") && !N(e, t)) {
          if (N(e, W(t))) {
            t = W(t.substring(2));
          } else {
            t = W(t[2]) + t.substring(3);
          }
          if (r) {
            h.rel(e, t, r, false);
          }
          if (n) {
            h.ael(e, t, n, false);
          }
        } else {
          var l = N(e, t);
          var f = H(n);
          if ((l || (f && n !== null)) && !a) {
            try {
              if (!e.tagName.includes("-")) {
                var u = n == null ? "" : n;
                if (e[t] !== u) {
                  e[t] = u;
                }
              } else {
                e[t] = n;
              }
            } catch (e) {}
          }
          var c = a && t !== (t = t.replace(/^xlink\:?/, "")) ? true : false;
          if (n == null || n === false) {
            if (c) {
              e.removeAttributeNS(X, W(t));
            } else {
              e.removeAttribute(t);
            }
          } else if ((!l || i & 4 || a) && !f) {
            n = n === true ? "" : n.toString();
            if (c) {
              e.setAttributeNS(X, W(t), n);
            } else {
              e.setAttribute(t, n);
            }
          }
        }
      };
      var ue = function(e) {
        return !e
          ? []
          : e.split(/\s+/).filter(function(e) {
              return e;
            });
      };
      var ce = function(e, t, r, n) {
        var a =
          t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$;
        var i = (e && e.$attrs$) || z;
        var o = t.$attrs$ || z;
        {
          for (n in i) {
            if (!(n in o)) {
              fe(a, n, i[n], undefined, r, t.$flags$);
            }
          }
        }
        for (n in o) {
          fe(a, n, i[n], o[n], r, t.$flags$);
        }
      };
      var $e = function(e, t, r, n) {
        var a = t.$children$[r];
        var i = 0;
        var o;
        var c;
        var d;
        if (!u) {
          $ = true;
          if (a.$tag$ === "slot") {
            if (s) {
              n.classList.add(s + "-s");
            }
            if (!a.$children$) {
              a.$flags$ |= 1;
            } else {
              a.$flags$ |= 2;
            }
          }
        }
        if (q(a.$text$)) {
          a.$elm$ = m.createTextNode(a.$text$);
        } else if (a.$flags$ & 1) {
          a.$elm$ = m.createTextNode("");
        } else {
          o = a.$elm$ =
            v || a.$tag$ === "svg"
              ? m.createElementNS(D, a.$tag$)
              : m.createElement(a.$flags$ & 2 ? "slot-fb" : a.$tag$);
          {
            v =
              a.$tag$ === "svg"
                ? true
                : a.$tag$ === "foreignObject"
                ? false
                : v;
          }
          {
            ce(null, a, v);
          }
          if (q(s) && o["s-si"] !== s) {
            o.classList.add((o["s-si"] = s));
          }
          if (a.$children$) {
            for (i = 0; i < a.$children$.length; ++i) {
              c = $e(e, a, i, o);
              if (c) {
                o.appendChild(c);
              }
            }
          }
          {
            if (a.$tag$ === "svg") {
              v = false;
            } else if (a.$elm$.tagName === "foreignObject") {
              v = true;
            }
          }
        }
        {
          a.$elm$["s-hn"] = f;
          if (a.$flags$ & (2 | 1)) {
            a.$elm$["s-sr"] = true;
            a.$elm$["s-cr"] = l;
            a.$elm$["s-sn"] = a.$name$ || "";
            d = e && e.$children$ && e.$children$[r];
            if (d && d.$tag$ === a.$tag$ && e.$elm$) {
              ve(e.$elm$, false);
            }
          }
        }
        return a.$elm$;
      };
      var ve = function(e, t) {
        h.$flags$ |= 1;
        var r = e.childNodes;
        for (var n = r.length - 1; n >= 0; n--) {
          var a = r[n];
          if (a["s-hn"] !== f && a["s-ol"]) {
            ye(a).insertBefore(a, ge(a));
            a["s-ol"].remove();
            a["s-ol"] = undefined;
            $ = true;
          }
          if (t) {
            ve(a, t);
          }
        }
        h.$flags$ &= ~1;
      };
      var de = function(e, t, r, n, a, i) {
        var o = (e["s-cr"] && e["s-cr"].parentNode) || e;
        var s;
        if (o.shadowRoot && W(o.tagName) === f) {
          o = o.shadowRoot;
        }
        for (; a <= i; ++a) {
          if (n[a]) {
            s = $e(null, r, a, e);
            if (s) {
              n[a].$elm$ = s;
              o.insertBefore(s, ge(t));
            }
          }
        }
      };
      var me = function(e, t, r, n) {
        for (; t <= r; ++t) {
          if (q(e[t])) {
            n = e[t].$elm$;
            Ne(e[t], true);
            {
              c = true;
              if (n["s-ol"]) {
                n["s-ol"].remove();
              } else {
                ve(n, true);
              }
            }
            n.remove();
          }
        }
      };
      var he = function(e, t, r, n) {
        var a = 0;
        var i = 0;
        var o = 0;
        var s = 0;
        var l = t.length - 1;
        var f = t[0];
        var u = t[l];
        var c = n.length - 1;
        var $ = n[0];
        var v = n[c];
        var d;
        var m;
        while (a <= l && i <= c) {
          if (f == null) {
            f = t[++a];
          } else if (u == null) {
            u = t[--l];
          } else if ($ == null) {
            $ = n[++i];
          } else if (v == null) {
            v = n[--c];
          } else if (pe(f, $)) {
            be(f, $);
            f = t[++a];
            $ = n[++i];
          } else if (pe(u, v)) {
            be(u, v);
            u = t[--l];
            v = n[--c];
          } else if (pe(f, v)) {
            if (f.$tag$ === "slot" || v.$tag$ === "slot") {
              ve(f.$elm$.parentNode, false);
            }
            be(f, v);
            e.insertBefore(f.$elm$, u.$elm$.nextSibling);
            f = t[++a];
            v = n[--c];
          } else if (pe(u, $)) {
            if (f.$tag$ === "slot" || v.$tag$ === "slot") {
              ve(u.$elm$.parentNode, false);
            }
            be(u, $);
            e.insertBefore(u.$elm$, f.$elm$);
            u = t[--l];
            $ = n[++i];
          } else {
            o = -1;
            {
              for (s = a; s <= l; ++s) {
                if (t[s] && q(t[s].$key$) && t[s].$key$ === $.$key$) {
                  o = s;
                  break;
                }
              }
            }
            if (o >= 0) {
              m = t[o];
              if (m.$tag$ !== $.$tag$) {
                d = $e(t && t[i], r, o, e);
              } else {
                be(m, $);
                t[o] = undefined;
                d = m.$elm$;
              }
              $ = n[++i];
            } else {
              d = $e(t && t[i], r, i, e);
              $ = n[++i];
            }
            if (d) {
              {
                ye(f.$elm$).insertBefore(d, ge(f.$elm$));
              }
            }
          }
        }
        if (a > l) {
          de(e, n[c + 1] == null ? null : n[c + 1].$elm$, r, n, i, c);
        } else if (i > c) {
          me(t, a, l);
        }
      };
      var pe = function(e, t) {
        if (e.$tag$ === t.$tag$) {
          if (e.$tag$ === "slot") {
            return e.$name$ === t.$name$;
          }
          {
            return e.$key$ === t.$key$;
          }
          return true;
        }
        return false;
      };
      var ge = function(e) {
        return (e && e["s-ol"]) || e;
      };
      var ye = function(e) {
        return (e["s-ol"] ? e["s-ol"] : e).parentNode;
      };
      var be = function(e, t) {
        var r = (t.$elm$ = e.$elm$);
        var n = e.$children$;
        var a = t.$children$;
        var i;
        {
          v = r && q(r.parentNode) && r.ownerSVGElement !== undefined;
          v =
            t.$tag$ === "svg" ? true : t.$tag$ === "foreignObject" ? false : v;
        }
        if (!q(t.$text$)) {
          {
            if (t.$tag$ === "slot");
            else {
              ce(e, t, v);
            }
          }
          if (q(n) && q(a)) {
            he(r, n, t, a);
          } else if (q(a)) {
            if (q(e.$text$)) {
              r.textContent = "";
            }
            de(r, null, t, a, 0, a.length - 1);
          } else if (q(n)) {
            me(n, 0, n.length - 1);
          }
        } else if ((i = r["s-cr"])) {
          i.parentNode.textContent = t.$text$;
        } else if (e.$text$ !== t.$text$) {
          r.textContent = t.$text$;
        }
        if (v && t.$tag$ === "svg") {
          v = false;
        }
      };
      var we = function(e, t, r, n, a, i, o, s) {
        r = e.childNodes;
        for (n = 0, a = r.length; n < a; n++) {
          t = r[n];
          if (t.nodeType === 1) {
            if (t["s-sr"]) {
              o = t["s-sn"];
              t.hidden = false;
              for (i = 0; i < a; i++) {
                if (r[i]["s-hn"] !== t["s-hn"]) {
                  s = r[i].nodeType;
                  if (o !== "") {
                    if (s === 1 && o === r[i].getAttribute("slot")) {
                      t.hidden = true;
                      break;
                    }
                  } else {
                    if (
                      s === 1 ||
                      (s === 3 && r[i].textContent.trim() !== "")
                    ) {
                      t.hidden = true;
                      break;
                    }
                  }
                }
              }
            }
            we(t);
          }
        }
      };
      var Re = [];
      var Se = function(e) {
        var t = e.childNodes;
        var r = t.length;
        var n = 0;
        var a = 0;
        var i = 0;
        var o;
        var s;
        var l;
        var f;
        for (r = t.length; n < r; n++) {
          o = t[n];
          if (o["s-sr"] && (s = o["s-cr"])) {
            l = s.parentNode.childNodes;
            f = o["s-sn"];
            for (a = l.length - 1; a >= 0; a--) {
              s = l[a];
              if (!s["s-cn"] && !s["s-nr"] && s["s-hn"] !== o["s-hn"]) {
                i = s.nodeType;
                if (
                  ((i === 3 || i === 8) && f === "") ||
                  (i === 1 && s.getAttribute("slot") === null && f === "") ||
                  (i === 1 && s.getAttribute("slot") === f)
                ) {
                  if (
                    !Re.some(function(e) {
                      return e.$nodeToRelocate$ === s;
                    })
                  ) {
                    c = true;
                    s["s-sn"] = f;
                    Re.push({ $slotRefNode$: o, $nodeToRelocate$: s });
                  }
                }
              }
            }
          }
          if (o.nodeType === 1) {
            Se(o);
          }
        }
      };
      var Ne = function(e, t) {
        if (e) {
          e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(t ? null : e.$elm$);
          e.$children$ &&
            e.$children$.forEach(function(e) {
              Ne(e, t);
            });
        }
      };
      var xe = function(e, t, r, n) {
        f = W(e.tagName);
        var a = t.$vnode$ || { $flags$: 0 };
        var i = ie(n) ? n : ne(null, null, n);
        if (r.$attrsToReflect$) {
          i.$attrs$ = i.$attrs$ || {};
          r.$attrsToReflect$.forEach(function(t) {
            var r = t[0],
              n = t[1];
            return (i.$attrs$[n] = e[r]);
          });
        }
        i.$tag$ = null;
        i.$flags$ |= 4;
        t.$vnode$ = i;
        i.$elm$ = a.$elm$ = e.shadowRoot || e;
        {
          s = e["s-sc"];
        }
        {
          l = e["s-cr"];
          u = p && (r.$flags$ & 1) !== 0;
          $ = c = false;
        }
        be(a, i);
        {
          if ($) {
            Se(i.$elm$);
            for (var o = 0; o < Re.length; o++) {
              var v = Re[o];
              if (!v.$nodeToRelocate$["s-ol"]) {
                var d = m.createTextNode("");
                d["s-nr"] = v.$nodeToRelocate$;
                v.$nodeToRelocate$.parentNode.insertBefore(
                  (v.$nodeToRelocate$["s-ol"] = d),
                  v.$nodeToRelocate$
                );
              }
            }
            h.$flags$ |= 1;
            for (var o = 0; o < Re.length; o++) {
              var v = Re[o];
              var g = v.$slotRefNode$.parentNode;
              var y = v.$slotRefNode$.nextSibling;
              var d = v.$nodeToRelocate$["s-ol"];
              while ((d = d.previousSibling)) {
                var b = d["s-nr"];
                if (
                  b &&
                  b["s-sn"] === v.$nodeToRelocate$["s-sn"] &&
                  g === b.parentNode
                ) {
                  b = b.nextSibling;
                  if (!b || !b["s-nr"]) {
                    y = b;
                    break;
                  }
                }
              }
              if (
                (!y && g !== v.$nodeToRelocate$.parentNode) ||
                v.$nodeToRelocate$.nextSibling !== y
              ) {
                if (v.$nodeToRelocate$ !== y) {
                  g.insertBefore(v.$nodeToRelocate$, y);
                }
              }
            }
            h.$flags$ &= ~1;
          }
          if (c) {
            we(i.$elm$);
          }
          Re.length = 0;
        }
      };
      var Le = function(e, t, r, n) {
        {
          t.$flags$ |= 16;
        }
        var a = t.$lazyInstance$;
        var i;
        if (n) {
          {
            t.$flags$ |= 256;
          }
          if (t.$queuedListeners$) {
            t.$queuedListeners$.forEach(function(e) {
              var t = e[0],
                r = e[1];
              return Te(a, t, r);
            });
            t.$queuedListeners$ = null;
          }
          {
            i = Te(a, "componentWillLoad");
          }
        } else {
          {
            i = Te(a, "componentWillUpdate");
          }
        }
        var o = function() {
          return Ee(e, t, r, a, n);
        };
        return je(i, function() {
          return B(o);
        });
      };
      var Ee = function(e, t, r, n, a) {
        {
          t.$flags$ &= ~16;
        }
        {
          e["s-lr"] = false;
        }
        if (a) {
          te(e, r, t.$modeName$);
        }
        {
          {
            t.$flags$ |= 4;
            try {
              xe(e, t, r, n.render && n.render());
            } catch (e) {
              x(e);
            }
            t.$flags$ &= ~4;
          }
        }
        if (C) {
          C.updateHost(e);
        }
        {
          e["s-lr"] = true;
        }
        {
          t.$flags$ |= 2;
        }
        if (e["s-rc"].length > 0) {
          e["s-rc"].forEach(function(e) {
            return e();
          });
          e["s-rc"].length = 0;
        }
        ke(e, t);
      };
      var ke = function(e, t, r) {
        if (!e["s-al"]) {
          var n = t.$lazyInstance$;
          var a = t.$ancestorComponent$;
          if (!(t.$flags$ & 64)) {
            t.$flags$ |= 64;
            {
              e.classList.add(K);
            }
            {
              Te(n, "componentDidLoad");
            }
            {
              t.$onReadyResolve$(e);
            }
            if (!a) {
              _e();
            }
          } else {
            {
              Te(n, "componentDidUpdate");
            }
          }
          if (a) {
            if ((r = a["s-al"])) {
              r.delete(e);
              if (r.size === 0) {
                a["s-al"] = undefined;
                a["s-init"]();
              }
            }
            t.$ancestorComponent$ = undefined;
          }
        }
      };
      var Ce = function(e, t) {
        {
          var r = w(e);
          if (r.$flags$ & 2) {
            Le(e, r, t, false);
          }
        }
      };
      var _e = function() {
        {
          m.documentElement.classList.add(K);
        }
        {
          h.$flags$ |= 2;
        }
      };
      var Te = function(e, t, r) {
        if (e && e[t]) {
          try {
            return e[t](r);
          } catch (e) {
            x(e);
          }
        }
        return undefined;
      };
      var je = function(e, t) {
        return e && e.then ? e.then(t) : t();
      };
      var Ie = function(e, t) {
        return w(e).$instanceValues$.get(t);
      };
      var Oe = function(e, t, r, n) {
        var a = w(e);
        var i = a.$hostElement$;
        var o = a.$instanceValues$.get(t);
        var s = a.$flags$;
        r = Q(r, n.$members$[t][0]);
        if (r !== o && (!(s & 8) || o === undefined)) {
          a.$instanceValues$.set(t, r);
          if (a.$lazyInstance$) {
            if (n.$watchers$ && s & 128) {
              var l = n.$watchers$[t];
              if (l) {
                l.forEach(function(e) {
                  try {
                    a.$lazyInstance$[e].call(a.$lazyInstance$, r, o, t);
                  } catch (e) {
                    x(e);
                  }
                });
              }
            }
            if ((s & (4 | 2 | 16)) === 2) {
              Le(i, a, n, false);
            }
          }
        }
      };
      var Pe = function(e, t, r) {
        if (t.$members$) {
          if (e.watchers) {
            t.$watchers$ = e.watchers;
          }
          var n = Object.entries(t.$members$);
          var a = e.prototype;
          n.forEach(function(e) {
            var n = e[0],
              i = e[1][0];
            if (i & 31 || (r & 2 && i & 32)) {
              Object.defineProperty(a, n, {
                get: function() {
                  return Ie(this, n);
                },
                set: function(e) {
                  Oe(this, n, e, t);
                },
                configurable: true,
                enumerable: true
              });
            } else if (r & 1 && i & 64) {
              Object.defineProperty(a, n, {
                value: function() {
                  var e = [];
                  for (var t = 0; t < arguments.length; t++) {
                    e[t] = arguments[t];
                  }
                  var r = w(this);
                  return r.$onReadyPromise$.then(function() {
                    var t;
                    return (t = r.$lazyInstance$)[n].apply(t, e);
                  });
                }
              });
            }
          });
          if (r & 1) {
            var i = new Map();
            a.attributeChangedCallback = function(e, t, r) {
              var n = this;
              h.jmp(function() {
                var t = i.get(e);
                n[t] = r === null && typeof n[t] === "boolean" ? false : r;
              });
            };
            e.observedAttributes = n
              .filter(function(e) {
                var t = e[0],
                  r = e[1];
                return r[0] & 15;
              })
              .map(function(e) {
                var r = e[0],
                  n = e[1];
                var a = n[1] || r;
                i.set(a, r);
                if (n[0] & 512) {
                  t.$attrsToReflect$.push([r, a]);
                }
                return a;
              });
          }
        }
        return e;
      };
      var Ae = function(e, t, r) {
        t.$queuedListeners$ = t.$queuedListeners$ || [];
        var n = r.map(function(r) {
          var n = r[0],
            a = r[1],
            i = r[2];
          var o = Ue(e, n);
          var s = Me(t, i);
          var l = Be(n);
          h.ael(o, a, s, l);
          return function() {
            return h.rel(o, a, s, l);
          };
        });
        return function() {
          return n.forEach(function(e) {
            return e();
          });
        };
      };
      var Me = function(e, t) {
        return function(r) {
          {
            if (e.$flags$ & 256) {
              e.$lazyInstance$[t](r);
            } else {
              e.$queuedListeners$.push([t, r]);
            }
          }
        };
      };
      var Ue = function(e, t) {
        if (t & 4) return m;
        if (t & 8) return d;
        if (t & 32) return m.body;
        if (t & 16) return e.parentElement;
        return e;
      };
      var Be = function(e) {
        return g
          ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 }
          : (e & 2) !== 0;
      };
      var ze = [];
      var De = function(e) {
        return ze
          .map(function(t) {
            return t(e);
          })
          .find(function(e) {
            return !!e;
          });
      };
      var qe = function(e) {
        return ze.push(e);
      };
      var We = e("j", function(e) {
        return w(e).$modeName$;
      });
      var He = function(e, a, i, o, s) {
        return __awaiter(r, void 0, void 0, function() {
          var r, o, l, f, u, c;
          return __generator(this, function($) {
            switch ($.label) {
              case 0:
                if (!((a.$flags$ & 32) === 0)) return [3, 5];
                a.$flags$ |= 32;
                if (a.$modeName$ == null) {
                  a.$modeName$ =
                    typeof i.$lazyBundleIds$ !== "string" ? De(e) : "";
                }
                s = E(i, a);
                if (!s.then) return [3, 2];
                return [4, s];
              case 1:
                s = $.sent();
                $.label = 2;
              case 2:
                if (!s.isProxied) {
                  {
                    i.$watchers$ = s.watchers;
                  }
                  Pe(s, i, 2);
                  s.isProxied = true;
                }
                {
                  a.$flags$ |= 8;
                }
                try {
                  new s(a);
                } catch (e) {
                  x(e);
                }
                {
                  a.$flags$ &= ~8;
                }
                {
                  a.$flags$ |= 128;
                }
                Fe(a.$lazyInstance$);
                if (!(!s.$isStyleRegistered$ && s.style)) return [3, 5];
                r = s.style;
                o = re(i.$tagName$, a.$modeName$);
                l = i.$flags$ & 8;
                f = n.runtimeScopeCss;
                if (!(l || f)) return [3, 4];
                return [
                  4,
                  t.import("./p-8b2adfa7.system.js").then(function(e) {
                    return e.scopeCss(r, o, false);
                  })
                ];
              case 3:
                r = $.sent();
                $.label = 4;
              case 4:
                Z(o, r, !!(i.$flags$ & 1));
                s.$isStyleRegistered$ = true;
                $.label = 5;
              case 5:
                u = a.$ancestorComponent$;
                c = function() {
                  return Le(e, a, i, true);
                };
                if (u && u["s-lr"] === false && u["s-rc"]) {
                  u["s-rc"].push(c);
                } else {
                  c();
                }
                return [2];
            }
          });
        });
      };
      var Fe = function(e) {
        {
          Te(e, "connectedCallback");
        }
      };
      var Ve = function(e, t) {
        if ((h.$flags$ & 1) === 0) {
          var r = w(e);
          if (t.$listeners$) {
            r.$rmListeners$ = Ae(e, r, t.$listeners$);
          }
          if (!(r.$flags$ & 1)) {
            r.$flags$ |= 1;
            var n = void 0;
            if (!n) {
              if (t.$flags$ & 4 || t.$flags$ & 8) {
                Ge(e);
              }
            }
            {
              var a = e;
              while ((a = a.parentNode || a.host)) {
                if (a["s-init"] && a["s-lr"] === false) {
                  r.$ancestorComponent$ = a;
                  (a["s-al"] = a["s-al"] || new Set()).add(e);
                  break;
                }
              }
            }
            if (t.$members$) {
              Object.entries(t.$members$).forEach(function(t) {
                var r = t[0],
                  n = t[1][0];
                if (n & 31 && e.hasOwnProperty(r)) {
                  var a = e[r];
                  delete e[r];
                  e[r] = a;
                }
              });
            }
            {
              M(function() {
                return He(e, r, t);
              });
            }
          }
          Fe(r.$lazyInstance$);
        }
      };
      var Ge = function(e, t) {
        var r;
        {
          r = "";
        }
        t = e["s-cr"] = m.createComment(r);
        t["s-cn"] = true;
        e.insertBefore(t, e.firstChild);
      };
      var Je = function(e) {
        if ((h.$flags$ & 1) === 0) {
          var t = w(e);
          {
            if (t.$rmListeners$) {
              t.$rmListeners$();
              t.$rmListeners$ = undefined;
            }
          }
          if (C) {
            C.removeHost(e);
          }
          var r = t.$lazyInstance$;
          {
            Te(r, "disconnectedCallback");
          }
          {
            Te(r, "componentDidUnload");
          }
        }
      };
      var Qe = e("b", function(e, t) {
        if (t === void 0) {
          t = {};
        }
        var r = [];
        var n = t.exclude || [];
        var a = m.head;
        var i = d.customElements;
        var o = a.querySelector("meta[charset]");
        var s = m.createElement("style");
        var l;
        Object.assign(h, t);
        h.$resourcesUrl$ = new URL(t.resourcesUrl || "./", m.baseURI).href;
        if (t.syncQueue) {
          h.$flags$ |= 4;
        }
        e.forEach(function(e) {
          return e[1].forEach(function(t) {
            var a = {
              $flags$: t[0],
              $tagName$: t[1],
              $members$: t[2],
              $listeners$: t[3]
            };
            {
              a.$attrsToReflect$ = [];
            }
            {
              a.$watchers$ = {};
            }
            if (!p && a.$flags$ & 1) {
              a.$flags$ |= 8;
            }
            var o = a.$tagName$;
            var s = (function(e) {
              __extends(t, e);
              function t(t) {
                var r = e.call(this, t) || this;
                t = r;
                {
                  r["s-lr"] = false;
                  r["s-rc"] = [];
                }
                S(t);
                if (a.$flags$ & 1) {
                  if (p) {
                    t.attachShadow({ mode: "open" });
                  } else if (!("shadowRoot" in t)) {
                    t.shadowRoot = t;
                  }
                }
                return r;
              }
              t.prototype.connectedCallback = function() {
                var e = this;
                if (l) {
                  clearTimeout(l);
                  l = null;
                }
                h.jmp(function() {
                  return Ve(e, a);
                });
              };
              t.prototype.disconnectedCallback = function() {
                var e = this;
                h.jmp(function() {
                  return Je(e);
                });
              };
              t.prototype["s-init"] = function() {
                var e = w(this);
                if (e.$lazyInstance$) {
                  ke(this, e);
                }
              };
              t.prototype["s-hmr"] = function(e) {};
              t.prototype.forceUpdate = function() {
                Ce(this, a);
              };
              t.prototype.componentOnReady = function() {
                return w(this).$onReadyPromise$;
              };
              return t;
            })(HTMLElement);
            a.$lazyBundleIds$ = e[0];
            if (!n.includes(o) && !i.get(o)) {
              r.push(o);
              i.define(o, Pe(s, a, 1));
            }
          });
        });
        s.innerHTML = r + "{visibility:hidden}.hydrated{visibility:inherit}";
        s.setAttribute("data-styles", "");
        a.insertBefore(s, o ? o.nextSibling : a.firstChild);
        h.jmp(function() {
          return (l = setTimeout(_e, 30));
        });
      });
      var Ke = e("d", function(e, t, r) {
        var n = Ze(e);
        return {
          emit: function(e) {
            return n.dispatchEvent(
              new CustomEvent(t, {
                bubbles: !!(r & 4),
                composed: !!(r & 2),
                cancelable: !!(r & 1),
                detail: e
              })
            );
          }
        };
      });
      var Xe = e("i", function(e) {
        var t = new URL(e, h.$resourcesUrl$);
        return t.origin !== d.location.origin ? t.href : t.pathname;
      });
      var Ye = e("m", function(e, t) {
        function r() {
          var e = m.querySelector(t);
          if (!e) {
            e = m.createElement(t);
            m.body.appendChild(e);
          }
          return typeof e.componentOnReady === "function"
            ? e.componentOnReady()
            : Promise.resolve(e);
        }
        function n() {
          var e = [];
          for (var t = 0; t < arguments.length; t++) {
            e[t] = arguments[t];
          }
          return r().then(function(t) {
            return t.create.apply(t, e);
          });
        }
        return { create: n, componentOnReady: r };
      });
      var Ze = e("f", function(e) {
        return w(e).$hostElement$;
      });
      var et = function(e) {
        return rt(e);
      };
      var tt = e("l", function(e, t) {
        return et(e).indexOf(t) > -1;
      });
      var rt = function(e) {
        e.Ionic = e.Ionic || {};
        var t = e.Ionic.platforms;
        if (t == null) {
          t = e.Ionic.platforms = at(e);
          t.forEach(function(t) {
            return e.document.documentElement.classList.add("plt-" + t);
          });
        }
        return t;
      };
      var nt = function(e) {
        return $t(e) && !dt(e);
      };
      var at = function(e) {
        return Object.keys(wt).filter(function(t) {
          return wt[t](e);
        });
      };
      var it = function(e) {
        return yt(e, /iPad/i);
      };
      var ot = function(e) {
        return yt(e, /iPhone/i);
      };
      var st = function(e) {
        return yt(e, /iPad|iPhone|iPod/i);
      };
      var lt = function(e) {
        return yt(e, /android|sink/i);
      };
      var ft = function(e) {
        return lt(e) && !yt(e, /mobile/i);
      };
      var ut = function(e) {
        var t = e.innerWidth;
        var r = e.innerHeight;
        var n = Math.min(t, r);
        var a = Math.max(t, r);
        return n > 390 && n < 520 && (a > 620 && a < 800);
      };
      var ct = function(e) {
        var t = e.innerWidth;
        var r = e.innerHeight;
        var n = Math.min(t, r);
        var a = Math.max(t, r);
        return it(e) || ft(e) || (n > 460 && n < 820 && (a > 780 && a < 1400));
      };
      var $t = function(e) {
        return bt(e, "(any-pointer:coarse)");
      };
      var vt = function(e) {
        return !$t(e);
      };
      var dt = function(e) {
        return mt(e) || ht(e);
      };
      var mt = function(e) {
        return !!(e["cordova"] || e["phonegap"] || e["PhoneGap"]);
      };
      var ht = function(e) {
        var t = e["Capacitor"];
        return !!(t && t.isNative);
      };
      var pt = function(e) {
        return yt(e, /electron/);
      };
      var gt = function(e) {
        return e.matchMedia
          ? e.matchMedia("(display-mode: standalone)").matches ||
              e.navigator.standalone
          : false;
      };
      var yt = function(e, t) {
        return e.navigator && e.navigator.userAgent
          ? t.test(e.navigator.userAgent)
          : false;
      };
      var bt = function(e, t) {
        return e.matchMedia ? e.matchMedia(t).matches : false;
      };
      var wt = {
        ipad: it,
        iphone: ot,
        ios: st,
        android: lt,
        phablet: ut,
        tablet: ct,
        cordova: mt,
        capacitor: ht,
        electron: pt,
        pwa: gt,
        mobile: $t,
        mobileweb: nt,
        desktop: vt,
        hybrid: dt
      };
      var Rt = (function() {
        function e() {
          this.m = new Map();
        }
        e.prototype.reset = function(e) {
          this.m = new Map(Object.entries(e));
        };
        e.prototype.get = function(e, t) {
          var r = this.m.get(e);
          return r !== undefined ? r : t;
        };
        e.prototype.getBoolean = function(e, t) {
          if (t === void 0) {
            t = false;
          }
          var r = this.m.get(e);
          if (r === undefined) {
            return t;
          }
          if (typeof r === "string") {
            return r === "true";
          }
          return !!r;
        };
        e.prototype.getNumber = function(e, t) {
          var r = parseFloat(this.m.get(e));
          return isNaN(r) ? (t !== undefined ? t : NaN) : r;
        };
        e.prototype.set = function(e, t) {
          this.m.set(e, t);
        };
        return e;
      })();
      var St = e("c", new Rt());
      var Nt = function(e) {
        try {
          var t = e.sessionStorage.getItem(Ct);
          return t !== null ? JSON.parse(t) : {};
        } catch (e) {
          return {};
        }
      };
      var xt = function(e, t) {
        try {
          e.sessionStorage.setItem(Ct, JSON.stringify(t));
        } catch (e) {
          return;
        }
      };
      var Lt = function(e) {
        var t = {};
        e.location.search
          .slice(1)
          .split("&")
          .map(function(e) {
            return e.split("=");
          })
          .map(function(e) {
            var t = e[0],
              r = e[1];
            return [decodeURIComponent(t), decodeURIComponent(r)];
          })
          .filter(function(e) {
            var t = e[0];
            return Et(t, kt);
          })
          .map(function(e) {
            var t = e[0],
              r = e[1];
            return [t.slice(kt.length), r];
          })
          .forEach(function(e) {
            var r = e[0],
              n = e[1];
            t[r] = n;
          });
        return t;
      };
      var Et = function(e, t) {
        return e.substr(0, t.length) === t;
      };
      var kt = "ionic:";
      var Ct = "ionic-persist-config";
      var _t;
      var Tt = e("e", function(e) {
        return (e && We(e)) || _t;
      });
      var jt = function() {
        var e = document;
        var t = window;
        var r = (t.Ionic = t.Ionic || {});
        rt(t);
        var n = Object.assign(
          {},
          Nt(t),
          { persistConfig: false },
          r.config,
          Lt(t)
        );
        St.reset(n);
        if (St.getBoolean("persistConfig")) {
          xt(t, n);
        }
        r.config = St;
        r.mode = _t = St.get(
          "mode",
          e.documentElement.getAttribute("mode") ||
            (tt(t, "ios") ? "ios" : "md")
        );
        St.set("mode", _t);
        e.documentElement.setAttribute("mode", _t);
        e.documentElement.classList.add(_t);
        if (St.getBoolean("_testing")) {
          St.set("animated", false);
        }
        qe(function(e) {
          return (e.mode = e.mode || e.getAttribute("mode") || _t);
        });
      };
      function It() {
        jt();
      }
    }
  };
});