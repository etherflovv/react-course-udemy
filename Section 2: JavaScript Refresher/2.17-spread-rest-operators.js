// The spread/rest operator is "..."

// Spread
// Used to split up array elements OR object properties

const newArray [...oldArray, 1, 2]

const newObject = { ...oldObject, newProp: 5 }


// Rest
// Used to merge a list of functions arguments into an array

function sortArgs(...args) {
    return args.sort()
}


// EXAMPLE SPREAD OPERATOR IN ARRAY

const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);
// returns [1,2,3,4]

// if const newNumbers = [numbers,4];
// returns: [ [1,2,3], 4 ]


// EXAMPLE SPREAD OPERATOR IN OBJECT

const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28
};

console.log(newPerson);


// EXAMPLE REST OPERATOR

const filter = (...args) => { // can be any name not only "args"
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3)); // returns: [1]