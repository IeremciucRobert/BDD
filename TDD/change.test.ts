import { Change, getChange } from './change'

describe('change', () => {
  test('should return a penny', () => {
    //Given
    const change = 1
    const coins = [1]

    //When
    const actual = getChange(coins, change)

    //Then
    expect(actual).toEqual([1])
  })

  test('should return a penny as change from a given set of coins', () => {
    //Given
    const change = 1
    const coins = [10, 5, 25, 1, 100]

    //When
    const actual = getChange(coins, change)

    //Then
    expect(actual).toEqual([1])
  })

  test('should return a penny and a nickel as change from a given set of coins', () => {
    //Given
    const change = 6
    const coins = [10, 5, 25, 1, 100]

    //When
    const actual = getChange(coins, change)

    //Then
    expect(actual).toEqual([5, 1])
  })

  test('should return same coin twice', () => {
    //Given
    const change = 50
    const coins = [10, 5, 25, 1, 100]

    //When
    const actual = getChange(coins, change)

    //Then
    expect(actual).toEqual([25, 25])
  })

  test('should return same coins multiple times', () => {
    //Given
    const change = 27
    const coins = [4, 5]

    //When
    const actual = getChange(coins, change)

    //Then
    expect(actual).toEqual([4, 4, 4, 5, 5, 5])
  })

  test('should return correct amount of coins for different set of coins', () => {
    //Given
    const change = 50
    const coins = [11, 25, 22, 3, 100]

    //When
    const actual = getChange(coins, change)

    //Then
    expect(actual).toEqual([25, 25])
  })

  test('should not be able to return change for negative or no amount', () => {
    //Given
    const change1 = 0
    const change2 = -1
    const coins = [1]

    //Then
    expect(() => getChange(coins, change1)).toThrowError()
    expect(() => getChange(coins, change2)).toThrowError()
  })

  test('should not be able to return change for an amount smaller than the smallest coin available', () => {
    //Given
    const change = 2
    const coins = [5]

    //Then
    expect(() => getChange(coins, change)).toThrowError()
  })

  test.only('should ', () => {
    //Given
    const given = 'some'

    //When
    const actual = new Change([4, 5], 27)

    //Then
    expect(actual).toEqual([4, 4, 4, 5, 5, 5])
  })
})
