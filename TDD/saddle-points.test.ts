import { getSaddlePoints } from './saddle-points'

describe('saddle points', () => {
  test('should provide all saddle points from a matrix with only a row', () => {
    //Given
    const matrix = [[9, 8, 7]]

    //When
    const actual = getSaddlePoints(matrix)

    //Then
    expect(actual).toMatchObject([9])
  })

  test('should provide all saddle points from a single value matrix', () => {
    //Given
    const matrix = [[9]]

    //When
    const actual = getSaddlePoints(matrix)

    //Then
    expect(actual).toMatchObject([9])
  })

  test('should provide all saddle points from a matrix with row containing two identical values', () => {
    //Given
    const matrix = [
      [9, 8, 7],
      [6, 7, 2],
      [5, 5, 3],
    ]

    //When
    const actual = getSaddlePoints(matrix)

    //Then
    expect(actual).toMatchObject([5, 5])
  })

  test('should not provide any saddle points from a matrix without saddle points', () => {
    //Given
    const matrix = [
      [9, 8, 7],
      [6, 9, 2],
      [7, 9, 3],
    ]

    //When
    const actual = getSaddlePoints(matrix)

    //Then
    expect(actual).toMatchObject([])
  })

  test('should provide all saddle points from a matrix with unequal number of rows and columns', () => {
    //Given
    const matrix1 = [
      [9, 8, 7, 6],
      [6, 7],
      [5, 5],
    ]
    const matrix2 = [
      [9, 8, 7, 9],
      [6, 7],
      [5, 5],
    ]

    //When
    const actual1 = getSaddlePoints(matrix1)
    const actual2 = getSaddlePoints(matrix2)

    //Then
    expect(actual1).toMatchObject([5, 5])
    expect(actual2).toMatchObject([9, 5, 5])
  })
})
