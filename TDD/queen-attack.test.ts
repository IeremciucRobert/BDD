import { QueenAttack } from './queen-attack'

describe('queen attack', () => {
  describe('should determine they can attack each other', () => {
    test('when they are on the same column at initial default positions', () => {
      //Given
      const queenAttack = new QueenAttack()

      //When
      const actual = queenAttack.canAttackEachOther

      //Then
      expect(actual).toBe(true)
    })

    test('when they are on the same row', () => {
      //Given
      const whiteQueenPosition = { x: 1, y: 2 }
      const blackQueenPosition = { x: 1, y: 6 }
      const queenAttack = new QueenAttack(whiteQueenPosition, blackQueenPosition)

      //When
      const actual = queenAttack.canAttackEachOther

      //Then
      expect(actual).toBe(true)
    })

    test('when black queen is on white queen`s top left diagonal', () => {
      //Given
      const whiteQueenPosition = { x: 4, y: 2 }
      const blackQueenPosition = { x: 1, y: 5 }
      const queenAttack = new QueenAttack(whiteQueenPosition, blackQueenPosition)

      //When
      const actual = queenAttack.canAttackEachOther

      //Then
      expect(actual).toBe(true)
    })

    test('when black queen is on white queen`s top left diagonal edges', () => {
      //Given
      const whiteQueenPosition = { x: 8, y: 1 }
      const blackQueenPosition = { x: 1, y: 8 }
      const queenAttack = new QueenAttack(whiteQueenPosition, blackQueenPosition)

      //When
      const actual = queenAttack.canAttackEachOther

      //Then
      expect(actual).toBe(true)
    })

    test('when black queen is on white queen`s top right diagonal', () => {
      //Given
      const whiteQueenPosition = { x: 4, y: 2 }
      const blackQueenPosition = { x: 8, y: 6 }
      const queenAttack = new QueenAttack(whiteQueenPosition, blackQueenPosition)

      //When
      const actual = queenAttack.canAttackEachOther

      //Then
      expect(actual).toBe(true)
    })

    test('when black queen is on white queen`s top right diagonal edges', () => {
      //Given
      const whiteQueenPosition = { x: 1, y: 1 }
      const blackQueenPosition = { x: 8, y: 8 }
      const queenAttack = new QueenAttack(whiteQueenPosition, blackQueenPosition)

      //When
      const actual = queenAttack.canAttackEachOther

      //Then
      expect(actual).toBe(true)
    })

    test('when black queen is on white queen`s bottom left diagonal', () => {
      //Given
      const whiteQueenPosition = { x: 4, y: 5 }
      const blackQueenPosition = { x: 1, y: 2 }
      const queenAttack = new QueenAttack(whiteQueenPosition, blackQueenPosition)

      //When
      const actual = queenAttack.canAttackEachOther

      //Then
      expect(actual).toBe(true)
    })

    test('when black queen is on white queen`s bottom left diagonal edges', () => {
      //Given
      const whiteQueenPosition = { x: 8, y: 8 }
      const blackQueenPosition = { x: 1, y: 1 }
      const queenAttack = new QueenAttack(whiteQueenPosition, blackQueenPosition)

      //When
      const actual = queenAttack.canAttackEachOther

      //Then
      expect(actual).toBe(true)
    })

    test('when black queen is on white queen`s bottom right diagonal', () => {
      //Given
      const whiteQueenPosition = { x: 4, y: 5 }
      const blackQueenPosition = { x: 8, y: 1 }
      const queenAttack = new QueenAttack(whiteQueenPosition, blackQueenPosition)

      //When
      const actual = queenAttack.canAttackEachOther

      //Then
      expect(actual).toBe(true)
    })

    test('when black queen is on white queen`s bottom right diagonal edges', () => {
      //Given
      const whiteQueenPosition = { x: 1, y: 8 }
      const blackQueenPosition = { x: 8, y: 1 }
      const queenAttack = new QueenAttack(whiteQueenPosition, blackQueenPosition)

      //When
      const actual = queenAttack.canAttackEachOther

      //Then
      expect(actual).toBe(true)
    })

    test('when queens are on board diagonal', () => {
      //Given
      const whiteQueenPosition = { x: 2, y: 2 }
      const blackQueenPosition = { x: 7, y: 7 }
      const queenAttack = new QueenAttack(whiteQueenPosition, blackQueenPosition)

      //When
      const actual = queenAttack.canAttackEachOther

      //Then
      expect(actual).toBe(true)
    })
  })
  describe('should determine they can not attack each other', () => {
    test('when they are not on same diagonal, row and column', () => {
      //Given
      const whiteQueenPosition = { x: 4, y: 2 }
      const blackQueenPosition = { x: 8, y: 5 }
      const queenAttack = new QueenAttack(whiteQueenPosition, blackQueenPosition)

      //When
      const actual = queenAttack.canAttackEachOther

      //Then
      expect(actual).toBe(false)
    })
  })

  test('should throw error when at least one of queens is positioned outside boundaries', () => {
    //Given
    const whiteQueenPosition = { x: 0, y: 2 }
    const blackQueenPosition = { x: 8, y: 10 }

    expect(() => new QueenAttack(whiteQueenPosition, blackQueenPosition)).toThrowError()
  })

  test('should throw error when queens are placed on same square', () => {
    //Given
    const whiteQueenPosition = { x: 3, y: 4 }
    const blackQueenPosition = { x: 3, y: 4 }

    //Then
    expect(() => new QueenAttack(whiteQueenPosition, blackQueenPosition)).toThrowError()
  })
})
