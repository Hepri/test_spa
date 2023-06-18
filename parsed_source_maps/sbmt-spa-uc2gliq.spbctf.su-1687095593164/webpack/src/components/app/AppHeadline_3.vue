import { render, staticRenderFns } from "./AppHeadline.vue?vue&type=template&id=05a1ce0c&scoped=true"
import script from "./AppHeadline.vue?vue&type=script&lang=js"
export * from "./AppHeadline.vue?vue&type=script&lang=js"
import style0 from "./AppHeadline.vue?vue&type=style&index=0&id=05a1ce0c&lang=scss&scoped=true"


/* normalize component */
import normalizer from "!../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "05a1ce0c",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('05a1ce0c', component.options)
    } else {
      api.reload('05a1ce0c', component.options)
    }
  }
}
component.options.__file = "src\\components\\app\\AppHeadline.vue"
export default component.exports