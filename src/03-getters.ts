class MyDate {

  constructor(
    private year: number = 1996,
    private month: number = 2,
    private _day: number = 7,
  ) { }

  private addPadding(value: number): string {
    if (value < 10) return `0${value}`
    return `${value}`
  }

  printFormat(): string {
    const day: string = this.addPadding(this._day)
    const month: string = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`
  }


  add(amount: number, type: 'days' | 'months' | 'years'): void {
    type === 'days' && (this._day += amount)
    type === 'months' && (this.month += amount)
    type === 'years' && (this.year += amount)
  }


  get day(): number {
    return this._day
  }

  get isLeapYear(): boolean {
    this.year % 400 === 0 && true
    this.year % 100 === 0 && false
    return this.year % 4 === 0
  }

}

const myDate = new MyDate()
const date1 = new MyDate(2000, 7, 10)
const date2 = new MyDate(2002, 5, 7)

console.log(myDate.isLeapYear)
console.log(date1.isLeapYear)
console.log(date2.isLeapYear)


export { MyDate }
