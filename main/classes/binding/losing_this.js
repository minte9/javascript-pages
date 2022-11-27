/** 
 * JS this, depends on the context of the call
 * In another context, it won't be reference to its object
 * The problem is called 'losing this'
 */

class Button
{
    constructor(value) {
        this.value = value;
    }

    click() {
        console.log(this.value);
    }
}

let button = new Button("hello");
 
setTimeout(button.click, 1000); // undefined