/**
 * Get / Set
 */

class Message
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
 
let obj = new Message("hello world");
console.log(obj.msg + "!"); // HELLO WORLD!

try {
    console.log(obj.msg()); // Error: msg() is not a function
} catch (err) {}