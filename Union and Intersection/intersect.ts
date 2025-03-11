type PersonIntersect = {
  name: string;
  age: number;
};

type EmployeeIntersect = {
  emp_id: number;
  dept: string;
};

type EmployeeDetails = PersonIntersect & EmployeeIntersect;

const employeeIntersect: EmployeeDetails = {
  name: "Sumeet",
  age: 21,
  emp_id: 2,
  dept: "cse",
};
