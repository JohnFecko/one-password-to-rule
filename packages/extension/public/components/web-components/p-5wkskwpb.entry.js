import { r as o } from "./p-57e9347d.js";
import { c as r, d as s, g as e } from "./p-5f857030.js";
const t = class {
  constructor(r) {
    o(this, r);
  }
  create(o) {
    return r("ion-popover", o);
  }
  dismiss(o, r, e) {
    return s(document, o, r, "ion-popover", e);
  }
  async getTop() {
    return e(document, "ion-popover");
  }
};
export { t as ion_popover_controller };
