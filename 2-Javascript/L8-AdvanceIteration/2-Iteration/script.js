//* Multiple Iteration
let grades = [100, 35, 23, 100, 67, 45, 86, 45];
let gradesMap = [100, 35, 23, 100, 67, 45, 86, 45];
let people = [
  'Daniel',
  'Rachel',
  'Alexandra',
  'Alejandro',
  'Shane',
  'Saheed',
  'Natalia',
  'Pratixa',
  'James',
  'Anton',
  'Sean',
];
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }
//! debug forEach arr
grades.forEach(grade => grade + 10);
//TODO Map method
const mapArr = gradesMap.map(grade => grade + 10);
// console.log(gradesMap);
// console.log(mapArr);
//TODO Sort method

const sortedPeople = [...people].sort();
// console.log(people);
// console.log(sortedPeople);
//TODO Filter method
const filteredArr = grades.filter(grade => grade >= 75);
// console.log(filteredArr);
//TODO FindIndex method
const findPersonIndex = people.findIndex(student => student === 'Danielson');
// console.log(findPersonIndex);
//TODO Every method
const newArr = [100, 80, 70, 80, 64];
const everyValue = newArr.every(function (item) {
  item >= 65;
});
// console.log(everyValue);
//TODO Some method
const someValue = newArr.some(item => item < 65);
console.log(someValue);
