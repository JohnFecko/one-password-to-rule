import { r as t, e as s, h as i, H as a } from "./p-57e9347d.js";
import { u as n, t as e } from "./p-46ad7ae9.js";
const o = class {
  constructor(s) {
    t(this, s),
      (this.visible = !1),
      (this.autoHide = !0),
      (this.setVisibility = async () => {
        this.visible = await n(this.menu);
      }),
      (this.onClick = async () => {
        await e(this.menu);
      });
  }
  async componentDidLoad() {
    await this.setVisibility();
  }
  async visibilityChanged() {
    await this.setVisibility();
  }
  render() {
    const t = s(this),
      n = this.autoHide && !this.visible;
    return i(
      a,
      {
        onClick: this.onClick,
        "aria-hidden": n ? "true" : null,
        class: { [t]: !0, "menu-toggle-hidden": n }
      },
      i("slot", null)
    );
  }
  static get style() {
    return ":host(.menu-toggle-hidden){display:none}";
  }
};
export { o as ion_menu_toggle };