import {
  r as registerInstance,
  h,
  e as getIonMode,
  H as Host
} from "./core-9991b89e.js";

const Avatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { class: getIonMode(this) }, h("slot", null));
  }
  static get style() {
    return ":host{border-radius:var(--border-radius);display:block}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";
  }
};

export { Avatar as ion_avatar };