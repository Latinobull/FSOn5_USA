import { generate } from './assets/generate.js';
import { hello } from './assets/hello.js';
import inquirer from 'inquirer';

function start() {
  hello();
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'userName',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'list',
        name: 'role',
        message: 'Which department do you want to work for?',
        choices: ['Junior Dev', 'FrontEnd Dev', 'BackEnd Dev', 'Senior Dev'],
      },
    ])
    .then(data => {
      const message = generate(data);
      console.log(message);
    });
}
start();

function clickEvent() {
  //! do something
}

Element.addEventListener('click', clickEvent);
