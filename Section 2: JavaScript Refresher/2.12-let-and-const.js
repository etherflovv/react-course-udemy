// OLD: var
// NEW: let // for variable values
// NEW: const // for constant values

// OLD 
var myName = 'Max';
console.log(myName); // prints Max

myName = 'Manu' // change myName
console.log(myName); // prints new value; Manu


// NEW - works exact same way
let myName = 'Max';
console.log(myName); // prints Max

myName = 'Manu' // change myName
console.log(myName); // prints new value; Manu


// using const
const myName = 'Max';
console.log(myName); // prints Max

myName = 'Manu' // gets error because const cannot be changed
console.log(myName); // gets error because const cannot be changed