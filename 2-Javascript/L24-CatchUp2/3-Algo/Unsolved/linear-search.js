// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function (arr, target) {
  /**
   * for; initializing our loop is going to begin
   * let i = 0; where does the loop start
   * i < arr.length; how long to run: it is a condition and if the condition is true, we continue the loop, if condition is false we stop the loop
   * i++; when the functionality is completed, we are going to change our looping variable. After we change the variable, go back to the condition.
   */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(i);
      return i;
    }
  }
  return -1;
};
//? [2,4,6]
linearSearch([2, 4, 6, 8, 10], 10);
// TODO 3 = '3'

var hello = 'Hello World';
