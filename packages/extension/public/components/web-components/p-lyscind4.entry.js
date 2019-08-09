import { r as t, d as s, w as i, e, h, f as r, H as n } from "./p-57e9347d.js";
const o = class {
  constructor(i) {
    t(this, i),
      (this.appliedStyles = !1),
      (this.didStart = !1),
      (this.progress = 0),
      (this.state = 1),
      (this.pullMin = 60),
      (this.pullMax = this.pullMin + 60),
      (this.closeDuration = "280ms"),
      (this.snapbackDuration = "280ms"),
      (this.pullFactor = 1),
      (this.disabled = !1),
      (this.ionRefresh = s(this, "ionRefresh", 7)),
      (this.ionPull = s(this, "ionPull", 7)),
      (this.ionStart = s(this, "ionStart", 7));
  }
  disabledChanged() {
    this.gesture && this.gesture.setDisabled(this.disabled);
  }
  async componentDidLoad() {
    if ("fixed" !== this.el.getAttribute("slot"))
      return void console.error(
        'Make sure you use: <ion-refresher slot="fixed">'
      );
    const t = this.el.closest("ion-content");
    t
      ? (this.scrollEl = await t.getScrollElement())
      : console.error(
          "ion-refresher did not attach, make sure the parent is an ion-content."
        ),
      (this.gesture = (await __sc_import_web_components(
        "./p-24ef4e55.js"
      )).createGesture({
        el: this.el.closest("ion-content"),
        gestureName: "refresher",
        gesturePriority: 10,
        direction: "y",
        threshold: 20,
        passive: !1,
        canStart: () => this.canStart(),
        onStart: () => this.onStart(),
        onMove: t => this.onMove(t),
        onEnd: () => this.onEnd()
      })),
      this.disabledChanged();
  }
  componentDidUnload() {
    (this.scrollEl = void 0),
      this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
  }
  async complete() {
    this.close(32, "120ms");
  }
  async cancel() {
    this.close(16, "");
  }
  getProgress() {
    return Promise.resolve(this.progress);
  }
  canStart() {
    return !(!this.scrollEl || 1 !== this.state || this.scrollEl.scrollTop > 0);
  }
  onStart() {
    (this.progress = 0), (this.state = 1);
  }
  onMove(t) {
    if (!this.scrollEl) return;
    const s = t.event;
    if (s.touches && s.touches.length > 1) return;
    if (0 != (56 & this.state)) return;
    const i =
        Number.isNaN(this.pullFactor) || this.pullFactor < 0
          ? 1
          : this.pullFactor,
      e = t.deltaY * i;
    if (e <= 0)
      return (
        (this.progress = 0),
        (this.state = 1),
        this.appliedStyles ? void this.setCss(0, "", !1, "") : void 0
      );
    if (1 === this.state) {
      if (this.scrollEl.scrollTop > 0) return void (this.progress = 0);
      this.state = 2;
    }
    if (
      (s.cancelable && s.preventDefault(),
      this.setCss(e, "0ms", !0, ""),
      0 === e)
    )
      return void (this.progress = 0);
    const h = this.pullMin;
    (this.progress = e / h),
      this.didStart || ((this.didStart = !0), this.ionStart.emit()),
      this.ionPull.emit(),
      e < h
        ? (this.state = 2)
        : e > this.pullMax
        ? this.beginRefresh()
        : (this.state = 4);
  }
  onEnd() {
    4 === this.state ? this.beginRefresh() : 2 === this.state && this.cancel();
  }
  beginRefresh() {
    (this.state = 8),
      this.setCss(this.pullMin, this.snapbackDuration, !0, ""),
      this.ionRefresh.emit({ complete: this.complete.bind(this) });
  }
  close(t, s) {
    setTimeout(() => {
      (this.state = 1),
        (this.progress = 0),
        (this.didStart = !1),
        this.setCss(0, "0ms", !1, "");
    }, 600),
      (this.state = t),
      this.setCss(0, this.closeDuration, !0, s);
  }
  setCss(t, s, e, h) {
    (this.appliedStyles = t > 0),
      i(() => {
        if (this.scrollEl) {
          const i = this.scrollEl.style;
          (i.transform =
            t > 0 ? `translateY(${t}px) translateZ(0px)` : "translateZ(0px)"),
            (i.transitionDuration = s),
            (i.transitionDelay = h),
            (i.overflow = e ? "hidden" : "");
        }
      });
  }
  render() {
    const t = e(this);
    return h(n, {
      slot: "fixed",
      class: {
        [t]: !0,
        [`refresher-${t}`]: !0,
        "refresher-active": 1 !== this.state,
        "refresher-pulling": 2 === this.state,
        "refresher-ready": 4 === this.state,
        "refresher-refreshing": 8 === this.state,
        "refresher-cancelling": 16 === this.state,
        "refresher-completing": 32 === this.state
      }
    });
  }
  get el() {
    return r(this);
  }
  static get watchers() {
    return { disabled: ["disabledChanged"] };
  }
  static get style() {
    return "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-icon,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-crescent circle,.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line{stroke:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}";
  }
};
export { o as ion_refresher };