/**
 * To access the object itself, a method uses 
 * this keyword
 * 
 * Arrow functions have no this, 
 * it is taken from the outer normal function
 */

let A = {
    name: "John",
    sayHi() {
        console.log(
            this.name // Look Here
        );
    }
};

let B = {
    name: "Ilya",
    sayHi() {
        let c = () => console.log(this.name);
        c();
    }
};

A.sayHi(); // John
B.sayHi(); // Ilya