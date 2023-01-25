/*  
TODO: Starting with an array of classrooms and array of students,
TODO: Create an algorithm that would assign a student to a random classroom. 
TODO: Then we print out all of the students to their assigned classroom 
*/

const classRoom = [301, 302, 303, 304, 305];
const students = [
  'Bill',
  'Joe',
  'Jonna',
  'Lisa',
  'Carl',
  'Brittany',
  'Rebecca',
  'Joshua',
];

//? Which array should I iterate over and why? or maybe iterate both?

// for (let i = 0; i < students.length; i++) {
//   let classRoomIndex = i;
//   if (classRoomIndex >= classRoom.length) {
//     classRoomIndex -= classRoom.length;
//   }
//   console.log(students[i], classRoom[classRoomIndex]);
// }
// // ? for(let <Variable name to call each item in the array> of <name of array>)
// for (let stu of students) {
//   const randomIndex = Math.floor(Math.random() * classRoom.length);
//   console.log(stu, classRoom[randomIndex]);
// }

//? Once I iterate, how can assign a classroom number to each student

// ? Once assigned, how do i print each student with their assigned classroom?

/*
Example Output
*Bill is assigned to classroom 301
*Joe is assigned to classroom 302
*Jonna is assigned to classroom 303
*etc
*/
console.log([1,2] === [1,2])