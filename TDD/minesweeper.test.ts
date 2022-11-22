import { InvalidInputError, Minesweeper } from './minesweeper'

describe('minesweeper', () => {
  test('should create board field of given dimensions', () => {
    //Given
    const dimension = { rows: 5, columns: 5 }
    const coordinates = [[1, 1]]
    const game = new Minesweeper()

    //When
    game.create(dimension, coordinates)

    //Then
    expect(game.board.length).toBe(dimension.rows)
  })

  test('should insert mines at given coordinates', () => {
    //Given
    const dimension = { rows: 5, columns: 5 }
    const coordinates = [
      [1, 2],
      [1, 4],
    ]
    const game = new Minesweeper()

    //When
    game.create(dimension, coordinates)

    //Then
    expect(game.board[0][0]).toBe(1)
    expect(game.board[0][1]).toBe('*')
    expect(game.board[1][0]).toBe(1)
  })

  test('should assign each square the number of adjacent mines', () => {
    //Given
    const dimension = { rows: 4, columns: 4 }
    const coordinates = [
      [2, 2],
      [2, 3],
      [4, 4],
    ]
    const game = new Minesweeper()

    //When
    game.create(dimension, coordinates)

    //Then
    expect(game.board[0]).toEqual([1, 2, 2, 1])
    expect(game.board[1]).toEqual([1, '*', '*', 1])
    expect(game.board[2]).toEqual([1, 2, 3, 2])
    expect(game.board[3]).toEqual(['', '', 1, '*'])
  })

  describe('input verification', () => {
    test('should throw error for not inserting any mines', () => {
      //Given
      const dimension = { rows: 4, columns: 4 }
      const coordinates = []
      const game = new Minesweeper()

      //Then
      expect(() => game.create(dimension, coordinates)).toThrowError(InvalidInputError)
    })

    test('should throw error when the board has less than 3 rows or columns', () => {
      //Given
      const dimension = { rows: 2, columns: 2 }
      const coordinates = [[1, 1]]
      const game = new Minesweeper()

      //Then
      expect(() => game.create(dimension, coordinates)).toThrowError(InvalidInputError)
    })

    test('should throw error for inserting a mine outside the board row edges', () => {
      //Given
      const dimension = { rows: 3, columns: 3 }
      const coordinates1 = [[2, 4]]
      const coordinates2 = [[-2, 4]]
      const game = new Minesweeper()

      //Then
      expect(() => game.create(dimension, coordinates1)).toThrowError(InvalidInputError)
      expect(() => game.create(dimension, coordinates2)).toThrowError(InvalidInputError)
    })

    test('should throw error for inserting a mine outside the board column edges', () => {
      //Given
      const dimension = { rows: 3, columns: 3 }
      const coordinates1 = [[4, 2]]
      const coordinates2 = [[4, -2]]
      const game = new Minesweeper()

      //Then
      expect(() => game.create(dimension, coordinates1)).toThrowError(InvalidInputError)
      expect(() => game.create(dimension, coordinates2)).toThrowError(InvalidInputError)
    })

    test('should throw error for inserting a mine on top of another mine', () => {
      //Given
      const dimension = { rows: 3, columns: 3 }
      const coordinates = [
        [2, 2],
        [2, 2],
      ]
      const game = new Minesweeper()

      //Then
      expect(() => game.create(dimension, coordinates)).toThrowError(InvalidInputError)
    })

    test('should throw error for inserting too many mines, on more than half available squares', () => {
      //Given
      const dimension = { rows: 3, columns: 3 }
      const coordinates = [
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 1],
        [2, 2],
      ]
      const game = new Minesweeper()

      //Then
      expect(() => game.create(dimension, coordinates)).toThrowError(InvalidInputError)
    })

    test('should throw error for inserting a non square board', () => {
      //Given
      const dimension = { rows: 3, columns: 5 }
      const coordinates = [[1, 1]]
      const game = new Minesweeper()

      //Then
      expect(() => game.create(dimension, coordinates)).toThrowError(InvalidInputError)
    })
  })
})
