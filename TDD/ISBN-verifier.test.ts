import { validateISBN } from './ISBN-verifier'

describe('ISBN verifier', () => {
  test('should validate an ISBN', () => {
    //Given
    const given = '3598215088'

    //When
    const actual = validateISBN(given)

    //Then
    expect(actual).toBe(true)
  })

  test('should validate an ISBN containing hyphens', () => {
    //Given
    const given = '3-598-21508-8'

    //When
    const actual = validateISBN(given)

    //Then
    expect(actual).toBe(true)
  })

  test('should invalidate an ISBN', () => {
    //Given
    const given = '3-598-21508-9'

    //When
    const actual = validateISBN(given)

    //Then
    expect(actual).toBe(false)
  })

  test('should validate an ISBN with check digit "X"', () => {
    //Given
    const given = '3-598-21507-X'

    //When
    const actual = validateISBN(given)

    //Then
    expect(actual).toBe(true)
  })

  test('should invalidate an ISBN that contains at least one non-digit', () => {
    //Given
    const given1 = '3-598-s1508-9'
    const given2 = '3-598-2i5@8-9'
    const given3 = '3-598-215 8-9'

    //When
    const actual1 = validateISBN(given1)
    const actual2 = validateISBN(given2)
    const actual3 = validateISBN(given3)

    //Then
    expect(actual1).toBe(false)
    expect(actual2).toBe(false)
    expect(actual3).toBe(false)
  })

  test('should invalidate an ISBN with its check digit other than "X" or a digit', () => {
    //Given
    const given = '3-598-21507-A'

    //When
    const actual = validateISBN(given)

    //Then
    expect(actual).toBe(false)
  })

  test('should invalidate an ISBN that does not have 10 digits', () => {
    //Given
    const given1 = '3-598-21507-82'
    const given2 = '3-598-2150-8'

    //When
    const actual1 = validateISBN(given1)
    const actual2 = validateISBN(given2)

    //Then
    expect(actual1).toBe(false)
    expect(actual2).toBe(false)
  })
})
