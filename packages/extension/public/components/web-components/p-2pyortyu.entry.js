import {
  r as t,
  d as s,
  e as i,
  h as e,
  H as h,
  f as o
} from "./p-57e9347d.js";
import { f as a, a as n } from "./p-18f3dc7c.js";
import { c, h as r } from "./p-955ba954.js";
import { c as d } from "./p-cf171e41.js";
const l = class {
    constructor(i) {
      t(this, i),
        (this.inputId = `ion-tg-${u++}`),
        (this.lastDrag = 0),
        (this.activated = !1),
        (this.name = this.inputId),
        (this.checked = !1),
        (this.disabled = !1),
        (this.value = "on"),
        (this.onClick = () => {
          this.lastDrag + 300 < Date.now() && (this.checked = !this.checked);
        }),
        (this.onFocus = () => {
          this.ionFocus.emit();
        }),
        (this.onBlur = () => {
          this.ionBlur.emit();
        }),
        (this.ionChange = s(this, "ionChange", 7)),
        (this.ionFocus = s(this, "ionFocus", 7)),
        (this.ionBlur = s(this, "ionBlur", 7)),
        (this.ionStyle = s(this, "ionStyle", 7));
    }
    checkedChanged(t) {
      this.ionChange.emit({ checked: t, value: this.value });
    }
    disabledChanged() {
      this.emitStyle(), this.gesture && this.gesture.setDisabled(this.disabled);
    }
    componentWillLoad() {
      this.emitStyle();
    }
    async componentDidLoad() {
      (this.gesture = (await __sc_import_web_components(
        "./p-24ef4e55.js"
      )).createGesture({
        el: this.el,
        gestureName: "toggle",
        gesturePriority: 100,
        threshold: 5,
        passive: !1,
        onStart: () => this.onStart(),
        onMove: t => this.onMove(t),
        onEnd: t => this.onEnd(t)
      })),
        this.disabledChanged();
    }
    componentDidUnload() {
      this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
    }
    emitStyle() {
      this.ionStyle.emit({ "interactive-disabled": this.disabled });
    }
    onStart() {
      (this.activated = !0), this.setFocus();
    }
    onMove(t) {
      g(document, this.checked, t.deltaX, -10) &&
        ((this.checked = !this.checked), d());
    }
    onEnd(t) {
      (this.activated = !1),
        (this.lastDrag = Date.now()),
        t.event.preventDefault(),
        t.event.stopImmediatePropagation();
    }
    getValue() {
      return this.value || "";
    }
    setFocus() {
      this.buttonEl && this.buttonEl.focus();
    }
    render() {
      const {
          inputId: t,
          disabled: s,
          checked: o,
          activated: d,
          color: l,
          el: g
        } = this,
        u = i(this),
        m = t + "-lbl",
        p = a(g),
        b = this.getValue();
      return (
        p && (p.id = m),
        n(!0, g, this.name, o ? b : "", s),
        e(
          h,
          {
            onClick: this.onClick,
            role: "checkbox",
            "aria-disabled": s ? "true" : null,
            "aria-checked": `${o}`,
            "aria-labelledby": m,
            class: Object.assign({}, c(l), {
              [u]: !0,
              "in-item": r("ion-item", g),
              "toggle-activated": d,
              "toggle-checked": o,
              "toggle-disabled": s,
              interactive: !0
            })
          },
          e(
            "div",
            { class: "toggle-icon" },
            e("div", { class: "toggle-inner" })
          ),
          e("button", {
            type: "button",
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            disabled: s,
            ref: t => (this.buttonEl = t)
          })
        )
      );
    }
    get el() {
      return o(this);
    }
    static get watchers() {
      return { checked: ["checkedChanged"], disabled: ["disabledChanged"] };
    }
    static get style() {
      return ":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.3);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:#fff;--handle-background-checked:var(--ion-color-primary,#3880ff);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb),.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:0}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 16px),0,0);transform:translate3d(calc(-1 * 16px),0,0)}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}";
    }
  },
  g = (t, s, i, e) => {
    const h = "rtl" === t.dir;
    return s ? (!h && e > i) || (h && -e < i) : (!h && -e < i) || (h && e > i);
  };
let u = 0;
export { l as ion_toggle };
