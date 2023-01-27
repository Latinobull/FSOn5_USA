const grades = [89, 45, 80, 100, 60, 35, 85];
grades.sort(function (a, b) {
  return b - a;
});
const [highestGrade] = grades;
const highGrade = grades[0];

console.log(highestGrade);

const [lowestGrade] = grades.reverse();
const lowGrade = grades.reverse()[0];
console.log(lowestGrade);
