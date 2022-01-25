/**
 * When comparing different types Javascript ...
 * converts the values to numbers.
 * 
 * A strict equality operator ====
 * checks the equality without type conversion
 */

console.assert( '2' > 1 ); // pass (Wrong)
console.assert( '01' == 1 ); // pass (Wrong)

console.assert( '01' === 1 ); // failed (Correct)