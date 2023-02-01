function Welcome(name) {
  console.log('Welcome to the fight club, ' + name);
}

function start(name, callback) {
  console.log(`Are your ready to join?`);
  callback(name);
}

start('DJ', Welcome);
