// ours have an objects and there have 10 property but we need 5 property and than save on deferent variables that will be easy :

// this is called destructuring of an objects:
const fish = {
  id: 99,
  name: "king hilsha",
  mobile: "017556869554",
  address: "chadpur",
  color: "silver",
};
// we save the property of fish in deferent variable:
let name = fish.name;
let mobile = fish.mobile;
let address = fish.address;
let color = fish.color;
// output of the variable :
console.log(name); // ans is king hilsha
console.log(mobile); // 017556869554
console.log(address); // ans is 017556869554
console.log(color); // ans is silver

/////// but the most important destructuring method is one variable with all values :
const fish1 = {
  id1: 99,
  name1: "king hilsha",
  mobile1: "017556869554",
  address1: "chadpur",
  color1: "silver",
};
const { name1, mobile1, address1, color1 } = fish1;
console.log(name1, mobile1, address1, color1); /// ans is king hilsha 017556869554 chadpur silver

/// nested objects means object inside objects :

const company = {
  name: "GP",
  ceo: { id: 1, name: "amzad", food: "fuchka" },
  it: {
    dept: "web development",
    employe: 20,
    framework: "reactjs",
    tech: { first: "html", second: "css", thired: "bootstrap", fourth: "SaSS" },
  },
};

// if we need dept property save on a variable :
const dept = company.it.dept;
const ceoName = company.ceo.name;
console.log(dept); /// ans is 'web development'
console.log(ceoName); ///  ans is 'amzad'

// but shortcut destructuring:
const { employe, framework } = company.it;
console.log(employe, framework); // ans is '20 reactjs'
// parentObject.childObjects
const { id, food } = company.ceo;
console.log(id, food); // ans is '1 fuchka'
// thired child objects in parent properties :
const {first,second,thired,fourth} = company.it.tech;
console.log(first,second,thired,fourth);                //  ans is html css bootstrap SaSS

//////// object property will be an objects and also another property objects property will be an object mind it.
