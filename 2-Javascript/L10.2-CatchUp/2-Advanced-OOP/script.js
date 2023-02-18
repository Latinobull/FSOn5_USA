class BadInstagram {
  #password;
  #social;
  static #allEmails = ['abc@gmail.com'];
  static isEmailInUse(email) {
    const result = BadInstagram.#allEmails.includes(email);
    if (result) {
      return `Email is taken, use another or press forgot password`;
    } else {
      return `You signed up successfully`;
    }
  }

  constructor(username, email, password, age, social) {
    this.username = username;
    this.email = email;
    this.#password = password;
    this.age = age;
    this.post = [];
    this.social = social;
  }
  getUsername() {
    return this.username;
  }
  get password() {
    return this.#password;
  }
  set password(newPassword) {
    this.#password = newPassword;
  }
}

const John = new BadInstagram(
  'JohnnyGoCrazy',
  'John@Doe.com',
  'superSecret',
  31,
  123456789
);

const Abc = new BadInstagram('abc', 'abc@gmail.com', 'abc123', 123, '123');
console.log(Abc);
console.log(BadInstagram.isEmailInUse(Abc.email));
console.log(BadInstagram.isEmailInUse(John.email));
// console.log(John);
// console.log(John.password);
// console.log((John.password = 'JohnisSecret'));
// console.log(John.password);
