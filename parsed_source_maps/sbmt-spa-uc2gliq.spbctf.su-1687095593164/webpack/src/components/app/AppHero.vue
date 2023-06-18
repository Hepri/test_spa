exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.id, "\n.AppHero[data-v-4d004f20] {\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 1em;\n  padding-left: 1em;\n  max-width: 32em;\n  text-align: center;\n}\n.AppHero__intro[data-v-4d004f20] {\n    margin-top: 1em;\n}\n.AppHero__action[data-v-4d004f20] {\n    margin-top: 1em;\n    font-size: 1.25em;\n}\n", "", {"version":3,"sources":["D:/tasks/spa/src/components/app/D:/tasks/spa/src/components/app/AppHero.vue","D:/tasks/spa/src/components/app/D:/tasks/spa/src/scss/objects/_wrapper.mixin.scss"],"names":[],"mappings":";AA0CA;ECpCE,mBAAkB;EAClB,kBAAiB;EACjB,mBAAkB;EAClB,kBAAiB;EACjB,gBATO;ED4CP,mBAAkB;CAUnB;AARC;IACE,gBAAe;CAChB;AAED;IACE,gBAAe;IACf,kBAAiB;CAClB","file":"AppHero.vue?vue&type=style&index=0&id=4d004f20&lang=scss&scoped=true","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n@import '../../scss/objects/wrapper.mixin';\r\n\r\n.AppHero {\r\n  @include wrapper(s);\r\n\r\n  text-align: center;\r\n\r\n  &__intro {\r\n    margin-top: 1em;\r\n  }\r\n\r\n  &__action {\r\n    margin-top: 1em;\r\n    font-size: 1.25em;\r\n  }\r\n}\r\n","$o-wrapper-sizes: (\r\n  s: 32em,\r\n  m: 42em,\r\n);\r\n\r\n@mixin wrapper($size: m) {\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  padding-right: 1em;\r\n  padding-left: 1em;\r\n  max-width: map-get($o-wrapper-sizes, $size);\r\n}\r\n"],"sourceRoot":""}]);

// exports
