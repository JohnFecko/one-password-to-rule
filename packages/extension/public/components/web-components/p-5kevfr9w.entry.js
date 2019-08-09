import { r as t, e as r, h as s, H as e } from "./p-57e9347d.js";
const o = class {
  constructor(r) {
    t(this, r);
  }
  render() {
    const t = r(this);
    return s(e, {
      role: "group",
      class: { [t]: !0, [`item-group-${t}`]: !0, item: !0 }
    });
  }
  static get style() {
    return "ion-item-group{display:block}.item-group-md ion-item-sliding:last-child ion-item,.item-group-md ion-item:last-child{--border-width:0}";
  }
};
export { o as ion_item_group };
