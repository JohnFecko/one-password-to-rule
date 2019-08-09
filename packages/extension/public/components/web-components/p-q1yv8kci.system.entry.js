var __awaiter =
  (this && this.__awaiter) ||
  function(t, e, n, r) {
    return new (n || (n = Promise))(function(o, i) {
      function u(t) {
        try {
          c(r.next(t));
        } catch (t) {
          i(t);
        }
      }
      function a(t) {
        try {
          c(r["throw"](t));
        } catch (t) {
          i(t);
        }
      }
      function c(t) {
        t.done
          ? o(t.value)
          : new n(function(e) {
              e(t.value);
            }).then(u, a);
      }
      c((r = r.apply(t, e || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(t, e) {
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
      o,
      i,
      u;
    return (
      (u = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol === "function" &&
        (u[Symbol.iterator] = function() {
          return this;
        }),
      u
    );
    function a(t) {
      return function(e) {
        return c([t, e]);
      };
    }
    function c(u) {
      if (r) throw new TypeError("Generator is already executing.");
      while (n)
        try {
          if (
            ((r = 1),
            o &&
              (i =
                u[0] & 2
                  ? o["return"]
                  : u[0]
                  ? o["throw"] || ((i = o["return"]) && i.call(o), 0)
                  : o.next) &&
              !(i = i.call(o, u[1])).done)
          )
            return i;
          if (((o = 0), i)) u = [u[0] & 2, i.value];
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
              o = u[1];
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
          u = e.call(t, n);
        } catch (t) {
          u = [6, t];
          o = 0;
        } finally {
          r = i = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: true };
    }
  };
System.register(["./p-83e6ea9f.system.js", "./p-05263177.system.js"], function(
  t
) {
  "use strict";
  var e, n, r, o;
  return {
    setters: [
      function(t) {
        e = t.r;
      },
      function(t) {
        n = t.c;
        r = t.d;
        o = t.g;
      }
    ],
    execute: function() {
      var i = t(
        "ion_action_sheet_controller",
        (function() {
          function t(t) {
            e(this, t);
          }
          t.prototype.create = function(t) {
            return n("ion-action-sheet", t);
          };
          t.prototype.dismiss = function(t, e, n) {
            return r(document, t, e, "ion-action-sheet", n);
          };
          t.prototype.getTop = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(t) {
                return [2, o(document, "ion-action-sheet")];
              });
            });
          };
          return t;
        })()
      );
    }
  };
});
