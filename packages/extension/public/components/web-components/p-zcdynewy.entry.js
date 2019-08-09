import {
  r as i,
  e as s,
  d as t,
  h as o,
  H as a,
  f as e
} from "./p-57e9347d.js";
import { B as n, p as r, a as l, e as d } from "./p-5f857030.js";
import { g as h } from "./p-955ba954.js";
import { a as c, d as p } from "./p-8aba239f.js";
import { d as m } from "./p-2a2b1034.js";
const w = (i, s) => {
    const t = new i(),
      o = new i();
    o.addElement(s.querySelector("ion-backdrop"));
    const a = new i();
    return (
      a.addElement(s.querySelector(".modal-wrapper")),
      a.beforeStyles({ opacity: 1 }).fromTo("translateY", "100%", "0%"),
      o.fromTo("opacity", 0.01, 0.4),
      Promise.resolve(
        t
          .addElement(s)
          .easing("cubic-bezier(0.36,0.66,0.04,1)")
          .duration(400)
          .beforeAddClass("show-modal")
          .add(o)
          .add(a)
      )
    );
  },
  b = (i, s) => {
    const t = new i(),
      o = new i();
    o.addElement(s.querySelector("ion-backdrop"));
    const a = new i(),
      e = s.querySelector(".modal-wrapper");
    a.addElement(e);
    const n = e.getBoundingClientRect();
    return (
      a
        .beforeStyles({ opacity: 1 })
        .fromTo(
          "translateY",
          "0%",
          `${s.ownerDocument.defaultView.innerHeight - n.top}px`
        ),
      o.fromTo("opacity", 0.4, 0),
      Promise.resolve(
        t
          .addElement(s)
          .easing("ease-out")
          .duration(250)
          .add(o)
          .add(a)
      )
    );
  },
  u = (i, s) => {
    const t = new i(),
      o = new i();
    o.addElement(s.querySelector("ion-backdrop"));
    const a = new i();
    return (
      a.addElement(s.querySelector(".modal-wrapper")),
      a.fromTo("opacity", 0.01, 1).fromTo("translateY", "40px", "0px"),
      o.fromTo("opacity", 0.01, 0.32),
      Promise.resolve(
        t
          .addElement(s)
          .easing("cubic-bezier(0.36,0.66,0.04,1)")
          .duration(280)
          .beforeAddClass("show-modal")
          .add(o)
          .add(a)
      )
    );
  },
  D = (i, s) => {
    const t = new i(),
      o = new i();
    o.addElement(s.querySelector("ion-backdrop"));
    const a = new i(),
      e = s.querySelector(".modal-wrapper");
    return (
      a.addElement(e),
      a.fromTo("opacity", 0.99, 0).fromTo("translateY", "0px", "40px"),
      o.fromTo("opacity", 0.32, 0),
      Promise.resolve(
        t
          .addElement(s)
          .easing("cubic-bezier(0.47,0,0.745,0.715)")
          .duration(200)
          .add(o)
          .add(a)
      )
    );
  },
  M = class {
    constructor(o) {
      i(this, o),
        (this.presented = !1),
        (this.mode = s(this)),
        (this.keyboardClose = !0),
        (this.backdropDismiss = !0),
        (this.showBackdrop = !0),
        (this.animated = !0),
        (this.onBackdropTap = () => {
          this.dismiss(void 0, n);
        }),
        (this.onDismiss = i => {
          i.stopPropagation(), i.preventDefault(), this.dismiss();
        }),
        (this.onLifecycle = i => {
          const s = this.usersElement,
            t = f[i.type];
          if (s && t) {
            const o = new CustomEvent(t, {
              bubbles: !1,
              cancelable: !1,
              detail: i.detail
            });
            s.dispatchEvent(o);
          }
        }),
        (this.didPresent = t(this, "ionModalDidPresent", 7)),
        (this.willPresent = t(this, "ionModalWillPresent", 7)),
        (this.willDismiss = t(this, "ionModalWillDismiss", 7)),
        (this.didDismiss = t(this, "ionModalDidDismiss", 7));
    }
    async present() {
      if (this.presented) return;
      const i = this.el.querySelector(".modal-wrapper");
      if (!i) throw new Error("container is undefined");
      const s = Object.assign({}, this.componentProps, { modal: this.el });
      return (
        (this.usersElement = await c(
          this.delegate,
          i,
          this.component,
          ["ion-page"],
          s
        )),
        await m(this.usersElement),
        r(this, "modalEnter", w, u)
      );
    }
    async dismiss(i, s) {
      const t = await l(this, i, s, "modalLeave", b, D);
      return t && (await p(this.delegate, this.usersElement)), t;
    }
    onDidDismiss() {
      return d(this.el, "ionModalDidDismiss");
    }
    onWillDismiss() {
      return d(this.el, "ionModalWillDismiss");
    }
    render() {
      const i = s(this);
      return o(
        a,
        {
          "no-router": !0,
          "aria-modal": "true",
          class: Object.assign({ [i]: !0 }, h(this.cssClass)),
          style: { zIndex: `${2e4 + this.overlayIndex}` },
          onIonBackdropTap: this.onBackdropTap,
          onIonDismiss: this.onDismiss,
          onIonModalDidPresent: this.onLifecycle,
          onIonModalWillPresent: this.onLifecycle,
          onIonModalWillDismiss: this.onLifecycle,
          onIonModalDidDismiss: this.onLifecycle
        },
        o("ion-backdrop", {
          visible: this.showBackdrop,
          tappable: this.backdropDismiss
        }),
        o("div", { role: "dialog", class: { "modal-wrapper": !0, [i]: !0 } })
      );
    }
    get el() {
      return e(this);
    }
    static get style() {
      return ".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}";
    }
  },
  f = {
    ionModalDidPresent: "ionViewDidEnter",
    ionModalWillPresent: "ionViewWillEnter",
    ionModalWillDismiss: "ionViewWillLeave",
    ionModalDidDismiss: "ionViewDidLeave"
  };
export { M as ion_modal };
