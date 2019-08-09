var __awaiter =
  (this && this.__awaiter) ||
  function(e, t, n, r) {
    return new (n || (n = Promise))(function(a, i) {
      function u(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function o(e) {
        try {
          c(r["throw"](e));
        } catch (e) {
          i(e);
        }
      }
      function c(e) {
        e.done
          ? a(e.value)
          : new n(function(t) {
              t(e.value);
            }).then(u, o);
      }
      c((r = r.apply(e, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(e, t) {
    var n = {
        label: 0,
        sent: function() {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      },
      r,
      a,
      i,
      u;
    return (
      (u = { next: o(0), throw: o(1), return: o(2) }),
      typeof Symbol === "function" &&
        (u[Symbol.iterator] = function() {
          return this;
        }),
      u
    );
    function o(e) {
      return function(t) {
        return c([e, t]);
      };
    }
    function c(u) {
      if (r) throw new TypeError("Generator is already executing.");
      while (n)
        try {
          if (
            ((r = 1),
            a &&
              (i =
                u[0] & 2
                  ? a["return"]
                  : u[0]
                  ? a["throw"] || ((i = a["return"]) && i.call(a), 0)
                  : a.next) &&
              !(i = i.call(a, u[1])).done)
          )
            return i;
          if (((a = 0), i)) u = [u[0] & 2, i.value];
          switch (u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              n.label++;
              return { value: u[1], done: false };
            case 5:
              n.label++;
              a = u[1];
              u = [0];
              continue;
            case 7:
              u = n.ops.pop();
              n.trys.pop();
              continue;
            default:
              if (
                !((i = n.trys), (i = i.length > 0 && i[i.length - 1])) &&
                (u[0] === 6 || u[0] === 2)
              ) {
                n = 0;
                continue;
              }
              if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                n.label = u[1];
                break;
              }
              if (u[0] === 6 && n.label < i[1]) {
                n.label = i[1];
                i = u;
                break;
              }
              if (i && n.label < i[2]) {
                n.label = i[2];
                n.ops.push(u);
                break;
              }
              if (i[2]) n.ops.pop();
              n.trys.pop();
              continue;
          }
          u = t.call(e, n);
        } catch (e) {
          u = [6, e];
          a = 0;
        } finally {
          r = i = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: true };
    }
  };
System.register([], function(e) {
  "use strict";
  return {
    execute: function() {
      var t = this;
      var n = function(e) {
        var t = e.querySelector("ion-menu-controller");
        if (!t) {
          return Promise.resolve(undefined);
        }
        return t.componentOnReady();
      };
      var r = e("t", function(e) {
        return __awaiter(t, void 0, void 0, function() {
          var t, r;
          return __generator(this, function(a) {
            switch (a.label) {
              case 0:
                return [4, n(document)];
              case 1:
                t = a.sent();
                if (!t) return [3, 3];
                return [4, t.get(e)];
              case 2:
                r = a.sent();
                if (r) {
                  t.toggle(e);
                }
                a.label = 3;
              case 3:
                return [2];
            }
          });
        });
      });
      var a = e("u", function(e) {
        return __awaiter(t, void 0, void 0, function() {
          var t, r, a;
          return __generator(this, function(i) {
            switch (i.label) {
              case 0:
                return [4, n(document)];
              case 1:
                t = i.sent();
                if (!t) return [3, 5];
                return [4, t.get(e)];
              case 2:
                r = i.sent();
                a = r;
                if (!a) return [3, 4];
                return [4, r.isActive()];
              case 3:
                a = i.sent();
                i.label = 4;
              case 4:
                if (a) {
                  return [2, true];
                }
                i.label = 5;
              case 5:
                return [2, false];
            }
          });
        });
      });
    }
  };
});
