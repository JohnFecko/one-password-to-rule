"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const core = require("./core-be19e9c2.js");
const menuToggleUtil = require("./menu-toggle-util-6cc50079.js");

const MenuToggle = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
    this.visible = false;
    /**
     * Automatically hides the content when the corresponding menu is not active.
     *
     * By default, it's `true`. Change it to `false` in order to
     * keep `ion-menu-toggle` always visible regardless the state of the menu.
     */
    this.autoHide = true;
    this.setVisibility = async () => {
      this.visible = await menuToggleUtil.updateVisibility(this.menu);
    };
    this.onClick = async () => {
      await menuToggleUtil.toggleMenu(this.menu);
    };
  }
  async componentDidLoad() {
    await this.setVisibility();
  }
  async visibilityChanged() {
    await this.setVisibility();
  }
  render() {
    const mode = core.getIonMode(this);
    const hidden = this.autoHide && !this.visible;
    return core.h(
      core.Host,
      {
        onClick: this.onClick,
        "aria-hidden": hidden ? "true" : null,
        class: {
          [mode]: true,
          "menu-toggle-hidden": hidden
        }
      },
      core.h("slot", null)
    );
  }
  static get style() {
    return ":host(.menu-toggle-hidden){display:none}";
  }
};

exports.ion_menu_toggle = MenuToggle;
