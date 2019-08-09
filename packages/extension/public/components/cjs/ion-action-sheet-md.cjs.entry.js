"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const core = require("./core-be19e9c2.js");
const overlays = require("./overlays-b016047e.js");
const theme = require("./theme-b33a32a5.js");

/**
 * iOS Action Sheet Enter Animation
 */
const iosEnterAnimation = (AnimationC, baseEl) => {
  const baseAnimation = new AnimationC();
  const backdropAnimation = new AnimationC();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop"));
  const wrapperAnimation = new AnimationC();
  wrapperAnimation.addElement(baseEl.querySelector(".action-sheet-wrapper"));
  backdropAnimation.fromTo("opacity", 0.01, 0.4);
  wrapperAnimation.fromTo("translateY", "100%", "0%");
  const ani = baseAnimation
    .addElement(baseEl)
    .easing("cubic-bezier(.36,.66,.04,1)")
    .duration(400)
    .add(backdropAnimation)
    .add(wrapperAnimation);
  return Promise.resolve(ani);
};

/**
 * iOS Action Sheet Leave Animation
 */
const iosLeaveAnimation = (AnimationC, baseEl) => {
  const baseAnimation = new AnimationC();
  const backdropAnimation = new AnimationC();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop"));
  const wrapperAnimation = new AnimationC();
  wrapperAnimation.addElement(baseEl.querySelector(".action-sheet-wrapper"));
  backdropAnimation.fromTo("opacity", 0.4, 0);
  wrapperAnimation.fromTo("translateY", "0%", "100%");
  const ani = baseAnimation
    .addElement(baseEl)
    .easing("cubic-bezier(.36,.66,.04,1)")
    .duration(450)
    .add(backdropAnimation)
    .add(wrapperAnimation);
  return Promise.resolve(ani);
};

/**
 * MD Action Sheet Enter Animation
 */
const mdEnterAnimation = (AnimationC, baseEl) => {
  const baseAnimation = new AnimationC();
  const backdropAnimation = new AnimationC();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop"));
  const wrapperAnimation = new AnimationC();
  wrapperAnimation.addElement(baseEl.querySelector(".action-sheet-wrapper"));
  backdropAnimation.fromTo("opacity", 0.01, 0.32);
  wrapperAnimation.fromTo("translateY", "100%", "0%");
  const ani = baseAnimation
    .addElement(baseEl)
    .easing("cubic-bezier(.36,.66,.04,1)")
    .duration(400)
    .add(backdropAnimation)
    .add(wrapperAnimation);
  return Promise.resolve(ani);
};

/**
 * MD Action Sheet Leave Animation
 */
const mdLeaveAnimation = (AnimationC, baseEl) => {
  const baseAnimation = new AnimationC();
  const backdropAnimation = new AnimationC();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop"));
  const wrapperAnimation = new AnimationC();
  wrapperAnimation.addElement(baseEl.querySelector(".action-sheet-wrapper"));
  backdropAnimation.fromTo("opacity", 0.32, 0);
  wrapperAnimation.fromTo("translateY", "0%", "100%");
  const ani = baseAnimation
    .addElement(baseEl)
    .easing("cubic-bezier(.36,.66,.04,1)")
    .duration(450)
    .add(backdropAnimation)
    .add(wrapperAnimation);
  return Promise.resolve(ani);
};

const ActionSheet = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
    this.presented = false;
    this.mode = core.getIonMode(this);
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */
    this.keyboardClose = true;
    /**
     * An array of buttons for the action sheet.
     */
    this.buttons = [];
    /**
     * If `true`, the action sheet will be dismissed when the backdrop is clicked.
     */
    this.backdropDismiss = true;
    /**
     * If `true`, the action sheet will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */
    this.translucent = false;
    /**
     * If `true`, the action sheet will animate.
     */
    this.animated = true;
    this.onBackdropTap = () => {
      this.dismiss(undefined, overlays.BACKDROP);
    };
    this.dispatchCancelHandler = ev => {
      const role = ev.detail.role;
      if (overlays.isCancel(role)) {
        const cancelButton = this.getButtons().find(b => b.role === "cancel");
        this.callButtonHandler(cancelButton);
      }
    };
    this.didPresent = core.createEvent(this, "ionActionSheetDidPresent", 7);
    this.willPresent = core.createEvent(this, "ionActionSheetWillPresent", 7);
    this.willDismiss = core.createEvent(this, "ionActionSheetWillDismiss", 7);
    this.didDismiss = core.createEvent(this, "ionActionSheetDidDismiss", 7);
  }
  /**
   * Present the action sheet overlay after it has been created.
   */
  present() {
    return overlays.present(
      this,
      "actionSheetEnter",
      iosEnterAnimation,
      mdEnterAnimation
    );
  }
  /**
   * Dismiss the action sheet overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the action sheet.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the action sheet.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    return overlays.dismiss(
      this,
      data,
      role,
      "actionSheetLeave",
      iosLeaveAnimation,
      mdLeaveAnimation
    );
  }
  /**
   * Returns a promise that resolves when the action sheet did dismiss.
   */
  onDidDismiss() {
    return overlays.eventMethod(this.el, "ionActionSheetDidDismiss");
  }
  /**
   * Returns a promise that resolves when the action sheet will dismiss.
   *
   */
  onWillDismiss() {
    return overlays.eventMethod(this.el, "ionActionSheetWillDismiss");
  }
  async buttonClick(button) {
    const role = button.role;
    if (overlays.isCancel(role)) {
      return this.dismiss(undefined, role);
    }
    const shouldDismiss = await this.callButtonHandler(button);
    if (shouldDismiss) {
      return this.dismiss(undefined, button.role);
    }
    return Promise.resolve();
  }
  async callButtonHandler(button) {
    if (button) {
      // a handler has been provided, execute it
      // pass the handler the values from the inputs
      const rtn = await overlays.safeCall(button.handler);
      if (rtn === false) {
        // if the return value of the handler is false then do not dismiss
        return false;
      }
    }
    return true;
  }
  getButtons() {
    return this.buttons.map(b => {
      return typeof b === "string" ? { text: b } : b;
    });
  }
  render() {
    const mode = core.getIonMode(this);
    const allButtons = this.getButtons();
    const cancelButton = allButtons.find(b => b.role === "cancel");
    const buttons = allButtons.filter(b => b.role !== "cancel");
    return core.h(
      core.Host,
      {
        role: "dialog",
        "aria-modal": "true",
        style: {
          zIndex: `${20000 + this.overlayIndex}`
        },
        class: Object.assign(
          { [mode]: true },
          theme.getClassMap(this.cssClass),
          { "action-sheet-translucent": this.translucent }
        ),
        onIonActionSheetWillDismiss: this.dispatchCancelHandler,
        onIonBackdropTap: this.onBackdropTap
      },
      core.h("ion-backdrop", { tappable: this.backdropDismiss }),
      core.h(
        "div",
        { class: "action-sheet-wrapper", role: "dialog" },
        core.h(
          "div",
          { class: "action-sheet-container" },
          core.h(
            "div",
            { class: "action-sheet-group" },
            this.header !== undefined &&
              core.h(
                "div",
                { class: "action-sheet-title" },
                this.header,
                this.subHeader &&
                  core.h(
                    "div",
                    { class: "action-sheet-sub-title" },
                    this.subHeader
                  )
              ),
            buttons.map(b =>
              core.h(
                "button",
                {
                  type: "button",
                  "ion-activatable": true,
                  class: buttonClass(b),
                  onClick: () => this.buttonClick(b)
                },
                core.h(
                  "span",
                  { class: "action-sheet-button-inner" },
                  b.icon &&
                    core.h("ion-icon", {
                      icon: b.icon,
                      lazy: false,
                      class: "action-sheet-icon"
                    }),
                  b.text
                ),
                mode === "md" && core.h("ion-ripple-effect", null)
              )
            )
          ),
          cancelButton &&
            core.h(
              "div",
              { class: "action-sheet-group action-sheet-group-cancel" },
              core.h(
                "button",
                {
                  type: "button",
                  class: buttonClass(cancelButton),
                  onClick: () => this.buttonClick(cancelButton)
                },
                core.h(
                  "span",
                  { class: "action-sheet-button-inner" },
                  cancelButton.icon &&
                    core.h("ion-icon", {
                      icon: cancelButton.icon,
                      lazy: false,
                      class: "action-sheet-icon"
                    }),
                  cancelButton.text
                )
              )
            )
        )
      )
    );
  }
  get el() {
    return core.getElement(this);
  }
  static get style() {
    return ".sc-ion-action-sheet-md-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-md{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-selected.sc-ion-action-sheet-md{background:var(--background-selected)}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color,var(--ion-background-color,#fff));--background-selected:var(--background,);--background-activated:var(--background)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;height:60px;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:16px;text-align:start}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;background:transparent;color:var(--color,var(--ion-color-step-850,#262626));font-size:16px;text-align:start;contain:strict;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:700}";
  }
};
const buttonClass = button => {
  return Object.assign(
    {
      "action-sheet-button": true,
      "ion-activatable": true,
      [`action-sheet-${button.role}`]: button.role !== undefined
    },
    theme.getClassMap(button.cssClass)
  );
};

exports.ion_action_sheet = ActionSheet;
