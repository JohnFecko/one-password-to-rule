import {
  r as t,
  e as s,
  d as i,
  h as a,
  H as o,
  f as e
} from "./p-57e9347d.js";
import { p as n, a as r, e as c, i as h, s as l } from "./p-5f857030.js";
import { g as p, c as d } from "./p-955ba954.js";
import { s as u } from "./p-8d8e0c6f.js";
const b = (t, s, i) => {
    const a = new t(),
      o = new t(),
      e = s.host || s,
      n = s.querySelector(".toast-wrapper");
    switch ((o.addElement(n), i)) {
      case "top":
        o.fromTo(
          "translateY",
          "-100%",
          "calc(10px + var(--ion-safe-area-top, 0px))"
        );
        break;
      case "middle":
        const t = Math.floor(e.clientHeight / 2 - n.clientHeight / 2);
        (n.style.top = `${t}px`), o.fromTo("opacity", 0.01, 1);
        break;
      default:
        o.fromTo(
          "translateY",
          "100%",
          "calc(-10px - var(--ion-safe-area-bottom, 0px))"
        );
    }
    return Promise.resolve(
      a
        .addElement(e)
        .easing("cubic-bezier(.155,1.105,.295,1.12)")
        .duration(400)
        .add(o)
    );
  },
  m = (t, s, i) => {
    const a = new t(),
      o = new t(),
      e = s.host || s,
      n = s.querySelector(".toast-wrapper");
    switch ((o.addElement(n), i)) {
      case "top":
        o.fromTo(
          "translateY",
          "calc(10px + var(--ion-safe-area-top, 0px))",
          "-100%"
        );
        break;
      case "middle":
        o.fromTo("opacity", 0.99, 0);
        break;
      default:
        o.fromTo(
          "translateY",
          "calc(-10px - var(--ion-safe-area-bottom, 0px))",
          "100%"
        );
    }
    return Promise.resolve(
      a
        .addElement(e)
        .easing("cubic-bezier(.36,.66,.04,1)")
        .duration(300)
        .add(o)
    );
  },
  v = (t, s, i) => {
    const a = new t(),
      o = new t(),
      e = s.host || s,
      n = s.querySelector(".toast-wrapper");
    switch ((o.addElement(n), i)) {
      case "top":
        (n.style.top = "calc(8px + var(--ion-safe-area-top, 0px))"),
          o.fromTo("opacity", 0.01, 1);
        break;
      case "middle":
        const t = Math.floor(e.clientHeight / 2 - n.clientHeight / 2);
        (n.style.top = `${t}px`), o.fromTo("opacity", 0.01, 1);
        break;
      default:
        (n.style.bottom = "calc(8px + var(--ion-safe-area-bottom, 0px))"),
          o.fromTo("opacity", 0.01, 1);
    }
    return Promise.resolve(
      a
        .addElement(e)
        .easing("cubic-bezier(.36,.66,.04,1)")
        .duration(400)
        .add(o)
    );
  },
  f = (t, s) => {
    const i = new t(),
      a = new t(),
      o = s.host || s,
      e = s.querySelector(".toast-wrapper");
    return (
      a.addElement(e),
      a.fromTo("opacity", 0.99, 0),
      Promise.resolve(
        i
          .addElement(o)
          .easing("cubic-bezier(.36,.66,.04,1)")
          .duration(300)
          .add(a)
      )
    );
  },
  w = class {
    constructor(a) {
      t(this, a),
        (this.presented = !1),
        (this.mode = s(this)),
        (this.duration = 0),
        (this.keyboardClose = !1),
        (this.position = "bottom"),
        (this.showCloseButton = !1),
        (this.translucent = !1),
        (this.animated = !0),
        (this.didPresent = i(this, "ionToastDidPresent", 7)),
        (this.willPresent = i(this, "ionToastWillPresent", 7)),
        (this.willDismiss = i(this, "ionToastWillDismiss", 7)),
        (this.didDismiss = i(this, "ionToastDidDismiss", 7));
    }
    async present() {
      await n(this, "toastEnter", b, v, this.position),
        this.duration > 0 &&
          (this.durationTimeout = setTimeout(
            () => this.dismiss(void 0, "timeout"),
            this.duration
          ));
    }
    dismiss(t, s) {
      return (
        this.durationTimeout && clearTimeout(this.durationTimeout),
        r(this, t, s, "toastLeave", m, f, this.position)
      );
    }
    onDidDismiss() {
      return c(this.el, "ionToastDidDismiss");
    }
    onWillDismiss() {
      return c(this.el, "ionToastWillDismiss");
    }
    getButtons() {
      const t = this.buttons
        ? this.buttons.map(t => ("string" == typeof t ? { text: t } : t))
        : [];
      return (
        this.showCloseButton &&
          t.push({
            text: this.closeButtonText || "Close",
            handler: () => this.dismiss(void 0, "cancel")
          }),
        t
      );
    }
    async buttonClick(t) {
      const s = t.role;
      return h(s)
        ? this.dismiss(void 0, s)
        : (await this.callButtonHandler(t))
        ? this.dismiss(void 0, t.role)
        : Promise.resolve();
    }
    async callButtonHandler(t) {
      if (t && t.handler)
        try {
          if (!1 === (await l(t.handler))) return !1;
        } catch (t) {
          console.error(t);
        }
      return !0;
    }
    renderButtons(t, i) {
      if (0 === t.length) return;
      const o = s(this);
      return a(
        "div",
        {
          class: { "toast-button-group": !0, [`toast-button-group-${i}`]: !0 }
        },
        t.map(t =>
          a(
            "button",
            {
              type: "button",
              class: x(t),
              tabIndex: 0,
              onClick: () => this.buttonClick(t)
            },
            a(
              "div",
              { class: "toast-button-inner" },
              t.icon &&
                a("ion-icon", {
                  icon: t.icon,
                  slot: void 0 === t.text ? "icon-only" : void 0,
                  class: "toast-icon"
                }),
              t.text
            ),
            "md" === o &&
              a("ion-ripple-effect", {
                type:
                  void 0 !== t.icon && void 0 === t.text
                    ? "unbounded"
                    : "bounded"
              })
          )
        )
      );
    }
    render() {
      const t = this.getButtons(),
        i = t.filter(t => "start" === t.side),
        e = t.filter(t => "start" !== t.side),
        n = s(this),
        r = { "toast-wrapper": !0, [`toast-${this.position}`]: !0 };
      return a(
        o,
        {
          style: { zIndex: `${6e4 + this.overlayIndex}` },
          class: Object.assign({ [n]: !0 }, d(this.color), p(this.cssClass), {
            "toast-translucent": this.translucent
          })
        },
        a(
          "div",
          { class: r },
          a(
            "div",
            { class: "toast-container" },
            this.renderButtons(i, "start"),
            a(
              "div",
              { class: "toast-content" },
              void 0 !== this.header &&
                a("div", { class: "toast-header" }, this.header),
              void 0 !== this.message &&
                a("div", { class: "toast-message", innerHTML: u(this.message) })
            ),
            this.renderButtons(e, "end")
          )
        )
      );
    }
    get el() {
      return e(this);
    }
    static get style() {
      return ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-header,.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover:hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}";
    }
  },
  x = t =>
    Object.assign(
      {
        "toast-button": !0,
        "toast-button-icon-only": void 0 !== t.icon && void 0 === t.text,
        [`toast-button-${t.role}`]: void 0 !== t.role,
        "ion-focusable": !0,
        "ion-activatable": !0
      },
      p(t.cssClass)
    );
export { w as ion_toast };
