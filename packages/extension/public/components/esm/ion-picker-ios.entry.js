import {
  r as registerInstance,
  e as getIonMode,
  d as createEvent,
  h,
  H as Host,
  f as getElement
} from "./core-9991b89e.js";
import {
  p as present,
  a as dismiss,
  e as eventMethod,
  s as safeCall
} from "./overlays-6ba59a1a.js";
import { g as getClassMap } from "./theme-955ba954.js";

/**
 * iOS Picker Enter Animation
 */
const iosEnterAnimation = (AnimationC, baseEl) => {
  const baseAnimation = new AnimationC();
  const backdropAnimation = new AnimationC();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop"));
  const wrapperAnimation = new AnimationC();
  wrapperAnimation.addElement(baseEl.querySelector(".picker-wrapper"));
  backdropAnimation.fromTo("opacity", 0.01, 0.26);
  wrapperAnimation.fromTo("translateY", "100%", "0%");
  return Promise.resolve(
    baseAnimation
      .addElement(baseEl)
      .easing("cubic-bezier(.36,.66,.04,1)")
      .duration(400)
      .add(backdropAnimation)
      .add(wrapperAnimation)
  );
};

/**
 * iOS Picker Leave Animation
 */
const iosLeaveAnimation = (AnimationC, baseEl) => {
  const baseAnimation = new AnimationC();
  const backdropAnimation = new AnimationC();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop"));
  const wrapperAnimation = new AnimationC();
  wrapperAnimation.addElement(baseEl.querySelector(".picker-wrapper"));
  backdropAnimation.fromTo("opacity", 0.26, 0.01);
  wrapperAnimation.fromTo("translateY", "0%", "100%");
  return Promise.resolve(
    baseAnimation
      .addElement(baseEl)
      .easing("cubic-bezier(.36,.66,.04,1)")
      .duration(400)
      .add(backdropAnimation)
      .add(wrapperAnimation)
  );
};

const Picker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mode = getIonMode(this);
    this.presented = false;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */
    this.keyboardClose = true;
    /**
     * Array of buttons to be displayed at the top of the picker.
     */
    this.buttons = [];
    /**
     * Array of columns to be displayed in the picker.
     */
    this.columns = [];
    /**
     * Number of milliseconds to wait before dismissing the picker.
     */
    this.duration = 0;
    /**
     * If `true`, a backdrop will be displayed behind the picker.
     */
    this.showBackdrop = true;
    /**
     * If `true`, the picker will be dismissed when the backdrop is clicked.
     */
    this.backdropDismiss = true;
    /**
     * If `true`, the picker will animate.
     */
    this.animated = true;
    this.onBackdropTap = () => {
      const cancelBtn = this.buttons.find(b => b.role === "cancel");
      if (cancelBtn) {
        this.buttonClick(cancelBtn);
      } else {
        this.dismiss();
      }
    };
    this.didPresent = createEvent(this, "ionPickerDidPresent", 7);
    this.willPresent = createEvent(this, "ionPickerWillPresent", 7);
    this.willDismiss = createEvent(this, "ionPickerWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionPickerDidDismiss", 7);
  }
  /**
   * Present the picker overlay after it has been created.
   */
  async present() {
    await present(
      this,
      "pickerEnter",
      iosEnterAnimation,
      iosEnterAnimation,
      undefined
    );
    if (this.duration > 0) {
      this.durationTimeout = setTimeout(() => this.dismiss(), this.duration);
    }
  }
  /**
   * Dismiss the picker overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the picker.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the picker.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    if (this.durationTimeout) {
      clearTimeout(this.durationTimeout);
    }
    return dismiss(
      this,
      data,
      role,
      "pickerLeave",
      iosLeaveAnimation,
      iosLeaveAnimation
    );
  }
  /**
   * Returns a promise that resolves when the picker did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionPickerDidDismiss");
  }
  /**
   * Returns a promise that resolves when the picker will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionPickerWillDismiss");
  }
  /**
   * Get the column that matches the specified name.
   *
   * @param name The name of the column.
   */
  getColumn(name) {
    return Promise.resolve(this.columns.find(column => column.name === name));
  }
  buttonClick(button) {
    // if (this.disabled) {
    //   return;
    // }
    // keep the time of the most recent button click
    // a handler has been provided, execute it
    // pass the handler the values from the inputs
    const shouldDismiss =
      safeCall(button.handler, this.getSelected()) !== false;
    if (shouldDismiss) {
      return this.dismiss();
    }
    return Promise.resolve(false);
  }
  getSelected() {
    const selected = {};
    this.columns.forEach((col, index) => {
      const selectedColumn =
        col.selectedIndex !== undefined
          ? col.options[col.selectedIndex]
          : undefined;
      selected[col.name] = {
        text: selectedColumn ? selectedColumn.text : undefined,
        value: selectedColumn ? selectedColumn.value : undefined,
        columnIndex: index
      };
    });
    return selected;
  }
  render() {
    const mode = getIonMode(this);
    return h(
      Host,
      {
        "aria-modal": "true",
        class: Object.assign(
          {
            [mode]: true,
            // Used internally for styling
            [`picker-${mode}`]: true
          },
          getClassMap(this.cssClass)
        ),
        style: {
          zIndex: `${20000 + this.overlayIndex}`
        },
        onIonBackdropTap: this.onBackdropTap
      },
      h("ion-backdrop", {
        visible: this.showBackdrop,
        tappable: this.backdropDismiss
      }),
      h(
        "div",
        { class: "picker-wrapper", role: "dialog" },
        h(
          "div",
          { class: "picker-toolbar" },
          this.buttons.map(b =>
            h(
              "div",
              { class: buttonWrapperClass(b) },
              h(
                "button",
                {
                  type: "button",
                  onClick: () => this.buttonClick(b),
                  class: buttonClass(b)
                },
                b.text
              )
            )
          )
        ),
        h(
          "div",
          { class: "picker-columns" },
          h("div", { class: "picker-above-highlight" }),
          this.presented &&
            this.columns.map(c => h("ion-picker-column", { col: c })),
          h("div", { class: "picker-below-highlight" })
        )
      )
    );
  }
  get el() {
    return getElement(this);
  }
  static get style() {
    return ".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}[dir=rtl].sc-ion-picker-ios-h, [dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-wrapper.sc-ion-picker-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active, .picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios, .picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color,#fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));--height:260px;color:var(--ion-item-color,var(--ion-text-color,#000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:400;text-align:start}.picker-button.sc-ion-picker-ios, .picker-button.activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1em;padding-right:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-button.sc-ion-picker-ios, .picker-button.activated.sc-ion-picker-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em}}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{left:0;top:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--background,var(--ion-background-color,#fff))),to(rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(180deg,var(--background,var(--ion-background-color,#fff)) 20%,rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8));z-index:10}[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios, [dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios, [dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-ios{left:0;top:115px;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--background,var(--ion-background-color,#fff))),to(rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(0deg,var(--background,var(--ion-background-color,#fff)) 30%,rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8));z-index:11}[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios, [dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios, [dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}";
  }
};
const buttonWrapperClass = button => {
  return {
    [`picker-toolbar-${button.role}`]: button.role !== undefined,
    "picker-toolbar-button": true
  };
};
const buttonClass = button => {
  return Object.assign(
    { "picker-button": true, "ion-activatable": true },
    getClassMap(button.cssClass)
  );
};

export { Picker as ion_picker };
