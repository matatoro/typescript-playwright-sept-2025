// Interface declaration
interface Car {
  type: string;
  model: string;
  color: string;
  horsePower: number;
}

const car: Car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
  horsePower: 100
};

console.log(car);
//object with method and array
//
// Interface person object
interface Person {
  name: string;
  lastName: string;
  address: string;
  age: number;
  hobbies: string[];
  greeting: () => string;
}

// object with method and array value
const person: Person = {
  name: "Ivan",
  lastName: "Ivanov",
  address: "bul. Vitosha 30",
  age: 30,
  hobbies: ["football", "tennis", "hiking"],
  greeting: function() {
    return "Hello! My name is Ivan.";
  }
};

console.log(person)
//propeties access
console.log(person.name);
console.log(person["address"]);
console.log(person.greeting());
console.log(person["greeting"]());
//const objects cannot re rewriten, but inter values could change
person.age = 35;
console.log(person);
// person = { It's a No-No!
//   name: "Ivan",
//   lastName: "Ivanov",
//   address: "bul. Vitosha 30",
//   age: 30,
//   hobbies: ["football", "tennis", "hiking"],
//   greeting: function() {
//     return "Hello! My name is Ivan.";
//   }
// };
// let vs const redeclaration
let dog = { name: "Spark" }
dog.name = "Bobb"
dog = { name: "Nik" }

const cat = { name: "Lucy" };
cat.name = "Kitty";
//cat = {name: "Tom"}; No-No
// explicit object type
const mouse: { name: string; favFood: string; age: number } = {
  name: "Jerry",
  favFood: "cheese",
  age: 2,
};
// Interfaces - optional parameters, read only and string literals
interface User {
  name: string;
  readonly email: string; //readonly, cannot change after init
  role: string;
  // optional parameters
  job?: string;
  password?: string | number;
}

const user: User = {
  name: "Tom",
  email: "tom@gmail.com",
  role: "admin",
  job: "QA",
};

const secondUser: User = {
  name: "Tom",
  email: "tom@mail.com",
  role: "superuser",
  job: "QA",
};

interface UserPermissions extends User {
  permissions: string;
}

const thirdUser: UserPermissions = {
  name: "Tom",
  email: "tom@mail.com",
  role: "superuser",
  job: "QA",
  permissions: "denied",
};
