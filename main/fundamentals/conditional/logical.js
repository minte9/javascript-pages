/**
 * In Javascript the OR operator is a bit trickier 
 * If an operand is not boolean, it's converted to a boolean
 * If all operands have been evaluated false, returns the last operand
 * 
 * OR return the first truly one
 * AND returns first falsy value 
 */

console.log( (true || false) === true );        // true
console.log( (false || false) === false );      // true
console.log( (1 || 0) === 1 );                  // true
console.log( (null || false || '0') === '0');   // true

let firstName;
let nickName;
let usename = firstName || nickName || 'Anonymous';

console.log(usename);       // Anonymous
console.log( 1 && 0);       // 0
console.log( 0 && 'abc');   // 0