const cleanData = function (arr) {
  let count = 0;
  const finalScore = arr
    .filter(item => {
      return item > 0 && item < 101;
    })
    .reduce((initial, item) => {
      count++;
      return initial + item;
    }, 0);
  return Math.floor(finalScore / count);
};
