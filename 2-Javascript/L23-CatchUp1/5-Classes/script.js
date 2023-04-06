class Car {
  constructor(brand, model, year, gasPercentage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.gasPercentage = gasPercentage;
    this.damagePercentage = 0;
  }
}

Car.prototype.drive = function () {
  console.log('You drove 10 miles');
  console.log(this.gasPercentage);
  this.gasPercentage -= 10;
  this.damagePercentage += 1;
};

Car.prototype.roadTrip = function () {
  console.log('You drove 100 miles');
  this.gasPercentage -= 100;
  this.damagePercentage += 10;
};

const JohnsCar = new Car('honda', 'civic', 2014, 100);
const JackCar = new Car('toyota', 'camry', 2021, 75);

// console.log(JackCar);
// JackCar.drive();
// console.log(JackCar);
// JohnsCar.roadTrip();
// console.log(JohnsCar);

class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  welcome() {
    console.log(`Welcome to the website ${this.name}`);
  }
}
class Instructor extends Person {
  constructor(name, age, height, degree) {
    super(name, age, height);
    (this.role = 'Instructor'), (this.degree = degree);
  }
  yourRole() {
    console.log('Your Role is Instructor');
  }
}

class Student extends Person {
  constructor(name, age, height, email) {
    super(name, age, height);
    this.email = email;
  }
}
const John = new Instructor(
  'John Doe',
  20,
  '5ft 9in',
  'certification at Columbia'
);
const Jane = new Student('Jane Doe', 21, '5ft 3in', 'Jane@Doe.com');
John.welcome();
Jane.yourRole();
