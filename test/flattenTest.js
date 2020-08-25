const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('should return [1, 2, 3, 4, 5, 6] given [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('should return [1, 2, 3, 4, 5, 6] given [1, 2, [3, [3, 4, 5], 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, [3, 4, 5], 4], 5, [6]]), [1, 2, 3, 3, 4, 5, 4, 5, 6]);
  });
});