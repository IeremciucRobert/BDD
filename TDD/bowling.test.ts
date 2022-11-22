import { BowlingGame } from './bowling'

describe('bowling game', () => {
  describe('should calculate total score', () => {
    test('for only an open frame game', () => {
      //Given
      const game = new BowlingGame()
      const frames = [5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

      //When
      frames.forEach((f) => game.roll(f))

      //Then
      expect(game.score).toBe(9)
    })

    test('for only a spare and an open frame game', () => {
      //Given
      const game = new BowlingGame()
      const frames = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

      //When
      frames.forEach((f) => game.roll(f))

      //Then
      expect(game.score).toBe(16)
    })

    test('for two consecutive spare frames', () => {
      //Given
      const game = new BowlingGame()
      const frames = [6, 4, 6, 4, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

      //When
      frames.forEach((f) => game.roll(f))

      //Then
      expect(game.score).toBe(34)
    })

    test('for only spares', () => {
      //Given
      const game = new BowlingGame()
      const frames = [6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 2]

      //When
      frames.forEach((f) => game.roll(f))

      //Then
      expect(game.score).toBe(156)
    })

    test('for only a strike game', () => {
      //Given
      const game = new BowlingGame()
      const frames = [0, 10, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

      //When
      frames.forEach((f) => game.roll(f))

      //Then
      expect(game.score).toBe(24)
    })

    test('for two consecutive strikes', () => {
      //Given
      const game = new BowlingGame()
      const frames = [0, 10, 10, 4, 3, 2, 0, 10, 10, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0]

      //When
      frames.forEach((f) => game.roll(f))

      //Then
      expect(game.score).toBe(90)
    })

    test('for only strikes', () => {
      //Given
      const game = new BowlingGame()
      const frames = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

      //When
      frames.forEach((f) => game.roll(f))

      //Then
      expect(game.score).toBe(300)
    })

    test('for consecutive strike and spare', () => {
      //Given
      const game = new BowlingGame()
      const frames = [0, 10, 6, 4, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

      //When
      frames.forEach((f) => game.roll(f))

      //Then
      expect(game.score).toBe(38)
    })

    test('for consecutive strike, spare and open frame', () => {
      //Given
      const game = new BowlingGame()
      const frames = [0, 10, 6, 4, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

      //When
      frames.forEach((f) => game.roll(f))

      //Then
      expect(game.score).toBe(40)
    })
  })

  describe('should secure 10th frame rules', () => {
    test('when last frame is an open frame', () => {
      //Given
      const game = new BowlingGame()
      const frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3]

      //When
      frames.forEach((f) => game.roll(f))

      //Then
      expect(game.score).toBe(9)
    })

    test('when last frame is spare', () => {
      //Given
      const game = new BowlingGame()
      const frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 4, 2]

      //When
      frames.forEach((f) => game.roll(f))

      //Then
      expect(game.score).toBe(12)
    })

    test('when last frame is strike', () => {
      //Given
      const game = new BowlingGame()
      const frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]

      //When
      frames.forEach((f) => game.roll(f))

      //Then
      expect(game.score).toBe(30)
    })
  })

  describe('should reject incorrect rolls', () => {
    test('when a single roll input is negative or exceeds available pins', () => {
      //Given
      const game = new BowlingGame()
      const frames1 = [0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const frames2 = [0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

      //Then
      expect(() => frames1.forEach((f) => game.roll(f))).toThrowError()
      expect(() => frames2.forEach((f) => game.roll(f))).toThrowError()
    })

    test('when number of rolls were exceeded', () => {
      //Given
      const game = new BowlingGame()
      const frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]

      //Then
      expect(() => frames.forEach((f) => game.roll(f))).toThrowError()
    })
  })
})
