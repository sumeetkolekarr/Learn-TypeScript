type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string; // Method Call Signature
// (country: string):string; // Call Signature
};

const student1: Student = {
  name: "Sumeet",
  age: 21,
  greet: (country) =>
    `Welcome, My name is ${student1.name}, I am ${student1.age} years old and I am from ${country}`,
};

const student2: Student = {
  name: "SK",
  age: 21,
  greet: (country) =>
    `Welcome, My name is ${student2.name}, I am ${student2.age} years old and I am from ${country}`,
};

const intro: (student1: Student) => string = (student1: Student): string => {
  const { name, age } = student1;
  return `Welcome, My name is ${name}, I am ${age} years old`;
};

console.log(student1.greet("Bharat"));
console.log(student2.greet("India"));
