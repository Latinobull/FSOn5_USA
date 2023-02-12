// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
  var numMap = {};
  for (let num of arr) {
    if (numMap[num] === true) {
      return false;
    }
    numMap[num] = true;
    console.log(numMap);
  }
  return true;
};
