const assertEqual = (actual, expected) => {

  typeof(actual) === "string" ? actual = `"${actual}"` : null;
  typeof(expected) === "string" ? expected = `"${expected}"` : null;

  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const counterLetter = (sentence) => {
  const letterArray = sentence.toLowerCase().split(" ").join('').split('').sort();
  let countResult = {};
  console.log(letterArray);
  for (let letter of letterArray) {
    if (countResult[letter]) {
      countResult[letter] += 1;
    } else {
      countResult[letter] = 1;
    }
  }
  return countResult;
};

const result = counterLetter("Hello I am Kevin");

assertEqual(result["e"], 2);