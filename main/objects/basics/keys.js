/**
 * Test if a property exists
 * Walk over all keys of an object, with for/in loop
 */

let A = {
    'name': 'John',
    'age': 30,
};

console.log('xyz' in A); // false
for (key in A) {
    console.log(C[key]); // John 30
}