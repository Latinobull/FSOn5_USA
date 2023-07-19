require('dotenv').config();
const fs = require('fs').promises;
const contactData = require('./contacts.json');
// * dirname and filename
// console.log(__filename);
// * global variables
const lastname = 'George';
global.name = 'Donnahue';
global.hello = 'Hey';

// * process (env, argv, etc)
// console.log(process.env.WEATHER_API_KEY);
// console.log(process.argv[2]);

// switch (process.argv[2]) {
//   case 'Greet':
//     console.log('Welcome to my Universe');
//     break;
//   case 'Time':
//     console.log('The time is 8:28pm');
//     break;
//   case 'Color':
//     console.log('My favorite color is red');
//     break;
// }

// * Deeper understanding of modules (maybe)
// console.log(__dirname);
// * fs
// fs.readFile('db/data.txt').then(data => {
//   console.log(data.toString());
// });

// fs.writeFile('db/data.txt', 'hello everybody').then(() => {
//   console.log('file Written');
// });

// fs.appendFile('db/something.txt', '\ndfvjadhkjasjkasd').then(() => {
//   console.log('Works fine');
// });

fs.readFile('contacts.json').then(data => {
  const allData = JSON.parse(data);
  //   allData.forEach(item => console.log(item));
  console.table(allData);
  console.info('something broke');
});

// console.log(contactData);

// fs.rename('db/something.txt', 'some.txt');

// fs.unlink('some.txt').then(() => {
//   console.log('deleted');
// });

// fs.stat('contacts.json').then(data => {
//   console.log(data);
// });
