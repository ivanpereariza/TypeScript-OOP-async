class MyService {

  static instance: MyService | null = null

  private constructor(public name: string) { }

  getName() {
    return this.name
  }

  static create(name: string): MyService {
    return MyService.instance === null ? MyService.instance = new MyService(name) : MyService.instance
  }
}


const myService1 = MyService.create('Service 1')
console.log(myService1.getName())

const myService2 = MyService.create('Service 2')
console.log(myService2.getName())

console.log(myService1 === myService2)
