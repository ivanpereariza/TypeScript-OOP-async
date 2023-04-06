import { Dog } from "./06-protected"

const getValue = <T>(value: T) => {

  const array: T[] = [value]

  return value
}

getValue<number>(12).toFixed()
getValue<string>('12').toLowerCase()
const buddy = new Dog(`Buddy`, 'Ivan')
getValue<Dog>(buddy).guau(15)
