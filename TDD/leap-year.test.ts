import { isLeapYear } from './leap-year'

describe('leap year', () => {
  test('should determine that given year is a leap year', () => {
    //Given
    const year = 808

    //When
    const actual = isLeapYear(year)

    //Then
    expect(actual).toBe(true)
  })

  test('should determine that given year is not a leap year', () => {
    //Given
    const year = 802

    //When
    const actual = isLeapYear(year)

    //Then
    expect(actual).toBe(false)
  })

  test('should determine that given year is not a leap year as it is century change year', () => {
    //Given
    const year = 700

    //When
    const actual = isLeapYear(year)

    //Then
    expect(actual).toBe(false)
  })

  test('should determine that given year is a leap year as it is start of another 400 years', () => {
    //Given
    const year1 = 800
    const year2 = 1200

    //When
    const actual1 = isLeapYear(year1)
    const actual2 = isLeapYear(year2)

    //Then
    expect(actual1).toBe(true)
    expect(actual2).toBe(true)
  })

  test(`should determine that given year is not a leap year as it is not start of another 400 years
  and it is century start year`, () => {
    //Given
    const year = 1100

    //When
    const actual = isLeapYear(year)

    //Then
    expect(actual).toBe(false)
  })
})
