// Properties are like "variables attached to classes/objects"

// ES6
constructor () {
    this.myProperty = 'value'
}

// ES7
myProperty = 'value'


// Methods are like "functions attached to classes/objects"

// ES6
myMethod () { ... }

// ES7
myMethod = () => { ... }

//////////////////////

// from previous example
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


// edited --> USE ES6/Babel to accept next-gen js syntax
class Human {
    gender = 'male'; // remove constructor and "this" on property
    
    printGender = () => { // use arrow syntax for function
        console.log(this.gender);
    }
}

class Person extends Human { 
    name = 'Max'; // remove constructor and "this" on property
    gender = 'female'; // also no need 'super' anymore
    
    printMyName () => { // use arrow syntax for function
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();