interface QueenPosition {
  x: number
  y: number
}

export class QueenAttack {
  white: QueenPosition
  black: QueenPosition

  private maxSquares = 8

  constructor(whiteQueenPosition = { x: 1, y: 4 }, blackQueenPosition = { x: 1, y: 8 }) {
    this.white = whiteQueenPosition
    this.black = blackQueenPosition

    this.handleExceptions()
  }

  public get canAttackEachOther(): boolean {
    return this.isOnSameRow || this.isOnSameColumn || this.isOnSameDiagonal
  }

  private get isOnSameRow(): boolean {
    return this.white.x === this.black.x
  }

  private get isOnSameColumn(): boolean {
    return this.white.y === this.black.y
  }

  private get isOnSameDiagonal(): boolean {
    const whiteX = this.white.x
    const whiteY = this.white.y

    for (let i = 1; i <= this.maxSquares; i++) {
      const isOnTopLeftDiagonal = () => {
        const hasReachedLeftEdge = whiteY + i > this.maxSquares || whiteX - i < 1
        if (hasReachedLeftEdge) {
          return false
        }

        return this.black.x === whiteX - i && this.black.y === whiteY + i
      }
      const isOnTopRightDiagonal = () => {
        const hasReachedRightEdge = whiteY + i > this.maxSquares || whiteX + i > this.maxSquares
        if (hasReachedRightEdge) {
          return false
        }

        return this.black.x === whiteX + i && this.black.y === whiteY + i
      }

      if (isOnTopLeftDiagonal() || isOnTopRightDiagonal()) {
        return true
      }
    }

    for (let i = 1; i <= this.maxSquares; i++) {
      const isOnBotLeftDiagonal = () => {
        const hasReachedLeftEdge = whiteY - i < 1 || whiteX - i < 1
        if (hasReachedLeftEdge) {
          return false
        }

        return this.black.x === whiteX - i && this.black.y === whiteY - i
      }
      const isOnBotRightDiagonal = () => {
        const hasReachedRightEdge = whiteY - i < 1 || whiteX - i > this.maxSquares
        if (hasReachedRightEdge) {
          return false
        }

        return this.black.x === whiteX + i && this.black.y === whiteY - i
      }

      if (isOnBotLeftDiagonal() || isOnBotRightDiagonal()) {
        return true
      }
    }

    return false
  }

  private get isOutsideBoundaries() {
    const allCoordinates = Object.values(this.white).concat(Object.values(this.black))
    return allCoordinates.some((e) => e < 1 || e > this.maxSquares)
  }

  private handleExceptions() {
    if (this.isOutsideBoundaries) {
      throw new Error('Queens can not be placed outside the board')
    }
    if (JSON.stringify(this.white) === JSON.stringify(this.black)) {
      throw new Error('Queens can not be placed outside the board')
    }
  }
}
