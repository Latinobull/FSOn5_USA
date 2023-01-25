const newUser = {
  firstName: 'Phillip',
  lastName: 'Rivera',
  age: 36,
  employed: true,
  placeOfWork: 'Google',
  manager: 'Jackson',
  yearsAtCompany: 10,
  peopleManaged: ['John', 'Victor', 'Bailey'],
};

// // * for in
// for (key in newUser) {
//   console.log(typeof newUser[key]);
// }

// // * .values()
// console.log(Object.values(newUser));
// const values = Object.values(newUser);
// for (let item of values) {
//   console.log(item);
// }
// // * .keys
// console.log(Object.keys(newUser));

const employees = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Lopez' },
  { firstName: 'Jack', lastName: 'Black' },
  { firstName: 'Joanne', lastName: 'Richards' },
];

for (let employee of employees) {
  console.log(employee.firstName + ' ' + employee.lastName);
}
