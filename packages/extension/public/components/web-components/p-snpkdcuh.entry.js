import { r as t, e as s, h as r, H as i } from "./p-57e9347d.js";
import { o, c as e } from "./p-955ba954.js";
const a = class {
  constructor(s) {
    t(this, s),
      (this.routerDirection = "forward"),
      (this.onClick = t => {
        o(this.href, t, this.routerDirection);
      });
  }
  render() {
    const t = s(this),
      o = { href: this.href, rel: this.rel, target: this.target };
    return r(
      i,
      {
        onClick: this.onClick,
        class: Object.assign({}, e(this.color), {
          [t]: !0,
          "ion-activatable": !0
        })
      },
      r("a", Object.assign({}, o), r("slot", null))
    );
  }
  static get style() {
    return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
  }
};
export { a as ion_router_link };
