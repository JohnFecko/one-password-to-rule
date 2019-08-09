System.register(["./p-83e6ea9f.system.js"], function(e) {
  "use strict";
  var t, r, n, u;
  return {
    setters: [
      function(e) {
        t = e.r;
        r = e.e;
        n = e.h;
        u = e.H;
      }
    ],
    execute: function() {
      var s = e(
        "ion_header",
        (function() {
          function e(e) {
            t(this, e);
            this.translucent = false;
          }
          e.prototype.render = function() {
            var e;
            var t = r(this);
            return n(u, {
              role: "banner",
              class:
                ((e = {}),
                (e[t] = true),
                (e["header-" + t] = true),
                (e["header-translucent"] = this.translucent),
                (e["header-translucent-" + t] = this.translucent),
                e)
            });
          };
          Object.defineProperty(e, "style", {
            get: function() {
              return 'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-md[no-border]:after{display:none}';
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
