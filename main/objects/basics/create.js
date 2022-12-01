/**
 * Object are created using figure brakets {}
 * A property is a (key:value) pair
 */

let A = {};
let B = {
    name: "John",
    age: 30,  // trailing comma accepted
};
let myvar = "my key";
let C = {
    "some key": 1,
    [myvar]: 3, // computed properties
}

console.assert(
    A.something == 'undefined' + 
    B.name == 'John' +
    B.age == 30 +
    C[myvar] == 3
);