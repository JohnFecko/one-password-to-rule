System.register([], function(n) {
  "use strict";
  return {
    execute: function() {
      var i = n("c", function() {
        var n = window.TapticEngine;
        if (n) {
          n.selection();
        }
      });
      var e = n("h", function() {
        var n = window.TapticEngine;
        if (n) {
          n.gestureSelectionStart();
        }
      });
      var t = n("a", function() {
        var n = window.TapticEngine;
        if (n) {
          n.gestureSelectionChanged();
        }
      });
      var c = n("b", function() {
        var n = window.TapticEngine;
        if (n) {
          n.gestureSelectionEnd();
        }
      });
    }
  };
});
