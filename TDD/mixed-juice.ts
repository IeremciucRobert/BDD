export class JuiceShop {
  private itemsPreparationTime = {
    'Pure Strawberry Joy': 0.5,
    Energizer: 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5,
  }

  private defaultPreparationTime = 2.5

  private limeWedges = {
    small: 6,
    medium: 8,
    large: 10,
  }

  getPreparationTime(item: string): number {
    const shopItem = this.itemsPreparationTime[item]

    if (!shopItem) {
      return this.defaultPreparationTime
    }

    return shopItem
  }

  limesToCut(wedgesToCut: number, limesList: string[]): number {
    let limes = 0
    let wedges = 0

    for (let i = 0; i < limesList.length - 1; i++) {
      limes += 1
      wedges += this.limeWedges[limesList[i]]

      if (wedges >= wedgesToCut) {
        break
      }
    }

    return limes
  }
}
