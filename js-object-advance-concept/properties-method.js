/// a object contains some property and the properties are two part : 1. key/propertyName 2. value

// if we need to get all the key or ppropertyName of the object :
// getting the all properties name:
const bottle = {color: "yellow", hold: "water", price: 130, isCleaned: true};
// if we need to get the all keys of the object than we can use "Object.keys(objectName)":
const key = Object.keys(bottle);    // keys() this is function to get the all keys of desire object
// this method gives us a keys array as output:
console.log(key);        // ans is [ 'color', 'hold', 'price', 'isCleaned' ]

/// getting the all values from an objects :
const value = Object.values(bottle); // values() this is function to get the all values from your desire object
console.log(value);    // ans is [ 'yellow', 'water', 130, true ]


/// geting all property from object with key and value both :
// here we can use "entries()" function to get all property from an objects:
const pairs = Object.entries(bottle);
console.log(pairs);  // ans is [['color','yellow'],['hold','water'],['price',130],['isCleaned' true ]]    // we get an array of property with different array

// this method gives us 2 dimentional array that means array inside an array


// delete property from an objects :
// write delete keyword to delete some property from an objects:

delete bottle.isCleaned;
console.log(bottle);     // ans is { color: 'yellow', hold: 'water', price: 130 } there have not a property like isCleaned;

// we can prevent delete method by using seal() function that means the object will be sealgala and we cant delete any property also cant insert any new properties 

Object.seal(bottle);    // we tranform this object to still sealgal object there have no delete method works:
delete bottle.price;
console.log(bottle);          /// ans is { color: 'yellow', hold: 'water', price: 130 } price do not delete any ways 
// but you chane the value :
bottle.price = 150;
console.log(bottle);      // ans is { color: 'yellow', hold: 'water', price: 150 }


// if we use freeze than we cant add or delete any property and cant change any property value:
Object.freeze(bottle);
console.log(bottle);   // ans is dame cause we tranform object as freeze