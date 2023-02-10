function Student(name, age) {
  this.name = name;
  this.age = age;

  this.showMe = () => {
    return `Welcome to the class ${this.name}`;
  };
}
