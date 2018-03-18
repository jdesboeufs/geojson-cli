#!/usr/bin/env node
'use strict'

const {stringify} = require('ndjson')
const {parse} = require('../lib/streams')

process.stdin
  .pipe(parse())
  .pipe(stringify())
  .pipe(process.stdout)
