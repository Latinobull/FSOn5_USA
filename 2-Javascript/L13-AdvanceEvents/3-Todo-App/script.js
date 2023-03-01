const containerEl = document.querySelector('.todoContainer');
const inputEl = document.querySelector('input');
const formEl = document.querySelector('form');
const completedContainerEl = document.querySelector('.completedContainer');
formEl.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e);
  const userInput = inputEl.value;
  const div = document.createElement('div');
  div.classList.add('todoItem');
  div.innerHTML = `<p>${userInput}</p> <button class='completed'><i class="fa fa-check" aria-hidden="true"></i></button>`;
  containerEl.append(div);
  // ! clear value HOW?
  inputEl.value = '';
});

containerEl.addEventListener('click', e => {
  const currentElement = e.target;
  if (currentElement.nodeName !== 'BUTTON') {
    console.log('Not a button');
    return;
  }
  console.log(currentElement.parentElement);
  if (currentElement.getAttribute('class') === 'completed') {
    currentElement.parentElement.classList.remove('todoItem');
    currentElement.parentElement.classList.add('completedItem');
    currentElement.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    currentElement.classList.remove('completed');
    currentElement.classList.add('remove');
  } else {
    currentElement.parentElement.remove();
  }
});
