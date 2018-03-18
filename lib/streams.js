'use strict'

const JSONStream = require('JSONStream')

function parse() {
  return JSONStream.parse('features.*')
}

const GEOJSON_OPEN = '{"type":"FeatureCollection","features":[\n'
const GEOJSON_SEP = ',\n'
const GEOJSON_CLOSE = ']}\n'

function stringify() {
  return JSONStream.stringify(GEOJSON_OPEN, GEOJSON_SEP, GEOJSON_CLOSE)
}

module.exports = {parse, stringify}
