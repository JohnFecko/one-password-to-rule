import { r as t, d as i, h as s, H as e, f as h } from "./p-57e9347d.js";
const n = class {
  constructor(s) {
    t(this, s),
      (this.transitioning = !1),
      (this.tabs = []),
      (this.useRouter = !1),
      (this.onTabClicked = t => {
        const { href: i, tab: s } = t.detail,
          e = this.tabs.find(t => t.tab === s);
        if (this.useRouter && void 0 !== i) {
          const t = document.querySelector("ion-router");
          t && t.push(i);
        } else e && this.select(e);
      }),
      (this.ionNavWillLoad = i(this, "ionNavWillLoad", 7)),
      (this.ionTabsWillChange = i(this, "ionTabsWillChange", 3)),
      (this.ionTabsDidChange = i(this, "ionTabsDidChange", 3));
  }
  componentWillLoad() {
    this.useRouter ||
      (this.useRouter =
        !!document.querySelector("ion-router") &&
        !this.el.closest("[no-router]")),
      (this.tabs = Array.from(this.el.querySelectorAll("ion-tab"))),
      this.initSelect().then(() => {
        this.ionNavWillLoad.emit(), this.componentWillUpdate();
      });
  }
  componentDidUnload() {
    (this.tabs.length = 0), (this.selectedTab = this.leavingTab = void 0);
  }
  componentWillUpdate() {
    const t = this.el.querySelector("ion-tab-bar");
    t && (t.selectedTab = this.selectedTab ? this.selectedTab.tab : void 0);
  }
  async select(t) {
    const i = await this.getTab(t);
    return (
      !!this.shouldSwitch(i) &&
      (await this.setActive(i), await this.notifyRouter(), this.tabSwitch(), !0)
    );
  }
  async getTab(t) {
    const i = "string" == typeof t ? this.tabs.find(i => i.tab === t) : t;
    return i || console.error(`tab with id: "${i}" does not exist`), i;
  }
  getSelected() {
    return Promise.resolve(this.selectedTab ? this.selectedTab.tab : void 0);
  }
  async setRouteId(t) {
    const i = await this.getTab(t);
    return this.shouldSwitch(i)
      ? (await this.setActive(i),
        {
          changed: !0,
          element: this.selectedTab,
          markVisible: () => this.tabSwitch()
        })
      : { changed: !1, element: this.selectedTab };
  }
  async getRouteId() {
    const t = this.selectedTab && this.selectedTab.tab;
    return void 0 !== t ? { id: t, element: this.selectedTab } : void 0;
  }
  async initSelect() {
    this.useRouter ||
      (await Promise.all(this.tabs.map(t => t.componentOnReady())),
      await this.select(this.tabs[0]));
  }
  setActive(t) {
    return this.transitioning
      ? Promise.reject("transitioning already happening")
      : ((this.transitioning = !0),
        (this.leavingTab = this.selectedTab),
        (this.selectedTab = t),
        this.ionTabsWillChange.emit({ tab: t.tab }),
        t.setActive());
  }
  tabSwitch() {
    const t = this.selectedTab,
      i = this.leavingTab;
    (this.leavingTab = void 0),
      (this.transitioning = !1),
      t &&
        i !== t &&
        (i && (i.active = !1), this.ionTabsDidChange.emit({ tab: t.tab }));
  }
  notifyRouter() {
    if (this.useRouter) {
      const t = document.querySelector("ion-router");
      if (t) return t.navChanged("forward");
    }
    return Promise.resolve(!1);
  }
  shouldSwitch(t) {
    return void 0 !== t && t !== this.selectedTab && !this.transitioning;
  }
  render() {
    return s(
      e,
      { onIonTabButtonClick: this.onTabClicked },
      s("slot", { name: "top" }),
      s("div", { class: "tabs-inner" }, s("slot", null)),
      s("slot", { name: "bottom" })
    );
  }
  get el() {
    return h(this);
  }
  static get style() {
    return ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}";
  }
};
export { n as ion_tabs };