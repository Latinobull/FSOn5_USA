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

//for in
for (key in newUser) {
  console.log(key, newUser[key]);
}

// .values()

// .keys
