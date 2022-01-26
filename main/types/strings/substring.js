/**
 * Substring methods
 */

// Includes
console.log("Widget with id".includes('id')); // true
console.log('Widget'.includes('id', 2)); // false

// Start with
console.log('Widget'.startsWith('Wid')); // true
console.log('Widget'.endsWith('get')); // true

// Substring
console.log('Widget'.slice(0, 3)); // Wid

// Position
console.log('Widget'.charAt('0')); // W
console.log('Widget'.indexOf('id')); // 1