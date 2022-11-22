export const validateISBN = (ISBN: string): boolean => {
  const hyphenStrippedISBN = ISBN.replace(/-/g, '')

  const hasTenDigits = hyphenStrippedISBN.length === 10
  if (!hasTenDigits) {
    return false
  }

  const ISBNArray = hyphenStrippedISBN.split('')
  const checkDigit = ISBNArray[ISBNArray.length - 1]

  const isCheckDigitValid = checkDigit.match(/[0-9x]/i)
  if (!isCheckDigitValid) {
    return false
  }

  const digitISBN = hyphenStrippedISBN.substring(0, hyphenStrippedISBN.length - 1)
  const hasDigits = Number(digitISBN)
  if (!hasDigits) {
    return false
  }

  if (checkDigit.toLocaleLowerCase() === 'x') {
    ISBNArray.pop()
    ISBNArray.push('10')
  }

  const verifiedISBN = ISBNArray.reduce(
    (acc, digit) => {
      acc.value += Number(digit) * acc.count
      acc.count -= 1

      return acc
    },
    { value: 0, count: ISBNArray.length }
  )

  return verifiedISBN.value % 11 === 0
}
