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

const outputWords = (data, { isVerbose, isSorted }) => {
  // sort the data by lowest syllables to highest
  const sortedData = isSorted ? data.sort((a, b) => a.numSyllables - b.numSyllables) : data
  
  // Make it beautiful
  const prettyData = sortedData.map(data => {
    if (data.score > 3000) {
      return PrettyPrint.strong(data.word)
    } else if (data.score > 2000) {
      return PrettyPrint.normal(data.word)
    }
    return PrettyPrint.weak(data.word)
  })
  // Finally, output the data as words
  console.log(prettyData.join(' '))
}


module.exports = { PrettyPrint, outputWords }
