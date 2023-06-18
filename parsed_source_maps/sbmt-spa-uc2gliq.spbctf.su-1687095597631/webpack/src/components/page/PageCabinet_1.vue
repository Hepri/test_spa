var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.$options.name },
    [
      _c("app-headline", [_vm._v("Cabinet")]),
      _vm._v(" "),
      _c("app-intro", { class: _vm.$options.name + "__intro" }, [
        _c("p", [
          _vm._v(
            "\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren.\n    "
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "app-text",
        { class: _vm.$options.name + "__text" },
        [
          _c("p", [
            _vm._v(
              "\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n      sit amet.\n    "
            )
          ]),
          _vm._v(" "),
          _vm._l(_vm.news.items.news, function(article) {
            return _c(
              "p",
              { key: _vm.user.id },
              [
                _c("app-headline", { attrs: { level: 2 } }, [
                  _vm._v(_vm._s(article.caption))
                ]),
                _vm._v("\n      " + _vm._s(article.text) + "\n    ")
              ],
              1
            )
          }),
          _vm._v(" "),
          _c("app-headline", { attrs: { level: 3 } }, [
            _vm._v("")
          ])
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
      require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js").rerender('3943eacc', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    }
  }
}export { render, staticRenderFns }