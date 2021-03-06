/* global describe, it */
'use strict'

const expect = require('chai').expect
const removeOffsets = require('../index')

describe('#removeOffsets()', () => {
  it('should not remove identical strings', () => {
    const arr = [
      '12345',
      '12345',
      '12345'
    ]
    const offsets = removeOffsets(arr)
    const expectedArr = [
      '12345',
      '12345',
      '12345'
    ]
    const expectedOffsets = []
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(offsets)).to.equal(JSON.stringify(expectedOffsets))
  })

  it('should not remove non-offsetted strings', () => {
    const arr = [
      '12345',
      '67891',
      'abcde'
    ]
    const offsets = removeOffsets(arr)
    const expectedArr = [
      '12345',
      '67891',
      'abcde'
    ]
    const expectedOffsets = []
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(offsets)).to.equal(JSON.stringify(expectedOffsets))
  })

  it('should remove one offsetted string', () => {
    const arr = [
      '12345',
      'abcde',
      '45123'
    ]
    const offsets = removeOffsets(arr)
    const expectedArr = [
      '12345',
      'abcde'
    ]
    const expectedOffsets = [
      '45123'
    ]
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(offsets)).to.equal(JSON.stringify(expectedOffsets))
  })

  it('should remove many offsetted strings', () => {
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
    const expectedArr = [
      'abcdef',
      '123456',
      'apple',
      'banana',
      'panama'
    ]
    const expectedOffsets = [
      'defabc',
      '234561',
      '456123',
      'amapan'
    ]
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(offsets)).to.equal(JSON.stringify(expectedOffsets))
  })

  it('should remove many offsetted strings with a step bigger than one', () => {
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
    const expectedArr = [
      '123456789',
      'aaaabbbbb',
      'abbbbbaaa',
      '912345678'
    ]
    const expectedOffsets = [
      'bbbbbaaaa',
      '234567891',
      '678912345'
    ]
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(offsets)).to.equal(JSON.stringify(expectedOffsets))
  })

  it('Should not remove anything when the remove option is false', () => {
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
    const expectedArr = [
      '123456789',
      'aaaabbbbb',
      'abbbbbaaa',
      'bbbbbaaaa',
      '234567891',
      '678912345',
      '912345678'
    ]
    const expectedOffsets = [
      'bbbbbaaaa',
      '234567891',
      '678912345'
    ]
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(offsets)).to.equal(JSON.stringify(expectedOffsets))
  })
})
