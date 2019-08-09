import {
  r as registerInstance,
  h,
  f as getElement,
  H as Host
} from "./core-9991b89e.js";
var NavPop = /** @class */ (function() {
  function class_1(hostRef) {
    var _this = this;
    registerInstance(this, hostRef);
    this.pop = function() {
      var nav = _this.el.closest("ion-nav");
      if (nav) {
        nav.pop({ skipIfBusy: true });
      }
    };
  }
  class_1.prototype.render = function() {
    return h(Host, { onClick: this.pop });
  };
  Object.defineProperty(class_1.prototype, "el", {
    get: function() {
      return getElement(this);
    },
    enumerable: true,
    configurable: true
  });
  return class_1;
})();
export { NavPop as ion_nav_pop };
