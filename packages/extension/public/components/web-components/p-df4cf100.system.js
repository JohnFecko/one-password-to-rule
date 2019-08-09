System.register([], function(e) {
  "use strict";
  return {
    execute: function() {
      var r = e("shadow", function(e) {
        return e.shadowRoot || e;
      });
      var o = e("iosTransitionAnimation", function(e, o, t) {
        var a = 540;
        var n = "cubic-bezier(0.32,0.72,0,1)";
        var l = "opacity";
        var d = "transform";
        var i = "translateX";
        var f = "0%";
        var u = 0.8;
        var c = t.direction === "back";
        var m = o.ownerDocument.dir === "rtl";
        var s = m ? "-99.5%" : "99.5%";
        var v = m ? "33%" : "-33%";
        var y = t.enteringEl;
        var S = t.leavingEl;
        var T = y.querySelector(":scope > ion-content");
        var b = y.querySelectorAll(
          ":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"
        );
        var E = y.querySelectorAll(":scope > ion-header > ion-toolbar");
        var w = new e();
        var q = new e();
        q.addElement(y)
          .duration(t.duration || a)
          .easing(t.easing || n)
          .beforeRemoveClass("ion-page-invisible");
        if (S && o) {
          var p = new e();
          p.addElement(o);
          q.add(p);
        }
        if (!T && E.length === 0 && b.length === 0) {
          w.addElement(
            y.querySelector(
              ":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"
            )
          );
        } else {
          w.addElement(T).addElement(b);
        }
        q.add(w);
        if (c) {
          w.beforeClearStyles([l])
            .fromTo(i, v, f, true)
            .fromTo(l, u, 1, true);
        } else {
          w.beforeClearStyles([l]).fromTo(i, s, f, true);
          if (T) {
            var g = r(T).querySelector(".transition-effect");
            if (g) {
              var C = g.querySelector(".transition-cover");
              var h = g.querySelector(".transition-shadow");
              var A = new e();
              var x = new e();
              var k = new e();
              A.addElement(g)
                .beforeStyles({ opacity: "1" })
                .afterStyles({ opacity: "" });
              x.addElement(C)
                .beforeClearStyles([l])
                .fromTo(l, 0, 0.1, true);
              k.addElement(h)
                .beforeClearStyles([l])
                .fromTo(l, 0.7, 0.03, true);
              w.add(A)
                .add(x)
                .add(k);
            }
          }
        }
        E.forEach(function(o) {
          var t = new e();
          var a = new e();
          var n = new e();
          var d = new e();
          var u = new e();
          var y = new e();
          var S = o.querySelector("ion-back-button");
          t.addElement(o);
          q.add(t);
          a.addElement(o.querySelector("ion-title"));
          n.addElement(o.querySelectorAll("ion-buttons,[menuToggle]"));
          d.addElement(
            o.querySelectorAll(
              ":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"
            )
          );
          u.addElement(r(o).querySelector(".toolbar-background"));
          if (S) {
            y.addElement(S);
          }
          t.add(a)
            .add(n)
            .add(d)
            .add(u)
            .add(y);
          a.fromTo(l, 0.01, 1, true);
          n.fromTo(l, 0.01, 1, true);
          d.fromTo(l, 0.01, 1, true);
          if (c) {
            a.fromTo(i, v, f, true);
            d.fromTo(i, v, f, true);
            y.fromTo(l, 0.01, 1, true);
          } else {
            a.fromTo(i, s, f, true);
            d.fromTo(i, s, f, true);
            u.beforeClearStyles([l]).fromTo(l, 0.01, 1, true);
            y.fromTo(l, 0.01, 1, true);
            if (S) {
              var T = new e();
              T.addElement(r(S).querySelector(".button-text")).fromTo(
                i,
                m ? "-100px" : "100px",
                "0px"
              );
              t.add(T);
            }
          }
        });
        if (S) {
          var R = new e();
          var z = S.querySelector(":scope > ion-content");
          R.addElement(z).addElement(
            S.querySelectorAll(
              ":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"
            )
          );
          q.add(R);
          if (c) {
            R.beforeClearStyles([l]).fromTo(i, f, m ? "-100%" : "100%");
            if (z) {
              var D = r(z).querySelector(".transition-effect");
              if (D) {
                var P = D.querySelector(".transition-cover");
                var X = D.querySelector(".transition-shadow");
                var j = new e();
                var B = new e();
                var F = new e();
                j.addElement(D)
                  .beforeStyles({ opacity: "1" })
                  .afterStyles({ opacity: "" });
                B.addElement(P)
                  .beforeClearStyles([l])
                  .fromTo(l, 0.1, 0, true);
                F.addElement(X)
                  .beforeClearStyles([l])
                  .fromTo(l, 0.7, 0.03, true);
                R.add(j)
                  .add(B)
                  .add(F);
              }
            }
          } else {
            R.fromTo(i, f, v, true).fromTo(l, 1, u, true);
          }
          var G = S.querySelectorAll(":scope > ion-header > ion-toolbar");
          G.forEach(function(o) {
            var t = new e();
            var a = new e();
            var n = new e();
            var u = new e();
            var s = o.querySelectorAll(
              ":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"
            );
            var y = new e();
            var S = new e();
            var T = o.querySelector("ion-back-button");
            t.addElement(o);
            a.addElement(o.querySelector("ion-title"));
            n.addElement(o.querySelectorAll("ion-buttons,[menuToggle]"));
            if (s.length > 0) {
              u.addElement(s);
            }
            y.addElement(r(o).querySelector(".toolbar-background"));
            if (T) {
              S.addElement(T);
            }
            t.add(a)
              .add(n)
              .add(u)
              .add(S)
              .add(y);
            q.add(t);
            S.fromTo(l, 0.99, 0);
            a.fromTo(l, 0.99, 0);
            n.fromTo(l, 0.99, 0, 0);
            u.fromTo(l, 0.99, 0);
            if (c) {
              a.fromTo(i, f, m ? "-100%" : "100%");
              u.fromTo(i, f, m ? "-100%" : "100%");
              y.beforeClearStyles([l]).fromTo(l, 1, 0.01);
              if (T) {
                var b = new e();
                b.addElement(r(T).querySelector(".button-text"));
                b.fromTo(i, f, (m ? -124 : 124) + "px");
                t.add(b);
              }
            } else {
              a.fromTo(i, f, v).afterClearStyles([d]);
              u.fromTo(i, f, v).afterClearStyles([d, l]);
              S.afterClearStyles([l]);
              a.afterClearStyles([l]);
              n.afterClearStyles([l]);
            }
          });
        }
        return Promise.resolve(q);
      });
    }
  };
});
