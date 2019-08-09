import {
  r as registerInstance,
  e as getIonMode,
  h,
  c as config,
  H as Host,
  f as getElement,
  l as isPlatform
} from "./core-9991b89e.js";
import { r as rIC } from "./helpers-18f3dc7c.js";
var App = /** @class */ (function() {
  function class_1(hostRef) {
    registerInstance(this, hostRef);
  }
  class_1.prototype.componentDidLoad = function() {
    rIC(function() {
      var isHybrid = isPlatform(window, "hybrid");
      if (!config.getBoolean("_testing")) {
        import("./tap-click-201d849a.js").then(function(module) {
          return module.startTapClick(config);
        });
      }
      if (config.getBoolean("statusTap", isHybrid)) {
        import("./status-tap-a872a0e7.js").then(function(module) {
          return module.startStatusTap();
        });
      }
      if (config.getBoolean("inputShims", needInputShims())) {
        import("./input-shims-6455a8e4.js").then(function(module) {
          return module.startInputShims(config);
        });
      }
      if (config.getBoolean("hardwareBackButton", isHybrid)) {
        import("./hardware-back-button-fcf38822.js").then(function(module) {
          return module.startHardwareBackButton();
        });
      }
      import("./focus-visible-30ddc1ea.js").then(function(module) {
        return module.startFocusVisible();
      });
    });
  };
  class_1.prototype.render = function() {
    var _a;
    var mode = getIonMode(this);
    return h(Host, {
      class:
        ((_a = {}),
        (_a[mode] = true),
        (_a["ion-page"] = true),
        (_a["force-statusbar-padding"] = config.getBoolean(
          "_forceStatusbarPadding"
        )),
        _a)
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
      return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
    },
    enumerable: true,
    configurable: true
  });
  return class_1;
})();
var needInputShims = function() {
  return isPlatform(window, "ios") && isPlatform(window, "mobile");
};
export { App as ion_app };
