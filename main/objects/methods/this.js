/**
 * To access the object itself ...
 * a method can use the this keyword.
 * 
 * Arrow functions have no 'this', 
 * it is taken from the outer normal function.
 */

let A = {
    name: "John",
    sayHi() {
        console.log(this.name);
    }
};
A.sayHi(); // John


let B = {
    name: "Ilya",
    sayHi() {
        let arrow = () => console.log(this.name);
        arrow();
    }
};
B.sayHi(); // Ilya