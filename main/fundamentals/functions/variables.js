/**
 * Local variables are visible only inside a function.
 * A function has full access to an outer variable.
 * 
 * Modern code has few or no global variables.
 */

let out = 'World';

function print() {
    let msg = 'Hello ' + out;
    console.log(msg);
    out = 'Javascript';
}

print(); // Hello World
print(); // Hello Javascript

console.log(msg2); // Error: message is undefined