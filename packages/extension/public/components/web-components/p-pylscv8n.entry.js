import { r as t, e as o, h as r, H as s } from "./p-57e9347d.js";
const e = class {
  constructor(o) {
    t(this, o), (this.translucent = !1);
  }
  render() {
    const t = o(this),
      e = this.translucent;
    return r(s, {
      role: "contentinfo",
      class: {
        [t]: !0,
        [`footer-${t}`]: !0,
        "footer-translucent": e,
        [`footer-translucent-${t}`]: e
      }
    });
  }
  static get style() {
    return 'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md[no-border]:before{display:none}';
  }
};
export { e as ion_footer };
