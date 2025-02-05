// function sum(a: number, b: number): number {
//   return a + b;
// }

// console.log(sum(5, 10));

// const greet = (name: string, id: number):string => {
//   return `Welcome, ${name} and your id is ${id}`;
// }

// Default Parameter

// const greet = (name: string, id: number = 1) => {
//   return `Welcome, ${name} and ur id is ${id}`;
// };

// Optional Parameter

const greet = (name: string, id?: number) => {
  if (id) {
    return `Welcome, ${name} and ur id is ${id}`;
  } else {
    return `Welcome, ${name}`;
  }
};

const emp = greet("Vinod");
const emp2 = greet("Vinod", 2);
console.log(emp);
console.log(emp2);
