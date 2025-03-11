// Union in TypeScript
const inputValue = (value: string | number | boolean): void => {
  console.log(value);
};

// inputValue(true);
// inputValue(55);
// inputValue("Leo");

const userInput = (value: string | number): string | number => {
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    throw new Error("Invalid Input Data");
  }
};

const userInputAdv = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "number") {
    return `$${value}.00`;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    return value === true ? "Yes" : "No";
  } else {
    throw new Error("Invalid Input Data");
  }
};

// console.log(userInput(10));
// console.log(userInput("leo"));
console.log(userInputAdv(1651565646));
console.log(userInputAdv("leo"));
console.log(userInputAdv(true));

type PersonUnion = {
  name: string;
  age: number;
};

type EmployeeUnion = {
  emp_id: number;
  dept: string;
};

type EmployeeDetailsUnion = PersonUnion | EmployeeUnion;

const employeeUnion: EmployeeDetailsUnion = {
  name: "Sumeet",
  age: 21,
  emp_id: 2,
};

