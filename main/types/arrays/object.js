/**
 * There are only eight data types in Javascript, and ...
 * an array is just a special type of object
 * The engine stores elements in order, to work realy fast
 */

let A = ['Banana'];
let B = A;
console.log(A === B); // true

B.push("Orange");
console.log(A); // Banana, Orange