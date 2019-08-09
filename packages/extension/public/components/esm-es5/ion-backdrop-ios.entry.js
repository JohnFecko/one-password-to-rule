import {
  r as registerInstance,
  d as createEvent,
  e as getIonMode,
  h,
  H as Host
} from "./core-9991b89e.js";
import { n as now } from "./helpers-18f3dc7c.js";
import { GESTURE_CONTROLLER } from "./index-058b6541.js";
var Backdrop = /** @class */ (function() {
  function class_1(hostRef) {
    registerInstance(this, hostRef);
    this.lastClick = -10000;
    this.blocker = GESTURE_CONTROLLER.createBlocker({
      disableScroll: true
    });
    /**
     * If `true`, the backdrop will be visible.
     */
    this.visible = true;
    /**
     * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
     */
    this.tappable = true;
    /**
     * If `true`, the backdrop will stop propagation on tap.
     */
    this.stopPropagation = true;
    this.ionBackdropTap = createEvent(this, "ionBackdropTap", 7);
  }
  class_1.prototype.componentDidLoad = function() {
    if (this.stopPropagation) {
      this.blocker.block();
    }
  };
  class_1.prototype.componentDidUnload = function() {
    this.blocker.destroy();
  };
  class_1.prototype.onTouchStart = function(ev) {
    this.lastClick = now(ev);
    this.emitTap(ev);
  };
  class_1.prototype.onMouseDown = function(ev) {
    if (this.lastClick < now(ev) - 2500) {
      this.emitTap(ev);
    }
  };
  class_1.prototype.emitTap = function(ev) {
    if (this.stopPropagation) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    if (this.tappable) {
      this.ionBackdropTap.emit();
    }
  };
  class_1.prototype.render = function() {
    var _a;
    var mode = getIonMode(this);
    return h(Host, {
      tabindex: "-1",
      class:
        ((_a = {}),
        (_a[mode] = true),
        (_a["backdrop-hide"] = !this.visible),
        (_a["backdrop-no-tappable"] = !this.tappable),
        _a)
    });
  };
  Object.defineProperty(class_1, "style", {
    get: function() {
      return ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}";
    },
    enumerable: true,
    configurable: true
  });
  return class_1;
})();
export { Backdrop as ion_backdrop };
