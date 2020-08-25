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

const map = (arr, callback) => {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const numbers = [2, 4, 6, 8, 10];
const results2 = map(numbers, number => number * 2);
assertArraysEqual(results2, [4, 8, 12, 16, 20]);

const studentGrades = [
  {
    Bob:{
      math: 78,
      science: 88,
      history: 92,
      PE: 70
    }
  },
  {
    Phil: {
      math: 75,
      science: 80,
      history: 80,
      PE: 95
    }
  },
  {
    John: {
      math: 95,
      science: 93,
      history: 92,
      PE: 92
    }
  }
];
// console.log(Object.keys(studentGrades));
const results3 = map(studentGrades, student => student[Object.keys(student)]["math"]);
assertArraysEqual(results3, [78, 75, 95]);

module.exports = map;