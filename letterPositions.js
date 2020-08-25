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
const letterPositions = function(sentence) {
  const letterArray = sentence.toLowerCase().split(" ").join('').split('');
  const result = {};

  for (let letter of letterArray) {
    result[letter] = [];
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === letter) {
        result[letter].push(i);
      }
    }
  }
  return result;
};

assertArraysEqual(letterPositions("hello my name is Kevin").e, [1, 12, 18]);

module.exports = letterPositions;