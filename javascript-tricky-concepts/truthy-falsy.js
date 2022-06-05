//// intermediate truthy anf falsy:

/* 
////// Truthy: those are truthy ==>>
1. every positive and negative number, without 0
2. every string - includes single white space string(" "), without empty string("")
3. every array with empty array ([]).
4. every objects with empty object({}).
5. anything else that is not falsy will be truthy
*/

/* 
////// Falsy : those are falsy ==>>
1. only number - 0 is falsy 
2. only empty string("") is falsy
3. null is falsy 
4. undefined is falsy.
5. NaN(not a number) is false.
 */

//////// examole given below :
////////////all numbers are truthy without 0:///////////////
//positive:
let a = 20;
console.log(typeof a); // type is "number"
if (a) {
  // ans is "variable is truthy".
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
// negetive:
let b = -20;
console.log(typeof b); // type is "number"
if (b) {
  // ans is "variable is truthy".
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
// only 0:
let c = 0;
console.log(typeof c); // type is "number"
if (c) {
  // ans is "variable is falsy".
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
///// every string - includes single white space string(" ") positive, without empty string("")//
// string:
let d = "Argentina";
console.log(typeof d); // type is "string"
if (d) {
  // ans is "variable is truthy".
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
// with white space(" "):
let e = " ";
console.log(typeof e); // type is "string"
if (e) {
  // ans is "variable is truthy".
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
// with empty string(""):
let f = "";
console.log(typeof f); // type is "string"
if (f) {
  // ans is "variable is falsy".
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
////////////// null is falsy //////////////
// null:
let g = null;
console.log(typeof g);   // type is "object"
if (g) {
  // ans is "variable is falsy".
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
////////////// NaN is falsy //////////////
// NaN:
let h = parseInt('hello');
console.log(typeof h);   // type is "NaN"
if (h) {
  // ans is "variable is falsy".
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
////////////// undefined is falsy //////////////
// undefined:
let i;
console.log(typeof i);   // type is "undefined"
if (i) {
  // ans is "variable is falsy".
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}

//////// all array with empty array and all objects with empty objects are truthy///////////////
// array :
let j = [10,29];
console.log(typeof j); // type is "object"
if (j) {
  // ans is "variable is truthy".
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
// empty array:
let k = [];
console.log(typeof k); // type is "object"
if (k) {
  // ans is "variable is truthy".
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
// objects :
let l = {name: "hasan", age: "33"};
console.log(typeof l); // type is "object"
if (l) {
  // ans is "variable is truthy".
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
// empty object:
let m = {};
console.log(typeof m); // type is "object"
if (m) {
  // ans is "variable is truthy".
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
