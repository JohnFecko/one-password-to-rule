System.register(["./p-83e6ea9f.system.js", "./p-ee747906.system.js"], function(
  e
) {
  "use strict";
  var t;
  return {
    setters: [
      function() {},
      function(e) {
        t = e.createGesture;
      }
    ],
    execute: function() {
      var r = e("createSwipeBackGesture", function(e, r, a, n, i) {
        var s = e.ownerDocument.defaultView;
        var v = function(e) {
          return e.startX <= 50 && r();
        };
        var u = function(e) {
          var t = e.deltaX;
          var r = t / s.innerWidth;
          n(r);
        };
        var o = function(e) {
          var t = e.deltaX;
          var r = s.innerWidth;
          var a = t / r;
          var n = e.velocityX;
          var v = r / 2;
          var u = n >= 0 && (n > 0.2 || e.deltaX > v);
          var o = u ? 1 - a : a;
          var c = o * r;
          var f = 0;
          if (c > 5) {
            var d = c / Math.abs(n);
            f = Math.min(d, 300);
          }
          i(u, a, f);
        };
        return t({
          el: e,
          gestureName: "goback-swipe",
          gesturePriority: 40,
          threshold: 10,
          canStart: v,
          onStart: a,
          onMove: u,
          onEnd: o
        });
      });
    }
  };
});
