export class InvalidInputError extends Error {
  constructor(message: string) {
    super()
    this.message = message
  }
}

interface Dimensions {
  rows: number
  columns: number
}
type Board = [string, number][]
type Coordinates = number[][]

const mine = '*'

export class Minesweeper {
  board: Board
  coordinates: Coordinates

  public create(dimensions: Dimensions, coordinates: Coordinates): void {
    this.validateInput(dimensions, coordinates)

    this.board = Array(dimensions.rows)
      .fill('')
      .map(() => Array(dimensions.columns).fill('')) as Board

    coordinates.forEach((coordinate) => {
      const row = coordinate[0] - 1
      const column = coordinate[1] - 1

      this.validateMineCoordinates(row, column)

      this.board[row][column] = mine
    })

    this.countEachSquareAdjacentMines()
  }

  private countEachSquareAdjacentMines() {
    this.board.forEach((row, rowIndex) => {
      row.forEach((_, columnIndex) => {
        const isMine = this.board[rowIndex][columnIndex] === mine
        if (!isMine) {
          return
        }

        const rowStartIndex = Math.max(0, rowIndex - 1)
        const rowEndIndex = Math.min(this.board.length - 1, rowIndex + 1)
        const colStartIndex = Math.max(0, columnIndex - 1)
        const colEndIndex = Math.min(row.length - 1, columnIndex + 1)

        for (let a = rowStartIndex; a <= rowEndIndex; a++) {
          for (let b = colStartIndex; b <= colEndIndex; b++) {
            const square = this.board[a][b]

            if (square !== mine) {
              if (square === '') {
                this.board[a][b] = 1
              } else {
                const count = this.board[a][b] as number
                this.board[a][b] = count + 1
              }
            }
          }
        }
      })
    })
  }

  private validateInput(dimensions: Dimensions, coordinates: Coordinates) {
    if (coordinates.length === 0) {
      throw new InvalidInputError('You must specify at least one mine')
    }
    if (dimensions.rows < 3 || dimensions.columns < 3) {
      throw new InvalidInputError('Board is too small')
    }
    if (coordinates.length > (dimensions.rows * dimensions.columns) / 2) {
      throw new InvalidInputError('Too many mines')
    }
    if (dimensions.rows !== dimensions.columns) {
      throw new InvalidInputError('Board should form a square')
    }
  }

  private validateMineCoordinates(row: number, column: number) {
    if (this.board[row] === undefined || this.board[row][column] === undefined) {
      throw new InvalidInputError('Mine was inserted outside of the board')
    }
    if (this.board[row][column] === mine) {
      throw new InvalidInputError(
        `A mine was already set on these coordinates: row: ${row}, column: ${column}`
      )
    }
  }
}
