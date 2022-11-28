/**
 * Losing this problem, solutions
 * 
 * Wrapper-function OR Bind the method 
 * The bind() method takes an object as an first argument 
 * and creates a new function
 */

class Button
{
    constructor() {
        this.click = this.click.bind(this); // method bind
    }

    click() {console.log("Click")}
    focus() {console.log("Focus")}

    blur = () => {console.log("Blur")} // wrapper-function
}

let button = new Button();
setTimeout(button.click, 1000); // Click
setTimeout(button.blur, 1000);  // Blur
setTimeout(button.focus, 1000); // Blur
setTimeout(
    () => button.focus(), 1000  // Focus
);

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