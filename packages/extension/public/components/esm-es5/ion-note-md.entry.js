import {
  r as registerInstance,
  e as getIonMode,
  h,
  H as Host
} from "./core-9991b89e.js";
import { c as createColorClasses } from "./theme-955ba954.js";
var Note = /** @class */ (function() {
  function class_1(hostRef) {
    registerInstance(this, hostRef);
  }
  class_1.prototype.render = function() {
    var _a;
    var mode = getIonMode(this);
    return h(
      Host,
      {
        class: Object.assign(
          {},
          createColorClasses(this.color),
          ((_a = {}), (_a[mode] = true), _a)
        )
      },
      h("slot", null)
    );
  };
  Object.defineProperty(class_1, "style", {
    get: function() {
      return ":host{color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600,#666);font-size:14px}";
    },
    enumerable: true,
    configurable: true
  });
  return class_1;
})();
export { Note as ion_note };