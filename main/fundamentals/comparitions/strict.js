/**
 * Javascript converts the values to numbers, 
 * when comparing different types
 * 
 * Strict equality operator is recommended, 
 * no type conversion
 */

console.assert( '2' > 1 );      // pass     Wrong
console.assert( '01' == 1 );    // pass     Wrong
console.assert( '01' === 1 );   // failed   Correct