const letterPositions = function(sentence) {
  const letterArray = sentence.toLowerCase().split(" ").join('').split('');
  const result = {};

  for (let letter of letterArray) {
    result[letter] = [];
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === letter) {
        result[letter].push(i);
      }
    }
  }
  return result;
};

module.exports = letterPositions;