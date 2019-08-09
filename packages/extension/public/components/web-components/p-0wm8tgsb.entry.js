import {
  r as t,
  d as i,
  h as s,
  e as o,
  H as e,
  f as n
} from "./p-57e9347d.js";
const h = class {
  constructor(s) {
    t(this, s),
      (this.inputId = `ion-selopt-${l++}`),
      (this.disabled = !1),
      (this.selected = !1),
      (this.ionSelectOptionDidLoad = i(this, "ionSelectOptionDidLoad", 7)),
      (this.ionSelectOptionDidUnload = i(this, "ionSelectOptionDidUnload", 7));
  }
  componentWillLoad() {
    void 0 === this.value && (this.value = this.el.textContent || "");
  }
  componentDidLoad() {
    this.ionSelectOptionDidLoad.emit();
  }
  componentDidUnload() {
    this.ionSelectOptionDidUnload.emit();
  }
  render() {
    return s(e, { role: "option", id: this.inputId, class: o(this) });
  }
  get el() {
    return n(this);
  }
  static get style() {
    return ":host{display:none}";
  }
};
let l = 0;
export { h as ion_select_option };
