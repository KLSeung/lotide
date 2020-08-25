const eqArrays = (actual, expected) => {
  return actual.length === expected.length && actual.every((val, index) => val === expected[index])
    ? true : false;
};

const assertArraysEqual = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    typeof(actual[i]) === "string" ? actual[i] = `"${actual[i]}"` : null;
    typeof(expected[i]) === "string" ? expected[i] = `"${expected[i]}"` : null;
  }
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const takeUntil = function(arr, callback) {
  // ...
  let isCondition = false;
  let newArray = [];
  if (Array.isArray(arr)) {
    for (let item of arr) {
      isCondition = callback(item);
      if (isCondition) {
        break;
      } else {
        newArray.push(item);
      }
    }
  }
  return newArray;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

module.exports = takeUntil;