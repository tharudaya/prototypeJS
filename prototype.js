// normal object creating
let person = {firstName:"John", lastName:"Doe", age:50};
console.log(person);

/*****************************
            Part-1 
******************************/

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

// we can find both properties in rabbit now:
alert(rabbit.eats); // true
alert(rabbit.jumps); // true

/*****************************
            Part-2 
******************************/

// creating constructor function
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

// creating new objects usign passing values to constructor function
const myFather = new Person("John", "Doe", 50);
const myMother = new Person("Sally", "Rally", 48);

// adding new property using prototype
Person.prototype.color = "white";

console.log(myFather);

