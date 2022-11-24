/**
 * Get/Set
 * 
 * Just like literal objects, classes may include 
 * getters/setters
 * 
 * Technically, such class declaration works by creating 
 * getters and setters in MyClass.prototype
 */

class MyClass
{
    constructor (msg) {
        this.msg = msg; // invokes the setter
    }

    set msg(str) {
        str = str.toUpperCase();
        this._msg = str; // Look Here
    }

    get msg() {
        return this._msg;
    }
}
 
let obj = new MyClass("hello world");
console.log(obj.msg + "!"); // HELLO WORLD!

try {
    console.log(obj.msg());
} catch (err) {
    console.log(err.message); // Error: obj.msg is not a function
}