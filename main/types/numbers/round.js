/**
 * There are several built-in functions for rounding.
 */

let n = 1.23456;

let n1 = Math.round(n * 100) / 100; // 123 -> 1.23
console.log(n1); // 1.23

let n2 = n.toFixed(2); // "1.23"
console.log(1.23 === n2); // false