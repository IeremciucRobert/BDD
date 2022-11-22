import { GrainChessboard } from './grains'

describe('chessboard squares with grains', () => {
  describe('create and fill the squares', () => {
    test('should successfully complete', () => {
      const squares = 4

      const actual = new GrainChessboard(squares)

      expect(actual.GrainFilledChessboard.length).toBe(4)
      expect(actual.GrainFilledChessboard[3]).toBe(8)
    })

    test('should throw error when given square number is above maximum allowed', () => {
      const squares = 65

      expect(() => new GrainChessboard(squares)).toThrow(Error)
    })

    test('should throw error when given square number is less than one', () => {
      const squaresChessboard1 = 0
      const squaresChessboard2 = -5

      expect(() => new GrainChessboard(squaresChessboard1)).toThrow(Error)
      expect(() => new GrainChessboard(squaresChessboard2)).toThrow(Error)
    })
  })

  describe('total amount of grains', () => {
    test('should correctly be calculated for 4 squares', () => {
      const squares = 4
      const expected = 15
      const sut = new GrainChessboard(squares)

      const actual = sut.getTotalGrains()

      expect(actual).toBe(expected)
    })

    test('should correctly be calculated for 64 squares', () => {
      const squares = 64
      const expected = 18446744073709551615
      const sut = new GrainChessboard(squares)

      const actual = sut.getTotalGrains()

      expect(actual).toBe(expected)
    })
  })

  describe('should retrieve the amount of grains', () => {
    test('from square 3', () => {
      const squares = 4
      const square = 3
      const expected = 4
      const sut = new GrainChessboard(squares)

      const actual = sut.getGrainsBySquare(square)

      expect(actual).toBe(expected)
    })

    test('from square 12', () => {
      const squares = 20
      const square = 12
      const expected = 2048
      const sut = new GrainChessboard(squares)

      const actual = sut.getGrainsBySquare(square)

      expect(actual).toBe(expected)
    })
  })
})
