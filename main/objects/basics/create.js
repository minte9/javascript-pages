/**
 * Create object
 * 
 * Object are created using figure brakets {}
 * A property is a (key:value) pair
 */

let A = {};
let B = {
    name: "John",
    age: 30,  // trailing comma accepted
};
let x = "mykey";
let C = {
    "some key": 1,
    [x]: 3, // computed properties
}

console.log(A.something);   // undefined
console.log(B.name);        // John
console.log(C['mykey'])     // 3