import { r as i, h as s, e as t, H as o } from "./p-57e9347d.js";
import { s as l } from "./p-5f857030.js";
const e = class {
  constructor(s) {
    i(this, s), (this.options = []);
  }
  onSelect(i) {
    const s = this.options.find(s => s.value === i.target.value);
    s && l(s.handler);
  }
  render() {
    return s(
      o,
      { class: t(this) },
      s(
        "ion-list",
        null,
        void 0 !== this.header && s("ion-list-header", null, this.header),
        (void 0 !== this.subHeader || void 0 !== this.message) &&
          s(
            "ion-item",
            null,
            s(
              "ion-label",
              { "text-wrap": !0 },
              void 0 !== this.subHeader && s("h3", null, this.subHeader),
              void 0 !== this.message && s("p", null, this.message)
            )
          ),
        s(
          "ion-radio-group",
          null,
          this.options.map(i =>
            s(
              "ion-item",
              null,
              s("ion-label", null, i.text),
              s("ion-radio", {
                checked: i.checked,
                value: i.value,
                disabled: i.disabled
              })
            )
          )
        )
      )
    );
  }
  static get style() {
    return ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-label.sc-ion-select-popover, .sc-ion-select-popover-h ion-list-header.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
  }
};
export { e as ion_select_popover };
