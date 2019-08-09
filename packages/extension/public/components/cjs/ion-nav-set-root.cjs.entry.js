"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const core = require("./core-be19e9c2.js");

const NavSetRoot = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
    this.setRoot = () => {
      const nav = this.el.closest("ion-nav");
      const toPush = this.component;
      if (nav && toPush !== undefined) {
        nav.setRoot(toPush, this.componentProps, { skipIfBusy: true });
      }
    };
  }
  render() {
    return core.h(core.Host, { onClick: this.setRoot });
  }
  get el() {
    return core.getElement(this);
  }
};

exports.ion_nav_set_root = NavSetRoot;
