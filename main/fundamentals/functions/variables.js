/**
 * Local variables are visible only inside a function
 * A function has full access to an outer variable
 * 
 * Modern code has few or no global variables
 */

let out = 'World';

function hello() {
    let msg = 'Hello ' + out;
    out = 'Javascript';
}

hello();

console.log(typeof(msg) == "undefined"); // true
console.log(typeof(out) == "undefined"); // false