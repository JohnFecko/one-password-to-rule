import { r as s, h as t, f as i, H as r } from "./p-57e9347d.js";
const n = class {
  constructor(t) {
    s(this, t),
      (this.push = () => {
        const s = this.el.closest("ion-nav"),
          t = this.component;
        s && void 0 !== t && s.push(t, this.componentProps, { skipIfBusy: !0 });
      });
  }
  render() {
    return t(r, { onClick: this.push });
  }
  get el() {
    return i(this);
  }
};
export { n as ion_nav_push };
