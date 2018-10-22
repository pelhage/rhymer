const chalk = require('chalk')

const printStyler = {
  weak: (word) => chalk.dim(word),
  normal: (word) => chalk.blue(word),
  strong: (word) => chalk.blue.bold(word),
}

const sortBySyllables = data => data.sort((a, b) => a.numSyllables - b.numSyllables)

const styleByScore = wordObj => {
  const { word, score } = wordObj
  if (score > 3000) {
    return printStyler.strong(word)
  } else if (score > 2000) {
    return printStyler.normal(word)
  }
  return printStyler.weak(word)
}

const outputWords = (data, { isVerbose, isSorted }) => {
  // sort the data by lowest syllables to highest
  const wordSet = isSorted ? sortBySyllables(data) : data
  // Make it beautiful
  const prettyData = wordSet.map(styleByScore).join(' ')
  // Finally, output the data as words
  console.log(prettyData)
}

module.exports = { printStyler, outputWords }
