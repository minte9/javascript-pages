/**
 * Two independent objects are not equal, 
 * even thought they look alike
 */

let A = {};
let B = {};
let C = B;

console.log(A == B);  // false (different objects)
console.log(C === B); // true (reference to the same object)