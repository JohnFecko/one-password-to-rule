import {
  r as t,
  e as n,
  c as s,
  h as o,
  H as a,
  f as e
} from "./p-57e9347d.js";
import { o as i, c } from "./p-955ba954.js";
const u = class {
  constructor(s) {
    t(this, s),
      (this.mode = n(this)),
      (this.disabled = !1),
      (this.type = "button"),
      (this.onClick = async t => {
        const n = this.el.closest("ion-nav");
        return (
          t.preventDefault(),
          n && (await n.canGoBack())
            ? n.pop({ skipIfBusy: !0 })
            : i(this.defaultHref, t, "back")
        );
      });
  }
  get backButtonIcon() {
    return null != this.icon
      ? this.icon
      : s.get("backButtonIcon", "arrow-back");
  }
  get backButtonText() {
    return null != this.text
      ? this.text
      : s.get("backButtonText", "ios" === this.mode ? "Back" : null);
  }
  get hasIconOnly() {
    return this.backButtonIcon && !this.backButtonText;
  }
  get rippleType() {
    return this.hasIconOnly ? "unbounded" : "bounded";
  }
  render() {
    const {
        color: t,
        defaultHref: n,
        disabled: s,
        type: e,
        mode: i,
        hasIconOnly: u,
        backButtonIcon: b,
        backButtonText: r
      } = this,
      l = void 0 !== n;
    return o(
      a,
      {
        onClick: this.onClick,
        class: Object.assign({}, c(t), {
          [i]: !0,
          button: !0,
          "back-button-disabled": s,
          "back-button-has-icon-only": u,
          "ion-activatable": !0,
          "ion-focusable": !0,
          "show-back-button": l
        })
      },
      o(
        "button",
        { type: e, disabled: s, class: "button-native" },
        o(
          "span",
          { class: "button-inner" },
          b && o("ion-icon", { icon: b, lazy: !1 }),
          r && o("span", { class: "button-text" }, r)
        ),
        "md" === i && o("ion-ripple-effect", { type: this.rippleType })
      )
    );
  }
  get el() {
    return e(this);
  }
  static get style() {
    return ".sc-ion-back-button-ios-h{--background:transparent;--color-focused:var(--color);--color-hover:var(--color);--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.ion-color.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}.show-back-button.sc-ion-back-button-ios-h, .can-go-back.sc-ion-back-button-ios-h > ion-header.sc-ion-back-button-ios, .can-go-back > ion-header .sc-ion-back-button-ios-h{display:block}.back-button-disabled.sc-ion-back-button-ios-h{cursor:default;opacity:.5;pointer-events:none}.button-native.sc-ion-back-button-ios{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-back-button-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner.sc-ion-back-button-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}ion-icon.sc-ion-back-button-ios{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-icon.sc-ion-back-button-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}@media (any-hover:hover){.sc-ion-back-button-ios-h:hover .button-native.sc-ion-back-button-ios{background:var(--background-hover);color:var(--color-hover)}}.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{background:var(--background-focused);color:var(--color-focused)}@media (any-hover:hover){.ion-color.sc-ion-back-button-ios-h:hover .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}}.ion-color.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}ion-toolbar.sc-ion-back-button-ios-h:not(.ion-color):not(.ion-color), ion-toolbar:not(.ion-color) .sc-ion-back-button-ios-h:not(.ion-color){color:var(--ion-toolbar-color,var(--color))}.sc-ion-back-button-ios-h{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--icon-margin-end:-5px;--icon-margin-start:-4px;--icon-font-size:1.85em;--min-height:32px;font-size:17px}.button-native.sc-ion-back-button-ios{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}.activated.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{opacity:.4}@media (any-hover:hover){.sc-ion-back-button-ios-h:hover{--opacity:.6}}.ion-color.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{background:rgba(var(--ion-color-base-rgb),.1)}";
  }
};
export { u as ion_back_button };
