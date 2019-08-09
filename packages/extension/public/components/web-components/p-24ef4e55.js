import { w as t } from "./p-57e9347d.js";
class s {
  constructor(t, s, e, i, r) {
    (this.id = s),
      (this.name = e),
      (this.disableScroll = r),
      (this.priority = 1e6 * i + s),
      (this.ctrl = t);
  }
  canStart() {
    return !!this.ctrl && this.ctrl.canStart(this.name);
  }
  start() {
    return !!this.ctrl && this.ctrl.start(this.name, this.id, this.priority);
  }
  capture() {
    if (!this.ctrl) return !1;
    const t = this.ctrl.capture(this.name, this.id, this.priority);
    return t && this.disableScroll && this.ctrl.disableScroll(this.id), t;
  }
  release() {
    this.ctrl &&
      (this.ctrl.release(this.id),
      this.disableScroll && this.ctrl.enableScroll(this.id));
  }
  destroy() {
    this.release(), (this.ctrl = void 0);
  }
}
class e {
  constructor(t, s, e, i) {
    (this.id = s),
      (this.disable = e),
      (this.disableScroll = i),
      (this.ctrl = t);
  }
  block() {
    if (this.ctrl) {
      if (this.disable)
        for (const t of this.disable) this.ctrl.disableGesture(t, this.id);
      this.disableScroll && this.ctrl.disableScroll(this.id);
    }
  }
  unblock() {
    if (this.ctrl) {
      if (this.disable)
        for (const t of this.disable) this.ctrl.enableGesture(t, this.id);
      this.disableScroll && this.ctrl.enableScroll(this.id);
    }
  }
  destroy() {
    this.unblock(), (this.ctrl = void 0);
  }
}
const i = new (class {
    constructor() {
      (this.gestureId = 0),
        (this.requestedStart = new Map()),
        (this.disabledGestures = new Map()),
        (this.disabledScroll = new Set());
    }
    createGesture(t) {
      return new s(
        this,
        this.newID(),
        t.name,
        t.priority || 0,
        !!t.disableScroll
      );
    }
    createBlocker(t = {}) {
      return new e(this, this.newID(), t.disable, !!t.disableScroll);
    }
    start(t, s, e) {
      return this.canStart(t)
        ? (this.requestedStart.set(s, e), !0)
        : (this.requestedStart.delete(s), !1);
    }
    capture(t, s, e) {
      if (!this.start(t, s, e)) return !1;
      const i = this.requestedStart;
      let r = -1e4;
      if (
        (i.forEach(t => {
          r = Math.max(r, t);
        }),
        r === e)
      ) {
        (this.capturedId = s), i.clear();
        const e = new CustomEvent("ionGestureCaptured", {
          detail: { gestureName: t }
        });
        return document.dispatchEvent(e), !0;
      }
      return i.delete(s), !1;
    }
    release(t) {
      this.requestedStart.delete(t),
        this.capturedId === t && (this.capturedId = void 0);
    }
    disableGesture(t, s) {
      let e = this.disabledGestures.get(t);
      void 0 === e && ((e = new Set()), this.disabledGestures.set(t, e)),
        e.add(s);
    }
    enableGesture(t, s) {
      const e = this.disabledGestures.get(t);
      void 0 !== e && e.delete(s);
    }
    disableScroll(t) {
      this.disabledScroll.add(t),
        1 === this.disabledScroll.size &&
          document.body.classList.add("backdrop-no-scroll");
    }
    enableScroll(t) {
      this.disabledScroll.delete(t),
        0 === this.disabledScroll.size &&
          document.body.classList.remove("backdrop-no-scroll");
    }
    canStart(t) {
      return void 0 === this.capturedId && !this.isDisabled(t);
    }
    isCaptured() {
      return void 0 !== this.capturedId;
    }
    isScrollDisabled() {
      return this.disabledScroll.size > 0;
    }
    isDisabled(t) {
      const s = this.disabledGestures.get(t);
      return !!(s && s.size > 0);
    }
    newID() {
      return this.gestureId++, this.gestureId;
    }
  })(),
  r = (t, s, e, i) => {
    const r = o(t)
      ? { capture: !!i.capture, passive: !!i.passive }
      : !!i.capture;
    let n, h;
    return (
      t.__zone_symbol__addEventListener
        ? ((n = "__zone_symbol__addEventListener"),
          (h = "__zone_symbol__removeEventListener"))
        : ((n = "addEventListener"), (h = "removeEventListener")),
      t[n](s, e, r),
      () => {
        t[h](s, e, r);
      }
    );
  },
  o = t => {
    if (void 0 === n)
      try {
        const s = Object.defineProperty({}, "passive", {
          get: () => {
            n = !0;
          }
        });
        t.addEventListener("optsTest", () => {}, s);
      } catch (t) {
        n = !1;
      }
    return !!n;
  };
let n;
const h = t => (t instanceof Document ? t : t.ownerDocument),
  c = s => {
    let e = !1,
      o = !1,
      n = !0,
      c = !1;
    const d = Object.assign(
        {
          disableScroll: !1,
          direction: "x",
          gesturePriority: 0,
          passive: !0,
          maxAngle: 40,
          threshold: 10
        },
        s
      ),
      v = d.canStart,
      p = d.onWillStart,
      m = d.onStart,
      f = d.onEnd,
      b = d.notCaptured,
      y = d.onMove,
      w = d.threshold,
      S = {
        type: "pan",
        startX: 0,
        startY: 0,
        startTimeStamp: 0,
        currentX: 0,
        currentY: 0,
        velocityX: 0,
        velocityY: 0,
        deltaX: 0,
        deltaY: 0,
        timeStamp: 0,
        event: void 0,
        data: void 0
      },
      D = ((t, s) => {
        const e = d.maxAngle * (Math.PI / 180),
          i = "x" === d.direction,
          r = Math.cos(e),
          o = s * s;
        let n = 0,
          h = 0,
          c = !1,
          a = 0;
        return {
          start(t, s) {
            (n = t), (h = s), (a = 0), (c = !0);
          },
          detect(t, s) {
            if (!c) return !1;
            const e = t - n,
              u = s - h,
              l = e * e + u * u;
            if (l < o) return !1;
            const d = Math.sqrt(l),
              v = (i ? e : u) / d;
            return (a = v > r ? 1 : v < -r ? -1 : 0), (c = !1), !0;
          },
          isGesture: () => 0 !== a,
          getDirection: () => a
        };
      })(0, d.threshold),
      _ = i.createGesture({
        name: s.gestureName,
        priority: s.gesturePriority,
        disableScroll: s.disableScroll
      }),
      M = () => {
        e && ((c = !1), y && y(S));
      },
      g = () =>
        !(
          (_ && !_.capture()) ||
          ((e = !0),
          (n = !1),
          (S.startX = S.currentX),
          (S.startY = S.currentY),
          (S.startTimeStamp = S.timeStamp),
          p ? p(S).then(k) : k(),
          0)
        ),
      k = () => {
        m && m(S), (n = !0);
      },
      E = () => {
        (e = !1), (o = !1), (c = !1), (n = !0), _.release();
      },
      G = t => {
        const s = e,
          i = n;
        E(), i && (a(S, t), s ? f && f(S) : b && b(S));
      },
      x = ((t, s, e, i, o) => {
        let n,
          c,
          a,
          u,
          l,
          d,
          v,
          p = 0;
        const m = i => {
            (p = Date.now() + 2e3),
              s(i) &&
                (!c && e && (c = r(t, "touchmove", e, o)),
                a || (a = r(t, "touchend", b, o)),
                u || (u = r(t, "touchcancel", b, o)));
          },
          f = i => {
            p > Date.now() ||
              (s(i) &&
                (!d && e && (d = r(h(t), "mousemove", e, o)),
                v || (v = r(h(t), "mouseup", y, o))));
          },
          b = t => {
            w(), i && i(t);
          },
          y = t => {
            S(), i && i(t);
          },
          w = () => {
            c && c(), a && a(), u && u(), (c = a = u = void 0);
          },
          S = () => {
            d && d(), v && v(), (d = v = void 0);
          },
          D = () => {
            w(), S();
          },
          _ = s => {
            s
              ? (n && n(), l && l(), (n = l = void 0), D())
              : (n || (n = r(t, "touchstart", m, o)),
                l || (l = r(t, "mousedown", f, o)));
          };
        return {
          setDisabled: _,
          stop: D,
          destroy: () => {
            _(!0), (i = e = s = void 0);
          }
        };
      })(
        d.el,
        t => {
          const s = l(t);
          return (
            !(o || !n) &&
            (u(t, S),
            (S.startX = S.currentX),
            (S.startY = S.currentY),
            (S.startTimeStamp = S.timeStamp = s),
            (S.velocityX = S.velocityY = S.deltaX = S.deltaY = 0),
            (S.event = t),
            (!v || !1 !== v(S)) &&
              (_.release(),
              !!_.start() &&
                ((o = !0), 0 === w ? g() : (D.start(S.startX, S.startY), !0))))
          );
        },
        s => {
          e
            ? !c && n && ((c = !0), a(S, s), t(M))
            : (a(S, s),
              D.detect(S.currentX, S.currentY) &&
                ((D.isGesture() && g()) || L()));
        },
        G,
        { capture: !1 }
      ),
      L = () => {
        E(), x.stop(), b && b(S);
      };
    return {
      setDisabled(t) {
        t && e && G(void 0), x.setDisabled(t);
      },
      destroy() {
        _.destroy(), x.destroy();
      }
    };
  },
  a = (t, s) => {
    if (!s) return;
    const e = t.currentX,
      i = t.currentY,
      r = t.timeStamp;
    u(s, t);
    const o = t.currentX,
      n = t.currentY,
      h = (t.timeStamp = l(s)) - r;
    if (h > 0 && h < 100) {
      const s = (n - i) / h;
      (t.velocityX = ((o - e) / h) * 0.7 + 0.3 * t.velocityX),
        (t.velocityY = 0.7 * s + 0.3 * t.velocityY);
    }
    (t.deltaX = o - t.startX), (t.deltaY = n - t.startY), (t.event = s);
  },
  u = (t, s) => {
    let e = 0,
      i = 0;
    if (t) {
      const s = t.changedTouches;
      if (s && s.length > 0) {
        const t = s[0];
        (e = t.clientX), (i = t.clientY);
      } else void 0 !== t.pageX && ((e = t.pageX), (i = t.pageY));
    }
    (s.currentX = e), (s.currentY = i);
  },
  l = t => t.timeStamp || Date.now();
export { i as GESTURE_CONTROLLER, c as createGesture };
