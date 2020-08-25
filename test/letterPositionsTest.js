const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('should return [1, 12, 18] when inputted "hello my name is Kevin".e into the function', () => {
    assert.deepEqual(letterPositions("hello my name is Kevin").e, [1, 12, 18]);
  });
});
