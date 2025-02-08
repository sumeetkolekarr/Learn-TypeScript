// Using Sqare Brackets
const nums: number[] = [1, 2, 3, 4, 5, 6];

// Using Array Constructor
const numbers1: number[] = new Array(1, 2, 3, 4, 5, 6);

// Using Array.of method
const names: string[] = Array.of("Lucky", "Leo", "Bunny");

//Accessing values
console.log(names[0]);

// Array Methods
const fruits: string[] = ["mango", "apple"];

// Adding in Array
const newUpdatedFruit = fruits.push("Kiwi");
console.log(newUpdatedFruit);

// Popping an element in an array
const lastData = fruits.pop();
console.log(lastData);

//Iterating an Array
// Using for loop
for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}
//Using for of loop
for (const element of fruits) {
  console.log(element);
}

// Using For Each
fruits.forEach((currVal: string) => console.log(currVal));
