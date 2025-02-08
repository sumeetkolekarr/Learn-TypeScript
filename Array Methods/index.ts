const nums: number[] = [4, 5, 3, 1];

// Map Method
// Doubling Array
const doubleData: number[] = nums.map((e: number) => e * 2);
console.log(doubleData);

// Converting Numbers to Strings
const numberToString: string[] = nums.map((e: number) => e.toString());
console.log(numberToString)

// Filter Method
const numbersGreaterThanThree = nums.filter((e: number) => e<3);
console.log(numbersGreaterThanThree)