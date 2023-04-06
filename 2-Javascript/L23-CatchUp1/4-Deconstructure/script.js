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

const {
  firstName,
  lastName,
  age,
  manager,
  spouse: { firstName: spouseFirstName },
} = newUser;

console.log(firstName, lastName, age, manager, spouseFirstName);

const arr = ['abc', 'def', 'ghi'];
const secondArr = ['234', '456', '789'];

const [test1, test2, test3] = arr;
console.log(test1, test2, test3);

console.log(arr);
console.log(...arr);

const newArr = [...arr, ...secondArr];
console.log(newArr);

const obj = {
  brand: 'Honda',
  model: 'Civic',
};
const obj2 = {
  year: 2014,
  color: 'grey',
};

const finalObj = { ...obj, ...obj2 };
console.log(finalObj);
