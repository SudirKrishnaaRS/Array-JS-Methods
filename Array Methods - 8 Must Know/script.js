const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// Filter method
// Note : Does'nt affect the original array (i.e here items [] array)
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

// console.log(filteredItems);

// OUTPUT:
// [
//     { name: 'Bike', price: 100 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Keyboard', price: 25 }
//   ]
// _________________________________________________________________________________________________________________

// Map method
// Note : Does'nt affect the original array (i.e here items [] array)
const itemNames = items.map((item) => {
  return item.name;
});

// console.log(itemNames);

// OUTPUT:
// [
//     'Bike',
//     'TV',
//     'Album',
//     'Book',
//     'Phone',
//     'Computer',
//     'Keyboard'
// ]
// _________________________________________________________________________________________________________________

// Find method
//  - returns the item if found or undefined if not found.
//  - Returns the first found item.
// Note : Does'nt affect the original array (i.e here items [] array)
const foundItem = items.find((item) => {
  return item.name === "Computer";
});

console.log(foundItem);

// OUTPUT:
// { name: 'Computer', price: 1000 }
// _________________________________________________________________________________________________________________

// ForEach method
// Note : Does'nt affect the original array (i.e here items [] array)
items.forEach((item) => {
  console.log(item.name);
});

// OUTPUT:
// Bike
// TV
// Album
// Book
// Phone
// Computer
// Keyboard
// _________________________________________________________________________________________________________________

// Some method
//  - Determines whether ANY(means atleast one) the members of an array satisfy the specified condition.
// Note : Does'nt affect the original array (i.e here items [] array)
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 50;
});

console.log(hasInexpensiveItems);

// OUTPUT:
// true
// _________________________________________________________________________________________________________________

// Every menthod
//  - Determines whether ALL the members of an array satisfy the specified condition.
// Note : Does'nt affect the original array (i.e here items [] array)
const hasExpensiveItems = items.every((item) => {
  return item.price >= 500;
});

console.log(hasExpensiveItems);

// OUTPUT:
// false
// _________________________________________________________________________________________________________________

// Reduce method (Very Easy)
//  - reduce method takes
//          first argument as variable which contains the previos iteration RETURNED value
//          second argument as actual array which need to be reduced
//  Here 0 (in Line 108) is the intial value for the currentTotal which gets assigned only for the first iterations
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);

// OUTPUT:
// 1840
// _________________________________________________________________________________________________________________
// includes method
// - Takes only a single paramerter as input (Cannot pass a function) and return true or false
// Useful for simpler arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const includesTwo = numbers.includes(2);

console.log(includesTwo);

// OUTPUT:
// true
