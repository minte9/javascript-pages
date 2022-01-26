/**
 * The object wrappers are different for each primitive type:
 * String, Number, Boolean, Symbol, BigInt
 * 
 * 1) The s1 string is a primitive
 * 2) the wrapper method is called and a String object is created
 * 3) the Object is destroyed, leaving str as primitive
 * 
 * Primitives can provide methods and still remain lightweight.
 */

let s1 = 'Hello World';
let s2 = s1.toUpperCase();

console.log(s2); // HELLO WORLD
   
let n1 = 1.23456;
let n2 = n1.toFixed(2);

console.log(n2); // 1.23