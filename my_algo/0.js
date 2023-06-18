<template>
  <h1
    :is="`h${level}`"
    :class="`${$options.name} ${$options.name}--${level}`">
    <slot/>
  </h1>
</template>

<script>
export default {
  name: `AppHeadline`,
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
.AppHeadline {
  font-weight: 500;
  margin-bottom: 25px;

  &--1 {
    font-size: 3.375em;
  }

  &--2 {
    font-size: 2.25em;
  }

  &--3 {
    font-size: 1.5em;
  }
}
</style>





<template>
  <div :class="$options.name">
    <slot/>
  </div>
</template>

<script>
export default {
  name: `AppIntro`,
};
</script>

<style lang="scss" scoped>
.AppIntro {
  font-size: 1.25em;

  > :not(:first-child) {
    margin-top: 1.25em;
  }

  p {
    line-height: 1.25;
  }
}
</style>





<template>
  <div :class="$options.name">
    <slot/>
  </div>
</template>

<script>
export default {
  name: `AppText`,
};
</script>

<style lang="scss" scoped>
.AppText {
  > :not(:first-child) {
    margin-top: 1.25em;
  }

  p {
    line-height: 1.4;
  }
}
</style>





<template>
  <div :class="$options.name">
    <app-headline>Cabinet</app-headline>

    <app-intro :class="`${$options.name}__intro`">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren.
      </p>
    </app-intro>

    <app-text :class="`${$options.name}__text`">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
        sit amet.
      </p>

      <p v-for="article in news.items.news" :key="user.id">
        <app-headline :level="2">{{ article.caption }}</app-headline>
        {{ article.text }}
      </p>

      <app-headline :level="3"></app-headline>

    </app-text>
  </div>
</template>

<script>
import AppHeadline from '../app/AppHeadline.vue';
import AppIntro from '../app/AppIntro.vue';
import AppText from '../app/AppText.vue';

export default {
  name: `PageArticle`,
  components: {
    AppHeadline,
    AppIntro,
    AppText,
  },
  computed: {
    user () {
        return this.$store.state.authentication.user;
    },
    news () {
        return this.$store.state.news.all;
    }
  },
  created () {
    this.$store.dispatch('news/init', {role: this.$store.state.authentication.role});
    this.$store.dispatch('news/getAll');
  }
};
</script>

<style lang="scss" scoped>
.PageArticle {
  &__intro,
  &__text {
    margin-top: 1.5em;
  }
}
</style>





exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.AppHeadline[data-v-05a1ce0c] {\n  font-weight: 500;\n  margin-bottom: 25px;\n}\n.AppHeadline--1[data-v-05a1ce0c] {\n    font-size: 3.375em;\n}\n.AppHeadline--2[data-v-05a1ce0c] {\n    font-size: 2.25em;\n}\n.AppHeadline--3[data-v-05a1ce0c] {\n    font-size: 1.5em;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/app/D:/tasks/spa/src/components/app/AppHeadline.vue"],"names":[],"mappings":";AAqBA;EACE,iBAAgB;EAChB,oBAAmB;CAapB;AAXC;IACE,mBAAkB;CACnB;AAED;IACE,kBAAiB;CAClB;AAED;IACE,iBAAgB;CACjB","file":"AppHeadline.vue?vue&type=style&index=0&id=05a1ce0c&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.AppHeadline {\r\n  font-weight: 500;\r\n  margin-bottom: 25px;\r\n\r\n  &--1 {\r\n    font-size: 3.375em;\r\n  }\r\n\r\n  &--2 {\r\n    font-size: 2.25em;\r\n  }\r\n\r\n  &--3 {\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

// exports





exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.AppIntro[data-v-0096db36] {\n  font-size: 1.25em;\n}\n.AppIntro[data-v-0096db36] > :not(:first-child) {\n    margin-top: 1.25em;\n}\n.AppIntro p[data-v-0096db36] {\n    line-height: 1.25;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/app/D:/tasks/spa/src/components/app/AppIntro.vue"],"names":[],"mappings":";AAaA;EACE,kBAAiB;CASlB;AAVD;IAII,mBAAkB;CACnB;AALH;IAQI,kBAAiB;CAClB","file":"AppIntro.vue?vue&type=style&index=0&id=0096db36&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\r\n.AppIntro {\r\n  font-size: 1.25em;\r\n\r\n  > :not(:first-child) {\r\n    margin-top: 1.25em;\r\n  }\r\n\r\n  p {\r\n    line-height: 1.25;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

// exports





exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.AppText[data-v-3611f2d3] > :not(:first-child) {\n  margin-top: 1.25em;\n}\n.AppText p[data-v-3611f2d3] {\n  line-height: 1.4;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/app/D:/tasks/spa/src/components/app/AppText.vue"],"names":[],"mappings":";AAaA;EAEI,mBAAkB;CACnB;AAHH;EAMI,iBAAgB;CACjB","file":"AppText.vue?vue&type=style&index=0&id=3611f2d3&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\r\n.AppText {\r\n  > :not(:first-child) {\r\n    margin-top: 1.25em;\r\n  }\r\n\r\n  p {\r\n    line-height: 1.4;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

// exports





exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.PageArticle__intro[data-v-3943eacc], .PageArticle__text[data-v-3943eacc] {\n  margin-top: 1.5em;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/page/D:/tasks/spa/src/components/page/PageCabinet.vue"],"names":[],"mappings":";AAkEE;EAEE,kBAAiB;CAClB","file":"PageCabinet.vue?vue&type=style&index=0&id=3943eacc&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.PageArticle {\r\n  &__intro,\r\n  &__text {\r\n    margin-top: 1.5em;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

// exports





var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "h" + _vm.level,
    {
      tag: "h1",
      class: _vm.$options.name + " " + _vm.$options.name + "--" + _vm.level
    },
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
      require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js").rerender('05a1ce0c', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    }
  }
}export { render, staticRenderFns }




var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.$options.name }, [_vm._t("default")], 2)
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
      require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js").rerender('0096db36', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    }
  }
}export { render, staticRenderFns }




var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.$options.name }, [_vm._t("default")], 2)
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
      require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js").rerender('3611f2d3', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    }
  }
}export { render, staticRenderFns }




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




// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeadline.vue?vue&type=style&index=0&id=05a1ce0c&lang=scss&scoped=true");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = require("!../../../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("59db98ce", content, false, {});
// Hot Module Replacement
if(module.hot) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeadline.vue?vue&type=style&index=0&id=05a1ce0c&lang=scss&scoped=true", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeadline.vue?vue&type=style&index=0&id=05a1ce0c&lang=scss&scoped=true");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}




// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppIntro.vue?vue&type=style&index=0&id=0096db36&lang=scss&scoped=true");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = require("!../../../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0f062581", content, false, {});
// Hot Module Replacement
if(module.hot) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppIntro.vue?vue&type=style&index=0&id=0096db36&lang=scss&scoped=true", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppIntro.vue?vue&type=style&index=0&id=0096db36&lang=scss&scoped=true");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}




// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppText.vue?vue&type=style&index=0&id=3611f2d3&lang=scss&scoped=true");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = require("!../../../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3455cd37", content, false, {});
// Hot Module Replacement
if(module.hot) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppText.vue?vue&type=style&index=0&id=3611f2d3&lang=scss&scoped=true", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppText.vue?vue&type=style&index=0&id=3611f2d3&lang=scss&scoped=true");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}




// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageCabinet.vue?vue&type=style&index=0&id=3943eacc&lang=scss&scoped=true");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = require("!../../../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("09a20a70", content, false, {});
// Hot Module Replacement
if(module.hot) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageCabinet.vue?vue&type=style&index=0&id=3943eacc&lang=scss&scoped=true", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageCabinet.vue?vue&type=style&index=0&id=3943eacc&lang=scss&scoped=true");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}




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




module.exports = require("-!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeadline.vue?vue&type=script&lang=js")




module.exports = require("-!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeadline.vue?vue&type=style&index=0&id=05a1ce0c&lang=scss&scoped=true")




export * from "-!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeadline.vue?vue&type=template&id=05a1ce0c&scoped=true"




import { render, staticRenderFns } from "./AppIntro.vue?vue&type=template&id=0096db36&scoped=true"
import script from "./AppIntro.vue?vue&type=script&lang=js"
export * from "./AppIntro.vue?vue&type=script&lang=js"
import style0 from "./AppIntro.vue?vue&type=style&index=0&id=0096db36&lang=scss&scoped=true"


/* normalize component */
import normalizer from "!../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "0096db36",
  null

)

/* hot reload */
if (module.hot) {
  var api = require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('0096db36', component.options)
    } else {
      api.reload('0096db36', component.options)
    }
  }
}
component.options.__file = "src\\components\\app\\AppIntro.vue"
export default component.exports




module.exports = require("-!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppIntro.vue?vue&type=script&lang=js")




module.exports = require("-!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppIntro.vue?vue&type=style&index=0&id=0096db36&lang=scss&scoped=true")




export * from "-!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppIntro.vue?vue&type=template&id=0096db36&scoped=true"




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




module.exports = require("-!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppText.vue?vue&type=script&lang=js")




module.exports = require("-!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppText.vue?vue&type=style&index=0&id=3611f2d3&lang=scss&scoped=true")




export * from "-!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppText.vue?vue&type=template&id=3611f2d3&scoped=true"




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




module.exports = require("-!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageCabinet.vue?vue&type=script&lang=js")




module.exports = require("-!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageCabinet.vue?vue&type=style&index=0&id=3943eacc&lang=scss&scoped=true")




export * from "-!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageCabinet.vue?vue&type=template&id=3943eacc&scoped=true"