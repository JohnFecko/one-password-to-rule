import { r as s, e as t, h as o, H as r } from "./p-57e9347d.js";
import { c as e } from "./p-955ba954.js";
const n = class {
  constructor(t) {
    s(this, t);
  }
  render() {
    const s = t(this);
    return o(
      r,
      { class: Object.assign({}, e(this.color), { [s]: !0 }) },
      o("slot", null)
    );
  }
  static get style() {
    return ":host{color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-350,#a6a6a6)}";
  }
};
export { n as ion_note };
