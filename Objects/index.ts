type Person = {
  name: string;
  age: number;
  isCat: boolean;
  address: { city: string; country: string };
};

const person: Person = {
  name: "Leo",
  age: 2,
  isCat: true,
  address: {
    city: "Kolhapur",
    country: "India",
  },
};
const person1: Person = {
  name: "SK",
  age: 21,
  isCat: false,
  address: {
    city: "Kolhapur",
    country: "India",
  },
};
const person2: Person = {
  name: "Leo",
  age: 2,
  isCat: true,
  address: {
    city: "Kolhapur",
    country: "India",
  },
};

// Accessing Data from Object
console.log(person.address.country);

// Updating Data in Object
// person.address.country = 123; //Invalid as the Type is Different
console.log(person.address.country);
