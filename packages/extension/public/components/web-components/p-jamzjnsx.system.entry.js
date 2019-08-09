System.register(["./p-83e6ea9f.system.js"], function(t) {
  "use strict";
  var e, n;
  return {
    setters: [
      function(t) {
        e = t.r;
        n = t.d;
      }
    ],
    execute: function() {
      var o = t(
        "ion_route",
        (function() {
          function t(t) {
            e(this, t);
            this.url = "";
            this.ionRouteDataChanged = n(this, "ionRouteDataChanged", 7);
          }
          t.prototype.onUpdate = function(t) {
            this.ionRouteDataChanged.emit(t);
          };
          t.prototype.onComponentProps = function(t, e) {
            if (t === e) {
              return;
            }
            var n = t ? Object.keys(t) : [];
            var o = e ? Object.keys(e) : [];
            if (n.length !== o.length) {
              this.onUpdate(t);
              return;
            }
            for (var r = 0, i = n; r < i.length; r++) {
              var a = i[r];
              if (t[a] !== e[a]) {
                this.onUpdate(t);
                return;
              }
            }
          };
          t.prototype.componentDidLoad = function() {
            this.ionRouteDataChanged.emit();
          };
          t.prototype.componentDidUnload = function() {
            this.ionRouteDataChanged.emit();
          };
          Object.defineProperty(t, "watchers", {
            get: function() {
              return {
                url: ["onUpdate"],
                component: ["onUpdate"],
                componentProps: ["onComponentProps"]
              };
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