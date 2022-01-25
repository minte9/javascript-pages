/**
 * The plus operator + applied to a single value, ...
 * doesn’t do anything to numbers. 
 * 
 * The need to convert strings to numbers arises very often.
 */

let a = 1;
console.log( +a ); // 1 - no effect on numbers

let flag = true;
console.log( +flag ); // 1 - convertion

let b = 0;
console.log( +b );   // 0 - convertion

let c = "2";
let d = "3";
console.log( +c + +d ); // 5