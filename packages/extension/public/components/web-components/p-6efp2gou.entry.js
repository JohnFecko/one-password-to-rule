import { r as t, d as o } from "./p-57e9347d.js";
const e = class {
  constructor(e) {
    t(this, e),
      (this.ionRouteRedirectChanged = o(this, "ionRouteRedirectChanged", 7));
  }
  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }
  componentDidLoad() {
    this.ionRouteRedirectChanged.emit();
  }
  componentDidUnload() {
    this.ionRouteRedirectChanged.emit();
  }
  static get watchers() {
    return { from: ["propDidChange"], to: ["propDidChange"] };
  }
};
export { e as ion_route_redirect };
