/**
 * Between statements the semicolon can be omitted, but ...
 * it is recommended to put semicolons every time.
 * Javascript does not assume a semicolon before square brackets.
 */
console.log("Hello");
console.log("World");
    // Hello
    // World

console.log(1 + 
    2 + 
    3
); // 6

console.log("There will be an error") // Look here - no semicolon
    // There will be an error

[1, 2].forEach(console.log); 
    // Uncaught TypeError: Cannot read property