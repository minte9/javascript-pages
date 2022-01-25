/**
 * The two question marks operator ?? ...
 * returns the first argument if it's not null/undefined.
 */

let a;
let b = 2;

// classical
let c = (a !== null && a !== undefined) ? a : b; // 2
console.assert( c === b); // pass

// nullish coalescing
let d = a ?? b; // 2
console.assert( d === b); // pass