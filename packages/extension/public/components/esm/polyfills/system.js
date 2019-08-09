/*
 * SystemJS 3.1.3
 */
!(function() {
  var e,
    n = "undefined" != typeof self,
    t = n ? self : global;
  if ("undefined" != typeof location) {
    var r = (e = location.href.split("#")[0].split("?")[0]).lastIndexOf("/");
    -1 !== r && (e = e.slice(0, r + 1));
  }
  var i = /\\/g,
    o = "undefined" != typeof Symbol,
    u = o && Symbol.toStringTag,
    f = o ? Symbol() : "@";
  function c() {
    this[f] = {};
  }
  var l,
    s = c.prototype;
  (s.import = function(e, n) {
    var t = this;
    return Promise.resolve(t.resolve(e, n)).then(function(e) {
      var n = (function e(n, t, r) {
        var i = n[f][t];
        if (i) return i;
        var o = [],
          c = Object.create(null);
        u && Object.defineProperty(c, u, { value: "Module" });
        var l = Promise.resolve()
            .then(function() {
              return n.instantiate(t, r);
            })
            .then(function(e) {
              if (!e) throw new Error("Module " + t + " did not instantiate");
              var r = e[1](
                function(e, n) {
                  i.h = !0;
                  var t = !1;
                  if ("object" != typeof e)
                    (e in c && c[e] === n) || ((c[e] = n), (t = !0));
                  else
                    for (var r in e) {
                      var u = e[r];
                      (r in c && c[r] === u) || ((c[r] = u), (t = !0));
                    }
                  if (t) for (var f = 0; f < o.length; f++) o[f](c);
                  return n;
                },
                2 === e[1].length
                  ? {
                      import: function(e) {
                        return n.import(e, t);
                      },
                      meta: n.createContext(t)
                    }
                  : void 0
              );
              return (
                (i.e = r.execute || function() {}), [e[0], r.setters || []]
              );
            }),
          s = l.then(function(r) {
            return Promise.all(
              r[0].map(function(i, o) {
                var u = r[1][o];
                return Promise.resolve(n.resolve(i, t)).then(function(r) {
                  var i = e(n, r, t);
                  return Promise.resolve(i.I).then(function() {
                    return u && (i.i.push(u), (!i.h && i.I) || u(i.n)), i;
                  });
                });
              })
            ).then(function(e) {
              i.d = e;
            });
          });
        return (
          s.catch(function(e) {
            (i.e = null), (i.er = e);
          }),
          (i = n[f][t] = {
            id: t,
            i: o,
            n: c,
            I: l,
            L: s,
            h: !1,
            d: void 0,
            e: void 0,
            er: void 0,
            E: void 0,
            C: void 0
          })
        );
      })(t, e);
      return (
        n.C ||
        (function(e, n) {
          return (n.C = (function e(n, t, r) {
            if (!r[t.id])
              return (
                (r[t.id] = !0),
                Promise.resolve(t.L).then(function() {
                  return Promise.all(
                    t.d.map(function(t) {
                      return e(n, t, r);
                    })
                  );
                })
              );
          })(e, n, {})
            .then(function() {
              return (function e(n, t, r) {
                if (!r[t.id]) {
                  if (((r[t.id] = !0), !t.e)) {
                    if (t.er) throw t.er;
                    return t.E ? t.E : void 0;
                  }
                  var i;
                  return (
                    t.d.forEach(function(t) {
                      var o = e(n, t, r);
                      o && (i = i || []).push(o);
                    }),
                    i ? Promise.all(i).then(o) : o()
                  );
                }
                function o() {
                  try {
                    var e = t.e.call(d);
                    if (e)
                      return (
                        (e = e.then(function() {
                          (t.C = t.n), (t.E = null);
                        })),
                        (t.E = t.E || e)
                      );
                    t.C = t.n;
                  } catch (e) {
                    throw ((t.er = e), e);
                  } finally {
                    (t.L = t.I = void 0), (t.e = null);
                  }
                }
              })(e, n, {});
            })
            .then(function() {
              return n.n;
            }));
        })(t, n)
      );
    });
  }),
    (s.createContext = function(e) {
      return { url: e };
    }),
    (s.register = function(e, n) {
      l = [e, n];
    }),
    (s.getRegister = function() {
      var e = l;
      return (l = void 0), e;
    });
  var a,
    d = Object.freeze(Object.create(null));
  (t.System = new c()),
    "undefined" != typeof window &&
      window.addEventListener("error", function(e) {
        a = e.error;
      });
  var v = s.register;
  (s.register = function(e, n) {
    (a = void 0), v.call(this, e, n);
  }),
    (s.instantiate = function(e, n) {
      var t = this;
      return new Promise(function(r, i) {
        var o = document.createElement("script");
        (o.charset = "utf-8"),
          (o.async = !0),
          (o.crossOrigin = "anonymous"),
          o.addEventListener("error", function() {
            i(new Error("Error loading " + e + (n ? " from " + n : "")));
          }),
          o.addEventListener("load", function() {
            if ((document.head.removeChild(o), a)) return i(a), (a = void 0);
            r(t.getRegister());
          }),
          (o.src = e),
          document.head.appendChild(o);
      });
    }),
    n &&
      "function" == typeof importScripts &&
      (s.instantiate = function(e) {
        var n = this;
        return new Promise(function(t, r) {
          try {
            importScripts(e);
          } catch (e) {
            r(e);
          }
          t(n.getRegister());
        });
      }),
    (s.resolve = function(n, t) {
      var r = (function(e, n) {
        if (
          (-1 !== e.indexOf("\\") && (e = e.replace(i, "/")),
          "/" === e[0] && "/" === e[1])
        )
          return n.slice(0, n.indexOf(":") + 1) + e;
        if (
          ("." === e[0] &&
            ("/" === e[1] ||
              ("." === e[1] &&
                ("/" === e[2] || (2 === e.length && (e += "/")))) ||
              (1 === e.length && (e += "/")))) ||
          "/" === e[0]
        ) {
          var t,
            r = n.slice(0, n.indexOf(":") + 1);
          if (
            ((t =
              "/" === n[r.length + 1]
                ? "file:" !== r
                  ? (t = n.slice(r.length + 2)).slice(t.indexOf("/") + 1)
                  : n.slice(8)
                : n.slice(r.length + ("/" === n[r.length]))),
            "/" === e[0])
          )
            return n.slice(0, n.length - t.length - 1) + e;
          for (
            var o = t.slice(0, t.lastIndexOf("/") + 1) + e,
              u = [],
              f = -1,
              c = 0;
            c < o.length;
            c++
          )
            -1 !== f
              ? "/" === o[c] && (u.push(o.slice(f, c + 1)), (f = -1))
              : "." === o[c]
              ? "." !== o[c + 1] || ("/" !== o[c + 2] && c + 2 !== o.length)
                ? "/" === o[c + 1] || c + 1 === o.length
                  ? (c += 1)
                  : (f = c)
                : (u.pop(), (c += 2))
              : (f = c);
          return (
            -1 !== f && u.push(o.slice(f)),
            n.slice(0, n.length - t.length) + u.join("")
          );
        }
      })(n, t || e);
      if (!r) {
        if (-1 !== n.indexOf(":")) return Promise.resolve(n);
        throw new Error('Cannot resolve "' + n + (t ? '" from ' + t : '"'));
      }
      return Promise.resolve(r);
    });
})();