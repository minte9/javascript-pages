/**
 * In JavaScript actions are represented by 
 * functions in properties
 * 
 * We can use a shorthand syntax () {}
 */

let A = {
    name: "John",
    age: 30,
    hello() { // same as "sayHi: function()"
        console.log("Hello");
    }
};
A.world = function() {
    console.log("World");
};

A.hello(); // Hello
A.world(); // World