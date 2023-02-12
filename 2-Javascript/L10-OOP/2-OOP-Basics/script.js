const student = {
  name: 'John Doe',
  age: 14,
  showMe: function () {
    return this.name;
  },
  greeting: () => {
    return `Welcome to the class ${this}`;
  },
};

function students(name, age) {
  this.name = name;
  this.age = age;

  this.greeting = function () {
    return `Welcome to the class ${this.name}`;
  };
  this.addAge = () => {
    this.age++;
    return `Hey you are now ${this.age} years old`;
  };
}

const John = new students('John Doe', 14);
console.log(John.greeting());
console.log(John);
const Alexa = new students('Alexa Ramirez', 15);
console.log(Alexa);
console.log(Alexa.addAge());
console.log(Alexa);
