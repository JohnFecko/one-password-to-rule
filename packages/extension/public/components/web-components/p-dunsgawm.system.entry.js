var __awaiter =
  (this && this.__awaiter) ||
  function(t, e, n, i) {
    return new (n || (n = Promise))(function(r, o) {
      function s(t) {
        try {
          u(i.next(t));
        } catch (t) {
          o(t);
        }
      }
      function a(t) {
        try {
          u(i["throw"](t));
        } catch (t) {
          o(t);
        }
      }
      function u(t) {
        t.done
          ? r(t.value)
          : new n(function(e) {
              e(t.value);
            }).then(s, a);
      }
      u((i = i.apply(t, e || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(t, e) {
    var n = {
        label: 0,
        sent: function() {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      },
      i,
      r,
      o,
      s;
    return (
      (s = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol === "function" &&
        (s[Symbol.iterator] = function() {
          return this;
        }),
      s
    );
    function a(t) {
      return function(e) {
        return u([t, e]);
      };
    }
    function u(s) {
      if (i) throw new TypeError("Generator is already executing.");
      while (n)
        try {
          if (
            ((i = 1),
            r &&
              (o =
                s[0] & 2
                  ? r["return"]
                  : s[0]
                  ? r["throw"] || ((o = r["return"]) && o.call(r), 0)
                  : r.next) &&
              !(o = o.call(r, s[1])).done)
          )
            return o;
          if (((r = 0), o)) s = [s[0] & 2, o.value];
          switch (s[0]) {
            case 0:
            case 1:
              o = s;
              break;
            case 4:
              n.label++;
              return { value: s[1], done: false };
            case 5:
              n.label++;
              r = s[1];
              s = [0];
              continue;
            case 7:
              s = n.ops.pop();
              n.trys.pop();
              continue;
            default:
              if (
                !((o = n.trys), (o = o.length > 0 && o[o.length - 1])) &&
                (s[0] === 6 || s[0] === 2)
              ) {
                n = 0;
                continue;
              }
              if (s[0] === 3 && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                n.label = s[1];
                break;
              }
              if (s[0] === 6 && n.label < o[1]) {
                n.label = o[1];
                o = s;
                break;
              }
              if (o && n.label < o[2]) {
                n.label = o[2];
                n.ops.push(s);
                break;
              }
              if (o[2]) n.ops.pop();
              n.trys.pop();
              continue;
          }
          s = e.call(t, n);
        } catch (t) {
          s = [6, t];
          r = 0;
        } finally {
          i = o = 0;
        }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: true };
    }
  };
System.register(["./p-83e6ea9f.system.js"], function(t) {
  "use strict";
  var e, n, i, r, o;
  return {
    setters: [
      function(t) {
        e = t.r;
        n = t.d;
        i = t.h;
        r = t.H;
        o = t.f;
      }
    ],
    execute: function() {
      var s = t(
        "ion_tabs",
        (function() {
          function t(t) {
            var i = this;
            e(this, t);
            this.transitioning = false;
            this.tabs = [];
            this.useRouter = false;
            this.onTabClicked = function(t) {
              var e = t.detail,
                n = e.href,
                r = e.tab;
              var o = i.tabs.find(function(t) {
                return t.tab === r;
              });
              if (i.useRouter && n !== undefined) {
                var s = document.querySelector("ion-router");
                if (s) {
                  s.push(n);
                }
              } else if (o) {
                i.select(o);
              }
            };
            this.ionNavWillLoad = n(this, "ionNavWillLoad", 7);
            this.ionTabsWillChange = n(this, "ionTabsWillChange", 3);
            this.ionTabsDidChange = n(this, "ionTabsDidChange", 3);
          }
          t.prototype.componentWillLoad = function() {
            var t = this;
            if (!this.useRouter) {
              this.useRouter =
                !!document.querySelector("ion-router") &&
                !this.el.closest("[no-router]");
            }
            this.tabs = Array.from(this.el.querySelectorAll("ion-tab"));
            this.initSelect().then(function() {
              t.ionNavWillLoad.emit();
              t.componentWillUpdate();
            });
          };
          t.prototype.componentDidUnload = function() {
            this.tabs.length = 0;
            this.selectedTab = this.leavingTab = undefined;
          };
          t.prototype.componentWillUpdate = function() {
            var t = this.el.querySelector("ion-tab-bar");
            if (t) {
              var e = this.selectedTab ? this.selectedTab.tab : undefined;
              t.selectedTab = e;
            }
          };
          t.prototype.select = function(t) {
            return __awaiter(this, void 0, void 0, function() {
              var e;
              return __generator(this, function(n) {
                switch (n.label) {
                  case 0:
                    return [4, this.getTab(t)];
                  case 1:
                    e = n.sent();
                    if (!this.shouldSwitch(e)) {
                      return [2, false];
                    }
                    return [4, this.setActive(e)];
                  case 2:
                    n.sent();
                    return [4, this.notifyRouter()];
                  case 3:
                    n.sent();
                    this.tabSwitch();
                    return [2, true];
                }
              });
            });
          };
          t.prototype.getTab = function(t) {
            return __awaiter(this, void 0, void 0, function() {
              var e;
              return __generator(this, function(n) {
                e =
                  typeof t === "string"
                    ? this.tabs.find(function(e) {
                        return e.tab === t;
                      })
                    : t;
                if (!e) {
                  console.error('tab with id: "' + e + '" does not exist');
                }
                return [2, e];
              });
            });
          };
          t.prototype.getSelected = function() {
            return Promise.resolve(
              this.selectedTab ? this.selectedTab.tab : undefined
            );
          };
          t.prototype.setRouteId = function(t) {
            return __awaiter(this, void 0, void 0, function() {
              var e;
              var n = this;
              return __generator(this, function(i) {
                switch (i.label) {
                  case 0:
                    return [4, this.getTab(t)];
                  case 1:
                    e = i.sent();
                    if (!this.shouldSwitch(e)) {
                      return [2, { changed: false, element: this.selectedTab }];
                    }
                    return [4, this.setActive(e)];
                  case 2:
                    i.sent();
                    return [
                      2,
                      {
                        changed: true,
                        element: this.selectedTab,
                        markVisible: function() {
                          return n.tabSwitch();
                        }
                      }
                    ];
                }
              });
            });
          };
          t.prototype.getRouteId = function() {
            return __awaiter(this, void 0, void 0, function() {
              var t;
              return __generator(this, function(e) {
                t = this.selectedTab && this.selectedTab.tab;
                return [
                  2,
                  t !== undefined
                    ? { id: t, element: this.selectedTab }
                    : undefined
                ];
              });
            });
          };
          t.prototype.initSelect = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(t) {
                switch (t.label) {
                  case 0:
                    if (this.useRouter) {
                      return [2];
                    }
                    return [
                      4,
                      Promise.all(
                        this.tabs.map(function(t) {
                          return t.componentOnReady();
                        })
                      )
                    ];
                  case 1:
                    t.sent();
                    return [4, this.select(this.tabs[0])];
                  case 2:
                    t.sent();
                    return [2];
                }
              });
            });
          };
          t.prototype.setActive = function(t) {
            if (this.transitioning) {
              return Promise.reject("transitioning already happening");
            }
            this.transitioning = true;
            this.leavingTab = this.selectedTab;
            this.selectedTab = t;
            this.ionTabsWillChange.emit({ tab: t.tab });
            return t.setActive();
          };
          t.prototype.tabSwitch = function() {
            var t = this.selectedTab;
            var e = this.leavingTab;
            this.leavingTab = undefined;
            this.transitioning = false;
            if (!t) {
              return;
            }
            if (e !== t) {
              if (e) {
                e.active = false;
              }
              this.ionTabsDidChange.emit({ tab: t.tab });
            }
          };
          t.prototype.notifyRouter = function() {
            if (this.useRouter) {
              var t = document.querySelector("ion-router");
              if (t) {
                return t.navChanged("forward");
              }
            }
            return Promise.resolve(false);
          };
          t.prototype.shouldSwitch = function(t) {
            var e = this.selectedTab;
            return t !== undefined && t !== e && !this.transitioning;
          };
          t.prototype.render = function() {
            return i(
              r,
              { onIonTabButtonClick: this.onTabClicked },
              i("slot", { name: "top" }),
              i("div", { class: "tabs-inner" }, i("slot", null)),
              i("slot", { name: "bottom" })
            );
          };
          Object.defineProperty(t.prototype, "el", {
            get: function() {
              return o(this);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(t, "style", {
            get: function() {
              return ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}";
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
