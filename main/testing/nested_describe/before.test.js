/**
 * Before/After
 * 
 * We can set functions that are executed before starting the tests.
 * Also, we can set functions before every test.
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

describe('Test functions', function() {

    before(() => {console.log('-- Test Suite start')});
    after(() => {console.log('-- Test Suite End')});

    beforeEach(() => {console.log('\t -- Test Case start')});
    afterEach(() => {console.log('\t -- Test Case start')});

    describe('isEven', function() {
        it('Check even', () => {
            assert.equal(isEven(6), true);
            assert.equal(isEven(5), false);
        });
    });

    describe('isOdd', function() {
        it('Check odd', () => {
            assert.equal(isOdd(8), false);
            assert.equal(isOdd(11), true);
        });
    });

});

/*
npm test

Test functions
-- Test Suite start
    isEven
	 -- Test Case start
        Check even
	 -- Test Case start
    isOdd
	 -- Test Case start
        Check odd
	 -- Test Case start
-- Test Suite End

*/
