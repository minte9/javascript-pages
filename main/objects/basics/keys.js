/**
 * Object's keys
 * 
 * Walk over all keys of an object, with for/in loop
 * Test if a property exists with 'in' operator
 */

let A = {
    'name': 'John',
    'age': 30,
};


for (key in A) {
    console.log(C[key]); // John 30
}
console.log('xyz' in A); // false