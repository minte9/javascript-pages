/**
 * Unary pluses applied to values before the binary ones ...
 * because of their higher precedence.
 * 
 *  +     // unary
 *  **    // exponentiation
 *  *     // multiplication
 *  /     // division
 *  +     // addition
 *  -     // subtraction
 *  =     // assignment 
 * 
 * Parentheses override any precedence.
 */

let u = +"1" + +"2";

console.log(u); // 3

let a = 1 + 2 * 3;
let b = (1 + 2) * 3;

console.log(a); // 7
console.log(b); // 9