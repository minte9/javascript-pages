/**
 * Classes
 * 
 * In JavaScript, a class is a special kind of function
 * 
 * We create a function named User, 
 * that becomes the result of the class declaration
 * 
 * The constructor() method is called automatically by new
 * 
 * No comma required between class methods
 * Classe always use strict
 */

class User 
{
    constructor (name) {
        this.name = name;
    }

    hello() {
        console.log("Hi, this is " + this.name);
    }
}
 
let a = new User("Mihai");
let b = new User("John");

a.hello(); // Hi, this is Mihai
b.hello(); // Hi, this is John