#!/usr/bin/env node
'use strict'

const {parse} = require('geojson-stream')
const {stringify} = require('ndjson')

process.stdin
  .pipe(parse())
  .pipe(stringify())
  .pipe(process.stdout)
