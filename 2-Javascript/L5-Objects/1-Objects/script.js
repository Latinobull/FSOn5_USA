const user = [
  'Phillip',
  'Rivera',
  36,
  true,
  'Google',
  'Jackson',
  10,
  ['John', 'Victor', 'Bailey'],
];
// for (let item of user) {
//   console.log(item);
// }
const newUser = {
  //! Key Value Pairs
  firstName: 'Phillip',
  lastName: 'Rivera',
  age: 36,
  employed: true,
  placeOfWork: 'Google',
  manager: 'Jackson',
  yearsAtCompany: 10,
  peopleManaged: ['John', 'Victor', 'Bailey'],
  spouse: {
    firstName: 'Jane',
    lastName: 'Doe',
    employed: false,
    sisters: [
      {
        firstName: 'Mary',
        lastName: 'Doe',
      },
      { firstName: 'Lily', lastName: 'Doe' },
    ],
  },
};
newUser['age'];
newUser.age;
newUser.employed = false;
newUser['age'] = 40;

// newUser.happiness = 100;
// newUser['spouse'] = 'Jane Doe';
console.log(newUser.spouse.sisters[1].firstName);
// for (let person of newUser.peopleManaged) {
//   console.log(person);
// }
