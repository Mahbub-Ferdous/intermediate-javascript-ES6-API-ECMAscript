// class is similar like function and objects  : structure given below:

/* 
class className {
    property = value;      // in there we declared a property with equal to not like objecs
    write some function 

}
*/

// when we create a class there have same similarity property and that called us for different different objects so we can use constructor:

class suppotDev {
  name;
  designation = "suppot web dev";
  address;
  constructor(name,address) {            // we ,must use the constructor for indevisual objects and pass the indivisual property on parameter
    this.name = name;               /// and for indivisuality we called this    
    this.address = address;
  }
  startSession() {
    console.log(`${this.name} start a support session`);
  }
}
const amirKhan = new suppotDev("Amir Khan", "Mumbai"); /// we call a class like function just add new extra
amirKhan.startSession();       // ans will be 'Amir Khan start a support session'.
console.log(amirKhan); // its gives us an objects like { name: undefined, designation: 'suppot web dev' }


///// write a car class :
// so we declare some common property with a car class than we can build lots of car with this common property class
class car {
    constructor(brandName,model,year,color,gearSystem){
        this.brandName = brandName;
        this.model = model;
        this.year = year;
        this.color = color;
        this.gearSystem = gearSystem;
    }
    brandName;
    model;
    year;
    color;
    gearSystem;
}

const toyotaAxio = new car('Toyota', 'Axio-Gt5', '2020', 'Pearl', 'Auto');
const nissanCar = new car('Nissan', 'Nissan-Sunny', '2008', 'Red-Wyne', 'Manual');
console.log(toyotaAxio);
console.log(nissanCar);

/* 
// toyotaAxio objects ans:
car {
  brandName: 'Toyota',
  model: 'Axio-Gt5',
  year: '2020',
  color: 'Pearl',
  gearSystem: 'Auto'
}
*/

/*
// nissanCar objects ans:
car {
  brandName: 'Nissan',
  model: 'Nissan-Sunny',
  year: '2008',
  color: 'Red-Wyne',
  gearSystem: 'Manual'
}
*/


////// if you access any property from a class than access this.propertyName
