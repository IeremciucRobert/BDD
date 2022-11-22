import { checkBracketsNesting } from './matching-brackets'

describe('matching brackets', () => {
  test('should approve a string containing only square brackets', () => {
    const str = '[]'

    expect(checkBracketsNesting(str)).toBe(true)
  })

  test('should approve a string containing only descendant brackets', () => {
    const str = '[{({})}]'

    expect(checkBracketsNesting(str)).toBe(true)
  })

  test('should approve a string containing only descendant brackets and mixed characters', () => {
    const str = '[{(a{})}w]t'

    expect(checkBracketsNesting(str)).toBe(true)
  })

  test('should approve a string containing sibling brackets', () => {
    const str = '[({}{})]'

    expect(checkBracketsNesting(str)).toBe(true)
  })

  test('should approve a string containing mixed sibling brackets', () => {
    const str = '[[]({}){}][]'

    expect(checkBracketsNesting(str)).toBe(true)
  })

  test('should throw an error for an empty string', () => {
    const str = ''

    expect(() => checkBracketsNesting(str)).toThrowError()
  })

  test('should not approve a string containing a bracket without pair', () => {
    const str = '[({}))]'

    expect(checkBracketsNesting(str)).toBe(false)
  })

  test('should not approve a string containing only an opened bracket', () => {
    const str = '['

    expect(checkBracketsNesting(str)).toBe(false)
  })
})
