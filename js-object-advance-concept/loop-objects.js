/// how much for loop we know :
/* 
1. for(const i = 0; i < num.lenght; i++)   basic for loop 
2. for(const num of numbers )     // we mainly use it for arrays aand some arrays types object
*/

// but we can also use another for loop for objects that is :
/* 
### for....in:
for(const obj in objects)
*/

// 1st system to looping loop:
const bottle = { color: "yellow", hold: "water", price: 130, isCleaned: true };
const output = [];
const output1 = [];
const output2 = [];
for (const bot in bottle) {
  // we can find only keys
  output1.push(bot);
  // we cqan find only keys value
  output.push(bottle[bot]);
  // we can find with both
  output2.push(bot + ":" + bottle[bot]);
}
console.log(output); // [ 'yellow', 'water', 130, true ] ans is only value cause we use objectName[loopname]
console.log(output1); //[ 'color', 'hold', 'price', 'isCleaned' ] ans is only keys when we use only bot
console.log(output2);

// another loop system with keys() funtion:

const key = Object.keys(bottle);
/* console.log(key); */ // we can get all the keys an arrays [ 'color', 'hold', 'price', 'isCleaned' ]
// so now we can use for..of loop to access the object property cause keys are now inside arrays :

for (const num of key) {
  console.log(num, bottle[num]);
}

/* 
ans ia :
color yellow
hold water
price 130
isCleaned true
*/

/// another system for looping with entries() function:

const entries = Object.entries(bottle);
console.log(entries); 
/* 
ans is :
[[ 'color', 'yellow' ],[ 'hold', 'water' ],[ 'price', 130 ],[ 'isCleaned', true ]]
// this is now a array of array from an objects by using entries() function
*/
// now we destructuring array and looping this:

for(const [key,value] of entries){
  console.log(key,value);
}
/* 
//ans of this loop is:
color yellow
hold water
price 130
isCleaned true
*/