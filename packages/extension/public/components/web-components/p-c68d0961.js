const s = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",
  o = new RegExp("(-shadowcsshost" + s, "gim"),
  t = new RegExp("(-shadowcsscontext" + s, "gim"),
  n = new RegExp("(-shadowcssslotted" + s, "gim"),
  e = /-shadowcsshost-no-combinator([^\s]*)/,
  c = [/::shadow/g, /::content/g],
  r = /-shadowcsshost/gim,
  h = /:host/gim,
  a = /::slotted/gim,
  d = /:host-context/gim,
  g = /\/\*\s*[\s\S]*?\*\//g,
  i = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,
  m = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,
  l = /([{}])/g,
  u = (s, o) => {
    const t = w(s);
    let n = 0;
    return t.escapedString.replace(m, (...s) => {
      const e = s[2];
      let c = "",
        r = s[4],
        h = "";
      r &&
        r.startsWith("{%BLOCK%") &&
        ((c = t.blocks[n++]),
        (r = r.substring("%BLOCK%".length + 1)),
        (h = "{"));
      const a = o({ selector: e, content: c });
      return `${s[1]}${a.selector}${s[3]}${h}${a.content}${r}`;
    });
  },
  w = s => {
    const o = s.split(l),
      t = [],
      n = [];
    let e = 0,
      c = [];
    for (let s = 0; s < o.length; s++) {
      const r = o[s];
      "}" === r && e--,
        e > 0
          ? c.push(r)
          : (c.length > 0 && (n.push(c.join("")), t.push("%BLOCK%"), (c = [])),
            t.push(r)),
        "{" === r && e++;
    }
    return (
      c.length > 0 && (n.push(c.join("")), t.push("%BLOCK%")),
      { escapedString: t.join(""), blocks: n }
    );
  },
  p = (s, o, t) =>
    s.replace(o, (...s) => {
      if (s[2]) {
        const o = s[2].split(","),
          n = [];
        for (let e = 0; e < o.length; e++) {
          const c = o[e].trim();
          if (!c) break;
          n.push(t("-shadowcsshost-no-combinator", c, s[3]));
        }
        return n.join(",");
      }
      return "-shadowcsshost-no-combinator" + s[3];
    }),
  _ = (s, o, t) => s + o.replace("-shadowcsshost", "") + t,
  $ = (s, o, t) =>
    o.indexOf("-shadowcsshost") > -1
      ? _(s, o, t)
      : s + o + t + ", " + o + " " + s + t,
  b = (s, o, t, n) =>
    u(s, s => {
      let c = s.selector,
        h = s.content;
      return (
        "@" !== s.selector[0]
          ? (c = ((s, o, t, n) =>
              s
                .split(",")
                .map(s =>
                  n && s.indexOf("." + n) > -1
                    ? s.trim()
                    : ((s, o) =>
                        !(s => (
                          (s = s.replace(/\[/g, "\\[").replace(/\]/g, "\\]")),
                          new RegExp(
                            "^(" + s + ")([>\\s~+[.,{:][\\s\\S]*)?$",
                            "m"
                          )
                        ))(o).test(s))(s, o)
                    ? ((s, o, t) => {
                        const n =
                            "." +
                            (o = o.replace(
                              /\[is=([^\]]*)\]/g,
                              (s, ...o) => o[0]
                            )),
                          c = s => {
                            let c = s.trim();
                            if (!c) return "";
                            if (s.indexOf("-shadowcsshost-no-combinator") > -1)
                              c = ((s, o, t) => {
                                if (((r.lastIndex = 0), r.test(s))) {
                                  const o = `.${t}`;
                                  return s
                                    .replace(e, (s, t) =>
                                      t.replace(
                                        /([^:]*)(:*)(.*)/,
                                        (s, t, n, e) => t + o + n + e
                                      )
                                    )
                                    .replace(r, o + " ");
                                }
                                return o + " " + s;
                              })(s, o, t);
                            else {
                              const o = s.replace(r, "");
                              if (o.length > 0) {
                                const s = o.match(/([^:]*)(:*)(.*)/);
                                s && (c = s[1] + n + s[2] + s[3]);
                              }
                            }
                            return c;
                          },
                          h = (s => {
                            const o = [];
                            let t,
                              n = 0;
                            return {
                              content: (t = (s = s.replace(
                                /(\[[^\]]*\])/g,
                                (s, t) => {
                                  const e = `__ph-${n}__`;
                                  return o.push(t), n++, e;
                                }
                              )).replace(
                                /(:nth-[-\w]+)(\([^)]+\))/g,
                                (s, t, e) => {
                                  const c = `__ph-${n}__`;
                                  return o.push(e), n++, t + c;
                                }
                              )),
                              placeholders: o
                            };
                          })(s);
                        let a,
                          d = "",
                          g = 0;
                        const i = /( |>|\+|~(?!=))\s*/g;
                        let m = !(
                          (s = h.content).indexOf(
                            "-shadowcsshost-no-combinator"
                          ) > -1
                        );
                        for (; null !== (a = i.exec(s)); ) {
                          const o = a[1],
                            t = s.slice(g, a.index).trim();
                          (d += `${
                            (m =
                              m ||
                              t.indexOf("-shadowcsshost-no-combinator") > -1)
                              ? c(t)
                              : t
                          } ${o} `),
                            (g = i.lastIndex);
                        }
                        const l = s.substring(g);
                        return (
                          (d += (m =
                            m || l.indexOf("-shadowcsshost-no-combinator") > -1)
                            ? c(l)
                            : l),
                          ((s, o) =>
                            o.replace(/__ph-(\d+)__/g, (o, t) => s[+t]))(
                            h.placeholders,
                            d
                          )
                        );
                      })(s, o, t).trim()
                    : s.trim()
                )
                .join(", "))(s.selector, o, t, n))
          : (s.selector.startsWith("@media") ||
              s.selector.startsWith("@supports") ||
              s.selector.startsWith("@page") ||
              s.selector.startsWith("@document")) &&
            (h = b(s.content, o, t, n)),
        { selector: c.replace(/\s{2,}/g, " ").trim(), content: h }
      );
    }),
  f = (s, e, r) => {
    const m = e + "-h",
      l = e + "-s",
      w = (s => s.match(i) || [])(s);
    s = (s => s.replace(g, ""))(s);
    const f = [];
    if (r) {
      const o = s => {
        const o = `/*!@___${f.length}___*/`;
        return (
          f.push({ placeholder: o, comment: `/*!@${s.selector}*/` }),
          (s.selector = o + s.selector),
          s
        );
      };
      s = u(s, s =>
        "@" !== s.selector[0]
          ? o(s)
          : s.selector.startsWith("@media") ||
            s.selector.startsWith("@supports") ||
            s.selector.startsWith("@page") ||
            s.selector.startsWith("@document")
          ? ((s.content = u(s.content, o)), s)
          : s
      );
    }
    const x = ((s, e, r, g) => (
      (s = (s => c.reduce((s, o) => s.replace(o, " "), s))(
        (s = ((s, o) =>
          s.replace(n, (...s) => {
            if (s[2]) {
              const t = s[2].trim();
              return "." + o + " > " + t + s[3];
            }
            return "-shadowcsshost-no-combinator" + s[3];
          }))(
          (s = (s => p(s, t, $))(
            (s = (s => p(s, o, _))(
              (s = (s =>
                (s = s
                  .replace(d, "-shadowcsscontext")
                  .replace(h, "-shadowcsshost")
                  .replace(a, "-shadowcssslotted")))(s))
            ))
          )),
          g
        ))
      )),
      e && (s = b(s, e, r, g)),
      (s = (s = s.replace(/-shadowcsshost-no-combinator/g, `.${r}`)).replace(
        />\s*\*\s+([^{, ]+)/gm,
        " $1 "
      )).trim()
    ))(s, e, m, l);
    return (
      (s = [x, ...w].join("\n")),
      r &&
        f.forEach(({ placeholder: o, comment: t }) => {
          s = s.replace(o, t);
        }),
      s
    );
  };
export { f as scopeCss };
