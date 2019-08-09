import {
  r as registerInstance,
  d as createEvent,
  h,
  e as getIonMode,
  H as Host,
  f as getElement
} from "./core-9991b89e.js";
var SelectOption = /** @class */ (function() {
  function class_1(hostRef) {
    registerInstance(this, hostRef);
    this.inputId = "ion-selopt-" + selectOptionIds++;
    /**
     * If `true`, the user cannot interact with the select option.
     */
    this.disabled = false;
    /**
     * If `true`, the element is selected.
     */
    this.selected = false;
    this.ionSelectOptionDidLoad = createEvent(
      this,
      "ionSelectOptionDidLoad",
      7
    );
    this.ionSelectOptionDidUnload = createEvent(
      this,
      "ionSelectOptionDidUnload",
      7
    );
  }
  class_1.prototype.componentWillLoad = function() {
    if (this.value === undefined) {
      this.value = this.el.textContent || "";
    }
  };
  class_1.prototype.componentDidLoad = function() {
    this.ionSelectOptionDidLoad.emit();
  };
  class_1.prototype.componentDidUnload = function() {
    this.ionSelectOptionDidUnload.emit();
  };
  class_1.prototype.render = function() {
    return h(Host, {
      role: "option",
      id: this.inputId,
      class: getIonMode(this)
    });
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
      return ":host{display:none}";
    },
    enumerable: true,
    configurable: true
  });
  return class_1;
})();
var selectOptionIds = 0;
export { SelectOption as ion_select_option };
