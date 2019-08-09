import { r as t, d as i, e, c as s, h as r, f as o } from "./p-57e9347d.js";
import { b as n } from "./p-18f3dc7c.js";
import { a } from "./p-8aba239f.js";
import {
  l as h,
  t as c,
  s as d,
  L as u,
  a as v,
  b as l
} from "./p-2a2b1034.js";
const m = 1,
  f = 2,
  p = 3;
class w {
  constructor(t, i) {
    (this.component = t), (this.params = i), (this.state = m);
  }
  async init(t) {
    if (((this.state = f), !this.element)) {
      const i = this.component;
      this.element = await a(
        this.delegate,
        t,
        i,
        ["ion-page", "ion-page-invisible"],
        this.params
      );
    }
  }
  _destroy() {
    n(this.state !== p, "view state must be ATTACHED");
    const t = this.element;
    t &&
      (this.delegate
        ? this.delegate.removeViewFromDom(t.parentElement, t)
        : t.remove()),
      (this.nav = void 0),
      (this.state = p);
  }
}
const g = (t, i, e) => {
    if (!t) return !1;
    if (t.component !== i) return !1;
    const s = t.params;
    if (s === e) return !0;
    if (!s && !e) return !0;
    if (!s || !e) return !1;
    const r = Object.keys(s),
      o = Object.keys(e);
    if (r.length !== o.length) return !1;
    for (const t of r) if (s[t] !== e[t]) return !1;
    return !0;
  },
  b = (t, i) => (t ? (t instanceof w ? t : new w(t, i)) : null),
  y = class {
    constructor(e) {
      t(this, e),
        (this.transInstr = []),
        (this.useRouter = !1),
        (this.isTransitioning = !1),
        (this.destroyed = !1),
        (this.views = []),
        (this.animated = !0),
        (this.ionNavWillLoad = i(this, "ionNavWillLoad", 7)),
        (this.ionNavWillChange = i(this, "ionNavWillChange", 3)),
        (this.ionNavDidChange = i(this, "ionNavDidChange", 3));
    }
    swipeGestureChanged() {
      this.gesture && this.gesture.setDisabled(!0 !== this.swipeGesture);
    }
    rootChanged() {
      void 0 !== this.root &&
        (this.useRouter || this.setRoot(this.root, this.rootParams));
    }
    componentWillLoad() {
      if (
        ((this.useRouter =
          !!document.querySelector("ion-router") &&
          !this.el.closest("[no-router]")),
        void 0 === this.swipeGesture)
      ) {
        const t = e(this);
        this.swipeGesture = s.getBoolean("swipeBackEnabled", "ios" === t);
      }
      this.ionNavWillLoad.emit();
    }
    async componentDidLoad() {
      this.rootChanged(),
        (this.gesture = (await __sc_import_web_components(
          "./p-a3b910f4.js"
        )).createSwipeBackGesture(
          this.el,
          this.canStart.bind(this),
          this.onStart.bind(this),
          this.onMove.bind(this),
          this.onEnd.bind(this)
        )),
        this.swipeGestureChanged();
    }
    componentDidUnload() {
      for (const t of this.views) h(t.element, u), t._destroy();
      this.gesture && (this.gesture.destroy(), (this.gesture = void 0)),
        (this.transInstr.length = this.views.length = 0),
        (this.destroyed = !0);
    }
    push(t, i, e, s) {
      return this.queueTrns(
        { insertStart: -1, insertViews: [{ page: t, params: i }], opts: e },
        s
      );
    }
    insert(t, i, e, s, r) {
      return this.queueTrns(
        { insertStart: t, insertViews: [{ page: i, params: e }], opts: s },
        r
      );
    }
    insertPages(t, i, e, s) {
      return this.queueTrns({ insertStart: t, insertViews: i, opts: e }, s);
    }
    pop(t, i) {
      return this.queueTrns({ removeStart: -1, removeCount: 1, opts: t }, i);
    }
    popTo(t, i, e) {
      const s = { removeStart: -1, removeCount: -1, opts: i };
      return (
        "object" == typeof t && t.component
          ? ((s.removeView = t), (s.removeStart = 1))
          : "number" == typeof t && (s.removeStart = t + 1),
        this.queueTrns(s, e)
      );
    }
    popToRoot(t, i) {
      return this.queueTrns({ removeStart: 1, removeCount: -1, opts: t }, i);
    }
    removeIndex(t, i = 1, e, s) {
      return this.queueTrns({ removeStart: t, removeCount: i, opts: e }, s);
    }
    setRoot(t, i, e, s) {
      return this.setPages([{ page: t, params: i }], e, s);
    }
    setPages(t, i, e) {
      return (
        null == i && (i = {}),
        !0 !== i.animated && (i.animated = !1),
        this.queueTrns(
          {
            insertStart: 0,
            insertViews: t,
            removeStart: 0,
            removeCount: -1,
            opts: i
          },
          e
        )
      );
    }
    setRouteId(t, i, e) {
      const s = this.getActiveSync();
      if (g(s, t, i))
        return Promise.resolve({ changed: !1, element: s.element });
      let r;
      const o = new Promise(t => (r = t));
      let n;
      const a = {
        updateURL: !1,
        viewIsReady: t => {
          let i;
          const e = new Promise(t => (i = t));
          return (
            r({
              changed: !0,
              element: t,
              markVisible: async () => {
                i(), await n;
              }
            }),
            e
          );
        }
      };
      if ("root" === e) n = this.setRoot(t, i, a);
      else {
        const s = this.views.find(e => g(e, t, i));
        s
          ? (n = this.popTo(s, Object.assign({}, a, { direction: "back" })))
          : "forward" === e
          ? (n = this.push(t, i, a))
          : "back" === e &&
            (n = this.setRoot(
              t,
              i,
              Object.assign({}, a, { direction: "back", animated: !0 })
            ));
      }
      return o;
    }
    async getRouteId() {
      const t = this.getActiveSync();
      return t
        ? { id: t.element.tagName, params: t.params, element: t.element }
        : void 0;
    }
    getActive() {
      return Promise.resolve(this.getActiveSync());
    }
    getByIndex(t) {
      return Promise.resolve(this.views[t]);
    }
    canGoBack(t) {
      return Promise.resolve(this.canGoBackSync(t));
    }
    getPrevious(t) {
      return Promise.resolve(this.getPreviousSync(t));
    }
    getLength() {
      return this.views.length;
    }
    getActiveSync() {
      return this.views[this.views.length - 1];
    }
    canGoBackSync(t = this.getActiveSync()) {
      return !(!t || !this.getPreviousSync(t));
    }
    getPreviousSync(t = this.getActiveSync()) {
      if (!t) return;
      const i = this.views,
        e = i.indexOf(t);
      return e > 0 ? i[e - 1] : void 0;
    }
    queueTrns(t, i) {
      if (this.isTransitioning && null != t.opts && t.opts.skipIfBusy)
        return Promise.resolve(!1);
      const e = new Promise((i, e) => {
        (t.resolve = i), (t.reject = e);
      });
      return (
        (t.done = i),
        t.insertViews && 0 === t.insertViews.length && (t.insertViews = void 0),
        this.transInstr.push(t),
        this.nextTrns(),
        e
      );
    }
    success(t, i) {
      if (this.destroyed) this.fireError("nav controller was destroyed", i);
      else if (
        (i.done &&
          i.done(
            t.hasCompleted,
            t.requiresTransition,
            t.enteringView,
            t.leavingView,
            t.direction
          ),
        i.resolve(t.hasCompleted),
        !1 !== i.opts.updateURL && this.useRouter)
      ) {
        const i = document.querySelector("ion-router");
        i && i.navChanged("back" === t.direction ? "back" : "forward");
      }
    }
    failed(t, i) {
      this.destroyed
        ? this.fireError("nav controller was destroyed", i)
        : ((this.transInstr.length = 0), this.fireError(t, i));
    }
    fireError(t, i) {
      i.done && i.done(!1, !1, t),
        i.reject && !this.destroyed ? i.reject(t) : i.resolve(!1);
    }
    nextTrns() {
      if (this.isTransitioning) return !1;
      const t = this.transInstr.shift();
      return !!t && (this.runTransition(t), !0);
    }
    async runTransition(t) {
      try {
        this.ionNavWillChange.emit(),
          (this.isTransitioning = !0),
          this.prepareTI(t);
        const i = this.getActiveSync(),
          e = this.getEnteringView(t, i);
        if (!i && !e) throw new Error("no views in the stack to be removed");
        e && e.state === m && (await e.init(this.el)),
          this.postViewInit(e, i, t);
        const s =
          (t.enteringRequiresTransition || t.leavingRequiresTransition) &&
          e !== i
            ? await this.transition(e, i, t)
            : { hasCompleted: !0, requiresTransition: !1 };
        this.success(s, t), this.ionNavDidChange.emit();
      } catch (i) {
        this.failed(i, t);
      }
      (this.isTransitioning = !1), this.nextTrns();
    }
    prepareTI(t) {
      const i = this.views.length;
      if (
        ((t.opts = t.opts || {}),
        void 0 === t.opts.delegate && (t.opts.delegate = this.delegate),
        void 0 !== t.removeView)
      ) {
        n(void 0 !== t.removeStart, "removeView needs removeStart"),
          n(void 0 !== t.removeCount, "removeView needs removeCount");
        const i = this.views.indexOf(t.removeView);
        if (i < 0) throw new Error("removeView was not found");
        t.removeStart += i;
      }
      void 0 !== t.removeStart &&
        (t.removeStart < 0 && (t.removeStart = i - 1),
        t.removeCount < 0 && (t.removeCount = i - t.removeStart),
        (t.leavingRequiresTransition =
          t.removeCount > 0 && t.removeStart + t.removeCount === i)),
        t.insertViews &&
          ((t.insertStart < 0 || t.insertStart > i) && (t.insertStart = i),
          (t.enteringRequiresTransition = t.insertStart === i));
      const e = t.insertViews;
      if (!e) return;
      n(e.length > 0, "length can not be zero");
      const s = (t =>
        t
          .map(t =>
            t instanceof w
              ? t
              : "page" in t
              ? b(t.page, t.params)
              : b(t, void 0)
          )
          .filter(t => null !== t))(e);
      if (0 === s.length) throw new Error("invalid views to insert");
      for (const i of s) {
        i.delegate = t.opts.delegate;
        const e = i.nav;
        if (e && e !== this)
          throw new Error("inserted view was already inserted");
        if (i.state === p)
          throw new Error("inserted view was already destroyed");
      }
      t.insertViews = s;
    }
    getEnteringView(t, i) {
      const e = t.insertViews;
      if (void 0 !== e) return e[e.length - 1];
      const s = t.removeStart;
      if (void 0 !== s) {
        const e = this.views,
          r = s + t.removeCount;
        for (let t = e.length - 1; t >= 0; t--) {
          const o = e[t];
          if ((t < s || t >= r) && o !== i) return o;
        }
      }
    }
    postViewInit(t, i, e) {
      n(i || t, "Both leavingView and enteringView are null"),
        n(e.resolve, "resolve must be valid"),
        n(e.reject, "reject must be valid");
      const s = e.opts,
        r = e.insertViews,
        o = e.removeStart,
        a = e.removeCount;
      let c;
      if (void 0 !== o && void 0 !== a) {
        n(o >= 0, "removeStart can not be negative"),
          n(a >= 0, "removeCount can not be negative"),
          (c = []);
        for (let e = 0; e < a; e++) {
          const s = this.views[e + o];
          s && s !== t && s !== i && c.push(s);
        }
        s.direction = s.direction || "back";
      }
      const d =
        this.views.length +
        (void 0 !== r ? r.length : 0) -
        (void 0 !== a ? a : 0);
      if ((n(d >= 0, "final balance can not be negative"), 0 === d))
        throw (console.warn(
          "You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",
          this,
          this.el
        ),
        new Error("navigation stack needs at least one root page"));
      if (r) {
        let t = e.insertStart;
        for (const i of r) this.insertViewAt(i, t), t++;
        e.enteringRequiresTransition &&
          (s.direction = s.direction || "forward");
      }
      if (c && c.length > 0) {
        for (const t of c) h(t.element, v), h(t.element, l), h(t.element, u);
        for (const t of c) this.destroyView(t);
      }
    }
    async transition(t, i, r) {
      const o = r.opts,
        n = o.progressAnimation ? t => (this.sbAni = t) : void 0,
        a = e(this),
        h = t.element,
        d = i && i.element,
        u = Object.assign(
          {
            mode: a,
            showGoBack: this.canGoBackSync(t),
            baseEl: this.el,
            animationBuilder:
              this.animation || o.animationBuilder || s.get("navAnimation"),
            progressCallback: n,
            animated: this.animated && s.getBoolean("animated", !0),
            enteringEl: h,
            leavingEl: d
          },
          o
        ),
        { hasCompleted: v } = await c(u);
      return this.transitionFinish(v, t, i, o);
    }
    transitionFinish(t, i, e, s) {
      const r = t ? i : e;
      return (
        r && this.cleanup(r),
        {
          hasCompleted: t,
          requiresTransition: !0,
          enteringView: i,
          leavingView: e,
          direction: s.direction
        }
      );
    }
    insertViewAt(t, i) {
      const e = this.views,
        s = e.indexOf(t);
      s > -1
        ? (n(t.nav === this, "view is not part of the nav"),
          e.splice(i, 0, e.splice(s, 1)[0]))
        : (n(!t.nav, "nav is used"), (t.nav = this), e.splice(i, 0, t));
    }
    removeView(t) {
      n(
        t.state === f || t.state === p,
        "view state should be loaded or destroyed"
      );
      const i = this.views,
        e = i.indexOf(t);
      n(e > -1, "view must be part of the stack"), e >= 0 && i.splice(e, 1);
    }
    destroyView(t) {
      t._destroy(), this.removeView(t);
    }
    cleanup(t) {
      if (this.destroyed) return;
      const i = this.views,
        e = i.indexOf(t);
      for (let t = i.length - 1; t >= 0; t--) {
        const s = i[t],
          r = s.element;
        t > e ? (h(r, u), this.destroyView(s)) : t < e && d(r, !0);
      }
    }
    canStart() {
      return (
        !!this.swipeGesture &&
        !this.isTransitioning &&
        0 === this.transInstr.length &&
        this.canGoBackSync()
      );
    }
    onStart() {
      this.queueTrns(
        {
          removeStart: -1,
          removeCount: 1,
          opts: { direction: "back", progressAnimation: !0 }
        },
        void 0
      );
    }
    onMove(t) {
      this.sbAni && this.sbAni.progressStep(t);
    }
    onEnd(t, i, e) {
      this.sbAni && this.sbAni.progressEnd(t, i, e);
    }
    render() {
      return r("slot", null);
    }
    get el() {
      return o(this);
    }
    static get watchers() {
      return { swipeGesture: ["swipeGestureChanged"], root: ["rootChanged"] };
    }
    static get style() {
      return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";
    }
  };
export { y as ion_nav };
