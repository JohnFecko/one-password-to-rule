import { r as o } from "./p-57e9347d.js";
import { c as r, d as s, g as t } from "./p-5f857030.js";
const n = class {
  constructor(r) {
    o(this, r);
  }
  create(o) {
    return r("ion-modal", o);
  }
  dismiss(o, r, t) {
    return s(document, o, r, "ion-modal", t);
  }
  async getTop() {
    return t(document, "ion-modal");
  }
};
export { n as ion_modal_controller };