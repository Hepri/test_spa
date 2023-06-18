(window.webpackJsonp = window.webpackJsonp || []).push([
	[2], {
		47: function(t, e, n) {},
		48: function(t, e, n) {},
		49: function(t, e, n) {},
		50: function(t, e, n) {
			"use strict";
			var a = {
					name: "AppHeadline",
					props: {
						level: {
							type: Number,
							default: 1
						}
					}
				},
				s = (n(52), n(1)),
				i = Object(s.a)(a, function() {
					var t = this.$createElement;
					return (this._self._c || t)("h" + this.level, {
						tag: "h1",
						class: this.$options.name + " " + this.$options.name + "--" + this.level
					}, [this._t("default")], 2)
				}, [], !1, null, "53372f0e", null);
			e.a = i.exports
		},
		51: function(t, e, n) {},
		52: function(t, e, n) {
			"use strict";
			var a = n(47);
			n.n(a).a
		},
		53: function(t, e, n) {
			"use strict";
			var a = n(48);
			n.n(a).a
		},
		54: function(t, e, n) {},
		55: function(t, e, n) {
			"use strict";
			var a = n(49);
			n.n(a).a
		},
		56: function(t, e, n) {
			"use strict";
			var a = {
					name: "AppText"
				},
				s = (n(55), n(1)),
				i = Object(s.a)(a, function() {
					var t = this.$createElement;
					return (this._self._c || t)("div", {
						class: this.$options.name
					}, [this._t("default")], 2)
				}, [], !1, null, "08de0a9a", null);
			e.a = i.exports
		},
		57: function(t, e, n) {
			"use strict";
			var a = {
					name: "AppIntro"
				},
				s = (n(53), n(1)),
				i = Object(s.a)(a, function() {
					var t = this.$createElement;
					return (this._self._c || t)("div", {
						class: this.$options.name
					}, [this._t("default")], 2)
				}, [], !1, null, "e973ca00", null);
			e.a = i.exports
		},
		58: function(t, e, n) {
			"use strict";
			var a = {
					name: "AppButton",
					props: {
						to: {
							type: Object
						}
					}
				},
				s = (n(59), n(1)),
				i = Object(s.a)(a, function() {
					var t = this.$createElement;
					return (this._self._c || t)(this.to ? "router-link" : "button", {
						tag: "button",
						class: this.$options.name,
						attrs: {
							to: this.to
						}
					}, [this._t("default")], 2)
				}, [], !1, null, "b223ee58", null);
			e.a = i.exports
		},
		59: function(t, e, n) {
			"use strict";
			var a = n(51);
			n.n(a).a
		},
		60: function(t, e, n) {
			"use strict";
			var a = n(54);
			n.n(a).a
		},
		61: function(t, e, n) {},
		62: function(t, e, n) {},
		63: function(t, e, n) {},
		64: function(t, e, n) {},
		70: function(t, e, n) {
			"use strict";
			var a = n(58),
				s = n(50),
				i = n(57),
				o = {
					name: "AppHero",
					components: {
						AppButton: a.a,
						AppHeadline: s.a,
						AppIntro: i.a
					},
					props: {
						action: {
							type: Object
						}
					}
				},
				c = (n(60), n(1)),
				l = Object(c.a)(o, function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						class: t.$options.name
					}, [n("app-headline", [t._t("headline")], 2), t._v(" "), n("app-intro", {
						class: t.$options.name + "__intro"
					}, [t._t("default")], 2), t._v(" "), t.action ? n("app-button", {
						class: t.$options.name + "__action",
						attrs: {
							to: t.action.to
						}
					}, [t._v("\n    " + t._s(t.action.label) + "\n  ")]) : t._e()], 1)
				}, [], !1, null, "1b18c987", null);
			e.a = l.exports
		},
		71: function(t, e, n) {
			"use strict";
			var a = n(61);
			n.n(a).a
		},
		72: function(t, e, n) {
			"use strict";
			var a = n(62);
			n.n(a).a
		},
		73: function(t, e, n) {
			"use strict";
			var a = n(63);
			n.n(a).a
		},
		74: function(t, e, n) {
			"use strict";
			var a = n(64);
			n.n(a).a
		},
		80: function(t, e, n) {
			"use strict";
			n.r(e);
			var a = n(70),
				s = n(21),
				i = n(58),
				o = n(50),
				c = n(56),
				l = {
					name: "AppTeaser",
					components: {
						AppButton: i.a,
						AppHeadline: o.a,
						AppText: c.a
					},
					props: {
						action: {
							type: Object
						}
					}
				},
				r = (n(71), n(1)),
				u = Object(r.a)(l, function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						class: t.$options.name
					}, [n("app-headline", {
						attrs: {
							level: 3
						}
					}, [t._t("headline")], 2), t._v(" "), n("app-text", {
						class: t.$options.name + "__text"
					}, [t._t("default")], 2), t._v(" "), t.action ? n("app-button", {
						class: t.$options.name + "__action",
						attrs: {
							to: t.action.to
						}
					}, [t._v("\n    " + t._s(t.action.label) + "\n  ")]) : t._e()], 1)
				}, [], !1, null, "5efae28a", null).exports,
				p = {
					name: "AppTeaserList"
				},
				f = (n(72), Object(r.a)(p, function() {
					var t = this.$createElement;
					return (this._self._c || t)("ul", {
						class: this.$options.name
					}, [this._t("default")], 2)
				}, [], !1, null, "23f44bc2", null).exports),
				m = {
					name: "AppTeaserListItem"
				},
				_ = (n(73), Object(r.a)(m, function() {
					var t = this.$createElement;
					return (this._self._c || t)("li", {
						class: this.$options.name
					}, [this._t("default")], 2)
				}, [], !1, null, "0cf6b512", null).exports),
				h = {
					name: "PageHome",
					components: {
						AppHero: a.a,
						AppLink: s.a,
						AppTeaser: u,
						AppTeaserList: f,
						AppTeaserListItem: _
					}
				},
				v = (n(74), Object(r.a)(h, function() {
					var t = this.$createElement,
						e = this._self._c || t;
					return e("div", {
						class: this.$options.name
					}, [e("app-hero", {
						attrs: {
							action: {
								to: {
									name: "cabinet"
								},
								label: "Click me!"
							}
						}
					}, [e("template", {
						slot: "headline"
					}, [this._v("\n      Welcome!\n    ")]), this._v(" "), e("p", [this._v("\n      Lorem ipsum dolor sit amet, "), e("app-link", {
						attrs: {
							to: {
								name: "list"
							}
						}
					}, [this._v("\n      consetetur")]), this._v(" adipscing elitr, sed diam nonumy eirmod tempor\n      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n    ")], 1)], 2)], 1)
				}, [], !1, null, "293fd82a", null));
			e.default = v.exports
		}
	}
]);