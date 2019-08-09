var r = function() {
  (this.start = 0),
    (this.end = 0),
    (this.previous = null),
    (this.parent = null),
    (this.rules = null),
    (this.parsedCssText = ""),
    (this.cssText = ""),
    (this.atRule = !1),
    (this.type = 0),
    (this.keyframesName = ""),
    (this.selector = ""),
    (this.parsedSelector = "");
};
var n = { STYLE_RULE: 1, KEYFRAMES_RULE: 7, MEDIA_RULE: 4, MIXIN_RULE: 1e3 },
  t = "{",
  i = "}",
  e = {
    comments: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
    port: /@import[^;]*;/gim,
    customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
    mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
    mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
    varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
    keyframesRule: /^@[^\s]*keyframes/,
    multipleSpaces: /\s+/g
  },
  u = "--",
  o = "@media",
  s = "@";
function a(r, n, t) {
  r.lastIndex = 0;
  var i = n.substring(t).match(r);
  if (i) {
    var e = t + i.index;
    return { start: e, end: e + i[0].length };
  }
  return null;
}
var f = /\bvar\(/,
  c = /\B--[\w-]+\s*:/,
  v = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
  h = /^[\t ]+\n/gm;
function l(r, n, t) {
  var i = (function(r, n) {
    var t = a(f, r, n);
    if (!t) return null;
    var i = (function(r) {
        for (var n = 0, i = t.start; i < r.length; i++) {
          var e = r[i];
          if ("(" === e) n++;
          else if (")" === e && --n <= 0) return i + 1;
        }
        return i;
      })(r),
      e = r.substring(t.end, i - 1).split(","),
      u = e[0],
      o = e.slice(1);
    return {
      start: t.start,
      end: i,
      propName: u.trim(),
      fallback: o.length > 0 ? o.join(",").trim() : void 0
    };
  })(r, t);
  if (!i) return n.push(r.substring(t, r.length)), r.length;
  var e = i.propName,
    u = null != i.fallback ? g(i.fallback) : void 0;
  return (
    n.push(r.substring(t, i.start), function(r) {
      return (function(n, t, i) {
        return r[e] ? r[e] : i ? m(i, r) : "";
      })(0, 0, u);
    }),
    i.end
  );
}
function m(r, n) {
  for (var t = "", i = 0; i < r.length; i++) {
    var e = r[i];
    t += "string" == typeof e ? e : e(n);
  }
  return t;
}
function p(r, n) {
  for (var t = !1, i = !1, e = n; e < r.length; e++) {
    var u = r[e];
    if (t) i && '"' === u && (t = !1), i || "'" !== u || (t = !1);
    else if ('"' === u) (t = !0), (i = !0);
    else if ("'" === u) (t = !0), (i = !1);
    else {
      if (";" === u) return e + 1;
      if ("}" === u) return e;
    }
  }
  return e;
}
function g(r) {
  var n = 0;
  r = (function(r) {
    for (var n = "", t = 0; ; ) {
      var i = a(c, r, t),
        e = i ? i.start : r.length;
      if (((n += r.substring(t, e)), !i)) break;
      t = p(r, e);
    }
    return n;
  })((r = r.replace(v, ""))).replace(h, "");
  for (var t = []; n < r.length; ) n = l(r, t, n);
  return t;
}
function d(r) {
  var n = {};
  r.forEach(function(r) {
    r.declarations.forEach(function(r) {
      n[r.prop] = r.value;
    });
  });
  for (
    var t = {},
      i = Object.entries(n),
      e = function() {
        var r = !1;
        if (
          (i.forEach(function(n) {
            var i = n[0],
              e = m(n[1], t);
            e !== t[i] && ((t[i] = e), (r = !0));
          }),
          !r)
        )
          return "break";
      },
      u = 0;
    u < 10 && "break" !== e();
    u++
  );
  return t;
}
function y(r, t) {
  if ((void 0 === t && (t = 0), !r.rules)) return [];
  var i = [];
  return (
    r.rules
      .filter(function(r) {
        return r.type === n.STYLE_RULE;
      })
      .forEach(function(r) {
        var n = (function(r) {
          for (var n, t = []; (n = E.exec(r.trim())); ) {
            var i = k(n[2]),
              e = i.value,
              u = i.important;
            t.push({ prop: n[1].trim(), value: g(e), important: u });
          }
          return t;
        })(r.cssText);
        n.length > 0 &&
          r.parsedSelector.split(",").forEach(function(r) {
            (r = r.trim()),
              i.push({ selector: r, declarations: n, specificity: 1, nu: t });
          }),
          t++;
      }),
    i
  );
}
var w = "!important",
  E = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;
function k(r) {
  var n = (r = r.replace(/\s+/gim, " ").trim()).endsWith(w);
  return (
    n && (r = r.substr(0, r.length - w.length).trim()),
    { value: r, important: n }
  );
}
function b(r) {
  var n = [];
  return (
    r.forEach(function(r) {
      n.push.apply(n, r.selectors);
    }),
    n
  );
}
function R(a) {
  var f,
    c = (function r(t, i) {
      var a = i.substring(t.start, t.end - 1);
      if (((t.parsedCssText = t.cssText = a.trim()), t.parent)) {
        a = (a = (a = (a = i.substring(
          t.previous ? t.previous.end : t.parent.start,
          t.start - 1
        )).replace(/\\([0-9a-f]{1,6})\s/gi, function() {
          for (var r = arguments[1], n = 6 - r.length; n--; ) r = "0" + r;
          return "\\" + r;
        })).replace(e.multipleSpaces, " ")).substring(a.lastIndexOf(";") + 1);
        var f = (t.parsedSelector = t.selector = a.trim());
        (t.atRule = 0 === f.indexOf(s)),
          t.atRule
            ? 0 === f.indexOf(o)
              ? (t.type = n.MEDIA_RULE)
              : f.match(e.keyframesRule) &&
                ((t.type = n.KEYFRAMES_RULE),
                (t.keyframesName = t.selector.split(e.multipleSpaces).pop()))
            : (t.type = 0 === f.indexOf(u) ? n.MIXIN_RULE : n.STYLE_RULE);
      }
      var c = t.rules;
      if (c)
        for (var v = 0, h = c.length, l = void 0; v < h && (l = c[v]); v++)
          r(l, i);
      return t;
    })(
      (function(n) {
        var e = new r();
        (e.start = 0), (e.end = n.length);
        for (var u = e, o = 0, s = n.length; o < s; o++)
          if (n[o] === t) {
            u.rules || (u.rules = []);
            var a = u,
              f = a.rules[a.rules.length - 1] || null;
            ((u = new r()).start = o + 1),
              (u.parent = a),
              (u.previous = f),
              a.rules.push(u);
          } else n[o] === i && ((u.end = o + 1), (u = u.parent || e));
        return e;
      })((f = (f = a).replace(e.comments, "").replace(e.port, ""))),
      f
    ),
    v = g(a);
  return {
    original: a,
    template: v,
    selectors: y(c),
    usesCssVars: v.length > 1
  };
}
function M(r, n) {
  var t = R(n.innerHTML);
  (t.styleEl = n), r.push(t);
}
function $(r, n, t) {
  var i;
  return (i = "." + t), r.replace(new RegExp("\\." + n, "g"), i);
}
function A(r, n, t) {
  var i = t.href;
  return fetch(i)
    .then(function(r) {
      return r.text();
    })
    .then(function(e) {
      if (((o = e).indexOf("var(") > -1 || L.test(o)) && t.parentNode) {
        (function(r) {
          return (I.lastIndex = 0), I.test(r);
        })(e) &&
          (e = (function(r) {
            var n = i.replace(/[^\/]*$/, "");
            return r.replace(I, function(r, t) {
              return r.replace(t, n + t);
            });
          })(e));
        var u = r.createElement("style");
        u.setAttribute("data-styles", ""),
          (u.innerHTML = e),
          M(n, u),
          t.parentNode.insertBefore(u, t),
          t.remove();
      }
      var o;
    })
    .catch(function(r) {
      console.error(r);
    });
}
var L = /[\s;{]--[-a-zA-Z0-9]+\s*:/m,
  I = /url[\s]*\([\s]*['"]?(?![http|\/])([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,
  P = (function() {
    function r(r, n) {
      (this.win = r),
        (this.doc = n),
        (this.count = 0),
        (this.hostStyleMap = new WeakMap()),
        (this.hostScopeMap = new WeakMap()),
        (this.globalScopes = []),
        (this.scopesMap = new Map());
    }
    return (
      (r.prototype.initShim = function() {
        var r = this;
        return new Promise(function(n) {
          r.win.requestAnimationFrame(function() {
            var t, i;
            ((t = r.doc),
            (i = r.globalScopes),
            (function(r, n) {
              for (
                var t = r.querySelectorAll("style:not([data-styles])"), i = 0;
                i < t.length;
                i++
              )
                M(n, t[i]);
            })(t, i),
            (function(r, n) {
              for (
                var t = [],
                  i = r.querySelectorAll('link[rel="stylesheet"][href]'),
                  e = 0;
                e < i.length;
                e++
              )
                t.push(A(r, n, i[e]));
              return Promise.all(t);
            })(t, i)).then(function() {
              return n();
            });
          });
        });
      }),
      (r.prototype.addLink = function(r) {
        var n = this;
        return A(this.doc, this.globalScopes, r).then(function() {
          n.updateGlobal();
        });
      }),
      (r.prototype.addGlobalStyle = function(r) {
        M(this.globalScopes, r), this.updateGlobal();
      }),
      (r.prototype.createHostStyle = function(r, n, t, i) {
        if (this.hostScopeMap.has(r))
          throw new Error("host style already created");
        var e,
          u,
          o,
          s,
          a = this.registerHostTemplate(t, n, i),
          f = this.doc.createElement("style");
        return (
          a.usesCssVars
            ? i
              ? ((f["s-sc"] = n = a.scopeId + "-" + this.count),
                (f.innerHTML = "/*needs update*/"),
                this.hostStyleMap.set(r, f),
                this.hostScopeMap.set(
                  r,
                  ((u = n),
                  (o = (e = a).template.map(function(r) {
                    return "string" == typeof r ? $(r, e.scopeId, u) : r;
                  })),
                  (s = e.selectors.map(function(r) {
                    return Object.assign({}, r, {
                      selector: $(r.selector, e.scopeId, u)
                    });
                  })),
                  Object.assign({}, e, {
                    template: o,
                    selectors: s,
                    scopeId: u
                  }))
                ),
                this.count++)
              : ((a.styleEl = f),
                a.usesCssVars || (f.innerHTML = m(a.template, {})),
                this.globalScopes.push(a),
                this.updateGlobal(),
                this.hostScopeMap.set(r, a))
            : (f.innerHTML = t),
          f
        );
      }),
      (r.prototype.removeHost = function(r) {
        var n = this.hostStyleMap.get(r);
        n && n.remove(),
          this.hostStyleMap.delete(r),
          this.hostScopeMap.delete(r);
      }),
      (r.prototype.updateHost = function(r) {
        var n = this.hostScopeMap.get(r);
        if (n && n.usesCssVars && n.isScoped) {
          var t = this.hostStyleMap.get(r);
          if (t) {
            var i = d(
              (function(r, n, t) {
                var i;
                return (
                  (i = b(
                    t.concat(
                      (function(r, n) {
                        for (var t = []; n; ) {
                          var i = r.get(n);
                          i && t.push(i), (n = n.parentElement);
                        }
                        return t;
                      })(n, r)
                    )
                  ).filter(function(n) {
                    return (function(n, t) {
                      return ":root" === t || "html" === t || r.matches(t);
                    })(0, n.selector);
                  })).sort(function(r, n) {
                    return r.specificity === n.specificity
                      ? r.nu - n.nu
                      : r.specificity - n.specificity;
                  }),
                  i
                );
              })(r, this.hostScopeMap, this.globalScopes)
            );
            t.innerHTML = m(n.template, i);
          }
        }
      }),
      (r.prototype.updateGlobal = function() {
        var r, n;
        (n = d(b((r = this.globalScopes)))),
          r.forEach(function(r) {
            r.usesCssVars && (r.styleEl.innerHTML = m(r.template, n));
          });
      }),
      (r.prototype.registerHostTemplate = function(r, n, t) {
        var i = this.scopesMap.get(n);
        return (
          i ||
            (((i = R(r)).scopeId = n),
            (i.isScoped = t),
            this.scopesMap.set(n, i)),
          i
        );
      }),
      r
    );
  })(),
  U = window;
U.__stencil_cssshim ||
  (U.CSS && U.CSS.supports && U.CSS.supports("color", "var(--c)")) ||
  (U.__stencil_cssshim = new P(U, document));
