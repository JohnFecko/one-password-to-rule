"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const core = require("./core-be19e9c2.js");
const overlays = require("./overlays-b016047e.js");
const helpers = require("./helpers-d1479b7a.js");
const theme = require("./theme-b33a32a5.js");

const Select = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
    this.childOpts = [];
    this.inputId = `ion-sel-${selectIds++}`;
    this.didInit = false;
    this.isExpanded = false;
    /**
     * If `true`, the user cannot interact with the select.
     */
    this.disabled = false;
    /**
     * The text to display on the cancel button.
     */
    this.cancelText = "Cancel";
    /**
     * The text to display on the ok button.
     */
    this.okText = "OK";
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.inputId;
    /**
     * If `true`, the select can accept multiple values.
     */
    this.multiple = false;
    /**
     * The interface the select should use: `action-sheet`, `popover` or `alert`.
     */
    this.interface = "alert";
    /**
     * Any additional options that the `alert`, `action-sheet` or `popover` interface
     * can take. See the [AlertController API docs](../../alert/AlertController/#create), the
     * [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
     * [PopoverController API docs](../../popover/PopoverController/#create) for the
     * create options for each interface.
     */
    this.interfaceOptions = {};
    this.onClick = ev => {
      this.setFocus();
      this.open(ev);
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.ionChange = core.createEvent(this, "ionChange", 7);
    this.ionCancel = core.createEvent(this, "ionCancel", 7);
    this.ionFocus = core.createEvent(this, "ionFocus", 7);
    this.ionBlur = core.createEvent(this, "ionBlur", 7);
    this.ionStyle = core.createEvent(this, "ionStyle", 7);
  }
  disabledChanged() {
    this.emitStyle();
  }
  valueChanged() {
    if (this.didInit) {
      this.updateOptions();
      this.ionChange.emit({
        value: this.value
      });
      this.emitStyle();
    }
  }
  async selectOptionChanged() {
    await this.loadOptions();
    if (this.didInit) {
      this.updateOptions();
      this.updateOverlayOptions();
      this.emitStyle();
      /**
       * In the event that options
       * are not loaded at component load
       * this ensures that any value that is
       * set is properly rendered once
       * options have been loaded
       */
      if (this.value !== undefined) {
        this.el.forceUpdate();
      }
    }
  }
  async componentDidLoad() {
    await this.loadOptions();
    if (this.value === undefined) {
      if (this.multiple) {
        // there are no values set at this point
        // so check to see who should be selected
        const checked = this.childOpts.filter(o => o.selected);
        this.value = checked.map(o => o.value);
      } else {
        const checked = this.childOpts.find(o => o.selected);
        if (checked) {
          this.value = checked.value;
        }
      }
    }
    this.updateOptions();
    this.emitStyle();
    this.el.forceUpdate();
    this.didInit = true;
  }
  /**
   * Open the select overlay. The overlay is either an alert, action sheet, or popover,
   * depending on the `interface` property on the `ion-select`.
   *
   * @param event The user interface event that called the open.
   */
  async open(event) {
    if (this.disabled || this.isExpanded) {
      return undefined;
    }
    const overlay = (this.overlay = await this.createOverlay(event));
    this.isExpanded = true;
    overlay.onDidDismiss().then(() => {
      this.overlay = undefined;
      this.isExpanded = false;
      this.setFocus();
    });
    await overlay.present();
    return overlay;
  }
  createOverlay(ev) {
    let selectInterface = this.interface;
    if (
      (selectInterface === "action-sheet" || selectInterface === "popover") &&
      this.multiple
    ) {
      console.warn(
        `Select interface cannot be "${selectInterface}" with a multi-value select. Using the "alert" interface instead.`
      );
      selectInterface = "alert";
    }
    if (selectInterface === "popover" && !ev) {
      console.warn(
        'Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'
      );
      selectInterface = "alert";
    }
    if (selectInterface === "popover") {
      return this.openPopover(ev);
    }
    if (selectInterface === "action-sheet") {
      return this.openActionSheet();
    }
    return this.openAlert();
  }
  updateOverlayOptions() {
    if (!this.overlay) {
      return;
    }
    const overlay = this.overlay;
    switch (this.interface) {
      case "action-sheet":
        overlay.buttons = this.createActionSheetButtons(this.childOpts);
        break;
      case "popover":
        const popover = overlay.querySelector("ion-select-popover");
        if (popover) {
          popover.options = this.createPopoverOptions(this.childOpts);
        }
        break;
      default:
        const inputType = this.multiple ? "checkbox" : "radio";
        overlay.inputs = this.createAlertInputs(this.childOpts, inputType);
        break;
    }
  }
  createActionSheetButtons(data) {
    const actionSheetButtons = data.map(option => {
      return {
        role: option.selected ? "selected" : "",
        text: option.textContent,
        handler: () => {
          this.value = option.value;
        }
      };
    });
    // Add "cancel" button
    actionSheetButtons.push({
      text: this.cancelText,
      role: "cancel",
      handler: () => {
        this.ionCancel.emit();
      }
    });
    return actionSheetButtons;
  }
  createAlertInputs(data, inputType) {
    return data.map(o => {
      return {
        type: inputType,
        label: o.textContent,
        value: o.value,
        checked: o.selected,
        disabled: o.disabled
      };
    });
  }
  createPopoverOptions(data) {
    return data.map(o => {
      return {
        text: o.textContent,
        value: o.value,
        checked: o.selected,
        disabled: o.disabled,
        handler: () => {
          this.value = o.value;
          this.close();
        }
      };
    });
  }
  async openPopover(ev) {
    const interfaceOptions = this.interfaceOptions;
    const mode = core.getIonMode(this);
    const popoverOpts = Object.assign({ mode }, interfaceOptions, {
      component: "ion-select-popover",
      cssClass: ["select-popover", interfaceOptions.cssClass],
      event: ev,
      componentProps: {
        header: interfaceOptions.header,
        subHeader: interfaceOptions.subHeader,
        message: interfaceOptions.message,
        value: this.value,
        options: this.createPopoverOptions(this.childOpts)
      }
    });
    return overlays.popoverController.create(popoverOpts);
  }
  async openActionSheet() {
    const mode = core.getIonMode(this);
    const interfaceOptions = this.interfaceOptions;
    const actionSheetOpts = Object.assign({ mode }, interfaceOptions, {
      buttons: this.createActionSheetButtons(this.childOpts),
      cssClass: ["select-action-sheet", interfaceOptions.cssClass]
    });
    return overlays.actionSheetController.create(actionSheetOpts);
  }
  async openAlert() {
    const label = this.getLabel();
    const labelText = label ? label.textContent : null;
    const interfaceOptions = this.interfaceOptions;
    const inputType = this.multiple ? "checkbox" : "radio";
    const mode = core.getIonMode(this);
    const alertOpts = Object.assign({ mode }, interfaceOptions, {
      header: interfaceOptions.header ? interfaceOptions.header : labelText,
      inputs: this.createAlertInputs(this.childOpts, inputType),
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
          handler: selectedValues => {
            this.value = selectedValues;
          }
        }
      ],
      cssClass: [
        "select-alert",
        interfaceOptions.cssClass,
        this.multiple ? "multiple-select-alert" : "single-select-alert"
      ]
    });
    return overlays.alertController.create(alertOpts);
  }
  /**
   * Close the select interface.
   */
  close() {
    // TODO check !this.overlay || !this.isFocus()
    if (!this.overlay) {
      return Promise.resolve(false);
    }
    return this.overlay.dismiss();
  }
  async loadOptions() {
    this.childOpts = await Promise.all(
      Array.from(this.el.querySelectorAll("ion-select-option")).map(o =>
        o.componentOnReady()
      )
    );
  }
  updateOptions() {
    // iterate all options, updating the selected prop
    let canSelect = true;
    for (const selectOption of this.childOpts) {
      const selected =
        canSelect &&
        isOptionSelected(this.value, selectOption.value, this.compareWith);
      selectOption.selected = selected;
      // if current option is selected and select is single-option, we can't select
      // any option more
      if (selected && !this.multiple) {
        canSelect = false;
      }
    }
  }
  getLabel() {
    return helpers.findItemLabel(this.el);
  }
  hasValue() {
    return this.getText() !== "";
  }
  getText() {
    const selectedText = this.selectedText;
    if (selectedText != null && selectedText !== "") {
      return selectedText;
    }
    return generateText(this.childOpts, this.value, this.compareWith);
  }
  setFocus() {
    if (this.buttonEl) {
      this.buttonEl.focus();
    }
  }
  emitStyle() {
    this.ionStyle.emit({
      interactive: true,
      select: true,
      "has-placeholder": this.placeholder != null,
      "has-value": this.hasValue(),
      "interactive-disabled": this.disabled,
      "select-disabled": this.disabled
    });
  }
  render() {
    const { placeholder, name, disabled, isExpanded, value, el } = this;
    const mode = core.getIonMode(this);
    const labelId = this.inputId + "-lbl";
    const label = helpers.findItemLabel(el);
    if (label) {
      label.id = labelId;
    }
    let addPlaceholderClass = false;
    let selectText = this.getText();
    if (selectText === "" && placeholder != null) {
      selectText = placeholder;
      addPlaceholderClass = true;
    }
    helpers.renderHiddenInput(true, el, name, parseValue(value), disabled);
    const selectTextClasses = {
      "select-text": true,
      "select-placeholder": addPlaceholderClass
    };
    return core.h(
      core.Host,
      {
        onClick: this.onClick,
        role: "combobox",
        "aria-haspopup": "dialog",
        "aria-disabled": disabled ? "true" : null,
        "aria-expanded": `${isExpanded}`,
        "aria-labelledby": labelId,
        class: {
          [mode]: true,
          "in-item": theme.hostContext("ion-item", el),
          "select-disabled": disabled
        }
      },
      core.h("div", { class: selectTextClasses }, selectText),
      core.h(
        "div",
        { class: "select-icon", role: "presentation" },
        core.h("div", { class: "select-icon-inner" })
      ),
      core.h("button", {
        type: "button",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        disabled: disabled,
        ref: btnEl => (this.buttonEl = btnEl)
      })
    );
  }
  get el() {
    return core.getElement(this);
  }
  static get watchers() {
    return {
      disabled: ["disabledChanged"],
      value: ["valueChanged"]
    };
  }
  static get style() {
    return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}.select-icon{width:12px;height:18px}";
  }
};
const parseValue = value => {
  if (value == null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value.join(",");
  }
  return value.toString();
};
const isOptionSelected = (currentValue, compareValue, compareWith) => {
  if (currentValue === undefined) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some(val =>
      compareOptions(val, compareValue, compareWith)
    );
  } else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
};
const compareOptions = (currentValue, compareValue, compareWith) => {
  if (typeof compareWith === "function") {
    return compareWith(currentValue, compareValue);
  } else if (typeof compareWith === "string") {
    return currentValue[compareWith] === compareValue[compareWith];
  } else {
    return currentValue === compareValue;
  }
};
const generateText = (opts, value, compareWith) => {
  if (value === undefined) {
    return "";
  }
  if (Array.isArray(value)) {
    return value
      .map(v => textForValue(opts, v, compareWith))
      .filter(opt => opt !== null)
      .join(", ");
  } else {
    return textForValue(opts, value, compareWith) || "";
  }
};
const textForValue = (opts, value, compareWith) => {
  const selectOpt = opts.find(opt => {
    return compareOptions(opt.value, value, compareWith);
  });
  return selectOpt ? selectOpt.textContent : null;
};
let selectIds = 0;

exports.ion_select = Select;