const t = t => {
    const n = t.querySelector("ion-menu-controller");
    return n ? n.componentOnReady() : Promise.resolve(void 0);
  },
  n = async n => {
    const a = await t(document);
    a && (await a.get(n)) && a.toggle(n);
  },
  a = async n => {
    const a = await t(document);
    if (a) {
      const t = await a.get(n);
      if (t && (await t.isActive())) return !0;
    }
    return !1;
  };
export { n as t, a as u };
