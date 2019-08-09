System.register(["./p-83e6ea9f.system.js", "./p-0958cff4.system.js"], function(
  t,
  e
) {
  "use strict";
  var n, r, o, i, s, u, a, c;
  return {
    setters: [
      function(t) {
        n = t.r;
        r = t.e;
        o = t.h;
        i = t.c;
        s = t.H;
        u = t.f;
        a = t.l;
      },
      function(t) {
        c = t.r;
      }
    ],
    execute: function() {
      var f = t(
        "ion_app",
        (function() {
          function t(t) {
            n(this, t);
          }
          t.prototype.componentDidLoad = function() {
            c(function() {
              var t = a(window, "hybrid");
              if (!i.getBoolean("_testing")) {
                e.import("./p-ee7c86d3.system.js").then(function(t) {
                  return t.startTapClick(i);
                });
              }
              if (i.getBoolean("statusTap", t)) {
                e.import("./p-75ddc9f2.system.js").then(function(t) {
                  return t.startStatusTap();
                });
              }
              if (i.getBoolean("inputShims", p())) {
                e.import("./p-c1c59137.system.js").then(function(t) {
                  return t.startInputShims(i);
                });
              }
              if (i.getBoolean("hardwareBackButton", t)) {
                e.import("./p-688399bb.system.js").then(function(t) {
                  return t.startHardwareBackButton();
                });
              }
              e.import("./p-c541495d.system.js").then(function(t) {
                return t.startFocusVisible();
              });
            });
          };
          t.prototype.render = function() {
            var t;
            var e = r(this);
            return o(s, {
              class:
                ((t = {}),
                (t[e] = true),
                (t["ion-page"] = true),
                (t["force-statusbar-padding"] = i.getBoolean(
                  "_forceStatusbarPadding"
                )),
                t)
            });
          };
          Object.defineProperty(t.prototype, "el", {
            get: function() {
              return u(this);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(t, "style", {
            get: function() {
              return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
            },
            enumerable: true,
            configurable: true
          });
          return t;
        })()
      );
      var p = function() {
        return a(window, "ios") && a(window, "mobile");
      };
    }
  };
});
