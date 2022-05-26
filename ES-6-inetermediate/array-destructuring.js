/// arrays destructuring just like an objects :

const team = ["Bayern Munich", "Liverpol", "AC Milan"];
const [bundesliga, epl, seriea, golla] = team;
console.log(epl); /// ans is liverpool foe why casue we declared a variable epl which value is Liverpool from the team arrays
console.log(bundesliga); //   ans is 'Bayen Munich' cause we declare 3 varible with one time from the value of team array serially;
console.log(golla); //  ans is 'undefined' cause in team array there have 3 elements and we declared 4 variable in on time so that 1st is for 1st elements, 2nd for 2nd elements and 3rd for 3rd but in team there have not four elements so that golla = undefined

/// optional chaining:
// what is Optional chaining : object = objectName.parentProperty.childproperty

const company = {
  name: "GP",
  ceo: { id: 1, name: "amzad", food: "fuchka" },
  it: {
    dept: "web development",
    employe: 20,
    framework: "reactjs",
    tech: { first: "html", second: "css", thired: "bootstrap", fourth: "SaSS", fifth: 'javascript'},
  },
};

const {fourth, fifth} = company.it.tech;   // this is called chaining objectName.childProperty.hisChildProperty
console.log(fourth,fifth);   // ans is SaSS, javascript

console.log(company.it.tech.first);      //  ans is html
console.log(company.it.tech.seventh);      //  that is gives us undefined not errror
//console.log(company.it.tech.seventh.cloud);  //  that is gives us an errror called - Cannot read properties of undefined (reading 'cloud')

// if we avoid this error than we can use optional chaining which is define with = (?) sign, example given below:

console.log(company.it.tech.seventh?.cloud);   //  that is not gives us error gives us 'undefined'

///// cause we add optional chaining by using (?) sign and that means if this is true than it will be executed next so we put optional chaining with seventh cause it and tech are there but seventh is not there so we use optional chaining 

