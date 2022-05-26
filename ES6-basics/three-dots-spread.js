// spread operator define with three dots (...)

// Math.max with array

const number = [20, 40, 16, 40, 60, 99];
console.log(Math.max.apply(Math, number)); // ans is 99

// if we get the value of an array and than save on another variable we use three dot - spread operator

console.log(...number); // ans is 20 40 16 40 60 99 that means the (,) will be remove and array will be remove

// if we want the max number in the array than we can use spread operator with Math.max:

console.log(Math.max(...number)); // thats ans will be also 99 this is the easiest way to get max number in the arrays

// we also see the lowest number of array by using Math.min:
console.log(Math.min(...number)); //    ans will be 16 cause the lowest number is the array is 16

////// if we have an array already and we will push and pop some elements in this arrays but we need thoose value when we declared the arrays so what can we do - we can use multi dimensional array by using three dots 

const number2 = number               /// normally we put the first define array value cause it will need for our next task 
number.push(88);                    // and we push 88 on our number arrays 
console.log(number2);            ///   but than declared value is not there 88 also there 

/// now if we exacly save our first declared numbers array than we can use three dots:

const number3 = [69,...number,100,200];    // if we want to add some value than we can add with three dots value,, also we can add elements last and first of arrays 
number.push(45,55);
console.log(number3);    //ans will be [20,40,16,40,60,99,88,100,200]    

// now 45,55 is not shown there by the reason of new array with three dots , ans if we want to add some value than we can add with three dots value 
