// use bind to borrow method from another method:
// bind method similar like inheritance:


const student = {
    id: 1007,
    name: "hasan",
    money: 5000,
    isRich: false,  
    treatDay: function(expense){
        this.money = this.money - expense;
        //for test
        console.log("After Given Treat = ", this);
        return this.money;
    }
};

// 
const heroAlam = {
    id: 1008,
    name: "Hero Alam",
    money: 6000,
};

student.treatDay(1000);

// now apply bind() function to get treatday function from student:

const heroTreatDay = student.treatDay.bind(heroAlam);  // that means student.treatDay property binding with as a heroAlam objects property

// breakdown : we declared a variable which contains student object function property so the variable will be function, and we call the function [student.treatDay] and apply bind() function for binding the treatDay function with heroAlam object and pass heroAlam object as parameter of bind() function like [student.treatDay.bind(heroAlam)]

console.log(heroTreatDay);     /// so we see heroTreatDay is a function
// so now we call the heroTreatDay function with expense parameter 
heroTreatDay(1000);    // ans is { id: 1008, name: 'Hero Alam', money: 5000 }

// cause we use treatDay function from parent object student by using bind() function and the money will 5000 cause we pass 1000 with treatDay() function expense pareameter



/// so if we have any method like function property in object than "this" keyword define that object 

// and if we need to inherite another object function property in other object than we can call that objectName.propertyName.bind(this);  in here we define this as our new object name 



// now another example of bind() funtion:

const jamalMusiala = {
    id: 1009,
    name: "Jamal Musiala",
    money: 10000,
};

const jamalTreatDay = student.treatDay.bind(jamalMusiala);
jamalTreatDay(2500);    // the ans is After Given Treat =  { id: 1009, name: 'Jamal Musiala', money: 7500 }