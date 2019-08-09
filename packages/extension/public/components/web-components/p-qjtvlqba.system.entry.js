System.register(["./p-83e6ea9f.system.js", "./p-6a603f00.system.js"], function(
  t
) {
  "use strict";
  var e, r, n, o, i, u;
  return {
    setters: [
      function(t) {
        e = t.r;
        r = t.e;
        n = t.h;
        o = t.H;
        i = t.f;
      },
      function(t) {
        u = t.c;
      }
    ],
    execute: function() {
      var s = t(
        "ion_title",
        (function() {
          function t(t) {
            e(this, t);
          }
          t.prototype.getMode = function() {
            var t = r(this);
            var e = this.el.closest("ion-toolbar");
            return (e && e.mode) || t;
          };
          t.prototype.render = function() {
            var t;
            var e = this.getMode();
            return n(
              o,
              {
                class: Object.assign(
                  ((t = {}), (t[e] = true), (t["title-" + e] = true), t),
                  u(this.color)
                )
              },
              n("div", { class: "toolbar-title" }, n("slot", null))
            );
          };
          Object.defineProperty(t.prototype, "el", {
            get: function() {
              return i(this);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(t, "style", {
            get: function() {
              return ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;color:var(--color)}:host,:host(.title-ios){-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.title-ios){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios,:host-context([dir=rtl]):host(.title-ios){left:unset;right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}";
            },
            enumerable: true,
            configurable: true
          });
          return t;
        })()
      );
    }
  };
});
