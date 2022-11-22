/**
 * It is posible to use return without value ...
 * which causes the function to exit (returns undefined)
 * 
 * Functions used very often can have ultrashort names,
 * but these are exceptions:  $() jQuery, _() Lodash
 */

function check(age) {

    if (!age) {
        console.log('undefined');
        return;
    }

    if (age > 18) console.log('OK');
}

check();   // undefined
check(20); // OK