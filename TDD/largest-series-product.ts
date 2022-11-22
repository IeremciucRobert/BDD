export const getLargestProduct = (number: string, series: number): number => {
  if (series > number.length) {
    throw new Error('Series cannot be higher than the number under test')
  }
  if (number.match(/[^0-9]/)) {
    throw new Error('Number under test cannot contain letters')
  }

  const largest = [...number].map(Number).reduce((acc, _, index, arr) => {
    const product = arr.slice(index, index + series).reduce((a, e) => a * e)
    return acc > product ? acc : product
  }, 0)

  return largest
}
