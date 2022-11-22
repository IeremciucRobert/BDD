import { isIsogram } from './isogram'

describe('isogram', () => {
  test('should determine that a phrase is an isogram', () => {
    //Given
    const phrase = ' is-og r -am -'

    //When
    const actual = isIsogram(phrase)

    //Then
    expect(actual).toBe(true)
  })

  test('should ignore spaces and hyphens when determining if a phrase is an isogram', () => {
    //Given
    const phrase = ' is-og r -am -'

    //When
    const actual = isIsogram(phrase)

    //Then
    expect(actual).toBe(true)
  })

  test('should determine that a phrase is not an isogram', () => {
    //Given
    const phrase = 'isogramsdtn'

    //When
    const actual = isIsogram(phrase)

    //Then
    expect(actual).toBe(false)
  })

  test('should determine that a phrase containing symbols is an isogram', () => {
    //Given
    const phrase = 'is0gr@m'

    //When
    const actual = isIsogram(phrase)

    //Then
    expect(actual).toBe(true)
  })

  test('should determine that a phrase containing symbols is not an isogram', () => {
    //Given
    const phrase = 'i@s0gr@m'

    //When
    const actual = isIsogram(phrase)

    //Then
    expect(actual).toBe(false)
  })

  test('should determine that a phrase containing one letter is an isogram', () => {
    //Given
    const phrase = 'I'

    //When
    const actual = isIsogram(phrase)

    //Then
    expect(actual).toBe(true)
  })

  test('should determine that a phrase containing mixed character cases is not an isogram', () => {
    //Given
    const phrase = 'iSograms'

    //When
    const actual = isIsogram(phrase)

    //Then
    expect(actual).toBe(false)
  })

  test('should determine that a phrase containing two letter is not an isogram', () => {
    //Given
    const phrase = 'ii'

    //When
    const actual = isIsogram(phrase)

    //Then
    expect(actual).toBe(false)
  })

  test('should throw error for empty phrase', () => {
    //Given
    const phrase1 = '  '
    const phrase2 = ''

    //When
    const actual1 = isIsogram(phrase1)
    const actual2 = isIsogram(phrase2)

    //Then
    expect(actual1).toBe(true)
    expect(actual2).toBe(true)
  })
})
