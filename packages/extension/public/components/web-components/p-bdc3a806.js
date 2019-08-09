const o = o => o.shadowRoot || o,
  n = (n, t, e) => {
    const i = "opacity",
      s = "translateX",
      c = "back" === e.direction,
      a = "rtl" === t.ownerDocument.dir,
      r = a ? "-99.5%" : "99.5%",
      w = a ? "33%" : "-33%",
      p = e.enteringEl,
      b = e.leavingEl,
      l = p.querySelector(":scope > ion-content"),
      f = p.querySelectorAll(
        ":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"
      ),
      u = p.querySelectorAll(":scope > ion-header > ion-toolbar"),
      g = new n(),
      d = new n();
    if (
      (d
        .addElement(p)
        .duration(e.duration || 540)
        .easing(e.easing || "cubic-bezier(0.32,0.72,0,1)")
        .beforeRemoveClass("ion-page-invisible"),
      b && t)
    ) {
      const o = new n();
      o.addElement(t), d.add(o);
    }
    if (
      (l || 0 !== u.length || 0 !== f.length
        ? g.addElement(l).addElement(f)
        : g.addElement(
            p.querySelector(
              ":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"
            )
          ),
      d.add(g),
      c)
    )
      g.beforeClearStyles([i])
        .fromTo(s, w, "0%", !0)
        .fromTo(i, 0.8, 1, !0);
    else if ((g.beforeClearStyles([i]).fromTo(s, r, "0%", !0), l)) {
      const t = o(l).querySelector(".transition-effect");
      if (t) {
        const o = t.querySelector(".transition-cover"),
          e = t.querySelector(".transition-shadow"),
          s = new n(),
          c = new n(),
          a = new n();
        s
          .addElement(t)
          .beforeStyles({ opacity: "1" })
          .afterStyles({ opacity: "" }),
          c
            .addElement(o)
            .beforeClearStyles([i])
            .fromTo(i, 0, 0.1, !0),
          a
            .addElement(e)
            .beforeClearStyles([i])
            .fromTo(i, 0.7, 0.03, !0),
          g
            .add(s)
            .add(c)
            .add(a);
      }
    }
    if (
      (u.forEach(t => {
        const e = new n(),
          p = new n(),
          b = new n(),
          l = new n(),
          f = new n(),
          u = new n(),
          g = t.querySelector("ion-back-button");
        if (
          (e.addElement(t),
          d.add(e),
          p.addElement(t.querySelector("ion-title")),
          b.addElement(t.querySelectorAll("ion-buttons,[menuToggle]")),
          l.addElement(
            t.querySelectorAll(
              ":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"
            )
          ),
          f.addElement(o(t).querySelector(".toolbar-background")),
          g && u.addElement(g),
          e
            .add(p)
            .add(b)
            .add(l)
            .add(f)
            .add(u),
          p.fromTo(i, 0.01, 1, !0),
          b.fromTo(i, 0.01, 1, !0),
          l.fromTo(i, 0.01, 1, !0),
          c)
        )
          p.fromTo(s, w, "0%", !0),
            l.fromTo(s, w, "0%", !0),
            u.fromTo(i, 0.01, 1, !0);
        else if (
          (p.fromTo(s, r, "0%", !0),
          l.fromTo(s, r, "0%", !0),
          f.beforeClearStyles([i]).fromTo(i, 0.01, 1, !0),
          u.fromTo(i, 0.01, 1, !0),
          g)
        ) {
          const t = new n();
          t
            .addElement(o(g).querySelector(".button-text"))
            .fromTo(s, a ? "-100px" : "100px", "0px"),
            e.add(t);
        }
      }),
      b)
    ) {
      const t = new n(),
        e = b.querySelector(":scope > ion-content");
      if (
        (t
          .addElement(e)
          .addElement(
            b.querySelectorAll(
              ":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"
            )
          ),
        d.add(t),
        c)
      ) {
        if (
          (t.beforeClearStyles([i]).fromTo(s, "0%", a ? "-100%" : "100%"), e)
        ) {
          const s = o(e).querySelector(".transition-effect");
          if (s) {
            const o = s.querySelector(".transition-cover"),
              e = s.querySelector(".transition-shadow"),
              c = new n(),
              a = new n(),
              r = new n();
            c
              .addElement(s)
              .beforeStyles({ opacity: "1" })
              .afterStyles({ opacity: "" }),
              a
                .addElement(o)
                .beforeClearStyles([i])
                .fromTo(i, 0.1, 0, !0),
              r
                .addElement(e)
                .beforeClearStyles([i])
                .fromTo(i, 0.7, 0.03, !0),
              t
                .add(c)
                .add(a)
                .add(r);
          }
        }
      } else t.fromTo(s, "0%", w, !0).fromTo(i, 1, 0.8, !0);
      b.querySelectorAll(":scope > ion-header > ion-toolbar").forEach(t => {
        const e = new n(),
          r = new n(),
          p = new n(),
          b = new n(),
          l = t.querySelectorAll(
            ":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"
          ),
          f = new n(),
          u = new n(),
          g = t.querySelector("ion-back-button");
        if (
          (e.addElement(t),
          r.addElement(t.querySelector("ion-title")),
          p.addElement(t.querySelectorAll("ion-buttons,[menuToggle]")),
          l.length > 0 && b.addElement(l),
          f.addElement(o(t).querySelector(".toolbar-background")),
          g && u.addElement(g),
          e
            .add(r)
            .add(p)
            .add(b)
            .add(u)
            .add(f),
          d.add(e),
          u.fromTo(i, 0.99, 0),
          r.fromTo(i, 0.99, 0),
          p.fromTo(i, 0.99, 0, 0),
          b.fromTo(i, 0.99, 0),
          c)
        ) {
          if (
            (r.fromTo(s, "0%", a ? "-100%" : "100%"),
            b.fromTo(s, "0%", a ? "-100%" : "100%"),
            f.beforeClearStyles([i]).fromTo(i, 1, 0.01),
            g)
          ) {
            const t = new n();
            t.addElement(o(g).querySelector(".button-text")),
              t.fromTo(s, "0%", (a ? -124 : 124) + "px"),
              e.add(t);
          }
        } else
          r.fromTo(s, "0%", w).afterClearStyles(["transform"]),
            b.fromTo(s, "0%", w).afterClearStyles(["transform", i]),
            u.afterClearStyles([i]),
            r.afterClearStyles([i]),
            p.afterClearStyles([i]);
      });
    }
    return Promise.resolve(d);
  };
export { n as iosTransitionAnimation, o as shadow };
