import { r as t, d as s, e, h as i, H as n, f as o } from "./p-57e9347d.js";
import { c as h } from "./p-955ba954.js";
const a = class {
  constructor(e) {
    t(this, e),
      (this.disabled = !1),
      (this.scrollable = !1),
      (this.ionChange = s(this, "ionChange", 7)),
      (this.ionStyle = s(this, "ionStyle", 7));
  }
  valueChanged(t) {
    this.updateButtons(), this.ionChange.emit({ value: t });
  }
  segmentClick(t) {
    this.value = t.target.value;
  }
  componentWillLoad() {
    this.emitStyle();
  }
  componentDidLoad() {
    if (null == this.value) {
      const t = this.getButtons().find(t => t.checked);
      t && (this.value = t.value);
    }
    this.updateButtons();
  }
  emitStyle() {
    this.ionStyle.emit({ segment: !0 });
  }
  updateButtons() {
    const t = this.value;
    for (const s of this.getButtons()) s.checked = s.value === t;
  }
  getButtons() {
    return Array.from(this.el.querySelectorAll("ion-segment-button"));
  }
  render() {
    const t = e(this);
    return i(n, {
      class: Object.assign({}, h(this.color), {
        [t]: !0,
        "segment-disabled": this.disabled,
        "segment-scrollable": this.scrollable
      })
    });
  }
  get el() {
    return o(this);
  }
  static get watchers() {
    return { value: ["valueChanged"] };
  }
  static get style() {
    return ".sc-ion-segment-md-h{--indicator-color-checked:initial;--ripple-color:currentColor;--color-activated:initial;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center}.sc-ion-segment-md-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-md-h{pointer-events:none}.segment-scrollable.sc-ion-segment-md-h{-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}.segment-scrollable.sc-ion-segment-md-h::-webkit-scrollbar{display:none}.sc-ion-segment-md-h{--background:none;--background-checked:none;--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.04);--background-activated:rgba(var(--ion-color-primary-rgb,56,128,255),0.16);--color:rgba(var(--ion-text-color-rgb,0,0,0),0.6);--color-checked:var(--ion-color-primary,#3880ff);--color-checked-disabled:var(--color-checked);--indicator-color:transparent}.segment-disabled.sc-ion-segment-md-h{opacity:.3}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button{--background-activated:rgba(var(--ion-color-base-rgb),0.16);--ripple-color:var(--ion-color-base);background:transparent;color:rgba(var(--ion-text-color-rgb,0,0,0),.6)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked{--indicator-color-checked:var(--ion-color-base);color:var(--ion-color-base)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked.activated{color:var(--ion-color-base)}@media (any-hover:hover){.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button:hover{background:rgba(var(--ion-color-base-rgb),.04)}}.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button{color:var(--ion-toolbar-color-unchecked,var(--color))}.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > .segment-button-checked, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > .segment-button-checked{--indicator-color-checked:var(--ion-toolbar-color-checked,var(--color-checked));color:var(--ion-toolbar-color-checked,var(--color-checked))}.sc-ion-segment-md-hion-toolbar.ion-color:not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar.ion-color .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button{--background-hover:rgba(var(--ion-color-contrast-rgb),0.04);--background-activated:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb),0.6);--color-checked:var(--ion-color-contrast);--indicator-color-checked:var(--ion-color-contrast)}";
  }
};
export { a as ion_segment };
