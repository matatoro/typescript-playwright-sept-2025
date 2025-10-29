// forEach method
//
const nums: number[] = [10, 20, 30, 40];

nums.forEach((num: number, index: number) => {
  console.log(`Index ${index}, value ${num}`);
})

// sum
//
const numsTwo: number[] = [10, 20, 30];
let sum: number = 0;

numsTwo.forEach((n: number) => {
  sum += n;
});

console.log(sum);
//users
type User = { id: number; name: string; isActive: boolean };

const users: User[] = [
  { id: 1, name: "Ana", isActive: false },
  { id: 2, name: "Bobi", isActive: true },
  { id: 23, name: "Petar", isActive: true },
];

const activeIds: number[] = [];

users.forEach((u) => {
  if (u.isActive) activeIds.push(u.id);
});

console.log(activeIds);
