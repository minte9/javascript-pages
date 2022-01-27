/**
 * There are two ways of fixing 'losing this' problem:
 * 
 * Pass a wrapper-function or ...
 * Bind the method to object in constructor.
 */
class Button
{
    constructor() {
        this.click = this.click.bind(this); // bind in constructor
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