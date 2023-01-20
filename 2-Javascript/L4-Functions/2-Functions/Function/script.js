const body = document.querySelector('body');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const currentYear = 2023;
let userYear;
function startApp() {
  alert('Welcome to my application!');

  const userColor = prompt('Enter your favorite color');

  body.setAttribute('style', `background-color: ${userColor}`);

  setTimeout(yearPrompt, 100);
}
function yearPrompt() {
  alert('Woah you change my color. Great job!!');
  userYear = parseInt(prompt('What year were you born?'));

  if (userYear > 2023) {
    alert(
      " Don't lie to me.... You can't be less than 0 years old!!! Refresh the page"
    );
  } else if (userYear === NaN) {
    alert('That is not a number.... Refresh the page');
  } else {
    const age = 2023 - userYear;
    alert(`You should either be turning ${age} or already ${age} years old `);
  }
  quotePrompt();
}

function quotePrompt() {
  const quote = prompt('What is your favorite quote?');

  h1.textContent = quote;

  p.textContent = `-circa ${userYear}`;
  body.append(h1, p);
}
startApp();
