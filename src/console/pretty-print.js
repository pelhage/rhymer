const chalk = require('chalk')

const printStyler = {
  weak: word => chalk.dim(word),
  normal: word => chalk.blue(word),
  strong: word => chalk.blue.bold(word)
}

const sortBySyllables = data =>
  data.sort((a, b) => a.numSyllables - b.numSyllables)

const styleByScore = wordObj => {
  const { word, score } = wordObj
  if (score > 3000) {
    return printStyler.strong(word)
  } else if (score > 2000) {
    return printStyler.normal(word)
  }
  return printStyler.weak(word)
}

const logWordSearchResults = (data, { isVerbose, isSorted }) => {
  const wordSet = isSorted ? sortBySyllables(data) : data
  const prettyData = wordSet.map(styleByScore).join(' ')

  console.log(prettyData)
}

module.exports = { printStyler, logWordSearchResults }
