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

const middle = (arr) => {
  let newArray = [];
  let midIndex = [];
  if (arr.length % 2 !== 0) {
    midIndex.push(Math.floor(arr.length / 2));
  } else if (arr.length % 2 === 0) {
    midIndex.push(Math.floor((arr.length - 1) / 2));
    midIndex.push(Math.floor(arr.length / 2));
  }
  if (arr.length <= 2) {
    return [];
  } else {
    for (let i = 0; i < midIndex.length; i++) {
      newArray.push(arr[midIndex[i]]);
    }
  }
  return newArray;
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]