// when we declare a constant variable which value will never change than we declared with 'const'
// 'const' didnt allow reassign value. but you can use string,numbe or arrays method
// if we wnat to change or reassign our variable values than we can use 'let always'

let number = 20;
number = 30;
console.log(number);    /// ans is 30

// but 

const num = [1,2,3,4,5];
console.log(num[2]);    // ans is 3
num[3] = 6;
console.log(num);      // ans is [1,2,3,6,5]; 

// but now we reassign all the num than it will give you an error