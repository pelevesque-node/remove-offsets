'use strict'

const isOffset = require('@pelevesque/is-offset')

module.exports = (arr, step = 1, remove = true) => {
  const indexesToRemove = []
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    if (indexesToRemove.indexOf(i) === -1) {
      for (let j = i + 1, len = arr.length; j < len; j++) {
        if (isOffset(arr[i], arr[j], step)) {
          indexesToRemove.push(j)
        }
      }
    }
  }
  if (remove) {
    indexesToRemove.sort((a, b) => b - a) // sort descending
    indexesToRemove.forEach(v => arr.splice(v, 1))
  }
  return indexesToRemove.sort()
}
