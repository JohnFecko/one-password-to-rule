import { r as s, h as t, f as i, H as o } from "./p-57e9347d.js";
const r = class {
  constructor(t) {
    s(this, t),
      (this.setRoot = () => {
        const s = this.el.closest("ion-nav"),
          t = this.component;
        s &&
          void 0 !== t &&
          s.setRoot(t, this.componentProps, { skipIfBusy: !0 });
      });
  }
  render() {
    return t(o, { onClick: this.setRoot });
  }
  get el() {
    return i(this);
  }
};
export { r as ion_nav_set_root };
