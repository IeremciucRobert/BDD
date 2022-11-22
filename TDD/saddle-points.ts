export const getSaddlePoints = (matrix: number[][]): number[] => {
  const saddles: number[] = []

  matrix.forEach((row) => {
    row.forEach((value, testedValueIndex) => {
      if (value === Math.max(...row)) {
        const isSmallest = matrix.every((rowToCompare, valueToCompareIndex) => {
          if (testedValueIndex === valueToCompareIndex) {
            return true
          }

          if (value > rowToCompare[testedValueIndex]) {
            return false
          }

          return true
        })

        if (isSmallest) {
          saddles.push(value)
        }
      }
    })
  })

  return saddles
}
