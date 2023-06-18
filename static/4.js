(window.webpackJsonp = window.webpackJsonp || []).push([
	[4], {
		47: function(t, s, e) {},
		48: function(t, s, e) {},
		49: function(t, s, e) {},
		50: function(t, s, e) {
			"use strict";
			var A = {
					name: "AppHeadline",
					props: {
						level: {
							type: Number,
							default: 1
						}
					}
				},
				a = (e(52), e(1)),
				n = Object(a.a)(A, function() {
					var t = this.$createElement;
					return (this._self._c || t)("h" + this.level, {
						tag: "h1",
						class: this.$options.name + " " + this.$options.name + "--" + this.level
					}, [this._t("default")], 2)
				}, [], !1, null, "53372f0e", null);
			s.a = n.exports
		},
		52: function(t, s, e) {
			"use strict";
			var A = e(47);
			e.n(A).a
		},
		53: function(t, s, e) {
			"use strict";
			var A = e(48);
			e.n(A).a
		},
		55: function(t, s, e) {
			"use strict";
			var A = e(49);
			e.n(A).a
		},
		56: function(t, s, e) {
			"use strict";
			var A = {
					name: "AppText"
				},
				a = (e(55), e(1)),
				n = Object(a.a)(A, function() {
					var t = this.$createElement;
					return (this._self._c || t)("div", {
						class: this.$options.name
					}, [this._t("default")], 2)
				}, [], !1, null, "08de0a9a", null);
			s.a = n.exports
		},
		57: function(t, s, e) {
			"use strict";
			var A = {
					name: "AppIntro"
				},
				a = (e(53), e(1)),
				n = Object(a.a)(A, function() {
					var t = this.$createElement;
					return (this._self._c || t)("div", {
						class: this.$options.name
					}, [this._t("default")], 2)
				}, [], !1, null, "e973ca00", null);
			s.a = n.exports
		},
		69: function(t, s, e) {},
		79: function(t, s, e) {
			"use strict";
			var A = e(69);
			e.n(A).a
		},
		82: function(t, s, e) {
			"use strict";
			e.r(s);
			var A = e(50),
				a = e(57),
				n = e(56),
				i = {
					name: "Signup",
					components: {
						AppHeadline: A.a,
						AppIntro: a.a,
						AppText: n.a
					},
					data: function() {
						return {
							username: "",
							password: "",
							submitted: !1
						}
					},
					computed: {
						loggingIn: function() {
							return this.$store.state.authentication.status.loggingIn
						}
					},
					created: function() {
						this.$store.dispatch("authentication/logout")
					},
					methods: {
						handleSubmit: function(t) {
							this.submitted = !0;
							var s = this.username,
								e = this.password,
								A = this.$store.dispatch;
							s && e && A("authentication/login", {
								username: s,
								password: e
							})
						}
					}
				},
				r = (e(79), e(1)),
				o = Object(r.a)(i, function() {
					var t = this,
						s = t.$createElement,
						e = t._self._c || s;
					return e("div", {
						class: t.$options.name
					}, [e("app-headline", [t._v("Login")]), t._v(" "), e("form", {
						on: {
							submit: function(s) {
								return s.preventDefault(), t.handleSubmit(s)
							}
						}
					}, [e("div", {
						staticClass: "form-group"
					}, [e("label", {
						attrs: {
							for: "username"
						}
					}, [t._v("Username")]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.username,
							expression: "username"
						}],
						staticClass: "form-control",
						class: {
							"is-invalid": t.submitted && !t.username
						},
						attrs: {
							type: "text",
							name: "username"
						},
						domProps: {
							value: t.username
						},
						on: {
							input: function(s) {
								s.target.composing || (t.username = s.target.value)
							}
						}
					}), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.submitted && !t.username,
							expression: "submitted && !username"
						}],
						staticClass: "invalid-feedback"
					}, [t._v("Username is required")])]), t._v(" "), e("div", {
						staticClass: "form-group"
					}, [e("label", {
						attrs: {
							htmlFor: "password"
						}
					}, [t._v("Password")]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.password,
							expression: "password"
						}],
						staticClass: "form-control",
						class: {
							"is-invalid": t.submitted && !t.password
						},
						attrs: {
							type: "password",
							name: "password"
						},
						domProps: {
							value: t.password
						},
						on: {
							input: function(s) {
								s.target.composing || (t.password = s.target.value)
							}
						}
					}), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.submitted && !t.password,
							expression: "submitted && !password"
						}],
						staticClass: "invalid-feedback"
					}, [t._v("Password is required")])]), t._v(" "), e("div", {
						staticClass: "form-group"
					}, [e("button", {
						staticClass: "btn btn-primary",
						attrs: {
							disabled: t.loggingIn
						}
					}, [t._v("Login")]), t._v(" "), e("img", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.loggingIn,
							expression: "loggingIn"
						}],
						attrs: {
							src: "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
						}
					})])])], 1)
				}, [], !1, null, "38eeee4c", null);
			s.default = o.exports
		}
	}
]);