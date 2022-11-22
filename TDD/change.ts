export const getChange = (coinsSet: number[], requiredChange: number): number[] => {
  if (requiredChange < 1) {
    throw new Error('Required change has to be greater than zero')
  }

  const ascendingCoinsSet = coinsSet.sort((a, b) => a - b)

  if (requiredChange < ascendingCoinsSet[0]) {
    throw new Error('Change can not be smaller than the smallest coin available')
  }

  const calculated = ascendingCoinsSet.reduceRight(
    (acc, coin) => {
      if (acc.initialChange < coin) {
        return acc
      }

      while (acc.initialChange >= coin) {
        acc.change.push(coin)
        acc.initialChange -= coin
      }

      return acc
    },
    { initialChange: requiredChange, change: [] as number[] }
  )

  console.log(calculated.change)
  console.log(calculated.initialChange)

  return calculated.change
}

class Change {
  public calculate(coins, amount): void {
    if (amount < 0) {
      throw new Error('Negative totals are not allowed.')
    }

    const computeChange = (amount) => {
      const changes = new Map()
      for (let a = 0; a <= amount; a++) {
        const change = computeMinChange(a, changes)
        changes.set(a, change)
      }
      const change = changes.get(amount)
      return change.reduce(sumChange, 0) === amount ? change : null
    }

    const computeMinChange = (amount, lowerChanges) =>
      coins
        .filter((coin) => coin <= amount)
        .reverse()
        .map((coin) => (lowerChanges.get(amount - coin) || []).concat([coin]))
        .filter((change) => change.reduce(sumChange, 0) == amount)
        .sort((a, b) => a.length - b.length)[0] || []

    const sumChange = (a, b) => a + b

    const change = computeChange(amount)

    if (!change) {
      throw new Error(`The total ${amount} cannot be represented in the given currency.`)
    }
    return change
  }
}
export { Change }
