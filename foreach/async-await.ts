// //async-await
// //
// console.log('Start');
// setTimeout(() => { console.log('Async task done'); }, 1000);

// console.log('End');

// // multiple async operations
// function setTimeouts() {
//   setTimeout(() => {
//     console.log("3 seconds delay");
//   }, 1000);

//   setTimeout(() => {
//     console.log("1 second delay");
//   }, 1000);

//   setTimeout(() => {
//     console.log("2 seconds delay");
//   }, 1000);
// }
// setTimeouts();

// //await
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  await delay(2000);
  console.log("2 seconds delay"); // Runs 1st

  await delay(3000);
  console.log("3 seconds delay"); // Runs 2nd

  await delay(1000);
  console.log("1 second delay"); // Runs 3rd
}

demo();

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

async function getData(): Promise<Product> {
  const response = await fetch("https://fakestoreapi.com/products/1");
  const data: Product = await response.json();
  return data;
}

getData();
