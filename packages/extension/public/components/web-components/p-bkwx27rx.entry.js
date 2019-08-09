import {
  r as i,
  e as t,
  h as s,
  H as e,
  f as o,
  d as n
} from "./p-57e9347d.js";
import { f as h } from "./p-18f3dc7c.js";
import { o as a, c as l, h as r } from "./p-955ba954.js";
const d = class {
    constructor(t) {
      i(this, t),
        (this.itemStyles = new Map()),
        (this.multipleInputs = !1),
        (this.button = !1),
        (this.detailIcon = "ios-arrow-forward"),
        (this.disabled = !1),
        (this.routerDirection = "forward"),
        (this.type = "button");
    }
    itemStyle(i) {
      i.stopPropagation();
      const t = i.target.tagName,
        s = i.detail,
        e = {},
        o = this.itemStyles.get(t) || {};
      let n = !1;
      Object.keys(s).forEach(i => {
        if (s[i]) {
          const t = `item-${i}`;
          o[t] || (n = !0), (e[t] = !0);
        }
      }),
        n || Object.keys(e).length === Object.keys(o).length || (n = !0),
        n && (this.itemStyles.set(t, e), this.el.forceUpdate());
    }
    componentDidLoad() {
      const i = this.el.querySelectorAll(
          "ion-checkbox, ion-datetime, ion-select, ion-radio"
        ),
        t = this.el.querySelectorAll(
          "ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle"
        );
      this.multipleInputs = i.length + t.length > 1;
    }
    hasCover() {
      return (
        1 ===
          this.el.querySelectorAll(
            "ion-checkbox, ion-datetime, ion-select, ion-radio"
          ).length && !this.multipleInputs
      );
    }
    isClickable() {
      return void 0 !== this.href || this.button;
    }
    canActivate() {
      return this.isClickable() || this.hasCover();
    }
    render() {
      const {
          detail: i,
          detailIcon: o,
          download: n,
          lines: h,
          disabled: d,
          href: c,
          rel: u,
          target: b,
          routerDirection: m
        } = this,
        g = {},
        p = t(this),
        v = this.isClickable(),
        f = this.canActivate(),
        L = v ? (void 0 === c ? "button" : "a") : "div",
        C =
          "button" === L
            ? { type: this.type }
            : { download: n, href: c, rel: u, target: b },
        E = void 0 !== i ? i : "ios" === p && v;
      return (
        this.itemStyles.forEach(i => {
          Object.assign(g, i);
        }),
        s(
          e,
          {
            "aria-disabled": d ? "true" : null,
            class: Object.assign({}, g, l(this.color), {
              item: !0,
              [p]: !0,
              [`item-lines-${h}`]: void 0 !== h,
              "item-disabled": d,
              "in-list": r("ion-list", this.el),
              "item-multiple-inputs": this.multipleInputs,
              "ion-activatable": f,
              "ion-focusable": !0
            })
          },
          s(
            L,
            Object.assign({}, C, {
              class: "item-native",
              disabled: d,
              onClick: i => a(c, i, m)
            }),
            s("slot", { name: "start" }),
            s(
              "div",
              { class: "item-inner" },
              s("div", { class: "input-wrapper" }, s("slot", null)),
              s("slot", { name: "end" }),
              E &&
                s("ion-icon", { icon: o, lazy: !1, class: "item-detail-icon" }),
              s("div", { class: "item-inner-highlight" })
            ),
            f && "md" === p && s("ion-ripple-effect", null)
          ),
          s("div", { class: "item-highlight" })
        )
      );
    }
    get el() {
      return o(this);
    }
    static get style() {
      return ":host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--box-shadow:none;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:var(--ion-item-background-activated,currentColor);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;outline:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}:host(.ion-color) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .item-inner,:host(.ion-color) .item-native{border-color:var(--ion-color-shade)}:host(.ion-focused) .item-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.ion-focused) .item-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}@media (any-hover:hover){:host(.ion-activatable:hover) .item-native{background:var(--background-hover);color:var(--color-hover)}:host(.ion-color.ion-activatable:hover) .item-native{background:var(--ion-color-tint);color:var(--ion-color-contrast)}}:host(.activated) .item-native{background:var(--background-activated);color:var(--color-activated)}:host(.item-disabled),:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){opacity:.3}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}a,button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label){-ms-flex:1;flex:1}:host(.item-input),:host([vertical-align-top]){-ms-flex-align:start;align-items:flex-start}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-floating) .item-native,:host(.item-label-stacked) .item-native{-ms-flex-align:start;align-items:start}:host(.item-label-floating) .input-wrapper,:host(.item-label-stacked) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background)}.item-highlight{height:var(--full-highlight-height)}.item-inner-highlight{height:var(--inset-highlight-height)}:host(.item-interactive.ion-touched.ion-invalid),:host(.item-interactive.item-has-focus){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(.item-label-floating) ::slotted(ion-datetime),:host(.item-label-stacked) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host{--min-height:48px;--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-activated:var(--background);--background-focused:var(--ion-item-background-focused,var(--ion-color-step-100,#e1e1e1));--background-hover:var(--ion-item-background-hover,rgba(var(--ion-text-color-rgb,0,0,0),0.04));--transition:background-color 300ms cubic-bezier(.4,0,.2,1);--padding-start:16px;--color:var(--ion-item-color,var(--ion-text-color,#000));--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))));--inner-padding-end:16px;--inner-border-width:0 0 1px 0;--highlight-height:2px;--highlight-color-focused:var(--ion-color-primary,#3880ff);--highlight-color-valid:var(--ion-color-success,#10dc60);--highlight-color-invalid:var(--ion-color-danger,#f04141);font-size:16px;font-weight:400;text-transform:none}:host(.ion-focused.activated) .item-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.activated) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color.ion-focused.activated) .item-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}:host(.item-interactive){--inner-border-width:0}:host(.item-interactive),:host(.item-lines-full){--border-width:0 0 1px 0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0;--show-inset-highlight:0}:host(.item-multi-line) ::slotted([slot=end]),:host(.item-multi-line) ::slotted([slot=start]){margin-top:16px;margin-bottom:16px;-ms-flex-item-align:start;align-self:flex-start}::slotted([slot=start]){margin-right:32px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted([slot=end]){margin-left:32px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;-webkit-margin-start:32px;margin-inline-start:32px}}::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb,0,0,0),.54);font-size:24px}:host(.ion-color) ::slotted(ion-icon){color:var(--ion-color-contrast)}::slotted(ion-icon[slot]){margin-top:12px;margin-bottom:12px}::slotted(ion-icon[slot=start]){margin-right:32px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted(ion-icon[slot=end]){margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}::slotted(ion-note),::slotted(ion-toggle[slot=end]),::slotted(ion-toggle[slot=start]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}::slotted(ion-note){-ms-flex-item-align:start;align-self:flex-start;font-size:11px}::slotted(ion-note[slot]){padding-left:0;padding-right:0;padding-top:18px;padding-bottom:10px}::slotted(ion-note[slot=start]){padding-right:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-note[slot=start]){padding-right:unset;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-note[slot=end]){padding-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-note[slot=end]){padding-left:unset;-webkit-padding-start:16px;padding-inline-start:16px}}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar),::slotted(ion-thumbnail){margin-top:8px;margin-bottom:8px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:unset;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:11px;margin-bottom:10px}:host(.item-label-floating) ::slotted([slot=end]),:host(.item-label-stacked) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;height:25px;font-size:12px}:host(.item-label-floating),:host(.item-label-stacked){--min-height:55px}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0}:host(.item-has-focus:not(.ion-color)) ::slotted(.label-floating),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-stacked){color:var(--ion-color-primary,#3880ff)}";
    }
  },
  c = class {
    constructor(t) {
      i(this, t), (this.inset = !1);
    }
    async closeSlidingItems() {
      const i = this.el.querySelector("ion-item-sliding");
      return !(!i || !i.closeOpened) && i.closeOpened();
    }
    render() {
      const i = t(this),
        { lines: o, inset: n } = this;
      return s(e, {
        class: {
          [i]: !0,
          [`list-${i}`]: !0,
          "list-inset": n,
          [`list-lines-${o}`]: void 0 !== o,
          [`list-${i}-lines-${o}`]: void 0 !== o
        }
      });
    }
    get el() {
      return o(this);
    }
    static get style() {
      return "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;background:var(--ion-item-background,var(--ion-background-color,#fff))}.list-md>.input:last-child:after{left:0}:host-context([dir=rtl]) .list-md>.input:last-child:after,[dir=rtl] .list-md>.input:last-child:after{left:unset;right:unset;right:0}.list-md.list-inset{margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px;border-radius:2px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.list-md.list-inset{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}.list-md.list-inset ion-item:first-child{--border-radius:2px 2px 0 0;--border-width:0}.list-md.list-inset ion-item:last-child{--border-radius:0 0 2px,2px;--border-width:0}.list-md.list-inset .item-interactive{--padding-start:0;--padding-end:0}.list-md.list-inset+ion-list.list-inset{margin-top:0}.list-md-lines-none .item{--border-width:0;--inner-border-width:0}.list-md-lines-full .item,.list-md .item-lines-full{--border-width:0 0 1px 0}.list-md-lines-full .item{--inner-border-width:0}.list-md-lines-inset .item,.list-md .item-lines-inset{--inner-border-width:0 0 1px 0}.list-md .item-lines-inset{--border-width:0}.list-md .item-lines-full{--inner-border-width:0}.list-md .item-lines-none{--border-width:0;--inner-border-width:0}";
    }
  },
  u = class {
    constructor(t) {
      i(this, t);
    }
    render() {
      const i = t(this);
      return s(
        e,
        { class: Object.assign({}, l(this.color), { [i]: !0 }) },
        s("slot", null)
      );
    }
    static get style() {
      return ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:transparent;--color:var(--ion-text-color,#000);padding-left:calc(var(--ion-safe-area-left, 0px) + 16px);min-height:45px;font-size:14px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0px) + 16px);padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 16px)}}";
    }
  },
  b = class {
    constructor(t) {
      i(this, t),
        (this.inputId = `ion-rb-${m++}`),
        (this.name = this.inputId),
        (this.disabled = !1),
        (this.checked = !1),
        (this.onFocus = () => {
          this.ionFocus.emit();
        }),
        (this.onBlur = () => {
          this.ionBlur.emit();
        }),
        (this.onClick = () => {
          this.checked ? this.ionDeselect.emit() : (this.checked = !0);
        }),
        (this.ionRadioDidLoad = n(this, "ionRadioDidLoad", 7)),
        (this.ionRadioDidUnload = n(this, "ionRadioDidUnload", 7)),
        (this.ionStyle = n(this, "ionStyle", 7)),
        (this.ionSelect = n(this, "ionSelect", 7)),
        (this.ionDeselect = n(this, "ionDeselect", 7)),
        (this.ionFocus = n(this, "ionFocus", 7)),
        (this.ionBlur = n(this, "ionBlur", 7));
    }
    colorChanged() {
      this.emitStyle();
    }
    checkedChanged(i) {
      i && this.ionSelect.emit({ checked: !0, value: this.value }),
        this.emitStyle();
    }
    disabledChanged() {
      this.emitStyle();
    }
    componentWillLoad() {
      void 0 === this.value && (this.value = this.inputId), this.emitStyle();
    }
    componentDidLoad() {
      this.ionRadioDidLoad.emit();
    }
    componentDidUnload() {
      this.ionRadioDidUnload.emit();
    }
    emitStyle() {
      this.ionStyle.emit({
        "radio-checked": this.checked,
        "interactive-disabled": this.disabled
      });
    }
    render() {
      const { inputId: i, disabled: o, checked: n, color: a, el: d } = this,
        c = t(this),
        u = i + "-lbl",
        b = h(d);
      return (
        b && (b.id = u),
        s(
          e,
          {
            onClick: this.onClick,
            role: "radio",
            "aria-disabled": o ? "true" : null,
            "aria-checked": `${n}`,
            "aria-labelledby": u,
            class: Object.assign({}, l(a), {
              [c]: !0,
              "in-item": r("ion-item", d),
              interactive: !0,
              "radio-checked": n,
              "radio-disabled": o
            })
          },
          s("div", { class: "radio-icon" }, s("div", { class: "radio-inner" })),
          s("button", {
            type: "button",
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            disabled: o
          })
        )
      );
    }
    get el() {
      return o(this);
    }
    static get watchers() {
      return {
        color: ["colorChanged"],
        checked: ["checkedChanged"],
        disabled: ["disabledChanged"]
      };
    }
    static get style() {
      return ':host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color:var(--ion-color-step-400,#999);--color-checked:var(--ion-color-primary,#3880ff);--border-width:2px;--border-style:solid;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:50%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:50%;width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:"";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}';
    }
  };
let m = 0;
const g = class {
  constructor(t) {
    i(this, t),
      (this.inputId = `ion-rg-${p++}`),
      (this.labelId = `${this.inputId}-lbl`),
      (this.radios = []),
      (this.allowEmptySelection = !1),
      (this.name = this.inputId),
      (this.ionChange = n(this, "ionChange", 7));
  }
  valueChanged(i) {
    this.updateRadios(), this.ionChange.emit({ value: i });
  }
  onRadioDidLoad(i) {
    const t = i.target;
    (t.name = this.name),
      this.radios.push(t),
      null == this.value && t.checked
        ? (this.value = t.value)
        : this.updateRadios();
  }
  onRadioDidUnload(i) {
    const t = this.radios.indexOf(i.target);
    t > -1 && this.radios.splice(t, 1);
  }
  onRadioSelect(i) {
    const t = i.target;
    t && (this.value = t.value);
  }
  onRadioDeselect(i) {
    if (this.allowEmptySelection) {
      const t = i.target;
      t && ((t.checked = !1), (this.value = void 0));
    }
  }
  componentDidLoad() {
    let i = this.el.querySelector("ion-list-header");
    if ((i || (i = this.el.querySelector("ion-item-divider")), i)) {
      const t = i.querySelector("ion-label");
      t && (this.labelId = t.id = this.name + "-lbl");
    }
    this.updateRadios();
  }
  updateRadios() {
    const i = this.value;
    let t = !1;
    for (const s of this.radios)
      t || s.value !== i ? (s.checked = !1) : ((t = !0), (s.checked = !0));
  }
  render() {
    return s(e, {
      role: "radiogroup",
      "aria-labelledby": this.labelId,
      class: t(this)
    });
  }
  get el() {
    return o(this);
  }
  static get watchers() {
    return { value: ["valueChanged"] };
  }
};
let p = 0;
export {
  d as ion_item,
  c as ion_list,
  u as ion_list_header,
  b as ion_radio,
  g as ion_radio_group
};
