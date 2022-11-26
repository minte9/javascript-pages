/**
 * Array methods
 * 
 * filter() map() sort()
 */

let A = [
    {id: 1, user: 'John'},
    {id: 2, user: 'Pete'},
    {id: 3, user: 'Marry'},
];
let B = A.filter(item => item.id < 2);
let C = ["Bilbo", "Gandalf"];
let D = C.map(item => item.length);
let E = [
    {id: 12, user: 'John'},
    {id: 2, user: 'Pete'},
    {id: 3, user: 'Marry'},
];
E.sort((a, b) => a.id - b.id);

console.log(B);     // {id: 1, user: 'John'}
console.log(D);     // [5, 7]
console.log(E[0]);  // {id: 2, user: 'Pete'},