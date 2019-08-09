import {
  r as registerInstance,
  h,
  e as getIonMode,
  H as Host
} from "./core-9991b89e.js";

const Thumbnail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { class: getIonMode(this) }, h("slot", null));
  }
  static get style() {
    return ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}";
  }
};

export { Thumbnail as ion_thumbnail };