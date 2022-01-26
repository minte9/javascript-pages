/**
 * We can add methods to constructor, but ...
 * for more complex syntax, we will use classes.
 * 
 * JavaScript provides constructor functions for many 
 * built-in language objects: like Date or Set.
 */

function User(name, birthdate) {

    this.name = name;
    this.age = new Date().getFullYear() - new Date(birthdate).getFullYear();
    this.isAdult = this.age >= 18;
    
    this.show = () => {
        console.log(this.name + ' is adult: ' + this.isAdult);
    }
}

let user = new User("John", '01-01-1980');

user.show(); // John is adult: true