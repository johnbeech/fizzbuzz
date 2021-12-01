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

  it('should print out numbers, and the word Fizz for the number 3 to the console', () => {
    fizzbuzz.run(3)
    const actual = logs
    const expected = [
      ['1'],
      ['2'],
      ['Fizz']
    ]
    expect(actual).to.deep.equal(expected)
  })

  it('should print out numbers, and the word Buzz for the number 5 to the console', () => {
    fizzbuzz.run(5)
    const actual = logs
    const expected = [
      ['1'],
      ['2'],
      ['Fizz'],
      ['4'],
      ['Buzz']
    ]
    expect(actual).to.deep.equal(expected)
  })

  it('should print out numbers, and the word FizzBuzz for numbers that are multiples of 3 and 5', () => {
    fizzbuzz.run(15)
    const actual = logs
    const expected = [
      ['1'],
      ['2'],
      ['Fizz'],
      ['4'],
      ['Buzz'],
      ['Fizz'],
      ['7'],
      ['8'],
      ['Fizz'],
      ['Buzz'],
      ['11'],
      ['Fizz'],
      ['13'],
      ['14'],
      ['FizzBuzz']
    ]
    expect(actual).to.deep.equal(expected)
  })

  describe('Edge cases', () => {
    it('should calculate the value of 78 as Fizz', () => {
      const actual = fizzbuzz.fizzbuzz(78)
      expect(actual).to.equal('Fizz')
    })

    it('should calculate the value of 80 as Buzz', () => {
      const actual = fizzbuzz.fizzbuzz(80)
      expect(actual).to.equal('Buzz')
    })

    it('should calculate the value of 90 as FizzBuzz', () => {
      const actual = fizzbuzz.fizzbuzz(90)
      expect(actual).to.equal('FizzBuzz')
    })
  })
})
