var __awaiter =
  (this && this.__awaiter) ||
  function(r, t, n, e) {
    return new (n || (n = Promise))(function(u, i) {
      function o(r) {
        try {
          l(e.next(r));
        } catch (r) {
          i(r);
        }
      }
      function a(r) {
        try {
          l(e["throw"](r));
        } catch (r) {
          i(r);
        }
      }
      function l(r) {
        r.done
          ? u(r.value)
          : new n(function(t) {
              t(r.value);
            }).then(o, a);
      }
      l((e = e.apply(r, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(r, t) {
    var n = {
        label: 0,
        sent: function() {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      },
      e,
      u,
      i,
      o;
    return (
      (o = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol === "function" &&
        (o[Symbol.iterator] = function() {
          return this;
        }),
      o
    );
    function a(r) {
      return function(t) {
        return l([r, t]);
      };
    }
    function l(o) {
      if (e) throw new TypeError("Generator is already executing.");
      while (n)
        try {
          if (
            ((e = 1),
            u &&
              (i =
                o[0] & 2
                  ? u["return"]
                  : o[0]
                  ? u["throw"] || ((i = u["return"]) && i.call(u), 0)
                  : u.next) &&
              !(i = i.call(u, o[1])).done)
          )
            return i;
          if (((u = 0), i)) o = [o[0] & 2, i.value];
          switch (o[0]) {
            case 0:
            case 1:
              i = o;
              break;
            case 4:
              n.label++;
              return { value: o[1], done: false };
            case 5:
              n.label++;
              u = o[1];
              o = [0];
              continue;
            case 7:
              o = n.ops.pop();
              n.trys.pop();
              continue;
            default:
              if (
                !((i = n.trys), (i = i.length > 0 && i[i.length - 1])) &&
                (o[0] === 6 || o[0] === 2)
              ) {
                n = 0;
                continue;
              }
              if (o[0] === 3 && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                n.label = o[1];
                break;
              }
              if (o[0] === 6 && n.label < i[1]) {
                n.label = i[1];
                i = o;
                break;
              }
              if (i && n.label < i[2]) {
                n.label = i[2];
                n.ops.push(o);
                break;
              }
              if (i[2]) n.ops.pop();
              n.trys.pop();
              continue;
          }
          o = t.call(r, n);
        } catch (r) {
          o = [6, r];
          u = 0;
        } finally {
          e = i = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: true };
    }
  };
System.register([], function(r) {
  "use strict";
  return {
    execute: function() {
      var t = this;
      var n = r("h", function(r, t) {
        return t.closest(r) !== null;
      });
      var e = r("c", function(r) {
        var t;
        return typeof r === "string" && r.length > 0
          ? ((t = { "ion-color": true }), (t["ion-color-" + r] = true), t)
          : undefined;
      });
      var u = function(r) {
        if (r !== undefined) {
          var t = Array.isArray(r) ? r : r.split(" ");
          return t
            .filter(function(r) {
              return r != null;
            })
            .map(function(r) {
              return r.trim();
            })
            .filter(function(r) {
              return r !== "";
            });
        }
        return [];
      };
      var i = r("g", function(r) {
        var t = {};
        u(r).forEach(function(r) {
          return (t[r] = true);
        });
        return t;
      });
      var o = /^[a-z][a-z0-9+\-.]*:/;
      var a = r("o", function(r, n, e) {
        return __awaiter(t, void 0, void 0, function() {
          var t;
          return __generator(this, function(u) {
            if (r != null && r[0] !== "#" && !o.test(r)) {
              t = document.querySelector("ion-router");
              if (t) {
                if (n != null) {
                  n.preventDefault();
                }
                return [2, t.push(r, e)];
              }
            }
            return [2, false];
          });
        });
      });
    }
  };
});
