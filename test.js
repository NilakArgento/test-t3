const test = require('node:test');
const assert = require('node:assert');
const { checkMinimStep } = require('./logic');

test('Validation of checkMinimStep logic', async (t) => {
    
    await t.test('Case (5, 7, 123) should be YES', () => {
        assert.strictEqual(checkMinimStep(5, 7, 123), "YES");
    });

    await t.test('Case (9, 7, 55) should be YES', () => {
        assert.strictEqual(checkMinimStep(9, 7, 55), "YES");
    });

    await t.test('Case (10, 5, 7) should be NO', () => {
        assert.strictEqual(checkMinimStep(10, 5, 7), "NO");
    });

    await t.test('Case (4, 8, 123) should be NO', () => {
        assert.strictEqual(checkMinimStep(4, 8, 123), "NO");
    });

    await t.test('Case (2, 4, 10) should be YES', () => {
        assert.strictEqual(checkMinimStep(2, 4, 10), "YES");
    });
});