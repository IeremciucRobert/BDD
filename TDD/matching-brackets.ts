const brackets = '[](){}'
const bracketsRegex = /[^[\](){}]/g

export const checkBracketsNesting = (str: string): boolean => {
  if (!str) {
    throw new Error('String cannot be empty!')
  }

  const bracketsOnlyString = str.replace(bracketsRegex, '')
  const bracketsArray: number[] = []

  for (const bracket of bracketsOnlyString) {
    const bracketsIndex = brackets.indexOf(bracket)
    const isOpenBracket = bracketsIndex % 2 === 0

    if (isOpenBracket) {
      bracketsArray.push(bracketsIndex)
      continue
    }

    const isMatchingCloseBracket = bracketsArray.pop() === bracketsIndex - 1
    if (!isMatchingCloseBracket) {
      return false
    }
  }

  return bracketsArray.length === 0
}
