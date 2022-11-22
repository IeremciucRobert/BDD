const scrabblePointsMapping = [
  { value: 1, letters: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'] },
  { value: 2, letters: ['D', 'G'] },
  { value: 3, letters: ['B', 'C', 'M', 'P'] },
  { value: 4, letters: ['F', 'H', 'V', 'W', 'Y'] },
  { value: 5, letters: ['K'] },
  { value: 8, letters: ['J', 'X'] },
  { value: 10, letters: ['Q', 'Z'] },
]

export const getScrabbleScore = (word: string): number => {
  const wordArray = word.split('')

  const score = wordArray.reduce((acc, letter) => {
    const scrabblePointsElement = scrabblePointsMapping.find((element) => {
      return element.letters.includes(letter.toUpperCase())
    })

    return acc + (scrabblePointsElement?.value ?? 0)
  }, 0)

  return score
}
