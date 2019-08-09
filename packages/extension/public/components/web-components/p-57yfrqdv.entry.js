import { r as e, e as r, h as s, H as t } from "./p-57e9347d.js";
const a = class {
  constructor(r) {
    e(this, r), (this.translucent = !1);
  }
  render() {
    const e = r(this);
    return s(t, {
      role: "banner",
      class: {
        [e]: !0,
        [`header-${e}`]: !0,
        "header-translucent": this.translucent,
        [`header-translucent-${e}`]: this.translucent
      }
    });
  }
  static get style() {
    return 'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-md[no-border]:after{display:none}';
  }
};
export { a as ion_header };
