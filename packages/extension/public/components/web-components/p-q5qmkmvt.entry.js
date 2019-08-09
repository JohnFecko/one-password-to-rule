import { r as s, c as e, e as r, h as i, H as n } from "./p-57e9347d.js";
import { s as t } from "./p-8d8e0c6f.js";
const h = class {
  constructor(e) {
    s(this, e);
  }
  componentWillLoad() {
    if (
      (void 0 === this.pullingIcon &&
        (this.pullingIcon = e.get("refreshingIcon", "arrow-down")),
      void 0 === this.refreshingSpinner)
    ) {
      const s = r(this);
      this.refreshingSpinner = e.get(
        "refreshingSpinner",
        e.get("spinner", "ios" === s ? "lines" : "crescent")
      );
    }
  }
  render() {
    return i(
      n,
      { class: r(this) },
      i(
        "div",
        { class: "refresher-pulling" },
        this.pullingIcon &&
          i(
            "div",
            { class: "refresher-pulling-icon" },
            i("ion-icon", { icon: this.pullingIcon, lazy: !1 })
          ),
        this.pullingText &&
          i("div", {
            class: "refresher-pulling-text",
            innerHTML: t(this.pullingText)
          })
      ),
      i(
        "div",
        { class: "refresher-refreshing" },
        this.refreshingSpinner &&
          i(
            "div",
            { class: "refresher-refreshing-icon" },
            i("ion-spinner", { name: this.refreshingSpinner })
          ),
        this.refreshingText &&
          i("div", {
            class: "refresher-refreshing-text",
            innerHTML: t(this.refreshingText)
          })
      )
    );
  }
};
export { h as ion_refresher_content };
