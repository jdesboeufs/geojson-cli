'use strict'

const ms = require('mississippi')
const pipeline = ms.pipeline.obj
const through = ms.through.obj

function transform(operations = []) {
  return pipeline(...operations.map(operation => {
    const operate = require('./operations/' + operation.op)(operation)
    return through((feature, enc, cb) => {
      try {
        cb(null, operate(feature))
      } catch (err) {
        cb(err)
      }
    })
  }))
}

module.exports = {transform}
