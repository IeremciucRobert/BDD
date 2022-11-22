export const cleanPhoneNumber = (number: string): string => {
  let cleaned = number.replace(/[^0-9]/g, '')

  if (cleaned.length === 11) {
    if (cleaned.charAt(0) !== '1') {
      throw new Error('Invalid country code!')
    }

    cleaned = cleaned.substring(1)
  }

  if (cleaned.length !== 10) {
    throw new Error('Invalid number of digits!')
  }

  const isDigitInTwoNineRange = (digit: string) => digit.match(/[2-9]/)
  if (!isDigitInTwoNineRange(cleaned.charAt(0)) || !isDigitInTwoNineRange(cleaned.charAt(3))) {
    throw new Error('First area code and first exchange code digits must be between 2 and 9 range!')
  }

  return cleaned
}
