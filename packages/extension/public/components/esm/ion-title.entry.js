import {
  r as registerInstance,
  e as getIonMode,
  h,
  H as Host,
  f as getElement
} from "./core-9991b89e.js";
import { c as createColorClasses } from "./theme-955ba954.js";

const ToolbarTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getMode() {
    const mode = getIonMode(this);
    const toolbar = this.el.closest("ion-toolbar");
    return (toolbar && toolbar.mode) || mode;
  }
  render() {
    const mode = this.getMode();
    return h(
      Host,
      {
        class: Object.assign(
          { [mode]: true, [`title-${mode}`]: true },
          createColorClasses(this.color)
        )
      },
      h("div", { class: "toolbar-title" }, h("slot", null))
    );
  }
  get el() {
    return getElement(this);
  }
  static get style() {
    return ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;color:var(--color)}:host,:host(.title-ios){-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.title-ios){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios,:host-context([dir=rtl]):host(.title-ios){left:unset;right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}";
  }
};

export { ToolbarTitle as ion_title };
