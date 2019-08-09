import { r, h as e, e as s, H as o } from "./p-57e9347d.js";
const t = class {
  constructor(e) {
    r(this, e);
  }
  onClick(r) {
    r.preventDefault(), r.stopImmediatePropagation();
  }
  render() {
    return e(
      o,
      { class: s(this) },
      e(
        "slot",
        null,
        e("ion-icon", { name: "reorder", lazy: !1, class: "reorder-icon" })
      )
    );
  }
  static get style() {
    return ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}";
  }
};
export { t as ion_reorder };
