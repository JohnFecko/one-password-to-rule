import {
  r as registerInstance,
  d as createEvent,
  h,
  e as getIonMode,
  H as Host,
  f as getElement
} from "./core-9991b89e.js";

const SelectOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputId = `ion-selopt-${selectOptionIds++}`;
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
  componentWillLoad() {
    if (this.value === undefined) {
      this.value = this.el.textContent || "";
    }
  }
  componentDidLoad() {
    this.ionSelectOptionDidLoad.emit();
  }
  componentDidUnload() {
    this.ionSelectOptionDidUnload.emit();
  }
  render() {
    return h(Host, {
      role: "option",
      id: this.inputId,
      class: getIonMode(this)
    });
  }
  get el() {
    return getElement(this);
  }
  static get style() {
    return ":host{display:none}";
  }
};
let selectOptionIds = 0;

export { SelectOption as ion_select_option };
