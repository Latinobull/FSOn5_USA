//TODO Spread Array
const grades = [89, 45, 80, 100, 60, 35, 85];
const grades2 = [45, 10, 100, 96, 23, 75, 34, 21];

const allGrades = grades.concat(grades2);
const spreadGrades = [...grades, ...grades2];
console.log(allGrades);
console.log(spreadGrades);

//TODO Objects
const student1 = {
  firstname: 'John',
  lastName: 'Doe',
  age: 16,
  grade: 11,
};

const studentOptions = {
  grade: 9,
  class: 402,
  highestGrade: 'A-',
  lowestGrade: 'D+',
};

const finalStudent = { ...studentOptions, ...student1 };
// console.log(student1.concat(studentOptions));
console.log(finalStudent);

//TODO Rest GOS
function Multiply(nums) {
  let finalNumber = 1;
  for (let number of nums) {
    finalNumber *= number;
  }
  console.log(finalNumber);
}
const userInput = [2, 4, 6, 8,2,1];
Multiply(userInput);
