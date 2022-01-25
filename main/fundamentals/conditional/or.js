/**
 * In classical programming, the logical OR is for manipulating ...
 * booleans only.
 * 
 * In Javascript the operator is a bit trickier and more powerful.
 * If an operand is not boolean, it's converted to a boolean.
 * 
 * If all operands have been evaluated false, returns the last operand.
 */

console.log(true || false); // true
console.log(false || false); // false

console.log(1 || 0); // 1, like (true || false)
console.log(null || false || '0'); // 0

let firstName = '';
let lastName = '';
let nickName = null;

console.log(firstName || lastName || nickName || 'Anonymous');
    // Anonymous


/**
 * AND
 * Just as with OR, any value is allowed as an operand.
 * The differents is that AND returns first falsy value 
 * (or the last if none found)
 * 
 * The OR return the first truly one.
 */

console.log( 1 && 0); // 0
console.log( 0 && 'no matter what'); // 0