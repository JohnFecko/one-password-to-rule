const e = (e, n, o) => {
    const c = "back" === o.direction,
      t = o.leavingEl,
      r = i(o.enteringEl),
      a = r.querySelector("ion-toolbar"),
      p = new e();
    if (
      (p.addElement(r).beforeRemoveClass("ion-page-invisible"),
      c
        ? p
            .duration(o.duration || 200)
            .easing("cubic-bezier(0.47,0,0.745,0.715)")
        : p
            .duration(o.duration || 280)
            .easing("cubic-bezier(0.36,0.66,0.04,1)")
            .fromTo("translateY", "40px", "0px", !0)
            .fromTo("opacity", 0.01, 1, !0),
      a)
    ) {
      const i = new e();
      i.addElement(a), p.add(i);
    }
    if (t && c) {
      p.duration(o.duration || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
      const n = new e();
      n
        .addElement(i(t))
        .fromTo("translateY", "0px", "40px")
        .fromTo("opacity", 1, 0),
        p.add(n);
    }
    return Promise.resolve(p);
  },
  i = e => {
    if (e.classList.contains("ion-page")) return e;
    return (
      e.querySelector(
        ":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"
      ) || e
    );
  };
export { e as mdTransitionAnimation };
