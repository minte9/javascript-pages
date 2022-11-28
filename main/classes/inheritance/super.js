/**
 * If a class extends another class and has no constructor,
 * then a default constructor is generated
 *      constructor(...args) { super(...args); }
 * 
 * We get an error when trying to add a custom constructor 
 * without calling super() first
 */

class A {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
}

class X extends A {
    constructor(name) {
        super(name); // Look Here
        this.name = name.toUpperCase();
    }
}

class Y extends A {
    constructor(name) { // no super()
        this.name = name.toUpperCase();
    }
}

let a = new X("aaa");
console.log(a.name); // AAA

try {
    let b = new Y("bbb"); // doesnt' work
    console.log(b.name);
} catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // Must call super in constructor
}