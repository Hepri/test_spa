! function(t) {
	function e(e) {
		for (var o, a, i = e[0], u = e[1], l = e[2], c = 0, m = []; c < i.length; c++) a = i[c], Object.prototype.hasOwnProperty.call(r, a) && r[a] && m.push(r[a][0]), r[a] = 0;
		for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (t[o] = u[o]);
		for (p && p(e); m.length;) m.shift()();
		return s.push.apply(s, l || []), n()
	}

	function n() {
		for (var t, e = 0; e < s.length; e++) {
			for (var n = s[e], o = !0, a = 1; a < n.length; a++) {
				var u = n[a];
				0 !== r[u] && (o = !1)
			}
			o && (s.splice(e--, 1), t = i(i.s = n[0]))
		}
		return t
	}
	var o = {},
		a = {
			0: 0
		},
		r = {
			0: 0
		},
		s = [];

	function i(e) {
		if (o[e]) return o[e].exports;
		var n = o[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports
	}
	i.e = function(t) {
		var e = [];
		a[t] ? e.push(a[t]) : 0 !== a[t] && {
			2: 1,
			3: 1,
			4: 1,
			5: 1
		} [t] && e.push(a[t] = new Promise(function(e, n) {
			for (var o = ({} [t] || t) + ".css", r = i.p + o, s = document.getElementsByTagName("link"), u = 0; u < s.length; u++) {
				var l = (p = s[u]).getAttribute("data-href") || p.getAttribute("href");
				if ("stylesheet" === p.rel && (l === o || l === r)) return e()
			}
			var c = document.getElementsByTagName("style");
			for (u = 0; u < c.length; u++) {
				var p;
				if ((l = (p = c[u]).getAttribute("data-href")) === o || l === r) return e()
			}
			var m = document.createElement("link");
			m.rel = "stylesheet", m.type = "text/css", m.onload = e, m.onerror = function(e) {
				var o = e && e.target && e.target.src || r,
					s = new Error("Loading CSS chunk " + t + " failed.\n(" + o + ")");
				s.request = o, delete a[t], m.parentNode.removeChild(m), n(s)
			}, m.href = r, document.getElementsByTagName("head")[0].appendChild(m)
		}).then(function() {
			a[t] = 0
		}));
		var n = r[t];
		if (0 !== n)
			if (n) e.push(n[2]);
			else {
				var o = new Promise(function(e, o) {
					n = r[t] = [e, o]
				});
				e.push(n[2] = o);
				var s, u = document.createElement("script");
				u.charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute("nonce", i.nc), u.src = function(t) {
					return i.p + "" + ({} [t] || t) + ".js"
				}(t);
				var l = new Error;
				s = function(e) {
					u.onerror = u.onload = null, clearTimeout(c);
					var n = r[t];
					if (0 !== n) {
						if (n) {
							var o = e && ("load" === e.type ? "missing" : e.type),
								a = e && e.target && e.target.src;
							l.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", l.name = "ChunkLoadError", l.type = o, l.request = a, n[1](l)
						}
						r[t] = void 0
					}
				};
				var c = setTimeout(function() {
					s({
						type: "timeout",
						target: u
					})
				}, 12e4);
				u.onerror = u.onload = s, document.head.appendChild(u)
			} return Promise.all(e)
	}, i.m = t, i.c = o, i.d = function(t, e, n) {
		i.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	}, i.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, i.t = function(t, e) {
		if (1 & e && (t = i(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (i.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var o in t) i.d(n, o, function(e) {
				return t[e]
			}.bind(null, o));
		return n
	}, i.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return i.d(e, "a", e), e
	}, i.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, i.p = "/static/", i.oe = function(t) {
		throw console.error(t), t
	};
	var u = window.webpackJsonp = window.webpackJsonp || [],
		l = u.push.bind(u);
	u.push = e, u = u.slice();
	for (var c = 0; c < u.length; c++) e(u[c]);
	var p = l;
	s.push([46, 1]), n()
}({
	21: function(t, e, n) {
		"use strict";
		var o = {
				name: "AppLink",
				props: {
					to: {
						type: Object
					}
				}
			},
			a = (n(42), n(1)),
			r = Object(a.a)(o, function() {
				var t = this.$createElement;
				return (this._self._c || t)("router-link", {
					class: this.$options.name,
					attrs: {
						to: this.to
					}
				}, [this._t("default")], 2)
			}, [], !1, null, "8860c592", null);
		e.a = r.exports
	},
	3: function(t, e) {
		t.exports = {
			apiUrl: "",
			newsUrl: "/news"
		}
	},
	41: function(t, e, n) {
		"use strict";
		var o = n(5);
		n.n(o).a
	},
	42: function(t, e, n) {
		"use strict";
		var o = n(6);
		n.n(o).a
	},
	43: function(t, e, n) {
		"use strict";
		var o = n(7);
		n.n(o).a
	},
	44: function(t, e, n) {
		"use strict";
		var o = n(8);
		n.n(o).a
	},
	45: function(t, e, n) {
		"use strict";
		var o = n(9);
		n.n(o).a
	},
	46: function(t, e, n) {
		"use strict";
		n.r(e);
		var o = n(2),
			a = (n(22), n(10));
		o.a.use(a.a);
		var r = ["/", "/list", "/login"],
			s = new a.a({
				routes: [{
					name: "home",
					path: "/",
					component: function() {
						return n.e(2).then(n.bind(null, 80))
					}
				}, {
					name: "cabinet",
					path: "/cabinet",
					component: function() {
						return n.e(5).then(n.bind(null, 83))
					}
				}, {
					name: "list",
					path: "/list",
					component: function() {
						return n.e(3).then(n.bind(null, 81))
					}
				}, {
					name: "login",
					path: "/login",
					component: function() {
						return n.e(4).then(n.bind(null, 82))
					}
				}],
				mode: "history"
			});
		s.beforeEach(function(t, e, n) {
			var o = !r.includes(t.path),
				a = localStorage.getItem("user");
			if (o && !a) return n("/login");
			n()
		});
		var i = n(11),
			u = n(3),
			l = n.n(u),
			c = {
				login: function(t, e) {
					var n = {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							username: t,
							password: e
						})
					};
					return fetch("".concat(l.a.apiUrl, "/users/authenticate"), n).then(m).then(function(t) {
						return t.ok && localStorage.setItem("user", JSON.stringify(t)), t
					})
				},
				logout: p
			};

		function p() {
			localStorage.removeItem("user")
		}

		function m(t) {
			return t.text().then(function(e) {
				var n = e && JSON.parse(e);
				if (!n.ok) {
					401 === t.status && (p(), location.reload(!0));
					var o = n && n.message || t.statusText;
					return Promise.reject(o)
				}
				return n
			})
		}
		var f = JSON.parse(localStorage.getItem("user")),
			v = f ? {
				status: {
					loggedIn: !0
				},
				user: f
			} : {
				status: {},
				user: {}
			};
		v.user.userId = +v.user.userId || 0;
		var g = {
				namespaced: !0,
				state: v,
				actions: {
					login: function(t, e) {
						var n = t.dispatch,
							o = t.commit,
							a = e.username,
							r = e.password;
						o("loginRequest", {
							username: a
						}), c.login(a, r).then(function(t) {
							o("loginSuccess", t), s.push("/")
						}, function(t) {
							o("loginFailure", t), n("alert/error", t, {
								root: !0
							})
						})
					},
					logout: function(t) {
						var e = t.commit;
						c.logout(), e("logout")
					}
				},
				mutations: {
					loginRequest: function(t, e) {
						t.status = {
							loggingIn: !0
						}, t.user = e
					},
					loginSuccess: function(t, e) {
						t.status = {
							loggedIn: !0
						}, t.user.userId = +e.userId
					},
					loginFailure: function(t) {
						t.status = {}, t.user = {}
					},
					logout: function(t) {
						t.status = {}, t.user = {}
					}
				}
			},
			d = {
				getAll: function(t) {
					var e = {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(t)
					};
					return fetch("".concat(l.a.apiUrl).concat(l.a.newsUrl), e).then(h)
				}
			};

		function h(t) {
			return t.text().then(function(e) {
				var n = e && JSON.parse(e);
				if (!n.ok) {
					401 === t.status && (logout(), location.reload(!0));
					var o = n && n.message || t.statusText;
					return Promise.reject(o)
				}
				return n
			})
		}
		var _ = {
			namespaced: !0,
			state: {
				all: {},
				role: ""
			},
			actions: {
				getAll: function(t) {
					var e = t.commit,
						n = (t.state, t.dispatch),
						o = t.rootState;
					e("getAllRequest"), d.getAll(o.authentication.user).then(function(t) {
						return e("getAllSuccess", t)
					}, function(t) {
						n("alert/error", t, {
							root: !0
						}), e("getAllFailure", t)
					})
				},
				init: function(t, e) {
					var n = t.state,
						o = e.role;
					n.role = o
				}
			},
			mutations: {
				getAllRequest: function(t) {
					t.all = {
						loading: !0
					}
				},
				getAllSuccess: function(t, e) {
					t.all = {
						items: e
					}
				},
				getAllFailure: function(t, e) {
					t.all = {
						error: e
					}
				}
			}
		};
		o.a.use(i.a);
		var y = new i.a.Store({
				modules: {
					alert: {
						namespaced: !0,
						state: {
							type: null,
							message: null
						},
						actions: {
							success: function(t, e) {
								(0, t.commit)("success", e)
							},
							error: function(t, e) {
								(0, t.commit)("error", e)
							},
							clear: function(t, e) {
								(0, t.commit)("success", e)
							}
						},
						mutations: {
							success: function(t, e) {
								t.type = "alert-success", t.message = e
							},
							error: function(t, e) {
								t.type = "alert-danger", t.message = e
							},
							clear: function(t) {
								t.type = null, t.message = null
							}
						}
					},
					authentication: g,
					news: _
				}
			}),
			b = {
				name: "AppHeader",
				computed: {
					loggedIn: function() {
						return this.$store.state.authentication.status.loggedIn
					}
				}
			},
			$ = (n(41), n(1)),
			k = Object($.a)(b, function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("header", {
					class: t.$options.name
				}, [n("div", {
					class: t.$options.name + "__wrapper"
				}, [n("router-link", {
					class: t.$options.name + "__logo",
					attrs: {
						to: {
							name: "home"
						}
					}
				}, [t._v("\n      SPA\n    ")]), t._v(" "), n("nav", {
					class: t.$options.name + "__nav"
				}, [n("ul", {
					class: t.$options.name + "__navList"
				}, [n("li", {
					class: t.$options.name + "__navItem"
				}, [n("router-link", {
					class: t.$options.name + "__navLink",
					attrs: {
						to: {
							name: "home"
						},
						"exact-active-class": "is-active"
					}
				}, [t._v("Home")])], 1), t._v(" "), n("li", {
					class: t.$options.name + "__navItem"
				}, [n("router-link", {
					class: t.$options.name + "__navLink",
					attrs: {
						to: {
							name: "list"
						},
						"exact-active-class": "is-active"
					}
				}, [t._v("List")])], 1), t._v(" "), t.loggedIn ? n("li", {
					class: t.$options.name + "__navItem"
				}, [n("router-link", {
					class: t.$options.name + "__navLink",
					attrs: {
						to: {
							name: "cabinet"
						},
						"exact-active-class": "is-active"
					}
				}, [t._v("Cabinet")])], 1) : t._e(), t._v(" "), t.loggedIn ? t._e() : n("li", {
					class: t.$options.name + "__navItem"
				}, [n("router-link", {
					class: t.$options.name + "__navLink",
					attrs: {
						to: {
							name: "login"
						},
						"exact-active-class": "is-active"
					}
				}, [t._v("Login")])], 1), t._v(" "), t.loggedIn ? n("li", {
					class: t.$options.name + "__navItem"
				}, [n("router-link", {
					class: t.$options.name + "__navLink",
					attrs: {
						to: {
							name: "login"
						},
						"exact-active-class": "is-active"
					}
				}, [t._v("Logout")])], 1) : t._e()])])], 1)])
			}, [], !1, null, "281763f2", null).exports,
			w = {
				name: "AppFooter",
				components: {
					AppLink: n(21).a
				},
				computed: {
					loggedIn: function() {
						return this.$store.state.authentication.status.loggedIn
					}
				}
			},
			O = (n(43), {
				name: "LayoutDefault",
				components: {
					AppHeader: k,
					AppFooter: Object($.a)(w, function() {
						var t = this,
							e = t.$createElement,
							n = t._self._c || e;
						return n("footer", {
							class: t.$options.name
						}, [n("div", {
							class: t.$options.name + "__wrapper"
						}, [t._v("\n    SPbCTF В© 2023 -\n    "), n("app-link", {
							attrs: {
								to: {
									name: "home"
								}
							}
						}, [t._v("Home")]), t._v("\n    |\n    "), n("app-link", {
							attrs: {
								to: {
									name: "list"
								}
							}
						}, [t._v("List")]), t._v("\n    |\n    "), t.loggedIn ? t._e() : n("app-link", {
							attrs: {
								to: {
									name: "login"
								}
							}
						}, [t._v("Login")]), t._v(" "), t.loggedIn ? n("app-link", {
							attrs: {
								to: {
									name: "login"
								}
							}
						}, [t._v("Logout")]) : t._e()], 1)])
					}, [], !1, null, "13364764", null).exports
				}
			}),
			S = (n(44), {
				name: "App",
				components: {
					LayoutDefault: Object($.a)(O, function() {
						var t = this.$createElement,
							e = this._self._c || t;
						return e("div", {
							class: this.$options.name
						}, [this._t("header", [e("app-header")]), this._v(" "), e("main", {
							class: this.$options.name + "__main"
						}, [this._t("default")], 2), this._v(" "), this._t("footer", [e("app-footer")])], 2)
					}, [], !1, null, "65906301", null).exports
				},
				computed: {
					alert: function() {
						return this.$store.state.alert
					}
				},
				watch: {
					$route: function(t, e) {
						this.$store.dispatch("alert/clear")
					}
				}
			}),
			I = (n(45), Object($.a)(S, function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					class: t.$options.name
				}, [n("layout-default", [t.alert.message ? n("div", {
					class: "alert " + t.alert.type
				}, [t._v(t._s(t.alert.message))]) : t._e(), t._v(" "), n("router-view")], 1)], 1)
			}, [], !1, null, null, null).exports);
		new o.a({
			render: function(t) {
				return t(I)
			},
			store: y,
			router: s
		}).$mount("#app")
	},
	5: function(t, e, n) {},
	6: function(t, e, n) {},
	7: function(t, e, n) {},
	8: function(t, e, n) {},
	9: function(t, e, n) {}
});