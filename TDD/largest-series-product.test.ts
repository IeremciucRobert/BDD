import { getLargestProduct } from './largest-series-product'

describe('largest product series', () => {
  test('should correctly identify 3 consecutive digits that form the largest product', () => {
    //Given
    const number = '1027839564'
    const series = 3

    //When
    const actual = getLargestProduct(number, series)

    //Then
    expect(actual).toBe(270)
  })

  test('should correctly identify 5 consecutive digits that form the largest product', () => {
    //Given
    const number = '1027839564'
    const series = 5

    //When
    const actual = getLargestProduct(number, series)

    //Then
    expect(actual).toBe(7560)
  })

  test('should correctly identify 6 consecutive digits that form the largest product', () => {
    //Given
    const number = '73167176531330624919225119674426574742355349194934'
    const series = 6

    //When
    const actual = getLargestProduct(number, series)

    //Then
    expect(actual).toBe(23520)
  })

  test('should correctly identify 1 consecutive digits that form the largest product', () => {
    //Given
    const number = '1027839564'
    const series = 1

    //When
    const actual = getLargestProduct(number, series)

    //Then
    expect(actual).toBe(9)
  })

  test('should correctly identify 1 consecutive digit from a number containing 0', () => {
    //Given
    const number = '0'
    const series = 1

    //When
    const actual = getLargestProduct(number, series)

    //Then
    expect(actual).toBe(0)
  })

  test('should correctly identify 3 consecutive digits that form the largest product from 3 digit number', () => {
    //Given
    const number = '142'
    const series = 3

    //When
    const actual = getLargestProduct(number, series)

    //Then
    expect(actual).toBe(8)
  })

  test('should throw error when digit series is longer than the number under test', () => {
    //Given
    const number = '195'
    const series = 4

    //Then
    expect(() => getLargestProduct(number, series)).toThrowError()
  })

  test('should throw error when number under test contains letters', () => {
    //Given
    const number = '19asd5'
    const series = 4

    //Then
    expect(() => getLargestProduct(number, series)).toThrowError()
  })
})
