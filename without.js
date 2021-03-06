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

const without = (source, itemsToRemove) => {

  return source.filter(element => !itemsToRemove.includes(element));
};

//Without using filter method
// const without = (source, itemsToRemove) => {
//   const newArray = [];
//   for (let i = 0; i < source.length; i++) {
//     let match;
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       source[i] === itemsToRemove[j] ? match = true : null;
//       break;
//     }
//     !match ? newArray.push(source[i]) : null
//   }
//   return newArray;
// }

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;