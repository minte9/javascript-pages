/**
 * In classes and modules, 'use strict' ...
 * is enabled by default
 */
class MyClass {
    constructor() {
        a = 1;
    }
}

let obj = new MyClass();
    // ReferenceError: a is not defined
    // Even if 'use strict' was not declared