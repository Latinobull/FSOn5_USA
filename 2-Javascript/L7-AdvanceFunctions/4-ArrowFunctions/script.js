function Welcome(name) {
  console.log('Welcome to the fight club, ' + name);
}
const Welcome2 = (name, date) =>
  console.log('Welcome to Mcdonalds ' + name + ' at ' + date);
const Welcome3 = () => {
  console.log('Hello Everyone');
  console.log('Hello to you too');
};

// function start(name, callback) {
//   console.log(`Are your ready to join?`);
//   callback(name);
// }

let arr = [1, 2, 3, 4];

arr.forEach(item => console.log(item));
let arr2 = [5, 6, 7, 8];
console.log('*********************************************');
arr2.forEach(function (item) {
  console.log(item);
});
Welcome('Bob');
Welcome2('Joe', '1/31/23');

const myPerson = {
  name: 'Joe Bob',
  age: 23,
  salary: 30000,
  promotionRate: 5,
  nextPromotion: () => {
    return (myPerson.salary +=
      myPerson.salary * (myPerson.promotionRate / 100));
  },
};
console.log(
  `Your next promotion salary will be ${myPerson.nextPromotion()} dollars`
);
