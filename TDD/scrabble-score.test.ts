import { getScrabbleScore } from './scrabble-score'

describe('should compute scrabble score', () => {
  test('for "cabbage" word', () => {
    const actual = getScrabbleScore('cabbage')
    const expected = 14

    expect(actual).toBe(expected)
  })

  test('for upper cased "arama" word', () => {
    const actual = getScrabbleScore('aRAma')
    const expected = 7

    expect(actual).toBe(expected)
  })

  test('for empty word', () => {
    const actual = getScrabbleScore('')
    const expected = 0

    expect(actual).toBe(expected)
  })
})
