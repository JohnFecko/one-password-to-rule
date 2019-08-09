"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const core = require("./core-be19e9c2.js");

const NavPop = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
    this.pop = () => {
      const nav = this.el.closest("ion-nav");
      if (nav) {
        nav.pop({ skipIfBusy: true });
      }
    };
  }
  render() {
    return core.h(core.Host, { onClick: this.pop });
  }
  get el() {
    return core.getElement(this);
  }
};

exports.ion_nav_pop = NavPop;
