/**
 * Local variables are visible only inside a function.
 * A function has full access to an outer variable.
 * 
 * Modern code has few or no global variables.
 */

let out = 'World';

function print() {
    out = 'Javascript';
    let msg = 'Hello ' + out;
    console.log(msg);
}

print(); // Hello Javascript
console.log(msg); // Error: message is undefined