import { w as i } from "./p-57e9347d.js";
const a = "ionViewWillLeave",
  n = "ionViewDidLeave",
  e = "ionViewWillUnload",
  o = a =>
    new Promise((n, e) => {
      i(() => {
        s(a),
          t(a).then(
            i => {
              i.animation && i.animation.destroy(), c(a), n(i);
            },
            i => {
              c(a), e(i);
            }
          );
      });
    }),
  s = i => {
    const a = i.enteringEl,
      n = i.leavingEl;
    g(a, n, i.direction),
      i.showGoBack
        ? a.classList.add("can-go-back")
        : a.classList.remove("can-go-back"),
      V(a, !1),
      n && V(n, !1);
  },
  t = async i => {
    const a = await r(i);
    return a ? w(a, i) : d(i);
  },
  c = i => {
    const a = i.leavingEl;
    i.enteringEl.classList.remove("ion-page-invisible"),
      void 0 !== a && a.classList.remove("ion-page-invisible");
  },
  r = async i => {
    if (i.leavingEl && i.animated && 0 !== i.duration)
      return i.animationBuilder
        ? i.animationBuilder
        : "ios" === i.mode
        ? (await (() => __sc_import_web_components("./p-bdc3a806.js"))())
            .iosTransitionAnimation
        : (await (() => __sc_import_web_components("./p-3ed08426.js"))())
            .mdTransitionAnimation;
  },
  w = async (i, a) => {
    await l(a, !0);
    const n = await __sc_import_web_components("./p-d3aa5dba.js").then(n =>
      n.create(i, a.baseEl, a)
    );
    return (
      b(a.enteringEl, a.leavingEl),
      await m(n, a),
      a.progressCallback && a.progressCallback(void 0),
      n.hasCompleted && _(a.enteringEl, a.leavingEl),
      { hasCompleted: n.hasCompleted, animation: n }
    );
  },
  d = async i => {
    const a = i.enteringEl,
      n = i.leavingEl;
    return await l(i, !1), b(a, n), _(a, n), { hasCompleted: !0 };
  },
  l = async (i, a) => {
    const n = (void 0 !== i.deepWait
    ? i.deepWait
    : a)
      ? [y(i.enteringEl), y(i.leavingEl)]
      : [u(i.enteringEl), u(i.leavingEl)];
    await Promise.all(n), await p(i.viewIsReady, i.enteringEl);
  },
  p = async (i, a) => {
    i && (await i(a));
  },
  m = (i, a) => {
    const n = a.progressCallback,
      e = new Promise(a => i.onFinish(a));
    return n ? (i.progressStart(), n(i)) : i.play(), e;
  },
  b = (i, a) => {
    v(a, "ionViewWillLeave"), v(i, "ionViewWillEnter");
  },
  _ = (i, a) => {
    v(i, "ionViewDidEnter"), v(a, "ionViewDidLeave");
  },
  v = (i, a) => {
    if (i) {
      const n = new CustomEvent(a, { bubbles: !1, cancelable: !1 });
      i.dispatchEvent(n);
    }
  },
  u = i => (i && i.componentOnReady ? i.componentOnReady() : Promise.resolve()),
  y = async i => {
    const a = i;
    if (a) {
      if (null != a.componentOnReady && null != (await a.componentOnReady()))
        return;
      await Promise.all(Array.from(a.children).map(y));
    }
  },
  V = (i, a) => {
    a
      ? (i.setAttribute("aria-hidden", "true"),
        i.classList.add("ion-page-hidden"))
      : ((i.hidden = !1),
        i.removeAttribute("aria-hidden"),
        i.classList.remove("ion-page-hidden"));
  },
  g = (i, a, n) => {
    void 0 !== i && (i.style.zIndex = "back" === n ? "99" : "101"),
      void 0 !== a && (a.style.zIndex = "100");
  };
export { e as L, a, n as b, y as d, v as l, V as s, o as t };
