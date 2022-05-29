/// API = Application Programming Interface
// which meanly work like customer to chef in middle man of waiter mainly sepends on request and response
// Api basically pss by using Json which is = Javascript Object Notation , it is pretty same as javascript objects.

// just in objects we write propertyName without cotation(""), and Json we write propeertyName with double cotation like - {"name" : "mahbub"}

// javascript ojects :
const products = [
  { name: "Laptop", price: 32000, brand: "Lenovo", color: "Silver" },
  { name: "Phone", price: 700, brand: "Iphone", color: "Golden" },
  { name: "Watch", price: 3000, brand: "Casio", color: "Yellow" },
  { name: "Aunglass", price: 300, brand: "Ribon", color: "Blue" },
  { name: "Camera", price: 9000, brand: "Lenovo", color: "Gray" },
];
console.log(products[1].name); // output is "name" cause it is a javascript object and we apply all object method with this by using javascript

// Json:
const allProducts = [
  { name: "Laptop", price: 32000, brand: "Lenovo", color: "Silver" },
  { name: "Phone", price: 700, brand: "Iphone", color: "Golden" },
  { name: "Watch", price: 3000, brand: "Casio", color: "Yellow" },
  { name: "Aunglass", price: 300, brand: "Ribon", color: "Blue" },
  { name: "Camera", price: 9000, brand: "Lenovo", color: "Gray" },
];

console.log(allProducts[2].price);

/// maximum time we get Json and maximum time also we get stringify:
/* the structure of 2 json method is :
1. stringify ==>> const variableName = JSON.stringify(desireJSObjects);
2. parse  ==>> const variableName = JSON.parse(desireStringifyString);
*/
// if we get products objects than first we transfer it on stringify:
const getStringify = JSON.stringify(products); //// Json method stringify()function call for being json
console.log(getStringify); // output is stringify json
/* 
[{"name":"Laptop","price":32000,"brand":"Lenovo","color":"Silver"},{"name":"Phone","price":700,"brand":"Iphone","color":"Golden"},{"name":"Watch","price":3000,"brand":"Casio","color":"Yellow"},{"name":"Aunglass","price":300,"brand":"Ribon","color":"Blue"},{"name":"Camera","price":9000,"brand":"Lenovo","color":"Gray"}]
*/
/// again stringify string to javascript object transformation by using JSON method parse() function:

const getParse = JSON.parse(getStringify); /// JSON method parse() function called
console.log(getParse); //// output will be stringify to javascript object
/* 
[
  { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
  { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' },
  { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
  { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
  { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' }
]
*/

/// we can get Json data from REST API by using fetch() functiuon:
// ====>> fatch('rest-api-string-URL') ==>> fetch means "tene ana"

//////////////////////////////////////////////////////////////////////////////////////////////////


/// if we need any ready REST API with Json then we go to 'json placeholder' website 


//////////////////////////////////////////////////////////////////////////////////////////////////
