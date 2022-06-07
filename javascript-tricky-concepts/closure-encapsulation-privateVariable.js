// closure means ===>>> n JavaScript, a closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.

// A closure gives you access to an outer function’s scope from an inner function

const init = ()=>{
    let name = 'mahbub';   // name is a local variable created by init
    return () => {         // this arrow function() is the inner function, a closure
        return name;   // use variable declared in the parent function
    } 
};
const show = init();
console.log(show);   ///   so this is a [Function (anonymous)] so we call it again
// call it again:
console.log(show());    /// ans is mahbub so this is call from closure function 


// another example given below:
const stopWatch = ()=>{
    let counter = 0;    // counter is a local variable inside stopWatch()function
    return ()=>{   // this function is an anonymous function which we return this is called closure
        counter++;  // we increament our parent function local variable (+1) indside our anonymous function
        return counter;
    }
};
const clock1 = stopWatch();
console.log(clock1);      // we call stopWatch function and get an another anonymous function [Function (anonymous)]
// call anonymous function inside stopWatch function:
console.log(clock1());     // one increament and ans is 1
console.log(clock1());     // one increament and ans is 2
console.log(clock1());     // one increament and ans is 3

// if we call this on a new function than it will creat its new closure :
const clock2 = stopWatch();
console.log(clock2());     // one increament from start 0 ans is 1
console.log(clock2());     // one increament ans is 2
console.log(clock2());     // one increament ans is 3


/// so that there closure are almost deferent 