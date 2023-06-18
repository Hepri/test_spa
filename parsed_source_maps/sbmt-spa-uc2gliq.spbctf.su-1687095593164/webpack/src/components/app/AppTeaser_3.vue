import { render, staticRenderFns } from "./AppTeaser.vue?vue&type=template&id=667d0a14&scoped=true"
import script from "./AppTeaser.vue?vue&type=script&lang=js"
export * from "./AppTeaser.vue?vue&type=script&lang=js"
import style0 from "./AppTeaser.vue?vue&type=style&index=0&id=667d0a14&lang=scss&scoped=true"


/* normalize component */
import normalizer from "!../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "667d0a14",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('667d0a14', component.options)
    } else {
      api.reload('667d0a14', component.options)
    }
  }
}
component.options.__file = "src\\components\\app\\AppTeaser.vue"
export default component.exports