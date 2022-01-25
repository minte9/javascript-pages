/**
 * Nested describe
 * 
 * To group tests use nested describe.
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

let assert = require('assert');

describe('Number functions', function() {

    describe('isEven', function() {
        it('Check if number is even', function() {
            assert.equal(isEven(6), true);
            assert.equal(isEven(5), false);
        });
    });

    describe('isOdd', function() {
        it('Check if number is odd', function() {
            assert.equal(isOdd(8), false);
            assert.equal(isOdd(11), true);
        });
    });

});

/*
npm test

Number functions
    isEven
    Check if number is even
    isOdd
    Check if number is odd
*/
