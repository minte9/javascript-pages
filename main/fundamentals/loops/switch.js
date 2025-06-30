/**
 * Switch statement
 * 
 * The value must be of the same type to match
 * The ability to group cases is a side-effect of how switch works
 */

let a = 2;

switch(a) {
    case   2: // group of two cases (no break)
    case '2':
        console.log("2 or '2'");
        break;
    default:
        console.log('no value'); // 2 or '2'
}