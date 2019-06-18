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

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

### Parameters

```js
arr    (required)
step   (optional) default = 1
remove (optional) default = true
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
  'amapan' // 8
]
const removedIndexes = removeOffsets(arr)
/*
removedIndexes === [2, 4, 6, 8]
arr ===
  [
    'abcdef',
    '123456',
    'apple',
    'banana',
    'panama'
  ]
*/
```

### Using Step

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
const step = 4
const removedIndexes = removeOffsets(arr, step)
/*
removedIndexes === [3, 4, 5]
arr ===
  [
    '123456789',
    'aaaabbbbb',
    'abbbbbaaa',
    '912345678'
  ]
*/
```

### Remove Flag

With the remove flag on, removedIndexes are still returned, but nothing is
removed from the array.

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
const step = 4
const remove = true
const removedIndexes = removeOffsets(arr, step, remove)
/*
removedIndexes === [3, 4, 5]
arr ===
  [
    '123456789',
    'aaaabbbbb',
    'abbbbbaaa',
    'bbbbbaaaa',
    '234567891',
    '678912345',
    '912345678'
  ]
*/
```
