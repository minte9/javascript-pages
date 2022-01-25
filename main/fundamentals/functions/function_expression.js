/**
 * The common syntax to create a function ...
 * is called 'function declaration'
 * 
 * In Javascript, a function is just another type of value.
 * So, we cand use 'function expression'
 * 
 * Create a function an put it into a variable.
 * Putting a semicolon at the end is recommended, 
 * to be sure it ends the statement.
 * 
 * Function Expression are created when the exection reaches them.
 * Function Declaration it's created on initialization stage.
 */

let sayHi = function() {
    console.log('Hello World');
}; // Look Here

console.log(sayHi); // [Fuction: sayHi]

sayHi(); // Hello World