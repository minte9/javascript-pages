/**
 * Object wrappers for each primitive type:
 * String, Number, Boolean ... 
 * Primitives can provide methods and still remain lightweight
 */

let a = 'Hello World';      // Wrapper called
let b = a.toUpperCase();    // Object a destroyed, primitive remains
let c = 1.23456;            // Wrapper called
let d = c.toFixed(2);

console.log(b);  // HELLO WORLD
console.log(n2); // 1.23