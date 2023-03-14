import moment from 'moment';
const date = moment('March 14, 2023 17:30:00', 'MMM DD, YYYY HH:mm:ss');

const newDate = date.format('DD/MM/YY hh:mm:a ');

console.log(newDate);
