const grades = [89, 45, 80, 100, 60, 35, 85];

grades
  .sort(function (a, b) {
    return a - b;
  })
  .reverse();
