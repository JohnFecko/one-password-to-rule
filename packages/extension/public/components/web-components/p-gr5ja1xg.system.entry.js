System.register(["./p-83e6ea9f.system.js"], function(t) {
  "use strict";
  var e, r, n, o;
  return {
    setters: [
      function(t) {
        e = t.r;
        r = t.e;
        n = t.h;
        o = t.H;
      }
    ],
    execute: function() {
      var u = t(
        "ion_footer",
        (function() {
          function t(t) {
            e(this, t);
            this.translucent = false;
          }
          t.prototype.render = function() {
            var t;
            var e = r(this);
            var u = this.translucent;
            return n(o, {
              role: "contentinfo",
              class:
                ((t = {}),
                (t[e] = true),
                (t["footer-" + e] = true),
                (t["footer-translucent"] = u),
                (t["footer-translucent-" + e] = u),
                t)
            });
          };
          Object.defineProperty(t, "style", {
            get: function() {
              return 'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md[no-border]:before{display:none}';
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
