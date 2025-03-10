type PersonInfo = readonly [string, number, boolean];

const displayPersonInfo: (person: PersonInfo) => void = (
  person: PersonInfo
): void => {
  const [name, age, hasDriverLicense] = person;
  console.log(
    `Name: ${name}, Age: ${age}, Driver's License: ${
      hasDriverLicense ? "Yes" : "No"
    }`
  );
};

const prsn1: PersonInfo = ["Sumeet", 21, true];
const prsn2: PersonInfo = ["Leo", 1, false];

displayPersonInfo(prsn1);
displayPersonInfo(prsn2);

// Can not change the order because of Tuples
// const prsn2: PersonInfo = ["Leo", true, 22];
