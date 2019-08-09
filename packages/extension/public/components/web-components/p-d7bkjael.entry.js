import { r as o } from "./p-57e9347d.js";
import { c as n, d as r, g as s } from "./p-5f857030.js";
const t = class {
  constructor(n) {
    o(this, n);
  }
  create(o) {
    return n("ion-loading", o);
  }
  dismiss(o, n, s) {
    return r(document, o, n, "ion-loading", s);
  }
  async getTop() {
    return s(document, "ion-loading");
  }
};
export { t as ion_loading_controller };
