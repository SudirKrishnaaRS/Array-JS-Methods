# Array Methods - MUST KNOW
<aside>
📌 Youtube Link : https://youtu.be/R8rmfD9Y5-c

</aside>

# 8 Must Know Array Methods

> Below is the Array on which the ARRAY methods have been applied and explained.
> 

```jsx
const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
```

## filter() *method*

```jsx
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

// OUTPUT:
// [
//     { name: 'Bike', price: 100 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Keyboard', price: 25 }
//   ]
```

## map() *method*

```jsx
const itemNames = items.map((item) => {
  return item.name;
});

console.log(itemNames);

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
```

## reduce() *method*

> reduce method takes
        - first argument as variable which contains the previous iteration RETURNED value  
        - second argument an actual array which needs to be reduced
Here 0 (in Line 108) is the initial value for the currentTotal which gets assigned only for the first iteration
> 

```jsx
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);

// OUTPUT:
// 1840
```

## find() *method*

> - Returns the item if found or undefined if not found.
 - Returns the first found item.
> 

```jsx
const foundItem = items.find((item) => {
  return item.name === "Computer";
});

console.log(foundItem);

// OUTPUT:
// { name: 'Computer', price: 1000 }
```

## forEach() *method*

```jsx
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
```

## some() *method*

> Determines whether ANY(means atleast one) of the members of an array satisfy the specified condition.
> 

```jsx
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 50;
});

console.log(hasInexpensiveItems);

// OUTPUT:
// true
```

## every() *method*

> Determines whether ALL the members of an array satisfy the specified condition.
> 

```jsx
const hasExpensiveItems = items.every((item) => {
  return item.price >= 500;
});

console.log(hasExpensiveItems);

// OUTPUT:
// false
```

## includes() *method*

> - Takes only a single parameter as input (Cannot pass a function) and return true or false
> 
> 
> Useful for simpler arrays
> 

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const includesTwo = numbers.includes(2);

console.log(includesTwo);

// OUTPUT:
// true
```
