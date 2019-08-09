import {
  r as registerInstance,
  e as getIonMode,
  h,
  H as Host,
  f as getElement
} from "./core-9991b89e.js";
import { c as createColorClasses } from "./theme-955ba954.js";
var Toolbar = /** @class */ (function() {
  function class_1(hostRef) {
    registerInstance(this, hostRef);
    this.childrenStyles = new Map();
  }
  class_1.prototype.componentWillLoad = function() {
    var buttons = Array.from(this.el.querySelectorAll("ion-buttons"));
    var firstButtons = buttons.find(function(button) {
      return button.slot === "start";
    });
    if (firstButtons) {
      firstButtons.classList.add("buttons-first-slot");
    }
    var buttonsReversed = buttons.reverse();
    var lastButtons =
      buttonsReversed.find(function(button) {
        return button.slot === "end";
      }) ||
      buttonsReversed.find(function(button) {
        return button.slot === "primary";
      }) ||
      buttonsReversed.find(function(button) {
        return button.slot === "secondary";
      });
    if (lastButtons) {
      lastButtons.classList.add("buttons-last-slot");
    }
  };
  class_1.prototype.childrenStyle = function(ev) {
    ev.stopPropagation();
    var tagName = ev.target.tagName;
    var updatedStyles = ev.detail;
    var newStyles = {};
    var childStyles = this.childrenStyles.get(tagName) || {};
    var hasStyleChange = false;
    Object.keys(updatedStyles).forEach(function(key) {
      var childKey = "toolbar-" + key;
      var newValue = updatedStyles[key];
      if (newValue !== childStyles[childKey]) {
        hasStyleChange = true;
      }
      if (newValue) {
        newStyles[childKey] = true;
      }
    });
    if (hasStyleChange) {
      this.childrenStyles.set(tagName, newStyles);
      this.el.forceUpdate();
    }
  };
  class_1.prototype.render = function() {
    var _a;
    var mode = getIonMode(this);
    var childStyles = {};
    this.childrenStyles.forEach(function(value) {
      Object.assign(childStyles, value);
    });
    return h(
      Host,
      {
        class: Object.assign(
          ((_a = {}), (_a[mode] = true), _a),
          childStyles,
          createColorClasses(this.color)
        )
      },
      h("div", { class: "toolbar-background" }),
      h(
        "div",
        { class: "toolbar-container" },
        h("slot", { name: "start" }),
        h("slot", { name: "secondary" }),
        h("div", { class: "toolbar-content" }, h("slot", null)),
        h("slot", { name: "primary" }),
        h("slot", { name: "end" })
      )
    );
  };
  Object.defineProperty(class_1.prototype, "el", {
    get: function() {
      return getElement(this);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(class_1, "style", {
    get: function() {
      return ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}";
    },
    enumerable: true,
    configurable: true
  });
  return class_1;
})();
export { Toolbar as ion_toolbar };