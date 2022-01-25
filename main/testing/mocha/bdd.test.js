/**
 * Mocha - the core framework: 
 * provide testing functions like describe and it, 
 * and the mai functions to run tests.
 * 
 * Chai - the library with many assertions. 
 * It allows to use a lot of different assertions,
 * beyond the simple assert (from node.js)
 * 
 * npm install --save-dev mocha
 * npm install --save-dev chai
 * 
 * BDD - Behavior Driven Development: tests AND docs AND examples.
 */


/**
 * Code (to be tested, usually in separate file)
 */

function isEven(n) {
    return n%2 == 0;
}

function isOdd(n) {
    return n%2 != 0;
}

/**
 * Tests
 */

let assert = require('assert'); // node.js OR ...
assert = require('chai').assert; // chai

describe('isEven', function() {
    it('Check if number is even', function() {
        assert.equal(isEven(6), true);
        assert.equal(isEven(5), false);
    });
});

describe('isOdd', function() {
    it('Check if number is odd', function() { // it.only()
        assert.equal(isOdd(8), false);
        assert.equal(isOdd(11), true);
    });
});

/**
 * Run tests
 * 
 * Add 'scripts' to package.json
 * 
 * cd myproject/
 * npm test
 * 
 *   isEven
 *     Check if number is even
 *
 *   isOdd
 *     Check if number is odd
 * 
 * 
 * To run only one:
 * npm test -- --grep 'isOdd'
 * 
 * Or use it.only() in the test code
 */

// "scripts": { "test": "mocha '**/*.test.js'" }