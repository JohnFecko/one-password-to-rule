import {
  r as i,
  e as s,
  d as t,
  h as e,
  H as r,
  f as o
} from "./p-57e9347d.js";
import { p as c, a as n, e as a, s as h } from "./p-5f857030.js";
import { g as l } from "./p-955ba954.js";
const p = (i, s) => {
    const t = new i(),
      e = new i();
    e.addElement(s.querySelector("ion-backdrop"));
    const r = new i();
    return (
      r.addElement(s.querySelector(".picker-wrapper")),
      e.fromTo("opacity", 0.01, 0.26),
      r.fromTo("translateY", "100%", "0%"),
      Promise.resolve(
        t
          .addElement(s)
          .easing("cubic-bezier(.36,.66,.04,1)")
          .duration(400)
          .add(e)
          .add(r)
      )
    );
  },
  d = (i, s) => {
    const t = new i(),
      e = new i();
    e.addElement(s.querySelector("ion-backdrop"));
    const r = new i();
    return (
      r.addElement(s.querySelector(".picker-wrapper")),
      e.fromTo("opacity", 0.26, 0.01),
      r.fromTo("translateY", "0%", "100%"),
      Promise.resolve(
        t
          .addElement(s)
          .easing("cubic-bezier(.36,.66,.04,1)")
          .duration(400)
          .add(e)
          .add(r)
      )
    );
  },
  k = class {
    constructor(e) {
      i(this, e),
        (this.mode = s(this)),
        (this.presented = !1),
        (this.keyboardClose = !0),
        (this.buttons = []),
        (this.columns = []),
        (this.duration = 0),
        (this.showBackdrop = !0),
        (this.backdropDismiss = !0),
        (this.animated = !0),
        (this.onBackdropTap = () => {
          const i = this.buttons.find(i => "cancel" === i.role);
          i ? this.buttonClick(i) : this.dismiss();
        }),
        (this.didPresent = t(this, "ionPickerDidPresent", 7)),
        (this.willPresent = t(this, "ionPickerWillPresent", 7)),
        (this.willDismiss = t(this, "ionPickerWillDismiss", 7)),
        (this.didDismiss = t(this, "ionPickerDidDismiss", 7));
    }
    async present() {
      await c(this, "pickerEnter", p, p, void 0),
        this.duration > 0 &&
          (this.durationTimeout = setTimeout(
            () => this.dismiss(),
            this.duration
          ));
    }
    dismiss(i, s) {
      return (
        this.durationTimeout && clearTimeout(this.durationTimeout),
        n(this, i, s, "pickerLeave", d, d)
      );
    }
    onDidDismiss() {
      return a(this.el, "ionPickerDidDismiss");
    }
    onWillDismiss() {
      return a(this.el, "ionPickerWillDismiss");
    }
    getColumn(i) {
      return Promise.resolve(this.columns.find(s => s.name === i));
    }
    buttonClick(i) {
      return !1 !== h(i.handler, this.getSelected())
        ? this.dismiss()
        : Promise.resolve(!1);
    }
    getSelected() {
      const i = {};
      return (
        this.columns.forEach((s, t) => {
          const e =
            void 0 !== s.selectedIndex ? s.options[s.selectedIndex] : void 0;
          i[s.name] = {
            text: e ? e.text : void 0,
            value: e ? e.value : void 0,
            columnIndex: t
          };
        }),
        i
      );
    }
    render() {
      const i = s(this);
      return e(
        r,
        {
          "aria-modal": "true",
          class: Object.assign(
            { [i]: !0, [`picker-${i}`]: !0 },
            l(this.cssClass)
          ),
          style: { zIndex: `${2e4 + this.overlayIndex}` },
          onIonBackdropTap: this.onBackdropTap
        },
        e("ion-backdrop", {
          visible: this.showBackdrop,
          tappable: this.backdropDismiss
        }),
        e(
          "div",
          { class: "picker-wrapper", role: "dialog" },
          e(
            "div",
            { class: "picker-toolbar" },
            this.buttons.map(i =>
              e(
                "div",
                { class: u(i) },
                e(
                  "button",
                  {
                    type: "button",
                    onClick: () => this.buttonClick(i),
                    class: m(i)
                  },
                  i.text
                )
              )
            )
          ),
          e(
            "div",
            { class: "picker-columns" },
            e("div", { class: "picker-above-highlight" }),
            this.presented &&
              this.columns.map(i => e("ion-picker-column", { col: i })),
            e("div", { class: "picker-below-highlight" })
          )
        )
      );
    }
    get el() {
      return o(this);
    }
    static get style() {
      return ".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}[dir=rtl].sc-ion-picker-md-h, [dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-wrapper.sc-ion-picker-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active, .picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-md, .picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color,#fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))));--height:260px;color:var(--ion-item-color,var(--ion-text-color,#000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md, .picker-button.activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1.1em;padding-right:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-button.sc-ion-picker-md, .picker-button.activated.sc-ion-picker-md{padding-left:unset;padding-right:unset;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em}}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{left:0;top:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(180deg,var(--ion-background-color,#fff) 20%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:10}[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md, [dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md, [dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-md{left:0;top:115px;-webkit-transform:translateZ(90px);transform:translateZ(90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(0deg,var(--ion-background-color,#fff) 30%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:11}[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md, [dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md, [dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}";
    }
  },
  u = i => ({
    [`picker-toolbar-${i.role}`]: void 0 !== i.role,
    "picker-toolbar-button": !0
  }),
  m = i =>
    Object.assign(
      { "picker-button": !0, "ion-activatable": !0 },
      l(i.cssClass)
    );
export { k as ion_picker };
