/**
 * It is posible to use return without value ...
 * which causes the function to exit 
 * (and returns undefined)
 * 
 * Functions used very often can have ultrashort names,
 * but these are exceptions (jQuery $() or Lodash _())
 */

function check(age) {

    if (age >= 18) {
        return true;
    }

    return false;
}

function show(age) {

    if ( !check(age)) {
        console.log('NO');

        return; // Look Here
    }

    console.log('YES');
}

show(17); // NO
show(20); // YES