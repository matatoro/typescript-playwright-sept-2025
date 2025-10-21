function printAnyValue(x: any) {
  console.log(x)
}
//arrays
//
// task 1
let arrNumber: number[] = [1, 2, 3, 4];
arrNumber.push(12);
printAnyValue(arrNumber);
//task 2
arrNumber.shift();
printAnyValue(arrNumber);
// task 3
const arrNumberTwo: number[] = [1, 2, 3, 4, 5]
const mappedArray = arrNumberTwo.map(x => x / 2);
printAnyValue(mappedArray);
// task 4
const arrNumberThree: number[] = [3, 7, 1, 9, 12, 4];
const filteredArray = arrNumberThree.filter(x => x > 5);
printAnyValue(filteredArray);
//task 5
const unsortedArr: number[] = [9, 3, 7, 2, 8, 5];
printAnyValue(unsortedArr.sort((a, b) => a - b))
//task 6
const fruits: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
printAnyValue(fruits.slice(0, 3))
//task 7
const machines: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
printAnyValue(machines.splice(1, 2));
// task 8
function findLargest(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
printAnyValue(findLargest(5, 1, 8))
// task 9
function convertToCentimeters(inches: number = 2): number {
  return inches * 2.54
}
let centimeters = convertToCentimeters();
console.log(`2 inches = ${centimeters} cm`)
centimeters = convertToCentimeters(7);
console.log(`7 inches = ${centimeters} cm`)
// task 10
//
function calculateArea(width: number, height?: number): number {
  if (height) {
    return width * height;
  } else {
    return width * width;
  }
}
console.log(`Area of reactangle with sides 5,2 cm is ${calculateArea(5, 2)} cm^2`)
console.log(`Area of squeare with side 5 cm is ${calculateArea(5)} cm^2`)
