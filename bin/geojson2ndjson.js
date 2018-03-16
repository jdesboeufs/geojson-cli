#!/usr/bin/env node
'use strict'

const {parse} = require('../lib/streams')
const {stringify} = require('ndjson')

process.stdin
  .pipe(parse())
  .pipe(stringify())
  .pipe(process.stdout)
