"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const core = require("./core-be19e9c2.js");

const RouteRedirect = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
    this.ionRouteRedirectChanged = core.createEvent(
      this,
      "ionRouteRedirectChanged",
      7
    );
  }
  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }
  componentDidLoad() {
    this.ionRouteRedirectChanged.emit();
  }
  componentDidUnload() {
    this.ionRouteRedirectChanged.emit();
  }
  static get watchers() {
    return {
      from: ["propDidChange"],
      to: ["propDidChange"]
    };
  }
};

exports.ion_route_redirect = RouteRedirect;
