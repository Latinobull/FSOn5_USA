const student1 = 'John';
const student2 = 'Stacy';
const student3 = 'Victor';
const student4 = 'Iryna';
const student5 = 'Lisa';
const student6 = 'Brandan';
const student7 = 'Dan';
const student8 = 'Kim';
const student9 = 'Leah';
const student10 = 'Shaq';
const student11 = 'Bob'
console.log(`Welcome ${student1} to our class!`);
console.log(`Welcome ${student2} to our class!`);
console.log(`Welcome ${student3} to our class!`);
console.log(`Welcome ${student4} to our class!`);
console.log(`Welcome ${student5} to our class!`);
console.log(`Welcome ${student6} to our class!`);
console.log(`Welcome ${student7} to our class!`);
console.log(`Welcome ${student8} to our class!`);
console.log(`Welcome ${student9} to our class!`);
console.log(`Welcome ${student10} to our class!`);

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
console.log('=====================================')
// * Original For Loop Version
for(let i =0; i < students.length; i= i+2 ){
  console.log(`Welcome ${students[i]} to our class!`)
}
console.log('Finished');

//* For of Loop
console.log('**********************************************************');
for(let stu of students ){
  console.log(`Welcome ${stu} to our class`)
}

// * For in Loop
for(let index in students){
  console.log(index)
}

for (let person of students){
    if (person === 'Kim'){
      console.log(`I found the manager ${person}`)
      break
    }else {
      console.log(`${person} is not a manager`)
    }
}