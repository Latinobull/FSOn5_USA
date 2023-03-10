const form = document.querySelector('form');
const h1El = document.querySelector('h1');
function handleSubmit(e) {
  e.preventDefault();
  // const {
  //   elements: { name },
  // } = e.currentTarget;
  // const name = e.target.children[0];
  console.log(name);
  h1El.textContent = name.value;
  name.value = '';
}

form.addEventListener('submit', handleSubmit);
