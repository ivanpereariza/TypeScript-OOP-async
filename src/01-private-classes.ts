class MyDate {
  private year: number
  private month: number
  private day: number

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  private addPadding(value: number): string {
    if (value < 10) return `0${value}`
    return `${value}`
  }

  printFormat(): string {
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`
  }


  add(amount: number, type: 'days' | 'months' | 'years') {
    type === 'days' && (this.day += amount)
    type === 'months' && (this.month += amount)
    type === 'years' && (this.year += amount)
  }
}

const myDate = new MyDate(1996, 2, 1)

myDate.add(7, 'days')
myDate.add(4, 'years')
myDate.add(1, 'months')

console.log(myDate.printFormat())

export { MyDate }
