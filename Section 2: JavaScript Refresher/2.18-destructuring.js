// Destructuring
// Easily extract array elements or object properties and store them in variables

// ARRAY desturcturing
[a, b] = ['Hello', 'Max']
console.log(a) // Hello
console.log(b) // Max

// OJBECT destructuring
{namee} = {namee: 'Max', age: 28}
console.log(namee) // Max
console.log(age) // undefined

// EXAMPLE - ARRAY DESTURCTURING

const numbers = [1,2,3];
[num1, num2] = numbers;
console.log(num1, num2); // 1 2

[num1, , num3] = numbers;
console.log(num1, num3); // 1 3
