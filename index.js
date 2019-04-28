// 'use strict';

module.exports = {
  extends: ['airbnb-base', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  plugins: ['import', 'vue', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint', // class properties
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
   ** 'off' 或 0 - 关闭规则
   ** "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   ** "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止debugger
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止console
    'no-alert': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止console

    'vue/attribute-hyphenation': 2,
    'vue/html-closing-bracket-newline': 2,
    'vue/html-closing-bracket-spacing': 2,
    'vue/html-end-tags': 2,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': 0,
    'vue/no-template-shadow': 2,
    'vue/singleline-html-element-content-newline': 0,
    'vue/v-bind-style': 2,
    'vue/v-on-style': 2,
    'vue/attributes-order': 0,
    'vue/no-v-html': 2,
    'vue/this-in-template': 2,

    'prettier/prettier': [
      'error',
      {
        printWidth: 100, // 一行的字符数，如果超过会进行换行。默认80
        singleQuote: true, // 字符串是否使用单引号。默认false使用双引号
        trailingComma: 'all', // 是否使用尾逗号，三个可选之’<none/es5/all>'
      },
    ],
  },
};
