System.register(["./p-83e6ea9f.system.js"], function(t) {
  "use strict";
  var n, e;
  return {
    setters: [
      function(t) {
        n = t.k;
        e = t.w;
      }
    ],
    execute: function() {
      var r = t("startStatusTap", function() {
        var t = window;
        t.addEventListener("statusTap", function() {
          n(function() {
            var n = t.innerWidth;
            var r = t.innerHeight;
            var i = document.elementFromPoint(n / 2, r / 2);
            if (!i) {
              return;
            }
            var o = i.closest("ion-content");
            if (o) {
              o.componentOnReady().then(function() {
                e(function() {
                  return o.scrollToTop(300);
                });
              });
            }
          });
        });
      });
    }
  };
});
