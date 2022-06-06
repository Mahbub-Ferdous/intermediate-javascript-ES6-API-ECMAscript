// double equal (==) only check the values are getting same but did not check the types deference between conditons.

// triple equalto (===) check both values and types of values in this reason all time we prefered use tripple (===) inside coditional statements

// in double (==) only check the same value and it also change the another value for the ans true:
// for double:
let a = 5;
let b = 5;
if (a == b) {
  console.log("true"); // ans is true
} else {
  console.log("false");
}
// for triple:
let c = 5;
let d = 5;
if (c === d) {
  console.log("true"); // ans is true
} else {
  console.log("false");
}
// for double
let e = 5;
let f = "5";
if (e == f) {
  console.log("true"); // now it also true cause (==) do not check the types and it inside transformed the string 5 to number 5
} else {
  console.log("false");
}
// for triple:
let g = 5;
let h = "5";
if (g === h) {
  console.log("true"); // ans is false cause (===) check the types
} else {
  console.log("false");
}
// for double:
let i = 1;
let j = true;
if (i == j) {
  console.log("true"); // ans is true cause (==) do not check the types and true tranfromed to 1
} else {
  console.log("false");
}
// for triple:
let k = 1;
let l = true;
if (k === l) {
  console.log("true"); // ans is false cause (===) check the types
} else {
  console.log("false");
}


/// most of the time almost 99% we use (===)

/// and if we compare primitive/immutable/nonreference data type than we can use (==) but most of the time use(===) cause (==) have bugs 

/// but nonprimitive/mutable/reference data types like - object,array,function you donot use (==) you must used (===)

// example given below:
const arr1 = [];
const arr2 = [];
if(arr1 == arr2){
    console.log("Both are same");
}else {
    console.log("both are not same");        /// ans is both are not same 
}

// for objects :
const obj1 ={};
const obj2 = {};
if(obj1 == obj2){
    console.log("Both are same");
}else {
    console.log("both are not same");        /// ans is both are not same 
}

// for tripple:
const obj3 ={};
const obj4 = {};
if(obj3 === obj4){
    console.log("Both are same");
}else {
    console.log("both are not same");        /// ans is both are not same 
}