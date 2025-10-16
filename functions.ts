//functions
//
//

function greet(name: string): string {
  return `Hello, ${name}!`;
}

greet("Alice");

function displayPersonalData(name: string, age: number) {
  return `${name} is ${age} years old.`;
}

console.log(displayPersonalData("Ivan", 20));

const personalData: string = displayPersonalData("Peter", 25)
console.log(personalData)

//divide
function devideNums(numOne: number, numTwo: number): number {
  return numOne / numTwo;
}

devideNums(10, 5);
devideNums(50, 5);
devideNums(100, 5);

//arrow func
// Define a simple arrow function for multiplication
const multiplyNums = (x: number, y: number): number => x * y;
//optional
// To make a function parameter optional, you use the '?'
function greet_new(name: string, age?: number): string {
  if (age) {
    return `${name} is ${age} years old`
  }
  return `Hello, ${name}`
}
// arrow function
const sumNums = (a: number, b: number) => a + b;
sumNums(3, 2);

// optional parameters
function greeting(name: string, age?: number) {
  if (age) {
    console.log(`${name} is ${age} years old`);
  }
  console.log(`Hi I'm ${name}`);
}
greeting("Todor");
greeting("Trifon", 20);

//optional at the end of args, they should be at the end of list
//function greeting(name: string, age?: number, city?: string) {

//default parameters
function subtractNums(numOne: number = 10, numTwo: number = 5) {
  console.log(numOne - numTwo);
}

subtractNums(50);
subtractNums(50, 30);
