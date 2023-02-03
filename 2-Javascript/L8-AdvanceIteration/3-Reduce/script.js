// TODO reduce method

let grades = [100, 35, 23, 100, 67, 45, 86, 45];

const finalGrades = grades.reduce((previousValue, item, index) => {
  console.log(previousValue);
  return previousValue + 1;
}, 0);

console.log(finalGrades);
