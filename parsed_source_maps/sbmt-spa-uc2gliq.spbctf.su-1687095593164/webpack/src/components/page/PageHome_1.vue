var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.$options.name },
    [
      _c(
        "app-hero",
        { attrs: { action: { to: { name: "cabinet" }, label: "Click me!" } } },
        [
          _c("template", { slot: "headline" }, [
            _vm._v("\n      Welcome!\n    ")
          ]),
          _vm._v(" "),
          _c(
            "p",
            [
              _vm._v("\n      Lorem ipsum dolor sit amet, "),
              _c("app-link", { attrs: { to: { name: "list" } } }, [
                _vm._v("\n      consetetur")
              ]),
              _vm._v(
                " adipscing elitr, sed diam nonumy eirmod tempor\n      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n    "
              )
            ],
            1
          )
        ],
        2
      )
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
      require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js").rerender('757be8ca', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    }
  }
}export { render, staticRenderFns }