const fromPairs = require('lodash.frompairs')

// takes config and will use this as the
// basis of flags it accepts
const pullValuesFromCommand = (program, flags) =>
  fromPairs(flags.filter(flag => program[flag]).map(flag => [flag, program[flag]]))

module.exports = pullValuesFromCommand
