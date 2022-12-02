/**
 * The 'new' operator allows to create many similar objects
 * The regular {...} allows to create only one object
 * 
 * Any function can be run with new
 * The capital first letter is a convention
 * 
 * Private constructor (Singleton):
 * Encapsulate code that construct the object, 
 * without future reuse
 */

function User(name) {
    this.name = name;
    // this = {};   // implicit
    // return this; // implicit
}

let A = new User("Jack");
let B = new User("Mike");

let C = new function(name) { // Singleton
    this.name = "John";
    this.isAdmin = true;
}

console.log(A.name);        // Jack
console.log(B.name);        // Mike
console.log(C.isAdmin);     // true