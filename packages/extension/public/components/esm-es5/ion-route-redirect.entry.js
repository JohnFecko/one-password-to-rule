import { r as registerInstance, d as createEvent } from "./core-9991b89e.js";
var RouteRedirect = /** @class */ (function() {
  function class_1(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteRedirectChanged = createEvent(
      this,
      "ionRouteRedirectChanged",
      7
    );
  }
  class_1.prototype.propDidChange = function() {
    this.ionRouteRedirectChanged.emit();
  };
  class_1.prototype.componentDidLoad = function() {
    this.ionRouteRedirectChanged.emit();
  };
  class_1.prototype.componentDidUnload = function() {
    this.ionRouteRedirectChanged.emit();
  };
  Object.defineProperty(class_1, "watchers", {
    get: function() {
      return {
        from: ["propDidChange"],
        to: ["propDidChange"]
      };
    },
    enumerable: true,
    configurable: true
  });
  return class_1;
})();
export { RouteRedirect as ion_route_redirect };
