/**
 * Variable, alwayas copied as value
 * Objects, stored by reference
 * 
 * When we copy an object, the resulted two variables ...
 * are references to tht same object
 */

let a = "Hello World";
let A = {
    'name': 'John',
    'age': 30,
}

let x = a; // copy by value
let B = A; // copy by reference

B.name = 'Sam'; // changes reference object

console.log(A === B);           // true
console.log(A.name == 'Sam');   // true (copy by reference)
console.log(A.name != 'John');  // true