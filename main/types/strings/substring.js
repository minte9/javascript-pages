/**
 * Substring methods
 * 
 * includes, startsWith, slice
 */

console.log("Widget with id".includes('id')); // true
console.log('Widget'.includes('id', 2)); // false
console.log('Widget'.startsWith('Wid')); // true
console.log('Widget'.endsWith('get')); // true

console.log('Widget'.slice(0, 3)); // Wid
console.log('Widget'.charAt('0')); // W
console.log('Widget'.indexOf('id')); // 1

console.log('Widget with id'.indexOf('Widget')); // 0
console.log('Widget with id'.indexOf('widget')); // -1
console.log('Widget with id'.indexOf("id")); // 1
console.log('Widget with id'.indexOf('id', 2)); // 12