import { cleanPhoneNumber } from './phone-number'

describe('phone number clean-up', () => {
  test('should clean up of any other characters that are non-digits', () => {
    //Given
    const given1 = '613.995.0253'
    const given2 = '613-995-0253'
    const given3 = '(613)-995-0253'

    //When
    const actual1 = cleanPhoneNumber(given1)
    const actual2 = cleanPhoneNumber(given2)
    const actual3 = cleanPhoneNumber(given3)

    //Then
    expect(actual1).toBe('6139950253')
    expect(actual2).toBe('6139950253')
    expect(actual3).toBe('6139950253')
  })

  test('should clean up a number that has country code 1 in it', () => {
    //Given
    const given1 = '+1 (613)-995-0253'
    const given2 = '1 613 995 0253'

    //When
    const actual1 = cleanPhoneNumber(given1)
    const actual2 = cleanPhoneNumber(given2)

    //Then
    expect(actual1).toBe('6139950253')
    expect(actual2).toBe('6139950253')
  })

  test('should throw error when first area code digit is not between 2 and 9', () => {
    //Given
    const given = '113-995-0253'

    //Then
    expect(() => cleanPhoneNumber(given)).toThrowError()
  })

  test('should throw error when first exchange code digit is not between 2 and 9', () => {
    //Given
    const given = '613 095 0253'

    //Then
    expect(() => cleanPhoneNumber(given)).toThrowError()
  })

  test('should throw error when country code is not 1', () => {
    //Given
    const given1 = '+2 (613)-995-0253'
    const given2 = '2 613 995 0253'

    //Then
    expect(() => cleanPhoneNumber(given1)).toThrowError()
    expect(() => cleanPhoneNumber(given2)).toThrowError()
  })

  test('should throw error when cleaned number does not have 10 digits', () => {
    //Given
    const given1 = ' (6134)-995-0253'
    const given2 = ' 61 995 0253'

    //Then
    expect(() => cleanPhoneNumber(given1)).toThrowError()
    expect(() => cleanPhoneNumber(given2)).toThrowError()
  })

  test('should throw error when cleaned number does not have any digits', () => {
    //Given
    const given1 = '  '
    const given2 = ''

    //Then
    expect(() => cleanPhoneNumber(given1)).toThrowError()
    expect(() => cleanPhoneNumber(given2)).toThrowError()
  })
})
