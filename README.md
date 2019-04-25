# Airbnb Vue - ESLint Shareable Config
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/jsdchenye/eslint-config-airbnb-vue/master.svg
[travis-url]: https://travis-ci.org/jsdchenye/eslint-config-airbnb-vue
[npm-image]: https://img.shields.io/npm/v/eslint-config-airbnb-vue.svg
[npm-url]: https://npmjs.org/package/eslint-config-airbnb-vue
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-airbnb-vue.svg
[downloads-url]: https://npmjs.org/package/eslint-config-airbnb-vue

> An Vue-Eslint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for Flow support in [Airbnb JavaScript Style](https://github.com/airbnb/javascript)

## Install

```bash
npm install eslint-config-airbnb-vue
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

This Shareable Config adds Vue to the baseline Airbnb JavaScript Style rules provided in `eslint-config-airbnb`.

Here's how to install everything you need:

```bash
npm install eslint-config-airbnb eslint-config-airbnb-vue
```

Then, add this to your .eslintrc file:

```
{
  "extends": ["airbnb", "airbnb-vue"]
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

## Learn more

For the full listing of rules, editor plugins, FAQs, and more, visit the main [Airbnb JavaScript Style repo](https://github.com/airbnb/javascript).

## License

MIT