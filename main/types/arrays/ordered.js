/**
 * Arrays are used to store ordered collections
 * Objects are for storing key:value collections 
 * An array can store elements of any type
 */

let vars = [
    "Apple", 
    "Orange", 
    () => {
        console.log('Hello World');
    },
    {name: 'John'}, // comma allowed
];
console.log(vars[1]);       // Orange
console.log(vars[3].name);  // John
vars[2]();                  // Hello World

A = ["Apple", "Orange"];
B = ["Apple", "Orange"];
C = ["Apple", "Orange"];
D = ["Apple", "Orange"];

A.pop();                        // extract last
B.push("Pear");                 // append at end
C.shift();                      // extract first
D.unshift("Orange", "Lemon");   // add to begining

console.log(A); // Apple
console.log(B); // Apple, Orange, Pear
console.log(C); // Orange
console.log(D); // Orange, Lemon, Pear, Orange