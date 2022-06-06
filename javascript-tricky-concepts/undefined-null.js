//deference between undefined and null ??

// ===> we do not use null altime it use sometime and undefined means if we do not give a value of variable, we do not return something from function this types that means the value of variable is not defined anything and we use null for avoid the value of variable, null is a variable that is defined but is missing a value so this is the core deference between null and undefined

/// how can we get undefined:

/* 
1. only declared variable without value.
2. call function without write return keyword.
3. call function with write undefine return keyword.
4. call function without pass any arguments or parameter.
5. locate any object property those are not in the objects.
6. locate any index at array that does not exists anymore.
7. if we delete any index from an array that index will be undefine but this delete is not proper system to delete anything from array, it was object delete method.
*/

// only declared variable without value:

let a;
console.log(a); // ans is undefined

// call function without write return keyword:

const e = (num1, num2) => {
  const total = num1 + num2;
};

const c = e(10, 20);
console.log(c); // ans also undefine cause we do not define any return

// call function with write undefine return keyword:
const f = (num1, num2) => {
  const total = num1 + num2;
  return;
};
const n = f(10, 20);
console.log(n); // this will be undefine, if you need something get from the the function must you return anything not only write keyword

// call function without pass any arguments or parameter:

const r = (num1, num2) => {
  const total = num1 + num2;
  console.log(num2);        /// this is also undefined
  return total;
};
r(10);

// locate any object property those are not in the objects:

const person = {name : "rajbongshi", age : 44, address: "chokirtola"};
console.log(person.education);     /// also undefined 

// locate any index at array that does not exists anymore:

const arr = [10,20,30,40,50];
console.log(arr[5]);    // ans is undefined cause number 5 index does not exists inside the array


// if we delete any index from an array that index will be undefine

const number = [100,200,300,400,500];
delete number[2];
console.log(number);      // aqns is [ 100, 200, <1 empty item>, 400, 500 ]
console.log(number[2]);   // number 2 index of this number arrays ans is undefined 


