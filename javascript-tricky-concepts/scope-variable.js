/// there have different types of scope like :

/* 
1. local/function/block Scope ==>> where we use  let and const 
2. Global Scope ==>> where we can use var,let and const quite similar, basically var always global scope
*/

// example given below:
let a = "akash"; // global variable
const b = "khan"; // global variable
var c = "dhaka"; // global variable we can access this varible from function scope, loop scope, conditionals scope also
function lol() {
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(lol());
console.log(a);
console.log(b);
console.log(c);

// 2nd example:

const blockScope = (first, second) => {
  const result = first + second;
  return result;
};
console.log(blockScope(20, 30)); // ans is 50
// console.log(first);       /// first is not defined because they all are inside function variable
// console.log(second);      /// second is not defined they all are local/block scope variable
// console.log(result);      /// result is not defined we cant access any local/block scope

// block scope
const blockScope1 = (first, second) => {
  const result = first + second;
  if (result > 9) {
    const mood = "happy"; // ans is happy cause we do console log in block scope
    console.log(mood);
  }
  return result;
};
blockScope1(10, 20);

//
/* const blockScope2 = (first, second) => {
  const result = first + second;
  if (result > 9) {
    const mood = "happy";
  }
  console.log(mood); // ans is mood is not define cause mood variable define inside the if conditions and we want them outside the block scope this is calleed scope
  return result;
};
blockScope2(10, 20); */
// if we define a variable with var :
const blockScope3 = (first, second) => {
  console.log(mood); // undefined thats call hoisting
  const result = first + second;
  if (result > 9) {
    var mood = "happy";
    mood = "cranky";
    lol = "going to global";
  }
  console.log(mood); // ans is cranky but if we write any variable with var inside block than it will be hoisting and going to top and so that we cant not use var inside block
  return result;
};
blockScope3(10, 20);
// this is called global leaking 
console.log(lol);          // ans is going to global that means if we declared a variable without let, const inside the block scope that will be a global variable and we can access this from any place 
