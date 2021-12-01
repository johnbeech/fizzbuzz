function fizzbuzz (num) {
  let result = ''
  if (num % 3 === 0) {
    result = 'Fizz'
  }
  if (num % 5 === 0) {
    result += 'Buzz'
  }
  return result || (num + '')
}

function run (limit) {
  let n = 1
  while (n <= limit) {
    const line = fizzbuzz(n)
    console.log(line)
    n++
  }
}

if (process.argv[2] === 'run') {
  run(100)
}

module.exports = { run }
