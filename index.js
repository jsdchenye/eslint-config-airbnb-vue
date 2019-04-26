// 'use strict';

module.exports = {
  parser: 'vue-eslint-parser', // class properties
  extends: ['airbnb', 'plugin:vue/recommended'],
  plugins: ['flowtype', 'import', 'jsx-a11y', 'vue'],
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

    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
  },
};
