import { r } from "./p-57e9347d.js";
import { c as o, d as s, g as e } from "./p-5f857030.js";
const t = class {
  constructor(o) {
    r(this, o);
  }
  create(r) {
    return o("ion-picker", r);
  }
  dismiss(r, o, e) {
    return s(document, r, o, "ion-picker", e);
  }
  async getTop() {
    return e(document, "ion-picker");
  }
};
export { t as ion_picker_controller };
