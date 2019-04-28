# Airbnb Vue - ESLint With VUE && Prettier
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/jsdchenye/eslint-config-airbnb-vue/master.svg
[travis-url]: https://travis-ci.org/jsdchenye/eslint-config-airbnb-vue
[npm-image]: https://img.shields.io/npm/v/eslint-config-airbnb-vue.svg
[npm-url]: https://npmjs.org/package/eslint-config-airbnb-vue
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-airbnb-vue.svg
[downloads-url]: https://npmjs.org/package/eslint-config-airbnb-vue

## Install

```bash
npm install eslint-config-airbnb-vue
```

## Usage
The config is based on `eslint-config-airbnb-base` and `eslint-plugin-vue` and `eslint-config-prettier`.

Then, add this to your .eslintrc file:

```
{
  "extends": ["airbnb-vue"]
}
```
Tip: to check your .vue/\.html/\.js，you need to edit your editor's perference.
Eg. in my vs:
```
"eslint.autoFixOnSave": true,  //  启用保存时自动修复,默认只支持.js文件
"eslint.validate": [
  "javascript",  //  用eslint的规则检测js文件
  {
    "language": "vue",   // 检测vue文件
    "autoFix": true   //  为vue文件开启保存自动修复的功能
  },
  {
    "language": "html",
    "autoFix": true
  },
],
```
## Docs
[doc.md](./doc.md)

## Learn more
For the full listing of rules, editor plugins, FAQs, and more, visit the main<br />
[Airbnb JavaScript Style repo](https://github.com/airbnb/javascript).
[Airbnb Vue Style repo](https://eslint.vuejs.org/rules)
[Airbnb Prettier repo](https://prettier.io/docs/en/integrating-with-linters.html)

## License
MIT