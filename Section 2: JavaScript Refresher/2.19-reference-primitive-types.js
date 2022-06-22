// primitive types == numbers, strings, booleans 
// reference types == objects, arrays


// PRIMITIVE TYPES
const number = 1; // primitive type
const num2 = number; // makes a 'copy' of number


// REFERENCE TYPES - OBJECTS & ARRAYS
const person = { // const person stores a pointer to that place in memory
    name: 'Max' // the object is stored in memory
}; 

const secondPerson = person; // pointer is copied, not the value!

person.name = 'Manu'; // change original person name to Manu
console.log(secondPerson); // but secondPerson also prints Manu

// TO COPY OBJECT's PROPERTIES -> USE SPREAD OPERATOR
const secondPerson = {
    ...person
};