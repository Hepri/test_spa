exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.AppTeaserListItem[data-v-09f23d32] {\n  box-sizing: border-box;\n  flex-grow: 1;\n  flex-basis: 16em;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/app/D:/tasks/spa/src/components/app/AppTeaserListItem.vue","D:/tasks/spa/src/components/app/D:/tasks/spa/src/scss/objects/_layout.mixin.scss"],"names":[],"mappings":";AAeA;ECOE,uBAAsB;EAGpB,aAAY;EASZ,iBDlB8B;CACjC","file":"AppTeaserListItem.vue?vue&type=style&index=0&id=09f23d32&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\r\n@import '../../scss/objects/layout.mixin';\r\n\r\n.AppTeaserListItem {\r\n  @include layout__item(auto, 16em);\r\n}\r\n","@mixin layout($gutter-vertical: 1rem, $gutter-horizontal: 1rem) {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n\r\n  @if $gutter-vertical > 0 {\r\n    margin-top: -$gutter-vertical;\r\n\r\n    > * {\r\n      padding-top: $gutter-vertical;\r\n    }\r\n  }\r\n\r\n  @if $gutter-horizontal > 0 {\r\n    margin-left: -$gutter-horizontal;\r\n\r\n    > * {\r\n      padding-left: $gutter-horizontal;\r\n    }\r\n  }\r\n}\r\n\r\n@mixin layout__item($size: auto, $min-width: 0) {\r\n  box-sizing: border-box;\r\n\r\n  @if $size == auto {\r\n    flex-grow: 1;\r\n  } @else if $size == max {\r\n    flex-grow: 9999;\r\n  } @else {\r\n    width: $size * 100%;\r\n    flex-grow: 1;\r\n  }\r\n\r\n  @if $min-width > 0 {\r\n    flex-basis: $min-width;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

// exports
