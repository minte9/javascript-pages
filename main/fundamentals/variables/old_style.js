/**
 * In older scripts you find var keyword ...
 * when variable were declared.
 * 
 * Var has no block scope, and generally not used ...
 * in modern scripts.
 */

{
    var a = 1; // global
    let b = 2;
}

console.log(a); // 1
console.log(b); // ReferenceError: b is not defined