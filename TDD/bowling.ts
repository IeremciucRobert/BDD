/* eslint-disable complexity */
interface Frame {
  pins: number
  rolls: number
  bonuses: number
}

export class BowlingGame {
  rolls: number[]
  rollCount: number
  total: number

  private maxFrames = 10

  constructor() {
    this.total = 0
    this.rollCount = 0
    this.rolls = []
  }

  public roll(pins: number): void {
    if (pins > 10 || pins < 0) {
      throw new Error('Invalid number of pins for this roll')
    }
    if (this.rolls.length > this.maxFrames * 2) {
    }

    this.rolls.push(pins)

    this.calculateScore()
  }

  private calculateScore() {
    let total = 0
    let rollIndex = 0

    for (let i = 0; i < this.maxFrames; i++) {
      if (this.isStrike(rollIndex)) {
        const isFirstRollStrike = this.rolls[rollIndex] === 10

        if (isFirstRollStrike) {
          total += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
          rollIndex += 1
        } else {
          total += this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2] + this.rolls[rollIndex + 3]
          rollIndex += 2
        }
        continue
      }

      if (this.isSpare(rollIndex)) {
        total += this.rolls[rollIndex + 2]
      }

      if (i === this.maxFrames - 1 && this.rolls[rollIndex + 1] !== undefined) {
        throw new Error('exceeded')
      }

      total += this.rolls[rollIndex] + this.rolls[rollIndex + 1]

      rollIndex += 2
    }

    this.total = total
  }

  public get score(): number {
    return this.total
  }

  private isStrike(rollIndex: number): boolean {
    return this.rolls[rollIndex] === 10 || this.rolls[rollIndex + 1] === 10
  }

  private isSpare(rollIndex: number): boolean {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10
  }
}
