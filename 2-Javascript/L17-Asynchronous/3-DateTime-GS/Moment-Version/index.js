import moment from 'moment';
const date = moment('March 15, 2023 17:30:00', 'MMMM DD, YYYY HH:mm:ss');

const newDate = date.format(' DDDD YY ddd' );

console.log(newDate);
