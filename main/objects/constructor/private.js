/**
 * Private constructor:
 * 
 * If we have many lines of code ...
 * we can wrap them into a single complex object.
 * 
 * We wrap the code into immediately called constructor ...
 * that can't be called again (it's not saved anywhere).
 * 
 * This encapsulate code that construct the object, ...
 * without future reuse.
 */

let user = new function(name) {

    this.name = "John";
    this.isAdmin = true;

    // more complex logic
}

console.log(user.isAdmin); // true