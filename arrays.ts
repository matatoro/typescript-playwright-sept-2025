//arrays
//
let arrNumber: number[] = [1, 2, 3, 4];
let arrString: string[] = ['aa', 'bb', 'cc', 'dd'];
let arrMixed: (string | number)[] = [1, 'ee', 'tt'];

// access element by index

arrNumber[1];
console.log(arrString[1]);
console.log(arrMixed[1]);

//map method
let arrMapped: number[] = arrNumber.map((num: number) => num * 2);
console.log(arrMapped);
let arrStringMapped = arrString.map((x) => `Hollo, ${x}`);
console.log(arrStringMapped);
let checkTypeof = arrMixed.map((element: number | string) => {
  if (typeof element == "number") {
    return element + 5
  } else {
    return `Welcome, ${element}`
  }
})

console.log(checkTypeof)

//16.10
//
// filter
const numbers: number[] = [1, 5, 8, 3, 10, 2];

const filteredNumbers: number[] = numbers.filter((num: number) => {
  return num > 5;
});

console.log(filteredNumbers);
// sort
const sortNums: number[] = [100, 79, 121, 112, 3];

console.log(sortNums.sort());
sortNums.sort((a, b) => a - b);
console.log(sortNums);
//push
sortNums.push(200)
console.log(sortNums);
//pop
sortNums.pop()
console.log(sortNums);
//shift
sortNums.shift()
console.log(sortNums);
//unshift
sortNums.unshift(1)
console.log(sortNums);
