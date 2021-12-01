const { expect } = require('chai')
const fizzbuzz = require('../fizzbuzz.js')

describe('Fizz Buzz', () => {
  const log = console.log()
  let logs
  beforeEach(() => {
    logs = []
    console.log = (...args) => {
      logs.push([...args])
    }
  })

  afterEach(() => {
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

  it('should print out numbers, and the word fizz for the number 3 to the console', () => {
    fizzbuzz.run(3)
    const actual = logs
    const expected = [
      ['1'],
      ['2'],
      ['Fizz']
    ]
    expect(actual).to.deep.equal(expected)
  })
})
