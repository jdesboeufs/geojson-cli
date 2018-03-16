#!/usr/bin/env node
'use strict'

const {parse} = require('ndjson')
const {stringify} = require('../lib/streams')

process.stdin
  .pipe(parse())
  .pipe(stringify())
  .pipe(process.stdout)
