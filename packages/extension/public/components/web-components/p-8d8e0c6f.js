const t = t => {
    try {
      if ("string" != typeof t || "" === t) return t;
      const e = document.createDocumentFragment(),
        s = document.createElement("div");
      e.appendChild(s),
        (s.innerHTML = t),
        c.forEach(t => {
          const c = e.querySelectorAll(t);
          for (let t = c.length - 1; t >= 0; t--) {
            const s = c[t];
            s.parentNode ? s.parentNode.removeChild(s) : e.removeChild(s);
            const r = o(s);
            for (let t = 0; t < r.length; t++) n(r[t]);
          }
        });
      const r = o(e);
      for (let t = 0; t < r.length; t++) n(r[t]);
      const l = document.createElement("div");
      l.appendChild(e);
      const i = l.querySelector("div");
      return null !== i ? i.innerHTML : l.innerHTML;
    } catch (t) {
      return console.error(t), "";
    }
  },
  n = t => {
    if (t.nodeType && 1 !== t.nodeType) return;
    for (let n = t.attributes.length - 1; n >= 0; n--) {
      const o = t.attributes[n],
        c = o.name;
      if (!e.includes(c.toLowerCase())) {
        t.removeAttribute(c);
        continue;
      }
      const s = o.value;
      null != s &&
        s.toLowerCase().includes("javascript:") &&
        t.removeAttribute(c);
    }
    const c = o(t);
    for (let t = 0; t < c.length; t++) n(c[t]);
  },
  o = t => (null != t.children ? t.children : t.childNodes),
  e = ["class", "id", "href", "src", "name", "slot"],
  c = ["script", "style", "iframe", "meta", "link", "object", "embed"];
export { t as s };
