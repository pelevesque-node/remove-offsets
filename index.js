'use strict'

const isOffset = require('@pelevesque/is-offset')

module.exports = (arr, step = 1) => {
  let indicesToRemove = []
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    if (indicesToRemove.indexOf(i) === -1) {
      for (let j = i + 1, len = arr.length; j < len; j++) {
        if (isOffset(arr[i], arr[j], step)) {
          indicesToRemove.push(j)
        }
      }
    }
  }
  indicesToRemove.sort((a, b) => b - a) // sort descending
  indicesToRemove.forEach(v => arr.splice(v, 1))
}
