/**
 * Losing precision is quite common
 * and this is true for many other languages
 * 
 * There are exactly 64 bits to store a number:
 *      52 to store the digits
 *      11 to store the position of decimal point
 *      1 bit for the sign
 */

let sum = 0.1 + 0.2;

console.log(sum); // 0.30000000000000004
console.log(sum.toFixed(2) === "0.30"); // true
console.log(+sum.toFixed(2) === 0.3); // true (unary + converts to number)