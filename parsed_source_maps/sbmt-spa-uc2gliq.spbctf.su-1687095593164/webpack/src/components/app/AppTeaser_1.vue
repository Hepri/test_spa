var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.$options.name },
    [
      _c("app-headline", { attrs: { level: 3 } }, [_vm._t("headline")], 2),
      _vm._v(" "),
      _c(
        "app-text",
        { class: _vm.$options.name + "__text" },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _vm.action
        ? _c(
            "app-button",
            {
              class: _vm.$options.name + "__action",
              attrs: { to: _vm.action.to }
            },
            [_vm._v("\n    " + _vm._s(_vm.action.label) + "\n  ")]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
/* hot reload */
if (module.hot) {
  var api = require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (module.hot.data) {
      require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js").rerender('667d0a14', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    }
  }
}export { render, staticRenderFns }