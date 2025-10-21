//let vs const
//
let num: number = 5;
num = 10;
num = 15;

const welcomeMessage: string = 'Welcome!';
// Cannot assign, constant
// welcomeMessage = 'Welcome, Peter!';
//string
let message: string = 'Hello, Peter!';
let messageLenght: number = message.length;
let messageLenghtDetail: string = `Len: ${messageLenght}`;
console.log(messageLenghtDetail)

//numnber and operations
let numberOne: number = 10;
let numberTwo: number = 5;
let add: number = numberOne + numberTwo;
let sunbstract: number = numberOne - numberTwo;
let multiply: number = numberOne * numberTwo;
let devision: number = numberOne / numberTwo;

//boolean

let areEqual: boolean = numberOne === numberTwo;
console.log(`Printing areEqual: ${areEqual}`);
let areGreaterEqual: boolean = numberOne >= numberTwo;
console.log(`Printing areGreaterEqual: ${areGreaterEqual}`);
let areGreater: boolean = numberOne > numberTwo;
console.log(`Printing areGreater: ${areGreater}`);

//logical operators
//
let areEqualTo: boolean;
areEqualTo = numberOne === 10 && numberTwo === 5;
console.log(`Printing areEqualTo: ${areEqualTo}`);
areEqualTo = numberOne === 10 && numberTwo === 6;
console.log(`Printing areEqualTo: ${areEqualTo}`);


let isAnyNumEqualTo: boolean;
isAnyNumEqualTo = numberOne === 10 || numberTwo === 5;
console.log(`Printing isAnyNumEqualTo: ${isAnyNumEqualTo}`);
isAnyNumEqualTo = numberOne === 110 || numberTwo === 6;
console.log(`Printing isAnyNumEqualTo: ${isAnyNumEqualTo}`);

//conditions
//
// ternary
//
let isPositiveComparison: string = numberOne > 0 ? "positive" : "negative";
console.log(`Printing isPositiveComparison: ${isPositiveComparison}`);

// if/else statement

let numberThree: number = 100;

if (numberThree <= 10) {
  console.log('NumberOne is <= than 10!');
} else if (numberThree <= 20) {
  console.log('NumberOne is <= than 20!');
} else {
  console.log('NumberOne less than 3!');
}
