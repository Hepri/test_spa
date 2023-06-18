<template>
  <button
    :is="to ? `router-link` : `button`"
    :to="to"
    :class="$options.name">
    <slot/>
  </button>
</template>

<script>
export default {
  name: `AppButton`,
  props: {
    to: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';

.AppButton {
  display: inline-block;
  padding: 0.5em 0.75em;
  border: none;
  border-radius: 0.25em;
  background-color: $color-primary;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &,
  &:visited {
    color: #fff;
  }

  &:focus,
  &:hover {
    background-color: lighten($color-primary, 10%);
  }
}
</style>





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
    <app-headline>
      <slot name="headline"/>
    </app-headline>

    <app-intro :class="`${$options.name}__intro`">
      <slot/>
    </app-intro>

    <app-button
      v-if="action"
      :to="action.to"
      :class="`${$options.name}__action`">
      {{ action.label }}
    </app-button>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppHeadline from './AppHeadline.vue';
import AppIntro from './AppIntro.vue';

export default {
  name: `AppHero`,
  components: {
    AppButton,
    AppHeadline,
    AppIntro,
  },
  props: {
    action: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/objects/wrapper.mixin';

.AppHero {
  @include wrapper(s);

  text-align: center;

  &__intro {
    margin-top: 1em;
  }

  &__action {
    margin-top: 1em;
    font-size: 1.25em;
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
    <app-headline :level="3">
      <slot name="headline"/>
    </app-headline>

    <app-text :class="`${$options.name}__text`">
      <slot/>
    </app-text>

    <app-button
      v-if="action"
      :to="action.to"
      :class="`${$options.name}__action`">
      {{ action.label }}
    </app-button>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppHeadline from './AppHeadline.vue';
import AppText from './AppText.vue';

export default {
  name: `AppTeaser`,
  components: {
    AppButton,
    AppHeadline,
    AppText,
  },
  props: {
    action: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/objects/card.mixin';

.AppTeaser {
  @include card();

  &__text,
  &__action {
    margin-top: 1em;
  }
}
</style>





<template>
  <ul :class="$options.name">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: `AppTeaserList`,
};
</script>

<style lang="scss" scoped>
@import '../../scss/objects/layout.mixin';

.AppTeaserList {
  @include layout();
}
</style>





<template>
  <li :class="$options.name">
    <slot/>
  </li>
</template>

<script>
export default {
  name: `AppTeaserListItem`,
};
</script>

<style lang="scss" scoped>
@import '../../scss/objects/layout.mixin';

.AppTeaserListItem {
  @include layout__item(auto, 16em);
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
    <app-hero :action="{ to: { name: `cabinet` }, label: `Click me!` }">
      <template slot="headline">
        Welcome!
      </template>

      <p>
        Lorem ipsum dolor sit amet, <app-link :to="{ name: `list` }">
        consetetur</app-link> adipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
    </app-hero>

  </div>
</template>

<script>
import AppHero from '../app/AppHero.vue';
import AppLink from '../app/AppLink.vue';
import AppTeaser from '../app/AppTeaser.vue';
import AppTeaserList from '../app/AppTeaserList.vue';
import AppTeaserListItem from '../app/AppTeaserListItem.vue';

export default {
  name: `PageHome`,
  components: {
    AppHero,
    AppLink,
    AppTeaser,
    AppTeaserList,
    AppTeaserListItem,
  },
};
</script>

<style lang="scss" scoped>
.PageHome {
  $section-spacing: 3em;

  &__teaserList {
    margin-top: $section-spacing;
  }
}
</style>





exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.AppButton[data-v-4159c250] {\n  display: inline-block;\n  padding: 0.5em 0.75em;\n  border: none;\n  border-radius: 0.25em;\n  background-color: #00acc1;\n  text-decoration: none;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.AppButton[data-v-4159c250], .AppButton[data-v-4159c250]:visited {\n    color: #fff;\n}\n.AppButton[data-v-4159c250]:focus, .AppButton[data-v-4159c250]:hover {\n    background-color: #00d9f4;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/app/D:/tasks/spa/src/components/app/AppButton.vue","D:/tasks/spa/src/components/app/D:/tasks/spa/src/scss/settings/_color.scss"],"names":[],"mappings":";AAuBA;EACE,sBAAqB;EACrB,sBAAqB;EACrB,aAAY;EACZ,sBAAqB;EACrB,0BC5BqB;ED6BrB,sBAAqB;EACrB,gBAAe;EACf,kCAAiC;CAWlC;AAnBD;IAYI,YAAW;CACZ;AAbH;IAiBI,0BAA8C;CAC/C","file":"AppButton.vue?vue&type=style&index=0&id=4159c250&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n@import '../../scss/settings/color';\r\n\r\n.AppButton {\r\n  display: inline-block;\r\n  padding: 0.5em 0.75em;\r\n  border: none;\r\n  border-radius: 0.25em;\r\n  background-color: $color-primary;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  transition: background-color 0.2s;\r\n\r\n  &,\r\n  &:visited {\r\n    color: #fff;\r\n  }\r\n\r\n  &:focus,\r\n  &:hover {\r\n    background-color: lighten($color-primary, 10%);\r\n  }\r\n}\r\n","$color-primary: #00acc1;\r\n$color-secondary: #efefef;\r\n"],"sourceRoot":""}]);

// exports





exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.AppHeadline[data-v-05a1ce0c] {\n  font-weight: 500;\n  margin-bottom: 25px;\n}\n.AppHeadline--1[data-v-05a1ce0c] {\n    font-size: 3.375em;\n}\n.AppHeadline--2[data-v-05a1ce0c] {\n    font-size: 2.25em;\n}\n.AppHeadline--3[data-v-05a1ce0c] {\n    font-size: 1.5em;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/app/D:/tasks/spa/src/components/app/AppHeadline.vue"],"names":[],"mappings":";AAqBA;EACE,iBAAgB;EAChB,oBAAmB;CAapB;AAXC;IACE,mBAAkB;CACnB;AAED;IACE,kBAAiB;CAClB;AAED;IACE,iBAAgB;CACjB","file":"AppHeadline.vue?vue&type=style&index=0&id=05a1ce0c&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.AppHeadline {\r\n  font-weight: 500;\r\n  margin-bottom: 25px;\r\n\r\n  &--1 {\r\n    font-size: 3.375em;\r\n  }\r\n\r\n  &--2 {\r\n    font-size: 2.25em;\r\n  }\r\n\r\n  &--3 {\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

// exports





exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.AppHero[data-v-4d004f20] {\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 1em;\n  padding-left: 1em;\n  max-width: 32em;\n  text-align: center;\n}\n.AppHero__intro[data-v-4d004f20] {\n    margin-top: 1em;\n}\n.AppHero__action[data-v-4d004f20] {\n    margin-top: 1em;\n    font-size: 1.25em;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/app/D:/tasks/spa/src/components/app/AppHero.vue","D:/tasks/spa/src/components/app/D:/tasks/spa/src/scss/objects/_wrapper.mixin.scss"],"names":[],"mappings":";AA0CA;ECpCE,mBAAkB;EAClB,kBAAiB;EACjB,mBAAkB;EAClB,kBAAiB;EACjB,gBATO;ED4CP,mBAAkB;CAUnB;AARC;IACE,gBAAe;CAChB;AAED;IACE,gBAAe;IACf,kBAAiB;CAClB","file":"AppHero.vue?vue&type=style&index=0&id=4d004f20&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n@import '../../scss/objects/wrapper.mixin';\r\n\r\n.AppHero {\r\n  @include wrapper(s);\r\n\r\n  text-align: center;\r\n\r\n  &__intro {\r\n    margin-top: 1em;\r\n  }\r\n\r\n  &__action {\r\n    margin-top: 1em;\r\n    font-size: 1.25em;\r\n  }\r\n}\r\n","$o-wrapper-sizes: (\r\n  s: 32em,\r\n  m: 42em,\r\n);\r\n\r\n@mixin wrapper($size: m) {\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  padding-right: 1em;\r\n  padding-left: 1em;\r\n  max-width: map-get($o-wrapper-sizes, $size);\r\n}\r\n"],"sourceRoot":""}]);

// exports





exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.AppIntro[data-v-0096db36] {\n  font-size: 1.25em;\n}\n.AppIntro[data-v-0096db36] > :not(:first-child) {\n    margin-top: 1.25em;\n}\n.AppIntro p[data-v-0096db36] {\n    line-height: 1.25;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/app/D:/tasks/spa/src/components/app/AppIntro.vue"],"names":[],"mappings":";AAaA;EACE,kBAAiB;CASlB;AAVD;IAII,mBAAkB;CACnB;AALH;IAQI,kBAAiB;CAClB","file":"AppIntro.vue?vue&type=style&index=0&id=0096db36&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\r\n.AppIntro {\r\n  font-size: 1.25em;\r\n\r\n  > :not(:first-child) {\r\n    margin-top: 1.25em;\r\n  }\r\n\r\n  p {\r\n    line-height: 1.25;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

// exports





exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.AppTeaser[data-v-667d0a14] {\n  padding: 1em;\n  border: 1px solid #ccc;\n  border-radius: 0.25em;\n}\n.AppTeaser__text[data-v-667d0a14], .AppTeaser__action[data-v-667d0a14] {\n    margin-top: 1em;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/app/D:/tasks/spa/src/components/app/AppTeaser.vue","D:/tasks/spa/src/components/app/D:/tasks/spa/src/scss/objects/_card.mixin.scss"],"names":[],"mappings":";AA0CA;ECzCE,aAAY;EACZ,uBAAsB;EACtB,sBAAqB;CD8CtB;AAJC;IAEE,gBAAe;CAChB","file":"AppTeaser.vue?vue&type=style&index=0&id=667d0a14&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n@import '../../scss/objects/card.mixin';\r\n\r\n.AppTeaser {\r\n  @include card();\r\n\r\n  &__text,\r\n  &__action {\r\n    margin-top: 1em;\r\n  }\r\n}\r\n","@mixin card() {\r\n  padding: 1em;\r\n  border: 1px solid #ccc;\r\n  border-radius: 0.25em;\r\n}\r\n"],"sourceRoot":""}]);

// exports





exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.AppTeaserList[data-v-799c9c98] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -1rem;\n  margin-left: -1rem;\n}\n.AppTeaserList > *[data-v-799c9c98] {\n    padding-top: 1rem;\n}\n.AppTeaserList > *[data-v-799c9c98] {\n    padding-left: 1rem;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/app/D:/tasks/spa/src/components/app/AppTeaserList.vue","D:/tasks/spa/src/components/app/D:/tasks/spa/src/scss/objects/_layout.mixin.scss"],"names":[],"mappings":";AAeA;ECdE,cAAa;EACb,gBAAe;EAGb,kBALgC;EAahC,mBAb0D;CDiB7D;AAFD;ICPM,kBAR8B;CAS/B;ADML;ICCM,mBAhBwD;CAiBzD","file":"AppTeaserList.vue?vue&type=style&index=0&id=799c9c98&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\r\n@import '../../scss/objects/layout.mixin';\r\n\r\n.AppTeaserList {\r\n  @include layout();\r\n}\r\n","@mixin layout($gutter-vertical: 1rem, $gutter-horizontal: 1rem) {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n\r\n  @if $gutter-vertical > 0 {\r\n    margin-top: -$gutter-vertical;\r\n\r\n    > * {\r\n      padding-top: $gutter-vertical;\r\n    }\r\n  }\r\n\r\n  @if $gutter-horizontal > 0 {\r\n    margin-left: -$gutter-horizontal;\r\n\r\n    > * {\r\n      padding-left: $gutter-horizontal;\r\n    }\r\n  }\r\n}\r\n\r\n@mixin layout__item($size: auto, $min-width: 0) {\r\n  box-sizing: border-box;\r\n\r\n  @if $size == auto {\r\n    flex-grow: 1;\r\n  } @else if $size == max {\r\n    flex-grow: 9999;\r\n  } @else {\r\n    width: $size * 100%;\r\n    flex-grow: 1;\r\n  }\r\n\r\n  @if $min-width > 0 {\r\n    flex-basis: $min-width;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

// exports





exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.AppTeaserListItem[data-v-09f23d32] {\n  box-sizing: border-box;\n  flex-grow: 1;\n  flex-basis: 16em;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/app/D:/tasks/spa/src/components/app/AppTeaserListItem.vue","D:/tasks/spa/src/components/app/D:/tasks/spa/src/scss/objects/_layout.mixin.scss"],"names":[],"mappings":";AAeA;ECOE,uBAAsB;EAGpB,aAAY;EASZ,iBDlB8B;CACjC","file":"AppTeaserListItem.vue?vue&type=style&index=0&id=09f23d32&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\r\n@import '../../scss/objects/layout.mixin';\r\n\r\n.AppTeaserListItem {\r\n  @include layout__item(auto, 16em);\r\n}\r\n","@mixin layout($gutter-vertical: 1rem, $gutter-horizontal: 1rem) {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n\r\n  @if $gutter-vertical > 0 {\r\n    margin-top: -$gutter-vertical;\r\n\r\n    > * {\r\n      padding-top: $gutter-vertical;\r\n    }\r\n  }\r\n\r\n  @if $gutter-horizontal > 0 {\r\n    margin-left: -$gutter-horizontal;\r\n\r\n    > * {\r\n      padding-left: $gutter-horizontal;\r\n    }\r\n  }\r\n}\r\n\r\n@mixin layout__item($size: auto, $min-width: 0) {\r\n  box-sizing: border-box;\r\n\r\n  @if $size == auto {\r\n    flex-grow: 1;\r\n  } @else if $size == max {\r\n    flex-grow: 9999;\r\n  } @else {\r\n    width: $size * 100%;\r\n    flex-grow: 1;\r\n  }\r\n\r\n  @if $min-width > 0 {\r\n    flex-basis: $min-width;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

// exports





exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.AppText[data-v-3611f2d3] > :not(:first-child) {\n  margin-top: 1.25em;\n}\n.AppText p[data-v-3611f2d3] {\n  line-height: 1.4;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/app/D:/tasks/spa/src/components/app/AppText.vue"],"names":[],"mappings":";AAaA;EAEI,mBAAkB;CACnB;AAHH;EAMI,iBAAgB;CACjB","file":"AppText.vue?vue&type=style&index=0&id=3611f2d3&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\r\n.AppText {\r\n  > :not(:first-child) {\r\n    margin-top: 1.25em;\r\n  }\r\n\r\n  p {\r\n    line-height: 1.4;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

// exports





exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.PageHome__teaserList[data-v-757be8ca] {\n  margin-top: 3em;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/page/D:/tasks/spa/src/components/page/PageHome.vue"],"names":[],"mappings":";AAwCE;EACE,gBAHmB;CAIpB","file":"PageHome.vue?vue&type=style&index=0&id=757be8ca&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.PageHome {\r\n  $section-spacing: 3em;\r\n\r\n  &__teaserList {\r\n    margin-top: $section-spacing;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

// exports





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
  return _c(
    "div",
    { class: _vm.$options.name },
    [
      _c("app-headline", [_vm._t("headline")], 2),
      _vm._v(" "),
      _c(
        "app-intro",
        { class: _vm.$options.name + "__intro" },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _vm.action
        ? _c(
            "app-button",
            {
              class: _vm.$options.name + "__action",
              attrs: { to: _vm.action.to }
            },
            [_vm._v("\n    " + _vm._s(_vm.action.label) + "\n  ")]
          )
        : _vm._e()
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
      require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js").rerender('4d004f20', {
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
  return _c(
    "div",
    { class: _vm.$options.name },
    [
      _c("app-headline", { attrs: { level: 3 } }, [_vm._t("headline")], 2),
      _vm._v(" "),
      _c(
        "app-text",
        { class: _vm.$options.name + "__text" },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _vm.action
        ? _c(
            "app-button",
            {
              class: _vm.$options.name + "__action",
              attrs: { to: _vm.action.to }
            },
            [_vm._v("\n    " + _vm._s(_vm.action.label) + "\n  ")]
          )
        : _vm._e()
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
      require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js").rerender('667d0a14', {
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
  return _c("ul", { class: _vm.$options.name }, [_vm._t("default")], 2)
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
      require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js").rerender('799c9c98', {
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
  return _c("li", { class: _vm.$options.name }, [_vm._t("default")], 2)
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
      require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js").rerender('09f23d32', {
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




// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppButton.vue?vue&type=style&index=0&id=4159c250&lang=scss&scoped=true");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = require("!../../../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b1cf4e58", content, false, {});
// Hot Module Replacement
if(module.hot) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppButton.vue?vue&type=style&index=0&id=4159c250&lang=scss&scoped=true", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppButton.vue?vue&type=style&index=0&id=4159c250&lang=scss&scoped=true");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}




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
var content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHero.vue?vue&type=style&index=0&id=4d004f20&lang=scss&scoped=true");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = require("!../../../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2bb86acf", content, false, {});
// Hot Module Replacement
if(module.hot) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHero.vue?vue&type=style&index=0&id=4d004f20&lang=scss&scoped=true", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHero.vue?vue&type=style&index=0&id=4d004f20&lang=scss&scoped=true");
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
var content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaser.vue?vue&type=style&index=0&id=667d0a14&lang=scss&scoped=true");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = require("!../../../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0068f44c", content, false, {});
// Hot Module Replacement
if(module.hot) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaser.vue?vue&type=style&index=0&id=667d0a14&lang=scss&scoped=true", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaser.vue?vue&type=style&index=0&id=667d0a14&lang=scss&scoped=true");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}




// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaserList.vue?vue&type=style&index=0&id=799c9c98&lang=scss&scoped=true");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = require("!../../../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("863c97bc", content, false, {});
// Hot Module Replacement
if(module.hot) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaserList.vue?vue&type=style&index=0&id=799c9c98&lang=scss&scoped=true", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaserList.vue?vue&type=style&index=0&id=799c9c98&lang=scss&scoped=true");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}




// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaserListItem.vue?vue&type=style&index=0&id=09f23d32&lang=scss&scoped=true");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = require("!../../../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("01749418", content, false, {});
// Hot Module Replacement
if(module.hot) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaserListItem.vue?vue&type=style&index=0&id=09f23d32&lang=scss&scoped=true", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaserListItem.vue?vue&type=style&index=0&id=09f23d32&lang=scss&scoped=true");
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
var content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageHome.vue?vue&type=style&index=0&id=757be8ca&lang=scss&scoped=true");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = require("!../../../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("52c8b9f7", content, false, {});
// Hot Module Replacement
if(module.hot) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageHome.vue?vue&type=style&index=0&id=757be8ca&lang=scss&scoped=true", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageHome.vue?vue&type=style&index=0&id=757be8ca&lang=scss&scoped=true");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}




import { render, staticRenderFns } from "./AppButton.vue?vue&type=template&id=4159c250&scoped=true"
import script from "./AppButton.vue?vue&type=script&lang=js"
export * from "./AppButton.vue?vue&type=script&lang=js"
import style0 from "./AppButton.vue?vue&type=style&index=0&id=4159c250&lang=scss&scoped=true"


/* normalize component */
import normalizer from "!../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "4159c250",
  null

)

/* hot reload */
if (module.hot) {
  var api = require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('4159c250', component.options)
    } else {
      api.reload('4159c250', component.options)
    }
  }
}
component.options.__file = "src\\components\\app\\AppButton.vue"
export default component.exports




module.exports = require("-!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppButton.vue?vue&type=script&lang=js")




module.exports = require("-!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppButton.vue?vue&type=style&index=0&id=4159c250&lang=scss&scoped=true")




export * from "-!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppButton.vue?vue&type=template&id=4159c250&scoped=true"




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




module.exports = require("-!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHero.vue?vue&type=script&lang=js")




module.exports = require("-!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHero.vue?vue&type=style&index=0&id=4d004f20&lang=scss&scoped=true")




export * from "-!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHero.vue?vue&type=template&id=4d004f20&scoped=true"




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




module.exports = require("-!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaser.vue?vue&type=script&lang=js")




module.exports = require("-!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaser.vue?vue&type=style&index=0&id=667d0a14&lang=scss&scoped=true")




export * from "-!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaser.vue?vue&type=template&id=667d0a14&scoped=true"




import { render, staticRenderFns } from "./AppTeaserList.vue?vue&type=template&id=799c9c98&scoped=true"
import script from "./AppTeaserList.vue?vue&type=script&lang=js"
export * from "./AppTeaserList.vue?vue&type=script&lang=js"
import style0 from "./AppTeaserList.vue?vue&type=style&index=0&id=799c9c98&lang=scss&scoped=true"


/* normalize component */
import normalizer from "!../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "799c9c98",
  null

)

/* hot reload */
if (module.hot) {
  var api = require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('799c9c98', component.options)
    } else {
      api.reload('799c9c98', component.options)
    }
  }
}
component.options.__file = "src\\components\\app\\AppTeaserList.vue"
export default component.exports




module.exports = require("-!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaserList.vue?vue&type=script&lang=js")




module.exports = require("-!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaserList.vue?vue&type=style&index=0&id=799c9c98&lang=scss&scoped=true")




export * from "-!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaserList.vue?vue&type=template&id=799c9c98&scoped=true"




import { render, staticRenderFns } from "./AppTeaserListItem.vue?vue&type=template&id=09f23d32&scoped=true"
import script from "./AppTeaserListItem.vue?vue&type=script&lang=js"
export * from "./AppTeaserListItem.vue?vue&type=script&lang=js"
import style0 from "./AppTeaserListItem.vue?vue&type=style&index=0&id=09f23d32&lang=scss&scoped=true"


/* normalize component */
import normalizer from "!../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "09f23d32",
  null

)

/* hot reload */
if (module.hot) {
  var api = require("D:\\tasks\\spa\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('09f23d32', component.options)
    } else {
      api.reload('09f23d32', component.options)
    }
  }
}
component.options.__file = "src\\components\\app\\AppTeaserListItem.vue"
export default component.exports




module.exports = require("-!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaserListItem.vue?vue&type=script&lang=js")




module.exports = require("-!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaserListItem.vue?vue&type=style&index=0&id=09f23d32&lang=scss&scoped=true")




export * from "-!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTeaserListItem.vue?vue&type=template&id=09f23d32&scoped=true"




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




module.exports = require("-!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageHome.vue?vue&type=script&lang=js")




module.exports = require("-!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageHome.vue?vue&type=style&index=0&id=757be8ca&lang=scss&scoped=true")




export * from "-!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageHome.vue?vue&type=template&id=757be8ca&scoped=true"