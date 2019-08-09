import { r as o, d as t } from "./p-57e9347d.js";
const n = class {
  constructor(n) {
    o(this, n),
      (this.url = ""),
      (this.ionRouteDataChanged = t(this, "ionRouteDataChanged", 7));
  }
  onUpdate(o) {
    this.ionRouteDataChanged.emit(o);
  }
  onComponentProps(o, t) {
    if (o === t) return;
    const n = o ? Object.keys(o) : [],
      s = t ? Object.keys(t) : [];
    if (n.length === s.length) {
      for (const s of n) if (o[s] !== t[s]) return void this.onUpdate(o);
    } else this.onUpdate(o);
  }
  componentDidLoad() {
    this.ionRouteDataChanged.emit();
  }
  componentDidUnload() {
    this.ionRouteDataChanged.emit();
  }
  static get watchers() {
    return {
      url: ["onUpdate"],
      component: ["onUpdate"],
      componentProps: ["onComponentProps"]
    };
  }
};
export { n as ion_route };
