/**
 * Mathematical functions and expressions ...
 * strings are automatically converted to numbers.
 * 
 * The addition operator (+) doesn't convert strings to numbers.
 */

console.log("2" + "3"); // 23, not 5
console.log("6" / "3"); // 2

console.log(Number("2") + Number("3")); // 5
console.log(String(2) + String(3)); // 23 - Look Here