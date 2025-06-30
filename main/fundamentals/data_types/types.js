/**
 * The typeof operator returns the type of the argument.
 * In javascript there is no char type, only string.
 */

console.log(typeof undefined);      // undefined
console.log(typeof 0);              // number
console.log(typeof 10n);            // bigint
console.log(typeof true);           // boolean
console.log(typeof "foo");          // string
console.log(typeof Symbol("id"))    // symbol
console.log(typeof Math);           // object
console.log(typeof alert);          // function