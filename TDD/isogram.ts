export const isIsogram = (phrase: string): boolean => {
  const trimmedPhrase = phrase.toLocaleLowerCase().replace(/[-\s]/g, '')
  const phraseArray = trimmedPhrase.split('')
  let isPhraseIsogram = true

  phraseArray.reduce((acc, letter, index, array) => {
    if (acc.includes(letter)) {
      isPhraseIsogram = false
      array.splice(index)
    }

    acc.push(letter)
    return acc
  }, [] as string[])

  return isPhraseIsogram
}
