import { render, staticRenderFns } from "./AppHero.vue?vue&type=template&id=4d004f20&scoped=true"
import script from "./AppHero.vue?vue&type=script&lang=js"
export * from "./AppHero.vue?vue&type=script&lang=js"
import style0 from "./AppHero.vue?vue&type=style&index=0&id=4d004f20&lang=scss&scoped=true"


/* normalize component */
import normalizer from "!../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "4d004f20",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('4d004f20', component.options)
    } else {
      api.reload('4d004f20', component.options)
    }
  }
}
component.options.__file = "src\\components\\app\\AppHero.vue"
export default component.exports