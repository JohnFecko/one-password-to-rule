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
    return "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}";
  }
};
export { e as ion_footer };