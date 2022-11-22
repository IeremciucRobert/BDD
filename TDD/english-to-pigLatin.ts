export const translate = (word: string): string => {
  word = word.trim()

  if (!word) {
    throw new Error('You must say a word!')
  }

  const isStartingWithXrYt = /(xr|yt)/.test(word.substring(0, 2))
  const isVowel = /[aeiou]/.test(word.charAt(0))

  if (isVowel || isStartingWithXrYt) {
    return word + 'ay'
  }

  const hasQU = word.match(/[^aeiou]+qu/)
  const hasY = word.match(/[^aeiou]+y/)

  let start = word.match(/[^aeiou]+/)![0]

  if (hasQU) {
    start = word.match(/[^aeiou]+qu/)![0]
  }
  if (hasY) {
    start = word.length === 2 ? word.charAt(1) + word.charAt(0) : word.match(/[^aeiouy]+/)![0]
  }

  const end = word.substring(start.length)

  return end + start + 'ay'
}
