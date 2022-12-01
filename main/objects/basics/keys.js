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

console.assert(A.name == undefined, true);
console.assert('name' in B == false, true);

for (key in C) {
    console.log(C[key]); // John 30
}

console.log("Tests passed");