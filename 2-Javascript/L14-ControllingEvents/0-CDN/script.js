const rawDateEl = document.querySelector('h1');
const libraryDateEl = document.querySelector('h2');
let today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();
today = `${month}/${day}/${year}`;
rawDateEl.textContent = today;

const momentDate = moment().format('MMMM DD,YYYY');
libraryDateEl.textContent = momentDate;
console.log(momentDate);
