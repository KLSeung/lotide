const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it('should return ["Lighthouse", "Labs"] from ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('should not mutate the original array length and content', () => {
    const originalArray = ["Yo Yo", "Lighthouse", "Labs"];
    tail(["Yo Yo", "Lighthouse", "Labs"]);
    
    assert.deepEqual(originalArray, ["Yo Yo", "Lighthouse", "Labs"]);
  });
});