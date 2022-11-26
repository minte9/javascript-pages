/**
 * In JavaScript actions are represented by 
 * functions in properties
 * 
 * We can use a shorthand syntax
 */

let A = {
    name: "John",
    age: 30
};
A.sayHi = function() {
    console.log("Hello");
};

let B = {
    'name': 'Sam',
    age: 20,
    sayHi() { // same as "sayHi: function()"
        console.log("World");
    }
}

A.sayHi(); // Hello
B.sayHi(); // World