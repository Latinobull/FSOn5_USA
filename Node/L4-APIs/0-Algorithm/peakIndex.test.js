const peakIndexInMountainArray = require('./peakIndex');

describe('peakIndexInMountainArray', () => {
  test('should find peak element index in a mountain array with 3 elements', () => {
    const arr = [3, 2, 1];
    expect(peakIndexInMountainArray(arr)).toBe(0);
  });

  test('should find peak element index in a mountain array with 4 elements', () => {
    const arr = [0, 2, 1, 0];
    expect(peakIndexInMountainArray(arr)).toBe(1);
  });

  test('should find peak element index in a mountain array with 4 elements', () => {
    const arr = [1, 3, 5, 2];
    expect(peakIndexInMountainArray(arr)).toBe(2);
  });

  test('should find peak element index in a mountain array with 19 elements', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(peakIndexInMountainArray(arr)).toBe(9);
  });

  test('should find peak element index in a mountain array with 21 elements', () => {
    const arr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 13, 12, 11, 10, 9, 8, 7,
    ];
    expect(peakIndexInMountainArray(arr)).toBe(13);
  });

  test('should find peak element index in a mountain array with 20 elements', () => {
    const arr = [
      0, 3, 5, 7, 8, 10, 13, 15, 16, 19, 23, 26, 29, 30, 26, 24, 20, 18, 15, 12,
    ];
    expect(peakIndexInMountainArray(arr)).toBe(13);
  });
});
