// default parameter means when we call a function with parameter but not pass the arguments than this is called default parameter, like :

function add(num1, num2) {
  let total = num1 + num2;
  return total;
}
const para = add(15, 35);
console.log(para); //   ans is 50

// but now if we pass one arguments in our add function but add function will be two parameter than what happends - example given below:

function summation(num1, num2) {
  let total = num1 + num2;
  return total;
}
const paramtr = summation(15);
console.log(paramtr);     // ans will be NaN = not a number cause num2 i mean 2nd parameter will be undefine and when we add a number with undefine than it will be not a number 


// so what is soluationn to resolve it
// older system-1
function additon(num1,num2){
    if(num2 == undefined){       // this is older system
        num2 = 0               // that means when 2nd parameter do not pass than it will be undefined but if num2 = undefined than num2 = 0
    }
    const total = num1 + num2;
    return total;
}
const parameter = additon(15);
console.log(parameter);      // now the ans is  15 cause 15 + 0 = 15
// older system - 2 ans es6 system:
function added(num1,num2 = 0){
    // older
    /* num2 = num2 || 0 ;   // means if num2=num2 or 0 */
    const total = num1 + num2;
    return total;
}
const params = added(15);
const params2 = added(15,35);
console.log(params);      // ans will be 15 cause num2 = 0 and we didnt pass any num2 arguments but if we pass any arguments than that will be counted the value of num2 not counted num2 = 0 and thats why we use default parameter function if we missed to pass any parameter 
console.log(params2);       /// ans will be 50 cause num2 = 0 default parameter didnt counted anyways 



// function-default parameter-string:
function fullName(first,last = 'Khan'){
    const fullName = first + " " + last;
    return fullName;
}
const name = fullName("Azad");
console.log(name);     // abs will be Azad Khan