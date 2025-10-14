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
