/**
 * In Javascript "0" is not threated as false.
 * (like in PHP)
 */

let a = "0";

if (a) { // Boolean(a) == true

    console.log("0 is true"); 
        // 0 is true
}