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

const App = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    rIC(() => {
      const isHybrid = isPlatform(window, "hybrid");
      if (!config.getBoolean("_testing")) {
        import("./tap-click-201d849a.js").then(module =>
          module.startTapClick(config)
        );
      }
      if (config.getBoolean("statusTap", isHybrid)) {
        import("./status-tap-a872a0e7.js").then(module =>
          module.startStatusTap()
        );
      }
      if (config.getBoolean("inputShims", needInputShims())) {
        import("./input-shims-6455a8e4.js").then(module =>
          module.startInputShims(config)
        );
      }
      if (config.getBoolean("hardwareBackButton", isHybrid)) {
        import("./hardware-back-button-fcf38822.js").then(module =>
          module.startHardwareBackButton()
        );
      }
      import("./focus-visible-30ddc1ea.js").then(module =>
        module.startFocusVisible()
      );
    });
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      class: {
        [mode]: true,
        "ion-page": true,
        "force-statusbar-padding": config.getBoolean("_forceStatusbarPadding")
      }
    });
  }
  get el() {
    return getElement(this);
  }
  static get style() {
    return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
  }
};
const needInputShims = () => {
  return isPlatform(window, "ios") && isPlatform(window, "mobile");
};

export { App as ion_app };
