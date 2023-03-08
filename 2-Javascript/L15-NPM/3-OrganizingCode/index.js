import { generate } from './generate.js';
import inquirer from 'inquirer';

function start() {
  console.log(
    'Thank your for your interest in your job! Please fill out this form'
  );
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
