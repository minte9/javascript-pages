/**
 * Method binding:
 * 
 * There are two ways of fixing 'losing this' problem:
 * 
 * Pass a wrapper-function or ...
 * Bind the method to object in constructor.
 * 
 * The bind() method takes an object as an first argument 
 * and creates a new function.
 */

/**
 * First example
 */
class Button
{
    constructor() {
        this.click = this.click.bind(this); // method bind
    }

    click() {
        console.log("Click");
    }

    blur = () => {
        console.log("Blur"); // wrapper-function
    }

    focus() {
        console.log("Focus");
    }
}

let button = new Button();
setTimeout(button.click, 1000); // Click
setTimeout(button.blur, 1000); // Blur
setTimeout(
    () => button.focus(), 1000 // Focus
);


/**
 * Second example
 */
class User {
    getName() {
        return this.name;
    }
}

let obj = new User();
let user1 = {name: "John"};
let user2 = {name: "Ana"};

console.log(obj.getName()); // undefiend
console.log(obj.getName.bind(user1)()); // John
console.log(obj.getName.bind(user2)()); // Ana
