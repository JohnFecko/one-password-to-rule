import {
  r as registerInstance,
  e as getIonMode,
  h,
  H as Host
} from "./core-9991b89e.js";
var ItemGroup = /** @class */ (function() {
  function class_1(hostRef) {
    registerInstance(this, hostRef);
  }
  class_1.prototype.render = function() {
    var _a;
    var mode = getIonMode(this);
    return h(Host, {
      role: "group",
      class:
        ((_a = {}),
        (_a[mode] = true),
        // Used internally for styling
        (_a["item-group-" + mode] = true),
        (_a["item"] = true),
        _a)
    });
  };
  Object.defineProperty(class_1, "style", {
    get: function() {
      return "ion-item-group{display:block}.item-group-md ion-item-sliding:last-child ion-item,.item-group-md ion-item:last-child{--border-width:0}";
    },
    enumerable: true,
    configurable: true
  });
  return class_1;
})();
export { ItemGroup as ion_item_group };
