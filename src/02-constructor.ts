class MyDate {

  constructor(
    private year: number = 1996,
    private month: number = 2,
    private day: number = 7,
  ) { }

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

const myDate = new MyDate()

console.log(myDate.printFormat())

myDate.add(7, 'days')
myDate.add(4, 'years')
myDate.add(1, 'months')

console.log(myDate.printFormat())


export { MyDate }
