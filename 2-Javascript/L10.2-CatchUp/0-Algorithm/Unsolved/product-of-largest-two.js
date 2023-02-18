// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

// var productOfLargestTwo = function (arr) {
//   console.log(arr);
//   arr.sort((a, b) => b - a);
//   console.log(arr);
//   console.log(arr[0], arr[1]);
//   const finalNumber = arr[0] * arr[1];
//   return finalNumber;
// };

const productOfLargestTwo = function (arr) {
  let largest = null;
  let secondLargest = null;

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    //[3, 5, 9, 1, 12, 10]
    //10
    //largest = 12
    //secondlargest = 10

    if (currentNumber > largest || largest === null) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest || secondLargest === null) {
      secondLargest = currentNumber;
    }
  }
  return largest * secondLargest;
};

console.log(productOfLargestTwo([3, 5, 9, 1, 12, 10]))
