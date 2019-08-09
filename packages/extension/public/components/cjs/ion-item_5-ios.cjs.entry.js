"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const core = require("./core-be19e9c2.js");
const helpers = require("./helpers-d1479b7a.js");
const theme = require("./theme-b33a32a5.js");

const Item = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
    this.itemStyles = new Map();
    this.multipleInputs = false;
    /**
     * If `true`, a button tag will be rendered and the item will be tappable.
     */
    this.button = false;
    /**
     * The icon to use when `detail` is set to `true`.
     */
    this.detailIcon = "ios-arrow-forward";
    /**
     * If `true`, the user cannot interact with the item.
     */
    this.disabled = false;
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    this.routerDirection = "forward";
    /**
     * The type of the button. Only used when an `onclick` or `button` property is present.
     */
    this.type = "button";
  }
  itemStyle(ev) {
    ev.stopPropagation();
    const tagName = ev.target.tagName;
    const updatedStyles = ev.detail;
    const newStyles = {};
    const childStyles = this.itemStyles.get(tagName) || {};
    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach(key => {
      if (updatedStyles[key]) {
        const itemKey = `item-${key}`;
        if (!childStyles[itemKey]) {
          hasStyleChange = true;
        }
        newStyles[itemKey] = true;
      }
    });
    if (
      !hasStyleChange &&
      Object.keys(newStyles).length !== Object.keys(childStyles).length
    ) {
      hasStyleChange = true;
    }
    if (hasStyleChange) {
      this.itemStyles.set(tagName, newStyles);
      this.el.forceUpdate();
    }
  }
  componentDidLoad() {
    // The following elements have a clickable cover that is relative to the entire item
    const covers = this.el.querySelectorAll(
      "ion-checkbox, ion-datetime, ion-select, ion-radio"
    );
    // The following elements can accept focus alongside the previous elements
    // therefore if these elements are also a child of item, we don't want the
    // input cover on top of those interfering with their clicks
    const inputs = this.el.querySelectorAll(
      "ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle"
    );
    // Check for multiple inputs to change the position of the input cover to relative
    // for all of the covered inputs above
    this.multipleInputs = covers.length + inputs.length > 1;
  }
  // If the item contains an input including a checkbox, datetime, select, or radio
  // then the item will have a clickable input cover that covers the item
  // that should get the hover, focused and activated states UNLESS it has multiple
  // inputs, then those need to individually get each click
  hasCover() {
    const inputs = this.el.querySelectorAll(
      "ion-checkbox, ion-datetime, ion-select, ion-radio"
    );
    return inputs.length === 1 && !this.multipleInputs;
  }
  // If the item has an href or button property it will render a native
  // anchor or button that is clickable
  isClickable() {
    return this.href !== undefined || this.button;
  }
  canActivate() {
    return this.isClickable() || this.hasCover();
  }
  render() {
    const {
      detail,
      detailIcon,
      download,
      lines,
      disabled,
      href,
      rel,
      target,
      routerDirection
    } = this;
    const childStyles = {};
    const mode = core.getIonMode(this);
    const clickable = this.isClickable();
    const canActivate = this.canActivate();
    const TagType = clickable ? (href === undefined ? "button" : "a") : "div";
    const attrs =
      TagType === "button"
        ? { type: this.type }
        : {
            download,
            href,
            rel,
            target
          };
    const showDetail =
      detail !== undefined ? detail : mode === "ios" && clickable;
    this.itemStyles.forEach(value => {
      Object.assign(childStyles, value);
    });
    return core.h(
      core.Host,
      {
        "aria-disabled": disabled ? "true" : null,
        class: Object.assign(
          {},
          childStyles,
          theme.createColorClasses(this.color),
          {
            item: true,
            [mode]: true,
            [`item-lines-${lines}`]: lines !== undefined,
            "item-disabled": disabled,
            "in-list": theme.hostContext("ion-list", this.el),
            "item-multiple-inputs": this.multipleInputs,
            "ion-activatable": canActivate,
            "ion-focusable": true
          }
        )
      },
      core.h(
        TagType,
        Object.assign({}, attrs, {
          class: "item-native",
          disabled: disabled,
          onClick: ev => theme.openURL(href, ev, routerDirection)
        }),
        core.h("slot", { name: "start" }),
        core.h(
          "div",
          { class: "item-inner" },
          core.h("div", { class: "input-wrapper" }, core.h("slot", null)),
          core.h("slot", { name: "end" }),
          showDetail &&
            core.h("ion-icon", {
              icon: detailIcon,
              lazy: false,
              class: "item-detail-icon"
            }),
          core.h("div", { class: "item-inner-highlight" })
        ),
        canActivate && mode === "md" && core.h("ion-ripple-effect", null)
      ),
      core.h("div", { class: "item-highlight" })
    );
  }
  get el() {
    return core.getElement(this);
  }
  static get style() {
    return ":host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--box-shadow:none;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:var(--ion-item-background-activated,currentColor);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;outline:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}:host(.ion-color) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .item-inner,:host(.ion-color) .item-native{border-color:var(--ion-color-shade)}:host(.ion-focused) .item-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.ion-focused) .item-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}@media (any-hover:hover){:host(.ion-activatable:hover) .item-native{background:var(--background-hover);color:var(--color-hover)}:host(.ion-color.ion-activatable:hover) .item-native{background:var(--ion-color-tint);color:var(--ion-color-contrast)}}:host(.activated) .item-native{background:var(--background-activated);color:var(--color-activated)}:host(.item-disabled),:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){opacity:.3}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}a,button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label){-ms-flex:1;flex:1}:host(.item-input),:host([vertical-align-top]){-ms-flex-align:start;align-items:flex-start}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-floating) .item-native,:host(.item-label-stacked) .item-native{-ms-flex-align:start;align-items:start}:host(.item-label-floating) .input-wrapper,:host(.item-label-stacked) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background)}.item-highlight{height:var(--full-highlight-height)}.item-inner-highlight{height:var(--inset-highlight-height)}:host(.item-interactive.ion-touched.ion-invalid),:host(.item-interactive.item-has-focus){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(.item-label-floating) ::slotted(ion-datetime),:host(.item-label-stacked) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host{--min-height:44px;--transition:background-color 200ms linear;--padding-start:16px;--inner-padding-end:8px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-activated:var(--ion-item-background-activated,var(--ion-color-step-150,#d9d9d9));--background-focused:var(--ion-item-background-focused,var(--ion-color-step-100,#e1e1e1));--background-hover:var(--ion-item-background-hover,rgba(var(--ion-text-color-rgb,0,0,0),0.04));--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));--color:var(--ion-item-color,var(--ion-text-color,#000));--highlight-height:0;--highlight-color-focused:var(--ion-color-primary,#3880ff);--highlight-color-valid:var(--ion-color-success,#10dc60);--highlight-color-invalid:var(--ion-color-danger,#f04141);font-size:17px}:host(.activated){--transition:none}:host(.ion-color.activated) .item-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}@media (any-hover:hover){:host(.activated.ion-activatable:hover) .item-native{background:var(--background-activated);color:var(--color-activated)}:host(.activated.ion-color.ion-activatable:hover) .item-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}}:host(.item-interactive){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0px 0px 0.55px 0px;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0px 0px 0.55px 0px;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0px;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0px;--show-inset-highlight:0}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:2px;margin-bottom:2px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:8px;margin-right:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:7px;margin-bottom:7px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(ion-toggle[slot=end]),::slotted(ion-toggle[slot=start]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-label-floating) ::slotted([slot=end]),:host(.item-label-stacked) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:0px;--padding-bottom:0px;--padding-start:.5em;--padding-end:.5em;height:24px;font-size:13px}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(ion-label){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.item-label-floating),:host(.item-label-stacked){--min-height:68px}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0px}";
  }
};

const List = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
    /**
     * If `true`, the list will have margin around it and rounded corners.
     */
    this.inset = false;
  }
  /**
   * If `ion-item-sliding` are used inside the list, this method closes
   * any open sliding item.
   *
   * Returns `true` if an actual `ion-item-sliding` is closed.
   */
  async closeSlidingItems() {
    const item = this.el.querySelector("ion-item-sliding");
    if (item && item.closeOpened) {
      return item.closeOpened();
    }
    return false;
  }
  render() {
    const mode = core.getIonMode(this);
    const { lines, inset } = this;
    return core.h(core.Host, {
      class: {
        [mode]: true,
        // Used internally for styling
        [`list-${mode}`]: true,
        "list-inset": inset,
        [`list-lines-${lines}`]: lines !== undefined,
        [`list-${mode}-lines-${lines}`]: lines !== undefined
      }
    });
  }
  get el() {
    return core.getElement(this);
  }
  static get style() {
    return "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-ios{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:32px;background:var(--ion-item-background,var(--ion-background-color,#fff))}.list-ios.list-inset{margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px;border-radius:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.list-ios.list-inset{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}.list-ios.list-inset ion-item{--border-width:0 0 1px 0;--inner-border-width:0}.list-ios.list-inset ion-item:last-child{--border-width:0;--inner-border-width:0}.list-ios.list-inset+ion-list.list-inset{margin-top:0}.list-ios-lines-none .item{--border-width:0;--inner-border-width:0}.list-ios-lines-full .item,.list-ios .item-lines-full{--border-width:0 0 0.55px 0}.list-ios-lines-full .item{--inner-border-width:0}.list-ios-lines-inset .item,.list-ios .item-lines-inset{--inner-border-width:0 0 0.55px 0}.list-ios .item-lines-inset{--border-width:0}.list-ios .item-lines-full{--inner-border-width:0}.list-ios .item-lines-none{--border-width:0;--inner-border-width:0}";
  }
};

const ListHeader = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
  }
  render() {
    const mode = core.getIonMode(this);
    return core.h(
      core.Host,
      {
        class: Object.assign({}, theme.createColorClasses(this.color), {
          [mode]: true
        })
      },
      core.h("slot", null)
    );
  }
  static get style() {
    return ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:transparent;--color:var(--ion-color-step-850,#262626);padding-left:calc(var(--ion-safe-area-left, 0px) + 16px);position:relative;font-size:12px;font-weight:500;letter-spacing:1px;text-transform:uppercase}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0px) + 16px);padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 16px)}}";
  }
};

const Radio = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
    this.inputId = `ion-rb-${radioButtonIds++}`;
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.inputId;
    /**
     * If `true`, the user cannot interact with the radio.
     */
    this.disabled = false;
    /**
     * If `true`, the radio is selected.
     */
    this.checked = false;
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.onClick = () => {
      if (this.checked) {
        this.ionDeselect.emit();
      } else {
        this.checked = true;
      }
    };
    this.ionRadioDidLoad = core.createEvent(this, "ionRadioDidLoad", 7);
    this.ionRadioDidUnload = core.createEvent(this, "ionRadioDidUnload", 7);
    this.ionStyle = core.createEvent(this, "ionStyle", 7);
    this.ionSelect = core.createEvent(this, "ionSelect", 7);
    this.ionDeselect = core.createEvent(this, "ionDeselect", 7);
    this.ionFocus = core.createEvent(this, "ionFocus", 7);
    this.ionBlur = core.createEvent(this, "ionBlur", 7);
  }
  colorChanged() {
    this.emitStyle();
  }
  checkedChanged(isChecked) {
    if (isChecked) {
      this.ionSelect.emit({
        checked: true,
        value: this.value
      });
    }
    this.emitStyle();
  }
  disabledChanged() {
    this.emitStyle();
  }
  componentWillLoad() {
    if (this.value === undefined) {
      this.value = this.inputId;
    }
    this.emitStyle();
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
    const { inputId, disabled, checked, color, el } = this;
    const mode = core.getIonMode(this);
    const labelId = inputId + "-lbl";
    const label = helpers.findItemLabel(el);
    if (label) {
      label.id = labelId;
    }
    return core.h(
      core.Host,
      {
        onClick: this.onClick,
        role: "radio",
        "aria-disabled": disabled ? "true" : null,
        "aria-checked": `${checked}`,
        "aria-labelledby": labelId,
        class: Object.assign({}, theme.createColorClasses(color), {
          [mode]: true,
          "in-item": theme.hostContext("ion-item", el),
          interactive: true,
          "radio-checked": checked,
          "radio-disabled": disabled
        })
      },
      core.h(
        "div",
        { class: "radio-icon" },
        core.h("div", { class: "radio-inner" })
      ),
      core.h("button", {
        type: "button",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        disabled: disabled
      })
    );
  }
  get el() {
    return core.getElement(this);
  }
  static get watchers() {
    return {
      color: ["colorChanged"],
      checked: ["checkedChanged"],
      disabled: ["disabledChanged"]
    };
  }
  static get style() {
    return ':host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-checked:var(--ion-color-primary,#3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:"";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:8px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}';
  }
};
let radioButtonIds = 0;

const RadioGroup = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
    this.inputId = `ion-rg-${radioGroupIds++}`;
    this.labelId = `${this.inputId}-lbl`;
    this.radios = [];
    /**
     * If `true`, the radios can be deselected.
     */
    this.allowEmptySelection = false;
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.inputId;
    this.ionChange = core.createEvent(this, "ionChange", 7);
  }
  valueChanged(value) {
    this.updateRadios();
    this.ionChange.emit({ value });
  }
  onRadioDidLoad(ev) {
    const radio = ev.target;
    radio.name = this.name;
    // add radio to internal list
    this.radios.push(radio);
    // this radio-group does not have a value
    // but this radio is checked, so let's set the
    // radio-group's value from the checked radio
    if (this.value == null && radio.checked) {
      this.value = radio.value;
    } else {
      this.updateRadios();
    }
  }
  onRadioDidUnload(ev) {
    const index = this.radios.indexOf(ev.target);
    if (index > -1) {
      this.radios.splice(index, 1);
    }
  }
  onRadioSelect(ev) {
    const selectedRadio = ev.target;
    if (selectedRadio) {
      this.value = selectedRadio.value;
    }
  }
  onRadioDeselect(ev) {
    if (this.allowEmptySelection) {
      const selectedRadio = ev.target;
      if (selectedRadio) {
        selectedRadio.checked = false;
        this.value = undefined;
      }
    }
  }
  componentDidLoad() {
    // Get the list header if it exists and set the id
    // this is used to set aria-labelledby
    let header = this.el.querySelector("ion-list-header");
    if (!header) {
      header = this.el.querySelector("ion-item-divider");
    }
    if (header) {
      const label = header.querySelector("ion-label");
      if (label) {
        this.labelId = label.id = this.name + "-lbl";
      }
    }
    this.updateRadios();
  }
  updateRadios() {
    const value = this.value;
    let hasChecked = false;
    for (const radio of this.radios) {
      if (!hasChecked && radio.value === value) {
        // correct value for this radio
        // but this radio isn't checked yet
        // and we haven't found a checked yet
        hasChecked = true;
        radio.checked = true;
      } else {
        // this radio doesn't have the correct value
        // or the radio group has been already checked
        radio.checked = false;
      }
    }
  }
  render() {
    return core.h(core.Host, {
      role: "radiogroup",
      "aria-labelledby": this.labelId,
      class: core.getIonMode(this)
    });
  }
  get el() {
    return core.getElement(this);
  }
  static get watchers() {
    return {
      value: ["valueChanged"]
    };
  }
};
let radioGroupIds = 0;

exports.ion_item = Item;
exports.ion_list = List;
exports.ion_list_header = ListHeader;
exports.ion_radio = Radio;
exports.ion_radio_group = RadioGroup;