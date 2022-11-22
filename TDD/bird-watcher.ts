export class BirdLogs {
  daysCount: number[]

  constructor(daysCount: number[]) {
    this.daysCount = daysCount

    this.handleExceptions()
  }

  get totalCount(): number {
    return this.daysCount.reduce((total, birdsPerDay) => birdsPerDay + total, 0)
  }

  weekCount(week: number): number {
    if (week < 1) {
      throw new Error('You need to specify at least one week')
    }

    const hasLogs = week * 7 - this.daysCount.length >= 7
    if (hasLogs) {
      throw new Error('Specified week has no logs')
    }

    const days = this.daysCount.slice((week - 1) * 7, week * 7)

    return days.reduce((total, birdsPerDay) => birdsPerDay + total, 0)
  }

  fixCountLog(): void {
    for (let i = 0; i < this.daysCount.length - 1; i += 2) {
      this.daysCount[i] += 1
    }
  }

  private handleExceptions() {
    if (this.daysCount.length === 0) {
      throw new Error('Logs has to contain at least one day')
    }

    const hasNegativeDayCount = this.daysCount.some((day) => Math.sign(day) < 0)
    if (hasNegativeDayCount) {
      throw new Error('Birds counted for a single day can not be negative')
    }
  }
}
