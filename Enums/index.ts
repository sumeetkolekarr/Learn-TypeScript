enum Roles {
  user = "user",
  admin = "admin",
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

const usr1: LoginDetails = {
  email: "sk@gmail.com",
  password: "akud",
  role: Roles.admin,
};

const usr2: LoginDetails = {
  email: "sk@gmail.com",
  password: "akud",
  role: Roles.user,
};

const isAdmin: (user: LoginDetails) => string = (user: LoginDetails) => {
  const { email, role } = user;
  return role === "admin" ? `${email} is Allowed` : `${email} is not allowed`;
};

console.log(isAdmin(usr1));
console.log(isAdmin(usr2));
