// // OLD FORMAT

// function myFnc() {
//     ...
// }

// // OLD EXAMPLE:

// function printMyName(name) {
//     console.log(name);
// }

// printMyName('Max');


// // NEW FORMAT

// const myFnc = () => {
//     ...
// }

// NEW EXAMPLE:

const printMyName = (name) => {
    console.log(name);
}

printMyName('Max');


// // Alternative syntaxes for argument
// // If exactly ONE argument, parentheses can be omitted.

const printMyName2 = name => {
    console.log(name);
}

// Alternative syntaxes for body
// If function body only has 1 return, the {} and return keyword can be omitted.

const multiply = number => number * 2;
console.log(mutiply(2));
