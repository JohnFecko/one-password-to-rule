import { n as t, p as o } from "./p-18f3dc7c.js";
const e = e => {
    let l,
      f,
      d,
      v,
      p = 10 * -u,
      m = 0;
    const T = e.getBoolean("animated", !0) && e.getBoolean("rippleEffect", !0),
      h = new WeakMap(),
      w = o => {
        (p = t(o)), S(o);
      },
      b = () => {
        clearTimeout(v), (v = void 0), f && (k(!1), (f = void 0));
      },
      E = t => {
        f ||
          (() => void 0 !== l && null !== l.parentElement)() ||
          ((l = void 0), x(i(t), t));
      },
      S = t => {
        x(void 0, t);
      },
      x = (t, e) => {
        if (t && t === f) return;
        clearTimeout(v), (v = void 0);
        const { x: i, y: r } = o(e);
        if (f) {
          if (h.has(f)) throw new Error("internal error");
          f.classList.contains(c) || D(f, i, r), k(!0);
        }
        if (t) {
          const o = h.get(t);
          o && (clearTimeout(o), h.delete(t));
          const e = n(t) ? 0 : a;
          t.classList.remove(c),
            (v = setTimeout(() => {
              D(t, i, r), (v = void 0);
            }, e));
        }
        f = t;
      },
      D = (t, o, e) => {
        (m = Date.now()), t.classList.add(c);
        const i = T && r(t);
        i && i.addRipple && (j(), (d = i.addRipple(o, e)));
      },
      j = () => {
        void 0 !== d && (d.then(t => t()), (d = void 0));
      },
      k = t => {
        j();
        const o = f;
        if (!o) return;
        const e = s - Date.now() + m;
        if (t && e > 0 && !n(o)) {
          const t = setTimeout(() => {
            o.classList.remove(c), h.delete(o);
          }, s);
          h.set(o, t);
        } else o.classList.remove(c);
      },
      y = document;
    y.addEventListener("ionScrollStart", t => {
      (l = t.target), b();
    }),
      y.addEventListener("ionScrollEnd", () => {
        l = void 0;
      }),
      y.addEventListener("ionGestureCaptured", b),
      y.addEventListener(
        "touchstart",
        o => {
          (p = t(o)), E(o);
        },
        !0
      ),
      y.addEventListener("touchcancel", w, !0),
      y.addEventListener("touchend", w, !0),
      y.addEventListener(
        "mousedown",
        o => {
          const e = t(o) - u;
          p < e && E(o);
        },
        !0
      ),
      y.addEventListener(
        "mouseup",
        o => {
          const e = t(o) - u;
          p < e && S(o);
        },
        !0
      );
  },
  i = t => {
    if (!t.composedPath) return t.target.closest(".ion-activatable");
    {
      const o = t.composedPath();
      for (let t = 0; t < o.length - 2; t++) {
        const e = o[t];
        if (e.classList && e.classList.contains("ion-activatable")) return e;
      }
    }
  },
  n = t => t.classList.contains("ion-activatable-instant"),
  r = t => {
    if (t.shadowRoot) {
      const o = t.shadowRoot.querySelector("ion-ripple-effect");
      if (o) return o;
    }
    return t.querySelector("ion-ripple-effect");
  },
  c = "activated",
  a = 200,
  s = 200,
  u = 2500;
export { e as startTapClick };
