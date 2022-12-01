/**
 * Object are created using figure brakets {}
 * A property is a (key:value) pair
 */

let A = {};
let B = {
    name: "John",
    age: 30,  // trailing comma accepted
};
let x = "my key";
let C = {
    "some key": 1,
    [x]: 3, // computed properties
}

console.assert(
    A.something == undefined, true);

console.assert(
    B.name == 'John', true);

console.assert(
    B.age == 30, true);
    
console.assert(
    C[x] == 3, true);

console.log("Tests passed");