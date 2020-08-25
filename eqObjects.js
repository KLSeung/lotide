const eqObjects = (object1, object2) => {
  let firstKeyArr = Object.keys(object1);
  let secondKeyArr = Object.keys(object2);
  if (firstKeyArr.length !== secondKeyArr.length) {
    return false;
  } else {
    for (let key in object1) {
      if (object1[key] === Object(object1[key]) || object2[key] === Object(object2[key])) {
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



module.exports = eqObjects;