/**
 * Constructor:
 * 
 * The regular {...} syntax allows to create one object.
 * The 'new' operator allows us to create many similar objects.
 * 
 * Any function can be run with new, ...
 * and it will execute the shown algorithm.
 * 
 * The capital first letter is a convention ...
 * to make it clear that can be run with new.
 * 
 * JavaScript provides constructor functions for many 
 * built-in language objects: like Date or Set.
 */

function User(name) {

    // this = {};  // implicit

    this.name = name;

    // return this; // implicit
}

let A = new User("Jack");
let B = new User("Mike");

console.log(A.name); // Jack
console.log(B.name); // Mike