import { translate } from './english-to-pigLatin'

describe('english to pig-latin', () => {
  test('should translate a word starting with a vowel', () => {
    //Given
    const word1 = 'anatomy'
    const word2 = 'xrsome'
    const word3 = 'ytthin'

    //When
    const translated1 = translate(word1)
    const translated2 = translate(word2)
    const translated3 = translate(word3)

    //Then
    expect(translated1).toBe('anatomyay')
    expect(translated2).toBe('xrsomeay')
    expect(translated3).toBe('ytthinay')
  })

  test('should translate a word starting with a consonant', () => {
    //Given
    const word = 'turn'

    //When
    const translated = translate(word)

    //Then
    expect(translated).toBe('urntay')
  })

  test('should translate a word starting with a cluster of consonants', () => {
    //Given
    const word = 'trumpet'

    //When
    const translated = translate(word)

    //Then
    expect(translated).toBe('umpettray')
  })

  test('should translate a word starting with a consonants followed by "qu"', () => {
    //Given
    const word1 = 'square'
    const word2 = 'rsquare'

    //When
    const translated1 = translate(word1)
    const translated2 = translate(word2)

    //Then
    expect(translated1).toBe('aresquay')
    expect(translated2).toBe('arersquay')
  })

  test('should translate a word starting with a consonant, or cluster, followed by "y"', () => {
    //Given
    const word = 'rhythm'

    //When
    const translated = translate(word)

    //Then
    expect(translated).toBe('ythmrhay')
  })

  test('should translate a word with 2 letters, consonant followed by "y"', () => {
    //Given
    const word = 'my'

    //When
    const translated = translate(word)

    //Then
    expect(translated).toBe('ymay')
  })

  test('should translate a word with whitespaces at edges', () => {
    //Given
    const word = '   rhythm    '

    //When
    const translated = translate(word)

    //Then
    expect(translated).toBe('ythmrhay')
  })

  test('should translate a word with only a character', () => {
    //Given
    const word1 = 'a'
    const word2 = 'b'

    //When
    const translated1 = translate(word1)
    const translated2 = translate(word2)

    //Then
    expect(translated1).toBe('aay')
    expect(translated2).toBe('bay')
  })

  test('should throw error for an empty word', () => {
    //Given
    const word1 = ''
    const word2 = '   '

    //Then
    expect(() => translate(word1)).toThrowError()
    expect(() => translate(word2)).toThrowError()
  })
})
