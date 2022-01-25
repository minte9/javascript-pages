/**
 * In Javascript you can access non-existing keys.
 * The returned value is undefined.
 * 
 * We can test if a property exists using 'in' operator.
 * 
 * There is a special form of loop: for ... in, 
 * to walk over all keys of an object.
 */

let A = {};
console.log(A.name); 
    // undefined

let B = {};
console.log('name' in B); 
    // false

let C = {
    'name': 'John',
    'age': 30,
};
for (key in C) {
    console.log(key + ": " + C[key]);
}
    // name: John
    // age: 30
