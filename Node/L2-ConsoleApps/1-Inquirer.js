// * Why Inquirer and not readline
const inquirer = require('inquirer');
const fs = require('fs').promises;
// https://npmtrends.com/inquirer-vs-readline

const prompt = inquirer.createPromptModule();

prompt([
  {
    type: 'input',
    name: 'age',
    message: 'How old are you?',
    validate: res => {
      if (res < 18) {
        return 'You are not allowed to enter';
      } else if (res > 100) {
        return 'Why you lying';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'firstname',
    message: 'Enter your firstname:',
  },
  {
    type: 'confirm',
    name: 'color',
    message: 'Do you like the color Blue',
  },
  {
    type: 'checkbox',
    name: 'pizza',
    message: 'What is your favorite pizza topping?',
    choices: [
      'pepperoni',
      new inquirer.Separator(),
      'pineapple',
      'chicken',
      'salami',
      'sausage',
      'olive',
    ],
  },
]).then(response => {
  fs.readFile('userData.json').then(data => {
    data = JSON.parse(data);
    data.push(response);
    fs.writeFile('userData.json', JSON.stringify(data)).then(() => {
      console.log('your info has been saved');
    });
  });
});
