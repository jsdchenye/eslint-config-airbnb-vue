// 'use strict';

module.exports = {
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  plugins: ['flowtype', 'import', 'vue'],
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

    'flowtype/boolean-style': 'off',
    'flowtype/delimiter-dangle': 'off',
    'flowtype/generic-spacing': 'off',
    'flowtype/object-type-delimiter': 'off',
    'flowtype/semi': 'off',
    'flowtype/space-after-type-colon': 'off',
    'flowtype/space-before-generic-bracket': 'off',
    'flowtype/space-before-type-colon': 'off',
    'flowtype/union-intersection-spacing': 'off',

    'vue/attribute-hyphenation': 2,
    'vue/html-closing-bracket-newline': 2,
    'vue/html-closing-bracket-spacing': 2,
    'vue/html-end-tags': 2,
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],

    'vue/max-attributes-per-line': 0,
    'vue/no-template-shadow': 2,
    'vue/singleline-html-element-content-newline': 0,
    'vue/v-bind-style': 2,
    'vue/v-on-style': 2,

    'vue/attributes-order': 0,
    'vue/no-v-html': 2,
    'vue/this-in-template': 2,
  },
};
