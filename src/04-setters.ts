class MyDate {

  constructor(
    private _year: number = 1996,
    private _month: number = 2,
    private _day: number = 7,
  ) { }

  private addPadding(value: number): string {
    if (value < 10) return `0${value}`
    return `${value}`
  }

  printFormat(): string {
    const day: string = this.addPadding(this._day)
    const month: string = this.addPadding(this._month)
    return `${day}/${month}/${this._year}`
  }


  add(amount: number, type: 'days' | 'months' | 'years'): void {
    type === 'days' && (this._day += amount)
    type === 'months' && (this._month += amount)
    type === 'years' && (this._year += amount)
  }


  get day(): number {
    return this._day
  }

  get month(): number {
    return this._month
  }

  get year(): number {
    return this._year
  }

  get isLeapYear(): boolean {
    this._year % 400 === 0 && true
    this._year % 100 === 0 && false
    return this._year % 4 === 0
  }

  set month(newValue: number) {
    (newValue >= 1 && newValue <= 12) ? this._month = newValue : console.error('month out of range')

  }

}

const myDate = new MyDate()

myDate.month = 4
console.log(myDate.month)
myDate.month = 15
console.log(myDate.month)

export { MyDate }
