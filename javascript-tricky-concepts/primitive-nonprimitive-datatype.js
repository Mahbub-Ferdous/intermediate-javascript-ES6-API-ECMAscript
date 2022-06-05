///////// primitive or immutabble data type ==>> immutable or primitive means something that cannot be changed or added. Primitive/immutable values in JavaScript cannot have anything added upon to them, they can only be re-assigned.

// Primitive types are simple atomic pieces of data in JavaScript. Primitive types are always saved and accessed by the variable's value and not as a reference to another object

// here we have 6 types of primitive/immutable data type:
/* 
1. number
2. string
3. boolean
4. null
5. undefined
6. symbol
*/

/////// nonpremitive/mutable/refference data type ==>> nonpremitive/mutable/reference type data means something that can be changed or added. nonpremitive/mutable/reference values in JavaScript can have anything added upon to them

// Reference/nonpremitive/mutable types are not simple atomic values but are objects that are made up of multiple properties assigned to them. They are stored as a reference in memory and not as independent values assigned to variables. There are three reference types in JavaScript:

/* 
1. objects
2. array
3. function
*/


/// example of premitive/immutable data type :

// 1. cant add or remove 2. only reassign

let a = 500;
console.log(a);    // ans is a = 500. here memeory set and give a space for a varible indivisual
a = 600;
console.log(a);   // ans is a = 600. here also gives a space for a indivisual space but we can reassign value of a but it will be also get a indivisual memory space 

// another primitive/ immutable example given below: 

let n = 'mahbub'
let n2 = n;
console.log(n)    // ans is 'mahbub'
console.log(n2)   // ans is also "mahbub" but both are different varible and both have different memory space see below if we reasign "n2" than it will be new value cause both are indevisual memory space freedom
n2 = 'ferdous';
console.log(n2);     // ans is "ferdous" where is indevisual value not came from any refference like arrays or objects 

/// so its is proven that immutable or primitive data type are not changed or add or remove, they are only reassign


/// example of nonpremitive/mutable/reference data type :

// 1. can add or remove 2. also reassign

let person = {
    name: 'john',
    age: 22,
};

let person2 = person; 

console.log(person);
console.log(person2);

/*
* {
* name: 'john',
* age: 22,
* }
*
* {
* name: 'john',
* age: 22,
* }
*/         

// both are same output but both memory location are not space independent they are in a one memory space where both are connected so that it is called reference data type also

// if we change anything on person2 than both will be change cause they are from same memory location, example given below:
person2.name = 'doe'; 

console.log(person);
console.log(person2);

/*
* {
* name: 'doe',
* age: 22,
* }
*
* {
* name: 'doe',
* age: 22,
* }
*/
// see both are change there name property if we change the new objects property and its prove that object are inter reference mutable non primitive data type those are inter connected from one memory location.

// if we prevent this we can apply spread operator/ (...) three dots to extract the value o variable and save it at new variables :

let person3 = {
    name: 'john',
    age: 22,
};

let person4 = {...person3};
person4.name = 'doe';

console.log(person3);
console.log(person4);

/*
* {
* name: 'john',
* age: 22,
* }
*
* {
* name: 'doe',
* age: 22,
* }
*/

// if we use three dots/spread operetor than we can prevent this memory location reference 