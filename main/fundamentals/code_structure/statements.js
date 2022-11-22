/**
 * Semicolon can be omitted, but not recommended
 * A semicolon is not assume before square brackets
 */

console.log("Hello");   // Hello
console.log("World");   // World
console.log(1 +         // 6
    2 + 3
);

try {
    console.log("abc")  // Look Here
    [1, 2].forEach(console.log); 
} catch (err) {
    console.log(err.name); // TypeError
}