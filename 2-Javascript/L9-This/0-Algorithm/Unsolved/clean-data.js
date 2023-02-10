/*
 * Overview
 * You are a junior developer that was given an array that is not accurate. There shouldn't be any numbers that is lower that 1, and no number
 *greater than 100. We want to find and get the average of all the numbers without all of the dirty data in our array.
 
  TODO
  Given the parameter 'arr' in the function, remove any numbers that is lower than 1 and greater than 100. Then given the new cleaned array,
  Add up all the numbers together and divide them by the amount of items in the clean arr.
  Return that final number rounded down so we don't get any decimal numbers
 
 ? Criteria
 ? No plain for loops, that includes of and in loops
 ? You have to use the iteration methods learned last class ex(map(), filter(), find(), every(), some(), reduce() etc)
 */

/*
1. Remove all the dirty data. So in this scenerio, dirty data is anything greater than 100 and anything less than 1
2. Add up the rest of the numbers together and divide that number by the total amount of items in the arr
3. Round that final number down and return it in the function
*/
var cleanData = function (arr) {
  //   const cleanArr = arr.filter(num => num > 0 && num < 101);
  // const totalOfNumbers = cleanArr.reduce((initial, num) => {
  //   return initial + num;
  // }, 0);
  //   const finalNumber = Math.floor(totalOfNumbers / cleanArr.length);
  //   return finalNumber;
  const totalOfNumbers = arr
    .filter(num => num > 0 && num < 101)
    .reduce((initial, num) => initial + num, 0);
  console.log(totalOfNumbers);
};
