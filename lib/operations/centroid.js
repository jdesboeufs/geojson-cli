'use strict'

const {centroid} = require('@turf/turf')

module.exports = () => {
  return feature => {
    const {geometry, properties} = feature
    if (!geometry) {
      throw new Error('centroid: missing geometry')
    }
    if (!['Polygon', 'MultiPolygon'].includes(geometry.type)) {
      throw new Error(`centroid: unable to compute centroid for a ${geometry.type}`)
    }
    return centroid(feature, properties)
  }
}
