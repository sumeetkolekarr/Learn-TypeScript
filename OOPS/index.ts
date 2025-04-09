// OOPS Basics

// Default Values
// class Persons {
//   name: string = "SK";
//   age: number = 21;
//   hobbies: string[] = ["reading", "coding"];
// }

class Person {
  // public name: string;
  // protected age: number;
  // private hobbies: string[];

  // Short Hand Property
  constructor(
    public name: string,
    protected age: number,
    private hobbies: string[]
  ) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  introParent(): string {
    return `Hi, my name is ${this.name} with hobbies ${this.hobbies}`;
  }
}

class Student extends Person {
  // grade: number;
  constructor(
    name: string,
    age: number,
    hobbies: string[],
    public grade: number
  ) {
    super(name, age, hobbies);
    this.grade = grade;
  }
  intro(): string {
    // return `Hi, my name is ${this.name} and my marks are ${this.grade} while my hobbies are ${this.hobbies}`; // this will throw an error as hobbies is private
    return `Hi, my name is ${this.name} and my marks are ${this.grade}`;
  }
}

const person1: Student = new Student("SK", 21, ["coding", "reading"], 95);

console.log(person1.intro());

// console.log(person1.hobbies); // will throw an error
