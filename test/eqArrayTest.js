const assert = require('chai').assert;
const eqArray = require('../eqArray');

describe('#eqArray', () => {
  it('should return true if [1, 2, 3] and [1, 2, 3] are compared', () => {
    assert.strictEqual(eqArray([1, 2, 3], [1, 2, 3]), true);
  });
  it('should return false if [1, 2, 3] and [3, 2, 1] are compared', () => {
    assert.strictEqual(eqArray([1, 2, 3], [3, 2, 1]), false);
  });
  it('should return true if ["1", "2", "3"] and ["1", "2", "3"] are compared', () => {
    assert.strictEqual(eqArray(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it('should return false if ["1", "2", "3"] and ["1", "2", 3]) are comapred', () => {
    assert.strictEqual(eqArray(["1", "2", "3"], ["1", "2", 3]), false);
  });
});