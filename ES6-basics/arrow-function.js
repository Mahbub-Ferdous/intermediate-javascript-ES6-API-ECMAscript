// here is EcmaScript(ES6) arrow function details:

// older function  systems:
function sum(num1, num2) {
  const total = num1 + num2;
  return total;
}

// if we write this with ES6 arrow function :
const sum2 = (num1, num2) => {
  //  basically arrow function will be declared inside a variable
  return num1 + num2; // its also called anonymus function
};
const add = sum2(20, 20);
console.log(add); // ans is 40 cause we declare a anonymus arrow function by using variable name

// more affordable arrow function :

const multiply = (num1, num2) => num1 * num2;
const calc = multiply(10, 30);
console.log(calc); // ans is 300 this arrow function is more affordable than before

/// th estructure of arrow function is:

/******* variableName = (parameter, (n)parameter) => implicit return with functionality *******/
/****** variableName = (parameter, (n)parameter) => {explicit return with functionality}; ******/
