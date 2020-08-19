const eqArrays = (actual, expected) => {
  return actual.length === expected.length && actual.every((val, index) => val === expected[index])
    ? true : false;
};

const eqObjects = function(object1, object2) {
  const firstKeyArr = Object.keys(object1).sort();
  const secondKeyArr = Object.keys(object2).sort();

  if (firstKeyArr.length !== secondKeyArr.length) {
    return false;
  }
  for (let key of firstKeyArr) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`));
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });