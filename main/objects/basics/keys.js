/**
 * Test if a property exists
 * Walk over all keys of an object, with for/in loop
 */

let A = {};
let B = {};
let C = {
    'name': 'John',
    'age': 30,
};

console.log(A.name);        // undefined
console.log('name' in B);   // false

for (key in C) {
    console.log(C[key]);    // John 30
}