export class BankAccount {
  amount: number
  isClosed: boolean

  constructor(amount = 0) {
    this.amount = amount
    this.isClosed = false
  }

  public checkAccountState(): void {
    if (this.isClosed) {
      throw new Error('Account is closed, sorry!')
    }
  }

  public close(): void {
    this.isClosed = true
  }

  public withdraw(amount: number): number {
    this.checkAccountState()

    this.amount -= amount

    return this.amount
  }

  public deposit(amount: number): number {
    this.checkAccountState()

    this.amount += amount

    return this.amount
  }
}
