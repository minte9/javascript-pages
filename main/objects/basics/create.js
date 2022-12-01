/**
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

console.assert(A.something == undefined, true);
console.assert(B.name == 'John', true);
console.assert(C['mykey'] == 3, true);

console.log("Tests passed");