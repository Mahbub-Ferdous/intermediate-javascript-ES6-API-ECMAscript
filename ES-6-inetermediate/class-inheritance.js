/// how can we inherits one class to another by using extends and call super() function
// this is common property class which is inherits all the another classes
class teamMember {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  name;
  designation = "web dev";
  address;
}

// support dev
class suppotDev extends teamMember {
  supportTime;
  constructor(name, address, time) {
    super(name, address);
    this.supportTime = time;
  }
  startSession() {
    console.log(`${this.name} start a support session`);
  }
}

//student care
class studentCare extends teamMember {
  routineNumber;
  constructor(name, address, number) {
    super(name, address);
    this.routineNumber = number;
  }
  buildRoutine(student) {
    console.log(`${this.name} build a routine for ${student}`);
  }
}

// neptune team
class neptuneTeam extends teamMember {
  releaseVersion;
  constructor(name, address, releaseVersion) {
    super(name, address);
    this.releaseVersion = releaseVersion;
  }
  releaseApp(version) {
    console.log(`${this.name} release app version - ${version}`);
  }
}
// supportdev
const amirKhan = new suppotDev("Amir Khan", "Mumbai", "8.00 PM");
amirKhan.startSession(); // ans will be 'Amir Khan start a support session'.
console.log(amirKhan);
//student care
const jalal = new studentCare("Jalal Uddin", "Bangladesh", "Routine-10");
jalal.buildRoutine("Fariha"); // output is 'Jalal Uddin build a routine for Fariha'
console.log(jalal);
//neptune team
const devSohan = new neptuneTeam("Sohan", "Dhaka", "12.5");
devSohan.releaseApp("12.5"); // output is  'Sohan release app version - 12.5'
console.log(devSohan);

///// the all output given bellow:
/* 
Amir Khan start a support session
suppotDev {
  name: 'Amir Khan',
  designation: 'web dev',
  address: 'Mumbai',
  supportTime: '8.00 PM'
}
Jalal Uddin build a routine for Fariha
studentCare {
  name: 'Jalal Uddin',
  designation: 'web dev',
  address: 'Bangladesh',
  routineNumber: 'Routine-10'
}
Sohan release app version - 12.5
neptuneTeam {
  name: 'Sohan',
  designation: 'web dev',
  address: 'Dhaka',
  releaseVersion: '12.5'
}
*/

////// in an inherits we declared a class which is hold common properties of another claases. and if we want to inherits our parent or super() class in our child class than we declared = class ChildClassName extends superClassName{} and if we capture the common property from the super class than we call the super() function and pass those property is as parameter and if we need some extra property add on child class than we need extra constructor(){} class and pass the new property as a parameter
