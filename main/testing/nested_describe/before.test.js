/**
 * Before/After
 * 
 * We can set functions that are executed before starting the tests
 * Also, we can set functions before every test
 * 
 * cd javascript-pages/main/testing/nested_describe/
 * npm test
 */

 function isEven(n) {
    return n%2 == 0;
}

function isOdd(n) {
    return n%2 != 0;
}

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