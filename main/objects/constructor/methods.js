/**
 * We can add methods to constructor, but ...
 * for more complex syntax, we will use classes.
 */

function User(name) {

    this.name = name;
    this.sayHi = function() {
        console.log( "My name is: " + this.name );

    };
}

let john = new User("John");
john.sayHi(); // My name is: John