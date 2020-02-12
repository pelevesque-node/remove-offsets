[![Build Status](https://travis-ci.org/pelevesque/remove-offsets.svg?branch=master)](https://travis-ci.org/pelevesque/remove-offsets)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/remove-offsets/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/remove-offsets?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# remove-offsets

Removes and returns offsetted strings from an array.

## Node Repository

https://www.npmjs.com/package/@pelevesque/remove-offsets

## Installation

`npm install @pelevesque/remove-offsets`

## Tests

Command                      | Description
---------------------------- | ------------
`npm test` or `npm run test` | All Tests Below
`npm run cover`              | Standard Style
`npm run standard`           | Coverage
`npm run unit`               | Unit Tests

## Usage

### Parameters

```js
arr     (required)
options (optional) default = { step: 1, remove: true }
```

### Requiring

```js
const removeOffsets = require('@pelevesque/remove-offsets')
```

### Basic

```js
const arr = [
  'abcdef',
  '123456',
  'defabc', // 0
  'apple',
  '234561', // 1
  'banana',
  '456123', // 1
  'panama',
  'amapan' // 7
]
const offsets = removeOffsets(arr)
/*
arr = [
  'abcdef',
  '123456',
  'apple',
  'banana',
  'panama'
]
offsets = [
  'defabc',
  '234561',
  '456123',
  'amapan'
]
*/
```

### Step Option

```js
// Only check for offsets every 4 steps
const arr = [
  '123456789',
  'aaaabbbbb',
  'abbbbbaaa',
  'bbbbbaaaa', // 1
  '234567891', // 0
  '678912345', // 0
  '912345678'
]
const offsets = removeOffsets(arr, { step: 4 })
/*
arr = [
  '123456789',
  'aaaabbbbb',
  'abbbbbaaa',
  '912345678'
]
offsets = [
  'bbbbbaaaa',
  '234567891',
  '678912345'
]
*/
```

### Remove Option

With the remove option set to false, offsets are still returned, but nothing is
removed from the original array.

```js
// Only check for offsets every 4 steps
const arr = [
  '123456789',
  'aaaabbbbb',
  'abbbbbaaa',
  'bbbbbaaaa', // 1
  '234567891', // 0
  '678912345', // 0
  '912345678'
]
const offsets = removeOffsets(arr, { step: 4, remove: false })
/*
arr = [
  '123456789',
  'aaaabbbbb',
  'abbbbbaaa',
  'bbbbbaaaa',
  '234567891',
  '678912345',
  '912345678'
]
offsets = [
  'bbbbbaaaa',
  '234567891',
  '678912345'
]
*/
```
