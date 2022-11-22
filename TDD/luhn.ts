export const isValidLunhString = (str: string): boolean => {
  const strSpaceTrimmed = str.replace(/\s/g, '')
  const hasNonDigitCharacters = /[^0-9]/.test(strSpaceTrimmed)

  if (hasNonDigitCharacters || strSpaceTrimmed.length !== 16) {
    return false
  }

  const strArray = strSpaceTrimmed.split('').map(Number)

  for (let i = strArray.length - 2; i >= 0; i -= 2) {
    const double = strArray[i] * 2

    strArray[i] = double > 9 ? double - 9 : double
  }

  const sum = strArray.reduce((acc, element) => {
    return acc + element
  }, 0)

  return sum % 10 === 0
}
