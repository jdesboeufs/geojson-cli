#!/usr/bin/env node
'use strict'

const {createGzip} = require('zlib')
const {createGunzip} = require('gunzip-stream')
const yargs = require('yargs')
const {pipe} = require('mississippi')
const {parse, stringify} = require('../lib/streams')
const {transform} = require('../lib/transform')

const {argv} = yargs
  .coerce('precision', Number.parseInt)

const pipeline = [
  createGunzip(),
  parse(),
  transform([
    {op: 'centroid'},
    {op: 'truncate', precision: argv.precision || 6}
  ]),
  stringify()
]

if (argv.compress) {
  pipeline.push(createGzip())
}

pipe(process.stdin, ...pipeline, process.stdout, err => {
  if (err) {
    console.error('Error during processing!')
    console.error(err)
    process.exit(1)
  }
})
