// what is map??
//=> ans is : map depend on three task which all together we call map function = map(writeFuntionality): call function for an arrays all elements and return the result of function in a different arrays

// we need a five times function:
const fiveTimes = (x) => x * 5;
// targeted array
const arr = [10, 20, 30, 40, 50];
// where we save our five time result
const output = [];
// we run a for..of loop
for (const numb of arr) {
  const result = fiveTimes(numb);
  output.push(result);
}
console.log(output); // ans is [50,100,150,200,250]

///// in here firstly ours have an array and the task is all the elements of array will be five time : so we need a empty array than we need a fiveTimes arrow function than we run for..of loops on an our array than pass our function and push that output into output arrays

/// how much task there have we done: all task done by one time if we called map(function functionaqlity) and pass the function functionaqlity on the parameter 
/* 
map = {
firstTask: '1. loop through each element from an array',
secondTask: '2. for each element call the provided function',
thiredTask: '3. result for each element will be stored in a new array' 
}
*/
// array of object map:
// please get the all product name and save an another arrays:
const products = [
    { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
    { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
    { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
    { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' },
];

// old version 

const name = x => x.name
const productName = [];
for(let product of products){
    const result = name(product);
    productName.push(result);
}
console.log(productName);      // ans is [ 'Laptop', 'Phone', 'Watch', 'Aunglass', 'Camera' ]
// this is newest version where we called map function and pass the arrow function functionality as a parameter inside the map function


const productsName = products.map(product => product.name); // 
console.log(productsName);        // ans is [ 'Laptop', 'Phone', 'Watch', 'Aunglass', 'Camera' ]

// for price :

const productPrice = products.map(p => p.price);
console.log(productPrice);            // ans is [ 32000, 700, 3000, 300, 9000 ]