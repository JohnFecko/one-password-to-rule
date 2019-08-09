var __awaiter =
  (this && this.__awaiter) ||
  function(e, t, n, r) {
    return new (n || (n = Promise))(function(o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        try {
          c(r["throw"](e));
        } catch (e) {
          i(e);
        }
      }
      function c(e) {
        e.done
          ? o(e.value)
          : new n(function(t) {
              t(e.value);
            }).then(a, u);
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
      o,
      i,
      a;
    return (
      (a = { next: u(0), throw: u(1), return: u(2) }),
      typeof Symbol === "function" &&
        (a[Symbol.iterator] = function() {
          return this;
        }),
      a
    );
    function u(e) {
      return function(t) {
        return c([e, t]);
      };
    }
    function c(a) {
      if (r) throw new TypeError("Generator is already executing.");
      while (n)
        try {
          if (
            ((r = 1),
            o &&
              (i =
                a[0] & 2
                  ? o["return"]
                  : a[0]
                  ? o["throw"] || ((i = o["return"]) && i.call(o), 0)
                  : o.next) &&
              !(i = i.call(o, a[1])).done)
          )
            return i;
          if (((o = 0), i)) a = [a[0] & 2, i.value];
          switch (a[0]) {
            case 0:
            case 1:
              i = a;
              break;
            case 4:
              n.label++;
              return { value: a[1], done: false };
            case 5:
              n.label++;
              o = a[1];
              a = [0];
              continue;
            case 7:
              a = n.ops.pop();
              n.trys.pop();
              continue;
            default:
              if (
                !((i = n.trys), (i = i.length > 0 && i[i.length - 1])) &&
                (a[0] === 6 || a[0] === 2)
              ) {
                n = 0;
                continue;
              }
              if (a[0] === 3 && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                n.label = a[1];
                break;
              }
              if (a[0] === 6 && n.label < i[1]) {
                n.label = i[1];
                i = a;
                break;
              }
              if (i && n.label < i[2]) {
                n.label = i[2];
                n.ops.push(a);
                break;
              }
              if (i[2]) n.ops.pop();
              n.trys.pop();
              continue;
          }
          a = t.call(e, n);
        } catch (e) {
          a = [6, e];
          o = 0;
        } finally {
          r = i = 0;
        }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: true };
    }
  };
System.register([], function(e) {
  "use strict";
  return {
    execute: function() {
      var t = this;
      var n = e("a", function(e, n, r, o, i) {
        return __awaiter(t, void 0, void 0, function() {
          var t;
          return __generator(this, function(a) {
            switch (a.label) {
              case 0:
                if (e) {
                  return [2, e.attachViewToDom(n, r, i, o)];
                }
                if (typeof r !== "string" && !(r instanceof HTMLElement)) {
                  throw new Error("framework delegate is missing");
                }
                t =
                  typeof r === "string"
                    ? n.ownerDocument && n.ownerDocument.createElement(r)
                    : r;
                if (o) {
                  o.forEach(function(e) {
                    return t.classList.add(e);
                  });
                }
                if (i) {
                  Object.assign(t, i);
                }
                n.appendChild(t);
                if (!t.componentOnReady) return [3, 2];
                return [4, t.componentOnReady()];
              case 1:
                a.sent();
                a.label = 2;
              case 2:
                return [2, t];
            }
          });
        });
      });
      var r = e("d", function(e, t) {
        if (t) {
          if (e) {
            var n = t.parentElement;
            return e.removeViewFromDom(n, t);
          }
          t.remove();
        }
        return Promise.resolve();
      });
    }
  };
});
