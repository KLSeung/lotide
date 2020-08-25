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

module.exports = middle;