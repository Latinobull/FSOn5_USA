const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  nameOutput.innerHTML = event.target.value;
  if (event.target.value === '') {
    nameOutput.innerHTML = 'Anonymous';
  }
});
