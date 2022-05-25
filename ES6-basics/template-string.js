// template iterals = template string
// normal string
const a = "amar sonar bangla";
const b = "ami tomay valobashi";
const c = `Hey i am mahbub  
i am from bangladesh 
i am junior frontend engineer
`; // this for multi line and not need to add any \n new line or plus sign on be half of older version system
console.log(c);
/* Hey i am mahbub  
i am from bangladesh 
i am junior frontend engineer */
// multiple line string with back tic or carrot sign

// dynamic string
// basically if you give dynamic string than you cant not (,) or(+) any string with variable just use template string (``) and changable varible with ${variableName}
const name = "mahbub";
const friends = ["abul", "babul", "cabul", "dabul", "kabul"];
const frndCount = 5;
const friend = `<h3 class="title">Friend-${frndCount}</h3>`;
console.log(`${name}`);
console.log(friend); // ans is <h3 class="title">Friend-5</h3>  cause we use dynamic string with varible bty using template-iterals and ${}.
console.log(`My best friend name is: ${friends[2]}`); // ans is cabul
console.log(`<h3 class="title">Friend-${friends.length}</h3>`); // ans <h3 class="title">Friend-5</h3>
////// you can apply almost all valid javascript method inside dynamic string ${}.
const first = "Mahbub";
const last = "Ferdous";
console.log(`${first} ${last}`); // ans is Mahbub Ferdous.
console.log(
  `My Name Is: ${first} ${last}.I have ${friends.length * frndCount} Taka.`
); /// ans is My Name Is: Mahbub Ferdous.I have 25 Taka.
