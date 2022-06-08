// we know that we can pass parameter inside a function, what kind of data we can pass:
/* 
1. number
2. string
3. boolean
4. array
5. object
*/

// and ofcourse we can pass a function as a parameter inside a function :

const total = (name, calc) => {
  console.log(calc); // we print the parameter which we pass in the function parameter
  // now we call the details function:
  calc(name); // ans is Good Morning Akbor Khan Name: Asif Khan Age: 30
};
// now we pass a function as a parameter inside total function:
const details = (name) => {
  const name1 = "Asif Khan";
  const age = 30;
  console.log(`
    Good Morning ${name}.
    Name: ${name1}
    Age: ${age}
    `);
};
const details2 = (name) => {
  const name2 = "Mahbub Ferdous";
  const age = 26;
  console.log(`
    Good Afternoon ${name}.
    Name: ${name2}
    Age: ${age}
    `);
};

const newDetails = total("AKbor Khan", details); // ans is [Function: details] that means details is a function we pass as a parameter inside total function and call that function
// call the second call abck function:
const newDetails2 = total("Bijoy", details2); // ans is [Function: details] that means details is a function we pass as a parameter inside total function and call that function

/// so what is call back function :

/* 
==>> if we pass a function as a parameter inside another funtion and than we call the parameter funtion inside the function block scope that called call back fucntion.
*/
