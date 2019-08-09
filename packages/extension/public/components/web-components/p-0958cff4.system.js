System.register([], function(e) {
  "use strict";
  return {
    execute: function() {
      var r = e("r", function(e) {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(e);
        } else {
          setTimeout(e, 32);
        }
      });
      var n = e("h", function(e) {
        return !!e.shadowRoot && !!e.attachShadow;
      });
      var t = e("f", function(e) {
        var r = e.closest("ion-item");
        if (r) {
          return r.querySelector("ion-label");
        }
        return null;
      });
      var a = e("a", function(e, r, t, a, i) {
        if (e || n(r)) {
          var u = r.querySelector("input.aux-input");
          if (!u) {
            u = r.ownerDocument.createElement("input");
            u.type = "hidden";
            u.classList.add("aux-input");
            r.appendChild(u);
          }
          u.disabled = i;
          u.name = t;
          u.value = a || "";
        }
      });
      var i = e("c", function(e, r, n) {
        return Math.max(e, Math.min(r, n));
      });
      var u = e("b", function(e, r) {
        if (!e) {
          var n = "ASSERT: " + r;
          console.error(n);
          debugger;
          throw new Error(n);
        }
      });
      var o = e("n", function(e) {
        return e.timeStamp || Date.now();
      });
      var c = e("p", function(e) {
        if (e) {
          var r = e.changedTouches;
          if (r && r.length > 0) {
            var n = r[0];
            return { x: n.clientX, y: n.clientY };
          }
          if (e.pageX !== undefined) {
            return { x: e.pageX, y: e.pageY };
          }
        }
        return { x: 0, y: 0 };
      });
      var l = e("i", function(e) {
        var r = document.dir === "rtl";
        switch (e) {
          case "start":
            return r;
          case "end":
            return !r;
          default:
            throw new Error(
              '"' +
                e +
                '" is not a valid value for [side]. Use "start" or "end" instead.'
            );
        }
      });
      var d = e("d", function(e, r) {
        var n = e._original || e;
        return { _original: e, emit: f(n.emit.bind(n), r) };
      });
      var f = e("e", function(e, r) {
        if (r === void 0) {
          r = 0;
        }
        var n;
        return function() {
          var t = [];
          for (var a = 0; a < arguments.length; a++) {
            t[a] = arguments[a];
          }
          clearTimeout(n);
          n = setTimeout.apply(void 0, [e, r].concat(t));
        };
      });
    }
  };
});
