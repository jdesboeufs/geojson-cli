'use strict'

const {coordEach} = require('@turf/turf')
const proj4 = require('proj4')

const EPSG_CODE_PATTERN = /^EPSG:(\d{4,5})$/

module.exports = (options = {}) => {
  if (!options.from) {
    return f => f
  }
  const matchResult = options.from.match(EPSG_CODE_PATTERN)
  if (!matchResult) {
    throw new Error('unproj: from parameter is not valid. Try EPSG:XXXX')
  }
  const proj = proj4(getCRSProj4Def(matchResult[1]), getCRSProj4Def('4326'))

  return feature => {
    coordEach(feature, coord => {
      const [lon, lat] = proj.forward(coord)
      coord[0] = lon
      coord[1] = lat
    })
    return feature
  }
}

function getCRSProj4Def(epsgCode) {
  return require(`epsg-index/s/${epsgCode}.json`).proj4
}
