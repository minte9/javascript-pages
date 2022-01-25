/**
 * Property value shorthand
 * 
 * The use-case of making a property from a variable is so common, 
 * that is a special property value shorthand to make it shorter.
 * 
 * We can use both normal properties and shorthands ...
 * in the same object.
 * 
 */

function makeUser(name, age) {
    return {
        name, // same as name: name
        age,
        tasks: 10,
    };
}

let user = makeUser("Marry", 18);
console.log(user.age); // 18  
console.log(user.tasks); // 10