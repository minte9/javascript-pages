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

console.log(A.something); // undefined
console.log(B.name); // John
console.log(B.age); // 30
console.log(C[myvar]); // 3