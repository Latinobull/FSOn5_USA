// * if wrapped in curly brackets {}, that means the library contains multiple functions that due different things
import { v4 as uuidv4 } from 'uuid';
// * if not wrapped in curly brakcets {}, that means there is one parent function and within that function there is multiple functions inside of the parent
import inquirer from 'inquirer';

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
    const message = `
Thank you for your interest in the ${data.role} position ${data.userName}!

If we feel like you are a good fit, you will receive a message from us at ${
      data.email
    }.
Here is your application id if you need it!
application id: ${uuidv4()}
    `;
    console.log(message);
  });
