import { r as s, h as t, e as r, H as a } from "./p-57e9347d.js";
const e = class {
  constructor(t) {
    s(this, t);
  }
  render() {
    return t(a, { class: r(this) }, t("slot", null));
  }
  static get style() {
    return ":host{border-radius:var(--border-radius);display:block}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";
  }
};
export { e as ion_avatar };