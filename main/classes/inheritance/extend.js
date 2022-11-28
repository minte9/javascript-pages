/**
 * Inheritance, one class extends another class
 */

 class Animal  {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs, speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stops`); // backsticks to embed vars
    }
}

class Rabbit extends Animal {
    hide() {
        super.stop(); // Look Here
        console.log(`${this.name} hides!`);
    }
}

let rabbit = new Rabbit("A");

rabbit.run(100);    // A runs, speed 100
rabbit.stop();      // A stops
rabbit.run(50);     // A runs, speed 50
rabbit.hide();      // A stops
                    // A hides!