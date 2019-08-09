import {
  r as registerInstance,
  h,
  f as getElement,
  H as Host
} from "./core-9991b89e.js";
var NavPush = /** @class */ (function() {
  function class_1(hostRef) {
    var _this = this;
    registerInstance(this, hostRef);
    this.push = function() {
      var nav = _this.el.closest("ion-nav");
      var toPush = _this.component;
      if (nav && toPush !== undefined) {
        nav.push(toPush, _this.componentProps, { skipIfBusy: true });
      }
    };
  }
  class_1.prototype.render = function() {
    return h(Host, { onClick: this.push });
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
export { NavPush as ion_nav_push };
