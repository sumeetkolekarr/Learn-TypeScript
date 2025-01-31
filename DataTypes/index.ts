// Any Type // Any Type is nothing but writing code in plain JS
let variable: any = true;
variable = 5;
variable = "Leo";

// Unknown Type // Type checking is enabled in Unknown type
let num2: unknown;
num2 = 5;
num2 = "SK";
num2 = true;

if (typeof num2 === "number") {
  console.log(num2 + 5);
} else {
  console.log(num2);
}
