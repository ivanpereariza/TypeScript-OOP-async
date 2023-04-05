class Animal {
  constructor(public name: string) { }

  move() {
    console.log('Moving along!')
  }

  gretting() {
    return `Hello, I'm ${this.name}`
  }
}

class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
  ) {
    super(name)
  }

  guau(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('Guau!')
    }
  }
}

const popino = new Dog('popino', 'german')

popino.move()
console.log(popino.gretting())
popino.guau(7)

export { Animal, Dog }
