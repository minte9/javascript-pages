/**
 * Searching for a substring
 */

let str = 'Widget with id';

console.log(str.indexOf('Widget'));
    // 0, Widget is found at the beginning

console.log(str.indexOf('widget'));
    // -1, not found, the search is case-sensitive

console.log(str.indexOf("id"));
    // 1, id is found at the position 1

console.log(str.indexOf('id', 2))
    // 12 (starting from 2)
 