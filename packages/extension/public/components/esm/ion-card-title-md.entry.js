import {
  r as registerInstance,
  e as getIonMode,
  h,
  H as Host
} from "./core-9991b89e.js";
import { c as createColorClasses } from "./theme-955ba954.js";

const CardTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return h(
      Host,
      {
        role: "heading",
        "aria-level": "2",
        class: Object.assign({}, createColorClasses(this.color), {
          [mode]: true
        })
      },
      h("slot", null)
    );
  }
  static get style() {
    return ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850,#262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}";
  }
};

export { CardTitle as ion_card_title };
