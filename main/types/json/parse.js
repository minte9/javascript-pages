/**
 * Parse JSON string
 */
let json = '{"title":"Conference","room":{"number":3,"users":["John","Mary"]}}';
let obj = JSON.parse(json);
console.log(obj);
    // { title: 'Conference', room: { number: 3, users: [ 'John', 'Mary' ] } }