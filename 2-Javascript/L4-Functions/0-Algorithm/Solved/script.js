/*  
Starting with an array of classrooms and array of students,
Create an algorithm that would assign a student to a classroom. 
Then we print out all of the students to their assigned classroom 
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

for (stu of students) {
  const randomClassroomIndex = Math.floor(Math.random() * classRoom.length);
  const finalString = `${stu} is assigned to classroom ${classRoom[randomClassroomIndex]}`;
  console.log(finalString);
}
console.log(
  '===================================================================================='
);
for (let i = 0; i < students.length; i++) {
  let classRoomIndex = i;
  if (classRoomIndex >= classRoom.length) {
    classRoomIndex -= classRoom.length;
  }
  const finalString = `${students[i]} is assigned to classroom ${classRoom[classRoomIndex]}`;
  console.log(finalString);
}

/*
Example Output
Bill is assigned to classroom 301
Joe is assigned to classroom 302
Jonna is assigned to classroom 303
etc
*/
