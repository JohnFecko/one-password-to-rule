import {
  r as registerInstance,
  h,
  f as getElement,
  H as Host
} from "./core-9991b89e.js";

const NavPop = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pop = () => {
      const nav = this.el.closest("ion-nav");
      if (nav) {
        nav.pop({ skipIfBusy: true });
      }
    };
  }
  render() {
    return h(Host, { onClick: this.pop });
  }
  get el() {
    return getElement(this);
  }
};

export { NavPop as ion_nav_pop };
