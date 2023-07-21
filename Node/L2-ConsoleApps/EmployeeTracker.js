const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const { viewDB, viewSingleDB, deleteDB } = require('./db/db');

const optionChoices = [
  'View All Employees',
  'View Single Employee',
  'Add An Employee',
  'Delete An Employee',
  'Exit',
];
function init() {
  console.log('Welcome to your Employee Dashboard, Choose an Option');

  prompt({
    type: 'list',
    name: 'options',
    message: 'What do you want to do?',
    choices: optionChoices,
  }).then(res => {
    switch (res.options) {
      case 'View All Employees':
        viewAllEmployees();
        break;
      case 'View Single Employee':
        viewSingleEmployee();
        break;
      case 'Add An Employee':
        break;
      case 'Delete An Employee':
        deleteEmployee();
        break;
      default:
        process.exit(0);
    }
  });
}

function viewAllEmployees() {
  prompt({
    type: 'confirm',
    name: 'password',
    message: 'Do you want to show passwords?',
  })
    .then(({ password }) => {
      viewDB(password);
    })
    .finally(() => {
      init();
    });
}

function viewSingleEmployee() {
  prompt({
    type: 'input',
    name: 'id',
    message: 'What is the id of the user?',
  })
    .then(({ id }) => {
      viewSingleDB(id);
    })
    .finally(() => {
      init();
    });
}

function deleteEmployee() {
  prompt({
    type: 'input',
    name: 'id',
    message: 'What is the id of the user you want to delete?',
  })
    .then(({ id }) => {
      deleteDB(id);
    })
    .finally(() => {
      init();
    });
}
init();
