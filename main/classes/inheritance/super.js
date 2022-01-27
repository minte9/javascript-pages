/**
 * If a class extends another class and has no constructor,
 * then a default constructor is generated:
 * 
 *  constructor(...args) {
 *      super(...args);
 *  }
 * 
 * We get an error when trying to add a custom constructor without
 * calling super() first
 */

class Animal 
{
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
}

class Rabbit extends Animal
{
    constructor(name) {
        super(name); // Look Here
        this.name = name.toUpperCase();
    }
}

let rabbit = new Rabbit("My Rabbit");
console.log(rabbit.name); // MY RABBIT