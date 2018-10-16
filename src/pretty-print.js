const chalk = require('chalk')

const PRINT_STYLE = {
  normal: chalk.dim,
  medium: chalk.blue,
  bold: chalk.blue.bold
}

const PrettyPrint = {
  weak: (word) => PRINT_STYLE.normal(word),
  normal: (word) => PRINT_STYLE.medium(word),
  strong: (word) => PRINT_STYLE.bold(word),
}

module.exports = PrettyPrint
