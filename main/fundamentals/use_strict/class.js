/**
 * In classes and modules, strict is enabled by default
 */

try {
    
    class MyClass {
        constructor() { 
            a = 1; // Look Here
        }
    }
    new MyClass();

} catch (err) {
    console.log(err.message);   // a is not defined
}