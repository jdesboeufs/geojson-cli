'use strict'

const {truncate} = require('@turf/turf')

module.exports = (options = {}) => {
  const precision = options.precision || 6
  const mutate = true
  const coordinates = options.coordinates || 2

  return feature => truncate(feature, {precision, coordinates, mutate})
}
