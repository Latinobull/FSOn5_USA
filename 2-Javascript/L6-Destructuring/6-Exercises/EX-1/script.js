const students = [
  { name: 'Mango', score: 1270, gamesPlayed: 4 },
  { name: 'Poly', score: 469, gamesPlayed: 2 },
  { name: 'Ajax', score: 690, gamesPlayed: 3 },
  { name: 'Kiwi', score: 241, gamesPlayed: 1 },
];

// The accumulator name can be arbitrary, it is just a function parameter
const totalScore = students.reduce((total, student) => {
  return total + student.score / student.gamesPlayed;
}, 0);
console.log(totalScore);
