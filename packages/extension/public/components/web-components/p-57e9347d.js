const e = {
  allRenderFn: !1,
  cmpDidLoad: !0,
  cmpDidUnload: !0,
  cmpDidUpdate: !0,
  cmpDidRender: !1,
  cmpWillLoad: !0,
  cmpWillUpdate: !0,
  cmpWillRender: !1,
  connectedCallback: !0,
  disconnectedCallback: !0,
  element: !1,
  event: !0,
  hasRenderFn: !0,
  lifecycle: !0,
  hostListener: !0,
  hostListenerTargetWindow: !0,
  hostListenerTargetDocument: !0,
  hostListenerTargetBody: !0,
  hostListenerTargetParent: !0,
  hostListenerTarget: !0,
  member: !0,
  method: !0,
  mode: !0,
  noVdomRender: !1,
  observeAttribute: !0,
  prop: !0,
  propBoolean: !0,
  propNumber: !0,
  propString: !0,
  propMutable: !0,
  reflect: !0,
  scoped: !0,
  shadowDom: !0,
  slot: !0,
  slotRelocation: !0,
  state: !0,
  style: !0,
  svg: !0,
  updatable: !0,
  vdomAttribute: !0,
  vdomClass: !0,
  vdomFunctional: !0,
  vdomKey: !0,
  vdomListener: !0,
  vdomRef: !0,
  vdomRender: !0,
  vdomStyle: !0,
  vdomText: !0,
  watchCallback: !0,
  taskQueue: !0,
  lazyLoad: !0,
  hydrateServerSide: !1,
  cssVarShim: !0,
  hydrateClientSide: !1,
  isDebug: !1,
  isDev: !1,
  lifecycleDOMEvents: !1,
  profile: !1,
  hotModuleReplacement: !1,
  constructableCSS: !0,
  initializeNextTick: !0,
  cssAnnotations: !0
};
let t,
  n,
  o,
  s = 0,
  i = !1,
  r = !1,
  l = !1,
  c = !1,
  a = !1;
const d = window,
  f = document,
  p = {
    t: 0,
    o: "",
    jmp: e => e(),
    raf: e => requestAnimationFrame(e),
    ael: (e, t, n, o) => e.addEventListener(t, n, o),
    rel: (e, t, n, o) => e.removeEventListener(t, n, o)
  },
  u = !!f.documentElement.attachShadow,
  m = (() => {
    let e = !1;
    try {
      f.addEventListener(
        "e",
        null,
        Object.defineProperty({}, "passive", {
          get() {
            e = !0;
          }
        })
      );
    } catch (e) {}
    return e;
  })(),
  h = (() => {
    try {
      return new CSSStyleSheet(), !0;
    } catch (e) {}
    return !1;
  })(),
  b = new WeakMap(),
  $ = e => b.get(e),
  w = (e, t) => b.set((t.s = e), t),
  y = (e, t) => t in e,
  g = e => console.error(e),
  v = new Map(),
  _ = new Map(),
  k = d.__stencil_cssshim,
  R = [],
  j = [],
  S = [],
  L = (e, t) => n => {
    e.push(n), i || ((i = !0), t && 4 & p.t ? C(O) : p.raf(O));
  },
  M = (e, t) => {
    let n = 0,
      o = 0;
    for (; n < e.length && (o = performance.now()) < t; )
      try {
        e[n++](o);
      } catch (e) {
        g(e);
      }
    n === e.length ? (e.length = 0) : 0 !== n && e.splice(0, n);
  },
  O = () => {
    s++,
      (e => {
        for (let t = 0; t < e.length; t++)
          try {
            e[t](performance.now());
          } catch (e) {
            g(e);
          }
        e.length = 0;
      })(R);
    const e =
      2 == (6 & p.t) ? performance.now() + 10 * Math.ceil(s * (1 / 22)) : 1 / 0;
    M(j, e),
      M(S, e),
      j.length > 0 && (S.push(...j), (j.length = 0)),
      (i = R.length + j.length + S.length > 0) ? p.raf(O) : (s = 0);
  },
  C = e => Promise.resolve().then(e),
  U = L(R, !1),
  D = L(j, !0),
  T = {},
  N = e => null != e,
  P = e => e.toLowerCase(),
  x = e => "o" === (e = (typeof e)[0]) || "f" === e,
  W = () =>
    d.CSS && d.CSS.supports && d.CSS.supports("color", "var(--c)")
      ? Promise.resolve()
      : __sc_import_web_components("./p-3ea8955c.js"),
  F = async () => {
    const e = new RegExp("/web-components(\\.esm)?\\.js($|\\?|#)"),
      t = Array.from(f.querySelectorAll("script")).find(
        t =>
          e.test(t.src) || "web-components" === t.getAttribute("data-namespace")
      ),
      n = t["data-opts"];
    {
      const e = new URL(
        ".",
        new URL(t.getAttribute("data-resources-url") || t.src, d.location.href)
      );
      return (
        A(e.href),
        window.customElements ||
          (await __sc_import_web_components("./p-860d8016.js")),
        Object.assign({}, n, { resourcesUrl: e.href })
      );
    }
  },
  A = e => {
    const t = (() => `__sc_import_${"web-components".replace(/\s|-/g, "_")}`)();
    try {
      d[t] = new Function("w", `return import(w);//${Math.random()}`);
    } catch (n) {
      const o = new Map();
      d[t] = n => {
        const s = new URL(n, e).href;
        let i = o.get(s);
        if (!i) {
          const e = f.createElement("script");
          (e.type = "module"),
            (e.src = URL.createObjectURL(
              new Blob([`import * as m from '${s}'; window.${t}.m = m;`], {
                type: "application/javascript"
              })
            )),
            (i = new Promise(n => {
              e.onload = () => {
                n(d[t].m), e.remove();
              };
            })),
            o.set(s, i),
            f.head.appendChild(e);
        }
        return i;
      };
    }
  },
  E = "http://www.w3.org/1999/xlink",
  B = new WeakMap(),
  V = (e, t) => "sc-" + (t ? e + "-" + t : e),
  z = (e, t, ...n) => {
    let o,
      s,
      i = null,
      r = !1,
      l = !1,
      c = [];
    const a = t => {
      for (let n = 0; n < t.length; n++)
        (i = t[n]),
          Array.isArray(i)
            ? a(i)
            : null != i &&
              "boolean" != typeof i &&
              ((r = "function" != typeof e && !x(i)) && (i = String(i)),
              r && l ? (c[c.length - 1].i += i) : c.push(r ? { t: 0, i } : i),
              (l = r));
    };
    if ((a(n), t)) {
      (o = t.key || void 0), (s = t.name);
      {
        const e = t.className || t.class;
        e &&
          (t.class =
            "object" != typeof e
              ? e
              : Object.keys(e)
                  .filter(t => e[t])
                  .join(" "));
      }
    }
    if ("function" == typeof e) return e(t, c, I);
    const d = { t: 0, l: e, p: c.length > 0 ? c : null, u: void 0, h: t };
    return (d.$ = o), (d.g = s), d;
  },
  H = {},
  I = {
    forEach: (e, t) => e.map(J).forEach(t),
    map: (e, t) =>
      e
        .map(J)
        .map(t)
        .map(q)
  },
  J = e => ({
    vattrs: e.h,
    vchildren: e.p,
    vkey: e.$,
    vname: e.g,
    vtag: e.l,
    vtext: e.i
  }),
  q = e => ({
    t: 0,
    h: e.vattrs,
    p: e.vchildren,
    $: e.vkey,
    g: e.vname,
    l: e.vtag,
    i: e.vtext
  }),
  K = (e, t, n, o, s, i) => {
    if (n !== o)
      if ("class" === t) {
        const t = e.classList;
        Q(n).forEach(e => t.remove(e)), Q(o).forEach(e => t.add(e));
      } else if ("style" === t) {
        for (const t in n)
          (o && null != o[t]) ||
            (t.includes("-") ? e.style.removeProperty(t) : (e.style[t] = ""));
        for (const t in o)
          (n && o[t] === n[t]) ||
            (t.includes("-")
              ? e.style.setProperty(t, o[t])
              : (e.style[t] = o[t]));
      } else if ("key" === t);
      else if ("ref" === t) o && o(e);
      else if (t.startsWith("on") && !y(e, t))
        (t = y(e, P(t)) ? P(t.substring(2)) : P(t[2]) + t.substring(3)),
          n && p.rel(e, t, n, !1),
          o && p.ael(e, t, o, !1);
      else {
        const n = y(e, t),
          r = x(o);
        if ((n || (r && null !== o)) && !s)
          try {
            if (e.tagName.includes("-")) e[t] = o;
            else {
              const n = null == o ? "" : o;
              e[t] !== n && (e[t] = n);
            }
          } catch (e) {}
        const l = !(!s || t === (t = t.replace(/^xlink\:?/, "")));
        null == o || !1 === o
          ? l
            ? e.removeAttributeNS(E, P(t))
            : e.removeAttribute(t)
          : (!n || 4 & i || s) &&
            !r &&
            ((o = !0 === o ? "" : o.toString()),
            l ? e.setAttributeNS(E, P(t), o) : e.setAttribute(t, o));
      }
  },
  Q = e => (e ? e.split(/\s+/).filter(e => e) : []),
  G = (e, t, n, o) => {
    const s = 11 === t.u.nodeType && t.u.host ? t.u.host : t.u,
      i = (e && e.h) || T,
      r = t.h || T;
    for (o in i) o in r || K(s, o, i[o], void 0, n, t.t);
    for (o in r) K(s, o, i[o], r[o], n, t.t);
  },
  X = (e, s, i, l) => {
    let d,
      p,
      u,
      m = s.p[i],
      h = 0;
    if (
      (r ||
        ((c = !0),
        "slot" === m.l &&
          (t && l.classList.add(t + "-s"), (m.t |= m.p ? 2 : 1))),
      N(m.i))
    )
      m.u = f.createTextNode(m.i);
    else if (1 & m.t) m.u = f.createTextNode("");
    else {
      if (
        ((d = m.u =
          a || "svg" === m.l
            ? f.createElementNS("http://www.w3.org/2000/svg", m.l)
            : f.createElement(2 & m.t ? "slot-fb" : m.l)),
        G(null, m, (a = "svg" === m.l || ("foreignObject" !== m.l && a))),
        N(t) && d["s-si"] !== t && d.classList.add((d["s-si"] = t)),
        m.p)
      )
        for (h = 0; h < m.p.length; ++h)
          (p = X(e, m, h, d)) && d.appendChild(p);
      "svg" === m.l ? (a = !1) : "foreignObject" === m.u.tagName && (a = !0);
    }
    return (
      (m.u["s-hn"] = o),
      3 & m.t &&
        ((m.u["s-sr"] = !0),
        (m.u["s-cr"] = n),
        (m.u["s-sn"] = m.g || ""),
        (u = e && e.p && e.p[i]) && u.l === m.l && e.u && Y(e.u, !1)),
      m.u
    );
  },
  Y = (e, t) => {
    p.t |= 1;
    const n = e.childNodes;
    for (let e = n.length - 1; e >= 0; e--) {
      const s = n[e];
      s["s-hn"] !== o &&
        s["s-ol"] &&
        (oe(s).insertBefore(s, ne(s)),
        s["s-ol"].remove(),
        (s["s-ol"] = void 0),
        (c = !0)),
        t && Y(s, t);
    }
    p.t &= -2;
  },
  Z = (e, t, n, s, i, r) => {
    let l,
      c = (e["s-cr"] && e["s-cr"].parentNode) || e;
    for (c.shadowRoot && P(c.tagName) === o && (c = c.shadowRoot); i <= r; ++i)
      s[i] &&
        (l = X(null, n, i, e)) &&
        ((s[i].u = l), c.insertBefore(l, ne(t)));
  },
  ee = (e, t, n, o) => {
    for (; t <= n; ++t)
      N(e[t]) &&
        ((o = e[t].u),
        ce(e[t], !0),
        (l = !0),
        o["s-ol"] ? o["s-ol"].remove() : Y(o, !0),
        o.remove());
  },
  te = (e, t) => e.l === t.l && ("slot" === e.l ? e.g === t.g : e.$ === t.$),
  ne = e => (e && e["s-ol"]) || e,
  oe = e => (e["s-ol"] ? e["s-ol"] : e).parentNode,
  se = (e, t) => {
    const n = (t.u = e.u),
      o = e.p,
      s = t.p;
    let i;
    (a = n && N(n.parentNode) && void 0 !== n.ownerSVGElement),
      (a = "svg" === t.l || ("foreignObject" !== t.l && a)),
      N(t.i)
        ? (i = n["s-cr"])
          ? (i.parentNode.textContent = t.i)
          : e.i !== t.i && (n.textContent = t.i)
        : ("slot" === t.l || G(e, t, a),
          N(o) && N(s)
            ? ((e, t, n, o) => {
                let s,
                  i,
                  r = 0,
                  l = 0,
                  c = 0,
                  a = 0,
                  d = t.length - 1,
                  f = t[0],
                  p = t[d],
                  u = o.length - 1,
                  m = o[0],
                  h = o[u];
                for (; r <= d && l <= u; )
                  if (null == f) f = t[++r];
                  else if (null == p) p = t[--d];
                  else if (null == m) m = o[++l];
                  else if (null == h) h = o[--u];
                  else if (te(f, m)) se(f, m), (f = t[++r]), (m = o[++l]);
                  else if (te(p, h)) se(p, h), (p = t[--d]), (h = o[--u]);
                  else if (te(f, h))
                    ("slot" !== f.l && "slot" !== h.l) || Y(f.u.parentNode, !1),
                      se(f, h),
                      e.insertBefore(f.u, p.u.nextSibling),
                      (f = t[++r]),
                      (h = o[--u]);
                  else if (te(p, m))
                    ("slot" !== f.l && "slot" !== h.l) || Y(p.u.parentNode, !1),
                      se(p, m),
                      e.insertBefore(p.u, f.u),
                      (p = t[--d]),
                      (m = o[++l]);
                  else {
                    for (c = -1, a = r; a <= d; ++a)
                      if (t[a] && N(t[a].$) && t[a].$ === m.$) {
                        c = a;
                        break;
                      }
                    c >= 0
                      ? ((i = t[c]).l !== m.l
                          ? (s = X(t && t[l], n, c, e))
                          : (se(i, m), (t[c] = void 0), (s = i.u)),
                        (m = o[++l]))
                      : ((s = X(t && t[l], n, l, e)), (m = o[++l])),
                      s && oe(f.u).insertBefore(s, ne(f.u));
                  }
                r > d
                  ? Z(e, null == o[u + 1] ? null : o[u + 1].u, n, o, l, u)
                  : l > u && ee(t, r, d);
              })(n, o, t, s)
            : N(s)
            ? (N(e.i) && (n.textContent = ""),
              Z(n, null, t, s, 0, s.length - 1))
            : N(o) && ee(o, 0, o.length - 1)),
      a && "svg" === t.l && (a = !1);
  },
  ie = (e, t, n, o, s, i, r, l) => {
    for (o = 0, s = (n = e.childNodes).length; o < s; o++)
      if (1 === (t = n[o]).nodeType) {
        if (t["s-sr"])
          for (r = t["s-sn"], t.hidden = !1, i = 0; i < s; i++)
            if (n[i]["s-hn"] !== t["s-hn"])
              if (((l = n[i].nodeType), "" !== r)) {
                if (1 === l && r === n[i].getAttribute("slot")) {
                  t.hidden = !0;
                  break;
                }
              } else if (
                1 === l ||
                (3 === l && "" !== n[i].textContent.trim())
              ) {
                t.hidden = !0;
                break;
              }
        ie(t);
      }
  },
  re = [],
  le = e => {
    let t,
      n,
      o,
      s,
      i = e.childNodes,
      r = i.length,
      c = 0,
      a = 0,
      d = 0;
    for (r = i.length; c < r; c++) {
      if ((t = i[c])["s-sr"] && (n = t["s-cr"]))
        for (
          s = t["s-sn"], a = (o = n.parentNode.childNodes).length - 1;
          a >= 0;
          a--
        )
          (n = o[a])["s-cn"] ||
            n["s-nr"] ||
            n["s-hn"] === t["s-hn"] ||
            ((((3 === (d = n.nodeType) || 8 === d) && "" === s) ||
              (1 === d && null === n.getAttribute("slot") && "" === s) ||
              (1 === d && n.getAttribute("slot") === s)) &&
              (re.some(e => e.v === n) ||
                ((l = !0), (n["s-sn"] = s), re.push({ _: t, v: n }))));
      1 === t.nodeType && le(t);
    }
  },
  ce = (e, t) => {
    e &&
      (e.h && e.h.ref && e.h.ref(t ? null : e.u),
      e.p &&
        e.p.forEach(e => {
          ce(e, t);
        }));
  },
  ae = (e, t, n, o) => {
    t.t |= 16;
    const s = t.s;
    let i;
    o
      ? ((t.t |= 256),
        t.k && (t.k.forEach(([e, t]) => ue(s, e, t)), (t.k = null)),
        (i = ue(s, "componentWillLoad")))
      : (i = ue(s, "componentWillUpdate"));
    const r = () => de(e, t, n, s, o);
    return me(i, () => D(r));
  },
  de = (e, s, i, a, d) => {
    (s.t &= -17),
      (e["s-lr"] = !1),
      d &&
        ((e, t, n) => {
          const o = ((e, t, n, o) => {
            let s = V(t.R, n),
              i = _.get(s);
            if (
              ((e = 11 === e.nodeType ? e : f),
              i || ((s = V(t.R)), (i = _.get(s))),
              i)
            )
              if ("string" == typeof i) {
                let n,
                  r = B.get((e = e.head || e));
                if ((r || B.set(e, (r = new Set())), !r.has(s))) {
                  if (k) {
                    const e = (n = k.createHostStyle(o, s, i, !!(10 & t.t)))[
                      "s-sc"
                    ];
                    e && ((s = e), (r = null));
                  } else (n = f.createElement("style")).innerHTML = i;
                  e.insertBefore(n, e.querySelector("link")), r && r.add(s);
                }
              } else
                e.adoptedStyleSheets.includes(i) ||
                  (e.adoptedStyleSheets = [...e.adoptedStyleSheets, i]);
            return s;
          })(u && e.shadowRoot ? e.shadowRoot : e.getRootNode(), t, n, e);
          10 & t.t &&
            ((e["s-sc"] = o),
            e.classList.add(o + "-h"),
            2 & t.t && e.classList.add(o + "-s"));
        })(e, i, s.j),
      (s.t |= 4);
    try {
      ((e, s, i, a) => {
        o = P(e.tagName);
        const d = s.S || { t: 0 },
          m = (e => e && e.l === H)(a) ? a : z(null, null, a);
        if (
          (i.L && ((m.h = m.h || {}), i.L.forEach(([t, n]) => (m.h[n] = e[t]))),
          (m.l = null),
          (m.t |= 4),
          (s.S = m),
          (m.u = d.u = e.shadowRoot || e),
          (t = e["s-sc"]),
          (n = e["s-cr"]),
          (r = u && 0 != (1 & i.t)),
          (c = l = !1),
          se(d, m),
          c)
        ) {
          le(m.u);
          for (let e = 0; e < re.length; e++) {
            const t = re[e];
            if (!t.v["s-ol"]) {
              const e = f.createTextNode("");
              (e["s-nr"] = t.v),
                t.v.parentNode.insertBefore((t.v["s-ol"] = e), t.v);
            }
          }
          p.t |= 1;
          for (let e = 0; e < re.length; e++) {
            const t = re[e],
              n = t._.parentNode;
            let o = t._.nextSibling,
              s = t.v["s-ol"];
            for (; (s = s.previousSibling); ) {
              let e = s["s-nr"];
              if (
                e &&
                e["s-sn"] === t.v["s-sn"] &&
                n === e.parentNode &&
                (!(e = e.nextSibling) || !e["s-nr"])
              ) {
                o = e;
                break;
              }
            }
            ((!o && n !== t.v.parentNode) || t.v.nextSibling !== o) &&
              t.v !== o &&
              n.insertBefore(t.v, o);
          }
          p.t &= -2;
        }
        l && ie(m.u), (re.length = 0);
      })(e, s, i, a.render && a.render());
    } catch (e) {
      g(e);
    }
    (s.t &= -5),
      k && k.updateHost(e),
      (e["s-lr"] = !0),
      (s.t |= 2),
      e["s-rc"].length > 0 &&
        (e["s-rc"].forEach(e => e()), (e["s-rc"].length = 0)),
      fe(e, s);
  },
  fe = (e, t, n) => {
    if (!e["s-al"]) {
      const o = t.s,
        s = t.M;
      64 & t.t
        ? ue(o, "componentDidUpdate")
        : ((t.t |= 64),
          e.classList.add("hydrated"),
          ue(o, "componentDidLoad"),
          t.O(e),
          s || pe()),
        s &&
          ((n = s["s-al"]) &&
            (n.delete(e),
            0 === n.size && ((s["s-al"] = void 0), s["s-init"]())),
          (t.M = void 0));
    }
  },
  pe = () => {
    f.documentElement.classList.add("hydrated"), (p.t |= 2);
  },
  ue = (e, t, n) => {
    if (e && e[t])
      try {
        return e[t](n);
      } catch (e) {
        g(e);
      }
  },
  me = (e, t) => (e && e.then ? e.then(t) : t()),
  he = (e, t, n) => {
    if (t.C) {
      e.watchers && (t.U = e.watchers);
      const o = Object.entries(t.C),
        s = e.prototype;
      if (
        (o.forEach(([e, [o]]) => {
          31 & o || (2 & n && 32 & o)
            ? Object.defineProperty(s, e, {
                get() {
                  return ((e, t) => $(e).D.get(t))(this, e);
                },
                set(n) {
                  ((e, t, n, o) => {
                    const s = $(this),
                      i = s.T,
                      r = s.D.get(t),
                      l = s.t;
                    if (
                      !(
                        (n = ((e, t) =>
                          null == e || x(e)
                            ? e
                            : 4 & t
                            ? "false" !== e && ("" === e || !!e)
                            : 2 & t
                            ? parseFloat(e)
                            : 1 & t
                            ? String(e)
                            : e)(n, o.C[t][0])) === r ||
                        (8 & l && void 0 !== r)
                      ) &&
                      (s.D.set(t, n), s.s)
                    ) {
                      if (o.U && 128 & l) {
                        const e = o.U[t];
                        e &&
                          e.forEach(e => {
                            try {
                              s.s[e].call(s.s, n, r, t);
                            } catch (e) {
                              g(e);
                            }
                          });
                      }
                      2 == (22 & l) && ae(i, s, o, !1);
                    }
                  })(0, e, n, t);
                },
                configurable: !0,
                enumerable: !0
              })
            : 1 & n &&
              64 & o &&
              Object.defineProperty(s, e, {
                value(...t) {
                  const n = $(this);
                  return n.N.then(() => n.s[e](...t));
                }
              });
        }),
        1 & n)
      ) {
        const n = new Map();
        (s.attributeChangedCallback = function(e, t, o) {
          p.jmp(() => {
            const t = n.get(e);
            this[t] = (null !== o || "boolean" != typeof this[t]) && o;
          });
        }),
          (e.observedAttributes = o
            .filter(([e, t]) => 15 & t[0])
            .map(([e, o]) => {
              const s = o[1] || e;
              return n.set(s, e), 512 & o[0] && t.L.push([e, s]), s;
            }));
      }
    }
    return e;
  },
  be = [],
  $e = e => $(e).j,
  we = e => {
    ue(e, "connectedCallback");
  },
  ye = (e, t) => {
    let n;
    (n = ""),
      ((t = e["s-cr"] = f.createComment(""))["s-cn"] = !0),
      e.insertBefore(t, e.firstChild);
  },
  ge = (t, n = {}) => {
    const o = [],
      s = n.exclude || [],
      i = f.head,
      r = d.customElements,
      l = i.querySelector("meta[charset]"),
      c = f.createElement("style");
    let a;
    Object.assign(p, n),
      (p.o = new URL(n.resourcesUrl || "./", f.baseURI).href),
      n.syncQueue && (p.t |= 4),
      t.forEach(t =>
        t[1].forEach(n => {
          const i = { t: n[0], R: n[1], C: n[2], P: n[3], L: [], U: {} };
          !u && 1 & i.t && (i.t |= 8);
          const l = i.R;
          (i.W = t[0]),
            s.includes(l) ||
              r.get(l) ||
              (o.push(l),
              r.define(
                l,
                he(
                  class extends HTMLElement {
                    constructor(e) {
                      super(e),
                        (e = this),
                        (this["s-lr"] = !1),
                        (this["s-rc"] = []),
                        (e => {
                          {
                            const t = { t: 0, T: e, D: new Map() };
                            (t.N = new Promise(e => (t.O = e))), b.set(e, t);
                          }
                        })(e),
                        1 & i.t &&
                          (u
                            ? e.attachShadow({ mode: "open" })
                            : "shadowRoot" in e || (e.shadowRoot = e));
                    }
                    connectedCallback() {
                      a && (clearTimeout(a), (a = null)),
                        p.jmp(() =>
                          ((t, n) => {
                            if (0 == (1 & p.t)) {
                              const o = $(t);
                              if (
                                (n.P &&
                                  (o.F = ((e, t, n) => {
                                    t.k = t.k || [];
                                    const o = n.map(([n, o, s]) => {
                                      const i = ((e, t) =>
                                          4 & t
                                            ? f
                                            : 8 & t
                                            ? d
                                            : 32 & t
                                            ? f.body
                                            : 16 & t
                                            ? e.parentElement
                                            : e)(e, n),
                                        r = ((e, t) => n => {
                                          256 & e.t
                                            ? e.s[t](n)
                                            : e.k.push([t, n]);
                                        })(t, s),
                                        l = (e =>
                                          m
                                            ? {
                                                passive: 0 != (1 & e),
                                                capture: 0 != (2 & e)
                                              }
                                            : 0 != (2 & e))(n);
                                      return (
                                        p.ael(i, o, r, l),
                                        () => p.rel(i, o, r, l)
                                      );
                                    });
                                    return () => o.forEach(e => e());
                                  })(t, o, n.P)),
                                !(1 & o.t))
                              ) {
                                let s;
                                (o.t |= 1),
                                  s || ((4 & n.t || 8 & n.t) && ye(t));
                                {
                                  let e = t;
                                  for (; (e = e.parentNode || e.host); )
                                    if (e["s-init"] && !1 === e["s-lr"]) {
                                      (o.M = e),
                                        (e["s-al"] =
                                          e["s-al"] || new Set()).add(t);
                                      break;
                                    }
                                }
                                n.C &&
                                  Object.entries(n.C).forEach(([e, [n]]) => {
                                    if (31 & n && t.hasOwnProperty(e)) {
                                      const n = t[e];
                                      delete t[e], (t[e] = n);
                                    }
                                  }),
                                  C(() =>
                                    (async (t, n, o, s, i) => {
                                      if (0 == (32 & n.t)) {
                                        (n.t |= 32),
                                          null == n.j &&
                                            (n.j =
                                              "string" != typeof o.W
                                                ? (e =>
                                                    be
                                                      .map(t => t(e))
                                                      .find(e => !!e))(t)
                                                : ""),
                                          (i = ((e, t) => {
                                            const n = e.R.replace(/-/g, "_"),
                                              o =
                                                "string" != typeof e.W
                                                  ? e.W[t.j]
                                                  : e.W,
                                              s = v.get(o);
                                            return s
                                              ? s[n]
                                              : __sc_import_web_components(
                                                  `./${o}.entry.js`
                                                ).then(
                                                  e => (v.set(o, e), e[n]),
                                                  g
                                                );
                                          })(o, n)).then && (i = await i),
                                          i.isProxied ||
                                            ((o.U = i.watchers),
                                            he(i, o, 2),
                                            (i.isProxied = !0)),
                                          (n.t |= 8);
                                        try {
                                          new i(n);
                                        } catch (e) {
                                          g(e);
                                        }
                                        if (
                                          ((n.t &= -9),
                                          (n.t |= 128),
                                          we(n.s),
                                          !i.A && i.style)
                                        ) {
                                          let t = i.style,
                                            s = V(o.R, n.j);
                                          const r = e.runtimeScopeCss;
                                          (8 & o.t || r) &&
                                            (t = await __sc_import_web_components(
                                              "./p-c68d0961.js"
                                            ).then(e => e.scopeCss(t, s, !1))),
                                            ((e, t, n) => {
                                              let o = _.get(e);
                                              h && n
                                                ? (o =
                                                    o ||
                                                    new CSSStyleSheet()).replace(
                                                    t
                                                  )
                                                : (o = t),
                                                _.set(e, o);
                                            })(s, t, !!(1 & o.t)),
                                            (i.A = !0);
                                        }
                                      }
                                      const r = n.M,
                                        l = () => ae(t, n, o, !0);
                                      r && !1 === r["s-lr"] && r["s-rc"]
                                        ? r["s-rc"].push(l)
                                        : l();
                                    })(t, o, n)
                                  );
                              }
                              we(o.s);
                            }
                          })(this, i)
                        );
                    }
                    disconnectedCallback() {
                      p.jmp(() =>
                        (e => {
                          if (0 == (1 & p.t)) {
                            const t = $(e);
                            t.F && (t.F(), (t.F = void 0)),
                              k && k.removeHost(e);
                            const n = t.s;
                            ue(n, "disconnectedCallback"),
                              ue(n, "componentDidUnload");
                          }
                        })(this)
                      );
                    }
                    "s-init"() {
                      const e = $(this);
                      e.s && fe(this, e);
                    }
                    "s-hmr"(e) {}
                    forceUpdate() {
                      ((e, t) => {
                        {
                          const n = $(e);
                          2 & n.t && ae(e, n, t, !1);
                        }
                      })(this, i);
                    }
                    componentOnReady() {
                      return $(this).N;
                    }
                  },
                  i,
                  1
                )
              ));
        })
      ),
      (c.innerHTML = o + "{visibility:hidden}.hydrated{visibility:inherit}"),
      c.setAttribute("data-styles", ""),
      i.insertBefore(c, l ? l.nextSibling : i.firstChild),
      p.jmp(() => (a = setTimeout(pe, 30)));
  },
  ve = (e, t, n) => {
    const o = Re(e);
    return {
      emit: e =>
        o.dispatchEvent(
          new CustomEvent(t, {
            bubbles: !!(4 & n),
            composed: !!(2 & n),
            cancelable: !!(1 & n),
            detail: e
          })
        )
    };
  },
  _e = e => {
    const t = new URL(e, p.o);
    return t.origin !== d.location.origin ? t.href : t.pathname;
  },
  ke = (e, t) => {
    function n() {
      let e = f.querySelector(t);
      return (
        e || ((e = f.createElement(t)), f.body.appendChild(e)),
        "function" == typeof e.componentOnReady
          ? e.componentOnReady()
          : Promise.resolve(e)
      );
    }
    return {
      create: function(...e) {
        return n().then(t => t.create(...e));
      },
      componentOnReady: n
    };
  },
  Re = e => $(e).T,
  je = (e, t) => (e => Se(e))(e).indexOf(t) > -1,
  Se = e => {
    e.Ionic = e.Ionic || {};
    let t = e.Ionic.platforms;
    return (
      null == t &&
        (t = e.Ionic.platforms = Le(e)).forEach(t =>
          e.document.documentElement.classList.add(`plt-${t}`)
        ),
      t
    );
  },
  Le = e => Object.keys(xe).filter(t => xe[t](e)),
  Me = e => Ne(e, /iPad/i),
  Oe = e => Ne(e, /android|sink/i),
  Ce = e => Pe(e, "(any-pointer:coarse)"),
  Ue = e => De(e) || Te(e),
  De = e => !!(e.cordova || e.phonegap || e.PhoneGap),
  Te = e => {
    const t = e.Capacitor;
    return !(!t || !t.isNative);
  },
  Ne = (e, t) =>
    !(!e.navigator || !e.navigator.userAgent) && t.test(e.navigator.userAgent),
  Pe = (e, t) => !!e.matchMedia && e.matchMedia(t).matches,
  xe = {
    ipad: Me,
    iphone: e => Ne(e, /iPhone/i),
    ios: e => Ne(e, /iPad|iPhone|iPod/i),
    android: Oe,
    phablet: e => {
      const t = e.innerWidth,
        n = e.innerHeight,
        o = Math.min(t, n),
        s = Math.max(t, n);
      return o > 390 && o < 520 && s > 620 && s < 800;
    },
    tablet: e => {
      const t = e.innerWidth,
        n = e.innerHeight,
        o = Math.min(t, n),
        s = Math.max(t, n);
      return (
        Me(e) ||
        (e => Oe(e) && !Ne(e, /mobile/i))(e) ||
        (o > 460 && o < 820 && s > 780 && s < 1400)
      );
    },
    cordova: De,
    capacitor: Te,
    electron: e => Ne(e, /electron/),
    pwa: e =>
      !!e.matchMedia &&
      (e.matchMedia("(display-mode: standalone)").matches ||
        e.navigator.standalone),
    mobile: Ce,
    mobileweb: e => Ce(e) && !Ue(e),
    desktop: e => !Ce(e),
    hybrid: Ue
  };
class We {
  constructor() {
    this.m = new Map();
  }
  reset(e) {
    this.m = new Map(Object.entries(e));
  }
  get(e, t) {
    const n = this.m.get(e);
    return void 0 !== n ? n : t;
  }
  getBoolean(e, t = !1) {
    const n = this.m.get(e);
    return void 0 === n ? t : "string" == typeof n ? "true" === n : !!n;
  }
  getNumber(e, t) {
    const n = parseFloat(this.m.get(e));
    return isNaN(n) ? (void 0 !== t ? t : NaN) : n;
  }
  set(e, t) {
    this.m.set(e, t);
  }
}
const Fe = new We();
let Ae;
const Ee = e => (e && $e(e)) || Ae,
  Be = () => {
    const e = document,
      t = window,
      n = (t.Ionic = t.Ionic || {});
    Se(t);
    const o = Object.assign(
      {},
      (e => {
        try {
          const t = e.sessionStorage.getItem("ionic-persist-config");
          return null !== t ? JSON.parse(t) : {};
        } catch (e) {
          return {};
        }
      })(t),
      { persistConfig: !1 },
      n.config,
      (e => {
        const t = {};
        return (
          e.location.search
            .slice(1)
            .split("&")
            .map(e => e.split("="))
            .map(([e, t]) => [decodeURIComponent(e), decodeURIComponent(t)])
            .filter(([e]) =>
              (e => "ionic:" === e.substr(0, "ionic:".length))(e)
            )
            .map(([e, t]) => [e.slice("ionic:".length), t])
            .forEach(([e, n]) => {
              t[e] = n;
            }),
          t
        );
      })(t)
    );
    Fe.reset(o),
      Fe.getBoolean("persistConfig") &&
        ((e, t) => {
          try {
            e.sessionStorage.setItem("ionic-persist-config", JSON.stringify(t));
          } catch (e) {
            return;
          }
        })(t, o),
      (n.config = Fe),
      (n.mode = Ae = Fe.get(
        "mode",
        e.documentElement.getAttribute("mode") || (je(t, "ios") ? "ios" : "md")
      )),
      Fe.set("mode", Ae),
      e.documentElement.setAttribute("mode", Ae),
      e.documentElement.classList.add(Ae),
      Fe.getBoolean("_testing") && Fe.set("animated", !1),
      (() => be.push(e => (e.mode = e.mode || e.getAttribute("mode") || Ae)))();
  };
function Ve() {
  Be();
}
export {
  H,
  W as a,
  ge as b,
  Fe as c,
  ve as d,
  Ee as e,
  Re as f,
  Ve as g,
  z as h,
  _e as i,
  $e as j,
  U as k,
  je as l,
  ke as m,
  F as p,
  w as r,
  D as w
};
