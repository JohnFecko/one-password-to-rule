import { r as t, d as s, e as i, h as o, H as a } from "./p-57e9347d.js";
import { n as h } from "./p-18f3dc7c.js";
import { GESTURE_CONTROLLER as r } from "./p-24ef4e55.js";
const e = class {
  constructor(i) {
    t(this, i),
      (this.lastClick = -1e4),
      (this.blocker = r.createBlocker({ disableScroll: !0 })),
      (this.visible = !0),
      (this.tappable = !0),
      (this.stopPropagation = !0),
      (this.ionBackdropTap = s(this, "ionBackdropTap", 7));
  }
  componentDidLoad() {
    this.stopPropagation && this.blocker.block();
  }
  componentDidUnload() {
    this.blocker.destroy();
  }
  onTouchStart(t) {
    (this.lastClick = h(t)), this.emitTap(t);
  }
  onMouseDown(t) {
    this.lastClick < h(t) - 2500 && this.emitTap(t);
  }
  emitTap(t) {
    this.stopPropagation && (t.preventDefault(), t.stopPropagation()),
      this.tappable && this.ionBackdropTap.emit();
  }
  render() {
    const t = i(this);
    return o(a, {
      tabindex: "-1",
      class: {
        [t]: !0,
        "backdrop-hide": !this.visible,
        "backdrop-no-tappable": !this.tappable
      }
    });
  }
  static get style() {
    return ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}";
  }
};
export { e as ion_backdrop };
