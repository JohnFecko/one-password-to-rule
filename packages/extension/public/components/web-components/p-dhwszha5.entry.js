import {
  r as o,
  e as t,
  d as i,
  h as s,
  H as e,
  f as n
} from "./p-57e9347d.js";
import { B as r, p, a, e as c } from "./p-5f857030.js";
import { g as l } from "./p-955ba954.js";
import { a as h, d as v } from "./p-8aba239f.js";
import { d as w } from "./p-2a2b1034.js";
const m = (o, t, i) => {
    let s = "top",
      e = "left";
    const n = t.querySelector(".popover-content"),
      r = n.getBoundingClientRect(),
      p = r.width,
      a = r.height,
      c = t.ownerDocument.defaultView.innerWidth,
      l = t.ownerDocument.defaultView.innerHeight,
      h = i && i.target && i.target.getBoundingClientRect(),
      v = null != h && "top" in h ? h.top : l / 2 - a / 2,
      w = null != h && "left" in h ? h.left : c / 2,
      m = (h && h.width) || 0,
      u = (h && h.height) || 0,
      P = t.querySelector(".popover-arrow"),
      f = P.getBoundingClientRect(),
      b = f.width,
      D = f.height;
    null == h && (P.style.display = "none");
    const y = { top: v + u, left: w + m / 2 - b / 2 },
      x = { top: v + u + (D - 1), left: w + m / 2 - p / 2 };
    let W = !1,
      E = !1;
    x.left < d + 25
      ? ((W = !0), (x.left = d))
      : p + d + x.left + 25 > c &&
        ((E = !0), (x.left = c - p - d), (e = "right")),
      v + u + a > l && v - a > 0
        ? ((y.top = v - (D + 1)),
          (x.top = v - a - (D - 1)),
          (t.className = t.className + " popover-bottom"),
          (s = "bottom"))
        : v + u + a > l && (n.style.bottom = d + "%"),
      (P.style.top = y.top + "px"),
      (P.style.left = y.left + "px"),
      (n.style.top = x.top + "px"),
      (n.style.left = x.left + "px"),
      W &&
        (n.style.left = `calc(${x.left}px + var(--ion-safe-area-left, 0px))`),
      E &&
        (n.style.left = `calc(${x.left}px - var(--ion-safe-area-right, 0px))`),
      (n.style.transformOrigin = s + " " + e);
    const g = new o(),
      j = new o();
    j.addElement(t.querySelector("ion-backdrop")),
      j.fromTo("opacity", 0.01, 0.08);
    const I = new o();
    return (
      I.addElement(t.querySelector(".popover-wrapper")),
      I.fromTo("opacity", 0.01, 1),
      Promise.resolve(
        g
          .addElement(t)
          .easing("ease")
          .duration(100)
          .add(j)
          .add(I)
      )
    );
  },
  d = 5,
  u = (o, t) => {
    const i = new o(),
      s = new o();
    s.addElement(t.querySelector("ion-backdrop"));
    const e = new o();
    return (
      e.addElement(t.querySelector(".popover-wrapper")),
      e.fromTo("opacity", 0.99, 0),
      s.fromTo("opacity", 0.08, 0),
      Promise.resolve(
        i
          .addElement(t)
          .easing("ease")
          .duration(500)
          .add(s)
          .add(e)
      )
    );
  },
  P = (o, t, i) => {
    const s = t.ownerDocument,
      e = "rtl" === s.dir;
    let n = "top",
      r = e ? "right" : "left";
    const p = t.querySelector(".popover-content"),
      a = p.getBoundingClientRect(),
      c = a.width,
      l = a.height,
      h = s.defaultView.innerWidth,
      v = s.defaultView.innerHeight,
      w = i && i.target && i.target.getBoundingClientRect(),
      m = null != w && "bottom" in w ? w.bottom : v / 2 - l / 2,
      d = (w && w.height) || 0,
      u = {
        top: m,
        left:
          null != w && "left" in w
            ? e
              ? w.left - c + w.width
              : w.left
            : h / 2 - c / 2
      };
    u.left < f
      ? ((u.left = f), (r = "left"))
      : c + f + u.left > h && ((u.left = h - c - f), (r = "right")),
      m + d + l > v && m - l > 0
        ? ((u.top = m - l - d),
          (t.className = t.className + " popover-bottom"),
          (n = "bottom"))
        : m + d + l > v && (p.style.bottom = f + "px"),
      (p.style.top = u.top + "px"),
      (p.style.left = u.left + "px"),
      (p.style.transformOrigin = n + " " + r);
    const P = new o(),
      b = new o();
    b.addElement(t.querySelector("ion-backdrop")),
      b.fromTo("opacity", 0.01, 0.32);
    const D = new o();
    D.addElement(t.querySelector(".popover-wrapper")),
      D.fromTo("opacity", 0.01, 1);
    const y = new o();
    y.addElement(t.querySelector(".popover-content")),
      y.fromTo("scale", 0.001, 1);
    const x = new o();
    return (
      x.addElement(t.querySelector(".popover-viewport")),
      x.fromTo("opacity", 0.01, 1),
      Promise.resolve(
        P.addElement(t)
          .easing("cubic-bezier(0.36,0.66,0.04,1)")
          .duration(300)
          .add(b)
          .add(D)
          .add(y)
          .add(x)
      )
    );
  },
  f = 12,
  b = (o, t) => {
    const i = new o(),
      s = new o();
    s.addElement(t.querySelector("ion-backdrop"));
    const e = new o();
    return (
      e.addElement(t.querySelector(".popover-wrapper")),
      e.fromTo("opacity", 0.99, 0),
      s.fromTo("opacity", 0.32, 0),
      Promise.resolve(
        i
          .addElement(t)
          .easing("ease")
          .duration(500)
          .add(s)
          .add(e)
      )
    );
  },
  D = class {
    constructor(s) {
      o(this, s),
        (this.presented = !1),
        (this.mode = t(this)),
        (this.keyboardClose = !0),
        (this.backdropDismiss = !0),
        (this.showBackdrop = !0),
        (this.translucent = !1),
        (this.animated = !0),
        (this.onDismiss = o => {
          o.stopPropagation(), o.preventDefault(), this.dismiss();
        }),
        (this.onBackdropTap = () => {
          this.dismiss(void 0, r);
        }),
        (this.onLifecycle = o => {
          const t = this.usersElement,
            i = y[o.type];
          if (t && i) {
            const s = new CustomEvent(i, {
              bubbles: !1,
              cancelable: !1,
              detail: o.detail
            });
            t.dispatchEvent(s);
          }
        }),
        (this.didPresent = i(this, "ionPopoverDidPresent", 7)),
        (this.willPresent = i(this, "ionPopoverWillPresent", 7)),
        (this.willDismiss = i(this, "ionPopoverWillDismiss", 7)),
        (this.didDismiss = i(this, "ionPopoverDidDismiss", 7));
    }
    async present() {
      if (this.presented) return;
      const o = this.el.querySelector(".popover-content");
      if (!o) throw new Error("container is undefined");
      const t = Object.assign({}, this.componentProps, { popover: this.el });
      return (
        (this.usersElement = await h(
          this.delegate,
          o,
          this.component,
          ["popover-viewport", this.el["s-sc"]],
          t
        )),
        await w(this.usersElement),
        p(this, "popoverEnter", m, P, this.event)
      );
    }
    async dismiss(o, t) {
      const i = await a(this, o, t, "popoverLeave", u, b, this.event);
      return i && (await v(this.delegate, this.usersElement)), i;
    }
    onDidDismiss() {
      return c(this.el, "ionPopoverDidDismiss");
    }
    onWillDismiss() {
      return c(this.el, "ionPopoverWillDismiss");
    }
    render() {
      const o = t(this),
        { onLifecycle: i } = this;
      return s(
        e,
        {
          "aria-modal": "true",
          "no-router": !0,
          style: { zIndex: `${2e4 + this.overlayIndex}` },
          class: Object.assign({}, l(this.cssClass), {
            [o]: !0,
            "popover-translucent": this.translucent
          }),
          onIonPopoverDidPresent: i,
          onIonPopoverWillPresent: i,
          onIonPopoverWillDismiss: i,
          onIonPopoverDidDismiss: i,
          onIonDismiss: this.onDismiss,
          onIonBackdropTap: this.onBackdropTap
        },
        s("ion-backdrop", {
          tappable: this.backdropDismiss,
          visible: this.showBackdrop
        }),
        s(
          "div",
          { class: "popover-wrapper" },
          s("div", { class: "popover-arrow" }),
          s("div", { class: "popover-content" })
        )
      );
    }
    get el() {
      return n(this);
    }
    static get style() {
      return ".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}";
    }
  },
  y = {
    ionPopoverDidPresent: "ionViewDidEnter",
    ionPopoverWillPresent: "ionViewWillEnter",
    ionPopoverWillDismiss: "ionViewWillLeave",
    ionPopoverDidDismiss: "ionViewDidLeave"
  };
export { D as ion_popover };
