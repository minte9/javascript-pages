/**
 * Arrow function
 * 
 * It is a shorter form for function expression
 * 
 * Only one parameter ...
 * the parentheses can be omitted
 * 
 * No parameter ...
 * the parentheses should be present
 */

let sum = (a, b) => a + b;
let double = x => x*2;
let pi = () => Math.PI.toFixed(2);

console.assert(sum(1,2) == 3);  // pass
console.assert(double(3) == 6); // pass
console.assert(pi() == 3.14);   // pass