/**
 * It is posible to use return without value ...
 * which causes the function to exit (returns undefined)
 * 
 * Functions used very often can have ultrashort names,
 * but these are exceptions:  $() jQuery, _() Lodash
 */

function check(age) {

    if (!age) return; // Look Here

    if (age > 18) return 'OK';
}

console.log(check());   // undefined
console.log(check(20)); // OK