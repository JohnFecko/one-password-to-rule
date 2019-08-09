System.register([], function() {
  "use strict";
  return {
    execute: function() {
      var e = (function() {
        function e() {
          this.start = 0;
          this.end = 0;
          this.previous = null;
          this.parent = null;
          this.rules = null;
          this.parsedCssText = "";
          this.cssText = "";
          this.atRule = false;
          this.type = 0;
          this.keyframesName = "";
          this.selector = "";
          this.parsedSelector = "";
        }
        return e;
      })();
      function t(e) {
        e = r(e);
        return s(n(e), e);
      }
      function r(e) {
        return e.replace(l.comments, "").replace(l.port, "");
      }
      function n(t) {
        var r = new e();
        r["start"] = 0;
        r["end"] = t.length;
        var n = r;
        for (var s = 0, i = t.length; s < i; s++) {
          if (t[s] === o) {
            if (!n["rules"]) {
              n["rules"] = [];
            }
            var a = n;
            var l = a["rules"][a["rules"].length - 1] || null;
            n = new e();
            n["start"] = s + 1;
            n["parent"] = a;
            n["previous"] = l;
            a["rules"].push(n);
          } else if (t[s] === u) {
            n["end"] = s + 1;
            n = n["parent"] || r;
          }
        }
        return r;
      }
      function s(e, t) {
        var r = t.substring(e["start"], e["end"] - 1);
        e["parsedCssText"] = e["cssText"] = r.trim();
        if (e.parent) {
          var n = e.previous ? e.previous["end"] : e.parent["start"];
          r = t.substring(n, e["start"] - 1);
          r = i(r);
          r = r.replace(l.multipleSpaces, " ");
          r = r.substring(r.lastIndexOf(";") + 1);
          var o = (e["parsedSelector"] = e["selector"] = r.trim());
          e["atRule"] = o.indexOf(p) === 0;
          if (e["atRule"]) {
            if (o.indexOf(f) === 0) {
              e["type"] = a.MEDIA_RULE;
            } else if (o.match(l.keyframesRule)) {
              e["type"] = a.KEYFRAMES_RULE;
              e["keyframesName"] = e["selector"].split(l.multipleSpaces).pop();
            }
          } else {
            if (o.indexOf(c) === 0) {
              e["type"] = a.MIXIN_RULE;
            } else {
              e["type"] = a.STYLE_RULE;
            }
          }
        }
        var u = e["rules"];
        if (u) {
          for (var v = 0, h = u.length, m = void 0; v < h && (m = u[v]); v++) {
            s(m, t);
          }
        }
        return e;
      }
      function i(e) {
        return e.replace(/\\([0-9a-f]{1,6})\s/gi, function() {
          var e = arguments[1],
            t = 6 - e.length;
          while (t--) {
            e = "0" + e;
          }
          return "\\" + e;
        });
      }
      var a = {
        STYLE_RULE: 1,
        KEYFRAMES_RULE: 7,
        MEDIA_RULE: 4,
        MIXIN_RULE: 1e3
      };
      var o = "{";
      var u = "}";
      var l = {
        comments: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
        port: /@import[^;]*;/gim,
        customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
        varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        keyframesRule: /^@[^\s]*keyframes/,
        multipleSpaces: /\s+/g
      };
      var c = "--";
      var f = "@media";
      var p = "@";
      function v(e, t, r) {
        e["lastIndex"] = 0;
        var n = t.substring(r).match(e);
        if (n) {
          var s = r + n["index"];
          return { start: s, end: s + n[0].length };
        }
        return null;
      }
      var h = /\bvar\(/;
      var m = /\B--[\w-]+\s*:/;
      var d = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim;
      var g = /^[\t ]+\n/gm;
      function y(e, t, r) {
        if (e[t]) {
          return e[t];
        }
        if (r) {
          return M(r, e);
        }
        return "";
      }
      function S(e, t) {
        var r = 0;
        var n = t;
        for (; n < e.length; n++) {
          var s = e[n];
          if (s === "(") {
            r++;
          } else if (s === ")") {
            r--;
            if (r <= 0) {
              return n + 1;
            }
          }
        }
        return n;
      }
      function b(e, t) {
        var r = v(h, e, t);
        if (!r) {
          return null;
        }
        var n = S(e, r.start);
        var s = e.substring(r.end, n - 1);
        var i = s.split(","),
          a = i[0],
          o = i.slice(1);
        return {
          start: r.start,
          end: n,
          propName: a.trim(),
          fallback: o.length > 0 ? o.join(",").trim() : undefined
        };
      }
      function E(e, t, r) {
        var n = b(e, r);
        if (!n) {
          t.push(e.substring(r, e.length));
          return e.length;
        }
        var s = n.propName;
        var i = n.fallback != null ? x(n.fallback) : undefined;
        t.push(e.substring(r, n.start), function(e) {
          return y(e, s, i);
        });
        return n.end;
      }
      function M(e, t) {
        var r = "";
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          r += typeof s === "string" ? s : s(t);
        }
        return r;
      }
      function w(e, t) {
        var r = false;
        var n = false;
        var s = t;
        for (; s < e.length; s++) {
          var i = e[s];
          if (r) {
            if (n && i === '"') {
              r = false;
            }
            if (!n && i === "'") {
              r = false;
            }
          } else {
            if (i === '"') {
              r = true;
              n = true;
            } else if (i === "'") {
              r = true;
              n = false;
            } else if (i === ";") {
              return s + 1;
            } else if (i === "}") {
              return s;
            }
          }
        }
        return s;
      }
      function L(e) {
        var t = "";
        var r = 0;
        while (true) {
          var n = v(m, e, r);
          var s = n ? n.start : e.length;
          t += e.substring(r, s);
          if (n) {
            r = w(e, s);
          } else {
            break;
          }
        }
        return t;
      }
      function x(e) {
        var t = 0;
        e = e.replace(d, "");
        e = L(e).replace(g, "");
        var r = [];
        while (t < e.length) {
          t = E(e, r, t);
        }
        return r;
      }
      function R(e) {
        var t = {};
        e.forEach(function(e) {
          e.declarations.forEach(function(e) {
            t[e.prop] = e.value;
          });
        });
        var r = {};
        var n = Object.entries(t);
        var s = function(e) {
          var t = false;
          n.forEach(function(e) {
            var n = e[0],
              s = e[1];
            var i = M(s, r);
            if (i !== r[n]) {
              r[n] = i;
              t = true;
            }
          });
          if (!t) {
            return "break";
          }
        };
        for (var i = 0; i < 10; i++) {
          var a = s();
          if (a === "break") break;
        }
        return r;
      }
      function T(e, t) {
        if (t === void 0) {
          t = 0;
        }
        if (!e.rules) {
          return [];
        }
        var r = [];
        e.rules
          .filter(function(e) {
            return e.type === a.STYLE_RULE;
          })
          .forEach(function(e) {
            var n = H(e.cssText);
            if (n.length > 0) {
              e.parsedSelector.split(",").forEach(function(e) {
                e = e.trim();
                r.push({
                  selector: e,
                  declarations: n,
                  specificity: k(),
                  nu: t
                });
              });
            }
            t++;
          });
        return r;
      }
      function k(e) {
        return 1;
      }
      var _ = "!important";
      var I = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;
      function H(e) {
        var t = [];
        var r;
        while ((r = I.exec(e.trim()))) {
          var n = A(r[2]),
            s = n.value,
            i = n.important;
          t.push({ prop: r[1].trim(), value: x(s), important: i });
        }
        return t;
      }
      function A(e) {
        var t = /\s+/gim;
        e = e.replace(t, " ").trim();
        var r = e.endsWith(_);
        if (r) {
          e = e.substr(0, e.length - _.length).trim();
        }
        return { value: e, important: r };
      }
      function C(e, t, r) {
        var n = r.concat(U(t, e));
        var s = N(n);
        var i = s.filter(function(t) {
          return $(e, t.selector);
        });
        return O(i);
      }
      function U(e, t) {
        var r = [];
        while (t) {
          var n = e.get(t);
          if (n) {
            r.push(n);
          }
          t = t.parentElement;
        }
        return r;
      }
      function N(e) {
        var t = [];
        e.forEach(function(e) {
          t.push.apply(t, e.selectors);
        });
        return t;
      }
      function O(e) {
        e.sort(function(e, t) {
          if (e.specificity === t.specificity) {
            return e.nu - t.nu;
          }
          return e.specificity - t.specificity;
        });
        return e;
      }
      function $(e, t) {
        return t === ":root" || t === "html" || e.matches(t);
      }
      function G(e) {
        var r = t(e);
        var n = x(e);
        var s = T(r);
        return {
          original: e,
          template: n,
          selectors: s,
          usesCssVars: n.length > 1
        };
      }
      function V(e, t) {
        var r = G(t.innerHTML);
        r.styleEl = t;
        e.push(r);
      }
      function Y(e) {
        var t = N(e);
        var r = R(t);
        e.forEach(function(e) {
          if (e.usesCssVars) {
            e.styleEl.innerHTML = M(e.template, r);
          }
        });
      }
      function j(e, t) {
        var r = e.template.map(function(r) {
          return typeof r === "string" ? P(r, e.scopeId, t) : r;
        });
        var n = e.selectors.map(function(r) {
          return Object.assign({}, r, {
            selector: P(r.selector, e.scopeId, t)
          });
        });
        return Object.assign({}, e, { template: r, selectors: n, scopeId: t });
      }
      function P(e, t, r) {
        e = q(e, "\\." + t, "." + r);
        return e;
      }
      function q(e, t, r) {
        return e.replace(new RegExp(t, "g"), r);
      }
      function F(e, t) {
        B(e, t);
        return W(e, t);
      }
      function W(e, t) {
        var r = [];
        var n = e.querySelectorAll('link[rel="stylesheet"][href]');
        for (var s = 0; s < n.length; s++) {
          r.push(D(e, t, n[s]));
        }
        return Promise.all(r);
      }
      function B(e, t) {
        var r = e.querySelectorAll("style:not([data-styles])");
        for (var n = 0; n < r.length; n++) {
          V(t, r[n]);
        }
      }
      function D(e, t, r) {
        var n = r.href;
        return fetch(n)
          .then(function(e) {
            return e.text();
          })
          .then(function(s) {
            if (X(s) && r.parentNode) {
              if (Z(s)) {
                s = J(s, n);
              }
              var i = e.createElement("style");
              i.setAttribute("data-styles", "");
              i.innerHTML = s;
              V(t, i);
              r.parentNode.insertBefore(i, r);
              r.remove();
            }
          })
          .catch(function(e) {
            console.error(e);
          });
      }
      var K = /[\s;{]--[-a-zA-Z0-9]+\s*:/m;
      function X(e) {
        return e.indexOf("var(") > -1 || K.test(e);
      }
      var z = /url[\s]*\([\s]*['"]?(?![http|\/])([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;
      function Z(e) {
        z.lastIndex = 0;
        return z.test(e);
      }
      function J(e, t) {
        var r = t.replace(/[^\/]*$/, "");
        return e.replace(z, function(e, t) {
          var n = r + t;
          return e.replace(t, n);
        });
      }
      var Q = (function() {
        function e(e, t) {
          this.win = e;
          this.doc = t;
          this.count = 0;
          this.hostStyleMap = new WeakMap();
          this.hostScopeMap = new WeakMap();
          this.globalScopes = [];
          this.scopesMap = new Map();
        }
        e.prototype.initShim = function() {
          var e = this;
          return new Promise(function(t) {
            e.win.requestAnimationFrame(function() {
              F(e.doc, e.globalScopes).then(function() {
                return t();
              });
            });
          });
        };
        e.prototype.addLink = function(e) {
          var t = this;
          return D(this.doc, this.globalScopes, e).then(function() {
            t.updateGlobal();
          });
        };
        e.prototype.addGlobalStyle = function(e) {
          V(this.globalScopes, e);
          this.updateGlobal();
        };
        e.prototype.createHostStyle = function(e, t, r, n) {
          if (this.hostScopeMap.has(e)) {
            throw new Error("host style already created");
          }
          var s = this.registerHostTemplate(r, t, n);
          var i = this.doc.createElement("style");
          if (!s.usesCssVars) {
            i.innerHTML = r;
          } else if (n) {
            i["s-sc"] = t = s.scopeId + "-" + this.count;
            i.innerHTML = "/*needs update*/";
            this.hostStyleMap.set(e, i);
            this.hostScopeMap.set(e, j(s, t));
            this.count++;
          } else {
            s.styleEl = i;
            if (!s.usesCssVars) {
              i.innerHTML = M(s.template, {});
            }
            this.globalScopes.push(s);
            this.updateGlobal();
            this.hostScopeMap.set(e, s);
          }
          return i;
        };
        e.prototype.removeHost = function(e) {
          var t = this.hostStyleMap.get(e);
          if (t) {
            t.remove();
          }
          this.hostStyleMap.delete(e);
          this.hostScopeMap.delete(e);
        };
        e.prototype.updateHost = function(e) {
          var t = this.hostScopeMap.get(e);
          if (t && t.usesCssVars && t.isScoped) {
            var r = this.hostStyleMap.get(e);
            if (r) {
              var n = C(e, this.hostScopeMap, this.globalScopes);
              var s = R(n);
              r.innerHTML = M(t.template, s);
            }
          }
        };
        e.prototype.updateGlobal = function() {
          Y(this.globalScopes);
        };
        e.prototype.registerHostTemplate = function(e, t, r) {
          var n = this.scopesMap.get(t);
          if (!n) {
            n = G(e);
            n.scopeId = t;
            n.isScoped = r;
            this.scopesMap.set(t, n);
          }
          return n;
        };
        return e;
      })();
      var ee = window;
      function te() {
        return !(
          ee.CSS &&
          ee.CSS.supports &&
          ee.CSS.supports("color", "var(--c)")
        );
      }
      if (!ee.__stencil_cssshim && te()) {
        ee.__stencil_cssshim = new Q(ee, document);
      }
    }
  };
});
