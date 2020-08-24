const eqArrays = (actual, expected) => {
  return actual.length === expected.length && actual.every((val, index) => val === expected[index])
    ? true : false;
};

const assertEqual = (actual, expected) => {

  typeof(actual) === "string" ? actual = `"${actual}"` : null;
  typeof(expected) === "string" ? expected = `"${expected}"` : null;

  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const assertArraysEqual = (actual, expected) => {
//   for (let i = 0; i < actual.length; i++) {
//     typeof(actual[i]) === "string" ? actual[i] = `"${actual[i]}"` : null;
//     typeof(expected[i]) === "string" ? expected[i] = `"${expected[i]}"` : null;
//   }
//   if (eqArrays(actual, expected)) {
//     console.log(`🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

module.exports = assertEqual;