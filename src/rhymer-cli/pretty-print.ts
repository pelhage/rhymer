import chalk from 'chalk'

const wordStyler = {
  weak: word => chalk.dim(word),
  normal: word => chalk.blue(word),
  strong: word => chalk.blue.bold(word)
}

const sortBySyllables = data =>
  data.sort().sort((a, b) => a.numSyllables - b.numSyllables)

const logWordSearchResults = (data, { isVerbose, isSorted }) => {
  const sortedWords = isSorted ? sortBySyllables(data) : data
  const styleWordByScore = ({ word, score }) => {
    if (score > 3000) {
      return wordStyler.strong(word)
    } else if (score > 2000) {
      return wordStyler.normal(word)
    }
    return wordStyler.weak(word)
  }

  const prettyData = sortedWords.map(styleWordByScore).join(' ')

  console.log(prettyData)
}

export { wordStyler }
export {
  logWordSearchResults
}

