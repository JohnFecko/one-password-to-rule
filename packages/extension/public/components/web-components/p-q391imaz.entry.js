import {
  r as t,
  e as i,
  d as s,
  c as a,
  h as e,
  f as n
} from "./p-57e9347d.js";
import { a as o, d as h } from "./p-8aba239f.js";
import { t as r } from "./p-2a2b1034.js";
const c = class {
  constructor(a) {
    t(this, a),
      (this.mode = i(this)),
      (this.animated = !0),
      (this.ionNavWillLoad = s(this, "ionNavWillLoad", 7)),
      (this.ionNavWillChange = s(this, "ionNavWillChange", 3)),
      (this.ionNavDidChange = s(this, "ionNavDidChange", 3));
  }
  swipeHandlerChanged() {
    this.gesture && this.gesture.setDisabled(void 0 === this.swipeHandler);
  }
  componentWillLoad() {
    this.ionNavWillLoad.emit();
  }
  async componentDidLoad() {
    (this.gesture = (await __sc_import_web_components(
      "./p-a3b910f4.js"
    )).createSwipeBackGesture(
      this.el,
      () => !!this.swipeHandler && this.swipeHandler.canStart(),
      () => this.swipeHandler && this.swipeHandler.onStart(),
      t => this.ani && this.ani.progressStep(t),
      (t, i, s) => {
        this.ani && this.ani.progressEnd(t, i, s),
          this.swipeHandler && this.swipeHandler.onEnd(t);
      }
    )),
      this.swipeHandlerChanged();
  }
  componentDidUnload() {
    (this.activeEl = this.activeComponent = void 0),
      this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
  }
  async commit(t, i, s) {
    const a = await this.lock();
    let e = !1;
    try {
      e = await this.transition(t, i, s);
    } catch (t) {
      console.error(t);
    }
    return a(), e;
  }
  async setRouteId(t, i, s) {
    return {
      changed: await this.setRoot(t, i, {
        duration: "root" === s ? 0 : void 0,
        direction: "back" === s ? "back" : "forward"
      }),
      element: this.activeEl
    };
  }
  async getRouteId() {
    const t = this.activeEl;
    return t ? { id: t.tagName, element: t } : void 0;
  }
  async setRoot(t, i, s) {
    if (this.activeComponent === t) return !1;
    const a = this.activeEl,
      e = await o(
        this.delegate,
        this.el,
        t,
        ["ion-page", "ion-page-invisible"],
        i
      );
    return (
      (this.activeComponent = t),
      (this.activeEl = e),
      await this.commit(e, a, s),
      await h(this.delegate, a),
      !0
    );
  }
  async transition(t, i, s = {}) {
    if (i === t) return !1;
    this.ionNavWillChange.emit();
    const { el: e, mode: n } = this,
      o = this.animated && a.getBoolean("animated", !0),
      h = this.animation || s.animationBuilder || a.get("navAnimation");
    return (
      await r(
        Object.assign(
          {
            mode: n,
            animated: o,
            animationBuilder: h,
            enteringEl: t,
            leavingEl: i,
            baseEl: e,
            progressCallback: s.progressAnimation ? t => (this.ani = t) : void 0
          },
          s
        )
      ),
      this.ionNavDidChange.emit(),
      !0
    );
  }
  async lock() {
    const t = this.waitPromise;
    let i;
    return (
      (this.waitPromise = new Promise(t => (i = t))),
      void 0 !== t && (await t),
      i
    );
  }
  render() {
    return e("slot", null);
  }
  get el() {
    return n(this);
  }
  static get watchers() {
    return { swipeHandler: ["swipeHandlerChanged"] };
  }
  static get style() {
    return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";
  }
};
export { c as ion_router_outlet };
