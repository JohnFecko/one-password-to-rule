import { r as s, h as t, f as r, H as n } from "./p-57e9347d.js";
const o = class {
  constructor(t) {
    s(this, t),
      (this.pop = () => {
        const s = this.el.closest("ion-nav");
        s && s.pop({ skipIfBusy: !0 });
      });
  }
  render() {
    return t(n, { onClick: this.pop });
  }
  get el() {
    return r(this);
  }
};
export { o as ion_nav_pop };
