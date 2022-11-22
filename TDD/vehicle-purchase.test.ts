import { User } from './vehicle-purchase'

describe('user', () => {
  describe('driver`s license', () => {
    test('should determine the user needs a driver`s license', () => {
      const user = new User()

      const actual1 = user.needsLicense('car')
      const actual2 = user.needsLicense('truck')

      expect(actual1).toBe(true)
      expect(actual2).toBe(true)
    })

    test('should determine the user does not need a driver`s license', () => {
      const user = new User()

      const actual1 = user.needsLicense('bike')
      const actual2 = user.needsLicense('boat')

      expect(actual1).toBe(false)
      expect(actual2).toBe(false)
    })

    test('should throw error when vehicle string is invalid', () => {
      const user = new User()

      expect(() => user.needsLicense('')).toThrowError()
      expect(() => user.needsLicense('  ')).toThrowError()
    })
  })

  describe('vehicle purchase prioritisation', () => {
    test('should alphabetically prioritize from 2 vehicles', () => {
      const user = new User()
      const vehicles = ['Mazda RX8', 'Mazda Miata']

      const actual = user.chooseVehicle(vehicles)

      expect(actual[0]).toBe(vehicles[1])
      expect(vehicles[0]).toBe('Mazda RX8')
    })

    test('should alphabetically prioritize from more than 2 vehicles', () => {
      const user = new User()
      const vehicles = ['Mazda RX8', 'Corvette Z06', 'Mazda Miata']

      const actual = user.chooseVehicle(vehicles)

      expect(actual[0]).toBe(vehicles[1])
      expect(vehicles[0]).toBe('Mazda RX8')
    })

    test('should throw error when there are less than 2 vehicle options', () => {
      const user = new User()
      const vehicles1 = ['Mazda Miata']
      const vehicles2 = []

      expect(() => user.chooseVehicle(vehicles1)).toThrowError()
      expect(() => user.chooseVehicle(vehicles2)).toThrowError()
    })

    test('should throw error when all vehicle options are the same', () => {
      const user = new User()
      const vehicles = ['Mazda Miata', 'Mazda Miata']

      expect(() => user.chooseVehicle(vehicles)).toThrowError()
    })
  })

  describe('used vehicle price estimation', () => {
    test('should estimate at 80% of original value when vehicle is less than 3 years old', () => {
      const user = new User()
      const originalPrice = 2000
      const carAge = 2
      const expectedPrice = 1600

      const actual = user.estimateResellPrice(originalPrice, carAge)

      expect(actual).toBe(expectedPrice)
    })

    test('should estimate at 70% of original value when vehicle is in between 3 and 10 years old', () => {
      const user = new User()
      const originalPrice = 2000
      const carAge = 5
      const expectedPrice = 1400

      const actual = user.estimateResellPrice(originalPrice, carAge)

      expect(actual).toBe(expectedPrice)
    })

    test('should estimate at 50% of original value when vehicle is more than 10 years old', () => {
      const user = new User()
      const originalPrice = 2000
      const carAge = 12
      const expectedPrice = 1000

      const actual = user.estimateResellPrice(originalPrice, carAge)

      expect(actual).toBe(expectedPrice)
    })

    test('should throw error when vehicle has not been used', () => {
      const user = new User()
      const originalPrice = 2000
      const carAge = 0

      expect(() => user.estimateResellPrice(originalPrice, carAge)).toThrowError()
    })

    test('should throw error when vehicle is too old', () => {
      const user = new User()
      const originalPrice = 2000
      const carAge = 40

      expect(() => user.estimateResellPrice(originalPrice, carAge)).toThrowError()
    })
  })
})
