'use strict';

module.exports = {
  parser: 'babel-eslint', // class properties
  extends: ['airbnb', "plugin:vue/recommended"],
  plugins: ["flowtype", "import", "vue"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module', // es6 import/export
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  /*
  ** "off" 或 0 - 关闭规则
  ** "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  ** "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  */
  rules: {
    "flowtype/boolean-style": "off",
    "flowtype/delimiter-dangle": "off",
    "flowtype/generic-spacing": "off",
    "flowtype/object-type-delimiter": "off",
    "flowtype/semi": "off",
    "flowtype/space-after-type-colon": "off",
    "flowtype/space-before-generic-bracket": "off",
    "flowtype/space-before-type-colon": "off",
    "flowtype/union-intersection-spacing": "off",

    "vue/html-self-closing": 0,
    "vue/array-bracket-spacing": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/html-end-tags": "off",
    "vue/html-indent": "off",
    "vue/html-quotes": "off",
    "vue/key-spacing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/mustache-interpolation-spacing": "off",
    "vue/no-multi-spaces": "off",
    "vue/no-spaces-around-equal-signs-in-attribute": "off",
    "vue/object-curly-spacing": "off",
    "vue/script-indent": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/space-infix-ops": "off",
    "vue/space-unary-ops": "off"
  },
};