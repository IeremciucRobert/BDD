import { BankAccount } from './bank-account'

describe('bank account', () => {
  test('should open', () => {
    const sut = new BankAccount()

    expect(sut.amount).toBe(0)
  })

  test('should close', () => {
    const sut = new BankAccount()

    sut.close()

    expect(sut.isClosed).toBeTruthy()
  })

  test('should withdraw funds', () => {
    const sut = new BankAccount(15)

    const actual = sut.withdraw(10)

    expect(actual).toBe(5)
  })

  test('should deposit funds', async () => {
    const sut = new BankAccount(5)

    const actual = sut.deposit(7)

    expect(actual).toBe(12)
  })

  test('should be unable to deposit or withdraw funds when account is closed', () => {
    const sut = new BankAccount(5)
    sut.close()

    expect(() => sut.deposit(7)).toThrow('Account is closed, sorry!')
    expect(() => sut.withdraw(7)).toThrow('Account is closed, sorry!')
  })

  test('should perform multiple fund deposits at the same time', () => {
    const sut = new BankAccount(5)

    const actual1 = sut.deposit(7)
    const actual2 = sut.deposit(20)

    expect(actual1).toBe(12)
    expect(actual2).toBe(32)
  })
})
