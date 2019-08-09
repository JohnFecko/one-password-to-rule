import { r as t, d as s, e, h as i, H as h, f as a } from "./p-57e9347d.js";
import { f as n, h as o, j as l } from "./p-5f857030.js";
import { f as r, a as c } from "./p-18f3dc7c.js";
import { h as d } from "./p-955ba954.js";
const u = class {
    constructor(e) {
      t(this, e),
        (this.childOpts = []),
        (this.inputId = `ion-sel-${y++}`),
        (this.didInit = !1),
        (this.isExpanded = !1),
        (this.disabled = !1),
        (this.cancelText = "Cancel"),
        (this.okText = "OK"),
        (this.name = this.inputId),
        (this.multiple = !1),
        (this.interface = "alert"),
        (this.interfaceOptions = {}),
        (this.onClick = t => {
          this.setFocus(), this.open(t);
        }),
        (this.onFocus = () => {
          this.ionFocus.emit();
        }),
        (this.onBlur = () => {
          this.ionBlur.emit();
        }),
        (this.ionChange = s(this, "ionChange", 7)),
        (this.ionCancel = s(this, "ionCancel", 7)),
        (this.ionFocus = s(this, "ionFocus", 7)),
        (this.ionBlur = s(this, "ionBlur", 7)),
        (this.ionStyle = s(this, "ionStyle", 7));
    }
    disabledChanged() {
      this.emitStyle();
    }
    valueChanged() {
      this.didInit &&
        (this.updateOptions(),
        this.ionChange.emit({ value: this.value }),
        this.emitStyle());
    }
    async selectOptionChanged() {
      await this.loadOptions(),
        this.didInit &&
          (this.updateOptions(),
          this.updateOverlayOptions(),
          this.emitStyle(),
          void 0 !== this.value && this.el.forceUpdate());
    }
    async componentDidLoad() {
      if ((await this.loadOptions(), void 0 === this.value))
        if (this.multiple) {
          const t = this.childOpts.filter(t => t.selected);
          this.value = t.map(t => t.value);
        } else {
          const t = this.childOpts.find(t => t.selected);
          t && (this.value = t.value);
        }
      this.updateOptions(),
        this.emitStyle(),
        this.el.forceUpdate(),
        (this.didInit = !0);
    }
    async open(t) {
      if (this.disabled || this.isExpanded) return;
      const s = (this.overlay = await this.createOverlay(t));
      return (
        (this.isExpanded = !0),
        s.onDidDismiss().then(() => {
          (this.overlay = void 0), (this.isExpanded = !1), this.setFocus();
        }),
        await s.present(),
        s
      );
    }
    createOverlay(t) {
      let s = this.interface;
      return (
        ("action-sheet" !== s && "popover" !== s) ||
          !this.multiple ||
          (console.warn(
            `Select interface cannot be "${s}" with a multi-value select. Using the "alert" interface instead.`
          ),
          (s = "alert")),
        "popover" !== s ||
          t ||
          (console.warn(
            'Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'
          ),
          (s = "alert")),
        "popover" === s
          ? this.openPopover(t)
          : "action-sheet" === s
          ? this.openActionSheet()
          : this.openAlert()
      );
    }
    updateOverlayOptions() {
      if (!this.overlay) return;
      const t = this.overlay;
      switch (this.interface) {
        case "action-sheet":
          t.buttons = this.createActionSheetButtons(this.childOpts);
          break;
        case "popover":
          const s = t.querySelector("ion-select-popover");
          s && (s.options = this.createPopoverOptions(this.childOpts));
          break;
        default:
          t.inputs = this.createAlertInputs(
            this.childOpts,
            this.multiple ? "checkbox" : "radio"
          );
      }
    }
    createActionSheetButtons(t) {
      const s = t.map(t => ({
        role: t.selected ? "selected" : "",
        text: t.textContent,
        handler: () => {
          this.value = t.value;
        }
      }));
      return (
        s.push({
          text: this.cancelText,
          role: "cancel",
          handler: () => {
            this.ionCancel.emit();
          }
        }),
        s
      );
    }
    createAlertInputs(t, s) {
      return t.map(t => ({
        type: s,
        label: t.textContent,
        value: t.value,
        checked: t.selected,
        disabled: t.disabled
      }));
    }
    createPopoverOptions(t) {
      return t.map(t => ({
        text: t.textContent,
        value: t.value,
        checked: t.selected,
        disabled: t.disabled,
        handler: () => {
          (this.value = t.value), this.close();
        }
      }));
    }
    async openPopover(t) {
      const s = this.interfaceOptions,
        i = e(this),
        h = Object.assign({ mode: i }, s, {
          component: "ion-select-popover",
          cssClass: ["select-popover", s.cssClass],
          event: t,
          componentProps: {
            header: s.header,
            subHeader: s.subHeader,
            message: s.message,
            value: this.value,
            options: this.createPopoverOptions(this.childOpts)
          }
        });
      return n.create(h);
    }
    async openActionSheet() {
      const t = e(this),
        s = this.interfaceOptions,
        i = Object.assign({ mode: t }, s, {
          buttons: this.createActionSheetButtons(this.childOpts),
          cssClass: ["select-action-sheet", s.cssClass]
        });
      return o.create(i);
    }
    async openAlert() {
      const t = this.getLabel(),
        s = t ? t.textContent : null,
        i = this.interfaceOptions,
        h = this.multiple ? "checkbox" : "radio",
        a = e(this),
        n = Object.assign({ mode: a }, i, {
          header: i.header ? i.header : s,
          inputs: this.createAlertInputs(this.childOpts, h),
          buttons: [
            {
              text: this.cancelText,
              role: "cancel",
              handler: () => {
                this.ionCancel.emit();
              }
            },
            {
              text: this.okText,
              handler: t => {
                this.value = t;
              }
            }
          ],
          cssClass: [
            "select-alert",
            i.cssClass,
            this.multiple ? "multiple-select-alert" : "single-select-alert"
          ]
        });
      return l.create(n);
    }
    close() {
      return this.overlay ? this.overlay.dismiss() : Promise.resolve(!1);
    }
    async loadOptions() {
      this.childOpts = await Promise.all(
        Array.from(this.el.querySelectorAll("ion-select-option")).map(t =>
          t.componentOnReady()
        )
      );
    }
    updateOptions() {
      let t = !0;
      for (const s of this.childOpts) {
        const e = t && v(this.value, s.value, this.compareWith);
        (s.selected = e), e && !this.multiple && (t = !1);
      }
    }
    getLabel() {
      return r(this.el);
    }
    hasValue() {
      return "" !== this.getText();
    }
    getText() {
      const t = this.selectedText;
      return null != t && "" !== t
        ? t
        : f(this.childOpts, this.value, this.compareWith);
    }
    setFocus() {
      this.buttonEl && this.buttonEl.focus();
    }
    emitStyle() {
      this.ionStyle.emit({
        interactive: !0,
        select: !0,
        "has-placeholder": null != this.placeholder,
        "has-value": this.hasValue(),
        "interactive-disabled": this.disabled,
        "select-disabled": this.disabled
      });
    }
    render() {
      const {
          placeholder: t,
          name: s,
          disabled: a,
          isExpanded: n,
          value: o,
          el: l
        } = this,
        u = e(this),
        v = this.inputId + "-lbl",
        b = r(l);
      b && (b.id = v);
      let f = !1,
        m = this.getText();
      "" === m && null != t && ((m = t), (f = !0)), c(!0, l, s, p(o), a);
      const y = { "select-text": !0, "select-placeholder": f };
      return i(
        h,
        {
          onClick: this.onClick,
          role: "combobox",
          "aria-haspopup": "dialog",
          "aria-disabled": a ? "true" : null,
          "aria-expanded": `${n}`,
          "aria-labelledby": v,
          class: { [u]: !0, "in-item": d("ion-item", l), "select-disabled": a }
        },
        i("div", { class: y }, m),
        i(
          "div",
          { class: "select-icon", role: "presentation" },
          i("div", { class: "select-icon-inner" })
        ),
        i("button", {
          type: "button",
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          disabled: a,
          ref: t => (this.buttonEl = t)
        })
      );
    }
    get el() {
      return a(this);
    }
    static get watchers() {
      return { disabled: ["disabledChanged"], value: ["valueChanged"] };
    }
    static get style() {
      return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}.select-icon{width:12px;height:18px}";
    }
  },
  p = t => {
    if (null != t) return Array.isArray(t) ? t.join(",") : t.toString();
  },
  v = (t, s, e) =>
    void 0 !== t && (Array.isArray(t) ? t.some(t => b(t, s, e)) : b(t, s, e)),
  b = (t, s, e) =>
    "function" == typeof e
      ? e(t, s)
      : "string" == typeof e
      ? t[e] === s[e]
      : t === s,
  f = (t, s, e) =>
    void 0 === s
      ? ""
      : Array.isArray(s)
      ? s
          .map(s => m(t, s, e))
          .filter(t => null !== t)
          .join(", ")
      : m(t, s, e) || "",
  m = (t, s, e) => {
    const i = t.find(t => b(t.value, s, e));
    return i ? i.textContent : null;
  };
let y = 0;
export { u as ion_select };
