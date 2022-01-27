/**
 * Extend another class
 */

 class Animal
 {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stops`);
    }
}

class Rabbit extends Animal
{
    hide() {
        super.stop();
        console.log(`${this.name} hides!`);
    }
}

let rabbit = new Rabbit("My Rabbit");

rabbit.run(100); 
    // My Rabbit runs with speed 100
rabbit.stop(); 
    // My Rabbit stops
rabbit.run(50); 
    // My Rabbit runs with speed 50
rabbit.hide(); 
    // My Rabbit stops
    // My Rabbit hides!