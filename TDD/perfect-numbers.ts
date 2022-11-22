export enum NicomachusType {
  ABUNDANT,
  DEFICIENT,
  PERFECT,
}

type NicomachusValues = typeof NicomachusType[keyof typeof NicomachusType]

export const getNicomachusPositiveNumber = (number: number): NicomachusValues => {
  const numbersArrayByLength = [...Array(number).keys()]
  numbersArrayByLength.shift()

  const divisorsArray = numbersArrayByLength.filter((element) => {
    return number % element === 0
  }, [])
  const sum = divisorsArray.reduce((acc, element) => {
    return acc + element
  }, 0)

  const type =
    sum === number
      ? NicomachusType.PERFECT
      : sum > number
      ? NicomachusType.ABUNDANT
      : NicomachusType.DEFICIENT

  return type
}
