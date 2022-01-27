/**
 * JSON.Stringify ...
 * converts objects to string.
 * 
 * The resulting json string is called serialized.
 * 
 * No single quotes or backticks in JSON.
 * JSON does not support comments.
 */

let student = {
    age: 30,
    courses: ['html', 'css'],
};
let json = JSON.stringify(student);
console.log(typeof json); 
    // string
console.log(json); 
    // {"age":30,"courses":["html","css"]}
  
/**
 * Nested objects ...
 * are supported and converted automatically.
 */
let meetup = {
    title: 'Conference',
    room: {
        number: 3,
        users: ['John', 'Mary']
    },
};
let meetup_json = JSON.stringify(meetup);
console.log(meetup_json);
    // {"title":"Conference","room":{"number":3,"users":["John","Mary"]}}