System.register([], function(e) {
  "use strict";
  return {
    execute: function() {
      var r = e("s", function(e) {
        try {
          if (typeof e !== "string" || e === "") {
            return e;
          }
          var r = document.createDocumentFragment();
          var a = document.createElement("div");
          r.appendChild(a);
          a.innerHTML = e;
          i.forEach(function(e) {
            var a = r.querySelectorAll(e);
            for (var i = a.length - 1; i >= 0; i--) {
              var o = a[i];
              if (o.parentNode) {
                o.parentNode.removeChild(o);
              } else {
                r.removeChild(o);
              }
              var l = n(o);
              for (var c = 0; c < l.length; c++) {
                t(l[c]);
              }
            }
          });
          var o = n(r);
          for (var l = 0; l < o.length; l++) {
            t(o[l]);
          }
          var c = document.createElement("div");
          c.appendChild(r);
          var u = c.querySelector("div");
          return u !== null ? u.innerHTML : c.innerHTML;
        } catch (e) {
          console.error(e);
          return "";
        }
      });
      var t = function(e) {
        if (e.nodeType && e.nodeType !== 1) {
          return;
        }
        for (var r = e.attributes.length - 1; r >= 0; r--) {
          var i = e.attributes[r];
          var o = i.name;
          if (!a.includes(o.toLowerCase())) {
            e.removeAttribute(o);
            continue;
          }
          var l = i.value;
          if (l != null && l.toLowerCase().includes("javascript:")) {
            e.removeAttribute(o);
          }
        }
        var c = n(e);
        for (var r = 0; r < c.length; r++) {
          t(c[r]);
        }
      };
      var n = function(e) {
        return e.children != null ? e.children : e.childNodes;
      };
      var a = ["class", "id", "href", "src", "name", "slot"];
      var i = ["script", "style", "iframe", "meta", "link", "object", "embed"];
    }
  };
});