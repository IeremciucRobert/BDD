import { isValidLunhString } from './luhn'

describe('validate given string against Luhn formula', () => {
  test('should be valid when string contains only digit characters', () => {
    const str = '4539319503436467'

    const actual = isValidLunhString(str)

    expect(actual).toBe(true)
  })

  test('should be valid when the string contains only digit characters and spaces', () => {
    const str = '4539 3195 0343 6467 '

    const actual = isValidLunhString(str)

    expect(actual).toBe(true)
  })

  test('should be invalid when sum of digits in the string is not divisible by 10', () => {
    const str = '4539 3195 0343 6487'

    const actual = isValidLunhString(str)

    expect(actual).toBe(false)
  })

  test('should be invalid when the string does not contain only digit characters', () => {
    const str1 = 'aaaa 3195 0343 a4ds'
    const str2 = '@aa! 3195 0343 a4ds'

    const actual1 = isValidLunhString(str1)
    const actual2 = isValidLunhString(str2)

    expect(actual1).toBe(false)
    expect(actual2).toBe(false)
  })

  test('should be invalid when the stripped string does not contain 16 characters', () => {
    const str = '4539 3195 0383 8'

    const actual = isValidLunhString(str)

    expect(actual).toBe(false)
  })
})
