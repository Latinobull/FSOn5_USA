function peakIndexInMountainArray(arr, left = 0, right = arr.length - 1) {
  // your code goes here
  if (left >= right) {
    return left;
  }
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
    return mid;
  } else if (arr[mid] < arr[mid - 1]) {
    return peakIndexInMountainArray(arr, left, mid - 1);
  } else {
    return peakIndexInMountainArray(arr, mid + 1, right);
  }
}

// Test cases
console.log(peakIndexInMountainArray([3, 2, 1])); // Output: 0
console.log(peakIndexInMountainArray([0, 2, 1, 0])); // Output: 1
console.log(peakIndexInMountainArray([1, 3, 5, 8])); // Output: 2
console.log(
  peakIndexInMountainArray([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
  ])
);
// Output: 9 (Peak element is 10 at index 9)

console.log(
  peakIndexInMountainArray([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 13, 12, 11, 10, 9, 8, 7,
  ])
);
// Output: 13 (Peak element is 14 at index 13)

console.log(
  peakIndexInMountainArray([
    0, 3, 5, 7, 8, 10, 13, 15, 16, 19, 23, 26, 29, 30, 26, 24, 20, 18, 15, 12,
  ])
);
// Output: 13 (Peak element is 30 at index 13)

module.exports = peakIndexInMountainArray;
