function run (limit) {
  console.log('1')
}

if (process.argv[0].includes('node')) {
  run(100)
}

module.exports = { run }
