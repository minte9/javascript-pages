/**
 * Object are created using figure brakets {}
 * A property is a (key:value) pair
 */


/**
 * Empty object, with no properties
 */
let A = {};
console.log(A.something); // undefined


/**
 * Object with properties
 */
let B = {
    name: "John",
    age: 30,  // trailing comma - accepted
};
console.log(B.name); // John
console.log(B.age); // 30
delete B.age; // remove a property
console.log(B.age); // undefined


/**
 * Computed properties
 */
let myvar = "my key";
let C = {
    "some key": 1,
    [myvar]: 3,
}
console.log(C[myvar]); // 3