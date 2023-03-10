const form = document.querySelector('form');
const h1El = document.querySelector('h1');
// Strings booleans and Numbers
const getLastInput = localStorage.getItem('userInput');
h1El.textContent = getLastInput;
function handleSubmit(e) {
  e.preventDefault();
  // const {
  //   elements: { userInput },
  // } = e.currentTarget;
  const userInput = e.target.children[0];
  console.log(userInput);
  localStorage.setItem('userInput', userInput.value);
  h1El.textContent = userInput.value;
  userInput.value = '';
}

form.addEventListener('submit', handleSubmit);
