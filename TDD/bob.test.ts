import { getResponse } from './bob'

describe('bob responses', () => {
  test('should respond with "Sure." at questions', () => {
    const question1 = 'How are you?'
    const question2 = ' How are you?    '
    const question3 = 'HOw ARE YOU?'
    const expected = 'Sure.'

    const actual1 = getResponse(question1)
    const actual2 = getResponse(question2)
    const actual3 = getResponse(question3)

    expect(actual1).toBe(expected)
    expect(actual2).toBe(expected)
    expect(actual3).toBe(expected)
  })

  test('should respond with "Whoa, chill out!" when yelling at him', () => {
    const shout = 'GO AWAY!'
    const expected = 'Whoa, chill out!'

    const actual = getResponse(shout)

    expect(actual).toBe(expected)
  })

  test(`should respond with "Calm down, I know what I'm doing!" when yelling question at him`, () => {
    const shout = 'WHERE ARE YOU?'
    const expected = `Calm down, I know what I'm doing!`

    const actual = getResponse(shout)

    expect(actual).toBe(expected)
  })

  test(`should respond with "Fine. Be that way!" when addressing him without telling anything`, () => {
    const appellation1 = ''
    const appellation2 = '  '
    const expected = 'Fine. Be that way!'

    const actual1 = getResponse(appellation1)
    const actual2 = getResponse(appellation2)

    expect(actual1).toBe(expected)
    expect(actual2).toBe(expected)
  })

  test(`should respond with "Whatever." at anything else you say towards him`, () => {
    const appellation = 'Yo :)'
    const expected = 'Whatever.'

    const actual = getResponse(appellation)

    expect(actual).toBe(expected)
  })
})
