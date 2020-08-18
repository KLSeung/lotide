const assertEqual = (actual, expected) => {

  typeof(actual) === "string" ? actual = `"${actual}"` : null;
  typeof(expected) === "string" ? expected = `"${expected}"` : null;
  
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const tail = (array) => {
  const newArr = [];
  if (array.length > 0) {
    for (let i = 1; i < array.length; i++) {
      newArr.push(array[i]);
    }
  } else {
    console.log("Array is empty");
  }
  return newArr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!