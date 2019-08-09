System.register(["./p-83e6ea9f.system.js"], function(t) {
  "use strict";
  var e, r, n, i, u;
  return {
    setters: [
      function(t) {
        e = t.r;
        r = t.e;
        n = t.h;
        i = t.H;
        u = t.f;
      }
    ],
    execute: function() {
      var a = t(
        "ion_fab_list",
        (function() {
          function t(t) {
            e(this, t);
            this.activated = false;
            this.side = "bottom";
          }
          t.prototype.activatedChanged = function(t) {
            var e = Array.from(this.el.querySelectorAll("ion-fab-button"));
            var r = t ? 30 : 0;
            e.forEach(function(e, n) {
              setTimeout(function() {
                return (e.show = t);
              }, n * r);
            });
          };
          t.prototype.render = function() {
            var t;
            var e = r(this);
            return n(
              i,
              {
                class:
                  ((t = {}),
                  (t[e] = true),
                  (t["fab-list-active"] = this.activated),
                  (t["fab-list-side-" + this.side] = true),
                  t)
              },
              n("slot", null)
            );
          };
          Object.defineProperty(t.prototype, "el", {
            get: function() {
              return u(this);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(t, "watchers", {
            get: function() {
              return { activated: ["activatedChanged"] };
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(t, "style", {
            get: function() {
              return ":host{margin-left:0;margin-right:0;margin-top:66px;margin-bottom:66px;display:none;position:absolute;top:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:-ms-flexbox;display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;-webkit-transform:scale(0);transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list),:host(.fab-list-side-top) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:5px;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted(.fab-button-in-list.fab-button-show){-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.fab-list-side-start){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;right:0;-ms-flex-direction:row-reverse;flex-direction:row-reverse}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-start){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-start,:host-context([dir=rtl]):host(.fab-list-side-start){left:unset;right:unset;left:0}:host(.fab-list-side-end){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;left:0;-ms-flex-direction:row;flex-direction:row}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-end,:host-context([dir=rtl]):host(.fab-list-side-end){left:unset;right:unset;right:0}";
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
