// console.log(this);

const student = {
  name: 'John Doe',
  age: 14,
  showMe: function () {
    return this;
  },
  getAge: function () {
    return this.age;
  },
  addAge: function () {
    this.age++;
  },
  getName: function () {
    return this.name;
  },
  changeName: function () {
    this.name = 'Johnny Downers';
  },
  greeting: function () {
    return `Welcome to the class ${this.name}`;
  },
};
console.log(student.greeting());

for (let key in student) {
  console.log(key, student[key]);
}
// console.log(student.getName());
// student.changeName();
// console.log(student.getName());
