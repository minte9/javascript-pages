/**
 * Arrays are used to store ordered collections.
 * 
 * Objects are for storing key:value collections.
 * With object we can't insert new property between existing ones.
 * 
 * An array can store elements of any type.
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


/**
 * pop - extract last
 * push - append at the end of array
 * shift - extract first
 * unshift - add to begining of array
 * pop/push - also return the element
 */
vars = ["Apple", "Orange"];

vars.pop();
console.log(vars); // [Apple]

vars.push("Pear");
console.log(vars); // [Apple, Pear]

vars.shift();
console.log(vars); // [Pear]

vars.unshift("Orange", "Lemon");
console.log(vars); // [Orange, Lemon, Pear]