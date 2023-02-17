class BadInstagram {
  constructor(username, email, password, age) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.age = age;
    this.post = [];
  }
  getUsername() {
    return this.username;
  }
}

const John = new BadInstagram(
  'JohnnyGoCrazy',
  'John@Doe.com',
  'superSecret',
  31
);


