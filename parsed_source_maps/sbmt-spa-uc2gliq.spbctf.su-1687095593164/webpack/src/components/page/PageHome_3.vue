import { render, staticRenderFns } from "./PageHome.vue?vue&type=template&id=757be8ca&scoped=true"
import script from "./PageHome.vue?vue&type=script&lang=js"
export * from "./PageHome.vue?vue&type=script&lang=js"
import style0 from "./PageHome.vue?vue&type=style&index=0&id=757be8ca&lang=scss&scoped=true"


/* normalize component */
import normalizer from "!../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "757be8ca",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('757be8ca', component.options)
    } else {
      api.reload('757be8ca', component.options)
    }
  }
}
component.options.__file = "src\\components\\page\\PageHome.vue"
export default component.exports