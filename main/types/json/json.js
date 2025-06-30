/**
 * JSON .Stringify() .parse()
 * 
 * Json string is called serialized
 * No single quotes or backticks in JSON
 * Json does not support comments
 * Nested objects are supported
 */

let A = {
    age: 30,
    courses: ['html', 'css'],
};

let B = {
    room: {
        no: 3,
        users: ['B', 'C']
    },
};

let jsonA = JSON.stringify(A);
let jsonB = JSON.stringify(B);

console.log(typeof jsonA); // string
console.log(jsonA); // {"age":30,"courses":["html","css"]}
console.log(jsonB); // {"room":{"no":3,"users":["B","C"]}}

let jsonC = '{"title":"A","room":{"number":3}}';
let obj = JSON.parse(jsonC);

console.log(obj);   // {title:'A',room:{number:3}}