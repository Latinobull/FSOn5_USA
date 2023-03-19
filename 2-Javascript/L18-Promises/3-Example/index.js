import inquirer from 'inquirer';
async function startApp() {
  const userData = await inquirer.prompt([
    {
      type: 'input',
      name: 'fullname',
      message: 'What is your name',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address',
    },
  ]);
  console.log(userData);
}
startApp();
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'fullname',
//       message: 'What is your name',
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'What is your email address',
//     },
//   ])
//   .then(userData => {
//     console.log(userData);
//   });
