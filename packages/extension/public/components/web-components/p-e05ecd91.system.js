System.register([], function(e) {
  "use strict";
  return {
    execute: function() {
      var r = e("mdTransitionAnimation", function(e, r, n) {
        var a = "translateY";
        var o = "40px";
        var t = "0px";
        var u = n.direction === "back";
        var c = n.enteringEl;
        var s = n.leavingEl;
        var v = i(c);
        var d = v.querySelector("ion-toolbar");
        var l = new e();
        l.addElement(v).beforeRemoveClass("ion-page-invisible");
        if (u) {
          l.duration(n.duration || 200).easing(
            "cubic-bezier(0.47,0,0.745,0.715)"
          );
        } else {
          l.duration(n.duration || 280)
            .easing("cubic-bezier(0.36,0.66,0.04,1)")
            .fromTo(a, o, t, true)
            .fromTo("opacity", 0.01, 1, true);
        }
        if (d) {
          var f = new e();
          f.addElement(d);
          l.add(f);
        }
        if (s && u) {
          l.duration(n.duration || 200).easing(
            "cubic-bezier(0.47,0,0.745,0.715)"
          );
          var m = new e();
          m.addElement(i(s))
            .fromTo(a, t, o)
            .fromTo("opacity", 1, 0);
          l.add(m);
        }
        return Promise.resolve(l);
      });
      var i = function(e) {
        if (e.classList.contains("ion-page")) {
          return e;
        }
        var r = e.querySelector(
          ":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"
        );
        if (r) {
          return r;
        }
        return e;
      };
    }
  };
});
