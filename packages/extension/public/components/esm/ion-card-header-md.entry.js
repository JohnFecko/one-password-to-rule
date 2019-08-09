import {
  r as registerInstance,
  e as getIonMode,
  h,
  H as Host
} from "./core-9991b89e.js";
import { c as createColorClasses } from "./theme-955ba954.js";

const CardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * If `true`, the card header will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */
    this.translucent = false;
  }
  render() {
    const mode = getIonMode(this);
    return h(
      Host,
      {
        class: Object.assign({}, createColorClasses(this.color), {
          "card-header-translucent": this.translucent,
          [mode]: true
        })
      },
      h("slot", null)
    );
  }
  static get style() {
    return ":host{display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) ::slotted(ion-card-subtitle),:host(.ion-color) ::slotted(ion-card-title){color:currentColor}:host{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-card-subtitle:not(:first-child)),::slotted(ion-card-title:not(:first-child)){margin-top:8px}";
  }
};

export { CardHeader as ion_card_header };
