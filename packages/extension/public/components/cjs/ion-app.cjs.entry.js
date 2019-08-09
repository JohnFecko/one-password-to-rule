"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const core = require("./core-be19e9c2.js");
const helpers = require("./helpers-d1479b7a.js");

const App = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    helpers.rIC(() => {
      const isHybrid = core.isPlatform(window, "hybrid");
      if (!core.config.getBoolean("_testing")) {
        new Promise(function(resolve) {
          resolve(require("./tap-click-b4d16906.js"));
        }).then(module => module.startTapClick(core.config));
      }
      if (core.config.getBoolean("statusTap", isHybrid)) {
        new Promise(function(resolve) {
          resolve(require("./status-tap-7cbcbd26.js"));
        }).then(module => module.startStatusTap());
      }
      if (core.config.getBoolean("inputShims", needInputShims())) {
        new Promise(function(resolve) {
          resolve(require("./input-shims-c372fee4.js"));
        }).then(module => module.startInputShims(core.config));
      }
      if (core.config.getBoolean("hardwareBackButton", isHybrid)) {
        new Promise(function(resolve) {
          resolve(require("./hardware-back-button-de3d25be.js"));
        }).then(module => module.startHardwareBackButton());
      }
      new Promise(function(resolve) {
        resolve(require("./focus-visible-7d421f9b.js"));
      }).then(module => module.startFocusVisible());
    });
  }
  render() {
    const mode = core.getIonMode(this);
    return core.h(core.Host, {
      class: {
        [mode]: true,
        "ion-page": true,
        "force-statusbar-padding": core.config.getBoolean(
          "_forceStatusbarPadding"
        )
      }
    });
  }
  get el() {
    return core.getElement(this);
  }
  static get style() {
    return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
  }
};
const needInputShims = () => {
  return core.isPlatform(window, "ios") && core.isPlatform(window, "mobile");
};

exports.ion_app = App;
