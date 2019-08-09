var __awaiter =
  (this && this.__awaiter) ||
  function(t, n, e, r) {
    return new (e || (e = Promise))(function(o, i) {
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
          : new e(function(n) {
              n(t.value);
            }).then(u, a);
      }
      c((r = r.apply(t, n || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(t, n) {
    var e = {
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
      return function(n) {
        return c([t, n]);
      };
    }
    function c(u) {
      if (r) throw new TypeError("Generator is already executing.");
      while (e)
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
              e.label++;
              return { value: u[1], done: false };
            case 5:
              e.label++;
              o = u[1];
              u = [0];
              continue;
            case 7:
              u = e.ops.pop();
              e.trys.pop();
              continue;
            default:
              if (
                !((i = e.trys), (i = i.length > 0 && i[i.length - 1])) &&
                (u[0] === 6 || u[0] === 2)
              ) {
                e = 0;
                continue;
              }
              if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                e.label = u[1];
                break;
              }
              if (u[0] === 6 && e.label < i[1]) {
                e.label = i[1];
                i = u;
                break;
              }
              if (i && e.label < i[2]) {
                e.label = i[2];
                e.ops.push(u);
                break;
              }
              if (i[2]) e.ops.pop();
              e.trys.pop();
              continue;
          }
          u = n.call(t, e);
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
  var n, e, r, o;
  return {
    setters: [
      function(t) {
        n = t.r;
      },
      function(t) {
        e = t.c;
        r = t.d;
        o = t.g;
      }
    ],
    execute: function() {
      var i = t(
        "ion_loading_controller",
        (function() {
          function t(t) {
            n(this, t);
          }
          t.prototype.create = function(t) {
            return e("ion-loading", t);
          };
          t.prototype.dismiss = function(t, n, e) {
            return r(document, t, n, "ion-loading", e);
          };
          t.prototype.getTop = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(t) {
                return [2, o(document, "ion-loading")];
              });
            });
          };
          return t;
        })()
      );
    }
  };
});
