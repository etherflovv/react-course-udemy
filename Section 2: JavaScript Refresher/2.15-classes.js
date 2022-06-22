// Classes:
class Person {
    name = 'Max' // Property
    call = () => {...} // Method
}

// Usage:
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)
// similar to constructor functions

// Inheritance:
class Person extends Master
// similar to prototypes


// EXAMPLE STARTING

class Person {
    constructor() {
        this.name = 'Max';
    }
    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();

// EXAMPLE INHERITANCE

class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human { // inherit property & method from "Human"
    constructor() {
        super(); // must call super constructor in the derived class
        this.name = 'Max';
        this.gender = 'female'; // can set the inherited gender property in here
    }
    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();