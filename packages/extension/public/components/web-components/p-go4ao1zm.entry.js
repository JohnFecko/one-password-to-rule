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
    return "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}";
  }
};
export { a as ion_header };
