import { Robot } from './robot-simulator'

describe('robot', () => {
  test('should correctly position robot on the grid', () => {
    //Given
    const robot = new Robot({ x: 7, y: 3, direction: 'north' })

    //When
    const actual = robot.Position

    //Then
    expect(actual).toEqual({ x: 7, y: 3 })
  })

  describe('rotations', () => {
    test('should switch robot direction to right', () => {
      //Given
      const robot = new Robot({ x: 0, y: 0, direction: 'north' })

      //When
      robot.execute('RRR')

      //Then
      expect(robot.Direction).toBe('west')
    })

    test('should switch robot direction to left', () => {
      //Given
      const robot = new Robot({ x: 0, y: 0, direction: 'north' })

      //When
      robot.execute('LLL')

      //Then
      expect(robot.Direction).toBe('east')
    })
  })

  describe('movements', () => {
    test('should move robot forward on west direction', () => {
      //Given
      const robot = new Robot({ x: 5, y: 3, direction: 'west' })

      //When
      robot.execute('AAA')

      //Then
      expect(robot.Position).toEqual({ x: 2, y: 3 })
      expect(robot.Direction).toBe('west')
    })

    test('should move robot forward on north direction', () => {
      //Given
      const robot = new Robot({ x: 0, y: 0, direction: 'north' })

      //When
      robot.execute('AAA')

      //Then
      expect(robot.Position).toEqual({ x: 0, y: 3 })
      expect(robot.Direction).toBe('north')
    })

    test('should move robot forward on east direction', () => {
      //Given
      const robot = new Robot({ x: 0, y: 4, direction: 'east' })

      //When
      robot.execute('AAA')

      //Then
      expect(robot.Position).toEqual({ x: 3, y: 4 })
      expect(robot.Direction).toBe('east')
    })

    test('should move robot forward on south direction', () => {
      //Given
      const robot = new Robot({ x: 3, y: 5, direction: 'south' })

      //When
      robot.execute('AAA')

      //Then
      expect(robot.Position).toEqual({ x: 3, y: 2 })
      expect(robot.Direction).toBe('south')
    })
  })

  test('should move and turn robot', () => {
    //Given
    const robot = new Robot({ x: 7, y: 3, direction: 'north' })

    //When
    robot.execute('RAALAL')

    //Then
    expect(robot.Position).toEqual({ x: 9, y: 4 })
    expect(robot.Direction).toBe('west')
  })

  test('should not allow robot to move past X axis left limit', () => {
    //Given
    const robot = new Robot({ x: 1, y: 3, direction: 'north' })

    //Then
    expect(() => robot.execute('LAAA')).toThrowError()
  })

  test('should not allow robot to move past Y axis bottom limit', () => {
    //Given
    const robot = new Robot({ x: 3, y: 1, direction: 'north' })

    //Then
    expect(() => robot.execute('RRAAA')).toThrowError()
  })

  test('should not respond to unknown command', () => {
    //Given
    const robot = new Robot({ x: 3, y: 1, direction: 'north' })

    //Then
    expect(() => robot.execute('RRETYO')).toThrowError()
  })

  test('should respond to commands that do not follow case-sensitivity rule', () => {
    //Given
    const robot = new Robot({ x: 7, y: 3, direction: 'north' })

    //When
    robot.execute('raaLAl')

    //Then
    expect(robot.Position).toEqual({ x: 9, y: 4 })
    expect(robot.Direction).toBe('west')
  })
})
