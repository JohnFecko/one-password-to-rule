import { r as s, e as t, h as r, H as e } from "./p-57e9347d.js";
import { c as a } from "./p-955ba954.js";
const c = class {
  constructor(t) {
    s(this, t), (this.translucent = !1);
  }
  render() {
    const s = t(this);
    return r(
      e,
      {
        class: Object.assign({}, a(this.color), {
          "card-header-translucent": this.translucent,
          [s]: !0
        })
      },
      r("slot", null)
    );
  }
  static get style() {
    return ":host{display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) ::slotted(ion-card-subtitle),:host(.ion-color) ::slotted(ion-card-title){color:currentColor}:host{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-card-subtitle:not(:first-child)),::slotted(ion-card-title:not(:first-child)){margin-top:8px}";
  }
};
export { c as ion_card_header };
