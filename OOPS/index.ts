// OOPS Basics

// Default Values
// class Persons {
//   name: string = "SK";
//   age: number = 21;
//   hobbies: string[] = ["reading", "coding"];
// }

class Person {
  name: string;
  age: number;
  hobbies: string[];
  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  intro(): string {
    return `Hi, my name is ${this.name}`;
  }
}

class Student extends Person {
  grade: number;
  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
  }
  intro(): string {
    return `Hi, my name is ${this.name} and my marks are ${this.grade}`;
  }
}

const person1: Student = new Student("SK", 21, ["coding", "reading"], 95);

console.log(person1.intro());
