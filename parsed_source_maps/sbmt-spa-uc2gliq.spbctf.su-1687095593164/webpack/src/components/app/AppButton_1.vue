var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    _vm.to ? "router-link" : "button",
    { tag: "button", class: _vm.$options.name, attrs: { to: _vm.to } },
    [_vm._t("default")],
    2
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
      require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js").rerender('4159c250', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    }
  }
}export { render, staticRenderFns }