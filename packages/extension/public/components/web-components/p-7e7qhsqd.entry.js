import { r as t, d as o, f as n } from "./p-57e9347d.js";
import { e as r } from "./p-18f3dc7c.js";
const s = t => "/" + t.filter(t => t.length > 0).join("/"),
  i = t => {
    if (null == t) return [""];
    const o = t
      .split("/")
      .map(t => t.trim())
      .filter(t => t.length > 0);
    return 0 === o.length ? [""] : o;
  },
  e = async (t, o, n, r, s = !1) => {
    try {
      const i = c(t);
      if (r >= o.length || !i) return s;
      await i.componentOnReady();
      const a = o[r],
        u = await i.setRouteId(a.id, a.params, n);
      return (
        u.changed && ((n = "root"), (s = !0)),
        (s = await e(u.element, o, n, r + 1, s)),
        u.markVisible && (await u.markVisible()),
        s
      );
    } catch (t) {
      return console.error(t), !1;
    }
  },
  a =
    ":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",
  c = t => {
    if (!t) return;
    if (t.matches(a)) return t;
    return t.querySelector(a) || void 0;
  },
  u = (t, o) =>
    o.find(o =>
      ((t, o) => {
        const { from: n, to: r } = o;
        if (void 0 === r) return !1;
        if (n.length > t.length) return !1;
        for (let o = 0; o < n.length; o++) {
          const r = n[o];
          if ("*" === r) return !0;
          if (r !== t[o]) return !1;
        }
        return n.length === t.length;
      })(t, o)
    ),
  h = (t, o) => {
    const n = Math.min(t.length, o.length);
    let r = 0;
    for (; r < n && t[r].toLowerCase() === o[r].id; r++);
    return r;
  },
  l = (t, o) => {
    const n = new w(t);
    let r,
      s = !1;
    for (let t = 0; t < o.length; t++) {
      const i = o[t].path;
      if ("" === i[0]) s = !0;
      else {
        for (const o of i) {
          const s = n.next();
          if (":" === o[0]) {
            if ("" === s) return null;
            ((r = r || [])[t] || (r[t] = {}))[o.slice(1)] = s;
          } else if (s !== o) return null;
        }
        s = !1;
      }
    }
    return s && s !== ("" === n.next())
      ? null
      : r
      ? o.map((t, o) => ({ id: t.id, path: t.path, params: f(t.params, r[o]) }))
      : o;
  },
  f = (t, o) =>
    !t && o ? o : t && !o ? t : t && o ? Object.assign({}, t, o) : void 0,
  d = t => {
    let o = 1,
      n = 1;
    for (const r of t)
      for (const t of r.path)
        ":" === t[0]
          ? (o += Math.pow(1, n))
          : "" !== t && (o += Math.pow(2, n)),
          n++;
    return o;
  };
class w {
  constructor(t) {
    this.path = t.slice();
  }
  next() {
    return this.path.length > 0 ? this.path.shift() : "";
  }
}
const m = t =>
    Array.from(t.children)
      .filter(t => "ION-ROUTE-REDIRECT" === t.tagName)
      .map(t => {
        const o = y(t, "to");
        return { from: i(y(t, "from")), to: null == o ? void 0 : i(o) };
      }),
  p = t => g(R(t)),
  R = (t, o = t) =>
    Array.from(o.children)
      .filter(t => "ION-ROUTE" === t.tagName && t.component)
      .map(o => {
        const n = y(o, "component");
        if (null == n) throw new Error("component missing in ion-route");
        return {
          path: i(y(o, "url")),
          id: n.toLowerCase(),
          params: o.componentProps,
          children: R(t, o)
        };
      }),
  y = (t, o) => (o in t ? t[o] : t.hasAttribute(o) ? t.getAttribute(o) : null),
  g = t => {
    const o = [];
    for (const n of t) v([], o, n);
    return o;
  },
  v = (t, o, n) => {
    const r = t.slice();
    if (
      (r.push({ id: n.id, path: n.path, params: n.params }),
      0 !== n.children.length)
    )
      for (const t of n.children) v(r, o, t);
    else o.push(r);
  },
  C = class {
    constructor(n) {
      t(this, n),
        (this.previousPath = null),
        (this.busy = !1),
        (this.state = 0),
        (this.lastState = 0),
        (this.root = "/"),
        (this.useHash = !0),
        (this.ionRouteWillChange = o(this, "ionRouteWillChange", 7)),
        (this.ionRouteDidChange = o(this, "ionRouteDidChange", 7));
    }
    async componentWillLoad() {
      await (() =>
        c(document.body)
          ? Promise.resolve()
          : new Promise(t => {
              window.addEventListener("ionNavWillLoad", t, { once: !0 });
            }))(),
        await this.onRoutesChanged();
    }
    componentDidLoad() {
      window.addEventListener(
        "ionRouteRedirectChanged",
        r(this.onRedirectChanged.bind(this), 10)
      ),
        window.addEventListener(
          "ionRouteDataChanged",
          r(this.onRoutesChanged.bind(this), 100)
        );
    }
    onPopState() {
      const t = this.historyDirection(),
        o = this.getPath();
      return this.writeNavStateRoot(o, t);
    }
    onBackButton(t) {
      t.detail.register(0, () => this.back());
    }
    push(t, o = "forward") {
      t.startsWith(".") && (t = new URL(t, window.location.href).pathname);
      const n = i(t);
      return this.setPath(n, o), this.writeNavStateRoot(n, o);
    }
    back() {
      return window.history.back(), Promise.resolve(this.waitPromise);
    }
    async printDebug() {
      this.getPath(),
        (t => {
          console.group(`[ion-core] ROUTES[${t.length}]`);
          for (const o of t) {
            const t = [];
            o.forEach(o => t.push(...o.path));
            const n = o.map(t => t.id);
            s(t), n.join(", ");
          }
          console.groupEnd();
        })(p(this.el)),
        (t => {
          console.group(`[ion-core] REDIRECTS[${t.length}]`);
          for (const o of t) o.to && (s(o.from), s(o.to));
          console.groupEnd();
        })(m(this.el));
    }
    async navChanged(t) {
      if (this.busy)
        return (
          console.warn("[ion-router] router is busy, navChanged was cancelled"),
          !1
        );
      const { ids: o, outlet: n } = await (async () => {
          const t = [];
          let o,
            n = window.document.body;
          for (; (o = c(n)); ) {
            const r = await o.getRouteId();
            if (!r) break;
            (n = r.element), (r.element = void 0), t.push(r);
          }
          return { ids: t, outlet: o };
        })(),
        r = ((t, o) => {
          let n = null,
            r = 0;
          const s = t.map(t => t.id);
          for (const t of o) {
            const o = h(s, t);
            o > r && ((n = t), (r = o));
          }
          return n
            ? n.map((o, n) => ({
                id: o.id,
                path: o.path,
                params: f(o.params, t[n] && t[n].params)
              }))
            : null;
        })(o, p(this.el));
      if (!r)
        return (
          console.warn("[ion-router] no matching URL for ", o.map(t => t.id)),
          !1
        );
      const s = (t => {
        const o = [];
        for (const n of t)
          for (const t of n.path)
            if (":" === t[0]) {
              const r = n.params && n.params[t.slice(1)];
              if (!r) return null;
              o.push(r);
            } else "" !== t && o.push(t);
        return o;
      })(r);
      return s
        ? (this.setPath(s, t),
          await this.safeWriteNavState(n, r, "root", s, null, o.length),
          !0)
        : (console.warn(
            "[ion-router] router could not match path because some required param is missing"
          ),
          !1);
    }
    onRedirectChanged() {
      const t = this.getPath();
      t && u(t, m(this.el)) && this.writeNavStateRoot(t, "root");
    }
    onRoutesChanged() {
      return this.writeNavStateRoot(this.getPath(), "root");
    }
    historyDirection() {
      const t = window;
      null === t.history.state &&
        (this.state++,
        t.history.replaceState(
          this.state,
          t.document.title,
          t.document.location && t.document.location.href
        ));
      const o = t.history.state,
        n = this.lastState;
      return (this.lastState = o), o > n ? "forward" : o < n ? "back" : "root";
    }
    async writeNavStateRoot(t, o) {
      if (!t)
        return (
          console.error("[ion-router] URL is not part of the routing set"), !1
        );
      const n = m(this.el),
        r = u(t, n);
      let s = null;
      r && (this.setPath(r.to, o), (s = r.from), (t = r.to));
      const i = ((t, o) => {
        let n = null,
          r = 0;
        for (const s of o) {
          const o = l(t, s);
          if (null !== o) {
            const t = d(o);
            t > r && ((r = t), (n = o));
          }
        }
        return n;
      })(t, p(this.el));
      return i
        ? this.safeWriteNavState(document.body, i, o, t, s)
        : (console.error("[ion-router] the path does not match any route"), !1);
    }
    async safeWriteNavState(t, o, n, r, s, i = 0) {
      const e = await this.lock();
      let a = !1;
      try {
        a = await this.writeNavState(t, o, n, r, s, i);
      } catch (t) {
        console.error(t);
      }
      return e(), a;
    }
    async lock() {
      const t = this.waitPromise;
      let o;
      return (
        (this.waitPromise = new Promise(t => (o = t))),
        void 0 !== t && (await t),
        o
      );
    }
    async writeNavState(t, o, n, r, s, i = 0) {
      if (this.busy)
        return (
          console.warn("[ion-router] router is busy, transition was cancelled"),
          !1
        );
      this.busy = !0;
      const a = this.routeChangeEvent(r, s);
      a && this.ionRouteWillChange.emit(a);
      const c = await e(t, o, n, i);
      return (this.busy = !1), a && this.ionRouteDidChange.emit(a), c;
    }
    setPath(t, o) {
      this.state++,
        ((t, o, n, r, e, a) => {
          let c = s([...i(this.root), ...r]);
          n && (c = "#" + c),
            "forward" === e ? t.pushState(a, "", c) : t.replaceState(a, "", c);
        })(window.history, 0, this.useHash, t, o, this.state);
    }
    getPath() {
      return ((t, o) => {
        let n = t.pathname;
        if (this.useHash) {
          const o = t.hash;
          n = "#" === o[0] ? o.slice(1) : "";
        }
        return ((t, o) => {
          if (t.length > o.length) return null;
          if (t.length <= 1 && "" === t[0]) return o;
          for (let n = 0; n < t.length; n++)
            if (t[n].length > 0 && t[n] !== o[n]) return null;
          return o.length === t.length ? [""] : o.slice(t.length);
        })(i(o), i(n));
      })(window.location, this.root);
    }
    routeChangeEvent(t, o) {
      const n = this.previousPath,
        r = s(t);
      return (
        (this.previousPath = r),
        r === n ? null : { from: n, redirectedFrom: o ? s(o) : null, to: r }
      );
    }
    get el() {
      return n(this);
    }
  };
export { C as ion_router };
