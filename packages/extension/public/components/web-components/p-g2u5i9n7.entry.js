import {
  r as i,
  e as s,
  d as t,
  c as n,
  h as o,
  H as e,
  f as a
} from "./p-57e9347d.js";
import { B as r, p as c, a as p, e as d } from "./p-5f857030.js";
import { g as h } from "./p-955ba954.js";
import { s as l } from "./p-8d8e0c6f.js";
const g = (i, s) => {
    const t = new i(),
      n = new i();
    n.addElement(s.querySelector("ion-backdrop"));
    const o = new i();
    return (
      o.addElement(s.querySelector(".loading-wrapper")),
      n.fromTo("opacity", 0.01, 0.3),
      o.fromTo("opacity", 0.01, 1).fromTo("scale", 1.1, 1),
      Promise.resolve(
        t
          .addElement(s)
          .easing("ease-in-out")
          .duration(200)
          .add(n)
          .add(o)
      )
    );
  },
  m = (i, s) => {
    const t = new i(),
      n = new i();
    n.addElement(s.querySelector("ion-backdrop"));
    const o = new i();
    return (
      o.addElement(s.querySelector(".loading-wrapper")),
      n.fromTo("opacity", 0.3, 0),
      o.fromTo("opacity", 0.99, 0).fromTo("scale", 1, 0.9),
      Promise.resolve(
        t
          .addElement(s)
          .easing("ease-in-out")
          .duration(200)
          .add(n)
          .add(o)
      )
    );
  },
  u = (i, s) => {
    const t = new i(),
      n = new i();
    n.addElement(s.querySelector("ion-backdrop"));
    const o = new i();
    return (
      o.addElement(s.querySelector(".loading-wrapper")),
      n.fromTo("opacity", 0.01, 0.32),
      o.fromTo("opacity", 0.01, 1).fromTo("scale", 1.1, 1),
      Promise.resolve(
        t
          .addElement(s)
          .easing("ease-in-out")
          .duration(200)
          .add(n)
          .add(o)
      )
    );
  },
  w = (i, s) => {
    const t = new i(),
      n = new i();
    n.addElement(s.querySelector("ion-backdrop"));
    const o = new i();
    return (
      o.addElement(s.querySelector(".loading-wrapper")),
      n.fromTo("opacity", 0.32, 0),
      o.fromTo("opacity", 0.99, 0).fromTo("scale", 1, 0.9),
      Promise.resolve(
        t
          .addElement(s)
          .easing("ease-in-out")
          .duration(200)
          .add(n)
          .add(o)
      )
    );
  },
  L = class {
    constructor(n) {
      i(this, n),
        (this.presented = !1),
        (this.mode = s(this)),
        (this.keyboardClose = !0),
        (this.duration = 0),
        (this.backdropDismiss = !1),
        (this.showBackdrop = !0),
        (this.translucent = !1),
        (this.animated = !0),
        (this.onBackdropTap = () => {
          this.dismiss(void 0, r);
        }),
        (this.didPresent = t(this, "ionLoadingDidPresent", 7)),
        (this.willPresent = t(this, "ionLoadingWillPresent", 7)),
        (this.willDismiss = t(this, "ionLoadingWillDismiss", 7)),
        (this.didDismiss = t(this, "ionLoadingDidDismiss", 7));
    }
    componentWillLoad() {
      if (void 0 === this.spinner) {
        const i = s(this);
        this.spinner = n.get(
          "loadingSpinner",
          n.get("spinner", "ios" === i ? "lines" : "crescent")
        );
      }
    }
    async present() {
      await c(this, "loadingEnter", g, u, void 0),
        this.duration > 0 &&
          (this.durationTimeout = setTimeout(
            () => this.dismiss(),
            this.duration + 10
          ));
    }
    dismiss(i, s) {
      return (
        this.durationTimeout && clearTimeout(this.durationTimeout),
        p(this, i, s, "loadingLeave", m, w)
      );
    }
    onDidDismiss() {
      return d(this.el, "ionLoadingDidDismiss");
    }
    onWillDismiss() {
      return d(this.el, "ionLoadingWillDismiss");
    }
    render() {
      const { message: i, spinner: t } = this,
        n = s(this);
      return o(
        e,
        {
          onIonBackdropTap: this.onBackdropTap,
          style: { zIndex: `${4e4 + this.overlayIndex}` },
          class: Object.assign({}, h(this.cssClass), {
            [n]: !0,
            "loading-translucent": this.translucent
          })
        },
        o("ion-backdrop", {
          visible: this.showBackdrop,
          tappable: this.backdropDismiss
        }),
        o(
          "div",
          { class: "loading-wrapper", role: "dialog" },
          t &&
            o(
              "div",
              { class: "loading-spinner" },
              o("ion-spinner", { name: t })
            ),
          i && o("div", { class: "loading-content", innerHTML: l(i) })
        )
      );
    }
    get el() {
      return a(this);
    }
    static get style() {
      return ".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";
    }
  };
export { L as ion_loading };