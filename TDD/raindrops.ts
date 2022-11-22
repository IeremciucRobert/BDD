const numberSoundMap = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong',
}

export const getRaindropSound = (number: number): string => {
  if (number <= 0) {
    throw new Error('No raindrop has fallen!')
  }

  const numberSoundKeys = Object.keys(numberSoundMap)
  const sound = numberSoundKeys.reduce((acc, element) => {
    const hasReminder = number % Number(element)

    return hasReminder ? acc : acc + numberSoundMap[element]
  }, '')

  return sound
}
