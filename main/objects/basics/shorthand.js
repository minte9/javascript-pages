/**
 * Property value shorthand
 * 
 * The use-case of making a property from a variable is so common, 
 * that is a special property value shorthand to make it shorter
 * 
 */

function makeUser(name, age) {
    return {
        name, // same as, name: name
        age,
        tasks: 10,
    };
}

let user = makeUser("Marry", 18);

console.assert(user.age == 18, true);  
console.assert(user.tasks == 10, true);

console.log("Testes passed");