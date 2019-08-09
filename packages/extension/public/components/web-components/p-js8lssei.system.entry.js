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
System.register(["./p-83e6ea9f.system.js", "./p-307e3eda.system.js"], function(
  e
) {
  "use strict";
  var t, n, r, o, i;
  return {
    setters: [
      function(e) {
        t = e.r;
        n = e.h;
        r = e.H;
        o = e.f;
      },
      function(e) {
        i = e.a;
      }
    ],
    execute: function() {
      var a = e(
        "ion_tab",
        (function() {
          function e(e) {
            t(this, e);
            this.loaded = false;
            this.active = false;
          }
          e.prototype.componentWillLoad = function() {};
          e.prototype.setActive = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [4, this.prepareLazyLoaded()];
                  case 1:
                    e.sent();
                    this.active = true;
                    return [2];
                }
              });
            });
          };
          e.prototype.prepareLazyLoaded = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(e) {
                if (!this.loaded && this.component != null) {
                  this.loaded = true;
                  try {
                    return [
                      2,
                      i(this.delegate, this.el, this.component, ["ion-page"])
                    ];
                  } catch (e) {
                    console.error(e);
                  }
                }
                return [2, undefined];
              });
            });
          };
          e.prototype.render = function() {
            var e = this,
              t = e.tab,
              o = e.active,
              i = e.component;
            return n(
              r,
              {
                role: "tabpanel",
                "aria-hidden": !o ? "true" : null,
                "aria-labelledby": "tab-button-" + t,
                class: { "ion-page": i === undefined, "tab-hidden": !o }
              },
              n("slot", null)
            );
          };
          Object.defineProperty(e.prototype, "el", {
            get: function() {
              return o(this);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(e, "style", {
            get: function() {
              return ":host(.tab-hidden){display:none!important}";
            },
            enumerable: true,
            configurable: true
          });
          return e;
        })()
      );
    }
  };
});
