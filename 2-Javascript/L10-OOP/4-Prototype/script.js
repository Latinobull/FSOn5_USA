class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    this.showMe = () => {
      return `Welcome to the class ${this.name}`;
    };

    this.increaseAge = () => {
      this.age++;
      return `Happy Birthday ${this.name}, you are now ${this.age} old!`;
    };
  }
}

Student.prototype.getName = function () {
  return `Your name is ${this.name}`;
};

const John = new Student('John', 14);

console.log(John.age);
console.log(John.increaseAge());
console.log(John.getName());
console.log(Array.prototype);
