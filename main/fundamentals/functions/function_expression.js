/**
 * The common syntax to create a function ...
 * is called function declaration
 * 
 * In Javascript, a function is just another type of value
 * So, we cand use function expression
 * 
 * Function Expression are created when the exection reaches them
 * Function Declaration it's created on initialization stage
 */

let sayHi = function() { // Look Here
    console.log('Hello World');
};

console.log(typeof(sayHi)); // function

sayHi(); // Hello World