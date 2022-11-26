/**
 * There are several built-in functions for rounding
 */

let n = 1.23456;

let a = Math.round(n * 100) / 100; // 123 -> 1.23
console.log(a); // 1.23

let b = n.toFixed(2); // "1.23"
console.log(1.23 === b); // false