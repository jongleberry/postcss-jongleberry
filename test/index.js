'use strict'

const postcss = require('postcss')
const assert = require('assert')
const path = require('path')
const fs = require('fs')

const middleware = require('..')

describe('postcss-jongleberry', () => {
  it('flex.css should autoprefix', () => {
    return compile('flex').then(result => {
      assert(/-webkit-/.test(result.css))
    })
  })

  describe('.minify = true', () => {
    it('z-index should not be changed', () => {
      return compile('z-index', {
        minify: true
      }).then(result => {
        assert(/\b500\b/.test(result.css))
        assert(/\b1000\b/.test(result.css))
      })
    })
  })
})

function compile (name, options) {
  const filename = path.resolve(`test/fixtures/${name}.css`)
  const input = fs.readFileSync(filename, 'utf8')

  return postcss(middleware(options))
    .process(input, {
      from: `input/${name}.css`,
      to: `output/${name}.css`,
    })
}
