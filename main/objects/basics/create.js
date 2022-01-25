/**
 * Object are created using figure brakets {}
 * A property is a (key:value) pair
 */

let A = {};
console.log(A.something); // undefined

let B = {
    name: "John",
    age: 30,  // trailing comma accepted
};
console.log(B.name); // John
console.log(B.age); // 30

delete B.age; // remove a property
console.log(B.age); // undefined

/**
 * Computed properties, use square brakets
 */
let myvar = "my key";
let C = {
    "some key": 1,
    [myvar]: 3,
}
console.log(C[myvar]); // 3