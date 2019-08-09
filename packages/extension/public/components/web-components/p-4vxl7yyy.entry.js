import { r as s, d as t, e as i, h as e, H as o } from "./p-57e9347d.js";
const n = class {
  constructor(i) {
    s(this, i), (this.ionSlideChanged = t(this, "ionSlideChanged", 7));
  }
  componentDidLoad() {
    this.ionSlideChanged.emit();
  }
  componentDidUnload() {
    this.ionSlideChanged.emit();
  }
  render() {
    const s = i(this);
    return e(o, {
      class: { [s]: !0, "swiper-slide": !0, "swiper-zoom-container": !0 }
    });
  }
  static get style() {
    return "ion-slide{height:100%}.slide-zoom,ion-slide{display:block;width:100%}.slide-zoom,.swiper-slide{text-align:center}.swiper-slide{display:-ms-flexbox;display:flex;position:relative;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-size:18px;-webkit-box-sizing:border-box;box-sizing:border-box}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}";
  }
};
export { n as ion_slide };
