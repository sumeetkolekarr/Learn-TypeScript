// Q1
let longText: string = "I am Sumeet!";
let shortText: string = longText.slice(0, 11);
console.log(shortText);

// Q2
let str1: string = "123";
let str2: string = "123";
let areEqual: boolean;

if (str1 == str2) {
  areEqual = true;
} else {
  areEqual = false;
}
console.log(areEqual);

//Q3
let product: string = "Lamborgini";
let price: number = 80000000;
console.log(`Product of ${product} is priced at ${price}`);
