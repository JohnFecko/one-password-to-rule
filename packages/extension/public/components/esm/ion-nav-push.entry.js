import {
  r as registerInstance,
  h,
  f as getElement,
  H as Host
} from "./core-9991b89e.js";

const NavPush = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.push = () => {
      const nav = this.el.closest("ion-nav");
      const toPush = this.component;
      if (nav && toPush !== undefined) {
        nav.push(toPush, this.componentProps, { skipIfBusy: true });
      }
    };
  }
  render() {
    return h(Host, { onClick: this.push });
  }
  get el() {
    return getElement(this);
  }
};

export { NavPush as ion_nav_push };
