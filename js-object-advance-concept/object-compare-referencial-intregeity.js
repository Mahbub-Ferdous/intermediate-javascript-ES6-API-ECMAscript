/// in javascript array,object and function are nonprimitive/mutable/reference data type where they are save an memory place which is same and they maintain there reference.

// if we want to compare nonprimitive/reference/mutable data type compare than it will be challeneging in javascript specially object, if we compare any primitive data type with === than looks like:

const a = 5;
const b = 5;
if(a===b){
    console.log("ok");    // ans is ok
}else{
    console.log("not ok")
}

// now we compare with two object those are same value :

const first = {a:5};
const second = {a:5};
const third = first;
if(first == second){
    console.log("true");
}else{
    console.log("false")    // ans is false 
}

// now we can try with (===):
if(first === second){
    console.log("yes");
}else{
    console.log("no");     /// ans is no
}

// but why?? cause they are nonprimitive data type they define from a memory space where they are reference each other.

// now we compare with first and third and they are from one refereence:

if(first === third){
    console.log("true");    // ans is true cause they are from one reference 
}else{
    console.log("false");
}

/// but if we need to compare to different objects than what can we do given below:

// we can compare by using JSON.stringify() function

console.log(JSON.stringify(first));     // ans is {"a":5}
console.log(JSON.stringify(second));    // ans is {"a":5}
// so now we compare with one another:
if(JSON.stringify(first) == JSON.stringify(second)){
    console.log("both are same");    /// ans is "both are same"
}else{
    console.log("both are not same");
}

// but this method there have some propbelem if we change the index of elements :

const first1 = {a:5,b:10};
const second1 = {b:10,a:5};
if(JSON.stringify(first1) === JSON.stringify(second1)){
    console.log("both are same");    /// ans is "both are same"
}else{
    console.log("both are not same");     // ans is both are not same 
}


// so if we prevent this thing than we can use a function and use consition with array length method a loop with condition:

const compare = (obj1,obj2) => {
    // apply object.keys()method with array length method:
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }
    return true;
};

const toEqual = compare(first1,second1);
console.log(toEqual);                  /// ans is true 
// another example:
const first2 = {a: 5, b: 10};
const second2 = {b: "10", a: 5};
const toEqual2 = compare(first2,second2);
console.log(toEqual2);     /// ans is false 

// another example:
const first3 = {a: 5, b: 10};
const second3 = {b: 15, a: 5};
const toEqual3 = compare(first3,second3);
console.log(toEqual3);     /// ans is false 