const allergies = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats',
}
const allergensIds = Object.keys(allergies).map((e) => Number(e))
const allergensList = Object.values(allergies)
const knownAllergensSum = allergensIds.reduce((acc, e) => acc + e, 0)

type Allergens = typeof allergensList[number]

export class AllergyTest {
  score: number
  allergens: string[]

  constructor(score: number) {
    this.score = score

    this.handleScoreErrors()
    this.allergens = this.DetectedAllergies
  }

  private get DetectedAllergies(): string[] {
    this.removeUnknownAllergies()

    const allergens: string[] = []
    let score = this.score

    for (let i = allergensIds.length - 1; i >= 0; i--) {
      if (score >= allergensIds[i]) {
        allergens.push(allergensList[i])
        score -= allergensIds[i]

        if (score === 0) {
          break
        }
      }
    }

    return allergens
  }

  private removeUnknownAllergies = () => {
    if (this.score <= knownAllergensSum) {
      return
    }
    const divided = Math.floor(this.score / knownAllergensSum)
    this.score = this.score - knownAllergensSum * divided
  }

  private handleScoreErrors() {
    if (this.score < 0) {
      throw new Error('Allergy score cannot be a negative number')
    }
  }

  get Allergens(): string[] {
    return this.allergens
  }

  public isAllergicTo(allergy: Allergens): boolean {
    return this.allergens.includes(allergy)
  }
}
