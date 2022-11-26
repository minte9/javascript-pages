/**
 * Object wrappers for each primitive type:
 * String, Number, Boolean, Symbol, BigInt
 * 
 * Primitives can provide methods and still remain lightweight
 */

let a = 'Hello World'; // Wrapper called
let b = a.toUpperCase(); // Object destroyed, only primitive remains

let c = 1.23456; // Wrapper calles
let d = c.toFixed(2);

console.log(b);  // HELLO WORLD
console.log(n2); // 1.23