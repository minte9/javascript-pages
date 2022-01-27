/**
 * Classes
 * 
 * We already know about new function() contructor.
 * 
 * Classes are an advanced object construct.
 * It introduce great new features useful for OOP.
 * 
 * In JavaScript, a class is a kind of function.
 * Within the class, no commas are required. 
 * 
 * Classe always use strict.
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