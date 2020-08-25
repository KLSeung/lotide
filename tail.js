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

module.exports = tail