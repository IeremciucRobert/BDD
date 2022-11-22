import { BirdLogs } from './bird-watcher'

describe('bird-watcher', () => {
  test('should calculate total number of birds counted', () => {
    //Given
    const countedBirds = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]
    const birds = new BirdLogs(countedBirds)

    //When
    const actual = birds.totalCount

    //Then
    expect(actual).toBe(34)
  })

  test('should calculate total number of birds counted for a certain week', () => {
    //Given
    const countedBirds = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]
    const week = 2
    const birds = new BirdLogs(countedBirds)

    //When
    const actual = birds.weekCount(week)

    //Then
    expect(actual).toBe(12)
  })

  test('should fix bird count log', () => {
    //Given
    const countedBirds = [2, 5, 0, 7, 4, 1]
    const birds = new BirdLogs(countedBirds)

    //When
    birds.fixCountLog()

    //Then
    expect(birds.daysCount).toEqual([3, 5, 1, 7, 5, 1])
  })

  test('should calculate total number of birds counted for an uncomplete week', () => {
    //Given
    const countedBirds = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1]
    const week = 2
    const birds = new BirdLogs(countedBirds)

    //When
    const actual = birds.weekCount(week)

    //Then
    expect(actual).toBe(8)
  })

  describe('handle edge cases', () => {
    test('should throw error when inserting an empty log', () => {
      //Given
      const countedBirds = []

      //Then
      expect(() => new BirdLogs(countedBirds)).toThrowError()
    })

    test('should throw error when inserting a log containing a day count less than 0', () => {
      //Given
      const countedBirds = [2, 3, 1, -1]

      //Then
      expect(() => new BirdLogs(countedBirds)).toThrowError()
    })

    test('should throw error when the specified week to calculate is less than one', () => {
      //Given
      const countedBirds = [1]
      const week = 0
      const birds = new BirdLogs(countedBirds)

      //Then
      expect(() => birds.weekCount(week)).toThrowError()
    })

    test('should throw error when the specified week to calculate exceeds the amount of weeks logged', () => {
      //Given
      const countedBirds = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 3, 3, 4, 1, 2, 1, 1, 1]
      const week = 4
      const birds = new BirdLogs(countedBirds)

      //Then
      expect(() => birds.weekCount(week)).toThrowError()
    })
  })
})
