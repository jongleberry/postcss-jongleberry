'use strict'

module.exports = options => {
  options = options || {}
  if (typeof options.minify !== 'boolean') {
    options.minify = process.env.NODE_ENV === 'production'
  }

  const middleware = [
    require('postcss-nested'),
    require('rucksack-css')({
      autoprefixer: false, // done by cssnext
    }),
    require('postcss-cssnext')({
      warnForDuplicates: false,
    }),
  ]
  if (options.minify) {
    middleware.push(require('cssnano')({
      discardComments: {
        removeAll: true
      },
      safe: true
    }))
  }
  return middleware
}
