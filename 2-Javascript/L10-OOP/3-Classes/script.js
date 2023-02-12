// function Student(name, age, schoolName) {
//   this.name = name;
//   this.age = age;
//   this.schoolName = schoolName;
//   this.greeting = () => {
//     return `Welcome to the class ${this.name}`;
//   };
// }
// const John = new Student('John Doe', 14, 'Parsons');
class Person {
  constructor(name, age, schoolName) {
    this.name = name;
    this.age = age;
    this.schoolName = schoolName;
  }
  greeting() {
    return `Welcome back ${this.name}`;
  }
}

class Instructor extends Person {
  constructor(name, age, schoolName, yearsDev) {
    super(name, age, schoolName);
    this.yearsDev = yearsDev;
  }
  amountOfYears() {
    return `${this.name} has been developing for ${this.yearsDev} years`;
  }
}

class Student extends Person {
  constructor(name, age, schoolName, email) {
    super(name, age, schoolName);
    this.email = email;
  }
  getEmail() {
    return `Thank you for submitting your email. It is ${this.email}`;
  }
}

const Jane = new Person('Jane Doe', 25, 'Columbia University');
const Bob = new Instructor('Bob Ross', 41, 'FIT', 15);
const Jones = new Student('Jones Bill', 31, 'FIT', 'JonesBill@gmail.com');

console.log(Bob.greeting());
console.log(Jane.greeting());
console.log(Jones.getEmail());
console.log(Jones.prototype);
