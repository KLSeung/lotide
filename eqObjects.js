const eqObjects = (object1, object2) => {
  let firstKeyArr = Object.keys(object1);
  let secondKeyArr = Object.keys(object2);
  if (firstKeyArr.length !== secondKeyArr.length) {
    return false;
  } else {
    for (let key in object1) {
      if (object1[key] === Object(object1[key])) {
        return eqObjects(object1[key],object2[key]);
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 }));
console.log(eqObjects({ a: { y: {x : 4, p: 5}, z: 1 }, b: 2 }, { a: { y: {x : 3, p: 5}, z: 1 }, b: 2 }));

// const assertEqual = (actual, expected) => {

//   typeof(actual) === "string" ? actual = `"${actual}"` : null;
//   typeof(expected) === "string" ? expected = `"${expected}"` : null;

//   if (actual === expected) {
//     console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = (actual, expected) => {
//   return actual.length === expected.length && actual.every((val, index) => val === expected[index])
//     ? true : false;
// };

// const eqObjects = function(object1, object2) {
//   const firstKeyArr = Object.keys(object1).sort();
//   const secondKeyArr = Object.keys(object2).sort();

//   if (firstKeyArr.length !== secondKeyArr.length) {
//     return false;
//   }
//   for (let key of firstKeyArr) {
//     if (Array.isArray(object1[key])) {
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1"};
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false