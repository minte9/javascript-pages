/**
 * The unary operator (+) applied to a single value
 * It doesn’t do anything to numbers
 * It converts the string to number
 * 
 * Unary pluses applied to values before the binary ones ...
 * because of their higher precedence
 */

let a = 1;
let b = true;
let x = "2";
let y = "3";

console.log( +a );      // 1
console.log( +b );      // 1
console.log( +x + +y ); // 5