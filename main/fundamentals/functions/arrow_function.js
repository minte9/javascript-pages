/**
 * Arrow function is a shorter form for ...
 * function expression.
 */

let sumE = function(a, b) {
    return a + b;
};

/**
 * Arrow function
 */
let sumA = (a, b) => a + b;
console.log(sumE(1,2)); // 3
console.log(sumA(1,2)); // 3
console.assert( sumE(1,2) === sumA(1,2) ); // pass

/**
 * Only one parameter, the parentheses
 * can be omitted
 */
let double = x => x*2;
console.log(double(3)); // 6

/**
 * No parameter, the parentheses
 * should be present
 */
let sayHi = () => console.log('Hello!');
sayHi(); // Hello

/**
 * For multiline code use 
 * curly braches
 */
let sum = (a, b) => {
    let res = a + b;
    return res;
}
console.log(sum(2,5)); // 7