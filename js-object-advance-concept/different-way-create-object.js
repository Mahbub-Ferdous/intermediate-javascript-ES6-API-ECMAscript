// basic object declaration:
// object literal:
const student = { name: "asif", age: 22, cgpa: "3.2", id: 6776376387 };

// declared object using object constructor:
const player = new Object(); // and also you can pass some data under the first brackets
console.log(player); // ans is {} objects

// object inheritance declaration :

const newStudent = Object.create(null); // we should pass any data type in create function at least null and we also inherite any object there
const newStudent1 = Object.create(student);
console.log(newStudent);
console.log(newStudent1.id); // ans is 6776376387 we can access the id from inherit student objects property
console.log(newStudent1.age); // ans is age 22
console.log(newStudent1.name); // ans is asif

/// create objeect by using class:

class People {
  /// this is called javascript syntactical sugar that all done with function but we get a syntactical class suger
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}

const peop = new People("Mahbub Ferdous", 26, 19961308);
console.log(peop); // People { name: 'Mahbub Ferdous', age: 26, id: 19961308 }

// this also create an another object.

// create object by using function :

function Manus(name, age, id){
  this.name = name;
  this.age = age;
  this.id = id;
}

const man = new Manus("Bijoy", 26, 13081996);
console.log(man);     // ans is Manus { name: 'Bijoy', age: 26, id: 13081996 }

// and that is also an object 

// all things happened with function like class but class are the syntactivcal sugar of function.
