const person = {
  name: 'John',
  age: 30,
  isHappy: true,
  bankAccount: 1000,
  getName() {
    return `My name is ${person.name}`;
  },
  rentDue() {
    person.bankAccount -= 500;
    person.isHappy = false;
    return `${person.name} has paid his rent. He has ${person.bankAccount} in his account`;
  },
};

// console.log(person.getName());
// console.log(person.rentDue());
// console.log(person);

class Employee {
  constructor(name, startDate, position, salary) {
    this.name = name;
    this.startDate = startDate;
    this.position = position;
    this.salary = salary;
  }
  clockIn() {
    return `${this.name} has clocked in`;
  }
  getPromotion() {
    const oldSalary = this.salary;
    this.salary += 10000;
    return `${this.name} just got a promotion. Original salary was $${oldSalary} and the new salary is $${this.salary}`;
  }
}

const Bob = new Employee('Bob Ross', '2/14/22', 'Tech Team', 80000);
const Sally = new Employee('Sally Joe', '2/13/22', 'HR Department', 60000);

console.log(Bob.clockIn());
console.log(Sally);
console.log(Sally.getPromotion());
console.log(Sally);
console.log(Bob);
