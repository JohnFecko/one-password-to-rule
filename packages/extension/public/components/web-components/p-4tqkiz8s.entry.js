import {
  r as t,
  e as i,
  d as s,
  h as e,
  H as n,
  f as o
} from "./p-57e9347d.js";
import {
  B as a,
  i as c,
  p as r,
  a as h,
  e as l,
  s as p
} from "./p-5f857030.js";
import { g as u } from "./p-955ba954.js";
const d = (t, i) => {
    const s = new t(),
      e = new t();
    e.addElement(i.querySelector("ion-backdrop"));
    const n = new t();
    n.addElement(i.querySelector(".action-sheet-wrapper")),
      e.fromTo("opacity", 0.01, 0.4),
      n.fromTo("translateY", "100%", "0%");
    const o = s
      .addElement(i)
      .easing("cubic-bezier(.36,.66,.04,1)")
      .duration(400)
      .add(e)
      .add(n);
    return Promise.resolve(o);
  },
  b = (t, i) => {
    const s = new t(),
      e = new t();
    e.addElement(i.querySelector("ion-backdrop"));
    const n = new t();
    n.addElement(i.querySelector(".action-sheet-wrapper")),
      e.fromTo("opacity", 0.4, 0),
      n.fromTo("translateY", "0%", "100%");
    const o = s
      .addElement(i)
      .easing("cubic-bezier(.36,.66,.04,1)")
      .duration(450)
      .add(e)
      .add(n);
    return Promise.resolve(o);
  },
  m = (t, i) => {
    const s = new t(),
      e = new t();
    e.addElement(i.querySelector("ion-backdrop"));
    const n = new t();
    n.addElement(i.querySelector(".action-sheet-wrapper")),
      e.fromTo("opacity", 0.01, 0.32),
      n.fromTo("translateY", "100%", "0%");
    const o = s
      .addElement(i)
      .easing("cubic-bezier(.36,.66,.04,1)")
      .duration(400)
      .add(e)
      .add(n);
    return Promise.resolve(o);
  },
  w = (t, i) => {
    const s = new t(),
      e = new t();
    e.addElement(i.querySelector("ion-backdrop"));
    const n = new t();
    n.addElement(i.querySelector(".action-sheet-wrapper")),
      e.fromTo("opacity", 0.32, 0),
      n.fromTo("translateY", "0%", "100%");
    const o = s
      .addElement(i)
      .easing("cubic-bezier(.36,.66,.04,1)")
      .duration(450)
      .add(e)
      .add(n);
    return Promise.resolve(o);
  },
  v = class {
    constructor(e) {
      t(this, e),
        (this.presented = !1),
        (this.mode = i(this)),
        (this.keyboardClose = !0),
        (this.buttons = []),
        (this.backdropDismiss = !0),
        (this.translucent = !1),
        (this.animated = !0),
        (this.onBackdropTap = () => {
          this.dismiss(void 0, a);
        }),
        (this.dispatchCancelHandler = t => {
          if (c(t.detail.role)) {
            const t = this.getButtons().find(t => "cancel" === t.role);
            this.callButtonHandler(t);
          }
        }),
        (this.didPresent = s(this, "ionActionSheetDidPresent", 7)),
        (this.willPresent = s(this, "ionActionSheetWillPresent", 7)),
        (this.willDismiss = s(this, "ionActionSheetWillDismiss", 7)),
        (this.didDismiss = s(this, "ionActionSheetDidDismiss", 7));
    }
    present() {
      return r(this, "actionSheetEnter", d, m);
    }
    dismiss(t, i) {
      return h(this, t, i, "actionSheetLeave", b, w);
    }
    onDidDismiss() {
      return l(this.el, "ionActionSheetDidDismiss");
    }
    onWillDismiss() {
      return l(this.el, "ionActionSheetWillDismiss");
    }
    async buttonClick(t) {
      const i = t.role;
      return c(i)
        ? this.dismiss(void 0, i)
        : (await this.callButtonHandler(t))
        ? this.dismiss(void 0, t.role)
        : Promise.resolve();
    }
    async callButtonHandler(t) {
      return !t || !1 !== (await p(t.handler));
    }
    getButtons() {
      return this.buttons.map(t => ("string" == typeof t ? { text: t } : t));
    }
    render() {
      const t = i(this),
        s = this.getButtons(),
        o = s.find(t => "cancel" === t.role),
        a = s.filter(t => "cancel" !== t.role);
      return e(
        n,
        {
          role: "dialog",
          "aria-modal": "true",
          style: { zIndex: `${2e4 + this.overlayIndex}` },
          class: Object.assign({ [t]: !0 }, u(this.cssClass), {
            "action-sheet-translucent": this.translucent
          }),
          onIonActionSheetWillDismiss: this.dispatchCancelHandler,
          onIonBackdropTap: this.onBackdropTap
        },
        e("ion-backdrop", { tappable: this.backdropDismiss }),
        e(
          "div",
          { class: "action-sheet-wrapper", role: "dialog" },
          e(
            "div",
            { class: "action-sheet-container" },
            e(
              "div",
              { class: "action-sheet-group" },
              void 0 !== this.header &&
                e(
                  "div",
                  { class: "action-sheet-title" },
                  this.header,
                  this.subHeader &&
                    e(
                      "div",
                      { class: "action-sheet-sub-title" },
                      this.subHeader
                    )
                ),
              a.map(i =>
                e(
                  "button",
                  {
                    type: "button",
                    "ion-activatable": !0,
                    class: y(i),
                    onClick: () => this.buttonClick(i)
                  },
                  e(
                    "span",
                    { class: "action-sheet-button-inner" },
                    i.icon &&
                      e("ion-icon", {
                        icon: i.icon,
                        lazy: !1,
                        class: "action-sheet-icon"
                      }),
                    i.text
                  ),
                  "md" === t && e("ion-ripple-effect", null)
                )
              )
            ),
            o &&
              e(
                "div",
                { class: "action-sheet-group action-sheet-group-cancel" },
                e(
                  "button",
                  {
                    type: "button",
                    class: y(o),
                    onClick: () => this.buttonClick(o)
                  },
                  e(
                    "span",
                    { class: "action-sheet-button-inner" },
                    o.icon &&
                      e("ion-icon", {
                        icon: o.icon,
                        lazy: !1,
                        class: "action-sheet-icon"
                      }),
                    o.text
                  )
                )
              )
          )
        )
      );
    }
    get el() {
      return o(this);
    }
    static get style() {
      return ".sc-ion-action-sheet-ios-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-ios{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--background-selected:var(--ion-background-color,#fff);--background-activated:rgba(var(--ion-text-color-rgb,0,0,0),0.08);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top,0);margin-bottom:var(--ion-safe-area-bottom,0)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px;overflow:hidden}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.8)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8))),-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.8)));background-image:linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.8),rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%),linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.4),rgba(var(--ion-background-color-rgb,255,255,255),.4) 50%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 0);background-repeat:no-repeat;background-position:top,bottom;background-size:100% calc(100% - 1px),100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected)}}.action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,transparent));background-image:linear-gradient(0deg,rgba(var(--ion-text-color-rgb,0,0,0),.08),rgba(var(--ion-text-color-rgb,0,0,0),.08) 50%,transparent 0);background-repeat:no-repeat;background-position:bottom;background-size:100% 1px}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color,var(--ion-color-step-400,#999));font-size:13px;font-weight:400;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:15px;padding-bottom:0;font-size:12px}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;color:var(--color,var(--ion-color-primary,#3880ff));font-size:20px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:.1em;font-size:28px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:.1em;margin-inline-end:.1em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:700}.action-sheet-destructive.sc-ion-action-sheet-ios{color:var(--ion-color-danger,#f04141)}.action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:600}";
    }
  },
  y = t =>
    Object.assign(
      {
        "action-sheet-button": !0,
        "ion-activatable": !0,
        [`action-sheet-${t.role}`]: void 0 !== t.role
      },
      u(t.cssClass)
    );
export { v as ion_action_sheet };