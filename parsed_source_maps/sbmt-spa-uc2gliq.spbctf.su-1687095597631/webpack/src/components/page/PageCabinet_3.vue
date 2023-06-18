import { render, staticRenderFns } from "./PageCabinet.vue?vue&type=template&id=3943eacc&scoped=true"
import script from "./PageCabinet.vue?vue&type=script&lang=js"
export * from "./PageCabinet.vue?vue&type=script&lang=js"
import style0 from "./PageCabinet.vue?vue&type=style&index=0&id=3943eacc&lang=scss&scoped=true"


/* normalize component */
import normalizer from "!../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "3943eacc",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('3943eacc', component.options)
    } else {
      api.reload('3943eacc', component.options)
    }
  }
}
component.options.__file = "src\\components\\page\\PageCabinet.vue"
export default component.exports