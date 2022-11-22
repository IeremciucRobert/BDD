import { Forth } from './forth'

describe('forth basic evaluator', () => {
  describe('operations', () => {
    test('should add numbers to stack', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate('1 2 3 4 5')

      //Then
      expect(forth.stack).toEqual([1, 2, 3, 4, 5])
    })

    test('should add numbers from the stack', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate('1 2 +')

      //Then
      expect(forth.stack).toEqual([3])
    })

    test('should multiply numbers from the stack', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate('3 2 *')

      //Then
      expect(forth.stack).toEqual([6])
    })

    test('should add and multiply numbers from the stack', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate('3 2 + 6 *')

      //Then
      expect(forth.stack).toEqual([30])
    })

    test('should evaluate mixed operations of numbers from the stack', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate('3 2 + 6 * 2 + 2 / 1 -')

      //Then
      expect(forth.stack).toEqual([15])
    })

    test('should evaluate uneven pairs of number-operator from the stack', () => {
      //Given
      const forth1 = new Forth()
      const forth2 = new Forth()
      const forth3 = new Forth()

      //When
      forth1.evaluate('3 2 6 * +')
      forth2.evaluate('3 6 2 / 5 - +')
      forth3.evaluate('20 2 * 2 + 6 - 2 /')

      //Then
      expect(forth1.stack).toEqual([15])
      expect(forth2.stack).toEqual([1])
      expect(forth3.stack).toEqual([18])
    })
  })

  describe('actions', () => {
    test('should remove previous element on the stack', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate('1 2 3 drop')

      //Then
      expect(forth.stack).toEqual([1, 2])
    })

    test('should remove previous two elements on the stack', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate('1 2 3 drop drop')

      //Then
      expect(forth.stack).toEqual([1])
    })

    test('should duplicate previous element on the stack', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate('1 2 3 dup')

      //Then
      expect(forth.stack).toEqual([1, 2, 3, 3])
    })

    test('should duplicate previous element twice on the stack', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate('1 2 3 dup dup')

      //Then
      expect(forth.stack).toEqual([1, 2, 3, 3, 3])
    })

    test('should swap previous two elements on the stack', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate('1 2 3 swap')

      //Then
      expect(forth.stack).toEqual([1, 3, 2])
    })

    test('should swap previous two elements twice on the stack', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate('1 2 3 swap swap')

      //Then
      expect(forth.stack).toEqual([1, 2, 3])
    })

    test('should copy the element before the previous element on the stack', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate('1 2 3 over over')

      //Then
      expect(forth.stack).toEqual([1, 2, 3, 2, 3])
    })

    test('should not take into consideration commands case sensitivity', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate('1 2 3 ovEr SWap')

      //Then
      expect(forth.stack).toEqual([1, 2, 2, 3])
    })
  })

  describe('user defined commands', () => {
    test('should add new user defined command - multiple commands', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate(': dup-twice dup dup ;')
      forth.evaluate('1 2 3 dup-twice')

      //Then
      expect(forth.stack).toEqual([1, 2, 3, 3, 3])
    })

    test('should add new user defined command - multiple mixed commands', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate(': swap-copy swap over ;')
      forth.evaluate('1 2 3 swap-copy')

      //Then
      expect(forth.stack).toEqual([1, 3, 2, 3])
    })

    test('should add new user defined command - overrides another user defined command', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate(': swap-copy swap over ;')
      forth.evaluate(': switch-copy swap-copy ;')
      forth.evaluate(': switchAndCopy switch-copy ;')
      forth.evaluate('1 2 3 switchAndCopy')

      //Then
      expect(forth.stack).toEqual([1, 3, 2, 3])
    })

    test('should add new user defined command - inserts numbers to stack', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate(': countToThree 1 2 3 ;')
      forth.evaluate('countToThree')

      //Then
      expect(forth.stack).toEqual([1, 2, 3])
    })

    test('should add new user defined command - inserts numbers to stack with overwritten command', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate(': countToThree 1 2 3 ;')
      forth.evaluate(': count countToThree ;')
      forth.evaluate('count')

      //Then
      expect(forth.stack).toEqual([1, 2, 3])
    })

    test('should add new user defined command - overwrites built-in operators', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate(': + * ;')
      forth.evaluate('2 3 +')

      //Then
      expect(forth.stack).toEqual([6])
    })

    test('should add new user defined commands - overwrites after assigning to new command', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate(': add 5 ;')
      forth.evaluate(': re-add add ;')
      forth.evaluate(': add 6 ;')
      forth.evaluate('re-add add')

      //Then
      expect(forth.stack).toEqual([5, 6])
    })

    test('should add new user defined commands - mixed built-in and other user defined commands', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate(': once 5 ;')
      forth.evaluate(': add once dup ;')
      forth.evaluate(': re-add add swap swap ;')
      forth.evaluate(': add 6 ;')
      forth.evaluate('add re-add')

      //Then
      expect(forth.stack).toEqual([6, 5, 5])
    })

    test('should add new user defined command - mixed built-in with user defined commands and overwritten operators', () => {
      //Given
      const forth = new Forth()

      //When
      forth.evaluate(': once 5 ;')
      forth.evaluate(': add once + ;')
      forth.evaluate(': re-add add 6 * ;')
      forth.evaluate(': add 6 ;')
      forth.evaluate('add re-add')

      //Then
      expect(forth.stack).toEqual([66])
    })
  })
})
