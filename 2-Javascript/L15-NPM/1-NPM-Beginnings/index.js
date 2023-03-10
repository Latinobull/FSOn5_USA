//? Old JS Syntax
// const moment = require('moment');
//? New ES6 Syntax
import moment from 'moment';
const today = moment().format('MM/DD/YYYY');
const time = moment().format('HH:mm');

console.log(`It is ${today} and the time is ${time}`);

// * Node Package Manager (NPM)
