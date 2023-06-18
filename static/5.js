(window.webpackJsonp = window.webpackJsonp || []).push([
	[5], {
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
		65: function(t, e, n) {},
		75: function(t, e, n) {
			"use strict";
			var a = n(65);
			n.n(a).a
		},
		83: function(t, e, n) {
			"use strict";
			n.r(e);
			var a = n(50),
				s = n(57),
				i = n(56),
				o = {
					name: "PageArticle",
					components: {
						AppHeadline: a.a,
						AppIntro: s.a,
						AppText: i.a
					},
					computed: {
						user: function() {
							return this.$store.state.authentication.user
						},
						news: function() {
							return this.$store.state.news.all
						}
					},
					created: function() {
						this.$store.dispatch("news/init", {
							role: this.$store.state.authentication.role
						}), this.$store.dispatch("news/getAll")
					}
				},
				r = (n(75), n(1)),
				u = Object(r.a)(o, function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						class: t.$options.name
					}, [n("app-headline", [t._v("Cabinet")]), t._v(" "), n("app-intro", {
						class: t.$options.name + "__intro"
					}, [n("p", [t._v("\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren.\n    ")])]), t._v(" "), n("app-text", {
						class: t.$options.name + "__text"
					}, [n("p", [t._v("\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n      sit amet.\n    ")]), t._v(" "), t._l(t.news.items.news, function(e) {
						return n("p", {
							key: t.user.id
						}, [n("app-headline", {
							attrs: {
								level: 2
							}
						}, [t._v(t._s(e.caption))]), t._v("\n      " + t._s(e.text) + "\n    ")], 1)
					}), t._v(" "), n("app-headline", {
						attrs: {
							level: 3
						}
					}, [t._v("")])], 2)], 1)
				}, [], !1, null, "1ac0336b", null);
			e.default = u.exports
		}
	}
]);