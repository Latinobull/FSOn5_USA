// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
  //   const objMap = {};

  //   for (let number of arr) {
  //     console.log(objMap);
  //     if (objMap[number] === true) {
  //       return false;
  //     }
  //     objMap[number] = true;
  //   }
  //   console.log(objMap);
  //   return true;

  console.log(arr.length);
  const finalArr = new Set(arr);
  console.log(finalArr.size);
  return finalArr.size === arr.length;
};
console.log(isUnique([1, 2, 13, 8, 3, 7]));
