const firstNameInput = document.querySelector('#email');
const mainTextEl = document.querySelector('h2');
const imgEl = document.querySelector('img');

//Get and Set Attributes
console.log(mainTextEl.innerText);
console.log(mainTextEl.textContent);
console.log(mainTextEl.innerHTML);
console.log((imgEl.src = 'https://via.placeholder.com/150'));

mainTextEl.innerHTML = `Welcome To my Application`;

mainTextEl.setAttribute('class', 'mainText col-3 dog text-header');

// Get and Set Text

//Classes

console.log(mainTextEl.classList);
//Style

document.querySelector('button').addEventListener('click', () => {
  mainTextEl.classList.add('textContent');
});
