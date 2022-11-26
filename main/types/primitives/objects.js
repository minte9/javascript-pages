/**
 * One of the best things about objects is that ...
 * we can store a function as one of its properties.
 * 
 * But that come with a cost
 * Objects are heavier than primitives
 */

let user = {
    name: 'John',
    message: () => console.log("Hello World"),
}

user.message(); // Hello World