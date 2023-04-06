import inquirer from 'inquirer';

function start() {
  inquirer
    .prompt([
      { type: 'input', message: 'What is your favorite color?', name: 'color' },
    ])
    .then(data => {
      if (data.color !== 'Blue') {
        return;
      }
      const message = checkColor(data);
    });
}

function checkColor(data) {
  return `You choose the color ${data.color}`;
}
start();

//* 1. return is used to output something from our function
//* 2. can also be used to end a function earlier than expected(Usually in some kind of condition), because no code can go after a return
