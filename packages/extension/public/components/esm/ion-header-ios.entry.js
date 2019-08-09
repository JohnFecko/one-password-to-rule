import {
  r as registerInstance,
  e as getIonMode,
  h,
  H as Host
} from "./core-9991b89e.js";

const Header = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * If `true`, the header will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     *
     * Note: In order to scroll content behind the header, the `fullscreen`
     * attribute needs to be set on the content.
     */
    this.translucent = false;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      role: "banner",
      class: {
        [mode]: true,
        // Used internally for styling
        [`header-${mode}`]: true,
        [`header-translucent`]: this.translucent,
        [`header-translucent-${mode}`]: this.translucent
      }
    });
  }
  static get style() {
    return "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}";
  }
};

export { Header as ion_header };
