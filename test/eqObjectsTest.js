const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true if { a: "1", b: "2" } and { b: "2", a: "1"} are compared', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1"};
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it('should return false if { a: "1", b: "2", c: "3" } and { a: "1", b: "2" } are compared', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(abc, ab), false);
  });
  it('should return false if { a: { y: {x : 4, p: 5}, z: 1 }, b: 2 } and { a: { y: {x : 3, p: 5}, z: 1 }, b: 2 } are compared', () => {
    const nestedObj1 = { a: { y: {x : 4, p: 5}, z: 1 }, b: 2 };
    const nestedObj2 = { a: { y: {x : 3, p: 5}, z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(nestedObj1, nestedObj2), false);
  });
  it('should return true if { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" } are compared to each other', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });
});