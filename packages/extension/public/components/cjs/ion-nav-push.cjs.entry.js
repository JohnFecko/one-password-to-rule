"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const core = require("./core-be19e9c2.js");

const NavPush = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
    this.push = () => {
      const nav = this.el.closest("ion-nav");
      const toPush = this.component;
      if (nav && toPush !== undefined) {
        nav.push(toPush, this.componentProps, { skipIfBusy: true });
      }
    };
  }
  render() {
    return core.h(core.Host, { onClick: this.push });
  }
  get el() {
    return core.getElement(this);
  }
};

exports.ion_nav_push = NavPush;
