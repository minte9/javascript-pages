/**
 * Two independent objects are not equal ...
 * even thought they look alike.
 */

let a = {};
let b = {};

console.log(a == b); // different objects
    // false

let c = {};
let d = c;

console.log(c === d); // reference to the same object
    // true 