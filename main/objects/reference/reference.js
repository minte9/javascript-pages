/**
 * In Javascript a variable is alwayas copied as value.
 * 
 * Objects are different, they are stored by reference.
 * 
 * When we copy an object, the resulted two variables are ...
 * references to tht same object (that address in computer memory).
 */

let a = "Hello World";
let b = a;

console.log(a === b); // true

let c = {
    'name': 'John',
    'age': 30,
}
let d = c;
d.name = 'Sam';

console.log(c.name); // Sam (not John) - Look Here