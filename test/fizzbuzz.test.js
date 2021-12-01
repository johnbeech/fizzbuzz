const { expect } = require('chai')
const fizzbuzz = require('../fizzbuzz.js')

describe('Fizz Buzz', () => {
  const log = console.log()
  let logs
  before(() => {
    logs = []
    console.log = (...args) => {
      logs.push([...args])
    }
  })

  after(() => {
    logs = []
    console.log = log
  })

  it('should print out the number 1 to the console', () => {
    fizzbuzz.run(1)
    const actual = logs
    const expected = [
      ['1']
    ]
    expect(actual).to.deep.equal(expected)
  })
})
