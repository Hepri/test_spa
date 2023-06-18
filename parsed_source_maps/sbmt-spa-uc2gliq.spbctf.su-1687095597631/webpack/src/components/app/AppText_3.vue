import { render, staticRenderFns } from "./AppText.vue?vue&type=template&id=3611f2d3&scoped=true"
import script from "./AppText.vue?vue&type=script&lang=js"
export * from "./AppText.vue?vue&type=script&lang=js"
import style0 from "./AppText.vue?vue&type=style&index=0&id=3611f2d3&lang=scss&scoped=true"


/* normalize component */
import normalizer from "!../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "3611f2d3",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('3611f2d3', component.options)
    } else {
      api.reload('3611f2d3', component.options)
    }
  }
}
component.options.__file = "src\\components\\app\\AppText.vue"
export default component.exports