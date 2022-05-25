// here is big arrow function:
const big = (num1, num2, num3, num4) => num1 + (num2 * num3) / num4; // this is called implicit return
const number = big(50, 40, 30, 40);
console.log(number); // ans is 80 cause = fast (/) than (*) than (-) than (+).its all sepends on operator precedence

// if we pass only one parameter in our arrow function than we do not write brackets before and after the parameter name:

const tenTimes = (num) => num * 10;
console.log(tenTimes(10)); // ans is 100

// if there have no parameter pass in the arrow function than how can we write :

const publicName = () => "Kalu mastan";
console.log(publicName()); // ans is 'Kalu mastan'

/////// N:B : if there have no parameter in our arrow function than we write only null 1st bracket and arrow sign than functionality, if we have two and more than two parameter on our arrow function than we write thoose parameter inside the 1st brackets also, but if we have only one parameter than we cannot pass the parameter with the brackets. we write the parameter without brackets.

/// if we write a arrow function with multi functionality than we use 2nd bracket after the arrow sign :

const doMath = (x, y) => {
  const addTwo = x + y;
  const minusTwo = x - y;
  const multipleTwo = x * y;
  const divisibleTwo = x / y;
  const total = addTwo + minusTwo + multipleTwo + divisibleTwo;
  return total; // this is called explicit return
};
console.log(doMath(50, 10)); // ans is 605

// sort with arrow function :
const guru = [10, 77, 87, 99, 3, 4, 7, 1, 12, 15];
const sorted = guru.sort((a, b) => a - b);
console.log(sorted);
