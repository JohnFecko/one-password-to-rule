import { r as t } from "./p-57e9347d.js";
import { c as o, d as s, g as e } from "./p-5f857030.js";
const n = class {
  constructor(o) {
    t(this, o);
  }
  create(t) {
    return o("ion-action-sheet", t);
  }
  dismiss(t, o, e) {
    return s(document, t, o, "ion-action-sheet", e);
  }
  async getTop() {
    return e(document, "ion-action-sheet");
  }
};
export { n as ion_action_sheet_controller };
