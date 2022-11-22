import { MagicianCardDeck } from './elyse-enchantments'

describe('magician 10 deck card', () => {
  describe('pick a card', () => {
    test('should pick a card from the deck at given position', () => {
      const position = 2
      const deck = new MagicianCardDeck([1, 2, 4, 1])

      const actual = deck.getCardByPosition(position)

      expect(actual).toBe(4)
    })

    test('should throw error when picking a card at negative position', () => {
      const position = -1
      const deck = new MagicianCardDeck([1, 2, 4, 1])

      expect(() => deck.getCardByPosition(position)).toThrowError()
    })

    test('should throw error when picking a card at a position higher than the deck length', () => {
      const position = 4
      const deck = new MagicianCardDeck([1, 2, 4, 1])

      expect(() => deck.getCardByPosition(position)).toThrowError()
    })
  })

  describe('sleight of hand', () => {
    test('should replace a card from the deck at given position', () => {
      const position = 2
      const replacement = 8
      const deck = new MagicianCardDeck([1, 2, 4, 1])

      deck.replaceCardByPosition(position, replacement)

      expect(deck.cardDeck[position]).toBe(replacement)
    })

    test('should throw error when replacing a card at negative position', () => {
      const position = -1
      const replacement = 8
      const deck = new MagicianCardDeck([1, 2, 4, 1])

      expect(() => deck.replaceCardByPosition(position, replacement)).toThrowError()
    })

    test('should throw error when replacing a card at a position higher than the deck length', () => {
      const position = 4
      const replacement = 8
      const deck = new MagicianCardDeck([1, 2, 4, 1])

      expect(() => deck.replaceCardByPosition(position, replacement)).toThrowError()
    })
  })

  describe('make a card dissapear', () => {
    test('should remove a card from the deck at given position', () => {
      const position = 2
      const replacement = 8
      const deck = new MagicianCardDeck([1, 2, 4, 1])

      deck.removeCardByPosition(position, replacement)

      expect(deck.cardDeck[position]).toBe(replacement)
    })

    test('should throw error when removing a card at negative position', () => {
      const position = -1
      const replacement = 8
      const deck = new MagicianCardDeck([1, 2, 4, 1])

      expect(() => deck.removeCardByPosition(position, replacement)).toThrowError()
    })

    test('should throw error when removing a card at a position higher than the deck length', () => {
      const position = 4
      const replacement = 8
      const deck = new MagicianCardDeck([1, 2, 4, 1])

      expect(() => deck.removeCardByPosition(position, replacement)).toThrowError()
    })

    test('should remove the card from the top of the deck', () => {
      const deck = new MagicianCardDeck([1, 2, 4, 1])

      deck.removeAtExtremity()

      expect(deck.cardDeck.length).toBe(3)
    })

    test('should remove the card from the bottom of the deck', () => {
      const deck = new MagicianCardDeck([1, 2, 4, 1])

      deck.removeAtExtremity('bottom')

      expect(deck.cardDeck.length).toBe(3)
    })
  })

  describe('make a card appear', () => {
    test('should insert a card at the top of the deck', () => {
      const card = 12
      const deck = new MagicianCardDeck([1, 2, 4, 1])

      deck.insertAtExtremity(card)

      expect(deck.cardDeck[deck.cardDeck.length - 1]).toBe(card)
    })

    test('should insert a card at the bottom of the deck', () => {
      const card = 12
      const deck = new MagicianCardDeck([1, 2, 4, 1])

      deck.insertAtExtremity(card, 'bottom')

      expect(deck.cardDeck[0]).toBe(card)
    })
  })

  test('should check the size of the deck', () => {
    const deck = new MagicianCardDeck([1, 2, 4, 1])

    expect(deck.DeckLength).toBe(4)
  })
})
