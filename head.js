const assertEqual = (actual, expected) => {

  typeof(actual) === "string" ? actual = `"${actual}"` : null;
  typeof(expected) === "string" ? expected = `"${expected}"` : null;

  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};


const head = (array) => {
  if (array.length > 0) {
    return array[0];
  } else {
    console.log('There is nothing in the array');
  }
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");