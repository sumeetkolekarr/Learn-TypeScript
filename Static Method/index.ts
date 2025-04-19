// class Persn {
//     constructor(public name: string){

//     }
// }

// const usr1 = new Persn('Leo')
// usr1.name = 'Bunny'

class MathOperations {
  public static PI: number = Math.PI;

  public static add(num1: number, num2: number): number {
    return num1 + num2;
  }

  public static substract(num1: number, num2: number): number {
    return num1 - num2;
  }
  
  public static div(num1: number, num2: number): number {
    return num1 / num2;
  }
  
  public static multiply(num1: number, num2: number): number {
    return num1 - num2;
  }
}

console.log(MathOperations.PI);
console.log(MathOperations.add(3, 4));
console.log(MathOperations.div(3, 4));
console.log(MathOperations.substract(3, 4));
console.log(MathOperations.multiply(3, 4));
