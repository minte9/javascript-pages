/**
 * The if statement converts the result to a boolean
 * If the result is true executes the block of code
 * 
 * The ternary operator has three operands
 * It's the only operator witch has more than two operands
 * 
 * The two question marks operator ?? nullish coalescing
 * returns the first argument if it's not null/undefined
 */

let a = 20;
let x;

let b = a > 18 ? 'Yes' : 'No'; // Yes
let y = x ?? a; // 20

if (a > 18) {
    console.log("Allowed"); // Allowed
}
console.assert(b === 'Yes'); // pass
console.assert(y === 20);    // pass