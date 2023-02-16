const cities = ['Los Angeles', 'New York', 'Seattle', 'Dallas', 'Compton'];
console.log(cities);
// * Removal
// cities.splice(1, 2);

//* Addition
// cities.splice(3, 0, 'Las Vegas');

//* Replace
// cities.splice(2, 1, 'Atlanta');

// *Removing specific item found in Arr without filter
// const cityIndex = cities.indexOf('New York');

// cities.splice(cityIndex, 1);

//* With filter
const finalArr = cities.filter(item => item != 'New York');
console.log(finalArr);
