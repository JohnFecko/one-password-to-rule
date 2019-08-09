import { c as t } from "./p-57e9347d.js";
let o = 0;
const n = t => ({
    create: o => i(t, o),
    dismiss: (o, n, e) => u(document, o, n, t, e),
    getTop: async () => d(document, t)
  }),
  e = n("ion-alert"),
  s = n("ion-action-sheet"),
  a = n("ion-picker"),
  r = n("ion-popover"),
  i = (t, n) =>
    customElements.whenDefined(t).then(() => {
      const e = document,
        s = e.createElement(t);
      c(e), Object.assign(s, n), s.classList.add("overlay-hidden");
      const a = o++;
      return (
        (s.overlayIndex = a),
        s.hasAttribute("id") || (s.id = `ion-overlay-${a}`),
        l(e).appendChild(s),
        s.componentOnReady()
      );
    }),
  c = t => {
    0 === o &&
      ((o = 1),
      t.addEventListener("focusin", o => {
        const n = d(t);
        if (n && n.backdropDismiss && !h(n, o.target)) {
          const t = n.querySelector("input,button");
          t && t.focus();
        }
      }),
      t.addEventListener("ionBackButton", o => {
        const n = d(t);
        n &&
          n.backdropDismiss &&
          o.detail.register(100, () => n.dismiss(void 0, j));
      }),
      t.addEventListener("keyup", o => {
        if ("Escape" === o.key) {
          const o = d(t);
          o && o.backdropDismiss && o.dismiss(void 0, j);
        }
      }));
  },
  u = (t, o, n, e, s) => {
    const a = d(t, e, s);
    return a ? a.dismiss(o, n) : Promise.reject("overlay does not exist");
  },
  d = (t, o, n) => {
    const e = ((t, o) => {
      const n = Array.from(l(t).children).filter(t => t.overlayIndex > 0);
      return void 0 === o
        ? n
        : ((o = o.toUpperCase()), n.filter(t => t.tagName === o));
    })(t, o);
    return void 0 === n ? e[e.length - 1] : e.find(t => t.id === n);
  },
  p = async (o, n, e, s, a) => {
    if (o.presented) return;
    (o.presented = !0), o.willPresent.emit();
    const r = o.enterAnimation
      ? o.enterAnimation
      : t.get(n, "ios" === o.mode ? e : s);
    (await m(o, r, o.el, a)) && o.didPresent.emit();
  },
  f = async (o, n, e, s, a, r, i) => {
    if (!o.presented) return !1;
    o.presented = !1;
    try {
      o.willDismiss.emit({ data: n, role: e });
      const c = o.leaveAnimation
        ? o.leaveAnimation
        : t.get(s, "ios" === o.mode ? a : r);
      await m(o, c, o.el, i), o.didDismiss.emit({ data: n, role: e });
    } catch (t) {
      console.error(t);
    }
    return o.el.remove(), !0;
  },
  l = t => t.querySelector("ion-app") || t.body,
  m = async (o, n, e, s) => {
    if (o.animation) return o.animation.destroy(), (o.animation = void 0), !1;
    e.classList.remove("overlay-hidden");
    const a = e.shadowRoot || o.el,
      r = await __sc_import_web_components("./p-d3aa5dba.js").then(t =>
        t.create(n, a, s)
      );
    (o.animation = r),
      (o.animated && t.getBoolean("animated", !0)) || r.duration(0),
      o.keyboardClose &&
        r.beforeAddWrite(() => {
          const t = e.ownerDocument.activeElement;
          t && t.matches("input, ion-input, ion-textarea") && t.blur();
        }),
      await r.playAsync();
    const i = r.hasCompleted;
    return r.destroy(), (o.animation = void 0), i;
  },
  y = (t, o) => {
    let n;
    const e = new Promise(t => (n = t));
    return (
      v(t, o, t => {
        n(t.detail);
      }),
      e
    );
  },
  v = (t, o, n) => {
    const e = s => {
      t.removeEventListener(o, e), n(s);
    };
    t.addEventListener(o, e);
  },
  b = t => "cancel" === t || t === j,
  h = (t, o) => {
    for (; o; ) {
      if (o === t) return !0;
      o = o.parentElement;
    }
    return !1;
  },
  w = t => t(),
  _ = (o, n) => {
    if ("function" == typeof o)
      return t.get("_zoneGate", w)(() => {
        try {
          return o(n);
        } catch (t) {
          console.error(t);
        }
      });
  },
  j = "backdrop";
export {
  j as B,
  f as a,
  a as b,
  i as c,
  u as d,
  y as e,
  r as f,
  d as g,
  s as h,
  b as i,
  e as j,
  p,
  _ as s
};
