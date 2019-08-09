import { r as t, h as a, H as s, f as e } from "./p-57e9347d.js";
import { a as i } from "./p-8aba239f.js";
const n = class {
  constructor(a) {
    t(this, a), (this.loaded = !1), (this.active = !1);
  }
  componentWillLoad() {}
  async setActive() {
    await this.prepareLazyLoaded(), (this.active = !0);
  }
  async prepareLazyLoaded() {
    if (!this.loaded && null != this.component) {
      this.loaded = !0;
      try {
        return i(this.delegate, this.el, this.component, ["ion-page"]);
      } catch (t) {
        console.error(t);
      }
    }
  }
  render() {
    const { tab: t, active: e, component: i } = this;
    return a(
      s,
      {
        role: "tabpanel",
        "aria-hidden": e ? null : "true",
        "aria-labelledby": `tab-button-${t}`,
        class: { "ion-page": void 0 === i, "tab-hidden": !e }
      },
      a("slot", null)
    );
  }
  get el() {
    return e(this);
  }
  static get style() {
    return ":host(.tab-hidden){display:none!important}";
  }
};
export { n as ion_tab };