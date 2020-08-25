
const assert = require('chai').assert;
const countOnly = require('../countOnly');


describe('#countOnly', () => {
  it('should return {Jason: 1, Karima: undefined, Fang: 2} when given  { "Jason": true, "Karima": true, "Fang": true }', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.deepEqual(result1, {Jason: 1, Fang: 2});
  });
});