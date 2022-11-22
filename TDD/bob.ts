export const getResponse = (phrase: string): string => {
  const trimmedPhrase = phrase.trim()

  if (!trimmedPhrase) {
    return 'Fine. Be that way!'
  }

  const lettersOnlyPhrase = trimmedPhrase.replace(/[^A-Za-z]/g, '')
  const isUpperCase = lettersOnlyPhrase === lettersOnlyPhrase.toUpperCase()
  const isQuestion = trimmedPhrase.endsWith('?')

  if (isUpperCase) {
    return isQuestion ? `Calm down, I know what I'm doing!` : 'Whoa, chill out!'
  }

  if (isQuestion) {
    return 'Sure.'
  }

  return 'Whatever.'
}
