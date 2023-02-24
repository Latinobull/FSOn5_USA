const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
const formEl = document.querySelector('form');
console.log(nameInput);

nameInput.addEventListener('input', event => {
  console.log(event.target.value);
});

passwordInput.addEventListener('input', event => {
  const currentElement = event.target;
  if (currentElement.value.length < 10) {
    currentElement.setAttribute('style', 'background-color: red;');
  } else {
    currentElement.setAttribute('style', 'background-color: green;');
  }
  console.log(currentElement.value);
});

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('Submitted');
});

[1, 2, 3].forEach(function (item, i) {});
