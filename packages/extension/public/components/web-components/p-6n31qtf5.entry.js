import { r as t, e as s, h as r, H as e } from "./p-57e9347d.js";
import { c as o } from "./p-955ba954.js";
const a = class {
  constructor(s) {
    t(this, s);
  }
  render() {
    const t = s(this);
    return r(
      e,
      { class: Object.assign({}, o(this.color), { [t]: !0 }) },
      r("slot", null)
    );
  }
  static get style() {
    return ":host(.ion-color){color:var(--ion-color-base)}";
  }
};
export { a as ion_text };
