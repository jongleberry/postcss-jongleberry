
# postcss-jongleberry

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

My personal PostCSS bundle because I'm tired of `require()`ing all the packages everywhere.
Includes:

- https://github.com/MoOx/postcss-cssnext - polyfill for the future
- https://github.com/postcss/postcss-nested - nesting, specifically for making an entire spreadsheet `:global {}` for [css-modules](https://github.com/css-modules/css-modules)
- https://simplaio.github.io/rucksack/
- http://cssnano.co/ - only enabled with `options.minify = true` or `process.env.NODE_ENV === 'production'`

## API

```js
return require('postcss')(require('postcss-jongleberry')({
  minify: process.env.NODE_ENV === 'production',
}))
.process(input, {
  from: `input.css`,
  to: `output.css`,
})
.then(result => {
  console.log(result.css)
})
```

### const middleware = postcssJongleberry(options)

Returns an array of middleware to be passed to `postcss()`.
The options are:

- `minify = process.env.NODE_ENV === 'production'` - whether to minify the CSS with cssnano

[npm-image]: https://img.shields.io/npm/v/postcss-jongleberry.svg?style=flat-square
[npm-url]: https://npmjs.org/package/postcss-jongleberry
[travis-image]: https://img.shields.io/travis/jongleberry/postcss-jongleberry.svg?style=flat-square
[travis-url]: https://travis-ci.org/jongleberry/postcss-jongleberry
[codecov-image]: https://img.shields.io/codecov/c/github/jongleberry/postcss-jongleberry/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/jongleberry/postcss-jongleberry
[david-image]: http://img.shields.io/david/jongleberry/postcss-jongleberry.svg?style=flat-square
[david-url]: https://david-dm.org/jongleberry/postcss-jongleberry
[license-image]: http://img.shields.io/npm/l/postcss-jongleberry.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/postcss-jongleberry.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/postcss-jongleberry
