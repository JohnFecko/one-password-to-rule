import {
  r as s,
  e as t,
  h as o,
  c as e,
  H as n,
  f as _,
  l as a
} from "./p-57e9347d.js";
import { r as p } from "./p-18f3dc7c.js";
const r = class {
    constructor(t) {
      s(this, t);
    }
    componentDidLoad() {
      p(() => {
        const s = a(window, "hybrid");
        e.getBoolean("_testing") ||
          __sc_import_web_components("./p-201d849a.js").then(s =>
            s.startTapClick(e)
          ),
          e.getBoolean("statusTap", s) &&
            __sc_import_web_components("./p-174756b0.js").then(s =>
              s.startStatusTap()
            ),
          e.getBoolean("inputShims", c()) &&
            __sc_import_web_components("./p-6455a8e4.js").then(s =>
              s.startInputShims(e)
            ),
          e.getBoolean("hardwareBackButton", s) &&
            __sc_import_web_components("./p-fcf38822.js").then(s =>
              s.startHardwareBackButton()
            ),
          __sc_import_web_components("./p-30ddc1ea.js").then(s =>
            s.startFocusVisible()
          );
      });
    }
    render() {
      const s = t(this);
      return o(n, {
        class: {
          [s]: !0,
          "ion-page": !0,
          "force-statusbar-padding": e.getBoolean("_forceStatusbarPadding")
        }
      });
    }
    get el() {
      return _(this);
    }
    static get style() {
      return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
    }
  },
  c = () => a(window, "ios") && a(window, "mobile");
export { r as ion_app };
