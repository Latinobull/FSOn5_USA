// TODO chaining
const students = ['John', 'Mac', 'Hailey', 'Dj', 'Rocky'];
let grades = [100, 35, 23, 100, 67, 45, 86, 45];
function reverseStr(str) {
  students.sort().reverse();
  console.log(students[0]);
}

function roundUp(grades) {
  const roundedGrades = grades
    .map(grade => {
      if (grade === 100) {
        return grade;
      } else {
        return grade + 5;
      }
    })
    .filter(grade => grade > 65);
  return roundedGrades;
}
console.log(roundUp(grades));
console.log(reverseStr('Hello Everyone'));
