console.log(this);

const student = {
  name: 'John Doe',
  age: 14,
  showMe: function () {
    return this;
  },
  greeting: () => {
    return `Welcome to the class ${this.name}`;
  },
};

console.log(student.showMe());

