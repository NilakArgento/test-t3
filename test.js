const test = require('node:test');
const assert = require('node:assert');
const { checkMinimStep } = require('./logic');

test('Validation of checkMinimStep logic', async (t) => {
    
    await t.test('Case (5, 7, 123) should be YES', () => {
        assert.strictEqual(checkMinimStep(5, 7, 123), "YES");
    });

});