import {
  r as registerInstance,
  e as getIonMode,
  h,
  H as Host
} from "./core-9991b89e.js";
var Header = /** @class */ (function() {
  function class_1(hostRef) {
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
  class_1.prototype.render = function() {
    var _a;
    var mode = getIonMode(this);
    return h(Host, {
      role: "banner",
      class:
        ((_a = {}),
        (_a[mode] = true),
        // Used internally for styling
        (_a["header-" + mode] = true),
        (_a["header-translucent"] = this.translucent),
        (_a["header-translucent-" + mode] = this.translucent),
        _a)
    });
  };
  Object.defineProperty(class_1, "style", {
    get: function() {
      return 'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-md[no-border]:after{display:none}';
    },
    enumerable: true,
    configurable: true
  });
  return class_1;
})();
export { Header as ion_header };
