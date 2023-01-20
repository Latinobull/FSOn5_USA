const students = [
  'John',
  'Stacy',
  'Victor',
  'Iryna',
  'Lisa',
  'Brandan',
  'Dan',
  'Kim',
  'Leah',
  'Shaq',
];
const myString = 'Hello Everyone My Name is John Doe'
// ! eoD nhoJ si emaN yM enoyrevE olleH
// Split and Join
// console.log(myString.split(' '));
// console.log(students.join(', '));
// console.log(students.reverse());
// console.log(myString); // Starting point
// console.log('***********************************************');
// let final = myString.split('')
// console.log(final) // are string split at every character and stored in a array
// console.log('***********************************************');
// console.log(final.reverse()) // reverse the contents of the array
// console.log('***********************************************');

// console.log(final.join('')); // join the reversed array together to create a reversed string
// let newFinal = myString.split('').reverse().join('')
// console.log(newFinal);
// Find
let studentIndex = students.indexOf('Iryna')
console.log( studentIndex,students[studentIndex]);

console.log(students.includes('Johnny'));

//Inserting
// console.log(students);
// students.push('Becky')
// students.unshift('Bill')
// console.log(students);
//Removing
console.log(students);
students.pop()
students.shift()
console.log(students);

//Advance Inserting and Removing