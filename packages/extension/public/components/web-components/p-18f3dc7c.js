const t = t => {
    "requestIdleCallback" in window
      ? window.requestIdleCallback(t)
      : setTimeout(t, 32);
  },
  e = t => !!t.shadowRoot && !!t.attachShadow,
  n = t => {
    const e = t.closest("ion-item");
    return e ? e.querySelector("ion-label") : null;
  },
  r = (t, n, r, a, s) => {
    if (t || e(n)) {
      let t = n.querySelector("input.aux-input");
      t ||
        (((t = n.ownerDocument.createElement("input")).type = "hidden"),
        t.classList.add("aux-input"),
        n.appendChild(t)),
        (t.disabled = s),
        (t.name = r),
        (t.value = a || "");
    }
  },
  a = (t, e, n) => Math.max(t, Math.min(e, n)),
  s = (t, e) => {
    if (!t) {
      const t = "ASSERT: " + e;
      throw (console.error(t), new Error(t));
    }
  },
  i = t => t.timeStamp || Date.now(),
  o = t => {
    if (t) {
      const e = t.changedTouches;
      if (e && e.length > 0) {
        const t = e[0];
        return { x: t.clientX, y: t.clientY };
      }
      if (void 0 !== t.pageX) return { x: t.pageX, y: t.pageY };
    }
    return { x: 0, y: 0 };
  },
  u = t => {
    const e = "rtl" === document.dir;
    switch (t) {
      case "start":
        return e;
      case "end":
        return !e;
      default:
        throw new Error(
          `"${t}" is not a valid value for [side]. Use "start" or "end" instead.`
        );
    }
  },
  l = (t, e) => {
    const n = t._original || t;
    return { _original: t, emit: c(n.emit.bind(n), e) };
  },
  c = (t, e = 0) => {
    let n;
    return (...r) => {
      clearTimeout(n), (n = setTimeout(t, e, ...r));
    };
  };
export {
  r as a,
  s as b,
  a as c,
  l as d,
  c as e,
  n as f,
  e as h,
  u as i,
  i as n,
  o as p,
  t as r
};
