const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

function handleSubmit(e) {
  e.preventDefault();
  const user = { email: email.value, password: password.value };
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
}

form.addEventListener('click', handleSubmit);
