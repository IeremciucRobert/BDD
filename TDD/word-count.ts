const trimSymbols = (word: string): string => {
  const isCharSymbol = (char) => !/^[A-Za-z0-9]/.test(char)

  while (isCharSymbol(word.charAt(0))) {
    word = word.substring(1)
  }
  while (isCharSymbol(word.charAt(word.length - 1))) {
    word = word.substring(0, word.length - 1)
  }

  return word
}

export const getWordsOccurrences = (phrase: string): Record<string, number> => {
  const wordsArray = phrase.toLowerCase().split(/\n|\t|,| /)
  const wordsOccurrences: Record<string, number> = {}

  wordsArray.forEach((word) => {
    if (!word) {
      return
    }
    const trimmedWord = trimSymbols(word)
    const wordWithoutSymbols = trimmedWord.replace(/[^a-zA-Z0-9']/g, '')

    if (wordWithoutSymbols in wordsOccurrences) {
      wordsOccurrences[wordWithoutSymbols] += 1
      return
    }

    wordsOccurrences[wordWithoutSymbols] = 1
  })

  return wordsOccurrences
}
