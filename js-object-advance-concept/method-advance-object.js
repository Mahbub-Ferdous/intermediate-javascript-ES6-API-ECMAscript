// knowing this keyword in objects :

// a objects have property like => string, number, boolean, array, object and also a functiuon:

const student = {
    id: 1007,
    name: "hasan",
    money: 5000,
    majorSubject: "mathematics",
    isRich: false,
    subjects: ["physics", "chemistry", "Bangla", "Mathematics"],
    bestFriend : {
        name: "masud",
        majorSubject: "Mathematics"
    },
    takeExam: function(){
        console.log(this.name, "exam will started");
        console.log(this.subjects[2], "exam will started");    // bangla exam will started
        console.log(this.isRich, "exam will started");      /// false exam will started
    },  
    treatDay: function(expense){
        this.money = this.money - expense;
        return this.money;
    }
};

student.takeExam();                // ans is hasan exam will started
const treat = student.treatDay(950);
console.log(treat);              // ans is 4050 we will get acces the anonymus function in the objects

///  in this topic we learn a topic that we can add a function as a proiperty in the objects and than we can call this by using object methid 

// and we can know the using of "this" keyword.