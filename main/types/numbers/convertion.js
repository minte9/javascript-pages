/**
 * In real life, values like "100px" or "19$"
 * 
 * parseInt() returns integer
 * parserFloat() returns floating-point number 
 */

console.log(parseInt("100px") === 100);     // true
console.log(parseInt("19$") === 19);        // true
console.log(parseFloat("12.3") === 12.3);   // true
console.log(parseFloat("12.3.4") === 12.3); // true
    // 12.3 second point stop reading