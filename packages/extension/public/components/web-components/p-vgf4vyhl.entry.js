import { r as t, e as s, h as r, H as e } from "./p-57e9347d.js";
import { c as a } from "./p-955ba954.js";
const o = class {
  constructor(s) {
    t(this, s);
  }
  render() {
    const t = s(this);
    return r(
      e,
      {
        role: "heading",
        "aria-level": "2",
        class: Object.assign({}, a(this.color), { [t]: !0 })
      },
      r("slot", null)
    );
  }
  static get style() {
    return ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850,#262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}";
  }
};
export { o as ion_card_title };