import { r as t, c as n } from "./p-57e9347d.js";
const s = t =>
    Promise.resolve(
      new t()
        .easing("cubic-bezier(0.0, 0.0, 0.2, 1)")
        .easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)")
        .duration(300)
    ),
  i = (t, n, i) => {
    let e, r;
    const a = i.width + 8;
    i.isEndSide
      ? ((e = a + "px"), (r = "0px"))
      : ((e = -a + "px"), (r = "0px"));
    const c = new t().addElement(i.menuInnerEl).fromTo("translateX", e, r),
      o = new t().addElement(i.backdropEl).fromTo("opacity", 0.01, 0.32);
    return s(t).then(t => t.add(c).add(o));
  },
  e = (t, n, i) => {
    let e, r;
    const a = i.width;
    i.isEndSide
      ? ((e = -a + "px"), (r = a + "px"))
      : ((e = a + "px"), (r = -a + "px"));
    const c = new t().addElement(i.menuInnerEl).fromTo("translateX", r, "0px"),
      o = new t().addElement(i.contentEl).fromTo("translateX", "0px", e),
      h = new t().addElement(i.backdropEl).fromTo("opacity", 0.01, 0.32);
    return s(t).then(t =>
      t
        .add(c)
        .add(h)
        .add(o)
    );
  },
  r = (t, n, i) => {
    const e = i.width * (i.isEndSide ? -1 : 1) + "px",
      r = new t().addElement(i.contentEl).fromTo("translateX", "0px", e);
    return s(t).then(t => t.add(r));
  },
  a = class {
    constructor(n) {
      t(this, n),
        (this.menus = []),
        (this.menuAnimations = new Map()),
        this.registerAnimation("reveal", r),
        this.registerAnimation("push", e),
        this.registerAnimation("overlay", i);
    }
    async open(t) {
      const n = await this.get(t);
      return !!n && n.open();
    }
    async close(t) {
      const n = await (void 0 !== t ? this.get(t) : this.getOpen());
      return void 0 !== n && n.close();
    }
    async toggle(t) {
      const n = await this.get(t);
      return !!n && n.toggle();
    }
    async enable(t, n) {
      const s = await this.get(n);
      return s && (s.disabled = !t), s;
    }
    async swipeGesture(t, n) {
      const s = await this.get(n);
      return s && (s.swipeGesture = t), s;
    }
    async isOpen(t) {
      if (null != t) {
        const n = await this.get(t);
        return void 0 !== n && n.isOpen();
      }
      return void 0 !== (await this.getOpen());
    }
    async isEnabled(t) {
      const n = await this.get(t);
      return !!n && !n.disabled;
    }
    async get(t) {
      if ((await this.waitUntilReady(), "start" === t || "end" === t)) {
        return (
          this.find(n => n.side === t && !n.disabled) ||
          this.find(n => n.side === t)
        );
      }
      if (null != t) return this.find(n => n.menuId === t);
      return (
        this.find(t => !t.disabled) ||
        (this.menus.length > 0 ? this.menus[0].el : void 0)
      );
    }
    async getOpen() {
      return await this.waitUntilReady(), this.getOpenSync();
    }
    async getMenus() {
      return await this.waitUntilReady(), this.getMenusSync();
    }
    async isAnimating() {
      return await this.waitUntilReady(), this.isAnimatingSync();
    }
    async registerAnimation(t, n) {
      this.menuAnimations.set(t, n);
    }
    _getInstance() {
      return Promise.resolve(this);
    }
    _register(t) {
      const n = this.menus;
      n.indexOf(t) < 0 && (t.disabled || this._setActiveMenu(t), n.push(t));
    }
    _unregister(t) {
      const n = this.menus.indexOf(t);
      n > -1 && this.menus.splice(n, 1);
    }
    _setActiveMenu(t) {
      const n = t.side;
      this.menus
        .filter(s => s.side === n && s !== t)
        .forEach(t => (t.disabled = !0));
    }
    async _setOpen(t, n, s) {
      if (this.isAnimatingSync()) return !1;
      if (n) {
        const n = await this.getOpen();
        n && t.el !== n && (await n.setOpen(!1, !1));
      }
      return t._setOpen(n, s);
    }
    async _createAnimation(t, s) {
      const i = this.menuAnimations.get(t);
      if (!i) throw new Error("animation not registered");
      const e = await __sc_import_web_components("./p-d3aa5dba.js").then(t =>
        t.create(i, null, s)
      );
      return n.getBoolean("animated", !0) || e.duration(0), e;
    }
    getOpenSync() {
      return this.find(t => t._isOpen);
    }
    getMenusSync() {
      return this.menus.map(t => t.el);
    }
    isAnimatingSync() {
      return this.menus.some(t => t.isAnimating);
    }
    find(t) {
      const n = this.menus.find(t);
      if (void 0 !== n) return n.el;
    }
    waitUntilReady() {
      return Promise.all(
        Array.from(document.querySelectorAll("ion-menu")).map(t =>
          t.componentOnReady()
        )
      );
    }
    static get style() {
      return ".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}";
    }
  };
export { a as ion_menu_controller };
