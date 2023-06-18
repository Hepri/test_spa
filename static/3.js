(window.webpackJsonp = window.webpackJsonp || []).push([
	[3], {
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
				i = (n(52), n(1)),
				s = Object(i.a)(a, function() {
					var t = this.$createElement;
					return (this._self._c || t)("h" + this.level, {
						tag: "h1",
						class: this.$options.name + " " + this.$options.name + "--" + this.level
					}, [this._t("default")], 2)
				}, [], !1, null, "53372f0e", null);
			e.a = s.exports
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
				i = (n(55), n(1)),
				s = Object(i.a)(a, function() {
					var t = this.$createElement;
					return (this._self._c || t)("div", {
						class: this.$options.name
					}, [this._t("default")], 2)
				}, [], !1, null, "08de0a9a", null);
			e.a = s.exports
		},
		57: function(t, e, n) {
			"use strict";
			var a = {
					name: "AppIntro"
				},
				i = (n(53), n(1)),
				s = Object(i.a)(a, function() {
					var t = this.$createElement;
					return (this._self._c || t)("div", {
						class: this.$options.name
					}, [this._t("default")], 2)
				}, [], !1, null, "e973ca00", null);
			e.a = s.exports
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
				i = (n(59), n(1)),
				s = Object(i.a)(a, function() {
					var t = this.$createElement;
					return (this._self._c || t)(this.to ? "router-link" : "button", {
						tag: "button",
						class: this.$options.name,
						attrs: {
							to: this.to
						}
					}, [this._t("default")], 2)
				}, [], !1, null, "b223ee58", null);
			e.a = s.exports
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
		66: function(t, e, n) {},
		67: function(t, e, n) {},
		68: function(t, e, n) {},
		70: function(t, e, n) {
			"use strict";
			var a = n(58),
				i = n(50),
				s = n(57),
				o = {
					name: "AppHero",
					components: {
						AppButton: a.a,
						AppHeadline: i.a,
						AppIntro: s.a
					},
					props: {
						action: {
							type: Object
						}
					}
				},
				l = (n(60), n(1)),
				r = Object(l.a)(o, function() {
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
			e.a = r.exports
		},
		76: function(t, e, n) {
			"use strict";
			var a = n(66);
			n.n(a).a
		},
		77: function(t, e, n) {
			"use strict";
			var a = n(67);
			n.n(a).a
		},
		78: function(t, e, n) {
			"use strict";
			var a = n(68);
			n.n(a).a
		},
		81: function(t, e, n) {
			"use strict";
			n.r(e);
			var a = {
					name: "AppContentList"
				},
				i = (n(76), n(1)),
				s = Object(i.a)(a, function() {
					var t = this.$createElement;
					return (this._self._c || t)("ul", {
						class: this.$options.name
					}, [this._t("default")], 2)
				}, [], !1, null, "04e166c2", null).exports,
				o = n(58),
				l = n(50),
				r = n(56),
				p = {
					name: "AppContentListItem",
					components: {
						AppButton: o.a,
						AppHeadline: l.a,
						AppText: r.a
					}
				},
				c = (n(77), {
					name: "PageList",
					components: {
						AppContentList: s,
						AppContentListItem: Object(i.a)(p, function() {
							var t = this,
								e = t.$createElement,
								n = t._self._c || e;
							return n("li", {
								class: t.$options.name
							}, [n("div", {
								class: t.$options.name + "__wrap"
							}, [n("div", {
								class: t.$options.name + "__figure"
							}, [t._t("figure")], 2), t._v(" "), n("div", {
								class: t.$options.name + "__description"
							}, [n("app-headline", {
								attrs: {
									level: 3
								}
							}, [t._t("headline")], 2), t._v(" "), n("app-text", {
								class: t.$options.name + "__text",
								attrs: {
									level: 3
								}
							}, [t._t("default")], 2)], 1), t._v(" "), n("div", {
								class: t.$options.name + "__actions"
							}, [t._t("actions", [n("app-button", [t._v("Buy me!")])])], 2)])])
						}, [], !1, null, "2fee3ed4", null).exports,
						AppHero: n(70).a
					}
				}),
				u = (n(78), Object(i.a)(c, function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						class: t.$options.name
					}, [n("app-hero", [n("template", {
						slot: "headline"
					}, [t._v("\n      List\n    ")]), t._v(" "), n("p", [t._v("\n      This is an example for a list of content (e.g products).\n      consetetur sadipscing elitr, sed diam nonumy irmod tempor\n      invidunt ut labore et dolore magna\n    ")])], 2), t._v(" "), n("app-content-list", {
						class: t.$options.name + "__contentList"
					}, [n("app-content-list-item", [n("template", {
						slot: "figure"
					}, [n("img", {
						attrs: {
							src: "http://via.placeholder.com/76x76",
							alt: "Placeholder image"
						}
					})]), t._v(" "), n("template", {
						slot: "headline"
					}, [t._v("Lorem Ipsum")]), t._v(" "), n("p", [t._v("\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n        eirmod tempor inviduntt.\n      ")])], 2), t._v(" "), n("app-content-list-item", [n("template", {
						slot: "figure"
					}, [n("img", {
						attrs: {
							src: "http://via.placeholder.com/76x76",
							alt: "Placeholder image"
						}
					})]), t._v(" "), n("template", {
						slot: "headline"
					}, [t._v("Lorem Ipsum")]), t._v(" "), n("p", [t._v("\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n        eirmod tempor inviduntt.\n      ")])], 2), t._v(" "), n("app-content-list-item", [n("template", {
						slot: "figure"
					}, [n("img", {
						attrs: {
							src: "http://via.placeholder.com/76x76",
							alt: "Placeholder image"
						}
					})]), t._v(" "), n("template", {
						slot: "headline"
					}, [t._v("Lorem Ipsum")]), t._v(" "), n("p", [t._v("\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n        eirmod tempor inviduntt.\n      ")])], 2), t._v(" "), n("app-content-list-item", [n("template", {
						slot: "figure"
					}, [n("img", {
						attrs: {
							src: "http://via.placeholder.com/76x76",
							alt: "Placeholder image"
						}
					})]), t._v(" "), n("template", {
						slot: "headline"
					}, [t._v("Lorem Ipsum")]), t._v(" "), n("p", [t._v("\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n        eirmod tempor inviduntt.\n      ")])], 2)], 1)], 1)
				}, [], !1, null, "56a854a8", null));
			e.default = u.exports
		}
	}
]);