/**
 * BDD, Behavior Driven Development (tests, docs, examples)
 * 
 * Mocha, the core framework
 * Chai, the library with many assertions
 * package.json
 * 
 * npm install --save-dev mocha
 * npm install --save-dev chai
 * cd javascript-pages/main/testing/mocha/
 * npm test
 * npm test -- --grep 'isOdd'
 */


function isEven(n) { // ode to be tested, usually in separate file
    return n%2 == 0;
}

function isOdd(n) {
    return n%2 != 0;
}

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