const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return empty array if given an array with one item', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('should return empty array if given an array with two items', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('should return [2] if given [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('should return [3] if given [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('should return [2, 3] if given [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('should return [3, 4] if given [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});