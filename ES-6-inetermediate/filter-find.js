//// filter : what is filter => filter similar like map function where we pass a parameter with arrow function

// filter () : means do filterization with some elements of an array on be half of conditions and the filter function gives us a return value which is a new array, example given below:

const numbers = [30, 20, 10, 6, 9, 40, 55];
// filter some elements from the number array which are greater than 20:
const bigNumber = numbers.filter((number) => number >= 20);
console.log(bigNumber); // ans is [ 30, 20, 40, 55 ] those elements are greater than or equal to 20.
const smallNumber = numbers.filter((number) => number < 20);
console.log(smallNumber); // ans is [ 10, 6, 9 ]

/// object array with filter method :

const products = [
  { name: "Laptop", price: 32000, brand: "Lenovo", color: "Silver" },
  { name: "Phone", price: 700, brand: "Iphone", color: "Golden" },
  { name: "Watch", price: 3000, brand: "Casio", color: "Yellow" },
  { name: "Aunglass", price: 300, brand: "Ribon", color: "Blue" },
  { name: "Camera", price: 9000, brand: "Lenovo", color: "Gray" },
];

const expensive = products.filter((product) => product.price >= 9000);
console.log(expensive); // ans is [{ name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },{ name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' }]7

const productColor = products.filter(
  (product) => product.color.toLowerCase() == "gray"
);
console.log(productColor); // ans is [ { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' } ] and we use toLowerCase() function for simple filteration

/// if there have no elements for filter than it will gives us empty array

///////// moral of the story is filter doing filteration on an array to get some elements regarding arrow function conditions and return the elements which are fullfill the function =s condition.

//////// filter and map return result inside an array

/////// find and forEach return us the elements

//// find() method:

const allProducts = [
  { name: "Laptop", price: 32000, brand: "Lenovo", color: "Silver" },
  { name: "Phone", price: 700, brand: "Iphone", color: "Golden" },
  { name: "Watch", price: 3000, brand: "Casio", color: "Yellow" },
  { name: "Aunglass", price: 300, brand: "Ribon", color: "Blue" },
  { name: "Camera", price: 9000, brand: "Lenovo", color: "Gray" },
];

const findElement = allProducts.find(
  (product) => product.name.toLowerCase() == "watch"
);
const findByPrice = allProducts.find((product) => product.price == 700);
console.log(findElement); // return only elements { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' }
console.log(findByPrice); // return only elements { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' }
