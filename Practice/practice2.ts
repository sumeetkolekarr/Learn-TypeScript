function isEven(a: number): boolean {
  return a % 2 === 0;
}

console.log(isEven(5));

//ToDo
function isDivisibleBy4And8(a: number) {
  return a % 4 === 0 && a % 8 === 0;
}

console.log(isDivisibleBy4And8(20));

// Assignment
// After 2 to the power of 53, normal int datatype is not able to store numbers after that number and bigInt is used
var bigNum = 9007199254740992n;
console.log(bigNum);
var anotherBigNum = BigInt("9007199254740992");
console.log(anotherBigNum);
