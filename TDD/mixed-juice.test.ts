import { JuiceShop } from './mixed-juice'

describe('juice shop', () => {
  describe('preparation time', () => {
    test('should notify the preparation time for a juice', () => {
      //Given
      const shop = new JuiceShop()
      const item = 'Tropical Island'

      //When
      const actual = shop.getPreparationTime(item)

      //Then
      expect(actual).toBe(3)
    })

    test('should notify the preparation time for a juice whom preparation time is unknown', () => {
      //Given
      const shop = new JuiceShop()
      const item = 'Blended banana'

      //When
      const actual = shop.getPreparationTime(item)

      //Then
      expect(actual).toBe(2.5)
    })
  })

  describe('specification', () => {
    test('should ', () => {
      //Given
      const shop = new JuiceShop()
      const availableLimes = ['small', 'small', 'large', 'medium', 'small']

      //When
      const actual = shop.limesToCut(25, availableLimes)

      //Then
      expect(actual).toBe(4)
    })
  })
})
