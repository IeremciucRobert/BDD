import { getWordsOccurrences } from './word-count'

describe('count word occurrences', () => {
  test('for sentence with only a word', () => {
    const phrase = 'word'
    const expected = { word: 1 }

    const actual = getWordsOccurrences(phrase)

    expect(actual).toEqual(expected)
  })

  test('for simple sentence', () => {
    const phrase = 'is this is a simple dummy phrase is it'
    const expected = {
      this: 1,
      is: 3,
      a: 1,
      simple: 1,
      dummy: 1,
      phrase: 1,
      it: 1,
    }

    const actual = getWordsOccurrences(phrase)

    expect(actual).toEqual(expected)
  })

  test('for cramped list sentence', () => {
    const phrase = 'carrot,potato,tomato'
    const expected = {
      carrot: 1,
      potato: 1,
      tomato: 1,
    }

    const actual = getWordsOccurrences(phrase)

    expect(actual).toEqual(expected)
  })

  test('for capitalized sentence', () => {
    const phrase = 'Is it dummy a Dummy is It'
    const expected = {
      is: 2,
      it: 2,
      dummy: 2,
      a: 1,
    }

    const actual = getWordsOccurrences(phrase)

    expect(actual).toEqual(expected)
  })

  test('for sentence with symbols', () => {
    const phrase = 'This is a dummy. Is it really?'
    const expected = {
      this: 1,
      is: 2,
      a: 1,
      dummy: 1,
      it: 1,
      really: 1,
    }

    const actual = getWordsOccurrences(phrase)

    expect(actual).toEqual(expected)
  })

  test('for sentence with shorthanded words', () => {
    const phrase = "That's a dummy. It's really?"
    const expected = {
      "that's": 1,
      a: 1,
      dummy: 1,
      "it's": 1,
      really: 1,
    }

    const actual = getWordsOccurrences(phrase)

    expect(actual).toEqual(expected)
  })

  test('for sentence spanning on multiple lines', () => {
    const phrase = "That's a dummy.\nIt's really?"
    const expected = {
      "that's": 1,
      a: 1,
      dummy: 1,
      "it's": 1,
      really: 1,
    }

    const actual = getWordsOccurrences(phrase)

    expect(actual).toEqual(expected)
  })

  test('for sentence with tab character', () => {
    const phrase = "That's a dummy.\tIt's really?"
    const expected = {
      "that's": 1,
      a: 1,
      dummy: 1,
      "it's": 1,
      really: 1,
    }

    const actual = getWordsOccurrences(phrase)

    expect(actual).toEqual(expected)
  })

  test('for sentence with asd', () => {
    const phrase = `"That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.`
    const expected = {
      "that's": 1,
      the: 2,
      password: 2,
      123: 1,
      cried: 1,
      special: 1,
      agent: 1,
      so: 1,
      i: 1,
      fled: 1,
    }

    const actual = getWordsOccurrences(phrase)

    expect(actual).toEqual(expected)
  })
})
