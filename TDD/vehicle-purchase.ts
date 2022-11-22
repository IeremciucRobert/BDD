const driverLicenseVehicles = ['car', 'truck']

export class User {
  public needsLicense(vehicle: string): boolean {
    if (!vehicle || !vehicle.trim()) {
      throw new Error('Invalid vehicle type!')
    }

    return driverLicenseVehicles.includes(vehicle)
  }

  public chooseVehicle(vehicles: string[]): string[] {
    if (vehicles.length < 2) {
      throw new Error('Vehicle options list must contain more than 1 option!')
    }

    const isVehiclesTheSame = vehicles.every((element) => element === vehicles[0])
    if (isVehiclesTheSame) {
      throw new Error('Vehicle options cannot be all the same!')
    }

    const copy = [...vehicles]
    return copy.sort((a, b) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()))
  }

  private handleCarAgeLimits(carAge: number): void {
    if (carAge === 0) {
      throw new Error('Car has not been used!')
    }

    if (carAge >= 40) {
      throw new Error('Car is too old!')
    }
  }

  public estimateResellPrice(originalPrice: number, carAge: number): number {
    this.handleCarAgeLimits(carAge)

    if (carAge < 3) {
      return 0.8 * originalPrice
    }

    if (carAge >= 3 && carAge <= 10) {
      return 0.7 * originalPrice
    }

    return originalPrice / 2
  }
}
