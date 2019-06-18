'use strict'

const isOffset = require('@pelevesque/is-offset')

module.exports = (arr, { remove = true, step = 1 } = {}) => {
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
  indexesToRemove.sort((a, b) => b - a) // sort descending
  const offsets = []
  indexesToRemove.forEach(v => {
    offsets.unshift(arr[v])
    if (remove) arr.splice(v, 1)
  })
  return offsets
}
