// commonJS - old way of connecting libraries and files together
// const inquirer = require('inquirer')

//ES6 - new way of maintaining and connecting files together
// import moment from 'moment/moment'
import inquirer from 'inquirer';

import moment from 'moment';
const message = require('./message');

const prompt = inquirer.createPromptModule();

prompt({
  type: 'input',
  name: 'username',
  message: 'What is your name',
}).then(data => {
  message(data.username, moment().format('YYYY-MM-DD on HH:mm'));
});
