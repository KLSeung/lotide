const head = (array) => {
  if (array.length > 0) {
    return array[0];
  } else {
    console.log('There is nothing in the array');
  }
};

module.exports = head;