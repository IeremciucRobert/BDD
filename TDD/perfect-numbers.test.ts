import { getNicomachusPositiveNumber, NicomachusType } from './perfect-numbers'

describe('Nicomachus', () => {
  test('should validate given positive number as perfect number', () => {
    const perfectNumber1 = 6
    const perfectNumber2 = 28

    const actual1 = getNicomachusPositiveNumber(perfectNumber1)
    const actual2 = getNicomachusPositiveNumber(perfectNumber2)

    expect(actual1).toBe(NicomachusType.PERFECT)
    expect(actual2).toBe(NicomachusType.PERFECT)
  })

  test('should validate given positive number as abundant number', () => {
    const perfectNumber1 = 12
    const perfectNumber2 = 24

    const actual1 = getNicomachusPositiveNumber(perfectNumber1)
    const actual2 = getNicomachusPositiveNumber(perfectNumber2)

    expect(actual1).toBe(NicomachusType.ABUNDANT)
    expect(actual2).toBe(NicomachusType.ABUNDANT)
  })

  test('should validate given positive number as deficient number', () => {
    const perfectNumber = 8

    const actual = getNicomachusPositiveNumber(perfectNumber)

    expect(actual).toBe(NicomachusType.DEFICIENT)
  })
})
