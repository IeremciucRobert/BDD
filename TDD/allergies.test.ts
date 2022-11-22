import { AllergyTest } from './allergies'

describe('allergies', () => {
  test('should determine that a certain allergy was found in allergy test', () => {
    //Given
    const allergyTest = new AllergyTest(3)

    //When
    const actual = allergyTest.isAllergicTo('eggs')

    //Then
    expect(actual).toBe(true)
  })

  test('should determine that a certain allergy was not found in allergy test', () => {
    //Given
    const allergyTest = new AllergyTest(34)

    //When
    const actual = allergyTest.isAllergicTo('eggs')

    //Then
    expect(actual).toBe(false)
  })

  test('should find all the allergies from the test score', () => {
    //Given
    const allergyTest1 = new AllergyTest(34)
    const allergyTest2 = new AllergyTest(129)
    const allergyTest3 = new AllergyTest(22)

    //When
    const actual1 = allergyTest1.Allergens
    const actual2 = allergyTest2.Allergens
    const actual3 = allergyTest3.Allergens

    //Then
    expect(actual1).toEqual(['chocolate', 'peanuts'])
    expect(actual2).toEqual(['cats', 'eggs'])
    expect(actual3).toEqual(['tomatoes', 'shellfish', 'peanuts'])
  })

  test('should find all the allergies from a test that contains all allergies', () => {
    //Given
    const allergyTest = new AllergyTest(255)

    //When
    const actual = allergyTest.Allergens

    //Then
    expect(actual).toEqual([
      'cats',
      'pollen',
      'chocolate',
      'tomatoes',
      'strawberries',
      'shellfish',
      'peanuts',
      'eggs',
    ])
  })

  test('should find all the allergies from a test score that contains unknown allergies', () => {
    //Given
    const allergyTest1 = new AllergyTest(256)
    const allergyTest2 = new AllergyTest(513)
    const allergyTest3 = new AllergyTest(1024)
    const allergyTest4 = new AllergyTest(1029)

    //When
    const actual1 = allergyTest1.Allergens
    const actual2 = allergyTest2.Allergens
    const actual3 = allergyTest3.Allergens
    const actual4 = allergyTest4.Allergens

    //Then
    expect(actual1).toEqual(['eggs'])
    expect(actual2).toEqual(['peanuts', 'eggs'])
    expect(actual3).toEqual(['shellfish'])
    expect(actual4).toEqual(['strawberries', 'eggs'])
  })

  test('should find no allergies', () => {
    //Given
    const allergyTest = new AllergyTest(0)

    //When
    const actual = allergyTest.Allergens

    //Then
    expect(actual).toEqual([])
  })

  test('should throw error when the allergy score to test is a negative number', () => {
    //Then
    expect(() => new AllergyTest(-1)).toThrowError()
  })
})
