class MyMath {
  static readonly PI = 3.14

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item, numbers[0])
  }
}

console.log(MyMath.max(1, 8, 5, 9, 7, 10))
console.log(MyMath.max(-8, -15, -5))
Math.random
