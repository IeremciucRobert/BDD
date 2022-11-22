export class MagicianCardDeck {
  cardDeck: number[]

  constructor(cardDeck: number[]) {
    this.cardDeck = cardDeck
  }

  private handlePosition(position: number): void {
    const isPositionNegative = Math.sign(position) === -1
    const isPositionOverLimit = position > this.cardDeck.length - 1

    if (isPositionNegative || isPositionOverLimit) {
      throw new Error('Invalid card position!')
    }
  }

  public getCardByPosition(position: number): number {
    this.handlePosition(position)

    return this.cardDeck[position]
  }

  public replaceCardByPosition(position: number, replacement: number): void {
    this.handlePosition(position)

    this.cardDeck[position] = replacement
  }

  public removeCardByPosition(position: number, replacement: number): void {
    this.handlePosition(position)

    this.cardDeck[position] = replacement
  }

  public insertAtExtremity(card: number, extremity = 'top'): void {
    if (extremity === 'top') {
      this.cardDeck.push(card)
      return
    }
    this.cardDeck.unshift(card)
  }

  public removeAtExtremity(extremity = 'top'): void {
    if (extremity === 'top') {
      this.cardDeck.pop()
      return
    }
    this.cardDeck.shift()
  }

  public get DeckLength(): number {
    return this.cardDeck.length
  }
}
