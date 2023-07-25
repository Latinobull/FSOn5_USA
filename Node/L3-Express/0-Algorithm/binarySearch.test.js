const binarySearch = require('./index');
describe('binarySearch', () => {
  const sortedArray = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];

  it('should find the target in the array and return its index', () => {
    expect(binarySearch(sortedArray, 23)).toBe(5);
    expect(binarySearch(sortedArray, 38)).toBe(6);
    expect(binarySearch(sortedArray, 2)).toBe(0);
    expect(binarySearch(sortedArray, 91)).toBe(10);
  });

  it('should return -1 if the target is not found in the array', () => {
    expect(binarySearch(sortedArray, 35)).toBe(-1);
    expect(binarySearch(sortedArray, 100)).toBe(-1);
  });
});
