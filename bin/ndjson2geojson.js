#!/usr/bin/env node
'use strict'

const {parse} = require('ndjson')
const {stringify} = require('geojson-stream')

process.stdin
  .pipe(parse())
  .pipe(stringify())
  .pipe(process.stdout)
