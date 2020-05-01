function rhyme(rhymeInfo) {
  return {
    getSyllables: () => rhymeInfo.numSyllables,
    word: () => rhymeInfo.word,
    score: () => rhymeInfo.score,
  }
}

function rhymes(rhymesData) {
  return {
    getRhymes: () => rhymesData
  }
}
