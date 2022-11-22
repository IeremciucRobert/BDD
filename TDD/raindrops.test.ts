import { getRaindropSound } from './raindrops'

describe('raindrops', () => {
  test('should make Pling sound', () => {
    //Given
    const number = 28

    //When
    const sound = getRaindropSound(number)

    //Then
    expect(sound).toBe('Plong')
  })

  test('should make PlingPlang sound', () => {
    //Given
    const number = 30

    //When
    const sound = getRaindropSound(number)

    //Then
    expect(sound).toBe('PlingPlang')
  })

  test('should not make any sound', () => {
    //Given
    const number = 34

    //When
    const sound = getRaindropSound(number)

    //Then
    expect(sound).toBe('')
  })

  test('should throw error when no raindrop has fallen', () => {
    //Given
    const number = 0

    //Then
    expect(() => getRaindropSound(number)).toThrowError()
  })

  test('should throw error when negative raindrops are inserted', () => {
    //Given
    const number = -2

    //Then
    expect(() => getRaindropSound(number)).toThrowError()
  })
})
