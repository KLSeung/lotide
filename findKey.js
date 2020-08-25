const assertEqual = (actual, expected) => {

  typeof(actual) === "string" ? actual = `"${actual}"` : null;
  typeof(expected) === "string" ? expected = `"${expected}"` : null;

  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (let key in object) {

    if (callback(object[key])) {
      return key;
    }
  }
};

const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(results1, "noma");


const results2 = findKey({
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}, x => x === "The Expanse");

assertEqual(results2, "sciFi");

module.exports = findKey;