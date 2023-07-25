// you can add parameters if you want!
function binarySearch(arr, target) {
    // Your code goes here!

    
  return -1;
}

function displayResult(index) {
  if (index !== -1) {
    console.log(`Target found at index ${index}.`);
  } else {
    console.log('Target not found in the array.');
  }
}
// Test Cases
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];

const target1 = 23;
const result1 = binarySearch(sortedArray, target1);
displayResult(result1); // Should display "Target found at index 5."

const target2 = 38;
const result2 = binarySearch(sortedArray, target2);
displayResult(result2); // Should display "Target found at index 6."

const target3 = 35;
const result3 = binarySearch(sortedArray, target3);
displayResult(result3); // Should display "Target not found in the array."

const target4 = 2;
const result4 = binarySearch(sortedArray, target4);
displayResult(result4); // Should display "Target found at index 0."

const target5 = 91;
const result5 = binarySearch(sortedArray, target5);
displayResult(result5); // Should display "Target found at index 10."

const target6 = 100;
const result6 = binarySearch(sortedArray, target6);
displayResult(result6); // Should display "Target not found in the array."

const target7 = 12;
const result7 = binarySearch(sortedArray, target7);
displayResult(result7); // Should display "Target found at index 3."

const target8 = 5;
const result8 = binarySearch(sortedArray, target8);
displayResult(result8); // Should display "Target found at index 1."
module.exports = binarySearch;
