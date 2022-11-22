export const MaximumChessboardSquares = 64

export class GrainChessboard {
  squares: number
  GrainFilledChessboard: number[]

  constructor(squares: number) {
    this.squares = squares

    this.handleSquaresLimit()
    this.createGrainChessboard()
  }

  private handleSquaresLimit() {
    if (this.squares > MaximumChessboardSquares) {
      throw new Error('Maximum chessboard squares exceeded!')
    }
    if (this.squares < 1) {
      throw new Error('Minimum chessboard squares exceeded!')
    }
  }

  private createGrainChessboard() {
    const chessboard = [...Array(this.squares + 1).keys()]
    chessboard.shift()

    const GrainFilledChessboard = [1]
    for (let i = 1; i <= chessboard.length - 1; i++) {
      GrainFilledChessboard.push(GrainFilledChessboard[i - 1] * 2)
    }

    this.GrainFilledChessboard = GrainFilledChessboard
  }

  public getTotalGrains(): number {
    const sum = this.GrainFilledChessboard.reduce((acc, element) => {
      return acc + element
    }, 0)

    return sum
  }

  public getGrainsBySquare(square: number): number {
    return this.GrainFilledChessboard[square - 1]
  }
}
