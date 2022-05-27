/// why we use forEach() function : its similar to map() but in map() function we need a return result and save it an varible which is array but forEach() function we do  not need any retun we only see something than we use forEach :


const products = [
    { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
    { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
    { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
    { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' },
];

products.forEach(product => console.log(product.brand));      
/* ans is
Lenovo
Iphone
Casio
Ribon
Lenovo */
// console.log(x);       // in forEach we donot use any variable to save it an array, the main difference between map and forEach is map doing return in a new array but forEach not .